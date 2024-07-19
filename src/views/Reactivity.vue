<script setup>
import {watch, ref} from 'vue';

import { useStorage } from '@/composables/useStorage';
let food=useStorage('food','taccos');
let age=useStorage('age',11);
useStorage('obj',{one: 'one'})

//let food =ref(localStorage.getItem('food'))
//let age =ref(localStorage.getItem('age'))
//watch(food,(val) => {
//    write('food' ,val)
//});
//watch(age,(val) => {
//    write('age' ,val)
////})
//setTimeout (()=>{
//food.value='changed'
//age.value='you lied'
//},2000);
//function write(key, val){
//    localStorage.setItem(key,val)

//}

</script>
<template>
    <main>
        <p>
            what is your favourite food? <input v-model="food" type="text" >
        </p>
        <p>
            How old are you? <input v-model="age" type="text">
        </p>

        
    </main>
</template>