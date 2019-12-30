// 
// ____    ____  __    __   _______      ______   ______   .__   __.  _______  __    _______ 
// \   \  /   / |  |  |  | |   ____|    /      | /  __  \  |  \ |  | |   ____||  |  /  _____|
//  \   \/   /  |  |  |  | |  |__      |  ,----'|  |  |  | |   \|  | |  |__   |  | |  |  __  
//   \      /   |  |  |  | |   __|     |  |     |  |  |  | |  . `  | |   __|  |  | |  | |_ | 
//    \    /    |  `--'  | |  |____    |  `----.|  `--'  | |  |\   | |  |     |  | |  |__| | 
//     \__/      \______/  |_______|    \______| \______/  |__| \__| |__|     |__|  \______| 
//   

const fs = require('fs');
module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
    http2: true,
    https: {
      key: fs.readFileSync('./src/config/ssl/key.key'),
      cert: fs.readFileSync('./src/config/ssl/cert.crt')
    },
    disableHostCheck: true
  }
}
