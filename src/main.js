import Vue from "vue"
import './plugins/axios'
import DataTable from 'laravel-vue-datatable'
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false;

// uses plugins

Vue.use(DataTable)

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");