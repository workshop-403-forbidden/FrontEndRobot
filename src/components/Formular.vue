<template>
  <div class="formular">
    <h3 >Veuillez confirmer vos informations</h3>
    <div class="info">
      <div class="data">
        <div>Label</div>
        <div>info</div>
      </div>
      <div class="data">
        <div>Label</div>
        <div>info</div>
      </div>
      <div class="data">
        <div>Label</div>
        <div>info</div>
      </div>
      <div class="data">
        <div>Label</div>
        <div>info</div>
      </div>
      informatons
    </div>
    <LetterClavier />
  </div>
</template>

<script>
import LetterClavier from './LetterClavier.vue';

export default {
  name: "Formular",
  components: {
  LetterClavier
  },
  data () {
  return {
    nom: 'UGHETTO',
    prenom: 'Mathias',
    date_de_naissance: new Date('1995-12-17T03:24:00'),
    adresse_postal: '14 chemin dupieux, MontBrison',
    tel: '0679345618',
    nom_medecin_traitant: 'Dc. Rosenblum',
  }
},
}
</script>

<style>
  .info {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-right: 33%;
    margin-left: 33%;
  }
</style>