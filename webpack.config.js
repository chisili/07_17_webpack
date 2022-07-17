// common.js
// modeul path, plugin
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    // 시작점 : js
    entry:'./js/main.js',
    //  결과물 패스 설정
    output:{
        //  path:path.resolve(__dirname,'dist'),
        //  filename:'main.js',
        clean:true
    },
    // 필요한 모듈의 설정
    module:{
       rules:[
          {test:/\.s?css$/,
            use:['style-loader',
                'css-loader',
               'sass-loader'
           ]},
           {test:/\.js$/,
           exclude:/node_modules/,
           use:[
            'babel-loader'
           ]
        }
       ]
     },
    // // 다양한 플러인
   
    plugins:[
     new HtmlPlugin({
          template:'index.html'
      }),
     new CopyPlugin({
          patterns:[
          {from:'static'}
            ]
        })
    ]
    // ,devServer:{
    //     host:'locahost',
    //     port:8080,
    //     hot:true
    // }
}