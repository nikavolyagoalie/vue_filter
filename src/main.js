import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })

// app.directive('click-outside', {
//     mounted(el, { value }) {
//         el.clickOutside = function(event) {
//             if (!(el == event.target || el.contains(event.target))) {
//                 value(event)
//                 console.log('1111')
//             }
//         }

//         document.body.addEventListener('click', el.clickOutside);
//     },

//     unmounted(el, { value }) {
//         document.body.removeEventListener('click', el.clickOutside);
//     }
// })

app.use(store).use(router).mount('#app')
