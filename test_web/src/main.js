import Vue from 'vue'
import App from './App.vue'
import './assets/all.scss'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')