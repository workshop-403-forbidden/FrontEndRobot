<template>
  <div class="finished">
    <h1>Vous retouverez vos résultats à l'adresse</h1>
    <h2>{{ link }}</h2>
    <VueQRCodeComponent class="qrcode" :text=link size="500" />
    <h3>Vos résultats seront bientôt disponible</h3>
    <button class="printButton" v-on:click="printPDF">Imprimer</button>
  </div>
</template>

<script>
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  name: 'Finished',
  components: {
    VueQRCodeComponent
  },
  data() {
    return {
      link: `https://workshop-403-forbidden.github.io/FrontEndResults?id=${this.$store.state.token}`,
      linkPDF: '', 
      results: []
    }
  },
  mounted(){
    this.init()
  },
  watch: {
    results: function (newResults, oldResults) {
      if (newResults !== oldResults) {
        this.getResult();
      }
    }
  },
  methods:{
    init(){
      this.getResultArray();
      setTimeout(() => { this.updateResult(); }, 30000)
    },
    getResultArray() {
      fetch(`https://workshop.mathiasughetto.fr/api/patients/${this.$store.state.token}`)
      .then(result => {
        result.json().then(data => {
          this.results = data.resultats;
        });
      })
    },
    updateResult() {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resultat: Math.random() > 0.8 ? true : false,
        })
      };
      fetch(`https://workshop.mathiasughetto.fr${this.results[0]}`, requestOptions)
      .then(result => {
        result.json().then(data => {
          this.$store.commit('RESET_DATA');
          this.$router.push('/');
        })
      })
    },
    getResult() {
      fetch(`https://workshop.mathiasughetto.fr${this.results[0]}`)
      .then(result => {
        result.json().then(data => {
          this.linkPDF = `https://workshop.mathiasughetto.fr/${data.depistagePdf}`;
        })
      })
    },
    printPDF(event) {
      window.open(this.linkPDF);
    }
  },
}
</script>

<style>
.finished {
  position: absolute;
  top: 20%;
  width: 99%;
  text-align: center;
  font-size: 18px;
}

.qrcode img{
  margin: auto;
}

.printButton {
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: rgb(84, 70, 84);
  color: beige;
  border-radius: 25px;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>