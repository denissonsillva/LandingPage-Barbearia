<template>
  <div class="min-h-screen w-full overflow-y-auto">
    <Hero />
    <AboutUs />
    <ServicesSection />
    <!-- Outras seções futuras aqui -->
  </div>
</template>

<script setup>
import AboutUs from '../components/AboutUs.vue';
import Hero from '../components/Hero.vue';
import ServicesSection from '../components/ServicesSection.vue';
</script>
