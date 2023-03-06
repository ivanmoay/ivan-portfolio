<template>
  <div class="grid grid-cols-4 mx-12 mt-8 mb-4"> 
    <div class="col-span-1 text-right">
      <a href="#">
        <h1 class="text-4xl font-semibold text-gray-700 hover:text-black">Ivan Rey Moay</h1>
      </a>  
    </div>
    <div class="col-span-3 flex justify-end items-center">      
      <div class="">
        <a href="https://github.com/ivanmoay" target="_blank">
          <img src="./assets/github-mark/github-mark.png" alt="github" class="w-8 h-8">
        </a>        
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 mx-12">
    <div class="col-span-1 text-right">
      <nav class="mr-4">
        <ul class="text-lg font-semibold">
          <li class="mb-4">
            <router-link class="hover:border-b-2 border-black text-gray-700 hover:text-black" to="/">Resume</router-link>
          </li>
          <li class="mb-4">
            <router-link class="hover:border-b-2 border-black text-gray-700 hover:text-black" to="/projects">Recent Projects</router-link>
          </li>
          <li class="mb-4">
            <router-link class="hover:border-b-2 border-black text-gray-700 hover:text-black" to="/contact">Contact Me</router-link>
          </li>
        </ul>
      </nav>
    </div>
  
    <main class="bg-yellow-300 col-span-3">

      <router-view />  

    </main>
  </div>
  
  <div class="grid grid-cols-4 mx-12"> 
    <div class="col-span-1 text-right"></div>
    <div class="col-span-3 flex justify-start">      
      <div class="text-gray-700">
        This website was built with <a href="https://vuejs.org/" target="_blank" class="text-gray-700 font-semibold hover:text-black hover:border-b border-black">Vue.js</a> and <a href="https://tailwindcss.com/" target="_blank" class="text-gray-700 font-semibold hover:text-black hover:border-b border-black">TailwindCSS</a>.       
      </div>
    </div>
  </div>

</template>

<style>
#app{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
