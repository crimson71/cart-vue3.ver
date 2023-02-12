<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr>
    <EsHeader :title="usertitle"></EsHeader>
    <GoodsList v-for="item in goodsList" :key="item.id"
    :id="item.id"
    :count="item.goods_count"
    :checked="item.goods_state"
    :thumb="item.goods_img"
    :price="item.goods_price"
    :title="item.goods_name"
    @stateChange="onGoodsStateChange"
    @sendCount="getNewCount"></GoodsList>
    <EsFooter :amount="amount" :total="total" @fullChange="fullStateChange" ></EsFooter>
  </div>
  
</template>

<script>
import EsHeader from './components/EsHeader/EsHeader.vue'
import GoodsList from './components/EsGoodsList/EsGoodsList.vue'
import EsFooter from './components/EsFooter/EsFooter.vue'

export default {
  name:'MyApp',
  components: {
    EsHeader,
    GoodsList,
    EsFooter,
    
  },
  data() {
    return {
      usertitle: '地瓜的APP',
      goodsList:[]
    }
  },
  methods: {
    async getGoodsList() {
      const {data:res} = await this.$http.get('/api/cart')
     if(res.status !== 200) return alert('获取商品失败')
     this.goodsList=res.list
      
    },
    fullStateChange(val) {
      this.goodsList.forEach(item => item.goods_state =val)
    },
    onGoodsStateChange(obj) {
      const findResult = this.goodsList.find(item => item.id ===obj.id)
      if(findResult) findResult.goods_state = obj.value


    },
    getNewCount(obj) {
      this.goodsList.filter(x => { 
        if(x.id === obj.id) x.goods_count = obj.count})

    }

  },
  computed:{
  // 监听商品的数量total和总价amount
  amount() {
    let result = 0
   this.goodsList.filter(item => item.goods_state)
    .forEach(x => result += x.goods_price*x.goods_count)
    return result

  },
  total() {
    let t =this.goodsList.filter(item => item.goods_state)
    .reduce((sum,x) => sum+x.goods_count,0)
    return t

  }
  },
  created() {
    this.getGoodsList() 
    
  },
 

}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}

</style>