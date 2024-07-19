<script setup>

</script>
<template>
    <div class="profile-wraper">
        <div class="info-section">
            <slot name="biodata"></slot>
        </div>
        <div class="info-section">
            <slot name="secondaryinfo"></slot>
        </div>
        <div class="info-section">
            <slot name="optioninfo"></slot>
        </div>

    </div>
    
    
</template>
<style scoped>
.profile-wraper{
    background-color: whitesmoke;
    padding: 2rem;
    margin-top: 2%;
    text-align: center
};
.info-section{
    display: flex;
    gap: 3rem;
    width: 7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1%;
    justify-content: space-between;

}

</style>