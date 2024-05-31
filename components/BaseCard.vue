<script setup>
  const props = defineProps({
    car: {
      type: Object,
      required: true
    }
  })
</script>
<template>
  <div class="card">
    <h3>{{ car.make }} {{ car.model }}</h3>
    <p>Year: {{ car.year }}</p>
    <p>Price: {{ car.price }}</p>
    <p>Zip: {{ car.location.zip }}</p>
    <p>Condition: {{ car.vehicle_condition }}</p>
    <div>
      <img :src="`https://img.vast.com/apollo/${car.id}/1/640x-?format=webp`" alt="car image">
    </div>
  </div>
</template>

<style scoped>
  .card {
    background-color: #f1ecec;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>