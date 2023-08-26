<script setup lang="ts">

</script>

<template>
  <div class="container text-center">
    <div class="row p-3">
      <div class="col-12">
        <p>固定活動</p>
        <table class="table table-bordered border-black table-success table-striped table-hover">
          <thead>
          <tr>

            <th scope="col">活動名稱</th>
            <th scope="col">地點</th>
            <th scope="col">活動時間</th>
            <th scope="col">照片</th>
            <th scope="col">資訊</th>
            <th scope="col">狀態</th>
          </tr>
          </thead>
          <tbody>
          <tr>


            <td>家人家庭晚會</td>
            <td>正氣北路271巷25號</td>
            <td>每個禮拜一，晚上7點~9點</td>
            <td> <NuxtLink class="nav-link" to="/activity/fixed/FamilyHome">照片</NuxtLink></td>
            <td>無</td>
            <td>活動中</td>
          </tr>

          <tr>


            <td>桌遊活動</td>
            <td>台東市正氣北路206號</td>
            <td>每個禮拜六，下午3點~5點</td>
            <td>無</td>
            <td> <NuxtLink class="nav-link" to="/activity/fixed/BoardGame">訊息</NuxtLink></td>
            <td>活動中</td>
          </tr>

          </tbody>
        </table>

      </div>


      <div class="col-12">
        <p>活動</p>
        <table class="table table-bordered border-black table-secondary table-striped table-hover">
          <thead>
          <tr>

            <th scope="col">活動名稱</th>
            <th scope="col">地點</th>
            <th scope="col">活動時間</th>
            <th scope="col">報名截止時間</th>
            <th scope="col">資訊</th>
            <th scope="col">照片</th>
            <th scope="col">狀態</th>
          </tr>
          </thead>
          <tbody>
          <tr>


            <td>家人家庭晚會-聚餐</td>
            <td>Wow's 邦查 Pangcah（波浪屋二號店)</td>
            <td>2023/8/28</td>
            <td>2023/8/25</td>
            <td> <NuxtLink class="nav-link" target="_blank" to="https://maps.app.goo.gl/8hzAReYCxUprq3gx9?g_st=il">Google Map</NuxtLink></td>
            <td>無</td>
            <td>尚未開始</td>
          </tr>
          <tr>


            <td>支會旅遊</td>
            <td>八仙洞、鯊魚黑幫【美山店】、東管處</td>
            <td>2023/8/26</td>
            <td>2023/8/24</td>
            <td> <NuxtLink class="nav-link" to="/activity/2023/0826/Information">通知</NuxtLink></td>
            <td> <NuxtLink class="nav-link" to="/activity/2023/0826/Photo">照片</NuxtLink></td>
            <td>活動中</td>
          </tr>
          <tr>


            <td>聚餐活動</td>
            <td>下賓朗100號</td>
            <td>2023/8/11</td>
            <td>2023/8/11</td>
            <td><NuxtLink class="nav-link" to="/activity/2023/Activity-08-11">通知</NuxtLink></td>
            <td>無</td>
            <td>結束</td>
          </tr>

          <tr>

            <td>電影-鈴芽之旅</td>
            <td>台東-秀泰影城</td>
            <td>2023/3/6</td>
            <td>2023/3/6</td>
            <td>無</td>
            <td><NuxtLink class="nav-link" to="/activity/2023/Activity-03-06">連結</NuxtLink></td>
            <td>結束</td>
          </tr>


          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>