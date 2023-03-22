<template>
    <div class="border-b-2 mb-4 pb-4">
        <div class="md:text-2xl text-lg text-black mb-2">{{ header }}</div>
        <div class="text-gray-700 md:text-2xl text-lg mb-2 underline">{{ subText }}</div>
        <div class="text-gray-700 md:text-2xl text-lg mb-2">{{ contentText }}</div>        
    </div>
</template>

<script>
export default{
    props: {
        header: String,
        subText: String,
        contentText: String,
    },
    // setup(props){

    // }
}
</script>