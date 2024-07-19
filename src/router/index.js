import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactView from '../views/ContactView.vue'
import JohncView from '../views/johncView.vue'
import Reactivity from '../views/Reactivity.vue'
import DefineEmit from '../views/DefineEmit.vue'
import DepInjection from '../views/DepInjection.vue'
import props from '../views/props.vue'
import slots from '../views/slots.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/johnc',
      name: 'johnc',
      component: JohncView
    },
    
    {
      path :'/reactivity',
      name: 'reactivity',
      component: Reactivity
    },
    {
      path :'/defineEmit',
      name: 'defineEmit',
      component: DefineEmit
    },
    {
      path :'/DepInjection',
      name: 'DepInjection',
      component: DepInjection
    },
    {
      path :'/props',
      name: 'props',
      component: props
    },
    {
      path :'/slots',
      name: 'slots',
      component: slots

    },
  ]
})

export default router
