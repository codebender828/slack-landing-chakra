import { ChakraLoaderPlugin } from 'chakra-loader'
import * as iconSet from './utils/icons'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Slack | Welcome to your new HQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', sizes: '16x16 32x32 48x48', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/chakra-ui/chakra-ui-vue/tree/develop/packages/nuxt-chakra
    // Doc: https://github.com/nuxt-community/emotion-module#readme
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    'nuxt-lazy-load'
  ],
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet
    },
    extendTheme: {
      fonts: {
        heading: 'Lexend Deca, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        body: 'Lexend Deca, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      shadows: {
        outline: '0 0 0 3px rgb(91 29 98 / 58%)'
      },
      colors: {
        slack: {
          50: '#fce9fe',
          100: '#eac3f0',
          200: '#da9de2',
          300: '#cb76d5',
          400: '#bc4fca',
          500: '#a336b0',
          600: '#7f2a89',
          700: '#5b1d62',
          800: '#38103c',
          900: '#150418'
        },
        yellow: {
          50: '#fff6dd',
          100: '#fbe5b3',
          200: '#f5d487',
          300: '#f0c359',
          400: '#ecb12d',
          500: '#d29813',
          600: '#a4760c',
          700: '#765406',
          800: '#473300',
          900: '#1b1000'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config) {
      config.plugins.push(
        new ChakraLoaderPlugin()
      )
    }
  }
}
