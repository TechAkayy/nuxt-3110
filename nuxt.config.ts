import {addVitePlugin} from '@nuxt/kit'
import {mergeConfig} from 'vite'

export default defineNuxtConfig({
  modules: [
    function (inlineOptions, nuxt) {
      addVitePlugin({
        name: 'live-designer',
        config: (config, {command, mode}) => {
          config.clearScreen = false
          return mergeConfig(config, {
            clearScreen: false,
          })
        },
      })
    },
  ],
})
