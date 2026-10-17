
<template>
  <nav class="navbar">
    <div class="pa-4">
      <!-- Logo / Title -->
      <div class="d-flex align-center ga-2 mb-6 text-orange">
        <v-icon icon="mdi-basket-outline" size="24" />
        <span class="font-weight-bold">Mi Compra</span>
      </div>

      <!-- Navigation -->
      <v-list nav density="compact">
        <v-list-item
          prepend-icon="mdi-home-outline"
          title="Inicio"
          color="orange"
          to="/"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-sync"
          title="Lista Fija"
          color="orange"
          to="/fixed-list"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Lista Especial"
          to="/special-list"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Cambiar contraseña"
          to="/change-password"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Productos Frecuentes"
          to="/frequent-products"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Configuración de lista"
          to="/list-config"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Historial de listas"
          to="/list-history"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Configuracion despensas"
          to="/pantries-config"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Despensas"
          to="/pantries"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Configuración despensa"
          to="/pantry-config"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Despensa"
          to="/pantry"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Producto"
          to="/product"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Perfil"
          to="/profile"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Recuperar contraseña"
          to="/recover-password"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Registrarse"
          to="/register"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Sesión cerrada"
          to="/session-closed"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />

        <v-list-item
          prepend-icon="mdi-file-document-plus-outline"
          title="Login"
          to="/login"
          active-class="nav-selected"
          class="orange-hover"
          rounded="lg"
        />
      </v-list>

      <!-- New List Button -->
      <v-btn
        color="orange"
        prepend-icon="mdi-plus"
        block
        class="mt-5"
        rounded="lg"
        to="/new-list"
      >
        Nueva lista
      </v-btn>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 220px;
  height: 100vh;
  background-color: white;
}

/* 
    TODO if this goes to main.css it doesn't work, idk why
    This is the style that changes the colour of the selected page
*/
.navbar :deep(.v-list-item.nav-selected) {
  background-color: rgb(var(--v-theme-orange), 0.2);
  color: rgb(var(--v-theme-orange));
}

</style>
