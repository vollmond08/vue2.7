import Vue from 'vue';
import App from './App.vue';

Vue.config.errorHandler = function(err) {
  console.error(err);
}

new Vue({
  render: (h) => h(App),
}).$mount('#app');