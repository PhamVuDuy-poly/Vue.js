<script setup>
    // const point = 0
    // ref trong Vuejs
    import { ref , reactive } from 'vue';
    const point = ref(0)

    const addPoint = ()=>{
        point.value++
    }
    const name = ref('Phạm Vũ Duy')
    const reName = ()=>{
        name.value = "Lê Chí Vinh"
    }

    // Reactive trong Vue
    const profile = reactive({
        name: "Phạm Vũ Duy",
        gender: 'Nam',
        age: 18, 
        hometowm: 'Hoài Đức, Hà Nội'
    })
    const changeHome = ()=>{
        profile.hometowm = "Quảng Ninh, Luôn Cười:)()"
    }
</script>
<template>
    <div class="conatainer">
        <h1>Điểm của bạn là : {{ point }}</h1>
        <button @click="addPoint" class="btn btn-success">Thêm 1 điểm</button>

        <h2>Tên của bạn là: {{ name }}</h2>
        <button @click="reName" class="btn btn-info">Đổi tên</button>
        <hr>
        <h1 class="text-left">Thông tin cá nhân</h1>
        <h2>+  {{ profile.name }}</h2>
        <h2>+  {{ profile.gender }}</h2>
        <h2>+  {{ profile.age }}</h2>
        <h2 @click="changeHome">+  {{ profile.hometowm }}</h2>
    </div>
</template>