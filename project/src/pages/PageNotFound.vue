<template>
  <span class="text">The page you are looking for can't be found.</span>
  <br>
  <span class="number">404</span>
  <router-link class="link" to="/">Main</router-link>
</template>

<script>
</script>

<style scoped>
  * {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .text {
    font-size: 3rem;
    padding-top: 9rem;
  }

  .number {
    font-size: 5rem;
    padding-top: 8rem;
  }

  .link {
    font-size: 2rem;
    padding-top: 8rem;
  }
</style>
