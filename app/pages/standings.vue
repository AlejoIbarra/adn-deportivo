<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { fetchTeamImage } from '@/composables/useImageFetcher'

const { data: standings, pending, error } = await useFetch('/api/standings')

// Mapa para guardar imágenes por teamId o pictureId
const teamImages = ref<Record<string, string>>({})

onMounted(async () => {
  if (!standings.value) return

  for (const team of standings.value) {
    if (team.picture) {
    //   const img = await fetchTeamImage(team.picture)
    //   if (img) {
    //     teamImages.value[team.picture] = img
    //   }
    }
  }
})
</script>


<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Tabla de Posiciones</h1>

    <div v-if="pending">Cargando...</div>
    <div v-else-if="error">Error al cargar la tabla.</div>
    <div v-else>
      <table class="w-full text-sm text-left border border-gray-200">
        <thead class="bg-gray-100 text-xs uppercase">
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Equipo</th>
            <th class="px-4 py-2">PJ</th>
            <th class="px-4 py-2">PG</th>
            <th class="px-4 py-2">PE</th>
            <th class="px-4 py-2">PP</th>
            <th class="px-4 py-2">GF</th>
            <th class="px-4 py-2">GC</th>
            <th class="px-4 py-2">DG</th>
            <th class="px-4 py-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in standings" :key="team.name" class="border-t">
            <td class="px-4 py-2">{{ index + 1 }}</td>
            <td class="px-4 py-2 flex items-center gap-2">
            <img
            v-if="imageSrc"
            :src="imageSrc"
            alt="Escudo del equipo"
            class="w-16 h-16 object-contain"
            />
              {{ team.name }}
            </td>
            <td class="px-4 py-2">{{ team.played }}</td>
            <td class="px-4 py-2">{{ team.won }}</td>
            <td class="px-4 py-2">{{ team.drawn }}</td>
            <td class="px-4 py-2">{{ team.lost }}</td>
            <td class="px-4 py-2">{{ team.gf }}</td>
            <td class="px-4 py-2">{{ team.ga }}</td>
            <td class="px-4 py-2">{{ team.gd }}</td>
            <td class="px-4 py-2 font-bold">{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
