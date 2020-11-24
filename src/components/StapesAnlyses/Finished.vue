<template>
  <div class="finished">
    <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
  </div>
</template>

<script>
import Qrcode from 'v-qrcode/src/index'

export default {
  name: 'Finished',
  components: {
    Qrcode,
  },
  data() {
    return {
      qrCls: 'qrcode',
      qrText: 'http://localhost:8080/FrontEndRobot',
      size: 300,
      background: '#ffffff'
    }
  },
  methods:{
    init(){
      //
    },
  },
  mounted(){
    this.init()
  }
}
</script>

<style>
.finished {
  position: absolute;
  top: 30%;
  width: 99%;
  text-align: center;
  font-size: 18px;
}
</style>