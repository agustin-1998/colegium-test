<template>
  <footer
    class="fixed bottom-0 flex justify-center md:justify-end items-center p-3 w-full bg-gray-100"
  >
    <div class="flex justify-center items-center space-x-5">
      <div class="flex justify-center items-center md:space-x-2 flex-col md:flex-row">
        <div class="h-8 w-8 rounded-full bg-green-500 flex justify-center items-center">
          <span class="text-white">P</span>
        </div>
        <span class="text-green-500">Presente</span>
      </div>
      <div class="flex justify-center items-center md:space-x-2 flex-col md:flex-row">
        <div class="h-8 w-8 rounded-full bg-sky-500 flex justify-center items-center">
          <span class="text-white">V</span>
        </div>
        <span class="text-sky-500">Presente Virtual</span>
      </div>
      <div class="flex justify-center items-center md:space-x-2 flex-col md:flex-row">
        <div class="h-8 w-8 rounded-full bg-red-500 flex justify-center items-center">
          <span class="text-white">A</span>
        </div>
        <span class="text-red-500">Ausente</span>
      </div>
      <div class="flex justify-center items-center md:space-x-2 flex-col md:flex-row">
        <div class="h-8 w-8 rounded-full bg-yellow-500 flex justify-center items-center">
          <span class="text-white">T</span>
        </div>
        <span class="text-yellow-500">Tarde</span>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
