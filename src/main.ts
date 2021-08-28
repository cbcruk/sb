import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import store from './store'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App)

app
  .use(naive)
  .use(store)
  .mount('#app')
