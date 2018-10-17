import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import StdLogin from '../components/StdLogin'
import EmailLogin from '../components/EmailLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StdLogin',
      component: StdLogin
    },
    {
      path: '/EmailLogin',
      name: 'EmailLogin',
      component: EmailLogin
    }
  ]
})
