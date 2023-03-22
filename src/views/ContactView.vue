<template>
    <div class="px-6 text-gray-700 text-2xl container">
        <div class="flex flex-col items-center border-b-2 mb-4 pb-4">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                +63 946 173 5139
            </div>     
            <div class="flex items-center">
                ivan.moay@gmail.com
            </div>       
        </div>
        <form class="flex flex-col items-center" @submit.prevent="sendEmail">
            <!-- <div class="flex-none m-2">
                <label>Name</label>
            </div> -->
            <div class="flex-none mb-4">
                <input 
                    class="p-2 border-b-2 border-black"
                    type="text"
                    v-model="name"
                    name="name"
                    placeholder="Your Name"
                >
            </div>

            <!-- <div class="flex-none m-2">
                <label>Email</label>
            </div> -->
            <div class="flex-none mb-4">
                <input
                    class="p-2 border-b-2 border-black"
                    type="email"
                    v-model="email"
                    name="email"
                    placeholder="Your Email"
                >
            </div>
            
            <!-- <div class="flex-none m-2">
                <label>Message</label>
            </div> -->
            <div class="flex-none mb-4">
                <textarea 
                    class="p-2 border-b-2 border-black"
                    name="message"
                    v-model="message" 
                    cols="30" rows="5"
                    placeholder="Message">
                </textarea>
            </div>

            <div v-if="showMessage" class="text-center ">
                Email Sent.
            </div>
            
            <div class="flex-none">
                <input class="bg-cyan-500 text-white cursor-pointer p-1 w-32 hover:scale-105 transition ease-out duration-200" type="submit" value="Send">
            </div> 

        </form>            
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default{
    name: 'ContactView',
    data(){
        return {
            name: '',
            email: '',
            message: '',
            showMessage: false
        }
    },
    methods:{
        sendEmail(e) {
        try {
            emailjs.sendForm('service_yc53wt5', 'template_3w7psri', e.target,
            '4p0mFBUepr9AqJNE4', {
            from_name: this.name,
            email: this.email,
            message: this.message
            })
        } catch(error) {
            console.log({error})
        }
            // Reset form field
            this.showMessage = true;
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }    
}
</script>