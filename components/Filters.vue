<script setup>
  const route = useRoute()
  const zip = ref(route.query.zip)
  const vehicle = ref(route.query.vehicle_condition)
</script>

<template>
  <div class="side-container">
    <h2>Filters</h2>
    <form>
      <p>Condition</p>
      <div class="col-condition">
        <div>
          <label class="label-container">New
            <input type="radio" name="radio" value="new" v-model="vehicle">
            <span class="checkmark"></span>
          </label>
        </div>

      <div>
        <label class="label-container">Used
         <input type="radio" name="radio" value="used" v-model="vehicle">
         <span class="checkmark"></span>
        </label>
      </div>
      </div>

      <label class="label-container">Zip
         <input type="number" name="zip" value="zip" v-model="zip">
        </label>
    </form>
  </div>
</template>

<style scoped>
  .side-container {
    width: 200px;
    background-color: #f1ecec;
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;
  }

  .col-condition {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>