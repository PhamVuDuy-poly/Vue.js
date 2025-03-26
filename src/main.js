// import './assets/main.css'

import { createApp } from 'vue'
import App from './App_buoi10.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
// createApp(App).mount('#app')
// const app = createApp(App)
// app.use(router)
// app.mount('#app')

const app = createApp(App).use(router).mount('#app')
