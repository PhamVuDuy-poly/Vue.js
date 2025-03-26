<script setup>
   import {ref, onMounted} from "vue";
   import axios from "axios";

   const students = ref({})
   const error = ref(null)
   const loading = ref(true)

   const fetchStudents = async()=>{
        try {
            const res = await axios.get('http://localhost:3000/students')
            students.value = res.data
        } catch (err) {
            error.value = "Loi"+err.message
        }finally{
            loading.value = false
        }
   }
   const confirmDel = async(id)=>{
    if(window.confirm('Ban chac muon xoa sv nay chu??')){
        await deleteStudent(id)
    }
   }
   const deleteStudent = async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/students/${id}`)
            students.value = students.value.filter((student)=>student.id!==id)
        } catch (err) {
            error.value = "Loi"+err.message
        }
   }

   onMounted(fetchStudents)
</script>

<template>
        <div class="container">
            <p v-if="error">{{ error }}</p>
            <p v-if="loading">Dang loadding .......</p>
            <div class="my-2" v-if="!loading && !error">
                <h1 class="text-center text-dark">Danh Sach Sinh Vien</h1>
                <router-link to="/students" class="btn btn-info">Them sv</router-link>
                <table class="table table-light table-bordered table-hover text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>Namwe</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Images</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody v-for="(student, index) in students" :key="index">
                        <tr>
                            <td>{{ index++ }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.age }}</td>
                            <td>{{ student.email }}</td>
                            <td><img  style="max-width: 100px; max-height: 70px;" :src="student.images" alt="anhlloi"></td>
                            <td>
                                <router-link :to="`/students/${student.id}`" class="mx-2 btn btn-primary">Update</router-link>
                                <button type="submit" class="btn btn-danger" @click="confirmDel(student.id)">Xoa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<style scoped>

</style>