import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import LoginedView from './components/LoginedView.vue'
import NotFoundView from './components/NotFoundView.vue'
import { useStore } from './store.js'
const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/logined',
            name: 'logined',
            component: LoginedView,
            meta: { requiresRole: 'user' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFoundView
        },
    ],
    history: createWebHistory()
});
router.beforeEach((to, from, next) => {
    const store = useStore();
    if (to.matched.some(record => record.meta.requiresRole)) {
        if (store.getRole !== to.meta.requiresRole) {

            next('/404');
            return;
        } 
    }
    next();
    

});

export default router