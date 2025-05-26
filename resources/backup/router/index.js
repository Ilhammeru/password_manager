import AppLayout from '../components/App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/app',
                    name: 'layout',
                    component: () => import('../components/layout/MainLayout.vue'),
                    children: [
                        {
                            path: 'dashboard',
                            name: "Dashboard",
                            component: () => import('../views/Dashboard.vue')
                        }
                    ]
                },
            ]
        },
    ]
});

export default router;