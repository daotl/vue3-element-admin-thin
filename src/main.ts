// 本地SVG图标
import 'virtual:svg-icons-register'
// 样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import '~/styles/index.scss'
import 'uno.css'
import 'animate.css'

import { createApp } from 'vue'

import setupPlugins from '~/plugins'

import App from './App.vue'

const app = createApp(App)
app.use(setupPlugins)
app.mount('#app')
