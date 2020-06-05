import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    estados: [],
    estadoAtual: {},
    alert: false
  },
  mutations: {
  },
  actions: {
    getTodosEstados() {
      const body = {
        "query": {
          "match_all": {}
        }
      };

      Vue.http.get('http://localhost:9200/estados/_search', {body:body}).then(response => {
        this.state.estados = [];

        const hits = response.data.hits.hits;
        hits.forEach(element => {
          var estado = element._source;
          estado.id = element._id;
          this.state.estados.push(estado);
        });
        return this.state.estados;

      }, response => {
        console.log(response);
        return -1;
      });
    },
    getEstadoAtual() {
      this.dispatch("getTodosEstados");
      Vue.http.get('http://localhost:9200/card/_doc/1').then(response => {

        const idEstado = response.data._source.estado;
        
        const estado = this.state.estados.find(estado => estado.id == idEstado);
        this.state.estadoAtual = estado;
        console.log(estado);

        return estado;
      }, response => {
        console.log(response);
        return -1;
      });
    },
    showInfo() {
      this.state.alert = true;
    },
    changeState() {
      var idEstadoNovo = this.state.estadoAtual;
      var randomNumber;
      while (idEstadoNovo == this.state.estadoAtual) {
        randomNumber = 1 + Math.floor(4 * Math.random())
        idEstadoNovo = "estado"+randomNumber
      }
      
      const estadoNovo = {
        "estado": "estado"+randomNumber
      }
      Vue.http.put('http://localhost:9200/card/_doc/1', estadoNovo).then(() => {
        this.dispatch("getEstadoAtual");
        return 1;
      }, response => {
        console.log(response);
        return -1;
      });
    },
    closePopup() {
      this.state.alert = false;
    }
  },
  modules: {
  }
})
