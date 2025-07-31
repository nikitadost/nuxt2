<template>
    <div class="todoContainer">
    <div class="todoAdd">
        <textarea class="todoAdd__textarea" type="text" v-model="title" placeholder="Задача для выполнения" />
        <button class="todoAdd__button" @click="addTodo">Добавить</button>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'TodoAdd',
    data () {
    return {
        title: '',
    }
},
emits: ['fetch'],
methods: {
    async addTodo() {
        await this.$axios.post('/todos', {
            title: this.title,
            isDone: false
        })
        this.$emit('fetch')
        this.title = ''
    }
}})
</script>

<style lang="scss" scoped>
.todoContainer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.todoAdd {
    display: flex;
    gap: 8px;
    width: 100%;
    
    &__textarea {
        flex: 1;
        padding: 10px 12px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 14px;
        line-height: 1.4;
        resize: none;
        height: 80px;
        transition: all 0.2s ease;
        
        &:focus {
            outline: none;
            border-color: #4a90e2;
            box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
        }
        
        &::placeholder {
            color: #999999;
        }
    }
    
    &__button {
        width: 120px;
        height: 60px;
        border: none;
        border-radius: 6px;
        background: #4a90e2;
        color: white;
        font-size: 20px;
        font-weight: 300;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
            background: #3a7bc8;
        }
        
        &:active {
            transform: scale(0.96);
        }
    }
}
</style>