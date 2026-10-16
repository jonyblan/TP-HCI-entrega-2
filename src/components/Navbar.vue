
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
  position: fixed;
  top: 0;
  left: 0;
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
