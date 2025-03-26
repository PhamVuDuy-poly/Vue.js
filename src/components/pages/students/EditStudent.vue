<script setup>  
import { ref, onMounted } from 'vue';  
import { useRoute, useRouter } from 'vue-router';  
import axios from 'axios';  

const route = useRoute();  
const router = useRouter();  

const editingStudent = ref({});  
const errors = ref({});  

const fetchStudents = async()=>{
    try {
        const res = await axios.get(`http://localhost:3000/students/${route.params.id}`)
        editingStudent.value = res.data
    } catch (err) {
        errors.value = "Loi API"+err.message
    }
}
const updateStudent = async()=>{
    errors.value = checkForm(editingStudent.value)
    if(Object.keys(errors.value).length ===0){
        await axios.put(`http://localhost:3000/students/${route.params.id}`, editingStudent.value)
        alert("Chinh sua thanh cong!!")
        router.push('/')
    }else{
        alert('Loi vali')
    }
}
function checkForm({name, age, email, images}) {  
    const errors = {};  

    if (name.trim() === '' || !/^[A-Za-z\s\d\p{L}]+$/u.test(name)) {  
        errors.name = 'Tên phải là chuỗi ký tự và không được để trống.';  
    }  

    if (age <= 0 || age >= 100) {  
        errors.age = 'Tuổi phải là số nguyên lớn hơn 0 và nhỏ hơn 100.';  
    }  
    if(!/^\S+@\S+\.\S+$/.test(email)){
      errors.email = "Email phải hợp lệ!";
    }

        if (!images.startsWith("http://") && !images.startsWith("https://")) {
            errors.images = "Ảnh phải là một đường link hợp lệ.";
        }
    return errors;  
}   

onMounted(fetchStudents);  
</script>  

<template>  
    <div class="container my-5">  
        <div class="row justify-content-center">  
            <div class="col-md-6">  
                <h1 class="text-center mb-4 text-secondary">Cập nhật sinh viên</h1>  
                <form @submit.prevent="updateStudent" class="card shadow p-4">  
                    <div class="form-group mb-3">  
                        <label for="name" class="form-label">Họ và tên</label>  
                        <input type="text" id="name" v-model="editingStudent.name" class="form-control" placeholder="Nhập họ và tên" required>  
                        <span class="error" :style="{color: 'red'}" v-if="errors.name">{{ errors.name }}</span>  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="age" class="form-label">Tuổi</label>  
                        <input type="number" id="age" v-model="editingStudent.age" class="form-control" placeholder="Nhập tuổi">  
                        <span class="error" :style="{color: 'red'}" v-if="errors.age">{{ errors.age }}</span>  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="email" class="form-label">Email</label>  
                        <input type="email" id="email" v-model="editingStudent.email" class="form-control" placeholder="Nhập email">  
                        <span class="error" :style="{color: 'red'}" v-if="errors.email">{{ errors.email }}</span>  
                    </div>  
                    <div class="form-group mb-3">  
                        <label for="images" class="form-label">Hình ảnh</label>  
                        <input type="url" id="images" v-model="editingStudent.images" class="form-control">  
                        <span class="error" :style="{color: 'red'}" v-if="errors.images">{{ errors.images }}</span>  
                    </div>  
                    <div class="d-flex justify-content-between">  
                        <button type="submit" class="btn btn-outline-success">Cập nhật</button>  
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