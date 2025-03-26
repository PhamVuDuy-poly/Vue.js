<script setup>
   import {ref} from 'vue';
   import { useRouter } from 'vue-router';
   import axios from 'axios';

   const newStudents = ref({name: "", age: null, email: "", images: ""})
   const router = useRouter()
   const errors = ref({})

   const addStudents = async()=>{
        try {
            await axios.post(`http://localhost:3000/students`, newStudents.value)
            alert('Them moi thanh con!!!')
            router.push('/')
        } catch (err) {
            errors.value = "LOI ko them dc sv"+err.message
        }
   }
</script>

<template>
        <div class="container my-5">
            <div class="row justify-content-center" >
                <div class="col-md-6">
                    <div class="card shadow p-3">
                        <form action="" @submit.prevent="addStudents" method="post">
                            <div class="form-group mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your name" v-model="newStudents.name" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="age" class="form-label">Age</label>
                                <input type="number" name="age" id="age" placeholder="Your age" v-model="newStudents.age" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" id="email" placeholder="Your email" v-model="newStudents.email" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <label for="images" class="form-label">Images</label>
                                <input type="url" name="images" id="images" placeholder="Your images" v-model="newStudents.images" class="form-control">
                            </div>
                            <div class="d-flex justify-content-between">
                                <button type="submit" class="btn btn-info">Them sv</button>
                                <router-link to="/" class="btn btn-secondary">Back</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>