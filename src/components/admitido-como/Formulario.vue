<template>
  <div class="container shadow p-5 my-5 mx-auto rounded">
    <div class="card-body">
      <form @submit.prevent="procesarForm" class="form">
        <h1 class="text-center mb-4">Agregar Admitido Como</h1>
        <div class="form-group mb-3">
          <label for="nombre" class="form-label">Descripcion</label>
          <input
            class="form-control"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ej: Transferido"
            v-model="formData.descripcion"
            required
          />
        </div>
        <button :disabled="cargando" class="btn btn-success w-100 mb-3">
          Aceptar
        </button>
        <a
          href="http://localhost:5173/edu-admin/admitido-como"
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

const formData = reactive({
  id: null,
  descripcion: "",
});
const cargando = ref(false);

const procesarForm = async () => {
  cargando.value = true;

  const admitido = {
    description: formData.descripcion,
  };

  try {
    const response = await fetch(`${API}/api/AdmitidoComo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admitido),
    });

    if (response.status === 204) {
      router.back();
    }
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
  } finally {
    cargando.value = false;
  }
};

onMounted(() => {});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
