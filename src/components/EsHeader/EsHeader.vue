<template>
  <div class="header-container" :style="{backgroundColor:bgcolor,fontSize:fsize+'px',color:fcolor}">
    {{  title}}
  </div>
</template>

<script>
export default {
  name:'EsHeader',
  props:{
    bgcolor:{
      type:String,
      default:'#007bff'
    },
    fcolor:{
      type:String,
      default:'#ffffff'
    },
    title:{
      type:String,
      default:'es-header'
    },
    fsize:{
      type:Number,
      default:14
    }
  }

}
</script>

<style lang="less" scoped>
.header-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}

</style>