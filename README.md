# Parte 1: Conceptos Basicos.

## Comandos a utilizar para crear un proyecto con Capacitor + NextJS
Debemos de tener instalados los siguientes programas para soporte nativo:
    - CocoaPods
    - XCodeBuild
    - Android Studio

Nuestro .gitignore debe de incluir: ios/ y android/.
Esto se hace con la finalidad de no respaldar las carpetas de los ambientes nativos generados por @Capacitor.


### 1. Crear un proyecto con "npx create-next-app@latest"
Recomendacion: Utilizar Javascript, TailwindCSS y App Router.

### 2. Dejar next.config.js de la siguiente manera:
    
    const nextConfig = {
        output: "export"
    }

Esto nos permite exportar archivos estaticos con NextJS 13 en App Router.

### 3. Instalar @Capacitor como una dependencia de desarrollador:
npm install -D @capacitor/cli

### 4. Iniciar @Capacitor en la carpeta del proyecto:
npx cap init

### 5. Modificar "capacitor.config.ts":
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'version-1',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

Debemos de dejar declarado el nombre de la carpeta que contiene los archivos estaticos de nuestra aplicacion.

### 6. Instalar las dependencias para compilar a dispositivos moviles:
npm install @capacitor/core @capacitor/ios @capacitor/android

### 7. Añadir soporte nativo para IOS:
npx cap add ios

### 8. Añadir soporte nativo para Android:
npx cap add android

### 9. Abrir el proyecto de forma nativa en alguna plataforma:
npx cap open ios
npx cap open android

### 10. Añadir nuestra ip a "capacitor.config.ts" como servidor de desarrollo:
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'version-1',
  webDir: 'out',
  server: {
    url: "http://x.x.x.x", <- Reemplazar con la 'local ip' de tu maquina. EJ: "http://192.168.0.20"
    cleartext: true
  }
};

### 11. Sincroniza los cambios realizados a la aplicacion (Fast Refresh):
npx cap sync



# Parte 2: Plugins y acciones nativas.

https://youtu.be/xQKtDgJXrlM?t=811