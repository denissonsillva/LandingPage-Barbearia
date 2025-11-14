<template>
  <section class="w-full py-16 bg-background">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-24"
    >
      <!-- Texto à esquerda -->
      <div
        class="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left"
      >
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
          <span class="text-primary">Nossa </span><span class="text-accent">História</span>
        </h2>
        <p class="text-base md:text-lg text-text mb-4 max-w-xl line-clamp-4">
          Desde o início, buscamos unir tradição e inovação para criar uma experiência única em
          cuidados masculinos. Nossa equipe é formada por profissionais apaixonados pelo que fazem,
          sempre atentos aos detalhes e ao bem-estar de cada cliente. Cada corte é pensado para
          valorizar o estilo de quem confia no nosso trabalho, com dedicação e respeito à
          individualidade. Aqui, tradição e modernidade caminham juntas para oferecer o melhor
          resultado.
        </p>
        <p class="text-base md:text-lg text-text mb-6 max-w-xl line-clamp-3">
          Em um ambiente acolhedor e sofisticado, proporcionamos momentos de relaxamento e
          autoestima. Valorizamos o atendimento próximo, a excelência nos serviços e o compromisso
          com a satisfação de cada cliente. Venha viver a experiência de uma barbearia feita para
          você.
        </p>
        <div class="flex gap-12 mb-8 w-full justify-center md:justify-start">
          <div class="flex flex-col items-center">
            <span class="text-3xl md:text-4xl font-extrabold text-accent">+20</span>
            <span class="text-sm text-text">Anos de dedicação</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-3xl md:text-4xl font-extrabold text-accent">+4000</span>
            <span class="text-sm text-text">Clientes atendidos</span>
          </div>
        </div>
        <div class="mt-2 text-left w-full max-w-xl mx-auto">
          <h3 class="font-bold text-lg mb-2 text-primary">Porque escolher a gente?</h3>
          <ul class="space-y-1">
            <li class="flex items-center text-text">
              <span class="w-2 h-2 rounded-full bg-accent mr-3 inline-block"></span>Profissionais
              altamente qualificados
            </li>
            <li class="flex items-center text-text">
              <span class="w-2 h-2 rounded-full bg-accent mr-3 inline-block"></span>Ambiente
              acolhedor e sofisticado
            </li>
            <li class="flex items-center text-text">
              <span class="w-2 h-2 rounded-full bg-accent mr-3 inline-block"></span>Atendimento
              personalizado e exclusivo
            </li>
          </ul>
        </div>
      </div>
      <!-- Imagem à direita -->
      <div class="md:w-1/2 w-full flex items-center justify-center">
        <div
          class="w-[320px] h-[420px] md:w-[420px] md:h-[540px] bg-surface rounded-2xl shadow-2xl flex items-center justify-center border-2 border-border overflow-hidden"
        >
          <img
            src="/images/barbearia-frente.jpg"
            alt="Fachada da barbearia"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica necessária no momento
</script>
