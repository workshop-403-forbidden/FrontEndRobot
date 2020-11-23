<template>
  <div class="home">
    <h1>Bienvenu</h1>
    <h3 >Veuillez renseinger votre numéro de sécurité social</h3>
    <h2 class="displaySocialSecurity">
      N° {{ socialSecurityNumber.substr(0, 1) }} 
      {{ socialSecurityNumber.substr(1, 2) }} 
      {{ socialSecurityNumber.substr(3, 2) }} 
      {{ socialSecurityNumber.substr(5, 2) }} 
      {{ socialSecurityNumber.substr(7, 3) }} 
      {{ socialSecurityNumber.substr(10, 3) }} 
      {{ socialSecurityNumber.substr(13, 2) }}
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
    socialSecurityNumber: '',
  }
},
methods: {
  addNumber(number) {
    if (this.socialSecurityNumber.length <= 15) {
      this.socialSecurityNumber += number;
    }
  },
  removeNumber() {
    this.socialSecurityNumber = this.socialSecurityNumber.slice(0, -1);
  },
  enter() {
    console.log('enter');
  }
}, 
}
</script>

<style>
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