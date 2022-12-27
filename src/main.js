import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js";

//Import VueRouter
import { createRouter, createWebHashHistory } from "vue-router";

//Import all components to be used for routing
import HomePage from './components/HomePage.vue'
import OffersPage from './components/OffersPage.vue'
import TechnologiesPage from './components/TechnologiesPage.vue'

//Create the routes
const routes = [
	{path: "/", component: HomePage },
    {path: "/offer", component: OffersPage},
    {path: "/technologies", component: TechnologiesPage},
    
];

//Configure the router and pass routes to it
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

//Creating the application
let app = createApp(App)

//Using the router as a middleware
app.use(router);

//Mounting the app
app.mount('#app')
