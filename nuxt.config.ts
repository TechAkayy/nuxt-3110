import {addVitePlugin} from '@nuxt/kit'

export default defineNuxtConfig({
  modules: [
    function (inlineOptions, nuxt) {
      addVitePlugin({
        name: 'live-designer',
        config: (config, {command, mode}) => {
          return config
        },
      })
    },
  ],
})
