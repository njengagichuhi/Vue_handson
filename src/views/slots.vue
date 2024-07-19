<script setup>
import ProfileDisplayslots from '../components/profileDisplayslots.vue';
</script>
<template>
    <ProfileDisplayslots>
        <template #biodata>
            <h4>first name: mike</h4>
            <h4>Last name: John</h4>

        </template>
        <template #secondaryinfo>
            <h4>first name: mike</h4>
            <h4>Last name: John</h4>

        </template>
        <template #optioninfo>
            <h4>first name: mike</h4>
            <h4>Last name: John</h4>

        </template>

        
    </ProfileDisplayslots>
    
</template>
<style scoped>
.page-wrapper{
width: 60%;
margin-left: auto;
margin-right: auto;
text-align: center ;
}
</style>>