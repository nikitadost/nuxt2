<template>
    <div class="filters">
        <span class="filter" v-for="filter in filters" :key="filter.value" :class="{'filter--active': currentFilter === filter.value}" @click="changeFilter(filter.value)" >
        {{ filter.label }} {{ info[filter.value] }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TodoStatus, TodoInfo } from '~/types/todo'

export default defineComponent({
    name: 'TodoFilters',
    props: {
        info: {
            type: Object as PropType<TodoInfo>,
            required: true
        },
        filter: {
            type: String as PropType<TodoStatus>,
            required: true
        }
    },
    data() {
        return {
            currentFilter: this.filter,
            filters: [
                { value: TodoStatus.ALL, label: 'Все' },
                { value: TodoStatus.IN_WORK, label: 'В работе' },
                { value: TodoStatus.COMPLETED, label: 'Сделано' },
            ],
        }
    },
    emits: ['changeFilter'],
    methods: {
      changeFilter(filter: TodoStatus) {
        this.$emit('changeFilter', filter)
        this.currentFilter = filter
      },
    }
})
</script>

<style lang="scss" scoped>

.filters {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .filter {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 30px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    caret-color: transparent;
    transition: color 0.3s ease;
    
    &--active {
      color: rgb(51, 150, 241);
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: rgb(42, 148, 235);
        animation: slideIn 0.3s ease forwards;
      }
    }
    @keyframes slideIn {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}
  }
  

</style>