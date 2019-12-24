module.exports = function (context) {
    console.log("Preparing iOS spinner position correction");
    const fs = context.requireCordovaModule('fs');
    const pathToProject = '../platforms/android/app/src/main/java/org/apache/cordova/spashScreen.java';
    // const pathToCDVSplashScreenFile = `${context.opts.projectRoot}/${pathToProject}`;
    const pathToCDVSplashScreenFile = `${pathToProject}`;

    fs.access(pathToCDVSplashScreenFile, fs.F_OK, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        // En platforms/android/app/src/main/java/org/apache/cordova/spashScreen.java
        // Linea 304 en Color.<Algo> se cambia el color del SplashScreen
        const dataRead = fs.readFileSync(pathToCDVSplashScreenFile, 'utf8');
        const newData = dataRead.replace('splashImageView.setBackgroundColor(preferences.getInteger("backgroundColor", Color.BLACK));',
            'splashImageView.setBackgroundColor(preferences.getInteger("backgroundColor", Color.WHITE));');

        fs.writeFileSync(pathToCDVSplashScreenFile, newData, 'utf8');
        console.log("Done preparing iOS spinner position");
    });
};
