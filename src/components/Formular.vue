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
    <button class="confirmationButton" v-on:click="postData">
      Confirmation ✔
    </button>
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
  props: {
    data: Object
  },
  data () {
    return {
      nom: this.$store.state.nom,
      prenom: this.$store.state.prenom,
      date_de_naissance: `${this.$store.state.dateDeNaissance.getDate() <= 9 ? '0'+this.$store.state.dateDeNaissance.getDate() : this.$store.state.dateDeNaissance.getDate()}/${this.$store.state.dateDeNaissance.getMonth()+1 <= 9 ? '0'+this.$store.state.dateDeNaissance.getMonth():this.$store.state.dateDeNaissance.getMonth()}/${this.$store.state.dateDeNaissance.getFullYear()}`,
      adresse_postal: this.$store.state.adressePostale,
      adresse_mail: this.$store.state.adresseMail,
      tel: this.$store.state.tel,
      nom_medecin_traitant: this.$store.state.nomMedecinTraitant,
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
    },
    postData() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: this.nom,
          prenom: this.prenom,
          dateDeNaissance: this.$store.state.dateDeNaissance,
          adressePostale: this.adresse_postal,
          adresseMail: this.adresse_mail,
          tel: this.tel,
          numSecu: this.$store.state.numSecu,
          nomMedecinTraitant: this.nom_medecin_traitant,
          })
      };
      fetch("https://workshop.mathiasughetto.fr/api/info_patients", requestOptions)
      .then(response => console.log(response.json()))
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

  .confirmationButton {
    background-color: rgb(17, 131, 52);
    font-size: 30px;
    border-radius: 25px;
    text-align: center;
    color: beige;
    padding: 15px;
    margin: 10px;
  }

  .confirmationButton:hover {
    background-color: rgb(83, 189, 114);
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