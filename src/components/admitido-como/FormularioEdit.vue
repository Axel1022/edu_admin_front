<template>
  <div class="container shadow p-5 my-5 mx-auto rounded">
    <div class="card-body">
      <form @submit.prevent="procesarForm" class="form">
        <h1 class="text-center mb-4">Editar Admitido Como</h1>
        <div class="form-group mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            class="form-control"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Descripción"
            v-model="formData.description"
            required
          />
        </div>
        <button :disabled="cargando" class="btn btn-success w-100 mb-3">
          Guardar Cambios
        </button>
        <a
          href="http://localhost:5173/edu-admin/admitido-como"
          class="btn btn-secondary w-100"
        >
          Cancelar
        </a>
      </form>
      <!-- {{ formData }} -->
      <!-- {{ admitidoComoId }} -->
      <!-- <p>ID de la materia: {{ admitidoComoId }}</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { API } from "../../Consts";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const admitidoComoId = ref(route.params.id);
const formData = reactive({
  id: null,
  description: "",
});
const cargando = ref(false);

const admitidoComo = async () => {
  if (admitidoComoId.value) {
    cargando.value = true;
    try {
      const response = await fetch(
        `${API}/api/AdmitidoComo/${admitidoComoId.value}`
      );
      if (response.ok) {
        const data = await response.json();
        formData.description = data.description;
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

  const admitido = {
    description: formData.description,
  };

  try {
    if (admitidoComoId.value) {
      const response = await fetch(
        `${API}/api/AdmitidoComo/${admitidoComoId.value}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admitido),
        }
      );
      console.log(response.status);

      if (response.status === 204) {
        router.back();
      } else if (response.status === 404) {
        alert("Id no encontrado");
      } else alert("Hay poblema");
    }
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
  } finally {
    cargando.value = false;
  }
};

onMounted(() => {
  admitidoComo();
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
