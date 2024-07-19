<script setup>
import ProfileDisplayprops from '../components/ProfileDisplayprops.vue'
</script>
<template>
    <div class="page-wrapper">
        <h2>welcome to props example page</h2>
        <ProfileDisplayprops 
        firstname="john"
        lastname="kamau"
        />
        <ProfileDisplayprops 
        firstname="ill"
        lastname="william"
        />
    </div>
</template>