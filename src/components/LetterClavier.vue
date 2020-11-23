<template>
  <div class="letterclavier">
    <button class="touche">1</button>
    <button class="touche">2</button>
    <button class="touche">3</button>
    <button class="touche">4</button>
    <button class="touche">5</button>
    <button class="touche">6</button>
    <button class="touche">7</button>
    <button class="touche">8</button>
    <button class="touche">9</button>
    <button class="touche">0</button>
    <button class="touche">{{upperCased('a')}}</button>
    <button class="touche">{{upperCased('b')}}</button>
    <button class="touche">{{upperCased('c')}}</button>
    <button class="touche">{{upperCased('d')}}</button>
    <button class="touche">{{upperCased('e')}}</button>
    <button class="touche">{{upperCased('f')}}</button>
    <button class="touche">{{upperCased('g')}}</button>
    <button class="touche">{{upperCased('h')}}</button>
    <button class="touche">{{upperCased('i')}}</button>
    <button class="touche">{{upperCased('j')}}</button>
    <button class="toucheShift" :class="(toUpperCase)&&'upperCase'" v-on:click="upper()">⬆</button>
    <button class="touche">{{upperCased('k')}}</button>
    <button class="touche">{{upperCased('l')}}</button>
    <button class="touche">{{upperCased('m')}}</button>
    <button class="touche">{{upperCased('n')}}</button>
    <button class="touche">{{upperCased('o')}}</button>
    <button class="touche">{{upperCased('p')}}</button>
    <button class="touche">{{upperCased('q')}}</button>
    <button class="touche">{{upperCased('r')}}</button>
    <button class="touche">{{upperCased('s')}}</button>
    <button class="touche">{{upperCased('t')}}</button>
    <button class="touche">{{upperCased('u')}}</button>
    <button class="touche">{{upperCased('v')}}</button>
    <button class="touche">{{upperCased('w')}}</button>
    <button class="touche">{{upperCased('x')}}</button>
    <button class="touche">{{upperCased('y')}}</button>
    <button class="touche">{{upperCased('z')}}</button>
    <button class="touche">@</button>
    <button class="touche">.</button>
    <button class="toucheSpace"> </button>
    <button class="touche">?</button>
    <button class="touche">!</button>
    
    
  </div>
</template>

<script>
export default {
  name: 'LetterClavier',
  data () {
    return {
      arrayLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      toUpperCase: false,
    }
  },
  methods: {
    upperCased (letter) {
      if(this.toUpperCase) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    },
    upper () {
      this.toUpperCase = !this.toUpperCase;
    }
  },
}
</script>

<style>
  .letterclavier {
    position: fixed;
    bottom:0px;
    left: 2px;
    right: 2px;
    margin: 5px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    text-align: center;
  }

  .toucheShift {
    margin: 5px;
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    font-size: 30px;
    text-align: center;
    grid-area: span 3 / span 1;
  }

  .toucheSpace {
    margin: 5px;
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    font-size: 30px;
    text-align: center;
    grid-area: span 1 / span 7;
  }

  .upperCase {
    background-color: rgb(158, 133, 158);
  } 

  .touche {
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    font-size: 30px;
    text-align: center;
    padding: 15px;
    margin: 5px;
  }
  .touche:hover{
    cursor: pointer;
  }
</style>