<template>
  <div ref="pdfContainer" class="pdf-container"></div>
</template>

<script>
export default {
  props: {
    pdfUrl: String, // 通过属性传递 PDF 文件的 URL

  },
  mounted() {
    this.loadPdf();
  },
  methods: {
    async loadPdf() {
      const pdfDoc = await pdfjsLib.getDocument(this.pdfUrl).promise;
      const pdfContainer = this.$refs.pdfContainer;

      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const canvas = document.createElement('canvas');
        pdfContainer.appendChild(canvas);

        const viewport = page.getViewport({ scale: 2 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext('2d');
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        await page.render(renderContext).promise;
      }
    }
  }
};
</script>

<style scoped>
.pdf-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>