<template>
  <div class="fakeAnalyse">
    <div class="child">
    <div v-if="stape === 0">
        <Loading />
      </div>
      <div v-if="stape === 1 || stape === 2 || stape === 3">
        <Installation />
      </div>
      <div v-if="stape === 4 || stape === 5 || stape === 6 ||  stape === 7">
        <Analyse />
      </div>
      <div v-if="stape > 7">
        <Finished />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './StapesAnlyses/Loading.vue'
import Installation from './StapesAnlyses/Installation.vue'
import Analyse from './StapesAnlyses/Analyse.vue'
import Finished from './StapesAnlyses/Finished.vue'

export default {
  name: 'FakeAnalyse',
  components: {
    Loading,
    Installation,
    Analyse,
    Finished
  },
  data() {
    return {
      interval: () => {},
      stape: 0,
    }
  },
  methods:{
    init(){
      this.interval = setInterval(() => {this.stape += 1}, 3000)
    },
    goHome() {
      this.$router.push('/')
    }
  },
  watch: {
    stape: function (newStape, oldStep) {
      if (newStape !== oldStep) {
        if (newStape === 8) {
          clearInterval(this.interval)
        }
      }
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style>
  .fakeAnlyse {
    position: relative;
  }

  .child {
    text-align: center;
  }
</style>