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

onMounted(()=>{
  // console.log("onMounted")
  // document.querySelectorAll('.nav-link').forEach(function (value, key, parent) {
  //
  //     value.classList.remove("active");
  //   });
})

</script>

<template>

  <nav class="navbar navbar-expand-lg fs-4 bg-body-tertiary">
    <div class="container-fluid">
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
          <li class="nav-item">
            <NuxtLink @click="selectNuxtLink($event)" class="nav-link" to="/english">英文會話小組</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="selectNuxtLink($event)" class="nav-link" to="/link">連結</NuxtLink>
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
</style>