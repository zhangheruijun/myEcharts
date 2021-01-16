const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/video':{
        target:'http://192.168.1.169:18000',
        changeOrigin:true,
        pathRewrite:{
          '^/video':'/video'
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  },
    configureWebpack: {
      plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml'},
            { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js', to: 'js/'},
            { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf'}
        ])
      ]
    }
  }