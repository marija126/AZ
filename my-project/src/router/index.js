import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/intro'
import osobnaScan from '@/components/osobnaScan'
import podaciUpis from '@/components/podaciUpis'
import odabirFonda from '@/components/odabirFonda.vue'
import podaciStednja from '@/components/podaciStednja.vue'
import dodatniPodaci from '@/components/dodatniPodaci.vue'
Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/osobna-scan',
      name: 'osobnaScan',
      component: osobnaScan
    },
    {
      path: '/podaci-upis',
      name: 'podaciUpis',
      component: podaciUpis
    },
    {
      path: '/odabir-fonda',
      name: 'odabirFonda',
      component: odabirFonda
    },
    {
      path: '/podaci-o-mirovinskoj-stednji',
      name: 'podaciStednja',
      component: podaciStednja
    },
    {
      path: '/dodatni-podaci',
      name: 'dodatniPodaci',
      component: dodatniPodaci
    }
  ]
})
