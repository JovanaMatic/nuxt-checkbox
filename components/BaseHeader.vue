<template>
  <div>
    <div>
      <nav>
        <ul>
          <li class="active">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .active {
    background-color: #04AA6D;
  }

  nav {
    position: fixed;
    width: 100%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }
</style>