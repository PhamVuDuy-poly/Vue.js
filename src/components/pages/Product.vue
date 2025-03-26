<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    const products = ref([]);
    const loading = ref(true)
    const error = ref(null)

    onMounted( async() => {
        try {
            const res = await axios.get('http://localhost:3000/products');
            products.value = res.data
        } catch (err) {
            error.value = "lỗi API "+ err.message  
        }finally{
            loading.value = false;
        }
    })
</script>

<template>
            <div class="container p-3 text-dark">
                <h1 class="text-center">DANH SÁCH SẢN PHẨM</h1>
                <p v-if="loading">Đang tải dữ liệu.......</p>
                <p v-if="error">{{ error }}</p>
                <p v-if="!loading && !error">
                    <table class="table table-border table-striped table-info table-hover ">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <!-- <th>Id</th> -->
                                <th>Ma sp</th>
                                <th>Tên sp</th>
                                <th>Mô tả</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody v-for="(product, index) in products" :key="index">
                            <tr>
                                <td>{{ index++ }}</td>
                                <td>{{ product.sku }}</td>
                                <td>{{ product.title }}</td>
                                <td>{{ product.content }}</td>
                                <td>{{ product.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
            </div>
</template>

<style scoped>
     
</style>