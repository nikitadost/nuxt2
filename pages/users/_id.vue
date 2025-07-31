<template>
  <div>
    <h1>Bob</h1>
  </div>
</template>

<script>
export default {
  name: 'User',
  validate({ params }) {
    const idCheck = /^\d+$/.test(params.id)
    if (!idCheck) {
      throw new Error('Invalid ID')
    }
    return true
  },
}
</script>