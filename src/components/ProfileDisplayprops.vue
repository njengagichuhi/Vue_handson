<script setup>
import {defineProps} from 'vue'
defineProps({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
})
</script>
<template>
    <div class="profile-wraper">
        <h1>
            profile information
        </h1>
        <div class="infor-section">
            <h4>first name:{{firstname}}</h4>
            <h4>last name:{{lastname}}</h4>
        </div>
    </div>
</template>
<style>
    .profile-wraper{
        background-color: whitesmoke;
        padding: 2rem;
        margin-top: 2%;
    };
    .infor-section{
        display:flex;
        gap: 3rem;
        width: 70%;
        margin-top: 1%;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
    }
</style>
