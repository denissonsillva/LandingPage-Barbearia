<template>
  <section class="w-full py-16 bg-gradient-to-br from-secondary via-primary to-accent">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        <span class="text-white">Nossos</span>
        <span style="color: #c9a94b"> Serviços</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <ServiceCard
          imgSrc="/images/barbearia-barba-1.jpg"
          name="Barba Tradicional"
          price="R$ 30,00"
          description="Barba alinhada e acabamento clássico."
        />
        <ServiceCard
          imgSrc="/images/barbearia-barba-2.jpg"
          name="Barba Completa"
          price="R$ 40,00"
          description="Modelagem, hidratação e finalização."
        />
        <ServiceCard
          imgSrc="/images/barbearia-barba-3.webp"
          name="Barba + Hidratação"
          price="R$ 55,00"
          description="Barba macia, bonita e bem cuidada."
        />
        <ServiceCard
          imgSrc="/images/barbearia-corte-1.webp"
          name="Corte Clássico"
          price="R$ 45,00"
          description="Corte elegante, prático e tradicional."
        />
        <ServiceCard
          imgSrc="/images/barbearia-corte-2.jpeg"
          name="Corte Moderno"
          price="R$ 50,00"
          description="Tendência e acabamento perfeito."
        />
        <ServiceCard
          imgSrc="/images/barbearia-corte-3.jpeg"
          name="Corte Degradê"
          price="R$ 70,00"
          description="Visual renovado com praticidade."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';
</script>
