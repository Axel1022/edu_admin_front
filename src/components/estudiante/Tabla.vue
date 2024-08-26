<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <a
        href="/edu-admin/estudiante/formulario"
        class="btn btn-success float-end"
      >
        + Agregar Estudiante</a
      >
    </div>
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0 text-center">Lista de Estudiantes</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="text-center">Nombre</th>
              <th scope="col" class="text-center">Apellidos</th>
              <th scope="col" class="text-center">Correo</th>
              <th scope="col" class="text-center">Carrera</th>
              <th scope="col" class="text-center">Admitido Como</th>
              <th scope="col" class="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ index + 1 }}</td>
              <td class="text-center">{{ estudiante.name }}</td>
              <td class="text-center">{{ estudiante.apellido }}</td>
              <td class="text-center">{{ estudiante.correo }}</td>
              <td class="text-center">{{ estudiante.idCarrera }}</td>
              <td class="text-center">{{ estudiante.idAdmitidoComo }}</td>

              <td class="text-center">
                <a
                  style="text-decoration: none"
                  :href="`/edu-admin/estudiante-editar/${estudiante.id}`"
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
import type { IEstudiante } from "../../Consts";

const estudiantes = ref<IEstudiante[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(`${API}/api/Estudiantes`);
    estudiantes.value = await response.json();
  } catch (error) {}
  // try {
  //   const response = await fetch(`${API}/api/Carreras/${carrera.value[0]}`);

  //   console.log("El id  " + admitidoComo.value[0]);
  //   if (response.ok) {
  //     carrera.value = await response.json();
  //   } else {
  //     alert("No se pudo obtener la materia");
  //   }
  // } catch (error) {}
  // try {
  //   const response = await fetch(
  //     `${API}/api/AdmitidoComo/${admitidoComo.value[0]}`
  //   );
  //   if (response.ok) {
  //     admitidoComo.value = await response.json();
  //   } else {
  //     alert("No se pudo obtener la descriocion de admitido");
  //   }
  // } catch (error) {}
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
