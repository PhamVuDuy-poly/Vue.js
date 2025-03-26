<script setup>  
import { ref, onMounted } from 'vue';  
import { useRoute } from 'vue-router';  
import axios from 'axios';  

const route = useRoute();  

const showStudent = ref({});  

// Hàm tải thông tin sinh viên từ API  
const fetchStudents = async () => {  
    try {  
        const res = await axios.get(`http://localhost:3000/students/${route.params.id}`);  
        showStudent.value = res.data;  
    } catch (err) {  
        alert("Lỗi khi tải dữ liệu sinh viên: " + err.message);  
    }  
}  

// Tải thông tin sinh viên khi component được gắn  
onMounted(fetchStudents);  
</script>  

<template>  
    <div class="container my-5">  
        <div class="row justify-content-center">  
            <div class="col-md-6">  
                <h1 class="text-center mb-4 text-secondary">Thông tin sinh viên</h1>  
                <form @submit.prevent="showStudent" class="card shadow p-4">  
                    <div class="form-group mb-3">  
                        <label for="name" class="form-label">Họ và tên</label>  
                        <input type="text" id="name" v-model="showStudent.name" class="form-control" placeholder="Nhập họ và tên" required>  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="age" class="form-label">Tuổi</label>  
                        <input type="number" id="age" v-model="showStudent.age" class="form-control" placeholder="Nhập tuổi">  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="email" class="form-label">Email</label>  
                        <input type="email" id="email" v-model="showStudent.email" class="form-control" placeholder="Nhập email" required>  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="images" class="form-label">Hình ảnh</label>  
                        <input type="url" id="images" v-model="showStudent.images" class="form-control">  
                    </div>  
                    <div class="d-flex justify-content-between">  
                        <button type="submit" class="btn btn-outline-success">Thông tin</button>  
                        <router-link to="/" class="btn btn-secondary">Quay lại</router-link>  
                    </div>  
                </form>  
            </div>  
        </div>  
    </div>  
</template>  

<style scoped>  
.error {  
    font-size: 0.9em;  
}  
</style>