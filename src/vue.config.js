// 
// ____    ____  __    __   _______      ______   ______   .__   __.  _______  __    _______ 
// \   \  /   / |  |  |  | |   ____|    /      | /  __  \  |  \ |  | |   ____||  |  /  _____|
//  \   \/   /  |  |  |  | |  |__      |  ,----'|  |  |  | |   \|  | |  |__   |  | |  |  __  
//   \      /   |  |  |  | |   __|     |  |     |  |  |  | |  . `  | |   __|  |  | |  | |_ | 
//    \    /    |  `--'  | |  |____    |  `----.|  `--'  | |  |\   | |  |     |  | |  |__| | 
//     \__/      \______/  |_______|    \______| \______/  |__| \__| |__|     |__|  \______| 
//   
// Para evitar el error:
// Access to XMLHttpRequest at ‘http://backend.test/api/data' from origin ‘http://localhost:8080/' has been blocked by CORS policy.
// Que es una caracteristica que tienen los navegadores para proteger las Web Apps. Asi que añadimos
// la direccion del backend aqui. Quiza sea necesario agregar una linea para el servidor en produccion

module.exports = {
    devServer: {
        proxy: 'http://localhost:1337/',
    }
}