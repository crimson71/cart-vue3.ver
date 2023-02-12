<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <!-- 商品缩略图 -->
      <!-- 商品复选框 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :checked="checked" :id="id" @change="onCheckedboxChange"/>
        <label class="custom-control-label" :for="id"
          ><img :src="thumb" alt="商品图片" class="thumb"
        /></label>
      </div>
    </div>
    <!-- 右侧商品信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <!-- 商品数量 -->
        <div class="count">
          <EsCounter :num="count" :min="1" @changNum="getGoodsCount"></EsCounter>

        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import EsCounter from '../EsCounter/EsCounter.vue'
export default {
  name: 'GoodsList',
  components: {
    EsCounter

  },
  props: {
    id: {
      type: [Number,String],
      required:true
    },
    count: {
      type: Number,
      required:true
    },
    checked: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      dafault: ''
    },
    price: {
      type: Number,
      required:true
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits:['stateChange','sendCount'],
 
  methods: {
    onCheckedboxChange(e) {
      this.$emit('stateChange',{
        id:this.id,
        value:e.target.checked
      })
      
    },
    getGoodsCount(num) {
      
      this.$emit('sendCount',{
        id:this.id,
        count:num
      })
    }
   
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  +.goods-container{
    border-top: 1px solid #efefef;
  }
  display: flex;
  height: 50px;
  height: 100px;
  
  margin-bottom: 5px;
  .left {
    margin-left: 10px;
    width: 100px;
    height: 100px;
    .thumb {
      display: block;
      width: 100px;
      height: 100%;
    }
  }
  .right {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    .top {
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: 700;
      }
    }
  }
  .custom-control-label::before,
  .custom-control-label::after
  {
     top :3.25rem;
  }
}
</style>
