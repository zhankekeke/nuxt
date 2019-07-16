module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
     color: '#ccc',
      loading: '~components/loading.vue'
    },
    
  plugins: [
  // ssr: true表示这个插件只在服务端起作用
       {src: '~/plugins/ElementUI', ssr: true },
       {src: '~/plugins/iview', ssr: true },
       
    ],
  css:[
    '~assets/css/resets.css',
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/css/main.less', lang: 'less' }
   
  ],
  modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        prefix: '/api/',
        proxy: true // Can be also an object with default options
    },

    proxy: {
        '/api/': { target: 'http://localhost:8888', pathRewrite: {'^/api/': ''} }
    },
  /*
  ** Build configuration
  */
  build: {
    //防止多次打包
    vendor:['element-ui','iview'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

