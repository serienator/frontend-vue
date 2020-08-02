import Vue from 'vue';
import {getItems} from './api/itemsAPI';

const app = new Vue({
  el: '#container',
  data: {
    items: []
  },
  created() {
    this.items = getItems()
  }
});

