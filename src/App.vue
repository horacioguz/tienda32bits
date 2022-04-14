<template>
  <div>
    <h1>Tienda 32 Bits</h1>
    <h3>Lista de juegos</h3>
    <table border="1px">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="(game, i) in games" :key="i" :style="{color: game.color }">
          <td>{{ game.code }}</td>
          <td>{{ game.name }}</td>
          <td>{{ game.stock }}</td>
          <td>${{parseInt(game.price).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState(['games']),
    },
  }
</script>

<style lang='scss'>
</style>
