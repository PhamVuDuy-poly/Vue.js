<script setup>
    import {ref} from 'vue';
    const score = ref(0)

    const countScore = ()=>{
        score.value++
    }
</script>

<template>
        <button @click="countScore" class="btn btn-info">Count click {{ score }}</button>
</template>

<style scoped>
     
</style>