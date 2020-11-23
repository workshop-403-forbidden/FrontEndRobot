<template>
  <div class="clavier">
    <button class="touche" v-on:click="addNumber('1')">1</button>
    <button class="touche" v-on:click="addNumber('2')">2</button>
    <button class="touche" v-on:click="addNumber('3')">3</button>
    <button class="touche" v-on:click="addNumber('4')">4</button>
    <button class="touche" v-on:click="addNumber('5')">5</button>
    <button class="touche" v-on:click="addNumber('6')">6</button>
    <button class="touche" v-on:click="addNumber('7')">7</button>
    <button class="touche" v-on:click="addNumber('8')">8</button>
    <button class="touche" v-on:click="addNumber('9')">9</button>
    <button class="touche" v-on:click="removeNumber()">⬅</button>
    <button class="touche" v-on:click="addNumber('0')">0</button>
    <button class="touche" v-on:click="enter()">✔</button>
  </div>
</template>

<script>
export default {
  name: 'Clavier',
  props: {
    addNumber: Function,
    removeNumber: Function,
    enter: Function
  }
}
</script>

<style>
  .clavier {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-right: 33%;
    margin-left: 33%;
  }
  .touche {
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
  .touche:hover{
    cursor: pointer;
  }
</style>