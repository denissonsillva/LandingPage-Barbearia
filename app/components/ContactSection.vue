<template>
  <section class="w-full py-16 bg-background">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        <span class="text-primary">Informações de</span>
        <span style="color: #c9a94b"> Contato</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-stretch min-h-[70vh]">
        <!-- Coluna Esquerda: Informações de contato -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-10 h-10 rounded-full bg-[#f6e7c1] flex items-center justify-center text-2xl" style="color: #c9a94b">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class="w-6 h-6"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/></svg>
              </span>
              <div>
                <h3 class="text-lg font-bold text-primary">Endereço</h3>
                <p class="text-base text-secondary leading-tight">Rua da Barbearia, 123<br>Centro - São Paulo, SP<br>CEP: 01234-567</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-10 h-10 rounded-full bg-[#f6e7c1] flex items-center justify-center text-2xl" style="color: #c9a94b">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class="w-6 h-6"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm6 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm0-6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm6 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'/></svg>
              </span>
              <div>
                <h3 class="text-lg font-bold text-primary">Telefone</h3>
                <p class="text-base text-secondary">(11) 99999-9999<br><span class="text-xs text-accent">WhatsApp disponível</span></p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="flex-shrink-0 w-10 h-10 rounded-full bg-[#f6e7c1] flex items-center justify-center text-2xl" style="color: #c9a94b">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class="w-6 h-6"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 12v1m0 4v.01M8 12v1m0 4v.01M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/></svg>
              </span>
              <div>
                <h3 class="text-lg font-bold text-primary">Email</h3>
                <p class="text-base text-secondary">contato@elitebarbershop.com</p>
              </div>
            </div>
          </div>
          <!-- Card de horário -->
          <div class="bg-white rounded-xl shadow-md p-6 mt-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-6 h-6 flex items-center justify-center" style="color: #c9a94b">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class="w-5 h-5"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/></svg>
              </span>
              <span class="font-bold text-primary">Horário de Funcionamento</span>
            </div>
            <div class="text-sm text-secondary grid grid-cols-2 gap-x-4">
              <div>Segunda a Sexta</div><div>08:00 - 18:00</div>
              <div>Sábado</div><div>08:00 - 17:00</div>
            </div>
          </div>
          <!-- Botão WhatsApp -->
        </div>
        <!-- Coluna Direita: Mapa -->
        <div class="relative flex flex-col items-center">
          <div class="w-full h-80 md:h-96 rounded-2xl border-4 border-[#f6e7c1] shadow-xl flex flex-col items-center justify-center p-6" style="background: linear-gradient(135deg, #c9a94b 0%, #6b4f27 100%);">
            <div class="flex flex-col items-center mb-4">
              <span class="w-12 h-12 rounded-full bg-[#c9a94b] flex items-center justify-center mb-2">
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' class="w-7 h-7"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/></svg>
              </span>
              <div class="text-center">
                <div class="font-bold text-lg text-primary">Elite Barber Shop</div>
                <div class="text-secondary text-sm">Rua da Barbearia, 123 - Centro</div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps?q=-23.55052,-46.633308&z=15&output=embed"
              width="100%"
              height="100%"
              style="border:0; min-height: 180px; border-radius: 1rem;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <!-- Card de fácil acesso -->
          <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-3 flex items-center gap-3 border border-[#f6e7c1]">
            <span class="w-8 h-8 rounded-full bg-[#c9a94b] flex items-center justify-center">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' class="w-5 h-5"><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z'/></svg>
            </span>
            <div>
              <div class="font-bold text-primary text-sm">Fácil Acesso</div>
              <div class="text-xs text-secondary">Centro da cidade</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhuma lógica JS necessária
</script>
