<template>
  <div class="analyse">
    <div class="lds-ripple"><div></div><div></div></div>
    <h2>Prélevement en cour</h2>
  </div>
</template>

<script>
export default {
  name: 'Analyse',
  props: {
    step: Number,
  }
}
</script>

<style>
.analyse {
  position: absolute;
  top: 50%;
  width: 99%;
  text-align: center;
  font-size: 18px;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds-ripple div {
  position: absolute;
  display: block;
  box-sizing: border-box;
  border: 10px solid #cef;
  width: 300px;
  height: 300px;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 100px;
    left: 100px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

</style>