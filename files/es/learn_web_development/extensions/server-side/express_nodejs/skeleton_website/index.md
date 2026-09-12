---
title: "Tutorial de Express parte 2: Crear un sitio web esqueleto"
short-title: "2: Sitio web esqueleto"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Este segundo artículo de nuestro [Tutorial de Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) muestra cómo crear un sitio web "esqueleto" que luego podrás completar con rutas, plantillas/vistas y llamadas a base de datos específicas del sitio.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <a href="/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Configura un entorno de desarrollo de Node</a>.
          Repasa el Tutorial de Express.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Poder iniciar tus propios proyectos de sitios web nuevos usando el <em>Generador de aplicaciones de Express</em>.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Este artículo muestra cómo crear un sitio web "esqueleto" usando la herramienta [Generador de aplicaciones de Express](https://expressjs.com/en/starter/generator.html), que luego puedes completar con rutas, vistas/plantillas y llamadas a base de datos específicas del sitio. En este caso, usaremos la herramienta para crear el framework de nuestro [sitio web Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website), al que más adelante le añadiremos todo el código restante que el sitio necesite. El proceso es extremadamente simple: solo requiere que invoques al generador en la línea de comandos con un nombre para el nuevo proyecto, especificando opcionalmente también el motor de plantillas del sitio y el generador de CSS.

Las siguientes secciones te muestran cómo invocar el generador de aplicaciones y ofrecen una breve explicación sobre las distintas opciones de vistas y CSS. También explicaremos cómo está estructurado el sitio web esqueleto. Al final, mostraremos cómo puedes ejecutar el sitio web para comprobar que funciona.

> [!NOTE]
>
> - El _Generador de aplicaciones de Express_ no es el único generador para aplicaciones Express, y el proyecto generado no es la única forma viable de estructurar tus archivos y directorios. Sin embargo, el sitio generado tiene una estructura modular fácil de extender y comprender. Para más información sobre una aplicación Express _mínima_, consulta el [ejemplo Hello world](https://expressjs.com/en/starter/hello-world.html) (documentación de Express).
> - El _Generador de aplicaciones de Express_ declara la mayoría de las variables usando `var`.
>   En este tutorial hemos cambiado la mayoría a [`const`](/es/docs/Web/JavaScript/Reference/Statements/const) (y algunas a [`let`](/es/docs/Web/JavaScript/Reference/Statements/let)), porque queremos mostrar las prácticas modernas de JavaScript.
> - Este tutorial usa la versión de _Express_ y de las demás dependencias definidas en el archivo **package.json** creado por el _Generador de aplicaciones de Express_.
>   Estas no son (necesariamente) las últimas versiones, y deberías actualizarlas al desplegar una aplicación real en producción.

## Usando el generador de aplicaciones

Ya deberías tener instalado el generador como parte de la [configuración de un entorno de desarrollo de Node](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Como recordatorio rápido, el paquete generador se instala a nivel de todo el sistema usando el gestor de paquetes npm, tal y como se muestra:

```bash
npm install express-generator -g
```

El generador tiene varias opciones, que puedes ver en la línea de comandos usando el comando `--help` (o `-h`):

```bash
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain CSS)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

Puedes especificar `express` para crear un proyecto dentro del directorio _actual_ usando el motor de vistas _Jade_ y CSS plano (si especificas un nombre de directorio, el proyecto se creará en una subcarpeta con ese nombre).

```bash
express
```

También puedes elegir un motor de vistas (plantillas) usando `--view` y/o un motor de generación de CSS usando `--css`.

> [!NOTE]
> Las demás opciones para elegir motores de plantillas (por ejemplo, `--hogan`, `--ejs`, `--hbs`, etc.) están obsoletas. Usa `--view` (o `-v`).

### ¿Qué motor de vistas debería usar?

El _Generador de aplicaciones de Express_ te permite configurar varios motores de vistas/plantillas populares, entre ellos [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig) y [Vash](https://www.npmjs.com/package/vash), aunque elige Jade por defecto si no especificas una opción de vista. El propio Express también admite de forma nativa un gran número de otros lenguajes de plantillas ([aquí tienes la lista](https://github.com/expressjs/express/wiki#template-engines)).

> [!NOTE]
> Si quieres usar un motor de plantillas que no sea compatible con el generador, consulta [Uso de motores de plantillas con Express](https://expressjs.com/en/guide/using-template-engines.html) (documentación de Express) y la documentación de tu motor de vistas de destino.

En términos generales, deberías elegir un motor de plantillas que ofrezca toda la funcionalidad que necesitas y que te permita ser productivo cuanto antes — o dicho de otro modo, de la misma forma en que eliges cualquier otro componente. Algunas cosas a tener en cuenta al comparar motores de plantillas:

- Tiempo hasta ser productivo: si tu equipo ya tiene experiencia con un lenguaje de plantillas, es probable que sea más productivo usando ese lenguaje. Si no, deberías considerar la curva de aprendizaje relativa de los motores de plantillas candidatos.
- Popularidad y actividad: revisa la popularidad del motor y si cuenta con una comunidad activa. Es importante poder obtener soporte cuando surjan problemas a lo largo de la vida del sitio web.
- Estilo: algunos motores de plantillas usan marcado específico para indicar el contenido insertado dentro del HTML "normal", mientras que otros construyen el HTML con una sintaxis distinta (por ejemplo, usando sangría y nombres de bloque).
- Rendimiento/tiempo de renderizado.
- Características: deberías considerar si los motores que evalúas ofrecen las siguientes características:
  - Herencia de diseño: te permite definir una plantilla base y luego "heredar" solo las partes que quieras que sean diferentes para una página en particular. Este enfoque suele ser mejor que construir plantillas incluyendo varios componentes obligatorios o partiendo de cero cada vez.
  - Soporte de "include": te permite construir plantillas incluyendo otras plantillas.
  - Sintaxis concisa para el control de variables y bucles.
  - Capacidad de filtrar valores de variables a nivel de plantilla, como convertir variables a mayúsculas o dar formato a un valor de fecha.
  - Capacidad de generar formatos de salida distintos a HTML, como JSON o XML.
  - Soporte para operaciones asíncronas y streaming.
  - Funciones del lado del cliente: si un motor de plantillas se puede usar en el cliente, esto permite la posibilidad de hacer todo o la mayor parte del renderizado del lado del cliente.

> [!NOTE]
> Hay muchos recursos en internet que te ayudarán a comparar las distintas opciones.

Para este proyecto, usaremos el motor de plantillas [Pug](https://pugjs.org/api/getting-started.html) (anteriormente llamado "Jade"), ya que es uno de los lenguajes de plantillas más populares para Express/JavaScript y el generador lo admite de forma nativa.

### ¿Qué motor de hojas de estilo CSS debería usar?

El _Generador de aplicaciones de Express_ te permite crear un proyecto configurado para usar los motores de hojas de estilo CSS más comunes: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/) y [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS tiene algunas limitaciones que dificultan ciertas tareas. Los motores de hojas de estilo CSS te permiten usar una sintaxis más potente para definir tu CSS, que luego se compila en CSS normal para que lo usen los navegadores.

Al igual que con los motores de plantillas, deberías usar el motor de hojas de estilo que permita a tu equipo ser más productivo. Para este proyecto usaremos CSS puro (la opción por defecto), ya que nuestros requisitos de CSS no son lo bastante complejos como para justificar el uso de otra cosa.

### ¿Qué base de datos debería usar?

El código generado no usa ni incluye ninguna base de datos. Las aplicaciones _Express_ pueden usar cualquier [mecanismo de base de datos](https://expressjs.com/en/guide/database-integration.html) admitido por _Node_ (_Express_ en sí no define ningún comportamiento ni requisito adicional específico para la gestión de bases de datos).

Hablaremos de cómo integrar una base de datos en un artículo posterior.

## Creación del proyecto

Para la aplicación de ejemplo _Local Library_ que vamos a construir, crearemos un proyecto llamado _express-locallibrary-tutorial_ usando la biblioteca de plantillas _Pug_ y ningún motor de CSS.

Primero, navega hasta donde quieras crear el proyecto y luego ejecuta el _Generador de aplicaciones de Express_ en la línea de comandos como se muestra:

```bash
express express-locallibrary-tutorial --view=pug
```

El generador creará (y mostrará) los archivos del proyecto.

```plain
   create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $env:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Al final de la salida, el generador ofrece instrucciones sobre cómo instalar las dependencias (tal como se indica en el archivo **package.json**) y cómo ejecutar la aplicación en distintos sistemas operativos.

> [!NOTE]
> Los archivos creados por el generador definen todas las variables como `var`.
> Abre todos los archivos generados y cambia las declaraciones `var` por `const` antes de continuar (el resto del tutorial asume que ya lo has hecho).

## Ejecución del sitio web esqueleto

Llegados a este punto, tenemos un proyecto esqueleto completo. El sitio web todavía no _hace_ gran cosa, pero merece la pena ejecutarlo para comprobar que funciona.

1. Primero, instala las dependencias (el comando `install` obtendrá todos los paquetes de dependencias listados en el archivo **package.json** del proyecto).

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. Luego ejecuta la aplicación.
   - En el símbolo del sistema (CMD) de Windows, usa este comando:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - En Windows PowerShell, usa este comando:

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > Este tutorial no cubre los comandos de PowerShell (los comandos "Windows" indicados asumen que usas el símbolo del sistema de Windows).

   - En macOS o Linux, usa este comando:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Luego carga `http://localhost:3000/` en tu navegador para acceder a la aplicación.

Deberías ver una página en el navegador parecida a esta:

![Navegador mostrando el sitio web predeterminado del generador de aplicaciones Express](expressgeneratorskeletonwebsite.png)

¡Felicidades! Ahora tienes una aplicación Express funcionando, a la que puedes acceder a través del puerto 3000.

> [!NOTE]
> También podrías iniciar la aplicación simplemente con el comando `npm start`. Especificar la variable DEBUG como se muestra habilita el registro/depuración por consola. Por ejemplo, al visitar la página anterior verás una salida de depuración como esta:
>
> ```bash
> SET DEBUG=express-locallibrary-tutorial:* & npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 304 490.296 ms - -
> GET /stylesheets/style.css 200 4.886 ms - 111
> ```

## Habilitar el reinicio del servidor al modificar archivos

Actualmente, cualquier cambio que hagas en tu sitio web Express no se verá reflejado hasta que reinicies el servidor. Detener y reiniciar el servidor cada vez que haces un cambio se vuelve rápidamente irritante, así que merece la pena dedicar tiempo a automatizar el reinicio del servidor cuando sea necesario.

Una herramienta útil para este propósito es [nodemon](https://github.com/remy/nodemon). Normalmente se instala de forma global (ya que es una "herramienta"), pero aquí la instalaremos y usaremos localmente como _dependencia de desarrollo_, de modo que cualquier desarrollador que trabaje con el proyecto la obtenga automáticamente al instalar la aplicación. Usa el siguiente comando en el directorio raíz del proyecto esqueleto:

```bash
npm install --save-dev nodemon
```

Si aun así prefieres instalar [nodemon](https://github.com/remy/nodemon) de forma global en tu máquina, y no solo en el archivo **package.json** de tu proyecto:

```bash
npm install -g nodemon
```

Si abres el archivo **package.json** de tu proyecto, ahora verás una nueva sección con esta dependencia:

```json
{
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

Como la herramienta no está instalada de forma global, no podemos ejecutarla desde la línea de comandos (a menos que la agreguemos al PATH). Sin embargo, podemos invocarla desde un script de npm, porque npm sabe qué paquetes están instalados. Busca la sección `scripts` de tu **package.json**. Al principio contendrá una sola línea, que comienza con `"start"`. Actualízala añadiendo una coma al final de esa línea, e incorpora las líneas `"devstart"` y `"serverstart"`:

- En Linux y macOS, la sección `scripts` quedará así:

  ```json
  {
    "scripts": {
      "start": "node ./bin/www",
      "devstart": "nodemon ./bin/www",
      "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
    }
  }
  ```

- En Windows, el valor de `"serverstart"` quedaría así en su lugar (si usas el símbolo del sistema):

  ```bash
  "serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
  ```

Ahora podemos iniciar el servidor casi exactamente igual que antes, pero usando el comando `devstart`.

> [!NOTE]
> Ahora, si editas cualquier archivo del proyecto, el servidor se reiniciará (o puedes reiniciarlo escribiendo `rs` en la línea de comandos en cualquier momento). Aun así, tendrás que recargar el navegador para refrescar la página.
>
> Ahora tenemos que usar `npm run <nombre-del-script>` en lugar de simplemente `npm start`, porque "start" es en realidad un comando de npm que está asignado a ese script. Podríamos haber reemplazado el comando en el script _start_, pero solo queremos usar _nodemon_ durante el desarrollo, así que tiene sentido crear un nuevo comando de script.
>
> El comando `serverstart` añadido a los scripts del **package.json** anterior es un buen ejemplo de esto. Con este enfoque, ya no tienes que escribir un comando largo para iniciar el servidor. Ten en cuenta que el comando concreto añadido al script solo funciona en macOS o Linux.

## El proyecto generado

Ahora vamos a echar un vistazo al proyecto que acabamos de crear.
Iremos haciendo algunas pequeñas modificaciones a medida que avancemos.

### Estructura de directorios

Ahora que has instalado las dependencias, el proyecto generado tiene la siguiente estructura de archivos (los archivos son los elementos **sin** el prefijo "/").
El archivo **package.json** define las dependencias de la aplicación y otra información.
También define un script de inicio que invoca al punto de entrada de la aplicación, el archivo JavaScript **/bin/www**.
Este configura parte del manejo de errores de la aplicación y luego carga **app.js** para hacer el resto del trabajo.
Las rutas de la aplicación se guardan en módulos independientes dentro del directorio **routes/**.
Las plantillas se guardan en el directorio /**views**.

```plain
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [unas 6700 subcarpetas y archivos]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

Las siguientes secciones describen los archivos con un poco más de detalle.

### package.json

El archivo **package.json** define las dependencias de la aplicación y otra información:

```json
{
  "name": "express-locallibrary-tutorial",
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
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

La sección `scripts` primero define un script "_start_", que es el que invocamos al llamar a `npm start` para iniciar el servidor (este script fue añadido por el _Generador de aplicaciones de Express_). En la definición del script puedes ver que en realidad esto inicia el archivo JavaScript **./bin/www** con _node_.

Ya modificamos esta sección en [Habilitar el reinicio del servidor al modificar archivos](#habilitar_el_reinicio_del_servidor_al_modificar_archivos) añadiendo los scripts _devstart_ y _serverstart_.
Estos se pueden usar para iniciar ese mismo archivo **./bin/www** con _nodemon_ en lugar de _node_ (esta versión de los scripts es para Linux y macOS, como se explicó antes).

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

Las dependencias incluyen el paquete _express_ y el paquete de nuestro motor de vistas elegido (_pug_).
Además, contamos con los siguientes paquetes que son útiles en muchas aplicaciones web:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): se usa para analizar el encabezado de la cookie y rellenar `req.cookies` (básicamente proporciona un método cómodo para acceder a la información de las cookies).
- [debug](https://www.npmjs.com/package/debug): una pequeña utilidad de depuración para node, inspirada en la técnica de depuración del núcleo de node.
- [morgan](https://www.npmjs.com/package/morgan): un middleware de registro de solicitudes HTTP para node.
- [http-errors](https://www.npmjs.com/package/http-errors): crea errores HTTP donde sea necesario (para el manejo de errores de express).

Las versiones predeterminadas del proyecto generado están un poco desactualizadas.
Reemplaza la sección `dependencies` de tu archivo `package.json` con el siguiente texto, que especifica las versiones más recientes de estas bibliotecas en el momento de escribir esto:

```json
{
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "express": "^5.1.0",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  }
}
```

Luego, actualiza tus dependencias instaladas usando el comando:

```bash
npm install
```

> [!NOTE]
> Es buena idea actualizar con regularidad a las últimas versiones compatibles de tus bibliotecas de dependencias — esto incluso se puede hacer de forma automática o semiautomática como parte de una configuración de {{Glossary("continuous integration", "integración continua")}}.
>
> Por lo general, las actualizaciones de versión menor (minor) y de parche (patch) de una biblioteca se mantienen compatibles.
> Hemos antepuesto `^` a cada versión anterior para poder actualizar automáticamente a la última versión `minor.patch` ejecutando:
>
> ```bash
> npm update --save
> ```
>
> Las versiones mayores (major) cambian la compatibilidad.
> Para esas actualizaciones tendremos que actualizar manualmente el `package.json` y el código que usa la biblioteca, y volver a probar el proyecto de forma exhaustiva.

### El archivo www

El archivo **/bin/www** es el punto de entrada de la aplicación. Lo primero que hace es usar `require()` para importar el punto de entrada "real" de la aplicación (**app.js**, en la raíz del proyecto), que configura y devuelve el objeto de la aplicación [`express()`](https://expressjs.com/en/api.html).
`require()` es la [forma CommonJS](https://nodejs.org/api/modules.html) de importar código JavaScript, JSON y otros archivos al archivo actual.
Aquí especificamos el módulo **app.js** usando una ruta relativa y omitimos la extensión de archivo opcional (**.js**).

```js
#!/usr/bin/env node

/**
 * Dependencias del módulo.
 */

const app = require("../app");
```

> [!NOTE]
> Node.js 14 y versiones posteriores admiten las sentencias `import` de ES6 para importar módulos de JavaScript (ECMAScript).
> Para usar esta función tienes que añadir `"type": "module"` a tu archivo **package.json** de Express, todos los módulos de tu aplicación deben usar `import` en lugar de `require()`, y en las _importaciones relativas_ debes incluir la extensión del archivo (para más información, consulta la [documentación de Node](https://nodejs.org/api/esm.html#introduction)).
> Aunque usar `import` tiene ventajas, este tutorial usa `require()` para coincidir con [la documentación de Express](https://expressjs.com/en/starter/hello-world.html).

El resto del código de este archivo configura un servidor HTTP de node con `app` en un puerto específico (definido en una variable de entorno, o 3000 si la variable no está definida), y comienza a escuchar y a reportar los errores y conexiones del servidor. Por ahora no necesitas saber nada más sobre este código (todo lo que hay en este archivo es código "repetitivo" o _boilerplate_), pero siéntete libre de revisarlo si te interesa.

### app.js

Este archivo crea un objeto de aplicación `express` (llamado `app`, por convención), configura la aplicación con varias opciones y middleware, y luego exporta la aplicación desde el módulo. El siguiente código muestra solo las partes del archivo que crean y exportan el objeto `app`:

```js
const express = require("express");

const app = express();
// …
module.exports = app;
```

De vuelta en el archivo de punto de entrada **www** visto antes, es este objeto `module.exports` el que se proporciona al llamador cuando se importa este archivo.

Vamos a repasar el archivo **app.js** en detalle. Primero, importamos al archivo algunas bibliotecas de node útiles usando `require()`, entre ellas _http-errors_, _express_, _morgan_ y _cookie-parser_, que descargamos antes para nuestra aplicación usando npm; y _path_, que es una biblioteca central de Node para analizar rutas de archivos y directorios.

```js
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Luego usamos `require()` para importar módulos de nuestro directorio de rutas. Estos módulos/archivos contienen código para gestionar conjuntos particulares de "rutas" (rutas de URL) relacionadas. Cuando extendamos la aplicación esqueleto, por ejemplo para listar todos los libros de la biblioteca, añadiremos un nuevo archivo para gestionar las rutas relacionadas con los libros.

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

> [!NOTE]
> En este punto, solo hemos _importado_ el módulo; todavía no hemos usado sus rutas (esto sucede un poco más abajo en el archivo).

A continuación, creamos el objeto `app` usando nuestro módulo _express_ importado, y luego lo usamos para configurar el motor de vistas (plantillas). Configurar el motor consta de dos partes. Primero, establecemos el valor `"views"` para especificar la carpeta donde se guardarán las plantillas (en este caso, la subcarpeta **/views**). Luego, establecemos el valor `"view engine"` para especificar la biblioteca de plantillas (en este caso, "pug").

```js
const app = express();

// configuración del motor de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

El siguiente conjunto de funciones llama a `app.use()` para añadir a la cadena de manejo de solicitudes las bibliotecas de _middleware_ que importamos antes.
Por ejemplo, `express.json()` y `express.urlencoded()` son necesarias para rellenar [`req.body`](https://expressjs.com/en/api.html#req.body) con los campos del formulario.
Después de estas bibliotecas, también usamos el middleware `express.static`, que hace que _Express_ sirva todos los archivos estáticos del directorio **/public** en la raíz del proyecto.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Ahora que ya está configurado el resto del middleware, añadimos a la cadena de manejo de solicitudes nuestro código de manejo de rutas (importado previamente). El código importado definirá rutas particulares para las distintas _partes_ del sitio:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> Las rutas especificadas arriba (`"/"` y `"/users"`) se tratan como un prefijo para las rutas definidas en los archivos importados.
> Así, por ejemplo, si el módulo **users** importado define una ruta para `/profile`, accederías a esa ruta en `/users/profile`. Hablaremos más sobre las rutas en un artículo posterior.

El último middleware del archivo añade métodos de manejo para errores y respuestas HTTP 404.

```js
// captura el error 404 y lo reenvía al manejador de errores
app.use((req, res, next) => {
  next(createError(404));
});

// manejador de errores
app.use((err, req, res, next) => {
  // establece las variables locales; solo se proporciona el error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // renderiza la página de error
  res.status(err.status || 500);
  res.render("error");
});
```

El objeto de la aplicación Express (`app`) ya está completamente configurado. El último paso es añadirlo a las exportaciones del módulo (esto es lo que permite que **/bin/www** pueda importarlo).

```js
module.exports = app;
```

### Rutas

A continuación se muestra el archivo de rutas **/routes/users.js** (los archivos de rutas comparten una estructura similar, así que no hace falta mostrar también **index.js**).
Primero, carga el módulo _express_ y lo usa para obtener un objeto `express.Router`.
Luego especifica una ruta en ese objeto y, por último, exporta el enrutador desde el módulo (esto es lo que permite importar el archivo en **app.js**).

```js
const express = require("express");

const router = express.Router();

/* Lista de usuarios (GET). */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

La ruta define un callback que se invocará cada vez que se detecte una solicitud HTTP `GET` con el patrón correcto. El patrón de coincidencia es la ruta especificada al importar el módulo (`"/users"`) más lo que se defina en este archivo (`"/"`). En otras palabras, esta ruta se usará cuando se reciba una URL `/users/`.

> [!NOTE]
> Prueba esto ejecutando el servidor con node y visitando la URL en tu navegador: `http://localhost:3000/users/`. Deberías ver el mensaje: "respond with a resource".

Algo interesante en el código anterior es que la función callback tiene el tercer argumento `next`, por lo que es una función de middleware en lugar de un simple callback de ruta. Aunque el código actualmente no usa el argumento `next`, puede resultar útil en el futuro si quieres añadir varios manejadores de ruta a la ruta `'/'`.

### Vistas (plantillas)

Las vistas (plantillas) se guardan en el directorio **/views** (tal como se especifica en **app.js**) y tienen la extensión de archivo **.pug**. El método [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) se usa para renderizar una plantilla especificada junto con los valores de las variables con nombre pasadas en un objeto, y luego enviar el resultado como respuesta. En el siguiente código de **/routes/index.js** puedes ver cómo esa ruta renderiza una respuesta usando la plantilla "index" y pasando la variable de plantilla "title".

```js
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

A continuación se muestra la plantilla correspondiente a la ruta anterior (**index.pug**). Hablaremos más sobre la sintaxis más adelante. Por ahora, todo lo que necesitas saber es que la variable `title` (con el valor `'Express'`) se inserta donde se especifica en la plantilla.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Ponte a prueba

Crea una nueva ruta en **/routes/users.js** que muestre el texto "_Eres tan genial_" en la URL `/users/cool/`. Pruébala ejecutando el servidor y visitando `http://localhost:3000/users/cool/` en tu navegador.

## Resumen

Ya has creado un proyecto de sitio web esqueleto para [Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) y has comprobado que funciona usando _node_. Lo más importante es que también entiendes cómo está estructurado el proyecto, así que tienes una buena idea de dónde tendremos que hacer cambios para añadir rutas y vistas a nuestra biblioteca local.

A continuación, empezaremos a modificar el esqueleto para que funcione como el sitio web de la biblioteca.

## Véase también

- [Express application generator](https://expressjs.com/en/starter/generator.html) (documentación de Express)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (documentación de Express)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
