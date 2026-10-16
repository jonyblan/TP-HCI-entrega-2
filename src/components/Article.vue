
<script setup lang="ts">
defineProps<{
  name: string
  quantity: number
  unit: string
  categoryId: number
}>()
</script>

<template>
  <div class="article">
    <v-checkbox
      :label="name"
      density="compact"
      hide-details
    />
  </div>
</template>
