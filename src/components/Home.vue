<template>
  <div>
    <input v-model="busqueda" placeholder="Buscar lugar..." />

    <div v-if="filtrados.length === 0">
      No se encontró el lugar
    </div>

    <div v-for="l in filtrados" :key="l.id" class="card">
      <h3>{{ l.nombre }}</h3>
      <p>{{ l.clima }}</p>

      <router-link :to="'/lugar/' + l.id">
        Ver detalle
      </router-link>
    </div>
  </div>
</template>

<script>
import lugares from "../data/lugares";

export default {
  data() {
    return {
      busqueda: "",
      lugares
    };
  },
  computed: {
    filtrados() {
      return this.lugares.filter(l =>
        l.nombre.toLowerCase()
          .includes(this.busqueda.toLowerCase())
      );
    }
  }
};
</script>
