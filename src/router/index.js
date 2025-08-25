import AboutPage from "@/components/AboutPage.vue"
import ContactPage from "@/components/ContactPage.vue"
import HomePage from "@/components/HomePage.vue"
import ServicesPage from "@/components/ServicesPage.vue"
import Vue from "vue"
import Router from "vue-router"





Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: "HomePage", component: HomePage },
        { path: '/about', name: 'AboutPage', component: AboutPage },
        { path: '/services', name: 'ServicesPage', component: ServicesPage },
        { path: '/contact', name: 'ContactPage', component: ContactPage }
    ]
})