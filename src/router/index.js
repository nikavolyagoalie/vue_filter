import { createRouter, createWebHistory } from 'vue-router'

import Filters from '@/views/Filters.vue'
import MultiSelect from '@/components/MultiSelect.vue'
import Select from '@/components/Select.vue'
import PriceSlider from '@/components/PriceSlider.vue'
import PostComp from '@/components/PostComp.vue'

const routes = [
  {
    path: '/',
    name: 'Filters',
    component: Filters,
  },
  {
    path: '/multi',
    name: 'MultiSelect',
    component: MultiSelect,
  },
  {
    path: '/select',
    name: 'Select',
    component: Select,
  },
  {
    path: '/price',
    name: 'PriceSlider',
    component: PriceSlider,
  },
  {
    path: '/postcomp',
    name: 'PostComp',
    component: PostComp,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
