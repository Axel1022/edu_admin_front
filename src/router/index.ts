import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudiantesView from "../views/EstudiantesView.vue";
import CarreraView from "../views/CarrerasView.vue";
import CarreraFormularioView from "../views/CarreraFormView.vue";
import CarreraFormularioEditView from "../views/CarreraFormEditarView.vue";
import AdmitidoComoView from "../views/AdmitidoComoView.vue";
import AdmitidoComoFormularioView from "../components/admitido-como/Formulario.vue";
import AdmitidoComoFormularioEditView from "../components/admitido-como/FormularioEdit.vue";
import EstudianteFormularioEditView from "../components/estudiante/FormularioEdit.vue";
import EstudianteFormularioView from "../components/estudiante/Formulario.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/edu-admin/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/edu-admin/estudiantes",
      name: "estudiantes",
      component: EstudiantesView,
    },
    {
      path: "/edu-admin/estudiante/formulario",
      name: "estudiante-formulario",
      component: EstudianteFormularioView,
    },
    {
      path: "/edu-admin/estudiante-editar/:id",
      name: "studiante-formulario-edit",
      component: EstudianteFormularioEditView,
    },
    {
      path: "/edu-admin/carreras",
      name: "carreras",
      component: CarreraView,
    },
    {
      path: "/edu-admin/carrera/formulario",
      name: "carrera-formulario",
      component: CarreraFormularioView,
    },
    {
      path: "/edu-admin/carrera-editar/:id",
      name: "carrera-formulario-edit",
      component: CarreraFormularioEditView,
    },
    {
      path: "/edu-admin/admitido-como",
      name: "admitido-como",
      component: AdmitidoComoView,
    },
    {
      path: "/edu-admin/admitido-como/formulario",
      name: "admitido-como-formulario",
      component: AdmitidoComoFormularioView,
    },
    {
      path: "/edu-admin/admitido-como/formulario-edit/:id",
      name: "admitido-como-formulario-edit",
      component: AdmitidoComoFormularioEditView,
    },
  ],
});

export default router;
