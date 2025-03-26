import { createRouter, createWebHistory } from "vue-router";    
import Home from "@/components/pages/Home.vue"; 
import Contact from "@/components/pages/Contact.vue";
import Product from "@/components/pages/Product.vue";
import AddStudent from "@/components/pages/students/AddStudent.vue";
import EditStudent from "@/components/pages/students/EditStudent.vue";
import ShowStudent from "@/components/pages/students/ShowStudent.vue";
// import ShowStudent from "@/components/pages/students/ShowStudent.vue";

const routes = [
    {path: '/', component: Home, name: "Home"},
    {path: '/product', component: Contact, name: "Contact"},
    {path: '/contact', component: Product, name: "Product"},
    {path: '/students', component: AddStudent, name: "AddStudent"},
    {path: '/students/:id', component: EditStudent, props: true, name: "EditStudent"}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;