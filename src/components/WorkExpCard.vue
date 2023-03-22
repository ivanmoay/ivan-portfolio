<template>
    <div class="border-b-2 mb-4 pb-4">
        <div class="text-2xl text-black mb-2">{{ header }}</div>
        <div class="text-gray-700 text-2xl mb-2 underline">{{ subText }}</div>
        <div class="text-gray-700 text-2xl mb-2">{{ contentText }}</div>        
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