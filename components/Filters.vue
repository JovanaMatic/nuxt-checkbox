<script setup>
  const route = useRoute()
  const zip = ref(route.query.location)
  const vehicle = ref(route.query.vehicle_condition)

  const handleFiltersOptions = () => {
    console.log(zip.value, vehicle.value)
    return navigateTo({
    name: 'cars',
    query: {
      location: zip.value,
      vehicle_condition: vehicle.value
    }
  })
  }
</script>

<template>
  <div class="side-container">
    <h2>Filters</h2>
    <form @submit.prevent>
      <p>Condition</p>
      <div class="col-condition" @change="handleFiltersOptions">
        <div>
          <label class="label-container">New
            <input type="radio" value="New" v-model="vehicle">
            <span class="checkmark"></span>
          </label>
        </div>

      <div>
        <label class="label-container">Used
         <input type="radio" value="Used" v-model="vehicle">
         <span class="checkmark"></span>
        </label>
      </div>
      </div>

      <label class="label-container">Zip
         <input type="number" v-model="zip" @keyup.enter="handleFiltersOptions">
        </label>
    </form>
  </div>
</template>

<style scoped>
  .col-condition {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>