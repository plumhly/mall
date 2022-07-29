import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

const routes = [{
    path: "/",
    component: () => import( /* home */ '@/pages/main_container/')
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;