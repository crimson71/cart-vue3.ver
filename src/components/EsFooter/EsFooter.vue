<template>
  <div class="footer-container">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="full-check" :checked="isfull" @change ='onCheckboxChange'>
  <label class="custom-control-label" for="full-check">全选</label>
</div>
<!-- 合计 -->
<div>
      <span >合计：</span>
      <span class="amount">￥{{amount}}</span>
    </div>
    <!-- 结算 toFixed约定保留两位小数-->
    <button type="button" class="btn btn-primary btn-settle" :disabled="amount===0">结算（{{total}}）</button>
    
  </div>
</template>

<script>
export default {
  name:'EsFooter',
  emits:['fullChange'],
  props:{
    // 勾选商品总价
    amount: {
      type:Number,
      default:0
    },
    // 勾选商品总数
    total: {
      type:Number,
      default:0
    },
    // 判断是否全选
    isfull:{
      type:Boolean,
      default:false
    },
  },
  methods: {
    onCheckboxChange(e) {
      this.$emit('fullChange',e.target.checked)
      
    },
    
  },
 
}
</script>

<style lang="less" scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  // line-height: 50px;
  align-items: center;
  border: 1px solid #fff;
  z-index: 999;
  background: skyblue;

  .amount {
    color: red;
    font-weight: 700;
  }
  .btn-settle {
    min-width: 90px;
    height: 38px;
    border-radius: 19px;
  }

}

</style>