<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="row p-3">
      <div class="col-12">
        <div class="accordion" id="accordionExample">

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                櫃台注意事項
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <object data="/genealogy/必看櫃台事項.pdf" type="application/pdf" width="100%" height="600px">
                  <p>如果你无法查看此 PDF，请 <a href="/genealogy/必看櫃台事項.pdf">下载 PDF</a></p>
                </object>

<!--                <iframe src="/genealogy/必看櫃台事項.pdf" width="100%" height="600px"></iframe>-->
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                徽章製作流程
              </button>

            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <iframe src="/genealogy/徽章製作流程.pdf" width="100%" height="600px"></iframe>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                徽章製作影片
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  <div class="container text-center">
                    <div class="row p-3">
                      <div class="col-12 col-lg-6">
                        <div class="ratio ratio-1x1 mt-1 mb-3">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/TRnIKx2DiNA?si=tCyV4R0yyuEzqv3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="ratio ratio-1x1 mt-1 mb-3">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/qAzXLFLluO8?si=fFW7KzW-7-Ns81Kn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                活動集點卡
              </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <img class="w-100" src="/genealogy/活動集點卡.png" alt="">

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                一些連結
              </button>
            </h2>
            <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <table class="table table-bordered border-black table-success table-striped table-hover">
                  <thead>
                  <tr>

                    <th scope="col">名稱+連結</th>

                  </tr>
                  </thead>
                  <tbody>

                  <tr>
                    <td> <NuxtLink class="nav-link" target="_blank" to="https://www.canva.com/design/DAFqi3_ejjw/ldpq2kuX73jw_VaWEHksXQ/view?utm_content=DAFqi3_ejjw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">
                      進群QR code範本
                    </NuxtLink></td>
                  </tr>

                  <tr>
                    <td> <NuxtLink class="nav-link" target="_blank" to="https://www.canva.com/design/DAFrx-VXjXI/SflaopdJaEhK--4xq7iAbA/view?utm_content=DAFrx-VXjXI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">
                      徽章製作範本
                    </NuxtLink></td>
                  </tr>

                  </tbody>
                </table>

              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>

<!--  <div class="container text-center">-->
<!--    <div class="row p-3">-->
<!--      <div class="col-12 col-lg-6">-->
<!--        <div class="ratio ratio-1x1 mt-1 mb-3">-->
<!--          <iframe width="560" height="315" src="https://www.youtube.com/embed/TRnIKx2DiNA?si=tCyV4R0yyuEzqv3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-12 col-lg-6">-->
<!--        <div class="ratio ratio-1x1 mt-1 mb-3">-->
<!--          <iframe width="560" height="315" src="https://www.youtube.com/embed/qAzXLFLluO8?si=fFW7KzW-7-Ns81Kn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>
.title{
  font-size: 20px;
  color: darkred;
}
.title2{
  font-size: 20px;
  color: darkred;
}
</style>