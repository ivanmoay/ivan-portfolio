<template>
    <div class="px-6"> 
        <Card 
            header="Material Management Office Monitoring System" 
            :tools="['laravel','bootstrap']"
            github="https://github.com/ivanmoay/djrmh-mmo"
            link=""
            contentText="An ongoing project for the MMO office used for keeping track of inventory, purchase orders, and
                        requisitions. I’m responsible for developing the entire system using Laravel and NiceAdmin(bootstrap
                        template)."            
        />
        <Card 
            header="Portfolio" 
            :tools="['vuejs','tailwind']"
            github="https://github.com/ivanmoay/ivan-portfolio"
            link="https://gochirodev.com/"
            contentText="A personal web application showcasing my resume and portfolio using Vue.js and TailwindCSS."
        />
        <Card 
            header="Etecon App" 
            :tools="['laravel','tailwind']"
            github="https://github.com/ivanmoay/etecon-app"
            link=""
            contentText="A web application made for a client mainly to generate hospice forms. The client can also make video
                        courses with an exam after completion of a course."
        />
        <Card 
            header="Appointment Web Application" 
            :tools="['laravel','bootstrap']"
            github="https://github.com/ivanmoay/djrmh-appointment"
            link=""
            contentText="Web application made to manage Out Patient bookings. Hospital staff can create services with daily
                        schedules. A client portal for patients is also available."
        />
        <Card 
            header="Kam-Inn Room Monitoring App" 
            :tools="['laravel','bootstrap']"
            github="https://github.com/ivanmoay/kam-inn"
            link=""
            contentText="A simple web application used to monitor room rentals and inventory purchase. The application also
                        emails the Inn owner for every transaction."
        />
        <Card 
            header="Notes App" 
            :tools="['laravel','vuejs','tailwind']"
            github="https://github.com/ivanmoay/notes-app"
            link=""
            contentText="A CRUD web application made with Laravel, Vue.js and TailwindCSS."
        />
    </div>
</template>

<script>
import Card from "../components/Card.vue";

export default{
    name: 'ProjectsView',
    components: {
        Card
    },
}
</script>