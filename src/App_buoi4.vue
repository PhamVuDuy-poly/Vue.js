<script setup>
  // Code js ở đây
  import { ref , reactive, computed } from 'vue';

  const name = ref('Phạm Vũ Duy')

  const age = ref(18)

  const year = computed(()=>2024-age.value)

  const reName = ()=>{
    name.value = "Gustave Doré"
  }
  
  const imgUrl = ref('https://lttarot.com/wp-content/uploads/2022/11/Gustave-Dore-Tarot-6-600x600.jpg')
  // Bài tập 
  // Khai báo 2 biến: số lượng, giá tiền
  // Hiện thiện ra màn hình giá trị của 2 biến
  // thêm 2 input để nhập lại giá trị số lượng, giá tiền
  // cho 1 biến tổng tiền (số lượng * giá tiền): hiện thị ra màn hình
  // cập nhật khi thay đổi giá tiền, số lượng
    const count = ref(1)
    const price = ref(1)
    const sum = computed(()=>(count.value*price.value))
    const name3 =  ref({color:'orange'})
</script>

<template>
  <!--  Code html o day -->
    <div class="container">
        <!-- binding 1 chiều nội suy -->
        <h1 v-bind:class="' name '">Họ tên: {{ name }}</h1>
        <h1 :class="' name '">Họ tên: {{ name }}</h1>
        <h1 v-bind:style="{color:'blue'}">Họ tên: {{ name }}</h1>
        <h1 v-bind:style="name3">Họ tên: {{ name }}</h1>
        <h1 :style="name3">Họ tên: {{ name }}</h1>
    
        <!-- binding 1 chiều sự kiện -->
        <button class="btn btn-info" @click="reName">Đổi tên</button>

        <!-- binding 1 chiều thuộc tính -->
         <img v-bind:src="imgUrl" alt="anhloi">
         <input type="text" v-model="imgUrl">

        <!-- binding 2 chiều nội suy -->
         <input type="text" v-model="name" id="">

         <h2>{{ age }}</h2>
         <h2>{{ year }}</h2>
         <input type="text" v-model="age">

    <!-- // Bài làm -->
        <p>Count: {{ count }}, Price: {{ price }}, Total: {{ sum }} </p>
         <input type="number" v-model="count">
         <input type="number" v-model="price">
        <input type="number" v-model="sum" id="">
    </div>
</template>

<style scoped>
     /* Code css o day  */
     .name{
        color: red;
        cursor: pointer;
     }
</style>