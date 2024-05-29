<script setup>
  definePageMeta({
    title: 'Cars page',
    description: 'This is the cars page',
    middleware: ['fetch']
  })
  const search = useSearchStore()
</script>

<template>
  <div class="main-container">
    <div class="filters">
      <Filters />
    </div>
    <div class="cars-container">
      <BaseCard v-for="car in search.searchData" :key="car.vin" :car="car"/>
    </div>
  </div>
</template>


<style scoped>
  .main-container {
    padding: 20px;
    display: flex;
    padding-top: 60px;
  }

  .cars-container {
    width: 85%;
    margin-left: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    column-gap: 13px;
    row-gap: 15px;
  }

  .filters {
    width: 15%;
    background-color: #f1ecec;
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;
    height: 100vh;
  }
</style>