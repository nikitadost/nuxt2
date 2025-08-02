<template>
  <div class="error_layout">
    <div id="error">
      <div class="error_status">{{ error.statusCode }}</div>
      <div class="error_message">{{ error.message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: "error-layout",
  props: ["error"],
};
</script>

<style scoped>
#error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.error_status {
  font-size: 48px;
}
.error_message {
  font-size: 24px;
}
</style>
