<script setup>
    import {reactive} from "vue";
    const nhanvien = reactive({
        name: "Phạm Vũ Duy",
        vitri: "Hà Tây",
        work: "Tạp vụ bồi bàn",
        luong: "15 triệu",
        namkinhnghiem: 15,
    })
    const tinhthuong = ()=>{
        nhanvien.namkinhnghiem > 5 ? alert('Nhân viên được nhận thưởng') : alert('Nhân viên chưa đủ dk được nhận thưởng')
    }
    const listNV = reactive([
        {name: "Phạm Vũ Duy", vitri: "Hà Tây", work: "Tạp vụ bồi bàn", luong: "15 triệu", namkinhnghiem: 15,},
        {name: "Lê Danh Hiệp", vitri: "Nghệ Tĩnh", work: "game thủ", luong: "20 triệu", namkinhnghiem: 30,},
        {name: "Lê Chí Vinh", vitri: "Tp Hồ Chí Minh", work: "Bán hàng tạp hóa", luong: "78 triệu", namkinhnghiem: 4,},
    ])
    const inforNv = (hoten, vitri)=>{
        alert(` Thông tin nhân viên : 
        Họ tên: ${hoten}, 
        Vitri: ${vitri}`)   
    }
</script>

<template>
    <div class="container-fluid">
        <div class="3_bai">
            <span>
                Bài 1: 
               <h2>Thông tin nhân viên</h2>
                Họ tên: {{ nhanvien.name }} <br>  
                Vị trí: {{ nhanvien.vitri }}  <br>
                Công việc: {{ nhanvien.work }}  <br>
                Lương: {{ nhanvien.luong }}  <br>
                Năm kinh nghiệm: {{ nhanvien.namkinhnghiem }}  
            </span>
            <p>
                Bài 2: 

                <input type="text" name="" id="" v-model="nhanvien.vitri">
            </p>
            <p>
                Bài 3: 
                    <button @click="tinhthuong" class="btn btn-info" >Tính thưởng</button>
            </p>
    </div>
    <div class="bai4">
        <table class="table table-striped table-bordered text-center">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ tên</th>
                    <th>Vị trí</th>
                    <th>Công việc</th>
                    <th>Lương</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody v-for="(list, index) in listNV" :key="index" >
                <tr>
                    <td>{{ index+1 }}</td>
                    <td>{{ list.name }}</td>
                    <td>{{ list.vitri }}</td>
                    <td>{{ list.work }}</td>
                    <td>{{ list.luong }}</td>
                    <td>{{ list.namkinhnghiem }}</td>
                    <td><button class="btn btn-success" @click="inforNv(list.name, list.vitri)">infor NV</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    

</template>

<style scoped>

</style>