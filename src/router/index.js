import { createRouter, createWebHistory } from 'vue-router'

import Filters from '@/views/Filters.vue'
import MultiSelect from '@/views/MultiSelect.vue'
import Select from '@/views/Select.vue'
import PriceSlider from '@/views/PriceSlider.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
