<script setup lang="ts">

</script>

<template>
  <div class="container" >
    <div class="row align-items-center "  >
      <div class="col-md-12">align-items-center</div>
    </div>
  </div>
  <br>
  <div class="container" style = "min-height:300px;">
    <div class="row align-items-end" >
      <div class="col-md-12">align-items-end</div>
    </div>
  </div>
  <br>
  <div class="container" style = "min-height:300px;">
    <div class="row align-items-start" >
      <div class="col-md-12">align-items-start</div>
    </div>
  </div>
</template>

<style scoped>
/* css here */
.row{
  background: #dbdfe5;
  min-height:300px;
}

.row div{
  padding: 25px;
  background: #abb1b8;
}

.container{
  min-height:300px;
}
</style>