<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter(); // Sử dụng hook useRouter để quản lý điều hướng, VD như chuyển hướng user sau khi thêm thành công
const newUser = ref({ name: "", email: "" }) // Khởi tạo một biến reactive để luuw thông tin người dùng mới, mặc định với các trường rỗng.

const addUser = async () => {
    try {
        // Gửi yêu cầu đến POST đến API để thêm 1 user mới với dữ liệu trong newUser.
        await axios.post("http://localhost:3000/users", newUser.value);
        alert('Thêm người dùng thành công!!') // Hiện thị thông báo khi thêm thành công
        router.push("/"); // Sau khi thêm thành công chuyển hướng ngay sang danh sách user
    } catch (err) {
        // Xử lý lỗi nếu quá trình thêm thất bại Vd: DỮ LIỆU CỦA BẠN KO HỢP LỆ HAOCJW SERVER LỖI....
        alert('Lỗi khi thêm người dùng: ' + err.message)
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center text-secondary mb-4">Thêm người dùng</h1>
                <form @submit.prevent="addUser" class="card shadow p-4">
                    <div class="form-group mb-3">
                        <label for="name" class="form-label">Họ và tên</label>
                        <input type="text" id="name" v-model="newUser.name" class="form-control" placeholder="Nhập họ và tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" v-model="newUser.email" class="form-control" placeholder="Nhập email" required>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn btn-outline-success">Thêm</button>
                        <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>