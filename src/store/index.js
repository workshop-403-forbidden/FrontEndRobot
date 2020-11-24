import { createStore } from 'vuex'

export default createStore({
  state: {
    id: '',
    nom: '',
    prenom: '',
    dateDeNaissance: new Date(),
    adressePostale: '',
    adresseMail: '',
    tel: '',
    nomMedecinTraitant: '',
    numSecu: '',
    idResponse: -1,
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
    MODIFICATION_ID_RESPONSE(state, idResponse) {
      state.idResponse = idResponse;
    },
    RESET_ID_RESPONSE(state) {
      state.idResponse = -1;
    },
  },
  actions: {
  },
  modules: {
  }
})
