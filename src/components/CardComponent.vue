<template>
  <div class="md:max-w-fit rounded-2xl border border-1 border-gray-400 overflow-hidden">
    <div class="bg-gray-300 w-full text-center">
      <span>{{ curso }}</span>
    </div>
    <section class="p-5">
      <div
        class="flex justify-start items-center space-x-2"
        @click="showAlert({ name, status, id })"
      >
        <img
          :src="img"
          :alt="'student-' + name"
          width="80"
          class="border border-1 border-gray-400 object-contain rounded-full"
        />
        <span>{{ name }}</span>
      </div>
      <div class="flex justify-between items-center mt-5 space-x-3">
        <button
          :class="`rounded-2xl text-2xl border border-1 px-5 py-3 ${status === 'presente' ? 'bg-green-500 text-white' : 'border-green-500 text-green-500'}`"
          @click="setStatus({ id, status: 'presente' })"
        >
          P
        </button>
        <button
          :class="`rounded-2xl text-2xl border border-1 px-5 py-3 ${status === 'presente-virtual' ? 'bg-sky-500 text-white' : 'border-sky-500 text-sky-500'}`"
          @click="setStatus({ id, status: 'presente-virtual' })"
        >
          V
        </button>
        <button
          :class="`rounded-2xl text-2xl border border-1 px-5 py-3 ${status === 'ausente' ? 'bg-red-500 text-white' : 'border-red-500 text-red-500'}`"
          @click="setStatus({ id, status: 'ausente' })"
        >
          A
        </button>
        <button
          :class="`rounded-2xl text-2xl border border-1 px-5 py-3 ${status === 'tarde' ? 'bg-yellow-500 text-white' : 'border-yellow-500 text-yellow-500'}`"
          @click="setStatus({ id, status: 'tarde' })"
        >
          T
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStudentsStore } from '@/stores/students'

defineProps({
  img: String,
  name: String,
  status: String,
  id: Number,
  curso: String
})

const router = useRouter()

const store = useStudentsStore()

const { changeStatus } = store

const showAlert = ({ name, status, id }) => {
  const show = `
    id: ${id}
    status: ${status}
    name: ${name}
  `

  router.push(`/` + id)

  window.alert(show)
}

const setStatus = ({ id, status }) => {
  changeStatus({ id, status })
}
</script>
