// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//   tailwindcss(),
//   ],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     transformer: 'postcss',      // lightningcss को skip करे
//   },
//   optimizeDeps: {
//     exclude: ['lightningcss'],   // pre-bundle से हटाए
//   },
// })

//ye use krna h
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lightningcss'], // agar koi lightningcss dependency ho
//   },
//   css: {
//     postcss: {}, // tailwind postcss automatically pick karega
//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'automatic', // try adding this
//   })],
// });


// new one
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     react({
//       fastRefresh: true, // Ensure React Fast Refresh enabled
//     }),
//   ],
// });


// 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
    }),
  ],
});

