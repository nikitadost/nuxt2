<template>
  <main class="todoList">
    <TodoAdd @fetch="getTodos"/>
    <TodoFilters :info="info" :filter="currentFilter" @changeFilter="changeFilter"/>
    <ul class="todoList__items">   
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @fetch="getTodos"/>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { TodoStatus, Todo, TodoInfo } from '~/types/todo'
import TodoItem from '~/components/Todolist/TodoItem.vue'
import TodoFilters from '~/components/Todolist/TodoFilters.vue'
import TodoAdd from '~/components/Todolist/TodoAdd.vue'

interface TodoListData {
  todos: Todo[];
  info: TodoInfo; 
  currentFilter: TodoStatus;
  loading: boolean;
}

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
    TodoFilters,
    TodoAdd
  },
  data(): TodoListData {
    return {
      todos: [],
      info: {
        all: 0,
        inWork: 0,
        completed: 0,
      },
      currentFilter: TodoStatus.ALL,
      loading: false,
    }
  },
  async asyncData({ $axios, query, redirect, route }) {
    let filter : TodoStatus = TodoStatus.ALL

  if(process.client) {
    const savedFilter = localStorage.getItem('todoFilter') as TodoStatus | null
    if(savedFilter) {
      filter = savedFilter
    }
  }

  if(!query.filter && process.client && filter) {
    return redirect({
      path: route.path,
      query: { filter: filter }
    })
  }

  if(query.filter) {
    filter = query.filter as TodoStatus
  }

    const response = await $axios.$get('/todos', { params: { filter: filter } }); 
      console.log(response.data)
      return {todos: response.data, info: response.info, currentFilter: filter}
    },
    methods: {
      changeFilter(filter: TodoStatus) {
        if(process.client) {
          localStorage.setItem('todoFilter', filter);
        }
        this.currentFilter = filter 
        this.$router.push({ query: { filter: filter } })
      },
      getTodos() {
        
        this.$axios.$get('/todos', { params: { filter: this.currentFilter } }).then(response => {
          this.todos = response.data
          this.info = response.info
        })
      },
    },
    watch: {
      currentFilter: {
        handler() {
          this.getTodos()
        }
      },
    },
    

})
</script>

<style lang="scss" scoped>
.todoList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  gap: 10px;
  &__items {
    width: 100%;
    max-width: 600px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}


</style>