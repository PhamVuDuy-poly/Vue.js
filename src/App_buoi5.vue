<script setup>
    import { ref, reactive } from 'vue'
    const score = ref(5)
    const isActive = ref(true)
    const swap = ()=>{
        isActive.value = !isActive.value
    }
// <!-- v-for mảng -->
const listStudent = reactive([
    "Phạm Vũ Duy",
    "Phạm Hoài Nam",
    "Lê Danh Hiệp"
])
// <!-- v-for object -->
const teacher = reactive({
    name: "Lê Chí Vinh",
    gender: "Nam",
    isActive: true
})
// <!-- v-for mảng(obj) -->
const listFood = reactive([
    {id: 1, code: "BA123", name: "Cơm Gạo", stock: 17},
    {id: 2, code: "GH475", name: "Bánh ú nu", stock: 34},
    {id: 3, code: "KH483", name: "Kem cameramen", stock: 1235},
    {id: 4, code: "JK8778", name: "Kem ok", stock: 0},
])
const listNy = reactive([
    {id: 1, name: "Nguyễn Trà Giang", image : "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg", hometown: "Hà Nội", address: "đội 12b, hòa hợp", year: 2003, status: 0}, 
    {id: 2, name: "Trần Minh Phương", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-2.jpg", hometown: "Đà Nẵng", address: "25 Lý Thường Kiệt", year: 2002, status: 1},
    {id: 3, name: "Lê Hải Nam", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-3.jpg", hometown: "Hải Phòng", address: "44 Phố Cổ", year: 2008, status: 0},
    {id: 4, name: "Phạm Ngọc Linh", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-4.jpg", hometown: "Huế", address: "78 Trần Phú", year: 2003, status: 1},
    {id: 5, name: "Hoàng Văn Tú", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-5.jpg", hometown: "Đà Lạt", address: "12 Đặng Thai Mai", year: 2001, status: 0},
    {id: 6, name: "Nguyễn Thị Thanh", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-6.jpg", hometown: "Nha Trang", address: "67 Nguyễn Du", year: 2004, status: 1},
    {id: 7, name: "Phạm Quang Hưng", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-7.jpg", hometown: "Hà Nam", address: "30A Phạm Văn Đồng", year: 2003, status: 0},
    {id: 8, name: "Vũ Thị Mai", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-8.jpg", hometown: "Nam Định", address: "45B Lý Thái Tổ", year: 2002, status: 1},
    {id: 9, name: "Đinh Phương Nam", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-9.jpg", hometown: "Quảng Ninh", address: "23A Nguyễn Huệ", year: 2009, status: 0},
    {id: 10, name: "Nguyễn Minh Khôi", image: "https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-10.jpg", hometown: "Bình Định", address: "88 Hùng Vương", year: 2001, status: 1},
    {id: 11, name: "Bùi Thị Thảo", image: "", hometown: "Cần Thơ", address: "34 Lê Lợi", year: 2002, status: 0}
]);
const defaultimg = ref("https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_640.png");


</script>

<template>
        
        <!-- <h1>Result: {{ score }}</h1>
        <h2 v-if="score >= 9">Giỏi</h2>
        <h2 v-else-if="score >= 7">Khá</h2>
        <h2 v-else-if="score >= 5">Trung bình</h2>
        <h2 v-else-if="score < 0">Có kwt điểm đấy mà xem</h2>
        <h2 v-else>Yếu</h2>
 -->
        <!-- <input type="number" step="any" v-model="score"> -->

        <!-- So sánh v-if và v-show -->
        
            <!-- <div class="container">
                <button class="btn btn-outline-info" @click="swap">{{ isActive ? "Ẩn" : "Hiện" }} thông báo </button>
            v-if
            <p v-if="isActive" class="alert alert-warning" >
                Trạng thái của isActive là {{ isActive }}
            </p>
            

            v-show
            <p v-show="isActive" class="alert alert-warning" >
                Trạng thái của isActive là {{ isActive }}
            </p>
            </div> -->
        
<!-- Vòng lặp trong Vue -->

<!-- v-for mảng -->

<!-- <div class="">
    <table class="table">
        <thead>
                <th>STT</th>
                <th>Họ tên</th>
        </thead>
        <tbody v-for="(student, index) in listStudent" :key="index" :value="student">
            <tr>
                <td>{{ index+1 }}</td>
                <td>{{ student }}</td>
            </tr>
        </tbody>
    </table>
</div> -->

<!-- v-for object -->

<!-- <div class="">
    <table class="table">
        <thead>
                <th>Key</th>
                <th>Value</th>
        </thead>
        <tbody v-for="(key, value) in teacher" :key="key" :value="value">
            <tr>
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </tbody>
    </table>
</div> -->
<!-- v-for mảng(obj) -->

<!-- <div>
    <table class="table table-table-stripped table-hover">
        <thead class="table table-primary">
            <th>STT</th>
            <th>ID</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
        </thead>
        <tbody v-for="(food, index) in listFood" :key="index">
            <tr>
                <td>{{ index+1 }}</td>
                <td>{{ food.id }}</td>
                <td>{{ food.code }}</td>
                <td>{{ food.name }}</td>
                <td>{{ food.stock }}</td>
                <td>{{ food.stock > 0 ? "Còn hàng" : "Hết hàng" }}</td>
            </tr>
        </tbody>
    </table>
</div> -->

<!-- Cho 1 danh sách người yêu: họ tên, hình ảnh (url), quên quán, địa chỉ, năm sinh, trạng thái(boolean),
    Hiện thị ra màn hình danh sách: tên, hình ảnh, quê quán, địa chỉ, tuổi, trạng thái
    Nếu tuổi < 18 thì đánh đỏ tuổi
    new Date().getFullYear() hàm năm hiện tại
    Nếu hình ảnh trống, thì thay thế bằng hình ảnh mặc định
-->




<div class="container-fluid mt-4">
    <h2 class="text-center mb-4">Thông Tin Người Yêu</h2>
    <table class="table table-striped table-hover table-bordered border-primary text-center align-middle w-100">
        <thead class="table-warning text-primary">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Hometown</th>
                <th>Address</th>
                <th>Year</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(Ny, index) in listNy" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ Ny.name }}</td>
                <td><img :src="Ny.image ? Ny.image : defaultimg" class="img-thumbnail" alt="anhloi"></td>
                <td>{{ Ny.hometown }}</td>
                <td>{{ Ny.address }}</td>
                <td :style="{ color: (( 2024 - Ny.year) < 18 ? 'red' : '') }">{{ Ny.year }}</td>
                <td>{{ Ny.status == 0 ? "Chia tay" : "Vẫn trong 1 mqh nào đó" }}</td>
            </tr>
        </tbody>
    </table>
</div>



</template>

<style scoped>
/* Đảm bảo bảng chiếm toàn bộ màn hình */
.container-fluid {
    width: 100%;
    padding: 0 20px;
}

h2 {
    font-weight: bold;
    color: #007bff;
    text-transform: uppercase;
}

/* Định dạng bảng để chiếm toàn bộ chiều rộng */
.table {
    width: 100%;
    max-width: 100%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
}

/* Định dạng hàng và cột */
.table thead th {
    font-weight: bold;
    font-size: 1.1em;
}

.table-hover tbody tr:hover {
    background-color: #ffe0b3;
    transition: background-color 0.3s ease;
}

.img-thumbnail {
    width: 150px;
    height: auto;
    border-radius: 8px;
}

.table td, .table th {
    color: #333;
    padding: 15px;
}


</style>