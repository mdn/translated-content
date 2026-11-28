---
title: "Tutorial de Express parte 2: Crear un sitio web esqueleto"
short-title: "2: Sitio web esqueleto"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Este segundo artículo de nuestro [Tutorial de Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) muestra cómo crear un proyecto de sitio web "esqueleto" que luego podrás completar con rutas, plantillas/vistas y llamadas a base de datos específicas del sitio.

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
        Añadir rutas, plantillas y código del servidor a un proyecto de Express.
      </td>
    </tr>
  </tbody>
</table>

## Visión general

Este artículo parte de la configuración del proyecto de [Configuración de un entorno de desarrollo de Node](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Añadiremos el servidor, las rutas y las plantillas para crear el framework de nuestro [sitio web Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website), al que más adelante le añadiremos todo el código restante que el sitio necesite.

Las siguientes secciones explican la elección de las opciones de vistas y CSS, ofrecen el código que debes pegar en cada archivo del proyecto y muestran cómo ejecutar el sitio web para comprobar que funciona.

## Elegir los componentes del proyecto

En este tutorial ya tomamos por ti todas las decisiones sobre qué biblioteca usar para cada tarea. En tu propio proyecto tendrás que tomar esas decisiones tú mismo, así que ofrecemos una visión general básica del ecosistema. El tutorial de [Gestión de paquetes](/es/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) explica a un nivel más general los aspectos que hay que tener en cuenta.

### ¿Qué motor de vistas debería usar?

Express admite varios motores de vistas/plantillas populares, entre ellos [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs) y [Pug](https://pugjs.org/api/getting-started.html). Para obtener información sobre cómo configurar un motor de plantillas, consulta [Uso de motores de plantillas con Express](https://expressjs.com/en/guide/using-template-engines/) (documentación de Express) y la documentación de tu motor de vistas de destino.

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

Para este proyecto, usaremos el motor de plantillas [Pug](https://pugjs.org/api/getting-started.html) (anteriormente llamado "Jade"), que instalamos en el tutorial del entorno de desarrollo.

### ¿Qué motor de hojas de estilo CSS debería usar?

Puedes configurar un proyecto de Express para usar motores de hojas de estilo CSS como [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/) y [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS tiene algunas limitaciones que dificultan ciertas tareas. Los motores de hojas de estilo CSS te permiten usar una sintaxis más potente para definir tu CSS, que luego se compila en CSS normal para que lo usen los navegadores.

Al igual que con los motores de plantillas, deberías usar el motor de hojas de estilo que permita a tu equipo ser más productivo. Para este proyecto usaremos CSS puro, ya que nuestros requisitos de CSS no son lo bastante complejos como para justificar el uso de otra cosa.

### ¿Qué base de datos debería usar?

El código que añadiremos en este capítulo no usa ninguna base de datos. Las aplicaciones _Express_ pueden usar cualquier [mecanismo de base de datos](https://expressjs.com/en/guide/database-integration/) admitido por _Node_ (_Express_ en sí no define ningún comportamiento ni requisito adicional específico para la gestión de bases de datos).

Hablaremos de cómo integrar una base de datos en un artículo posterior.

## Añadir los archivos de la aplicación

Abre el directorio **express-locallibrary-tutorial** que creaste en [Configuración de un entorno de desarrollo de Node](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). Ya contiene **package.json**, **package-lock.json**, **.gitignore** y las dependencias instaladas en **node_modules**. Conserva esos archivos y su configuración; ahora añadiremos el código de la aplicación a ese proyecto.

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [Muchos archivos de dependencias instaladas]
├── package-lock.json
└── package.json
```

### Estructura de directorios

Crea los siguientes archivos (todos son archivos de texto vacíos):

- **app.js**
- **public/stylesheets/style.css**
- **routes/index.js**
- **routes/users.js**
- **server.js**
- **views/error.pug**
- **views/index.pug**
- **views/layout.pug**

Si usas Bash o una terminal similar, puedes crearlos todos con este comando:

```bash
mkdir -p public/stylesheets routes views && touch app.js public/stylesheets/style.css routes/{index,users}.js server.js views/{error,index,layout}.pug
```

Ahora el directorio de tu proyecto debería verse así:

```plain
express-locallibrary-tutorial
├── .gitignore
├── app.js
├── node_modules
│   └── [Muchos archivos de dependencias instaladas]
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── server.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```

Las rutas de la aplicación se guardan en módulos independientes dentro del directorio **routes/**.
Las plantillas se guardan en el directorio **views/**.

Las siguientes secciones configuran cada archivo.

### server.js

¡El archivo **server.js** es el punto de entrada de la aplicación! Pega lo siguiente en el archivo:

```js
import { createServer } from "node:http";
import createDebug from "debug";

import app from "./app.js";

const debug = createDebug("express-locallibrary-tutorial:server");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535)
  throw new RangeError("PORT must be an integer between 0 and 65535");
app.set("port", port);

const server = createServer(app);
server.on("error", (err) => {
  throw new Error("Failed to start server", { cause: err });
});
server.on("listening", () => {
  const address = server.address();
  debug(`Listening on port ${address.port}`);
});
server.listen(port);
```

Este archivo importa el punto de entrada "real" de la aplicación (**app.js**, en la raíz del proyecto), que configura y exporta el objeto de la aplicación [`express()`](https://expressjs.com/en/api/). El resto del código crea un servidor HTTP de Node para `app` en un puerto específico (tomado de la variable de entorno `PORT`, o 3000 si la variable no está definida), comienza a escuchar, registra un mensaje cuando el servidor ya está escuchando y lanza un error si el servidor no logra iniciarse. Por ahora no necesitas saber nada más sobre este código (todo lo que hay en este archivo es código "repetitivo" o _boilerplate_), pero siéntete libre de revisarlo si te interesa.

### app.js

Este archivo crea un objeto de aplicación `express` (llamado `app`, por convención), configura la aplicación con varias opciones y middleware, y luego exporta la aplicación desde el módulo. Primero, importamos al archivo algunas bibliotecas de node útiles, entre ellas _http-errors_, _express_ y _morgan_. `node:path` es una biblioteca central de Node para analizar rutas de archivos y directorios. Luego importamos con `import` los módulos de nuestro directorio de rutas. Estos módulos/archivos contienen código para gestionar conjuntos particulares de "rutas" (rutas de URL) relacionadas. Cuando extendamos la aplicación esqueleto, por ejemplo para listar todos los libros de la biblioteca, añadiremos un nuevo archivo para gestionar las rutas relacionadas con los libros.

```js
import path from "node:path";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
```

> [!NOTE]
> En este punto, solo hemos _importado_ el módulo; todavía no hemos usado sus rutas (esto sucede un poco más abajo en el archivo).

A continuación, creamos el objeto `app` usando nuestro módulo _express_ importado, y luego lo usamos para configurar el motor de vistas (plantillas). Configurar el motor consta de dos partes. Primero, establecemos el valor `"views"` para especificar la carpeta donde se guardarán las plantillas (en este caso, la subcarpeta **views/**). Luego, establecemos el valor `"view engine"` para especificar la biblioteca de plantillas (en este caso, "pug").

```js
const app = express();

// configuración del motor de vistas
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "pug");
```

El siguiente conjunto de funciones llama a `app.use()` para añadir a la cadena de manejo de solicitudes las bibliotecas de _middleware_ que importamos antes.
Por ejemplo, `express.urlencoded()` rellena [`req.body`](https://expressjs.com/en/5x/api/request/#reqbody) con los campos de los formularios HTML enviados, y `express.json()` hace lo mismo con las solicitudes que envían JSON.
Después de estas bibliotecas, también usamos el middleware `express.static`, que hace que _Express_ sirva todos los archivos estáticos del directorio **public/** en la raíz del proyecto.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, "public")));
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
  if (res.headersSent) {
    next(err);
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status ?? 500);
  res.render("error");
});
```

El objeto de la aplicación Express (`app`) ya está completamente configurado. El último paso es exportarlo para que **server.js** pueda importarlo.

```js
export default app;
```

### Rutas

El archivo de rutas **routes/index.js** tiene la estructura más básica de un módulo de rutas.
Primero, importa la función `Router` del módulo _express_ y la llama para crear un enrutador.
Luego exporta el enrutador desde el módulo (esto es lo que permite importar el archivo en **app.js**). Le añadiremos una ruta en [Vistas (plantillas)](#vistas_plantillas).

```js
import { Router } from "express";

const router = Router();

export default router;
```

A continuación se muestra el archivo de rutas **routes/users.js**.

```js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

export default router;
```

Este añade una sola ruta.
La ruta define un callback que se invocará cada vez que se detecte una solicitud HTTP `GET` con el patrón correcto. El patrón de coincidencia es la ruta especificada al importar el módulo (`"/users"`) más lo que se defina en este archivo (`"/"`). En otras palabras, esta ruta se usará cuando se reciba una URL `/users/`.

> [!NOTE]
> Cuando hayas [ejecutado el sitio web esqueleto](#ejecución_del_sitio_web_esqueleto), podrás probar esto visitando `http://localhost:3000/users/` en tu navegador. Deberías ver el mensaje: "respond with a resource".

### Vistas (plantillas)

Las vistas (plantillas) se guardan en el directorio **views/** (tal como se especifica en **app.js**) y tienen la extensión de archivo **.pug**. El método [`Response.render()`](https://expressjs.com/en/5x/api/response/#resrender) se usa para renderizar una plantilla especificada junto con los valores de las variables con nombre pasadas en un objeto, y luego enviar el resultado como respuesta. En **routes/index.js**, añade el siguiente código encima de la línea `export`; usa la plantilla "index" y le pasa la variable de plantilla "title".

```js
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
```

A continuación se muestra la plantilla correspondiente a la ruta anterior (**index.pug**). Hablaremos más sobre la sintaxis más adelante. Por ahora, todo lo que necesitas saber es que la variable `title` (con el valor `'Express'`) se inserta donde se especifica en la plantilla.

```pug
extends layout

block content
  h1= title
```

Esta plantilla usa `extends layout` para hacer referencia al archivo **views/layout.pug**, que debe contener lo siguiente:

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-10')
          block content
```

El manejador de errores de **app.js** renderiza el archivo **views/error.pug**. Este contiene lo siguiente:

```pug
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
```

## Ejecución del sitio web esqueleto

Llegados a este punto, tenemos un proyecto esqueleto completo. El sitio web todavía no _hace_ gran cosa, pero merece la pena ejecutarlo para comprobar que funciona.

1. Primero, instala las dependencias declaradas en **package.json**. Ya deberías tenerlas instaladas, pero conviene comprobarlo de nuevo.

   ```bash
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

Deberías ver una página en el navegador que solo contiene el título "Express".

¡Felicidades! Ahora tienes una aplicación Express funcionando, a la que puedes acceder a través del puerto 3000.

> [!NOTE]
> También podrías iniciar la aplicación simplemente con el comando `npm start`. Especificar la variable `DEBUG` como se muestra activa los mensajes de depuración de **server.js**. Otros módulos pueden registrar mensajes aunque no esté definida, como el middleware _morgan_, que registra las solicitudes `GET` en la siguiente salida:
>
> ```bash
> DEBUG=express-locallibrary-tutorial:* npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial@1.0.0 start
> > node server.js
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 78.072 ms - 315
> GET /stylesheets/style.css 200 1.647 ms - -
> ```

Para que el servidor se reinicie automáticamente cuando edites archivos JavaScript, detenlo con **Ctrl+C** y usa el script `devstart` que añadiste en el tutorial del entorno de desarrollo:

```bash
npm run devstart
```

Recarga el navegador para ver tus cambios. Durante el desarrollo, los cambios en las vistas y las hojas de estilo se sirven en la siguiente solicitud sin necesidad de reiniciar el servidor.

## Ponte a prueba

Crea una nueva ruta en **routes/users.js** que muestre el texto "_Eres tan genial_" en la URL `/users/cool/`. Pruébala ejecutando el servidor y visitando `http://localhost:3000/users/cool/` en tu navegador.

## Resumen

Ya has creado un proyecto de sitio web esqueleto para [Local Library](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) y has comprobado que funciona usando _node_. Lo más importante es que también entiendes cómo está estructurado el proyecto, así que tienes una buena idea de dónde tendremos que hacer cambios para añadir rutas y vistas a nuestra biblioteca local.

A continuación, empezaremos a modificar el esqueleto para que funcione como el sitio web de la biblioteca.

## Véase también

- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (documentación de Express)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
