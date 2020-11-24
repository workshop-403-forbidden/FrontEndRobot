<template>
  <div class="letterclavier">
    <button class="touche" v-on:click="addCharacter(1)">1</button>
    <button class="touche" v-on:click="addCharacter(2)">2</button>
    <button class="touche" v-on:click="addCharacter(3)">3</button>
    <button class="touche" v-on:click="addCharacter(4)">4</button>
    <button class="touche" v-on:click="addCharacter(5)">5</button>
    <button class="touche" v-on:click="addCharacter(6)">6</button>
    <button class="touche" v-on:click="addCharacter(7)">7</button>
    <button class="touche" v-on:click="addCharacter(8)">8</button>
    <button class="touche" v-on:click="addCharacter(9)">9</button>
    <button class="touche" v-on:click="addCharacter(0)">0</button>
    <button class="touche" v-on:click="addCharacter('@')">@</button>
    <button class="touche" v-on:click="addCharacter(upperCased('a'))">{{upperCased('a')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('b'))">{{upperCased('b')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('c'))">{{upperCased('c')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('d'))">{{upperCased('d')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('e'))">{{upperCased('e')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('f'))">{{upperCased('f')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('g'))">{{upperCased('g')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('h'))">{{upperCased('h')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('i'))">{{upperCased('i')}}</button>
    <button class="toucheBackward" v-on:click="removeCharacter">⬅</button>
    <button class="toucheShift" :class="(toUpperCase)&&'upperCase'" v-on:click="upper()">⬆</button>
    <button class="touche" v-on:click="addCharacter(upperCased('j'))">{{upperCased('j')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('k'))">{{upperCased('k')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('l'))">{{upperCased('l')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('m'))">{{upperCased('m')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('n'))">{{upperCased('n')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('o'))">{{upperCased('o')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('p'))">{{upperCased('p')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('q'))">{{upperCased('q')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('r'))">{{upperCased('r')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('s'))">{{upperCased('s')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('t'))">{{upperCased('t')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('u'))">{{upperCased('u')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('v'))">{{upperCased('v')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('w'))">{{upperCased('w')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('x'))">{{upperCased('x')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('y'))">{{upperCased('y')}}</button>
    <button class="touche" v-on:click="addCharacter(upperCased('z'))">{{upperCased('z')}}</button>
    <button class="touche" v-on:click="addCharacter('.')">.</button>
    <button class="touche" v-on:click="addCharacter(',')">,</button>
    <button class="toucheShift" v-on:click="enter">✔</button>
    <button class="toucheSpace" v-on:click="addCharacter(' ')"> </button>
    <button class="touche" v-on:click="addCharacter('?')">?</button>
    <button class="touche" v-on:click="addCharacter('!')">!</button>
  </div>
</template>

<script>
export default {
  name: 'LetterClavier',
  props: {
    addCharacter: Function,
    removeCharacter: Function,
    enter: Function
  },
  data () {
    return {
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
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;
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

  .toucheBackward {
    margin: 5px;
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    font-size: 30px;
    text-align: center;
    grid-area: span 1 / span 2;
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