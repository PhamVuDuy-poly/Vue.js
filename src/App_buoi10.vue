<script setup>
    import Header from './components/blocks/Header.vue';
    import Footer from './components/blocks/Footer.vue';
    import Sidebar from './components/blocks/Sidebar.vue';
</script>

<template>
    <header class="bg-danger text-center py-3">
        <!-- Cach 1 -->
        <!-- <Header></Header> -->
         <!-- Cach 2 -->
        <Header/>
    </header>
    
    <div class="row">
        <aside class="col-3 p-4 fs-2 bg-dark"> 
              <Sidebar/>  
        </aside>
        <main class="col-9 bg-light">
            <router-view></router-view>
        </main>
    </div>

    <footer class="bg-warning text-center text-light py-3">
            <Footer/>
            <Footer/>
    </footer>
</template>

<style scope>
         
</style>