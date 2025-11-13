<template>
  <div
    class="bg-surface rounded-xl shadow-md border border-border flex flex-col w-[220px] md:w-[260px] h-[320px] md:h-[384px] overflow-hidden transition hover:scale-105 hover:shadow-lg"
  >
    <div
      class="w-full flex items-center justify-center bg-background"
      style="height: 60%; min-height: 132px; max-height: 230px"
    >
      <img :src="imgSrc" :alt="name" class="object-cover w-full h-full" />
    </div>
    <div
      class="w-full flex flex-col items-center justify-center px-3 py-2"
      style="height: 40%; min-height: 88px; max-height: 154px"
    >
      <h4 class="text-xl md:text-2xl font-extrabold text-primary mb-1 text-center">{{ name }}</h4>
      <p v-if="description" class="text-sm md:text-base text-muted mb-2 text-center font-normal">
          <span class="line-clamp-2">{{ description }}</span>
      </p>
      <p class="text-accent text-lg md:text-xl font-bold mt-1 text-center">{{ price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  name: String,
  price: String,
  description: String,
});
</script>
