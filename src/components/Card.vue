<template>
    <div class="border-b-2 mb-4 pb-4">
        <div class="text-2xl text-black mb-2">{{ header }}</div>
        <div class="flex space-x-2 mb-2">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
            <img src="../assets/linkedIn.png" alt="linkedIn" class="w-6 h-6">
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
    },
    // setup(props){

    // }
}
</script>