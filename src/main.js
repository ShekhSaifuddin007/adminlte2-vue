import Vue from "vue";
import './plugins/axios'

// import ax from 'axios';
import App from "./App.vue";
import router from "./router";
// window.axios = ax;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");