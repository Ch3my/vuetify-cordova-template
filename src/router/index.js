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
import store from '@/store'

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
  component: () => import(/* webpackChunkName: "login" */ '../views/entrance/Login.vue'),
}, {
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  meta: { isLoggedIn: true }
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
                                                                       
router.beforeEach((to, from, next) => {
  if (to.meta) {
    // Si tiene polices que Verificar
    if (to.meta.isLoggedIn) {
      if (store.state.user.isLoggedIn) {
        // Is logged In
        next()
      } else {
        // Is not Logged In
        next('/login')
      }
    } else {
      // Otras Polices
      next()
    }
  } else{
    // No tiene Meta especificado. Suponemos que no tiene ninguna policie
    next()
  }
})

export default router
