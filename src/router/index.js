import AboutPage from "@/components/AboutPage.vue"
import ContactPage from "@/components/ContactPage.vue"
import HomePage from "@/components/HomePage.vue"
import ServicesPage from "@/components/ServicesPage.vue"
import { createRouter, createWebHistory } from "vue-router"



const routes = [
    { path: '/', name: "HomePage", component: HomePage },
    { path: '/about', name: 'AboutPage', component: AboutPage },
    { path: '/services', name: 'ServicesPage', component: ServicesPage },
    { path: '/contact', name: 'ContactPage', component: ContactPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router