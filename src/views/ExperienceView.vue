<template>
    <div class="px-6"> 
        <WorkExpCard 
            header="Freelance Web/Software Developer"
            contentText="On my free time; I design and develop websites and applications primarily using Laravel for dynamic 
                        web applications, Wordpress for static websites."
        />
        <WorkExpCard 
            header="Computer Maintenance Technologist I"
            subText = "Dr. Jose Rizal Memorial Hospital, 2019-present"
            contentText="Full stack developer working primarily in PHP/Laravel with MySQL as database. Developing web 
                        applications used primarily by employees of the hospital. Also responsible for maintaining computers, 
                        network management, and graphic design."
        />
        <WorkExpCard 
            header="Software Developer/MIS Head"
            subText = "Dipolog Medical Center College Foundation, 2012-2019"
            contentText="Software developer in charge of creating and implementing various applications used by the school. 
                        Mainly worked with C# and MsSQL as database. I was also the MIS Head supervising our team of 3 
                        software developers."
        />
        <WorkExpCard 
            header="Information Technology Instructor"
            subText = "Dipolog Medical Center College Foundation, 2010-2012"
            contentText="After graduating, I was hired as an instructor teaching programming to college students. Languages I 
                        taught included C#, C, PHP, Assembly, MySQL, MsSQL, and VB.net."
        />
    </div>
</template>

<script>
import WorkExpCard from "../components/WorkExpCard.vue";

export default{
    name: 'ExperienceView',
    components: {
        WorkExpCard
    },
}
</script>