import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

Vue.config.productionTip = false
new Vue({
    el: '#app',
    components: { App },
    template: '<App data-names="Janek, Alicja, Piotrek, Daria" />'
})