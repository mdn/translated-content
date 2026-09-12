---
title: Introducción a Express/Node
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
l10n:
  sourceCommit: 2aa175159b0354f7c5ba36574ef99e37e95b19c8
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

En este primer artículo sobre Express respondemos a las preguntas "¿Qué es Node?" y "¿Qué es Express?", y te ofrecemos una visión general de qué hace especial al framework web Express. Describiremos sus características principales y te mostraremos algunos de los principales bloques de construcción de una aplicación Express (aunque en este punto todavía no tendrás un entorno de desarrollo en el que probarlo).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Comprensión general de la <a href="/es/docs/Learn_web_development/Extensions/Server-side/First_steps">programación de sitios web del lado del servidor</a>, y en particular de los mecanismos de las <a href="/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">interacciones cliente-servidor en sitios web</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarte con qué es Express y cómo encaja con Node, qué funcionalidad ofrece, y los principales bloques de construcción de una aplicación Express.
      </td>
    </tr>
  </tbody>
</table>

## Introducción a Node

[Node](https://nodejs.org/) (o más formalmente, _Node.js_) es un entorno de ejecución de código abierto y multiplataforma que permite a los desarrolladores crear todo tipo de herramientas y aplicaciones del lado del servidor en [JavaScript](/es/docs/Glossary/JavaScript).
Este entorno de ejecución está pensado para usarse fuera del contexto de un navegador (es decir, ejecutándose directamente en una computadora o en el sistema operativo de un servidor). Como tal, el entorno omite las APIs de JavaScript específicas del navegador y añade soporte para APIs de sistema operativo más tradicionales, incluyendo bibliotecas de HTTP y de sistema de archivos.

Desde el punto de vista del desarrollo de servidores web, Node tiene varias ventajas:

- ¡Gran rendimiento! Node fue diseñado para optimizar el rendimiento y la escalabilidad en aplicaciones web, y es una buena solución para muchos problemas comunes del desarrollo web (por ejemplo, aplicaciones web en tiempo real).
- El código se escribe en "JavaScript puro y sencillo", lo que significa que se dedica menos tiempo a lidiar con el "cambio de contexto" entre lenguajes cuando escribes tanto código del lado del cliente como del lado del servidor.
- JavaScript es un lenguaje de programación relativamente nuevo y se beneficia de mejoras en el diseño del lenguaje en comparación con otros lenguajes tradicionales de servidor web (por ejemplo, Python, PHP, etc.). Muchos otros lenguajes nuevos y populares se compilan/convierten a JavaScript, de modo que también puedes usar TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc.
- El gestor de paquetes de Node (npm) da acceso a cientos de miles de paquetes reutilizables. Además, cuenta con una resolución de dependencias de primer nivel y también se puede usar para automatizar la mayor parte de la cadena de herramientas de compilación.
- Node.js es portable. Está disponible en Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS y NonStop OS. Además, cuenta con buen soporte por parte de muchos proveedores de alojamiento web, que a menudo ofrecen infraestructura y documentación específicas para alojar sitios de Node.
- Tiene un ecosistema y una comunidad de desarrolladores externos muy activos, con mucha gente dispuesta a ayudar.

Puedes usar Node.js para crear un servidor web sencillo utilizando el paquete HTTP de Node.

### Hola, Node.js

El siguiente ejemplo crea un servidor web que escucha cualquier tipo de solicitud HTTP en la URL `http://127.0.0.1:8000/`; cuando se recibe una solicitud, el script responde con la cadena: "Hello World". Si ya tienes node instalado, puedes seguir estos pasos para probar el ejemplo:

1. Abre una terminal (en Windows, abre el intérprete de línea de comandos)
2. Crea la carpeta donde quieras guardar el programa, por ejemplo, `test-node`, y entra en ella escribiendo el siguiente comando en tu terminal:

   ```bash
   cd test-node
   ```

3. Con tu editor de texto favorito, crea un archivo llamado `hello.js` y pega en él el siguiente código:

   ```js
   // Load HTTP module
   const http = require("http");

   const hostname = "127.0.0.1";
   const port = 8000;

   // Create HTTP server
   const server = http.createServer((req, res) => {
     // Set the response HTTP header with HTTP status and Content type
     res.writeHead(200, { "Content-Type": "text/plain" });

     // Send the response body "Hello World"
     res.end("Hello World\n");
   });

   // Prints a log once the server starts listening
   server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

4. Guarda el archivo en la carpeta que creaste antes.
5. Vuelve a la terminal y escribe el siguiente comando:

   ```bash
   node hello.js
   ```

Finalmente, ve a `http://localhost:8000` en tu navegador web; deberías ver el texto "**Hello World**" en la esquina superior izquierda de una página web por lo demás vacía.

> [!NOTE]
> Si quieres experimentar con algo de código de Node.js sin necesidad de hacer ninguna instalación local, [Aside: The HTTP module](https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ofrece un recorrido interactivo sobre cómo configurar un servidor básico con el paquete HTTP de Node.

## Frameworks web

Node por sí mismo no da soporte directo a otras tareas comunes del desarrollo web. Si quieres añadir un manejo específico para distintos verbos HTTP (por ejemplo, `GET`, `POST`, `DELETE`, etc.), gestionar por separado las solicitudes en distintas rutas de URL ("rutas"), servir archivos estáticos o usar plantillas para crear la respuesta dinámicamente, Node por sí solo no te será de mucha ayuda. Tendrás que escribir el código tú mismo, o puedes evitar reinventar la rueda y usar un framework web.

## Introducción a Express

[Express](https://expressjs.com/) es el framework web de Node.js más popular, y es la biblioteca subyacente de otros muchos frameworks populares de Node.js. Proporciona mecanismos para:

- Escribir manejadores de solicitudes con distintos verbos HTTP en distintas rutas de URL (rutas).
- Integrarse con motores de renderización de "vistas" para generar respuestas insertando datos en plantillas.
- Establecer configuraciones comunes de aplicaciones web, como el puerto que se usará para conectarse, y la ubicación de las plantillas usadas para renderizar la respuesta.
- Añadir "middleware" adicional de procesamiento de solicitudes en cualquier punto dentro del flujo de manejo de la solicitud.

Aunque _Express_ en sí mismo es bastante minimalista, los desarrolladores han creado paquetes de middleware compatibles para abordar casi cualquier problema de desarrollo web. Hay bibliotecas para trabajar con cookies, sesiones, inicios de sesión de usuario, parámetros de URL, datos `POST`, cabeceras de seguridad y _muchas_ más. Puedes encontrar una lista de paquetes de middleware mantenidos por el equipo de Express en [Express Middleware](https://expressjs.com/en/resources/middleware.html) (junto con una lista de algunos paquetes populares de terceros).

> [!NOTE]
> Esta flexibilidad es un arma de doble filo. Hay paquetes de middleware para abordar casi cualquier problema o requisito, pero averiguar cuáles son los paquetes adecuados a usar a veces puede ser todo un reto. Tampoco hay una "forma correcta" de estructurar una aplicación, y muchos de los ejemplos que puedes encontrar en Internet no son óptimos, o solo muestran una pequeña parte de lo que necesitas hacer para desarrollar una aplicación web.

## ¿De dónde vienen Node y Express?

Node se lanzó inicialmente, solo para Linux, en 2009. El gestor de paquetes npm se lanzó en 2010, y el soporte nativo para Windows se añadió en 2012. Consulta [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) si quieres saber más.

Express se lanzó inicialmente en noviembre de 2010 y actualmente está en la versión mayor 5 de la API. Puedes consultar el [changelog](https://expressjs.com/en/changelog/#5.x) para obtener información sobre los cambios en la versión actual, y [GitHub](https://github.com/expressjs/express/blob/master/History.md) para notas de lanzamiento históricas más detalladas.

## ¿Qué tan populares son Node y Express?

La popularidad de un framework web es importante porque es un indicador de si seguirá manteniéndose, y de qué recursos es probable que estén disponibles en cuanto a documentación, bibliotecas adicionales y soporte técnico.

No existe ninguna medida definitiva y de fácil acceso sobre la popularidad de los frameworks del lado del servidor (aunque puedes estimar la popularidad con mecanismos como contar el número de proyectos de GitHub y de preguntas en Stack Overflow para cada plataforma). Una pregunta mejor es si Node y Express son "lo suficientemente populares" como para evitar los problemas de las plataformas poco populares. ¿Siguen evolucionando? ¿Puedes obtener ayuda si la necesitas? ¿Hay oportunidad de conseguir trabajo remunerado si aprendes Express?

A juzgar por el número de empresas de alto perfil que usan Express, el número de personas que contribuyen a la base de código, y el número de personas que ofrecen soporte tanto gratuito como pagado, entonces sí, ¡_Express_ es un framework popular!

## ¿Es Express dogmático?

Los frameworks web suelen referirse a sí mismos como "dogmáticos" ("_opinionated_") o "no dogmáticos" ("_unopinionated_").

Los frameworks dogmáticos son aquellos que tienen opiniones sobre la "forma correcta" de gestionar cualquier tarea en particular. Suelen favorecer el desarrollo rápido _en un dominio en particular_ (resolver problemas de un tipo determinado) porque la forma correcta de hacer cualquier cosa suele estar bien comprendida y bien documentada. Sin embargo, pueden ser menos flexibles para resolver problemas fuera de su dominio principal, y tienden a ofrecer menos opciones sobre qué componentes y enfoques se pueden usar.

Los frameworks no dogmáticos, en cambio, tienen muchas menos restricciones sobre la mejor manera de combinar componentes para lograr un objetivo, o incluso sobre qué componentes deberían usarse. Facilitan que los desarrolladores usen las herramientas más adecuadas para completar una tarea en particular, aunque a costa de tener que encontrar esos componentes por ti mismo.

Express no es dogmático. Puedes insertar casi cualquier middleware compatible que quieras en la cadena de manejo de solicitudes, en casi cualquier orden que quieras. Puedes estructurar la app en un solo archivo o en varios archivos, y usar cualquier estructura de directorios. ¡A veces puede que sientas que tienes demasiadas opciones!

## ¿Cómo es el código de Express?

En un sitio web tradicional basado en datos, una aplicación web espera solicitudes HTTP del navegador web (u otro cliente). Cuando se recibe una solicitud, la aplicación determina qué acción se necesita según el patrón de la URL y, posiblemente, la información asociada contenida en datos `POST` o `GET`. Dependiendo de lo que se requiera, puede entonces leer o escribir información en una base de datos, o realizar otras tareas necesarias para satisfacer la solicitud. La aplicación devolverá entonces una respuesta al navegador web, a menudo creando dinámicamente una página HTML para que el navegador la muestre, insertando los datos obtenidos en marcadores de posición dentro de una plantilla HTML.

Express proporciona métodos para especificar qué función se llama para un verbo HTTP en particular (`GET`, `POST`, `PUT`, etc.) y un patrón de URL ("ruta"), y métodos para especificar qué motor de plantillas ("vista") se usa, dónde se ubican los archivos de plantilla, y qué plantilla usar para renderizar una respuesta. Puedes usar middleware de Express para añadir soporte para cookies, sesiones y usuarios, obtener parámetros `POST`/`GET`, etc. Puedes usar cualquier mecanismo de base de datos compatible con Node (Express no define ningún comportamiento relacionado con bases de datos).

Las siguientes secciones explican algunas de las cosas comunes que verás al trabajar con código de _Express_ y _Node_.

### Hello World de Express

Primero, veamos el ejemplo estándar de [Hello World](https://expressjs.com/en/starter/hello-world.html) de Express (comentaremos cada parte de esto a continuación, y en las siguientes secciones).

> [!NOTE]
> Si ya tienes Node y Express instalados (o si los instalas como se muestra en el [siguiente artículo](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)), puedes guardar este código en un archivo de texto llamado **app.js** y ejecutarlo en una línea de comandos de bash llamando a:
>
> **`node ./app.js`**

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

Las dos primeras líneas hacen `require()` (importan) el módulo express y crean una [aplicación Express](https://expressjs.com/en/5x/api.html#app). Este objeto, que tradicionalmente se llama `app`, tiene métodos para enrutar solicitudes HTTP, configurar middleware, renderizar vistas HTML, registrar un motor de plantillas, y modificar [ajustes de la aplicación](https://expressjs.com/en/5x/api.html#app.settings.table) que controlan cómo se comporta la aplicación (por ejemplo, el modo de entorno, si las definiciones de ruta distinguen mayúsculas de minúsculas, etc.).

La parte central del código (las tres líneas que empiezan con `app.get`) muestra una _definición de ruta_. El método `app.get()` especifica una función de retorno de llamada (callback) que se invocará siempre que haya una solicitud HTTP `GET` con una ruta (`'/'`) relativa a la raíz del sitio. La función de retorno de llamada toma un objeto de solicitud y uno de respuesta como argumentos, y llama a [`send()`](https://expressjs.com/en/5x/api.html#res.send) en la respuesta para devolver la cadena "Hello World!"

El bloque final inicia el servidor en un puerto especificado ('3000') e imprime un comentario de registro en la consola. Con el servidor en ejecución, podrías ir a `localhost:3000` en tu navegador para ver la respuesta de ejemplo devuelta.

### Importar y crear módulos

Un módulo es una biblioteca/archivo de JavaScript que puedes importar en otro código usando la función `require()` de Node. _Express_ en sí mismo es un módulo, al igual que las bibliotecas de middleware y de bases de datos que usamos en nuestras aplicaciones _Express_.

El código de abajo muestra cómo importamos un módulo por su nombre, usando el framework _Express_ como ejemplo. Primero invocamos la función `require()`, especificando el nombre del módulo como una cadena (`'express'`), y llamando al objeto devuelto para crear una [aplicación Express](https://expressjs.com/en/5x/api.html#app). Después podemos acceder a las propiedades y funciones del objeto de la aplicación.

```js
const express = require("express");

const app = express();
```

También puedes crear tus propios módulos que se puedan importar de la misma manera.

> [!NOTE]
> _Querrás_ crear tus propios módulos, porque esto te permite organizar tu código en partes manejables; una aplicación monolítica de un solo archivo es difícil de entender y mantener. Usar módulos también te ayuda a gestionar tu espacio de nombres, porque solo las variables que exportas explícitamente se importan cuando usas un módulo.

Para hacer que los objetos estén disponibles fuera de un módulo, solo necesitas exponerlos como propiedades adicionales del objeto `exports`. Por ejemplo, el módulo **square.js** de abajo es un archivo que exporta los métodos `area()` y `perimeter()`:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Podemos importar este módulo usando `require()`, y luego llamar al/los método(s) exportado(s) como se muestra:

```js
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

> [!NOTE]
> También puedes especificar una ruta absoluta al módulo (o un nombre, como hicimos inicialmente).

Si quieres exportar un objeto completo en una sola asignación en lugar de construirlo propiedad por propiedad, asígnalo a `module.exports` como se muestra abajo (también puedes hacer esto para convertir la raíz del objeto exports en un constructor u otra función):

```js
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};
```

> [!NOTE]
> Puedes pensar en `exports` como un [atajo](https://nodejs.org/api/modules.html#modules_exports_shortcut) a `module.exports` dentro de un módulo dado. De hecho, `exports` es simplemente una variable que se inicializa con el valor de `module.exports` antes de que se evalúe el módulo. Ese valor es una referencia a un objeto (un objeto vacío en este caso). Esto significa que `exports` contiene una referencia al mismo objeto al que hace referencia `module.exports`. También significa que, al asignar otro valor a `exports`, este deja de estar vinculado a `module.exports`.

Para mucha más información sobre módulos, consulta [Modules](https://nodejs.org/api/modules.html#modules_modules) (documentación de la API de Node).

### Uso de APIs asíncronas

El código JavaScript usa frecuentemente APIs asíncronas en lugar de síncronas para operaciones que pueden tardar algún tiempo en completarse. Una API síncrona es aquella en la que cada operación debe completarse antes de que pueda empezar la siguiente. Por ejemplo, las siguientes funciones de registro son síncronas, y mostrarán el texto en la consola en orden (First, Second).

```js
console.log("First");
console.log("Second");
```

Por el contrario, una API asíncrona es aquella en la que la API inicia una operación y retorna inmediatamente (antes de que la operación se complete). Una vez que la operación termina, la API usa algún mecanismo para realizar operaciones adicionales. Por ejemplo, el siguiente código imprimirá "Second, First" porque, aunque el método `setTimeout()` se llama primero y retorna de inmediato, la operación no se completa hasta pasados varios segundos.

```js
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Usar APIs asíncronas no bloqueantes es aún más importante en Node que en el navegador, porque las aplicaciones de _Node_ suelen escribirse como un entorno de ejecución de un solo hilo dirigido por eventos. "Un solo hilo" significa que todas las solicitudes al servidor se ejecutan en el mismo hilo (en lugar de generarse en procesos separados). Este modelo es extremadamente eficiente en cuanto a velocidad y recursos del servidor. Sin embargo, sí significa que, si alguna de tus funciones llama a métodos síncronos que tardan mucho en completarse, bloquearán no solo la solicitud actual, sino también cualquier otra solicitud que esté manejando tu aplicación web.

Hay varias maneras en que una API asíncrona puede notificar a tu aplicación que ha terminado. Históricamente, el enfoque utilizado era registrar una función de retorno de llamada (callback) al invocar la API asíncrona, la cual se llama cuando la operación se completa (este es el enfoque usado arriba).

> [!NOTE]
> Usar callbacks puede resultar bastante "desordenado" si tienes una secuencia de operaciones asíncronas dependientes que deben realizarse en orden, porque esto da lugar a múltiples niveles de callbacks anidados. Este problema se conoce comúnmente como "callback hell" (el infierno de los callbacks).

> [!NOTE]
> Una convención común en Node y Express es usar callbacks con el error primero (_error-first callbacks_). En esta convención, el primer valor en tus _funciones de retorno de llamada_ es un valor de error, mientras que los argumentos siguientes contienen los datos de éxito. Hay una buena explicación de por qué este enfoque es útil en este blog: [The Node.js Way - Understanding Error-First Callbacks](https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/) (fredkschott.com).

El código JavaScript moderno usa más comúnmente [promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise) y [async/await](/es/docs/Web/JavaScript/Reference/Statements/async_function) para gestionar el flujo asíncrono del programa.
Deberías usar promesas siempre que sea posible. Si trabajas con código que usa callbacks, puedes usar la función [`utils.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal) de Node.js para gestionar la conversión de callback a promesa de forma cómoda.

### Creación de manejadores de rutas

En nuestro ejemplo de Express de _Hello World_ (ver arriba), definimos una función manejadora de ruta (callback) para solicitudes HTTP `GET` a la raíz del sitio (`'/'`).

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

La función de retorno de llamada toma un objeto de solicitud y uno de respuesta como argumentos. En este caso, el método llama a [`send()`](https://expressjs.com/en/5x/api.html#res.send) en la respuesta para devolver la cadena "Hello World!" Hay [varios otros métodos de respuesta](https://expressjs.com/en/guide/routing.html#response-methods) para finalizar el ciclo de solicitud/respuesta; por ejemplo, podrías llamar a [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) para enviar una respuesta JSON, o a [`res.sendFile()`](https://expressjs.com/en/5x/api.html#res.sendFile) para enviar un archivo.

> [!NOTE]
> Puedes usar los nombres de argumento que quieras en las funciones de retorno de llamada; cuando se invoca el callback, el primer argumento siempre será la solicitud y el segundo siempre será la respuesta. Tiene sentido nombrarlos de forma que puedas identificar el objeto con el que estás trabajando en el cuerpo del callback.

El objeto de la _aplicación Express_ también proporciona métodos para definir manejadores de rutas para todos los demás verbos HTTP, que se usan mayormente de la misma manera:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

Hay un método de enrutamiento especial, `app.all()`, que se llamará en respuesta a cualquier método HTTP. Se usa para cargar funciones de middleware en una ruta en particular para todos los métodos de solicitud. El siguiente ejemplo (de la documentación de Express) muestra un manejador que se ejecutará para solicitudes a `/secret`, sin importar el verbo HTTP utilizado (siempre que sea compatible con el [módulo http](https://nodejs.org/docs/latest/api/http.html#httpmethods)).

```js
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Las rutas te permiten hacer coincidir patrones particulares de caracteres en una URL, y extraer algunos valores de la URL para pasarlos como parámetros al manejador de ruta (como atributos del objeto de solicitud pasado como parámetro).

A menudo es útil agrupar los manejadores de ruta de una parte concreta de un sitio y acceder a ellos usando un prefijo de ruta común (por ejemplo, un sitio con una wiki podría tener todas las rutas relacionadas con la wiki en un archivo y acceder a ellas con un prefijo de ruta _/wiki/_). En _Express_ esto se logra usando el objeto [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router). Por ejemplo, podemos crear nuestra ruta de wiki en un módulo llamado **wiki.js**, y luego exportar el objeto `Router`, como se muestra abajo:

```js
// wiki.js - Wiki route module

const express = require("express");

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Añadir rutas al objeto `Router` es igual que añadir rutas al objeto `app` (como se mostró antes).

Para usar el router en nuestro archivo de app principal, haríamos `require()` del módulo de ruta (**wiki.js**), y luego llamaríamos a `use()` en la _aplicación Express_ para añadir el Router a la ruta de manejo de middleware. Las dos rutas serían entonces accesibles desde `/wiki/` y `/wiki/about/`.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Te mostraremos mucho más sobre cómo trabajar con rutas, y en particular sobre el uso de `Router`, más adelante en la sección enlazada [Rutas y controladores](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Uso de middleware

El middleware se usa extensamente en las aplicaciones Express, para tareas que van desde servir archivos estáticos hasta el manejo de errores, pasando por la compresión de respuestas HTTP. Mientras que las funciones de ruta terminan el ciclo de solicitud-respuesta HTTP devolviendo alguna respuesta al cliente HTTP, las funciones de middleware _normalmente_ realizan alguna operación en la solicitud o la respuesta y luego llaman a la siguiente función en la "pila", que puede ser más middleware o un manejador de ruta. El orden en que se llama al middleware depende del desarrollador de la aplicación.

> [!NOTE]
> El middleware puede realizar cualquier operación, ejecutar cualquier código, hacer cambios en el objeto de solicitud y de respuesta, y _también puede terminar el ciclo de solicitud-respuesta_. Si no termina el ciclo, debe llamar a `next()` para pasar el control a la siguiente función de middleware (o la solicitud quedará colgada).

La mayoría de las aplicaciones usarán middleware de _terceros_ para simplificar tareas comunes de desarrollo web como trabajar con cookies, sesiones, autenticación de usuarios, acceder a datos `POST` y JSON de la solicitud, registro de eventos, etc. Puedes encontrar una [lista de paquetes de middleware mantenidos por el equipo de Express](https://expressjs.com/en/resources/middleware.html) (que también incluye otros paquetes populares de terceros). Hay otros paquetes de Express disponibles en el gestor de paquetes npm.

Para usar middleware de terceros, primero necesitas instalarlo en tu app usando npm.
Por ejemplo, para instalar el middleware de registro de solicitudes HTTP [morgan](https://expressjs.com/en/resources/middleware/morgan.html), harías esto:

```bash
npm install morgan
```

Después podrías llamar a `use()` en el _objeto de aplicación Express_ para añadir el middleware a la pila:

```js
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

> [!NOTE]
> Las funciones de middleware y de enrutamiento se llaman en el orden en que se declaran. Para algunos middleware el orden es importante (por ejemplo, si el middleware de sesión depende del middleware de cookies, entonces el manejador de cookies debe añadirse primero). Casi siempre es el caso de que el middleware se llama antes de establecer las rutas, o tus manejadores de ruta no tendrán acceso a la funcionalidad añadida por tu middleware.

Puedes escribir tus propias funciones de middleware, y es probable que tengas que hacerlo (aunque solo sea para crear código de manejo de errores). La **única** diferencia entre una función de middleware y un callback de manejador de ruta es que las funciones de middleware tienen un tercer argumento, `next`, que se espera que las funciones de middleware llamen si no son las que completan el ciclo de solicitud (cuando se llama a la función de middleware, este contiene la función _siguiente_ que debe llamarse).

Puedes añadir una función de middleware a la cadena de procesamiento para _todas las respuestas_ con `app.use()`, o para un verbo HTTP específico usando el método asociado: `app.get()`, `app.post()`, etc. Las rutas se especifican de la misma manera en ambos casos, aunque la ruta es opcional al llamar a `app.use()`.

El ejemplo de abajo muestra cómo puedes añadir la función de middleware usando ambos enfoques, y con/sin una ruta.

```js
const express = require("express");

const app = express();

// An example middleware function
function middlewareFunction(req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(middlewareFunction);

// Function added with use() for a specific route
app.use("/some-route", middlewareFunction);

// A middleware function added for a specific HTTP verb and route
app.get("/", middlewareFunction);

app.listen(3000);
```

> [!NOTE]
> Arriba declaramos la función de middleware por separado y luego la establecemos como el callback. En nuestra función manejadora de ruta anterior, declaramos la función de callback en el momento de usarla. En JavaScript, ambos enfoques son válidos.

La documentación de Express tiene mucha más documentación excelente sobre cómo [usar](https://expressjs.com/en/guide/using-middleware.html) y [escribir](https://expressjs.com/en/guide/writing-middleware.html) middleware de Express.

### Servir archivos estáticos

Puedes usar el middleware [express.static](https://expressjs.com/en/5x/api.html#express.static) para servir archivos estáticos, incluyendo tus imágenes, CSS y JavaScript (`static()` es la única función de middleware que realmente forma **parte** de _Express_). Por ejemplo, usarías la línea de abajo para servir imágenes, archivos CSS y archivos JavaScript desde un directorio llamado '**public**' en el mismo nivel desde donde llamas a node:

```js
app.use(express.static("public"));
```

Cualquier archivo en el directorio public se sirve añadiendo su nombre de archivo (_relativo_ al directorio base "public") a la URL base. Así, por ejemplo:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Puedes llamar a `static()` varias veces para servir varios directorios. Si una función de middleware no puede encontrar un archivo, este se pasará al siguiente middleware (el orden en que se llama al middleware se basa en el orden en que lo declaraste).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

También puedes crear un prefijo virtual para tus URLs estáticas, en lugar de que los archivos se añadan a la URL base. Por ejemplo, aquí [especificamos una ruta de montaje](https://expressjs.com/en/5x/api.html#app.use) para que los archivos se carguen con el prefijo "/media":

```js
app.use("/media", express.static("public"));
```

Ahora puedes cargar los archivos que están en el directorio `public` desde el prefijo de ruta `/media`.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

> [!NOTE]
> Consulta también [Serving static files in Express](https://expressjs.com/en/starter/static-files.html).

### Manejo de errores

Los errores se manejan mediante una o más funciones especiales de middleware que tienen cuatro argumentos, en lugar de los tres habituales: `(err, req, res, next)`. Por ejemplo:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Estas pueden devolver cualquier contenido requerido, pero deben llamarse después de todas las demás llamadas a `app.use()` y de rutas, para que sean el último middleware en el proceso de manejo de solicitudes.

Express viene con un manejador de errores integrado, que se encarga de cualquier error restante que pueda encontrarse en la app. Esta función de middleware de manejo de errores por defecto se añade al final de la pila de funciones de middleware. Si pasas un error a `next()` y no lo manejas en un manejador de errores, será manejado por el manejador de errores integrado; el error se escribirá al cliente junto con el seguimiento de la pila (stack trace).

> [!NOTE]
> El seguimiento de la pila no se incluye en el entorno de producción. Para ejecutarlo en modo de producción, necesitas establecer la variable de entorno `NODE_ENV` en `"production"`.

> [!NOTE]
> HTTP404 y otros códigos de estado de "error" no se tratan como errores. Si quieres manejarlos, puedes añadir una función de middleware para hacerlo. Para más información, consulta las [preguntas frecuentes](https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Para más información, consulta [Error handling](https://expressjs.com/en/guide/error-handling.html) (documentación de Express).

### Uso de bases de datos

Las apps _Express_ pueden usar cualquier mecanismo de base de datos compatible con _Node_ (_Express_ en sí mismo no define ningún comportamiento/requisito adicional específico para la gestión de bases de datos). Hay muchas opciones, incluyendo PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Para usarlas, primero tienes que instalar el driver de base de datos usando npm. Por ejemplo, para instalar el driver del popular MongoDB NoSQL, usarías el comando:

```bash
npm install mongodb
```

La base de datos en sí se puede instalar localmente o en un servidor en la nube. En tu código Express importas el driver, te conectas a la base de datos, y luego realizas operaciones de crear, leer, actualizar y eliminar (CRUD).
El siguiente ejemplo muestra cómo puedes buscar registros de "mamíferos" usando MongoDB:

```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("animals");
    const mammals = await db.collection("mammals").find().toArray();
    console.log(mammals);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

Otro enfoque popular es acceder a tu base de datos indirectamente, mediante un mapeador objeto-relacional ("ORM"). En este enfoque defines tus datos como "objetos" o "modelos" y el ORM los mapea al formato subyacente de la base de datos. Este enfoque tiene la ventaja de que, como desarrollador, puedes seguir pensando en términos de objetos JavaScript en lugar de en semántica de base de datos, y de que hay un lugar obvio para realizar la validación y comprobación de los datos entrantes. Hablaremos más sobre bases de datos en un artículo posterior.

Para más información, consulta [Database integration](https://expressjs.com/en/guide/database-integration.html) (documentación de Express).

### Renderizado de datos (vistas)

Los motores de plantillas (también llamados "motores de vistas" en _Express_) te permiten especificar la _estructura_ de un documento de salida en una plantilla, usando marcadores de posición para los datos que se rellenarán cuando se genere una página. Las plantillas se usan a menudo para crear HTML, pero también pueden crear otros tipos de documentos.

Express tiene soporte para varios motores de plantillas, en particular Pug (antes "Jade"), Mustache y EJS. Cada uno tiene sus propias fortalezas para abordar casos de uso concretos (las comparaciones relativas se pueden encontrar fácilmente mediante una búsqueda en Internet).
El generador de aplicaciones de Express usa Jade como motor por defecto, pero también admite varios otros.

En el código de configuración de tu aplicación estableces el motor de plantillas a usar y la ubicación donde Express debe buscar las plantillas, usando los ajustes 'views' y 'view engine', como se muestra abajo (¡también tendrás que instalar el paquete que contiene tu biblioteca de plantillas!)

```js
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

El aspecto de la plantilla dependerá de qué motor uses. Suponiendo que tienes un archivo de plantilla llamado "index.\<template_extension>" que contiene marcadores de posición para las variables de datos llamadas 'title' y "message", llamarías a [`Response.render()`](https://expressjs.com/en/5x/api.html#res.render) en una función manejadora de ruta para crear y enviar la respuesta HTML:

```js
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Para más información, consulta [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (documentación de Express).

### Estructura de archivos

Express no hace suposiciones en cuanto a la estructura o los componentes que usas. Las rutas, vistas, archivos estáticos y demás lógica específica de la aplicación pueden estar en cualquier número de archivos con cualquier estructura de directorios. Aunque es perfectamente posible tener toda la aplicación _Express_ en un solo archivo, normalmente tiene sentido dividir tu aplicación en archivos según la función (por ejemplo, gestión de cuentas, blogs, foros de discusión) y el dominio del problema arquitectónico (por ejemplo, modelo, vista o controlador, si estás usando una [arquitectura MVC](/es/docs/Glossary/MVC)).

En un tema posterior usaremos el _generador de aplicaciones Express_, que crea un esqueleto de app modular que podemos ampliar fácilmente para crear aplicaciones web.

## Resumen

¡Felicidades, has completado el primer paso de tu recorrido por Express/Node! Ahora deberías entender los principales beneficios de Express y Node, y a grandes rasgos cómo podrían ser las partes principales de una app Express (rutas, middleware, manejo de errores y código de plantillas). También deberías entender que, al ser Express un framework no dogmático, la forma en que combines estas partes y las bibliotecas que uses dependen en gran medida de ti.

Por supuesto, Express es deliberadamente un framework de aplicaciones web muy ligero, así que gran parte de su beneficio y potencial proviene de bibliotecas y características de terceros. Veremos eso con más detalle en los siguientes artículos. En nuestro próximo artículo vamos a ver cómo configurar un entorno de desarrollo de Node, para que puedas empezar a ver algo de código de Express en acción.

## Véase también

- [Learn Node.js](https://scrimba.com/learn-nodejs-c00ho9qqh6?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ofrece una introducción divertida e interactiva a Node.js.
- [Learn Express.js](https://scrimba.com/learn-expressjs-c062las154?via=mdn) de Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> se basa en el enlace anterior, mostrando cómo empezar a usar el framework Express para crear sitios web del lado del servidor.
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (documentación de la API de Node)
- [Express](https://expressjs.com/) (página de inicio)
- [Basic routing](https://expressjs.com/en/starter/basic-routing.html) (documentación de Express)
- [Routing guide](https://expressjs.com/en/guide/routing.html) (documentación de Express)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (documentación de Express)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (documentación de Express)
- [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html) (documentación de Express)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (documentación de Express)
- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html) (documentación de Express)
- [Error handling](https://expressjs.com/en/guide/error-handling.html) (documentación de Express)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
