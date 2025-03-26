<script setup>
    import Header from './components/blocks/Header.vue';
    import Sidebar from './components/blocks/Sidebar.vue'
    import Footer from './components/blocks/Footer.vue';
    import Content from './components/pages/Content.vue';
    import Countclick from './components/buttons/Countclick.vue';
    
</script>

<template>
    <header class="bg-primary py-3">
        <!-- Cach 1 -->
        <!-- <Header></Header> -->
         <!-- Cach 2 -->
        <Header/>
    </header>
    
    <div class="row">
        <aside class="col-3 bg-success"> 
            <Sidebar/>
        </aside>
        <main class="col-9 bg-warning">
            <Content/>
            <Countclick/>
            <Countclick/>
            <Countclick/>
            <Countclick/>
            <Countclick/>
        </main>
    </div>

    <footer class="bg-secondary text-light py-3">
            <Footer/>
    </footer>
</template>

<style scope>
         
</style>