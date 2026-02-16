<template>
  <div v-if="lugar">
    <h2>{{ lugar.nombre }}</h2>
    <p>Clima actual: {{ lugar.clima }}</p>

    <h3>Pronóstico</h3>
    <ul>
      <li v-for="d in lugar.pronostico" :key="d.dia">
        {{ d.dia }} - {{ d.temp }}
      </li>
    </ul>

    <h3>Estadísticas</h3>
    <p>Min: {{ lugar.stats.min }}</p>
    <p>Max: {{ lugar.stats.max }}</p>
    <p>Prom: {{ lugar.stats.prom }}</p>

    <button @click="$router.push('/')">
      Volver
    </button>
  </div>
</template>

<script>
import lugares from "../data/lugares";

export default {
  props: ["id"],
  computed: {
    lugar() {
      return lugares.find(l => l.id == this.id);
    }
  }
};
</script>
