<template>
  <q-card
    class="my-card"
    :style="'background:' + estadoAtual.color"
  >
    <q-card-section>
      <div class="text-h6">{{ estadoAtual.status }}</div>
      <div class="text-subtitle2">{{ estadoAtual.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ estadoAtual.text }}
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat v-on:click="acao(estadoAtual.action)">Ação!</q-btn>
    </q-card-actions>

  </q-card>
</template>

<style>
</style>

<script>
export default {
  props: ['estadoAtual'],
  methods: {
    acao: function (action) {
      this.$store.dispatch(action);
    }
  }
}
</script>
