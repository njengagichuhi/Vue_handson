<script setup>
import { ref } from 'vue';
import swal from 'sweetalert'
import {useFlash} from '../composables/useFlash'
  let {flash}= useFlash();
 let mesage= ref("Helloo,World");
    setTimeout(()=>{
        
      mesage.value="I have been changed";
    },2000);

  let doSomething=()=>{
    swal ('am home')
  };
   
    
  
   
  
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{message}}</p>
    <p>
      <input type="text" v-model="message"/>
      <button @click="{
        swal('success','hellooo','success')
      };">click me</button>
      <button @click="doSomething">Click</button>
      <button @click="flash('test','it works','info')">Clikk</button>
    </p>
  </main>
</template>

