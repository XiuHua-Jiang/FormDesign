<template>
  <el-form-item :label="i18nt('designer.setting.htmlContent')">
    <el-input 
      type="textarea" 
      :autosize="{ minRows: 1, maxRows: 12}" 
      v-model="optionModel.htmlContent">
    </el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "htmlContent-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
