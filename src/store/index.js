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
    token: '',
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
    SET_TOKEN(state, token) {
      state.token = token;
    },
    MODIFICATION_ID_RESPONSE(state, idResponse) {
      state.idResponse = idResponse;
    },
    RESET_DATA(state) {
      state.id = '';
      state.nom = '';
      state.prenom = '';
      state.dateDeNaissance = new Date();
      state.adressePostale = '';
      state.adresseMail = '';
      state.tel = '';
      state.nomMedecinTraitant = '';
      state.numSecu = '';
      state.token = '';
      state.idResponse = -1;
    },
  },
  actions: {
  },
  modules: {
  }
})
