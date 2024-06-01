<script setup>
  defineProps({
    error: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="error-page">
    <h1>Ooopsy you found our error page</h1>
    <p>{{ error.message }}</p>
    <p>{{ error.status }}</p>
    <p>Go back to safe zone: 
      <NuxtLink to="/">Go to Homepage</NuxtLink>
    </p>
  </div>
</template>

<style scoped>
  .error-page {
    padding: 10px;
  }
</style>