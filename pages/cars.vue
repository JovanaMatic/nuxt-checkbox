<script setup>
  definePageMeta({
    title: 'Cars page',
    description: 'This is the cars page',
    middleware: ['fetch']
  })
  const search = useSearchStore()
  console.log(search.searchData)
</script>

<template>
  <div>
    <h1>Cars page</h1>
    <Filters />
  </div>
</template>


<style scoped>

</style>