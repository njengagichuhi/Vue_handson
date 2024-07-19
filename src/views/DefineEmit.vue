<script setup>
import { ref } from "vue";
import tabableTextarea from"@/components/tabableTextarea.vue"
let comment=ref('test value')
setTimeout(()=>{
    comment.value='its easy'

},2000)
</script>
<template>
 <tabableTextarea v-model="comment" style="width: 100%; height:300px"/>
</template>