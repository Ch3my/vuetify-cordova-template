# vue-testing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Notas del Desarrollador
Esta es una prueba de integracion como stack de desarrollo para Vuetify y cordova que permite crear
una app Android. Incluye moment, loadsh, numeral, un menu, cordova-camera-plugin, cordova-geolocation-plugin, 
cordova-splashscreen-plugin, un layout Dinamico, babel, lint

### Edicion necesaria al Iniciar el Project
hacer npm install en src y src-cordova. Agregar las plataformas dentro de src-cordova con cordova platform add android (todas las que necesites)
Para compilar debes instalar java sdk y preferentemente android studio. Con Android estudio descargas una ISO de android y seteas
un emulador. Si puedes emular algo desde android studio podras emular desde la consola de comandos con npm run cordova-serve-android

### Icono y SplashScreen
Color de Fondo del SplashScreen

### Identifiacion de la APP
en src/config.xml se encuentra el id y el nombre de la aplicacion