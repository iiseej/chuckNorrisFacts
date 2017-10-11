import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import VueTyperPlugin from 'vue-typer'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueTyperPlugin)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
