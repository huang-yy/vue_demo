import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import PubSub from "pubsub-js";
import ElementUI from 'element-ui';
import moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$moment = moment;
Vue.prototype.$pubsub = PubSub;

new Vue({
  el: "#app",
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})