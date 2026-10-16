<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  name: string

}>()
const Categorias: String[]= ['Carne', 'Lacteos', 'Vegetales']
Categorias.push('nueva categoria')
const Nombre = ref('')
const Cantidad= ref(1)
const Unidad = ref('')
const Cat = ref('')
const NewCat=ref('')


</script>
<template>
<v-dialog max-width="800">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="orange"
    prepend-icon="mdi-plus" 
    rounded="lg"
    >{{ name }}</v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Agregar Artículo">
        <v-form>
             <v-card-text>
        <v-row density="comfortable">
        <v-col cols="12" md="6" >
            <v-text-field
            v-model=Nombre
            hide-details="auto"
            hint="Nombre entre 3 y 30 caracteres"
            label="Nombre del articulo"
            placeholder=""
            type='input'
            required 
            persistent-placeholder>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6" >
            <v-select
            v-model=Cat
            label="Categoria"
            :items=Categorias
></v-select>
        </v-col >
        <v-col cols="12" v-if="Cat==='nueva categoria'">

            <v-text-field
            v-model=NewCat
            hide-details="auto"
            hint="Categoria entre 3 y 30 caracteres"
            label="Categoria del articulo"
            placeholder=""
            type='input'
            required 
            persistent-placeholder>
            </v-text-field>
        </v-col>


        <v-col cols="12" md="6" >
            <v-number-input
            v-model=Cantidad
            :reverse="false"
            controlVariant="stacked"
            label="Cantidad"
            :hideInput="false"
            :inset="false"
            :min="0"
            required
></v-number-input>
        </v-col>
        <v-col cols="12" md="6" >
             <v-text-field
            v-model=Unidad
            hide-details="auto"
            label="Tipo de unidad"
            placeholder="ej: KG"
            type='input'
            persistent-placeholder
            required>
            </v-text-field>
        </v-col>

        </v-row>

      </v-card-text>
       <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Cancelar"
          @click="isActive.value = false"
        ></v-btn>
        <v-btn 
        color="orange"
        prepend-icon="mdi-plus" 
        rounded="lg" 
        type="submit" block>Agregar</v-btn>

      </v-card-actions>
    </v-form>
       

     
    </v-card>
  </template>
</v-dialog>
</template>