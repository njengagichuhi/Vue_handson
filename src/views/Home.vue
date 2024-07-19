<script setup>

   
  import { RouterLink } from 'vue-router';  
  
   
  
</script>

<template>
  <div class="wraper">
    <nav>
      <router-link to="/props" class="link">Props usage example</router-link>
      <router-link to="/slots" class="link">slots usage example</router-link>

    </nav>
  </div>
</template>
<style > 
.wraper{
  text-align: center;
  margin-top: 5%;
}
.nav{
  display: grid;
  gap: 5rem;
}
</style>

