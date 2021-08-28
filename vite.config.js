import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    WindiCSS()
  ]
}
