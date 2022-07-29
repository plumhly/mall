import {
    createApp
} from 'vue'

import '@/assets/fonts/iconfont/iconfont.css'
import App from '@/pages/main_container/'
import router from './router'

const app = createApp(App);

app.use(router);

app.mount("#app");