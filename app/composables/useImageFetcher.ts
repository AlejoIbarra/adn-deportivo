// // composables/useImageFetcher.ts
// export async function fetchTeamImage(uuid: string): Promise<string | null> {

//   const apiKey = process.env.API_KEY
//   // if (!apiKey) {
//   //   throw new Error('API_KEY no está definido en el entorno')
//   // }

//   try {
//     const res = await fetch(`https://api-latam.analyticom.de/api/live/FCF/images/${uuid}?organizationIdFilter=329`, {
//       method: 'GET',
//       headers: {
//         'api_key': apiKey
//       }
//     })

//     if (!res.ok) {
//       console.error('Error al obtener imagen', await res.text())
//       return null
//     }

//     const data = await res.json()

//     // Devuelve la imagen como data URL (base64)
//     return `data:${data.contentType};base64,${data.value}`
//   } catch (e) {
//     console.error('Fallo al cargar imagen:', e)
//     return null
//   }
// }
