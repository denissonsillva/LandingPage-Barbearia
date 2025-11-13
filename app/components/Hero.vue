<script setup>
import PrimaryButton from './PrimaryButton.vue';
import OutlineButton from './OutlineButton.vue';
</script>
<template>
  <section
    class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-primary to-accent relative"
  >
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 gap-24">
      <!-- Texto à esquerda -->
      <div class="md:w-[55%] w-full flex flex-col justify-center items-start md:items-start items-center text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Estilo <span class="text-accent">&</span><br />
          <span class="text-accent">Tradição</span>
        </h1>
        <p class="text-lg md:text-xl text-white mb-6 max-w-lg">
          Mais <span class="text-accent font-bold">20 anos</span> oferecendo os melhores cortes e cuidados masculinos. Tradição, qualidade e estilo em cada atendimento.
        </p>
        <div class="flex flex-col gap-2 mb-8">
          <div class="flex items-center gap-2 text-white text-base">
            <span class="text-accent">✂️</span> Cortes clássicos e modernos
          </div>
          <div class="flex items-center gap-2 text-white text-base">
            <span class="text-accent">🧔</span> Barbas e bigodes profissionais
          </div>
          <div class="flex items-center gap-2 text-white text-base">
            <span class="text-accent">⭐</span> Atendimento personalizado
          </div>
        </div>
        <div class="flex gap-4">
          <PrimaryButton>Agendar Horário</PrimaryButton>
          <OutlineButton>Ver Serviços</OutlineButton>
        </div>
      </div>
      <!-- Imagem à direita -->
      <div class="md:w-[45%] w-full flex items-center justify-center">
        <div class="w-[400px] h-[400px] md:w-[420px] md:h-[420px] bg-surface rounded-2xl shadow-2xl flex items-center justify-center border-2 border-border overflow-hidden relative">
          <img
            src="/images/barbearia-hero.webp"
            alt="Barbeiro cortando cabelo de cliente"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    <!-- Detalhes decorativos -->
    <div class="absolute top-10 right-10 w-6 h-6 bg-accent rounded-full opacity-30"></div>
    <div class="absolute bottom-10 left-10 w-4 h-4 bg-accent rounded-full opacity-20"></div>
  </section>
</template>
