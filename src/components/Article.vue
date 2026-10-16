
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  name: string
  quantity: number
  unit: string
  categoryId: number
}>()
const isClicked = ref(false)
</script>

<template>
  <div class="article">
    <v-checkbox
      v-model="isClicked"
      color="orange"
      density="compact"
      hide-details>
          <template v-slot:label>
              <div :class="{ Clicked: isClicked }">{{name}}</div>
          </template>

    </v-checkbox>
  </div>
</template>
<style scoped>
.Clicked {
  text-decoration: line-through;
}
</style>
