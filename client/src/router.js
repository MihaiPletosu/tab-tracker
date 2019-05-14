import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Songs from './components/Songs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    }
  ]
});
