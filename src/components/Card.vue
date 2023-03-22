<template>
    <div class="border-b-2 mb-4 pb-4">
        <div class="md:text-2xl text-lg text-black mb-2">{{ header }}</div>
        <div class="flex space-x-2 mb-2">
            <!-- <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6"> -->
            <div v-for="tool in tools">
               <div v-if="tool == 'laravel'" class="flex gap-2 group">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" 
                        alt="Laravel" 
                        class="w-6 h-6 hover:cursor-pointer" 
                    >
                    <span class="bg-gray-800 text-white px-2 rounded-lg invisible group-hover:visible absolute mt-7 ml-[-20px]">Laravel</span>
               </div>    
               <div v-if="tool == 'bootstrap'" class="flex gap-2 group">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
                        alt="Bootstrap" 
                        class="w-6 h-6 hover:cursor-pointer" 
                    >
                    <span class="bg-gray-800 text-white px-2 rounded-lg invisible group-hover:visible absolute mt-7 ml-[-20px]">Bootstrap</span>
               </div>  
               <div v-if="tool == 'vuejs'" class="flex gap-2 group">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
                        alt="Vue.js" 
                        class="w-6 h-6 hover:cursor-pointer" 
                    >
                    <span class="bg-gray-800 text-white px-2 rounded-lg invisible group-hover:visible absolute mt-7 ml-[-15px]">Vue.js</span>
               </div> 
               <div v-if="tool == 'tailwind'" class="flex gap-2 group">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                        alt="Tailwind CSS" 
                        class="w-6 h-6 hover:cursor-pointer" 
                    >
                    <span class="bg-gray-800 text-white px-2 rounded-lg invisible group-hover:visible absolute mt-7 ml-[-40px]">Tailwind CSS</span>
               </div>                  
            </div>
        </div>
        <div class="text-gray-700 md:text-2xl text-lg mb-2">{{ contentText }}</div>
        <div class="flex space-x-2 justify-center mb-2">
            <a :href="mGitHub" target="_blank">
                <img src="../assets/github-mark/github-mark.png" alt="linkedIn" class="w-8 h-8">
            </a>
            <a :href="mLink" target="_blank" v-if="mLink">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>            
        </div>
    </div>
</template>

<script>
import { onMounted,ref } from 'vue';

export default{
    props: {
        header: String,
        contentText: String,
        github: String,
        link: String,
        tools: Array,
    },
    setup(props){
        let mLink = ref('')
        let mGitHub = ref('')

        onMounted(()=>{
            mLink.value = props.link
            mGitHub.value = props.github
        })

        return { mLink, mGitHub }
    }
}
</script>