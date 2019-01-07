const PATH = require('path');//引入pash模块
module.exports={
    //编译打包入口
    entry : "./src/index.js",
   //打包出口
    output:{
        path:PATH.resolve(__dirname,"dist"),//输出到dist目录下
        filename:"bundle.js"
    }

}