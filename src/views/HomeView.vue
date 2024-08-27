<script setup lang="ts"></script>

<template>
  <main class="container my-5">
    <div class="card text-center shadow-lg">
      <div class="card-body">
        <h1 class="card-title display-4 text-primary">Gestor Académico</h1>
        <p class="card-text lead">
          Esta aplicación permite gestionar la base de datos académica,
          incluyendo la creación, listado y edición de datos de estudiantes,
          carreras y estados de admisión.
        </p>
        <a
          href="http://localhost:5173/edu-admin/estudiantes"
          class="btn btn-primary mt-3"
          >Comenzar
        </a>
        <!-- <a
          href="mailto:ingcampusano@outlook.com?subject=Contacto Profesional&body=Hola Alexander,%0D%0A%0D%0AEstoy interesado en discutir una posible colaboración o proyecto relacionado con desarrollo de software. Por favor, contáctame para que podamos hablar más al respecto.%0D%0A%0D%0A¡Gracias!%0D%0A%0D%0A[Tu Nombre]"
          class="btn btn-primary mt-3"
          >Escríbeme
        </a>

       <a href="tel:+18096685187" class="btn btn-primary mt-3">Llámame</a>
       <a href="sms:+18096685187?body=Hola Alexander, me gustaría discutir una posible colaboración o proyecto relacionado con desarrollo de software." class="btn btn-primary mt-3">Envíame un mensaje</a> -->




      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  border-radius: 15px;
}

.card-title {
  font-family: "Roboto", sans-serif;
}

.card-text {
  font-family: "Open Sans", sans-serif;
}
</style>
