<template>
    <div class="px-6 text-gray-700 text-2xl container"> 
        <form class="flex flex-col items-center">
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
            
            <div class="flex-none">
                <input class="bg-cyan-500 text-white cursor-pointer p-1 w-32 hover:scale-105 transition ease-out duration-200" type="submit" value="Send">
            </div>  

        </form>            
    </div>
</template>