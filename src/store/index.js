import { createStore } from 'vuex'

export default createStore({
  state: {
    id: '',
    nom: 'UGHETTO',
    prenom: 'Mathias',
    dateDeNaissance: new Date(),
    adressePostale: '14 chemin dupieux, MontBrison',
    adresseMail: 'skh.dgf@sjghkef.com',
    tel: '0679345618',
    nomMedecinTraitant: 'Dc. Rosenblum',
    numSecu: 'hujgsdf'
  },
  mutations: {
    MODIFICATION_STATE(state, data) {
      state.id = data.id;
      state.nom = data.nom;
      state.prenom = data.prenom;
      state.dateDeNaissance = new Date(data.dateDeNaissance);
      state.adressePostale = data.adressePostale;
      state.adresseMail = data.adresseMail;
      state.tel = data.tel;
      state.nomMedecinTraitant = data.nomMedecinTraitant;
      state.numSecu = data.numSecu;
    },
  },
  actions: {
  },
  modules: {
  }
})
