<template>
    <div class="border-b-2 mb-4 pb-4">
        <div class="text-2xl text-black mb-2">{{ header }}</div>
        <div class="flex space-x-2 mb-2">
            <!-- <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6"> -->
            <div v-for="tool in tools">
               <div v-if="tool == 'laravel'">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" 
                        alt="Laravel" 
                        class="w-6 h-6 hover:cursor-pointer" 
                        data-tooltip-target="tooltip-laravel"
                    >
                    <div id="tooltip-laravel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Laravel
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
               </div>    
               <div v-if="tool == 'bootstrap'">                    
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
                        alt="Bootstrap" 
                        class="w-6 h-6 hover:cursor-pointer" 
                        data-tooltip-target="tooltip-bootstrap"
                    >
                    <div id="tooltip-bootstrap" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Bootstrap
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
               </div>    
            </div>
        </div>
        <div class="text-gray-700 text-2xl mb-2">{{ contentText }}</div>
        <div class="flex space-x-2 justify-center mb-2">
            <a href="props.link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>
            <a href="props.github">
                <img src="../assets/github-mark/github-mark.png" alt="linkedIn" class="w-8 h-8">
            </a>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        header: String,
        contentText: String,
        github: String,
        link: String,
        tools: [],
    },
    // setup(props){

    // }
}
</script>