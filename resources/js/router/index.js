import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginData from '../views/pages/auth/LoginData.vue';
import VaultHome from '@/views/pages/vaults/VaultHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: VaultHome
                },
            ]
        },
        {
            path: '/login',
            name: "Login",
            component: LoginData
        }
    ]
});

export default router;
