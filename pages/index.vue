<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Nat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id.value">
          <td>{{ user.name.first }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.nat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  computed: {
    users() {
      return this.$store.getters["getUsers"];
    },
  },
});
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}
</style>
