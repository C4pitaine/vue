//router.js

import { createRouter, createWebHistory } from "vue-router"

import ServicePage from './pages/ServicePage.vue'
import ContactPage from './pages/ContactPage.vue'
import EspaceProPage from './pages/EspaceProPage.vue'
import RealisationPage from './pages/RealisationPage.vue'

const routes /* création de nos routes */ = [
    {
        path: "/",
        component: ServicePage,
        name: "Services"
    },
    {
        path: "/realisations",
        component: RealisationPage,
        name: "Réalisations"
    },
    {
        path: "/contact",
        component: ContactPage,
        name: "Contact"
    },
    {
        path: "/espace-pro",
        component: EspaceProPage,
        name: "Espace Pro"
    }
]
//on vient donner nos routes à notre router, il viendra faire l'history et notre const routes avec toutes nos routes
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router