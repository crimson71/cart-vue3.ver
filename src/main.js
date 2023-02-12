import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/bootstrap.css'
import axios from 'axios'

// axios的请求根路径
axios.defaults.baseURL = 'https://www.escook.cn'
const app = createApp(App)
// 全局挂载axios并重命名为$http
app.config.globalProperties.$http = axios


app.mount('#app')
