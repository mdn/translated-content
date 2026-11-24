---
title: Configuración de un entorno de desarrollo de Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Ahora que ya sabes para qué sirve [Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducción_a_express), te mostraremos cómo configurar y probar un entorno de desarrollo Node/Express en Windows, Linux (Ubuntu) o macOS. Sin importar el sistema operativo que uses, este artículo te da lo que necesitas para empezar a desarrollar aplicaciones Express.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Saber cómo abrir una terminal / línea de comandos. Saber cómo instalar paquetes de software en el sistema operativo de tu computadora de desarrollo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Configurar un entorno de desarrollo para Express en tu computadora.</td>
    </tr>
  </tbody>
</table>

## Descripción general del entorno de desarrollo de Express

_Node_ y _Express_ hacen que sea muy fácil preparar tu computadora para empezar a desarrollar aplicaciones web. Esta sección ofrece un resumen de las herramientas necesarias, explica algunos de los métodos más sencillos para instalar Node (y Express) en Ubuntu, macOS y Windows, y muestra cómo puedes probar tu instalación.

### ¿Qué es el entorno de desarrollo de Express?

El entorno de desarrollo de _Express_ incluye una instalación de _Node.js_ y el _gestor de paquetes npm_ en tu computadora local.

_Node_ y el gestor de paquetes _npm_ se instalan juntos a partir de paquetes binarios preparados, instaladores, gestores de paquetes del sistema operativo o desde el código fuente (como se muestra en las siguientes secciones). Luego, _Express_ se instala mediante npm como una dependencia de cada una de tus aplicaciones web _Express_ (junto con otras bibliotecas, como motores de plantillas, controladores de bases de datos, middleware de autenticación, middleware para servir archivos estáticos, etc.).

Para el tutorial de la Biblioteca Local, construiremos un proyecto que sigue el [patrón MVC](/es/docs/Glossary/MVC), usando una estructura de aplicación modular que podremos ampliar según sea necesario.

> [!NOTE]
> A diferencia de otros frameworks web, el entorno de desarrollo no incluye un servidor web de desarrollo independiente. ¡En _Node_/_Express_, una aplicación web crea y ejecuta su propio servidor web!

Existen otras herramientas periféricas que forman parte de un entorno de desarrollo típico, entre ellas los [editores de código](/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) y las herramientas de gestión de control de versiones como [Git](https://git-scm.com/) para gestionar de forma segura las distintas versiones de tu código. Damos por hecho que ya tienes instaladas este tipo de herramientas (en particular, un editor de código).

### ¿Qué sistemas operativos son compatibles?

_Node_ se puede ejecutar en Windows, macOS, muchas variantes de Linux, Docker, etc. Hay una lista completa en la página de [descargas](https://nodejs.org/en/download) de Node.js. Prácticamente cualquier computadora personal debería tener el rendimiento necesario para ejecutar Node durante el desarrollo. _Express_ se ejecuta en un entorno _Node_ y, por lo tanto, puede ejecutarse en cualquier plataforma que ejecute _Node_.

En este artículo damos instrucciones de instalación para Windows, macOS y Ubuntu Linux.

### ¿Qué versión de Node/Express deberías usar?

Existen muchas [versiones de Node](https://nodejs.org/en/blog/release/): las más recientes incluyen correcciones de errores, compatibilidad con versiones más nuevas de los estándares de ECMAScript (JavaScript) y mejoras en las API de Node.

En general, deberías usar la versión _LTS (con soporte a largo plazo)_ más reciente, ya que será más estable que la versión "actual" y, al mismo tiempo, contará con funciones relativamente recientes (y seguirá recibiendo mantenimiento activo). Deberías usar la versión _Current_ si necesitas alguna función que no esté presente en la versión LTS.

Para _Express_ deberías usar la versión LTS más reciente de Node.

### ¿Qué pasa con las bases de datos y otras dependencias?

Otras dependencias, como los controladores de bases de datos, los motores de plantillas, los motores de autenticación, etc., forman parte de la aplicación y se importan en el entorno de la aplicación mediante el gestor de paquetes npm. Hablaremos de ellas en artículos posteriores específicos de cada aplicación.

## Instalación de Node

Para usar _Express_ tendrás que instalar _Node.js_ y el [gestor de paquetes de Node (npm)](https://docs.npmjs.com/) en tu sistema operativo.
Para que esto sea más fácil, primero instalaremos un gestor de versiones de Node y luego lo usaremos para instalar las versiones más recientes con soporte a largo plazo (LTS) de Node y npm.

> [!NOTE]
> También puedes instalar Node.js y npm con los instaladores disponibles en <https://nodejs.org/en/> (selecciona el botón para descargar la compilación LTS que dice "Recommended for most users"), o puedes [instalarlos usando el gestor de paquetes de tu sistema operativo](https://nodejs.org/en/download) (nodejs.org).
> Recomendamos encarecidamente usar un gestor de versiones de Node, ya que estos facilitan instalar, actualizar y cambiar entre versiones específicas de Node y npm.

### Windows

Existen varios gestores de versiones de Node para Windows.
Aquí usaremos [nvm-windows](https://github.com/nvm-windows/nvm), que goza de gran reconocimiento entre los desarrolladores de Node.

Instala la versión más reciente usando el instalador que prefieras desde la página de [nvm-windows/releases](https://github.com/nvm-windows/nvm/releases).
Después de instalar `nvm-windows`, abre un símbolo del sistema (o PowerShell) e ingresa el siguiente comando para descargar la versión LTS más reciente de Node.js y npm:

```bash
nvm install lts
```

Ejecuta `nvm list` para ver las versiones instaladas. Para este tutorial, elige Node.js 24 o posterior. Establécela como la _versión actual_ con el comando de abajo, reemplazando `<version>` por la versión que instalaste:

```bash
nvm use <version>
```

> [!NOTE]
> Si recibes advertencias de "Access Denied" (Acceso denegado), deberás ejecutar este comando en un símbolo del sistema con permisos de administrador.

Usa el comando `nvm --help` para conocer otras opciones de línea de comandos, como listar todas las versiones de Node disponibles y todas las versiones de NVM descargadas.

### Ubuntu y macOS

Existen varios gestores de versiones de Node para Ubuntu y macOS.
[nvm](https://github.com/nvm-sh/nvm) es uno de los más populares, y es la versión original en la que se basa `nvm-windows`.
Consulta [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) para ver las instrucciones de terminal para instalar la versión más reciente de nvm.

Después de instalar `nvm`, abre una terminal e ingresa el siguiente comando para descargar la versión LTS más reciente de Node.js y npm:

```bash
nvm install --lts
```

El comando `nvm list` muestra las versiones instaladas y la versión actual. Para este tutorial, elige Node.js 24 o posterior. Establécela como la _versión actual_ con el comando de abajo, reemplazando `<version>` por la versión que instalaste:

```bash
nvm use <version>
```

Usa el comando `nvm --help` para conocer otras opciones de línea de comandos.
Suelen ser similares, o iguales, a las que ofrece `nvm-windows`.

### Prueba de tu instalación de Node.js y npm

Una vez que hayas configurado `nvm` para usar una versión específica de Node, puedes probar la instalación.
Una buena forma de hacerlo es usar el comando "version" en tu terminal/símbolo del sistema y comprobar que se devuelve la cadena de versión esperada:

```bash
> node -v
v24.0.0
```

El gestor de paquetes _npm_ de _Node.js_ también debería haberse instalado, y se puede probar de la misma manera:

```bash
> npm -v
11.3.0
```

Los números de versión pueden diferir de los mostrados arriba. Con ambos comandos funcionando, puedes configurar el proyecto de la Biblioteca Local.

## Uso de npm

Además del propio _Node_, [npm](https://docs.npmjs.com/) es la herramienta más importante para trabajar con aplicaciones _Node_.
`npm` se usa para obtener los paquetes (bibliotecas de JavaScript) que una aplicación necesita para el desarrollo, las pruebas o la producción, y también se puede usar para ejecutar pruebas y herramientas empleadas en el proceso de desarrollo.

> [!NOTE]
> Desde la perspectiva de Node, _Express_ es solo otro paquete que necesitas instalar con npm y luego importar en tu propio código.

Puedes usar npm manualmente para obtener cada paquete necesario por separado. Sin embargo, normalmente gestionamos las dependencias mediante un archivo de definición de texto plano llamado [package.json](https://docs.npmjs.com/files/package.json/). Este archivo enumera todas las dependencias de un "paquete" de JavaScript en particular, incluidos el nombre del paquete, la versión, la descripción, el archivo inicial a ejecutar, las dependencias de producción, las dependencias de desarrollo, las versiones de _Node_ con las que puede funcionar, etc. El archivo **package.json** debería contener todo lo que npm necesita para obtener y ejecutar tu aplicación (si estuvieras escribiendo una biblioteca reutilizable, podrías usar esta definición para subir tu paquete al repositorio de npm y ponerlo a disposición de otros usuarios).

### Creación del proyecto

En esta sección crearemos el proyecto de la Biblioteca Local. Al final de este artículo tendrás listos la configuración del paquete y sus dependencias. Añadiremos el código de la aplicación en [Creación de un sitio web esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website).

1. Crea un directorio para la aplicación y entra en él:

   ```bash
   mkdir express-locallibrary-tutorial
   cd express-locallibrary-tutorial
   ```

2. Usa el comando `init` de npm para crear un archivo **package.json** configurado para módulos ES:

   ```bash
   npm init --yes --init-type=module
   ```

   La opción [`--init-type=module`](https://docs.npmjs.com/cli/commands/npm-init/#init-type) establece `"type": "module"` en lugar del valor predeterminado `"type": "commonjs"`.

3. Abre **package.json** en tu editor de texto. npm crea un archivo como el siguiente, usando el nombre del directorio como el nombre del paquete:

   ```json
   {
     "name": "express-locallibrary-tutorial",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "type": "module"
   }
   ```

4. Añade `"private": true` y un campo `engines` en el nivel superior de **package.json**, junto a `name` y `version`:

   ```json
   {
     "private": true,
     "engines": {
       "node": ">=24.0.0"
     }
   }
   ```

   Establecer `private` en `true` evita la publicación accidental en el registro de npm. El campo `engines` declara la versión mínima de Node.js compatible. Mantén los campos generados por ahora; reemplazaremos `scripts` más abajo.

5. Elimina los siguientes campos, que solo son útiles si vas a publicar en el registro de npm: `description`, `main`, `keywords`, `author`, `license`.

### Agregar dependencias

Instala los paquetes que necesita el proyecto desde dentro del directorio **express-locallibrary-tutorial**:

```bash
npm install debug express http-errors morgan pug
```

Cada uno de estos paquetes cumple una función en la aplicación:

- `debug` muestra mensajes de diagnóstico cuando se habilita mediante la variable de entorno `DEBUG`.
- `express` proporciona el framework web.
- `http-errors` crea errores HTTP, como un 404 para una ruta desconocida.
- `morgan` registra las solicitudes HTTP.
- `pug` renderiza HTML a partir de plantillas.

El comando [`npm install`](https://docs.npmjs.com/cli/commands/npm-install/) descarga estos paquetes y sus dependencias en **node_modules**, los agrega a `dependencies` en **package.json** y crea **package-lock.json** para registrar las versiones resueltas. Conserva ambos archivos de paquete en el control de versiones para que otros desarrolladores puedan instalar las dependencias del proyecto. Cuando ya existe un archivo de bloqueo (lockfile), `npm ci` instala exactamente las versiones registradas en él.

> [!NOTE]
> Es buena idea actualizar regularmente a las versiones compatibles más recientes de tus bibliotecas de dependencias; esto incluso puede hacerse de forma automática o semiautomática como parte de una configuración de {{glossary("continuous integration", "integración continua")}}.
>
> Normalmente las actualizaciones de versión menor y de parche mantienen la compatibilidad.
> Cuando instalas un paquete, npm registra su versión en **package.json** con un prefijo `^` (por ejemplo, `"express": "^5.2.1"`).
> Esto te permite actualizar a la versión `minor.patch` compatible más reciente ejecutando:
>
> ```bash
> npm update --save
> ```
>
> Las versiones mayores cambian la compatibilidad.
> Para esas actualizaciones tendremos que actualizar manualmente **package.json** y el código que usa la biblioteca, y volver a probar el proyecto a fondo.

Instalaremos paquetes adicionales, como el driver de base de datos, cuando los necesitemos más adelante en el tutorial. Para una introducción más amplia a las herramientas de desarrollo y su configuración, consulta [Introducing a complete toolchain](/es/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain).

### Ejecución de tareas

Además de definir dependencias, puedes definir scripts con nombre en **package.json** y usar npm para ejecutarlos. Reemplaza el objeto `scripts` generado, incluido su comando `test` de marcador de posición, con estos comandos:

```json
{
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  }
}
```

El script `start` ejecuta el punto de entrada de la aplicación, **server.js**. El script `devstart` usa el modo de observación (`--watch`) de Node para reiniciar el servidor cuando cambia un archivo JavaScript importado. Probaremos ambos comandos con un servidor mínimo a continuación.

Tu **package.json** debería verse ahora así. Los números de versión de las dependencias pueden ser más recientes, dependiendo de cuándo instales los paquetes.

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  },
  "type": "module",
  "private": true,
  "engines": {
    "node": ">=24.0.0"
  },
  "dependencies": {
    "debug": "^4.4.3",
    "express": "^5.2.1",
    "http-errors": "^2.0.1",
    "morgan": "^1.12.0",
    "pug": "^3.0.4"
  }
}
```

### Probar un servidor mínimo

Para comprobar que tu entorno y los scripts de npm funcionan, crea un archivo llamado **server.js** junto a **package.json** con el siguiente contenido:

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Esto importa Express y crea una aplicación. El método `app.get()` responde a las solicitudes a `/` con el texto "Hello World!", y `app.listen()` inicia el servidor en el puerto 3000. Node trata **server.js** como un módulo ES porque establecimos `"type": "module"` en **package.json**.

1. En el directorio de tu proyecto, inicia el servidor usando el script de npm:

   ```bash
   npm start
   ```

   Deberías ver el siguiente mensaje en la terminal:

   ```plain
   Server running at http://localhost:3000/
   ```

2. Abre `http://localhost:3000/` en tu navegador. Deberías ver "Hello World!".
3. Detén el servidor con **Ctrl+C**, y luego inícialo en modo de observación:

   ```bash
   npm run devstart
   ```

4. Cambia el mensaje en `res.send()` a "Hello again!" y guarda **server.js**. Node reinicia el servidor automáticamente. Recarga la página para ver el mensaje actualizado.
5. Detén el servidor con **Ctrl+C** y elimina este archivo temporal **server.js**. Añadiremos el servidor y los archivos de la aplicación del proyecto en el capítulo del sitio web esqueleto. Conserva los scripts de npm; también ejecutarán ese servidor.

### Ignorar archivos generados y locales

Crea un archivo llamado **.gitignore** junto a **package.json** con el siguiente contenido:

```plain
node_modules/
*.log
.env
```

Esto mantiene las dependencias instaladas, los archivos de registro y la configuración del entorno local fuera del control de versiones. Las dependencias pueden volver a instalarse a partir de los archivos de paquete.

El directorio de tu proyecto debería contener ahora:

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
└── package.json
```

Este es un buen punto de partida para nuestro tutorial. Añadiremos los archivos reales de la aplicación, como archivos JavaScript, plantillas y hojas de estilos, cuando lleguemos al capítulo [Sitio web esqueleto](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website).

## Resumen

Ahora tienes un entorno de desarrollo de Node y la configuración del paquete, dependencias y scripts de npm del proyecto de la Biblioteca Local. Has comprobado la configuración con un servidor Express mínimo y el proyecto está listo para los archivos de la aplicación que añadiremos en el tutorial.

En el próximo artículo empezaremos a trabajar en un tutorial para construir una aplicación web completa usando este entorno y las herramientas asociadas.

## Véase también

- Página de [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
