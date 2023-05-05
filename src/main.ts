import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);

app.use(router); //注册路由
app.mount('#app');
