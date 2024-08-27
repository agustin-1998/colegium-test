<template>
  <header>
    <div class="flex justify-center items-center flex-col">
      <section>
        <h1 class="text-left">Resumen del día</h1>
        <div class="mt-2 space-x-5 text-xl flex justify-between items-center">
          <div class="flex justify-center items-center space-x-2">
            <div class="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center">
              <span class="text-white">P</span>
            </div>
            <span class="text-green-500">{{ useStudent.presente }}</span>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <div class="h-10 w-10 rounded-full bg-sky-500 flex justify-center items-center">
              <span class="text-white">V</span>
            </div>
            <span class="text-sky-500">{{ useStudent.presenteVirtual }}</span>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <div class="h-10 w-10 rounded-full bg-red-500 flex justify-center items-center">
              <span class="text-white">A</span>
            </div>
            <span class="text-red-500">{{ useStudent.ausente }}</span>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <div class="h-10 w-10 rounded-full bg-yellow-500 flex justify-center items-center">
              <span class="text-white">T</span>
            </div>
            <span class="text-yellow-500">{{ useStudent.tarde }}</span>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<script setup>
import { useStudentsStore } from '@/stores/students'

const useStudent = useStudentsStore()
</script>
