<script setup lang="ts">
</script>

<template>
  <main class="container my-5">
    <div class="card text-center shadow-lg">
      <div class="card-body">
        <h1 class="card-title display-4 text-primary">Gestor Académico</h1>
        <p class="card-text lead">
          Esta aplicación permite gestionar la base de datos académica, incluyendo la creación, listado y edición de datos de estudiantes, carreras y estados de admisión.
        </p>
        <a href="http://localhost:5173/edu-admin/estudiantes" class="btn btn-primary mt-3">Comenzar</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  border-radius: 15px;
}

.card-title {
  font-family: 'Roboto', sans-serif;
}

.card-text {
  font-family: 'Open Sans', sans-serif;
}
</style>
