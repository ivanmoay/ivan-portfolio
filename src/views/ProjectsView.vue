<template>
    <div class="px-6"> 
        <Card 
            header="Material Management Office Monitoring System" 
            github="www.google.com"
            link="www.google.com"
            contentText="An ongoing project for the MMO office used for keeping track of inventory, purchase orders, and
                        requisitions. I’m responsible for developing the entire system using Laravel and NiceAdmin(bootstrap
                        template)."            
        />
        <Card 
            header="Portfolio" 
            contentText="A personal web application showcasing my resume and portfolio using Vue.js and TailwindCSS."
        />
        <Card 
            header="Etecon App" 
            contentText="A web application made for a client mainly to generate hospice forms. The client can also make video
                        courses with an exam after completion of a course."
        />
        <Card 
            header="Appointment Web Application" 
            contentText="Web application made to manage Out Patient bookings. Hospital staff can create services with daily
                        schedules. A client portal for patients is also available."
        />
        <Card 
            header="Kam-Inn Room Monitoring App" 
            contentText="A simple web application used to monitor room rentals and inventory purchase. The application also
                        emails the Inn owner for every transaction."
        />
        <Card 
            header="Notes App" 
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