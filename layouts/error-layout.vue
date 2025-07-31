<template>
  <div>
    <div class="error_layout_message">
      OOPS. Some error occured
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
export default {
  name: "error-layout",
};
</script>

<style scoped>
.error_layout_message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
}
</style>