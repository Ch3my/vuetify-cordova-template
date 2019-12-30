/*
* El archivos Routes
* To use the router in your components:
* this.$router.push({name: 'Page'})
*
*
*
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// Importamos el Store para poder usarlo
// import store from '@/store'
// Importamos idb para acceder a IndexedDB
// import { openDB } from "idb";

Vue.use(VueRouter)

// .______        ______    __    __  .___________. _______      _______.
// |   _  \      /  __  \  |  |  |  | |           ||   ____|    /       |
// |  |_)  |    |  |  |  | |  |  |  | `---|  |----`|  |__      |   (----`
// |      /     |  |  |  | |  |  |  |     |  |     |   __|      \   \    
// |  |\  \----.|  `--'  | |  `--'  |     |  |     |  |____ .----)   |   
// | _| `._____| \______/   \______/      |__|     |_______||_______/  

// TODO. Create 404 Route and View
const routes = [{
  path: '/login',
  name: 'login',
  meta: { loginOrRedirect: true },
  component: () => import(/* webpackChunkName: "login" */ '../views/entrance/Login.vue'),
}, {
  path: '/',
  name: 'home',
  meta: { isLoggedIn: true },
  component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
}, {
  path: '/logout',
  name: 'logout',
  meta: { },
  component: () => import(/* webpackChunkName: "logout" */ '../views/entrance/Logout.vue'),
}, {
  path: '/secure',
  name: 'secure',
  meta: { },
  component: () => import(/* webpackChunkName: "logout" */ '../views/entrance/Secure.vue'),
},
  // {
  //   // 404 Route. TODO. Implement notFound View and Stuff
  //   path: '*',
  //   redirect: '/notFound'
  // }
]

const router = new VueRouter({
  // Commented. Fallback to hashes for Cordova to compile
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// .______     ______    __       __    ______  __   _______      _______.
// |   _  \   /  __  \  |  |     |  |  /      ||  | |   ____|    /       |
// |  |_)  | |  |  |  | |  |     |  | |  ,----'|  | |  |__      |   (----`
// |   ___/  |  |  |  | |  |     |  | |  |     |  | |   __|      \   \    
// |  |      |  `--'  | |  `----.|  | |  `----.|  | |  |____ .----)   |   
// | _|       \______/  |_______||__|  \______||__| |_______||_______/    

router.beforeEach(async (to, from, next) => {
  var session = localStorage.getItem('session') || null;

  if (to.meta) {
    // Si tiene polices que Verificar
    if (to.meta.isLoggedIn) {
      if (session) {
        // Is logged In
        next()
      } else {
        // Is not Logged In
        next('/login')
      }
    } else if (to.meta.loginOrRedirect) {
      if (session) {
        // Is logged In
        next('/')
      } else {
        next()
      }
    } else {
      // Otras Polices
      next()
    }
  } else {
    // No tiene Meta especificado. Suponemos que no tiene ninguna policie
    next()
  }
})

export default router
