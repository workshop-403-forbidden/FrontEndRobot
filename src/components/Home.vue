<template>
  <div class="home">
    <h1>Bienvenu</h1>
    <h3 >Veuillez renseinger votre numéro de sécurité social</h3>
    <h2 class="displaySocialSecurity" :class="(invalidNumber) && 'invalide'">
      N° {{ socialSecurityNumber.substr(0, 1) }} 
      {{ socialSecurityNumber.substr(1, 2) }} 
      {{ socialSecurityNumber.substr(3, 2) }} 
      {{ socialSecurityNumber.substr(5, 2) }} 
      {{ socialSecurityNumber.substr(7, 3) }} 
      {{ socialSecurityNumber.substr(10, 3) }} 
      {{ socialSecurityNumber.substr(13, 2) }}
    </h2>
    <h2 class="invalideMessage" v-if="invalidNumber">
      Numéro de sécurité social invalide
    </h2>
    <Clavier
    :add-number=addNumber
    :remove-number=removeNumber
    :enter=enter
    />
  </div>
</template>

<script>
import Clavier from './Clavier.vue'

export default {
name: 'Home',
components: {
  Clavier
  },
data () {
  return {
    socialSecurityNumber: '116895243199818',
    data: {},
    invalidNumber: false,
  }
},
methods: {
  addNumber(number) {
    if (this.socialSecurityNumber.length < 15) {
      this.socialSecurityNumber += number;
    }
    if (this.invalidNumber) {
      this.invalidNumber = false
    }
  },
  removeNumber() {
    this.socialSecurityNumber = this.socialSecurityNumber.slice(0, -1);
  },
  enter() {
    if (this.socialSecurityNumber.length < 15) {
      this.invalidNumber = true;
    } else {
      this.getData();
    }
  },
  async getData() {
    fetch(`https://workshop.mathiasughetto.fr/api/carte_vitales/${this.socialSecurityNumber}`)
    .then(res => {
      if (!res.ok) {
        this.invalidNumber = true;
      } else {
        res.json().then(data => {
        this.data = data;
        this.$store.commit('MODIFICATION_STATE', this.data);
        this.goToFormular();
      });
      }
    })
  },
  goToFormular () {
    this.$router.push('/Formular', this.data)
  }
}, 
}
</script>

<style>

.invalide {
  border-width: 8px;
  border-style: solid;
  border-color: red;
}

.invalideMessage {
  color: red !important;
  border-radius: 25px;
}

.displaySocialSecurity{
  margin-right: 25%;
  margin-left: 25%;
  border-radius: 25px;
  padding: 20px;
  font-size: 50px;
  background-color: beige;
  text-align: left;
}
</style>