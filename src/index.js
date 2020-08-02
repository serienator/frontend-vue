import Vue from 'vue';
import {getItems} from './api/itemsAPI';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const app = new Vue({
  el: '#container',
  data: {
    items: []
  },
  created() {
    this.items = getItems()
  }
});


