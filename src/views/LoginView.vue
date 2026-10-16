
<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue'

import { ref } from 'vue'
const username = ref('')
const password = ref('')
</script>

<template>

  <MainLayout>
    <main>
        <div class="login-page">
    <v-card class="login-card pa-8" rounded="lg" elevation="2">
      <h1 class="text-h4 font-weight-bold text-center mb-2">
        ¡Bienvenido de nuevo!
      </h1>

      <p class="text-center mb-8">
        Ingresá a tu cuenta para continuar
      </p>

      <v-text-field
        v-model="username"
        label="Usuario"
        variant="outlined"
        class="mb-3"
      />

      <v-text-field
        v-model="password"
        label="Contraseña"
        type="password"
        variant="outlined"
        class="mb-3"
      />

      <v-btn
        color="orange"
        block
        size="large"
      >
        Iniciar sesión
      </v-btn>

      <p class="text-center mt-6">
        ¿Sos nuevo?
        <RouterLink to="/register" class="text-orange font-weight-bold">
          Registrate
        </RouterLink>
      </p>
    </v-card>
  </div>
    </main>
  </MainLayout>
  
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.login-card {
  width: 100%;
  max-width: 420px;
}
</style>
