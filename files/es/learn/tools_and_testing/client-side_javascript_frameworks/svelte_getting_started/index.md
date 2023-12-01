---
title: Introducción a Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
l10n:
  sourceCommit: 1ad0cd5faac577bf7b13990242db455f2be2058d
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

En este artículo proporcionaremos una breve introducción al [framework Svelte](https://svelte.dev/). Veremos cómo funciona Svelte y qué es lo que lo hace diferente del resto de _frameworks_ y herramientas que hemos revisado hasta ahora. Después aprenderemos a configurar nuestro entorno de desarrollo, crear una aplicación de ejemplo, entender la estructura del proyecto, ver cómo ejecutarlo localmente y finalmente construir la versión para producción.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        <p>
        Se recomienda que como mínimo te sientas familiarizado con lo básico de los lenguajes
          <a href="/es/docs/Learn/HTML">HTML</a>,
          <a href="/es/docs/Learn/CSS">CSS</a> y
          <a href="/es/docs/Learn/JavaScript">JavaScript</a>, además tener conocimiento de la
          <a
            href="/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/línea de comandos</a
          >.
        </p>
        <p>
            Svelte es un compilador que genera código de JavaScript ligero y optimizado a partir de nuestro código fuente. Necesitarás una terminal con los paquetes de node y npm instalados para compilar y construir tu aplicación.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Configurar un entorno de desarrollo local de Svelte, crear y construir una aplicación de ejemplo y entender a grandes rasgos cómo funciona.
      </td>
    </tr>
  </tbody>
</table>

## Svelte: Una nueva metodología para construir interfaces de usuario avanzadas

Svelte proporciona una metología diferente para construir aplicaciones web, en contraste con otros _frameworks_ que vimos en este módulo. Mientras otros _frameworks_ como _React_ y _Vue_ hacen la mayor parte del trabajo en el navegador del usuario mientras se ejecuta la aplicación, Svelte convierte esa carga de trabajo en un proceso de compilación que se ejecuta a la hora de construir tu aplicación, produciendo así código Javascript puro (_vanilla_) altamente optimizado.

Tras usar esta metodología, como resultado no solo tenemos aplicaciones menos pesadas y rápidas, sino que también mejora la experiencia de creación de aplicaciones para las personas que tienen poca experiencia con el ecosistema moderno de herramientas de desarrollo.

Svelte adopta en gran medida el modelo clásico de desarrollo web dado por HTML, JS y CSS, pues solamente añade unas cuantas extensiones sobre HTML y JavaScript. A diferencia del resto de _frameworks_, Svelte probablemente introduce menos conceptos y herramientas por aprender.

Sus mayores inconvenientes vienen dados por su corta edad, pues su ecosistema se encuentra limitado en términos de herramientas, soporte, complementos (_plugins_), patrones específicos de uso, etc. en comparación con otros _frameworks_. A pesar de ello, sus beneficios deberían ser suficientes para despertar tu curiosidad en explorarlo.

> **Nota:** Recientemente Svelte agregó [soporte oficial de Typescript](https://svelte.dev/blog/svelte-and-typescript), una de sus características más esperadas. Más adelante en esta serie de tutoriales exploraremos esa integración.

Te recomendamos que sigas el [Tutorial de Svelte](https://svelte.dev/tutorial/basics) para una introducción rápida a los conceptos básicos, para después regresar a este tutorial y aprender a construir algo más complicado.

## Casos de uso

Svelte puede ser utilizado para desarrollar porciones de una interfaz o una aplicación completa. Puedes construir tu aplicación desde cero y dejar que Svelte maneje tu Interfaz de Usuarios (IU) o incluso puedes integrar Svelte de forma incremental en una aplicación existente.

Tomando en cuenta lo anterior, Svelte es una excelente solución para los siguientes casos:

- Aplicaciones web enfocadas a dispositivos de bajo rendimiento: Las aplicaciones con Svelte son más ligeras, lo cual las vuelve ideal para dispositivos con redes lentas y poder de procesamiento limitado.
- Páginas altamente interactivas o visualizaciones complejas: Si te encuentras construyendo una aplicación para visualización de datos que necesite mostrar una gran cantidad de elementos en el DOM, la ganancia de rendimiento que viene de la mano de un _framework_ sin sobrecarga en tiempo de ejecución, ayudará a que las interacciones del usuario se mantengan ágiles y responsivas.
- Gente que se encuentre iniciando en el mundo del desarrollo web: La curva de aprendizaje de Svelte es muy accesible. Desarrolladores web con conocimientos básicos de HTML, CSS y Javascript, fácilmente pueden familiarizarse con los conceptos de Svelte y empezar a construir aplicaciones web.

De forma adicional, con la ayuda de [Sapper](https://sapper.svelte.dev/) (un _framework_ que se basa en Svelte), puedes desarrollar aplicaciones con características avanzadas como renderizado del lado del servidor (_SSR_), [fragmentación de código (_code splitting_)](/es/docs/Glossary/Code_splitting), enrutamiento basado en archivos y soporte de modo fuera de línea. Incluso existe [Svelte Native](https://svelte-native.technology/), que te permite crear aplicaciones nativas para móviles.

## ¿Cómo funciona Svelte?

Al tratarse de un compilador, Svelte puede extender HTML, CSS, y JavaScript, generando código Javascript optimizado sin agregar sobrecarga en tiempo de ejecución. Para lograr esto, Svelte añade características sobre tecnologías web nativas de la siguiente forma:

- Extiende a HTML al permitir expresiones de JavaScript dentro del marcado HTML, proporcionando directivas para utilizar condiciones y ciclos.
- Extiende a CSS al agregar mecanismos de contención, permitiendo a cada componente definir sus propios estilos sin el riesgo de que colisionen con estilos de otros componentes.
- Extiende a JavaScript al reinterpretar directivas específicas del lenguaje para lograr verdadera reactividad y facilitar el manejo del estado de los componentes.

El compiliador solo interfiere bajo situaciones muy específicas y únicamente en el contexto de componentes Svelte. Las pocas extensiones que se aplican sobre el lenguaje de JavaScript fueron elegidas cuidadosamente para no violar la sintaxis de JavaScript o confundir a los desarrolladores. Es decir, principalmente estarás trabajando con Javascript puro.

## Primeros pasos con Svelte

Debido a que Svelte es un compilador, no es posible simplemente agregar una etiqueta `<script src="svelte.js">` en tu página para y luego importarla en tu aplicación. Deberás configurar tu entorno de desarrollo para que el compilador pueda hacer su trabajo.

### Requisitos

Para poder trabajar con Svelte, debes tener [Node.js](https://nodejs.org/en/) instalado. Es recomendable que uses una versión con soporte a largo plazo (LTS). Node incluye `npm` (el administrador de paquetes de Node), y `npx` (El lanzador de paquetes de Node). Toma en cuenta que también puedes utilizar el administrador de paquetes Yarn en lugar de npm, no obstante, para este tutorial asumiremos que estás trabajando con npm. Visita [Conceptos básicos de administradores de paquetes](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) para más información de npm y yarn.

Si estás utilizando Windows, deberás instalar algunos programas que te proporcionen características de la terminal de sistemas Unix/macOS para poder ejecutar comandos de este tutorial. Dos herramientas que te pueden servir son Gitbash (que forma parte de las [herramientas de git para Windows](https://gitforwindows.org/)) o el [Subsistema de Linux para Windows (WSL)](https://docs.microsoft.com/windows/wsl/about). Visita el [Curso introductorio a la línea de comandos](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) para más información sobre estas herramientas y la línea de comandos en general.

También puedes visitar los siguientes artículos para más información:

- ["¿Qué es npm? (en-US)"](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) en nodejs.org
- ["Introducción a npx (en-US)"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) en el blog de npm
- ["La forma sencilla de iniciar con svelte (en-US)"](https://svelte.dev/blog/the-easiest-way-to-get-started) en el blog de Svelte

### Creando tu primer aplicación con Svelte

La forma más sencilla de crear la base inicial de una aplicación es descargando el _template_ oficial. Para hacerlo, visita [sveltejs/template](https://github.com/sveltejs/template) en GitHub, incluso puedes utilizar [degit](https://github.com/Rich-Harris/degit) y evitar tener que descargarlo y descomprimirlo.

Para crear la base inicial de tu aplicación, ejecuta los siguientes comandos en la terminal:

```bash
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

> **Nota:** el funcionamiento de degit no es mágico — simplemente te permite descargar y descomprimir la última versión del contenido de un repositorio de git. Esto es mucho más rápido que utilizar el comando `git clone` ya que no se descarga todo el historial del repositorio ni se crea un clon local completo.

Después de ejecutar `npm run dev`, Svelte compila y construye tu aplicación.
Además, inicia un servidor local en la dirección `localhost:8080`. Svelte estará a la espera de modificaciones en el código fuente de tu aplicación para compilar y actualizar la app. Tu navegador mostrará algo parecido a lo siguiente:

![Una página inicial simple que dice hola mundo y proporciona un enlace a los tutoriales de svelte oficiales ](01-svelte-starter-app.png)

### Estructura de la aplicación

El _template_ inicial viene con la siguiente estructura:

```
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```

El contenido del proyecto consta de los siguientes archivos:

- `package.json` y `package-lock.json`: Contienen información sobre el proyecto, son utilizados por Node.js/npm para manterlo organizado. No necesitas entender estos archivos para completar el tutorial, sin embargo, si quieres saber más sobre este tema puedes leer el artículo [¿Qué es el archivo `package.json`? (en-US)](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) en NodeJS.org; también lo analizamos en nuestro [Tutorial básico de administradores de paquetes](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).
- `node_modules`: Aquí Node guarda las dependencias del proyecto. Estas dependencias no estarán presentes en producción, son usadas únicamente en el entorno de desarrollo.
- `.gitignore`: Le indica a Git cuales son los archivos y carpetas que debe ignorar del proyecto. Esto será de gran ayuda si decides incluir tu aplicación en un repositorio de git.
- `rollup.config.js`: Svelte usa [rollup.js](https://rollupjs.org/) como un empaquetador de módulos. Este archivo de configuración le dice a _rollup_ cómo compilar y construir tu aplicación. Si prefieres utilizar [webpack](https://webpack.js.org/), en su lugar puedes crear tu proyecto con `npx degit sveltejs/template-webpack svelte-app`.
- `scripts`: Contiene los _scripts_ de configuración requeridos. Actualmente debería contener únicamente `setupTypeScript.js`.

  - `setupTypeScript.js`: Este script configura el soporte de Typescript dentro de Svelte. Hablaremos más a detalle de este tema en el último artículo.

- `src`: En este directorio se encuentra el código fuente de tu aplicación. Es decir, donde crearás la mayor parte de código.

  - `App.svelte`: Este es el componente principal de tu aplicación. De momento solo renderiza el mensaje 'Hello world'.
  - `main.js`: El punto de entrada a nuestra aplicación. Se encarga de instanciar el componente `App` y lo enlaza con el _body_ de tu página HTML.

- `public`: Este directorio contiene todos los archivos que serán publicados en producción.

  - `favicon.png`: Este es el _favicon_ para tu aplicación. Actualmente es el logo de Svelte.
  - `index.html`: Esta es la página principal de tu aplicación. Inicialmente es simplemente una página HTML vacía que carga los paquetes de archivos CSS y JavaScript generados por Svelte.
  - `global.css`: Este archivo contiene los estilos globales. Es un archivo regular de CSS que será aplicado a toda tu aplicación.
  - `build`: Este directorio contiene el código fuente de JavaScript y CSS que fue generado.

    - `bundle.css`: El archivo CSS generado por Svelte a partir de los estilos definidos por cada componente.
    - `bundle.js`: El archivo de código Javascript compilado a partir de todo el código fuente de tu aplicación.

## Analizando nuestro primer componente de Svelte

Los componentes son los bloques para construir aplicaciones con Svelte. Se definen en archivos `.svelte` usando una versión extendida de HTML.

Las tres secciones: `<script>`, `<style>`, y el marcado, son completamente opcionales y pueden aparecer en cualquier orden.

```html
<script>
  // aquí va la lógica
</script>

<style>
  /* aquí van los estilos */
</style>

<!-- el marcado (cero o más elementos HTML) va aquí -->
```

> **Nota:** Para más información del formato para componentes, dale un vistazo a la [Documentación de Svelte](https://svelte.dev/docs#Component_format).

Una vez revisado lo anterior, miremos el archivo `src/App.svelte` que viene incluir en el _template_ inicial. Deberías ver algo como lo siguiente:

```html
<script>
  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

### La sección `<script>`

El bloque `<script>` contiene JavaScript que se ejecuta cuando se crea una instancia del componente. Las variables declaradas (o importadas) en el nivel más alto pueden ser referenciadas por el marcado del componente. Svelte usa las variables del nivel más alto para manejar el estado del componente, estas variables son reactivas por defecto. En breve explicaremos esto con más detalle.

```html
<script>
  export let name;
</script>
```

Svelte utiliza la palabra clave [`export`](/es/docs/Web/JavaScript/Reference/Statements/export) para marcar la declaración de una variable como una propiedad (abreviado como prop), lo cual significa que ahora es visible para los consumidores del componente (por ejemplo, otros componentes). Este es un claro ejemplo de cómo Svelte extiende la sintaxis de JavaScript para hacerlo más útil, sin dejar de ser familiar.

### La sección de marcado

En la sección de marcado puedes insertar todo el HTML que quieras y, adicionalmente, puedes insertar expresiones válidas de JavaScript dentro de llaves (`{}`). En este caso estamos incrustando el valor de la prop `name` justo después del texto `Hello`.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte además soporta etiquetas como `{#if}`, `{#each}`, y `{#await}`, que te permiten renderizar condicionalmente un fragmento del marcado, iterar sobre una lista de elementos y trabajar con valores asíncronos, respectivamente.

### La sección `<style>`

Si tienes experiencia trabajando con CSS, el siguiente código te debería ser familiar:

```html
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
```

Como puedes ver, estamos aplicando estilos a nuestro elemento [`<h1>`](/es/docs/Web/HTML/Element/Heading_Elements). Tomando en cuenta lo anterior ¿Qué piensas que le pasará a los demás `<h1>` que se encuentran dentro de otros componentes?

En Svelte, el CSS dentro del bloque `<style>` de un componente solo afecta al componente en cuestión. Para que esto funcione, se agrega una clase a los elementos seleccionados, la cual se basa en el _hash_ de los estilos del componente.

Para ver esto en acción, abre una nueva pestaña del navegador y dirígete a la dirección `localhost:8080`, haz click derecho sobre la etiqueta que dice _HELLO WORLD!_ y selecciona _Inspeccionar_:

![Aplicación inicial de Svelte con las herramientas de desarrollador abiertas, mostrando las clases para los estilos locales](02-svelte-component-scoped-styles.png)

Al compilar la aplicación, Svelte cambia la definición de nuestros estilos `h1` a `h1.svelte-1tky8bj`, modifica todos los elementos `<h1>` de nuestra aplicación y los transforma en elementos de la forma `<h1 class="svelte-1tky8bj">`, para que así coincida con los estilos aplicados.

> **Nota:** Puedes cambiar este comportamiento al aplicar los estilos globalmente a un selector utilizando el modificador `:global()` (visita la entrada de la [documentación de Svelte para `<style>`](https://svelte.dev/docs#style) para más información).

## Aplicando algunos cambios

Ahora que tenemos una idea general de cómo funcionan las cosas, podemos empezar a aplicar algunos cambios.
En este punto puedes intentar actualizar tu componente `App.svelte`, por ejemplo, cambiando el elemento `<h1>` en la línea 6 del archivo anterior para que ahora se muestre de la siguiente forma:

```html
<h1>Hello {name} from MDN!</h1>
```

Simplemente guarda los cambios y la aplicación ejecutándose en `localhost:8080` se actualizará automáticamente.

### Un primer vistazo a la reactividad de Svelte

Cuando hablamos dentro del contexto de un _framework_ de interfaz de usuario (IU), el término reactividad se refiere a la capacidad que tiene el _framework_ para actualizar el DOM cuando el estado de un componente cambia.

En Svelte, la reactividad se activa tras asignar un nuevo valor a cualquier variable en el nivel principal de un componente. Por ejemplo, podríamos incluir una función `toggleName()` en nuestro componente `App` y un botón para invocar a dicha función.

Intentar actualizar la sección de `<script>` y el marcado de la siguiente forma:

```html
<script>
  export let name;

  function toggleName() {
    if (name === "world") {
      name = "Svelte";
    } else {
      name = "world";
    }
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click="{toggleName}">Toggle name</button>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Cada vez que se hace click en el botón, Svelte ejecuta la función `toggleName()`, que a su vez actualiza el contenido de la variable `name`.

Como puedes observar, la etiqueta `<h1>` se actualiza automáticamente. Por detrás de cámaras, Svelte creó el código JavaScript para actualizar el DOM cada vez que el valor de la variable `name` cambia, sin la necesidad de utilizar un DOM virtual o algún otro mecanismo complejo de reconciliación.

Observa que se usa `:` en `on:click`. Esta es la sintaxis de Svelte para registrar manejadores de eventos del DOM.

## Inspeccionando main.js: el punto de entrada de nuestra aplicación

Vamos a abrir el archivo `src/main.js`, aquí es donde el componente `App`se importa y se usa. Este archivo es el punto de entrada de nuestra aplicación y contiene lo siguiente:

```js
import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
```

`main.js` empieza importando el componente Svelte que será utilizado. Acto siguiente, en la línea 3 lo instancia mientras le pasa un objeto de opciones con las siguientes propiedades:

- `target`: El elemento del DOM en el cual será renderizado el componente, este caso es el elemento `<body>`.
- `props`: los valores a asignar a cada prop del componente `App`.

## Un vistazo más a detalle

¿Cómo es que Svelte logra que todos estos archivos trabajen bien en conjunto?

El compilador de Svelte procesa la sección de `<style>` de cada componente y lo compila en el archivo `public/build/bundle.css`.

Además compila el marcado y la sección de `<script>` de cada componente y almacena el resultado en `public/build/bundle.js`. De forma adicional, Svelte agrega automáticamente el código en `src/main.js` para hacer referencia a las características de cada componente.

Por último, el archivo `public/index.html` incluye los archivos `bundle.css` y `bundle.js` que fueron generados:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Svelte app</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>
```

La versión minificada de `bundle.js` pesa un poco más de 3KB, lo cual ya incluye el "tiempo de ejecución de Svelte" (tan solo son 300 líneas de código JavaScript) y el componente `App.svelte` compilado. Como puedes ver, `bundle.js` es el único archivo de JavaScript al que se hace referencia desde `index.html`. No hay otras bibliotecas cargadas en la página web.

Esto tiene mucho menor impacto que los paquetes (_bundles_) generados por otros _frameworks_. Toma en cuenta que cuando hablamos de paquetes de código, no solo importa el tamaño del archivo que fue descargado. Este código ejecutable debe ser analizado, ejecutado y cargado en memoria. Esto hace una gran diferencia, en especial en dispositivos de gama baja y en aplicaciones que utilizan el CPU intensivamente.

## Siguiendo este tutorial

En esta serie de tutoriales, construirás una aplicación web completa. Aprenderemos todos los conceptos básicos de Svelte e incluso algunos temas más avanzados.

Puedes simplemente leer el contenido del tutorial para entender las características de Svelte, pero para sacarle todo el provecho a este tutorial te recomendamos ampliamente que además sigas los ejemplos y los programes a la par de nosotros. Para que te sea más sencillo seguir cada artículo, te proporcionamos un repositorio de GitHub con una carpeta que contiene todo el código fuente de la aplicación que representa su estado al inicio de cada tutorial.

Svelte además cuenta con una herramienta REPL en línea, se trata de un entorno de pruebas para programar aplicaciones Svelte sin la necesidad de instalar algo en tu máquina. Te proporcionamos un REPL por cada artículo para que puedas empezar a programar de inmediato.
A continuación exploraremos un poco más sobre cómo utilizar estas herramientas.

### Utilizando Git

El sistema de control de versiones más popular es Git, junto a GitHub, un sitio que provee de almacenamiento para tus repositorios y varias herramientas para trabajar con ellos.

Estaremos utilizando GitHub para que puedas descargar fácilmente el código fuente de cada artículo. Además tendrás la opción de descargar el código de la forma que debería quedar al finalizar el artículo, en caso de que te pierdas.

Después de [instalar git](https://git-scm.com/downloads), ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

De esta forma, al inicio de cada artículo, puedes usar `cd` para posicionarte dentro de la carpeta correspondiente e iniciar la aplicación en modo desarrollo para ver su estado actual, de la siguiente manera:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

Si quieres aprender más sobre git y GitHub, hemos compilado una lista de enlaces a guías que te podrían ser útiles. Visita [Git y GitHub](/es/docs/Learn/Tools_and_testing/GitHub).

> **Nota:** Si solo quieres descargar los archivos sin clonar el repositorio de git, puedes utilizar la herramienta degit de la siguiente manera: `npx degit opensas/mdn-svelte-tutorial`. También puedes descargar una carpeta específica con el comando `npx degit opensas/mdn-svelte-tutorial/01-getting-started`. Degit no creará un repositorio local de git, en su lugar, simplemente descarga los archivos de la carpeta especificada.

### Usando el REPL de Svelte

Un REPL ([ciclo de leer, evaluar, imprimir (REPL en inglés)](https://es.wikipedia.org/wiki/REPL)) es un entorno interactivo que te permite introducir comandos y ver los resultados de inmediato. Muchos lenguajes de programación proporcionan un REPL.

EL REPL de Svelte es mucho más que eso. Se trata de una herramienta en línea que te permite crear aplicaciones completas, guardarlas en línea y compartirlas con otras personas.

Es la forma más sencilla de empezar a experimentar con Svelte desde cualquier dispositivo, sin la necesidad de instalar algo. Esta herramienta es ampliamente utilizada por la comunidad de Svelte. Si quieres compartir una idea, pedir ayuda o reportar un problema, siempre lo más útil es crear una instancia del REPL para demostrar el problema.

Veamos brevemente el REPL de Svelte y la forma en que lo usarías. Tiene el siguiente aspecto:

![el repl de svelte en acción, mostrando código de un componente a la izquierda, y el resultado a la derecha](03-svelte-repl-in-action.png)

Para iniciar un REPL, abre tu navegador web y navega a <https://svelte.dev/repl>.

- En el lado izquierdo de la pantalla verás el código de tus componentes, mientras que en lado derecho podrás ver el resultado de tu aplicación.
- La barra que se encuentra arriba del código te permite crear archivos `.svelte` y `.js` y reordenarlos. Para crear un archivo dentro de una carpeta, simplemente especifica el nombre completo de su dirección, de la siguiente manera: `components/MiComponente.svelte`. La carpeta será creada automáticamente.
- Arriba de la barra se muestra el título del REPL. Haz click en él para editarlo.
- Del lado derecho tienes tres pestañas:

  - La pestaña _Result_ muestra la salida de tu aplicación, y proporciona una consola en la parte inferior.
  - La pestaña _JS output_ te permite inspeccionar el código JavaScript generado por Svelte, así como configurar el compilador.
  - La pestaña de _CSS output_ muestra el código CSS generado por Svelte.

- Arriba de las pestañas, encontrarás una barra de herramientas que te permite entrar a modo pantalla completa y descargar tu aplicación. Si inicias sesión con una cuenta de Github, además podrás de crear una bifurcación (_fork_) y guardar la aplicación. Para ver todos tus REPL guardados, puedes hacer click en tu nombre de perfil de Github y hacer click en _Your saved apps_.

Cada vez que cambias algo en cualquier archivo del REPL, Svelte recompila la aplicación y actualiza la pestaña de _Result_. Para compartir tu app, comparte el URL. Por ejemplo, en este enlace puedes encontrar un REPL ejecutando nuestra aplicación completa: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> **Nota:** Observa que puedes especificar la versión de Svelte en el URL. Esto es bastante útil para reportar problemas relacionados a una versión específica de Svelte.

Te proporcionaremos un REPL al inicio y al final de cada articulo para que puedas empezar a programar con nosotros en cualquier momento.

> **Nota:** Actualmente el REPL no es capaz de manejar correctamente el nombre de las carpetas. Si estás siguiendo el tutorial en un REPL, simplemente crea todos tus componentes en la carpeta raíz. De esta forma, cuando veas una dirección en el código, por ejemplo `import Todos from './components/Todos.svelte'`, remplazala con una URL plana, p. ej. `import Todos from './Todos.svelte'`

## El código hasta ahora

### Git

Clona el repo de Github (si aún no lo haz hecho) con:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Ahora para obtener el estado actual de la app, usa

```bash
cd mdn-svelte-tutorial/01-getting-started
```

O descarga directamente el contenido de la carpeta:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Recuerda ejecutar `npm install && npm run dev` para iniciar tu aplicación en modo de desarrollo.

### REPL

Para programar a nuestro lado usando el REPL, inicia en

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Resumen

Esto nos lleva al final de nuestro primer vistazo a Svelte, incluyendo cómo instalarlo de forma local, crear una aplicación inicial y los conceptos de su funcionamiento básico. En el siguiente artículo empezaremos a construir nuestra primer aplicación real, una lista de tareas. No obstante, antes de que hagamos eso, demos un breve repaso sobre las cosas que aprendimos.

En Svelte:

- Definimos el código JavaScript, estilo y marcado de cada componente en un solo archivo `.svelte`.
- Las props del componente se definine con la palabra clave `export`.
- Para utilizar un componente de Svelte, basta con importar el archivo `.svelte` correspondiente.
- Los estilos de los componentes son locales, lo cual evita colisiones.
- En la sección de marcado puedes incluir cualquier expresión de JavaScript entre llaves.
- Las variables del nivel principal de un componente conforman su estado.
- La reactividad se activa al asignar un nuevo valor a una variable del nivel principal.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
