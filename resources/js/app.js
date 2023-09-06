import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import Register from './pages/Register.vue'
const app = createApp(App);
app.component('register-form', Register);
app.use(router);
app.mount('#app');
