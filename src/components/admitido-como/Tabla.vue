<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <a href="/edu-admin/admitido-como/formulario" class="btn btn-success float-end"
        >+ Agregar AdmitidoComo</a
      >
    </div>
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0 text-center">Lista de AdmitidoComo</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="text-center">Descripción</th>
              <th scope="col" class="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(admitido, index) in admitidoComo" :key="index">
              <td>{{ index + 1 }}</td>
              <td class="text-center">{{ admitido.description }}</td>
              <td class="text-center">
                <a
                  style="text-decoration: none"
                  :href="`/edu-admin/admitido-como/formulario-edit/${admitido.id}`"
                  class="text-warning me-3"
                >
                  <i class="fas fa-edit"></i>
                </a>
                <!-- <a style="text-decoration: none" href="#" class="text-danger">
                  <i class="fas fa-trash-alt"></i>
                </a> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { API } from "../../Consts";
import type { IAdmitidoComo } from "../../Consts";

const admitidoComo = ref<IAdmitidoComo[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(`${API}/api/AdmitidoComo`);
    admitidoComo.value = await response.json();
  } catch (error) {}
});
</script>

<style scoped>
i {
  cursor: pointer;
  font-size: 1.5rem;
}
th {
  font-size: 1.5rem;
}
td {
  font-size: 1rem;
}
</style>
