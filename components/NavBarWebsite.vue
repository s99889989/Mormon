<script setup lang="ts">

const selectNuxtLink = (event: any) => {
  // console.log(event.value.classList.names)
  // document.querySelectorAll('.nav-link').forEach(function (value, key, parent) {
  //   console.log(value.className)
  //   // value.classList.add("active");
  // });
  // const route = useRoute()
  // console.log(route.params.id)
   // event.classList.add("active")

  // p.classList.add("active")


}
const dark = ref(false)

const darkMode = ()=>{
  const navbar_website = document.querySelector('#navbar-main');
  if(navbar_website == null){
    return;
  }
  dark.value = !dark.value;
  if(dark.value){
    navbar_website.classList.remove('bg-dark');
    navbar_website.classList.add('bg-white');
  }else {
    navbar_website.classList.add('bg-dark');
    navbar_website.classList.remove('bg-white');

  }

  document.querySelectorAll('.nav-link').forEach(function (value, key, parent) {
    // value.s
    // value.style.fontWeight = "";
    // value.style.backgroundColor = "";
  });





}

onMounted(()=>{
  // console.log("onMounted")
  // document.querySelectorAll('.nav-link').forEach(function (value, key, parent) {
  //
  //     value.classList.remove("active");
  //   });
})

</script>

<template>

  <nav id="navbar-main" class="navbar navbar-expand-lg fs-4 bg-white border-bottom">
    <div class="container-fluid justify-center align-items-center">
      <NuxtLink class="navbar-brand fs-3" to="/index">台東三支會</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">洗禮</a>
            <ul class="dropdown-menu">
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/baptism/BaptismIndex">洗禮表</NuxtLink></li>
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/baptism/Baptism-2023-08-25">最近洗禮</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">活動</a>
            <ul class="dropdown-menu">
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/activity/ActivityIndex">活動表</NuxtLink></li>
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/activity/2023/Activity-08-26">最近活動</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">聖殿</a>
            <ul class="dropdown-menu">
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/temple/TempleIndex">聖殿日列表</NuxtLink></li>
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/temple/Temple-2023-09-16">最近聖殿日</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">家譜</a>
            <ul class="dropdown-menu">
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/genealogy/GenealogyIndex">訓練會議時程表</NuxtLink></li>
              <li><NuxtLink @click="selectNuxtLink($event)" class="dropdown-item" to="/genealogy/Prize">櫃台+獎品製作</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink @click="selectNuxtLink($event)" class="nav-link" to="/english">英文會話</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="selectNuxtLink($event)" class="nav-link" to="/link">連結</NuxtLink>
          </li>
          <li class="nav-item">
            <div class="d-flex align-items-center" style="height: 100%">
              <div class="onoffswitch">
                <input @click="darkMode" type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
                <label class="onoffswitch-label" for="myonoffswitch"></label>
              </div>
            </div>


          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active{
  color: #c5e2eb;
  font-weight: bold;
}
.navbar-brand{
  font-weight: bold;
}

.onoffswitch {
  position: relative; width: 40px;
  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.onoffswitch-label {
  display: block; overflow: hidden; cursor: pointer;
  height: 20px; padding: 0; line-height: 20px;
  border: 2px solid #E3E3E3; border-radius: 20px;
  background-color: #FFFFFF;
  transition: background-color 0.3s ease-in;
}
.onoffswitch-label:before {
  content: "";
  display: block; width: 20px; margin: 0px;
  background: #FFFFFF;
  position: absolute; top: 0; bottom: 0;
  right: 18px;
  border: 2px solid #E3E3E3; border-radius: 20px;
  transition: all 0.3s ease-in 0s;
}
.onoffswitch-checkbox:checked + .onoffswitch-label {
  background-color: #666666;
}
.onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
  border-color: #666666;
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
  right: 0px;
}

</style>