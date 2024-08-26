<template>
  <div class="container shadow p-5 my-5 mx-auto rounded">
    <div class="card-body">
      <form @submit.prevent="procesarForm" class="form">
        <h1 class="text-center mb-4">Editar Estudiante</h1>
        <div class="form-group mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            class="form-control mb-2"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            v-model="formData.name"
            required
          />
          <label for="nombre" class="form-label">Apellido</label>
          <input
            class="form-control mb-2"
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Apellido"
            v-model="formData.apellido"
            required
          />
          <label for="nombre" class="form-label">Correo</label>
          <input
            class="form-control mb-2"
            type="text"
            name="correo"
            id="correo"
            placeholder="tecklas@gmail.com"
            v-model="formData.correo"
            required
          />
          <label for="nombre" class="form-label">Carrera</label>
          <input
            class="form-control mb-2"
            type="text"
            name="carrera"
            id="carrera"
            placeholder="Desarrollo de Software"
            v-model="formData.idCarrera"
            required
          />
          <label for="nombre" class="form-label">Condición</label>
          <input
            class="form-control mb-2"
            type="text"
            name="idAdmitidoComo"
            id="idAdmitidoComo"
            placeholder="Desarrollo de Software"
            v-model="formData.idAdmitidoComo"
            required
          />
        </div>
        <button :disabled="cargando" class="btn btn-success w-100 mb-3">
          Guardar Cambios
        </button>
        <a
          href="http://localhost:5173/edu-admin/carreras"
          class="btn btn-secondary w-100"
        >
          Cancelar
        </a>
      </form>

      <!-- {{ formData }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { API } from "../../Consts";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const estudianteId = ref(route.params.id);

const formData = reactive({
  id: null,
  name: "",
  apellido: "",
  correo: "",
  idCarrera: null,
  idAdmitidoComo: null,
});

const cargando = ref(false);

const cargarEstudiante = async () => {
  if (estudianteId.value) {
    cargando.value = true;
    try {
      const response = await fetch(
        `${API}/api/Estudiantes/${estudianteId.value}`
      );
      if (response.ok) {
        const data = await response.json();
        formData.id = data.id;
        formData.name = data.name;
        formData.apellido = data.apellido;
        formData.correo = data.correo;
        formData.idCarrera = data.idCarrera;
        formData.idAdmitidoComo = data.idAdmitidoComo;
      } else {
        alert("No se pudo obtener el estudiante.");
      }
    } catch (error) {
      console.error("Error al cargar al estudiante:", error);
    } finally {
      cargando.value = false;
    }
  }
};

const procesarForm = async () => {
  cargando.value = true;

  const estudiante = {
    name: formData.name,
    apellido: formData.apellido,
    correo: formData.correo,
    idCarrera: formData.idCarrera,
    idAdmitidoComo: formData.idAdmitidoComo,
  };

  try {
    if (estudianteId.value) {
      const response = await fetch(`${API}/api/Estudiantes/${estudianteId.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(estudiante),
      });
      if (response.status === 204) {
        router.push("/edu-admin/estudiantes");
      } else alert("Hay bobo");
    }
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
  } finally {
    cargando.value = false;
  }
};

onMounted(() => {
  cargarEstudiante();
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
