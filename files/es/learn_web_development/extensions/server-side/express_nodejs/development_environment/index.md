---
title: Configuración de un entorno de desarrollo de Node
short-title: Configuración del entorno de desarrollo
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Ahora que ya sabes para qué sirve [Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#¿qué_son_express_y_node), te mostraremos cómo configurar y probar un entorno de desarrollo Node/Express en Windows, Linux (Ubuntu) o macOS. Sin importar el sistema operativo que uses, este artículo te da lo que necesitas para empezar a desarrollar aplicaciones Express.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
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

El entorno de desarrollo de _Express_ incluye una instalación de _Node.js_, el _gestor de paquetes npm_ y (opcionalmente) el _generador de aplicaciones de Express_ en tu computadora local.

_Node_ y el gestor de paquetes _npm_ se instalan juntos a partir de paquetes binarios preparados, instaladores, gestores de paquetes del sistema operativo o desde el código fuente (como se muestra en las siguientes secciones). Luego, _Express_ se instala mediante npm como una dependencia de cada una de tus aplicaciones web _Express_ (junto con otras bibliotecas, como motores de plantillas, controladores de bases de datos, middleware de autenticación, middleware para servir archivos estáticos, etc.).

_npm_ también se puede usar para instalar (de forma global) el _generador de aplicaciones de Express_, una herramienta práctica para crear el esqueleto de aplicaciones web _Express_ que siguen el [patrón MVC](/es/docs/Glossary/MVC). El generador de aplicaciones es opcional, porque no _necesitas_ usar esta herramienta para crear aplicaciones que usen Express, ni para construir aplicaciones Express que tengan el mismo diseño arquitectónico o las mismas dependencias. Sin embargo, lo usaremos porque hace que empezar sea mucho más fácil y promueve una estructura de aplicación modular.

> [!NOTE]
> A diferencia de otros frameworks web, el entorno de desarrollo no incluye un servidor web de desarrollo independiente. ¡En _Node_/_Express_, una aplicación web crea y ejecuta su propio servidor web!

Existen otras herramientas periféricas que forman parte de un entorno de desarrollo típico, entre ellas los [editores de texto](/es/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) o los IDE para editar código, y las herramientas de gestión de control de versiones como [Git](https://git-scm.com/) para gestionar de forma segura las distintas versiones de tu código. Damos por hecho que ya tienes instaladas este tipo de herramientas (en particular, un editor de texto).

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
Aquí usaremos [nvm-windows](https://github.com/coreybutler/nvm-windows), que goza de gran reconocimiento entre los desarrolladores de Node.

Instala la versión más reciente usando el instalador que prefieras desde la página de [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
Después de instalar `nvm-windows`, abre un símbolo del sistema (o PowerShell) e ingresa el siguiente comando para descargar la versión LTS más reciente de Node.js y npm:

```bash
nvm install lts
```

En el momento de escribir esto, la versión LTS de Node.js es la 22.17.0.
Puedes establecerla como la _versión actual_ a usar con el siguiente comando:

```bash
nvm use 22.17.0
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

En el momento de escribir esto, la versión LTS de Node.js es la 22.17.0.
El comando `nvm list` muestra el conjunto de versiones descargadas y la versión actual.
Puedes establecer una versión específica como la _versión actual_ con el siguiente comando (igual que con `nvm-windows`)

```bash
nvm use 22.17.0
```

Usa el comando `nvm --help` para conocer otras opciones de línea de comandos.
Suelen ser similares, o iguales, a las que ofrece `nvm-windows`.

### Prueba de tu instalación de Node.js y npm

Una vez que hayas configurado `nvm` para usar una versión específica de Node, puedes probar la instalación.
Una buena forma de hacerlo es usar el comando "version" en tu terminal/símbolo del sistema y comprobar que se devuelve la cadena de versión esperada:

```bash
> node -v
v22.17.0
```

El gestor de paquetes _npm_ de _Node.js_ también debería haberse instalado, y se puede probar de la misma manera:

```bash
> npm -v
10.9.2
```

Como una prueba un poco más interesante, vamos a crear un servidor "node puro" muy básico que imprima "Hello World" en el navegador cuando visites la URL correcta en tu navegador:

1. Copia el siguiente texto en un archivo llamado **hellonode.js**. Esto usa funciones puras de Node (nada de Express):

   ```js
   // Cargar el módulo HTTP
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 3000;

   // Crear el servidor HTTP y escuchar solicitudes en el puerto 3000
   const server = http.createServer((req, res) => {
     // Establecer el encabezado HTTP de la respuesta con el estado HTTP y el tipo de contenido
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello World\n");
   });

   // Escuchar solicitudes en el puerto 3000 y, como función de retorno de llamada, registrar el puerto en el que se está escuchando
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

   El código importa el módulo "http" y lo usa para crear un servidor (`createServer()`) que escucha solicitudes HTTP en el puerto 3000. Luego, el script imprime en la consola un mensaje con la URL del navegador que puedes usar para probar el servidor. La función `createServer()` recibe como argumento una función de retorno de llamada que se invocará cuando se reciba una solicitud HTTP; esta devuelve una respuesta con un código de estado HTTP 200 ("OK") y el texto plano "Hello World".

   > [!NOTE]
   > ¡No te preocupes si todavía no entiendes exactamente qué hace este código! ¡Explicaremos nuestro código con más detalle en cuanto empecemos a usar Express!

2. Inicia el servidor accediendo, desde tu símbolo del sistema, al mismo directorio que tu archivo `hellonode.js`, y ejecutando `node` junto con el nombre del script, así:

   ```bash
   node hellonode.js
   ```

   Una vez que el servidor se inicia, verás una salida en la consola que indica la dirección IP en la que se está ejecutando el servidor:

   ```plain
   Server running at http://127.0.0.1:3000/
   ```

3. Ve a la URL `http://127.0.0.1:3000`. Si todo funciona correctamente, el navegador debería mostrar el texto "Hello World".

## Uso de npm

Además del propio _Node_, [npm](https://docs.npmjs.com/) es la herramienta más importante para trabajar con aplicaciones _Node_.
`npm` se usa para obtener los paquetes (bibliotecas de JavaScript) que una aplicación necesita para el desarrollo, las pruebas o la producción, y también se puede usar para ejecutar pruebas y herramientas empleadas en el proceso de desarrollo.

> [!NOTE]
> Desde la perspectiva de Node, _Express_ es solo otro paquete que necesitas instalar con npm y luego incluir mediante `require` en tu propio código.

Puedes usar npm manualmente para obtener cada paquete necesario por separado. Sin embargo, normalmente gestionamos las dependencias mediante un archivo de definición de texto plano llamado [package.json](https://docs.npmjs.com/files/package.json/). Este archivo enumera todas las dependencias de un "paquete" de JavaScript en particular, incluidos el nombre del paquete, la versión, la descripción, el archivo inicial a ejecutar, las dependencias de producción, las dependencias de desarrollo, las versiones de _Node_ con las que puede funcionar, etc. El archivo **package.json** debería contener todo lo que npm necesita para obtener y ejecutar tu aplicación (si estuvieras escribiendo una biblioteca reutilizable, podrías usar esta definición para subir tu paquete al repositorio de npm y ponerlo a disposición de otros usuarios).

### Agregar dependencias

Los siguientes pasos muestran cómo puedes usar npm para descargar un paquete, guardarlo en las dependencias del proyecto y luego incluirlo en una aplicación Node.

> [!NOTE]
> Aquí mostramos las instrucciones para obtener e instalar el paquete _Express_. Más adelante veremos cómo este paquete, y otros, ya vienen especificados para nosotros al usar el _generador de aplicaciones de Express_. Esta sección se incluye porque es útil para entender cómo funciona npm y qué es lo que crea el generador de aplicaciones.

1. Primero, crea un directorio para tu nueva aplicación y accede a él:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Usa el comando `init` de npm para crear un archivo **package.json** para tu aplicación. Este comando te pedirá varios datos, como el nombre y la versión de tu aplicación y el nombre del archivo de entrada inicial (por defecto, **index.js**). Por ahora, simplemente acepta los valores predeterminados:

   ```bash
   npm init
   ```

   Si muestras el archivo **package.json** (`cat package.json`), verás los valores predeterminados que aceptaste, terminando con la licencia.

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "description": ""
   }
   ```

3. Ahora instala Express en el directorio `myapp` y guárdalo en la lista de dependencias de tu archivo **package.json**:

   ```bash
   npm install express
   ```

   La sección de dependencias de tu **package.json** ahora aparecerá al final del archivo **package.json** e incluirá _Express_.

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^5.1.0"
     }
   }
   ```

4. Para usar la biblioteca Express, llama a la función `require()` en tu archivo **index.js** para incluirla en tu aplicación.
   Crea este archivo ahora, en la raíz del directorio de la aplicación "myapp", y dale el siguiente contenido:

   ```js
   const express = require("express");

   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
   });
   ```

   Este código muestra una aplicación web Express mínima de tipo "HelloWorld".
   Esto importa el módulo "express" mediante `require()` y lo usa para crear un servidor (`app`) que escucha solicitudes HTTP en el puerto 3000 e imprime en la consola un mensaje que explica qué URL del navegador puedes usar para probar el servidor.
   La función `app.get()` solo responde a las solicitudes HTTP `GET` con la ruta URL especificada ('/'), en este caso llamando a una función que envía nuestro mensaje _Hello World!_.

   > [!NOTE]
   > Las comillas invertidas (backticks) en `` `Example app listening on port ${port}!` `` nos permiten interpolar el valor de `$port` en la cadena.

5. Puedes iniciar el servidor ejecutando node con el script en tu símbolo del sistema:

   ```bash
   node index.js
   ```

   Verás la siguiente salida en la consola:

   ```plain
   Example app listening on port 3000
   ```

6. Ve a la URL `http://localhost:3000/`.
   Si todo funciona correctamente, el navegador debería mostrar el texto "Hello World!".

### Dependencias de desarrollo

Si una dependencia solo se usa durante el desarrollo, deberías guardarla como una "dependencia de desarrollo" (para que los usuarios de tu paquete no tengan que instalarla en producción). Por ejemplo, para usar la popular herramienta de linting de JavaScript [ESLint](https://eslint.org/), ejecutarías npm de la siguiente manera:

```bash
npm install eslint --save-dev
```

La siguiente entrada se agregaría entonces al **package.json** de tu aplicación:

```json
{
  "devDependencies": {
    "eslint": "^9.30.1"
  }
}
```

> [!NOTE]
> Los "[linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" son herramientas que realizan un análisis estático del software para detectar y reportar el cumplimiento (o incumplimiento) de un determinado conjunto de buenas prácticas de programación.

### Ejecución de tareas

Además de definir y obtener dependencias, también puedes definir scripts _con nombre_ en tus archivos **package.json** y usar npm para ejecutarlos con el comando [run-script](https://docs.npmjs.com/cli/commands/npm-run/). Este enfoque se usa comúnmente para automatizar la ejecución de pruebas y partes del proceso de desarrollo o compilación (por ejemplo, ejecutar herramientas para minificar JavaScript, reducir imágenes, hacer LINT/analizar tu código, etc.).

> [!NOTE]
> Los ejecutores de tareas como [Gulp](https://gulpjs.com/) y [Grunt](https://gruntjs.com/) también se pueden usar para ejecutar pruebas y otras herramientas externas.

Por ejemplo, para definir un script que ejecute la dependencia de desarrollo _eslint_ que especificamos en la sección anterior, podríamos agregar el siguiente bloque de scripts a nuestro archivo **package.json** (suponiendo que el código fuente de nuestra aplicación está en una carpeta `/src/js`):

```json
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Para explicarlo un poco más, `eslint src/js` es un comando que podríamos ingresar en nuestra terminal/línea de comandos para ejecutar `eslint` sobre los archivos JavaScript contenidos en el directorio `src/js` dentro del directorio de nuestra aplicación. Incluir lo anterior en el archivo package.json de nuestra aplicación proporciona un atajo para este comando: `lint`.

Entonces podríamos ejecutar _eslint_ usando npm así:

```bash
npm run-script lint
# O (usando el alias)
npm run lint
```

Puede que este ejemplo no parezca más corto que el comando original, pero puedes incluir comandos mucho más largos dentro de tus scripts de npm, incluidas cadenas de varios comandos. Podrías definir un único script de npm que ejecute todas tus pruebas de una sola vez.

## Instalación del generador de aplicaciones Express

La herramienta [generador de aplicaciones de Express](https://expressjs.com/en/starter/generator.html) genera el "esqueleto" de una aplicación Express. Instala el generador usando npm de la siguiente manera:

```bash
npm install express-generator -g
```

> [!NOTE]
> Es posible que necesites anteponer `sudo` a esta línea en Ubuntu o macOS. El indicador `-g` instala la herramienta de forma global para que puedas ejecutarla desde cualquier lugar.

Para crear una aplicación _Express_ llamada "helloworld" con la configuración predeterminada, ve al lugar donde quieras crearla y ejecuta la aplicación de la siguiente manera:

```bash
express helloworld
```

> [!NOTE]
> A menos que estés usando una versión antigua de Node.js (< 8.2.0), como alternativa podrías omitir la instalación y ejecutar express-generator con [npx](https://github.com/npm/npx#readme).
> Esto tiene el mismo efecto que instalar y luego ejecutar `express-generator`, pero sin instalar el paquete en tu sistema:
>
> ```bash
> npx express-generator helloworld
> ```

También puedes especificar la biblioteca de plantillas a usar y varias otras configuraciones.
Usa el comando `help` para ver todas las opciones:

```bash
express --help
```

El generador creará la nueva aplicación Express en una subcarpeta de tu ubicación actual, mostrando el progreso de la construcción en la consola.
Al finalizar, la herramienta mostrará los comandos que debes ingresar para instalar las dependencias de Node y ejecutar la aplicación.

La nueva aplicación tendrá un archivo **package.json** en su directorio raíz.
Puedes abrirlo para ver qué dependencias están instaladas, incluidas Express y la biblioteca de plantillas Jade:

```json
{
  "name": "helloworld",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}
```

Instala todas las dependencias para la aplicación helloworld usando npm de la siguiente manera:

```bash
cd helloworld
npm install
```

Luego ejecuta la aplicación (los comandos son ligeramente diferentes para Windows y Linux/macOS), como se muestra a continuación:

```bash
# Ejecutar helloworld en Windows con el símbolo del sistema
SET DEBUG=helloworld:* & npm start

# Ejecutar helloworld en Windows con PowerShell
SET DEBUG=helloworld:* | npm start

# Ejecutar helloworld en Linux/macOS
DEBUG=helloworld:* npm start
```

El comando DEBUG genera registros útiles, lo que da como resultado una salida como la siguiente:

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Abre un navegador y ve a `http://localhost:3000/` para ver la página de bienvenida predeterminada de Express.

![Express - Generated App Default Screen](express_default_screen.png)

Hablaremos más sobre la aplicación generada cuando lleguemos al artículo sobre cómo generar una aplicación esqueleto.

## Resumen

Ahora tienes un entorno de desarrollo de Node en funcionamiento en tu computadora, que puedes usar para crear aplicaciones web Express. También has visto cómo se puede usar npm para importar Express en una aplicación, y cómo puedes crear aplicaciones usando la herramienta generador de aplicaciones de Express y luego ejecutarlas.

En el próximo artículo empezaremos a trabajar en un tutorial para construir una aplicación web completa usando este entorno y las herramientas asociadas.

## Véase también

- La página de [Downloads](https://nodejs.org/en/download) (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
