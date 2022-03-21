import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faChevronRight, faCirclePlay, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret,faChevronRight,faCirclePlay, faCheck)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
