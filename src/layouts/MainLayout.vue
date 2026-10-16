
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="main-layout">
    <Navbar />

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  min-width: 0;
}
</style>
