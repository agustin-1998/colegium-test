<template>
  <main
    class="px-5 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 place-items-center"
  >
    <CardComponent
      v-for="student in students"
      :key="student.id"
      :id="student.id"
      :img="student.image"
      :name="student.name"
      :status="student.status"
      :curso="student.curso"
    />
  </main>
</template>

<script setup>
import CardComponent from './CardComponent.vue'

import { useStudentsStore } from '@/stores/students'
import { storeToRefs } from 'pinia'

const studentsStore = useStudentsStore()
const { students } = storeToRefs(studentsStore)
</script>
