
<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="category">
    <h3>{{ name }}</h3>
    <slot />
  </div>
</template>
