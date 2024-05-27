<script setup>
const zip = ref(null)
const vehicle = ref(null)

const handleForm = () => {
  return navigateTo({
    name: 'cars',
    query: {
      zip: zip.value,
      vehicle_condition: vehicle.value
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="box">
    <form @submit.prevent="handleForm">
      <div class="col-1">
        <label for="search">Search ZIP:</label>
        <input type="number" placeholder="Search ZIP..." name="search" v-model="zip">
      </div>

      <div class="col-2">
        <p>Vehicle condition:</p>
        <div>
          <label class="label-container">New
            <input type="radio" name="radio" checked="checked" value="new" v-model="vehicle">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div>
        <label class="label-container">Used
         <input type="radio" name="radio" value="used" v-model="vehicle">
         <span class="checkmark"></span>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
</template>

<style scoped>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .box {
    outline: 1px solid black;
    border-radius: 10px;
    width: 40%;
    height: 250px;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
  }

  .col-2 {
    padding-top: 20px;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;
    border-color: #2b88b7;
    background-color: #2b88b7;
    cursor: pointer;
    max-width: 200px;
    margin-top: 20px;
    color: white;
    font-size: 16px;
  }

  /* Style radiobutton */
   /* Container */
  .label-container {
    display: block;
    position:relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

   /* Hide the browser's default radio button */
  .label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

   /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

   /* On mouse-over, add a grey background color */
  .label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .label-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .label-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .label-container .checkmark:after {
 	  top: 9px;
	  left: 9px;
	  width: 8px;
	  height: 8px;
	  border-radius: 50%;
    background: white;
  }

</style>