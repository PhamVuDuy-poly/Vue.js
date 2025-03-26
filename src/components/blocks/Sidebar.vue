<script setup>

</script>

<template>
            <!-- <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/product">Product</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li> -->
            <div class="container p-4 text-light">
                <ul class="nav flex-column">
                    <h3>Menu</h3>
                    <li class="nav-item">
                        <router-link class="text-decoration-none text-light" to="/">+ Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text-decoration-none text-light" to="/product">+ Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="text-decoration-none text-light" to="/contact">+ Contact</router-link>
                    </li>
                </ul>
            </div>
            <!-- <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> -->

</template>

<style scoped>
    
</style>