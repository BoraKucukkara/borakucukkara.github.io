<template>
  <div id="app">
    <div class="container">
      <div>Bora Kucukkara</div>
      <ul>
        <li><a href="https://github.com/BoraKucukkara"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/borakucukkara/"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="mailto:borakucukkara@hotmail.com"><i class="fa-solid fa-at"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{border:0px solid red;}
body {margin:0px; padding:0;}
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #847d8b;
  font-size: 2rem;
  font-weight: 200;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  align-items: center;
}
.container ul {
  border-left: 1px solid #bbb6bf;
  height: 4rem;
  align-items: center;
  display: flex;
  margin-left: 2rem;
  list-style: none;
  padding: 0;
  opacity: 0;
  animation: fade-in 0.5s forwards;
  animation-delay: 0.5s;
}
.container div{
  animation: fade-in-left 0.5s forwards;
}
.container li{
  margin-left: 2rem;
  animation: fade-in 0.5s forwards;
  animation-delay: 1s;
  opacity: 0;
}
@keyframes fade-in {
  from {opacity: 0;transform: translateX(1rem);}
  to {opacity: 1;}
}
@keyframes fade-in-left {
  from {opacity: 0;transform: translateX(-1rem);}
  to {opacity: 1;}
}
a{
  color: inherit; 
  text-decoration: inherit;
  font-size: 1.5rem;
}
@media only screen and (max-width: 600px){
    .container {
      display:block;
      align-items:stretch;
    }
    .container ul {
      border-top: 1px solid #bbb6bf;
      border-left: none;
      margin-left: 0rem;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
    .container li{
      margin: 0 1rem 0 1rem;
      animation: fade-in 0.5s forwards;
      animation-delay: 1s;
      opacity: 0;
    }
}
</style>
