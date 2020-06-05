<template>
  <div id="app">
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ estadoAtual.status }}</div>
          <div class="text-subtitle2">{{ estadoAtual.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ estadoAtual.text }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-on:click="acao('closePopup')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="q-pa-md row items-start q-gutter-md">
       <card :estadoAtual="estadoAtual">
       </card>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  components: {
    'card': Card
  },
  beforeMount(){
    this.$store.dispatch("getEstadoAtual");

    setInterval(function () {
      this.$store.dispatch("getEstadoAtual");
    }.bind(this), 3000);
  },
  computed: {
    estadoAtual() { return this.$store.state.estadoAtual },
    alert() { return this.$store.state.alert }
  }, 
  methods: {
    acao: function (action) {
      this.$store.dispatch(action);
    }
  }
}
</script>

<style>
</style>
