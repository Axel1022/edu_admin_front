<template>
  <div class="container shadow p-5 my-5 mx-auto rounded">
    <div class="card-body">
      <form @submit.prevent="procesarForm" class="form">
        <h1 class="text-center mb-4">Editar Carrera</h1>
        <div class="form-group mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            class="form-control"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre de la materia"
            v-model="formData.name"
            required
          />
        </div>
        <button :disabled="cargando" class="btn btn-success w-100 mb-3">
          Guardar Cambios
        </button>
        <a href="http://localhost:5173/edu-admin/carreras" class="btn btn-secondary w-100">
          Cancelar
        </a>
      </form>
      <!-- {{ formData }}
      <p>ID de la materia: {{ materiaId }}</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { API } from "../../Consts";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const materiaId = ref(route.params.id);
const formData = reactive({
  id: null,
  name: "",
});
const cargando = ref(false);

const cargarMateria = async () => {
  if (materiaId.value) {
    cargando.value = true;
    try {
      const response = await fetch(`${API}/api/Carreras/${materiaId.value}`);
      if (response.ok) {
        const data = await response.json();
        formData.name = data.name;
        formData.id = data.id;
      } else {
        alert("No se pudo obtener la materia");
      }
    } catch (error) {
      console.error("Error al cargar la materia:", error);
    } finally {
      cargando.value = false;
    }
  }
};

const procesarForm = async () => {
  cargando.value = true;

  const carrera = {
    name: formData.name,
  };

  try {
    if (materiaId.value) {
      const response = await fetch(`${API}/api/Carreras/${materiaId.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carrera),
      });

      if (response.status === 204) {
        router.back();
      }
    }
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
  } finally {
    cargando.value = false;
  }
};

onMounted(() => {
  cargarMateria();
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
