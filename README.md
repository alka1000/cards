Foram utilizadas as tecnologias recomendadas (Vue, Quasar, Vuex).

O código está separado na exibição do card (Card.vue) e no aplicativo.
Todos os controles de estado são realizados utilizando o Vuex, pela execução de actions que se comunicam com o banco de dados.
Foi utilizado o Elasticsearch como banco de dados, com requisições REST.

O webApp atualiza a cada 3 segundos, é possível mudar o estado pelo banco de dados.
As ações do botão são nomes de funções, foram cadastradas duas (exibir informações e trocar o estado).
