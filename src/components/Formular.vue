<template>
  <div class="formular">
    <button class="homeButton" v-on:click="goHome">🏠</button>
    <h1>Veuillez confirmer vos informations</h1>
    <div class="info">
      <div class="data">
        <div class="label">Nom</div>
        <div class="value">{{ nom }}</div>
        <div class="label">Prenom</div>
        <div class="value">{{ prenom }}</div>
        <div class="label">Date de naissance</div>
        <div class="value">{{ date_de_naissance }}</div>
        <div class="label">Médecin traitant</div>
        <div class="value">{{ nom_medecin_traitant }}</div>
      </div>
      <div class="data" >
        <div class="label">Adresse postal</div>
        <div class="value editable" :class="(focus === 'adresse_postal')&&'focus'" v-on:click="edite({adresse_postal})">{{ adresse_postal }}</div>
      </div>
      <div class="data">
        <div class="label">Adresse e-mail</div>
        <div class="value editable" :class="(focus === 'adresse_mail')&&'focus'" v-on:click="edite({adresse_mail})">{{ adresse_mail }}</div>
      </div>
      <div class="data">
        <div class="label">Téléphone</div>
        <div class="value editable" :class="(focus === 'tel')&&'focus'" v-on:click="edite({tel})">{{ tel }}</div>
      </div>
    </div>
    <div v-if="focus.length > 0">
      <LetterClavier
      :add-character=addCharacter
      :remove-character=removeCharacter
      :enter=enter
      />
    </div>
  </div>
</template>

<script>

import LetterClavier from './LetterClavier.vue';
import VueClickAway from "vue3-click-away";

export default {
  name: "Formular",
  components: {
  LetterClavier
  },
  directives: {
    ClickAway: VueClickAway,
  },
  data () {
    return {
      nom: 'UGHETTO',
      prenom: 'Mathias',
      date_de_naissance: `${new Date('1995-12-17T03:24:00').getDate() <= 9 ? '0'+new Date('1995-12-17T03:24:00').getDate() : new Date('1995-12-17T03:24:00').getDate()}/${new Date('1995-12-17T03:24:00').getMonth()+1 <= 9 ? '0'+new Date('1995-12-17T03:24:00').getMonth()+1:new Date('1995-12-17T03:24:00').getMonth()+1}/${new Date('1995-12-17T03:24:00').getFullYear()}`,
      adresse_postal: '14 chemin dupieux, MontBrison',
      adresse_mail: 'skh.dgf@sjghkef.com',
      tel: '0679345618',
      nom_medecin_traitant: 'Dc. Rosenblum',
      focus: '',
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    edite(value) {
      this.focus = Object.keys(value)[0];
      console.log(this.focus);
      console.log(this[this.focus]);
    },
    dontEdit(value) {
      this.focus = value;
    },
    addCharacter(Character) {
      this[this.focus] += Character;
    },
    removeCharacter() {
      this[this.focus] = this[this.focus].slice(0, -1);
    },
    enter() {
      this.focus='';
    }
  },
}
</script>

<style>
  .homeButton {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(84, 70, 84);
    color: beige;
    border-radius: 25px;
    font-size: 30px;
    text-align: center;
    padding: 15px;
    margin: 10px;
  }

  .info {
    margin-right: 20%;
    margin-left: 20%;
  }

  .data {
    background-color:burlywood;
    font-size: 30px;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
  }

  .focus {
    border-style: solid;
    border-color: sandybrown;
  }

  .label {
    margin-top: 5px;
    text-align: left;
  }

  .value {
    margin-top: 5px;
    background-color: wheat;
    font-size: 30px;
    border-radius: 25px;
    min-height: 30px;
  }

  .editable {
    background-color: white;
  }

  .editable:hover {
    cursor: pointer;
    background-color: rgb(202, 202, 202);
  }
</style>