<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/edu-admin/home">Edu Admin Front</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/edu-admin/home"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/edu-admin/estudiantes"
                  >Estudiantes</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/edu-admin/carreras">Carreras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/edu-admin/admitido-como"
                  >AdmitidoComo</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
