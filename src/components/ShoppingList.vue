
<script setup lang="ts">
import { computed } from 'vue'
import Category from './Category.vue'
import Article from './Article.vue'

const props = defineProps<{
  type: 'fixed' | 'special'
}>()

const title = computed(() =>
  props.type === 'fixed' ? 'Lista Fija' : 'Lista Especial'
)

const description = computed(() =>
  props.type === 'fixed'
    ? 'Artículos recurrentes para cada visita'
    : 'Artículos para una ocasión especial'
)
</script>

<template>
  <div class="shopping-list">
    <!-- Header -->
    <header class="shopping-list-header">
      <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>

      <!-- Profile placeholder -->
      <div class="profile-circle"></div>
    </header>

    <!-- Section title and action -->
    <div class="shopping-list-toolbar">
      <h2>ORGANIZADO POR CATEGORÍA</h2>

      <v-btn color="orange" prepend-icon="mdi-plus" rounded="lg">
        {{ type === 'fixed' ? 'Artículo Fijo' : 'Agregar Artículo' }}
      </v-btn>
    </div>

    <!-- White content rectangle -->
    <div class="shopping-list-content">
      <Category name="Lácteos">
        <Article
          name="Leche entera"
          :quantity="2"
          unit="L"
          :category-id="1"
        />
      </Category>
    </div>
  </div>
</template>

<style scoped>
.shopping-list {
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  background-color: #faf7f3;
  color: #292321;
}

/* Header */
.shopping-list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.shopping-list-header h1 {
  font-size: 24px;
  font-weight: 700;
}

.shopping-list-header p {
  font-size: 14px;
  color: #756b67;
  max-width: 160px;
  line-height: 1.2;
}

/* Profile */
.profile-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ddd3cc;
}

/* Section title and button */
.shopping-list-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.shopping-list-toolbar h2 {
  font-size: 13px;
  font-weight: 700;
  color: #756b67;
}

/* White rectangle */
.shopping-list-content {
  width: 100%;
  min-height: 70vh;
  background-color: white;
  border: 1px solid #e9ded6;
  border-radius: 16px;
}

.category {
  padding: 16px;
}

.category h3 {
  font-size: 14px;
  font-weight: 700;
  color: rgb(var(--v-theme-orange));
  margin-bottom: 8px;
}

.article {
  display: flex;
  align-items: center;
}
</style>
