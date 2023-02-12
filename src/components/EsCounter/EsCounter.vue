<template>
<div class="counter-container">
  <button type="button" class="btn btn-light btn-sm" @click="subNum">-</button>
  <input type="text" class="form-control form-control-sm ipt-num" v-model.number.lazy="number" >
  <button type="button" class="btn btn-light btn-sm" @click="addNum">+</button>
  </div>
</template>

<script>
export default {
  name:'EsCounter',
  props:{
    num: {
      type:Number,
      default:0
    },
    min:{
      type:Number,
      default:NaN
    }
  },
  data() {
    return {
      number:this.num
    }
  },
  emits:['changNum'],
  methods: {
    subNum() {
      
      if(this.number - 1 < this.min && !isNaN(this.min)) return 
      this.number--
      
    
      

    },
    addNum() {
      this.number++
     

    }
  },
  watch:{
    number(newVal) {
      const parseResult = parseInt(newVal)
      if(isNaN(parseResult) || parseResult < 0) 
      return this.number = 1
      if(String(newVal).indexOf('.') !== -1)
      return this.number = parseResult
      this.$emit('changNum',this.number)

      

    }
  }
}
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;
  .btn {
    width: 25px;
  }
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}

</style>