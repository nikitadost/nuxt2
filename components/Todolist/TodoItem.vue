<template>
  <li class="todo">
    <div class="todo__input-container">
      <input
        type="checkbox"
        v-model="isDone"
        @change="changeTodoStatus"
        :disabled="isEditing"
      />
      <input
        type="text"
        v-model="title"
        class="todo__input"
        :readonly="!isEditing"
        :class="{ 'todo__input--editing': isEditing }"
      />
    </div>
    <div class="todo__buttons">
      <div class="todo__buttons-edit">
        <img
          src="~/assets/icons/edit.svg"
          width="20"
          height="20"
          alt="edit"
          class="todo-icon"
          @click="startEdit"
          v-if="!isEditing"
        />
        <img
          src="~/assets/icons/save.svg"
          width="20"
          height="20"
          alt="save"
          class="todo-icon"
          @click="saveTodo"
          v-if="isEditing"
        />
        <img
          src="~/assets/icons/cancel.svg"
          width="20"
          height="20"
          alt="cancel"
          class="todo-icon"
          @click="cancelEdit"
          v-if="isEditing"
        />
      </div>
      <img
        src="~/assets/icons/delete.svg"
        width="20"
        height="20"
        alt="delete"
        class="todo-icon"
        @click="deleteTodo"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "~/types/todo";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      title: this.todo.title,
      isDone: this.todo.isDone,
    };
  },
  emits: ["fetch"],
  methods: {
    startEdit() {
      this.isEditing = true;
    },
    cancelEdit() {
      this.title = this.todo.title;
      this.isEditing = false;
    },
    async updateTodo() {
      try {
        await this.$axios.put(`/todos/${this.todo.id}`, {
          title: this.title,
          isDone: this.todo.isDone,
        });
        this.$emit("fetch");
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },
    saveTodo() {
      this.updateTodo();
      this.isEditing = false;
    },
    async deleteTodo() {
      try {
        await this.$axios.delete(`/todos/${this.todo.id}`);
        this.$emit("fetch");
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
    changeTodoStatus() {
      this.todo.isDone = !this.todo.isDone;
      this.updateTodo();
    },
  },
});
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  width: 100%;
  height: 50px;

  &:last-child {
    border-bottom: none;
  }
  &__input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  &__input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 600;
    &--editing {
      border: 1px solid #eee;
      border-radius: 5px;
    }
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-edit {
      display: flex;
      align-items: center;
    }
  }
  &-icon {
    cursor: pointer;
  }
}
</style>
