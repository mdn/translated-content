---
title: Introducción a Svelte
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started

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
          <a href="/en-US/docs/Learn/HTML">HTML</a>,
          <a href="/en-US/docs/Learn/CSS">CSS</a> y
          <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>, además tener conocimiento de la 
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
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

Sus mayores incovenientes vienen dados por su corta edad, pues su ecosistema se encuentra limitado en términos de herramientos, soporte, _plugins_, patrones específicos de uso, etc. en comparación con otros _frameworks_. A pesar de ello, sus beneficios deberían ser suficientes para despertar tu curiosidad en explorarlo.

> **Note:** Recientemente Svelte agregó [soporte oficial de Typescript](https://svelte.dev/blog/svelte-and-typescript), una de sus características más esperadas. Más adelante en esta serie de tutoriales exploraremos esa integración.  

Te recomendamos que sigas el [Tutorial de Svelte](https://svelte.dev/tutorial/basics) para una introducción rápida a los conceptos básicos, para después regresar a este tutorial y aprender a construir algo más complicado.

## Casos de uso

Svelte puede ser utilizado para desarrollar porciones de una interfaz o una aplicación completa. Puedes construir tu aplicación desde cero y dejar que Svelte maneje tu IU o incluso puedes integrar Svelte de forma incremental en una aplicación existente.

Tomando en cuenta lo anterior, Svelte es una excelente solución para los siguientes casos:

- Aplicaciones web enfocadas a dispositivos de bajo rendimiento: Las aplicaciones con Svelte son más ligeras, lo cual las vuelve ideal para dispositivos con redes lentas y poder de procesamiento limitado. 
- Páginas altamente interactivas o visualizaciones complejas: Si te encuentras construyendo una aplicación para visualización de datos que necesite mostrar una gran cantidad de elementos en el DOM, la ganancia de rendimiento que viene de la mano de un _framework_ sin sobrecarga en tiempo de ejecución, ayudará a que las interacciones del usuario se mantengan ágiles y responsivas.
- Gente que se encuentre iniciando en el mundo del desarrollo web: La curva de aprendizaje de Svelte es muy accesible. Desarrolladores web con conocimientos básicos de HTML, CSS y Javascript, fácilmente pueden familiarizarse con los conceptos de Svelte y empezar a construir aplicaciones web.

De forma adicional, con la ayuda de [Sapper](https://sapper.svelte.dev/) (un _framework_ que se basa en Svelte), puedes desarrollar aplicaciones con características avanzadas como renderizado del lado del servidor (_SSR_), _code splitting_, enrutamiento basado en archivos y soporte de modo fuera de línea. Incluso existe [Svelte Native](https://svelte-native.technology/), que te permite crear aplicaciones nativas para móviles.

## ¿Cómo funciona Svelte?

Al tratarse de un compilador, Svelte puede extender HTML, CSS, y JavaScript, generando código Javascript optimizado sin agregar sobrecarga en tiempo de ejecución. Para lograr esto, Svelte añade características sobre tecnologías web nativas de la siguiente forma:

- Extiende a HTML al permitir expresiones de JavaScript dentro del marcado HTML, proporcionando directivas para utilizar condiciones y ciclos.
- Extiende a CSS al agregar mecanismos de contención, permitiendo a cada componente definir sus propios estilos sin el riesgo de que colisionen con estilos de otros componentes.
- Extiende a JavaScript al reinterpretar directivas específicas del lenguaje para lograr verdadera reactividad y facilitar el manejo del estado de los componentes.

El compiliador solo interfiere bajo situaciones muy específicas y únicamente en el contexto de componentes Svelte. Las pocas extensiones que se aplican sobre el lenguaje de JavaScript fueron elegidas cuidadosamente para no violar la sintaxis de JavaScript o confundir a los desarrolladores. Es decir, principalmente estarás trabajando con Javascript puro.

## Primeros pasos con Svelte

Debido a que Svelte es un compilador, no es posible simplemente agregar una etiqueta `<script src="svelte.js">` en tu página para y luego importarla en tu aplicación. Deberás configurar tu entorno de desarrollo para que el compilador pueda hacer su trabajo.

### Requisitos

Para poder trabajar con Svelte, debes tener [Node.js](https://nodejs.org/en/) instalado. Es recomendable que uses una versión con soporte a largo plazo (LTS). Node incluye `npm` (el administrador de paquetes de Node), y `npx` (El lanzador de paquetes de Node). Toma en cuenta que también puedes utilizar el administrador de paquetes Yarn en lugar de npm, no obstante, para este tutorial asumiremos que estás trabajando con npm. Visita [Conceptos básicos de administradores de paquetes](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) para más información de npm y yarn.

Si estás utilizando Windows, deberás instalar algunos programas que te proporcionen características de la terminal de sistemas Unix/macOS para poder ejecutar comandos de este tutorial. Dos herramientas que te pueden servir son Gitbash (que forma parte de las [herramientas de git para Windows](https://gitforwindows.org/)) o el [Subsistema de Linux para Windows (WSL)](https://docs.microsoft.com/windows/wsl/about). Visita el [Curso introductorio a la línea de comandos](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) para más información sobre estas herramientas y la línea de comandos en general.

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

- `package.json` y `package-lock.json`: Contienen información sobre el proyecto, son utilizados por Node.js/npm para manterlo organizado. No necesitas entender estos archivos para completar el tutorial, sin embargo, si quieres saber más sobre este tema puedes leer el artículo [¿Qué es el archivo `package.json`? (en-US)](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) en NodeJS.org; también lo analizamos en nuestro [Tutorial básico de administradores de paquetes](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).
- `node_modules`: Aquí Node guarda las dependencias del proyecto. Estas dependencias no estarán presentes en producción, son usadas únicamente en el entorno de desarrollo.
- `.gitignore`: Le indica a Git cuales son los archivos y carpetas que debe ignorar del proyecto. Esto será de gran ayuda si decides incluir tu aplicación en un repositorio de git.
- `rollup.config.js`: Svelte usa [rollup.js](https://rollupjs.org/) como un 
_module bundler_. Este archivo de configuración le dice a _rollup_ cómo compilar y construir tu aplicación. Si prefieres utilizar [webpack](https://webpack.js.org/), en su lugar puedes crear tu proyecto con `npx degit sveltejs/template-webpack svelte-app`.
- `scripts`: Contiene los _scripts_ de configuración requeridos. Actualmente debería contener únicamente `setupTypeScript.js`.

  - `setupTypeScript.js`: Este script configura el soporte de Typescript dentro de Svelte. Hablaremos más a detalle de este tema en el último artículo.

- `src`: En este directorio se encuentra el código fuente de tu aplicación. Es decir, donde crearás la mayor parte de código.

  - `App.svelte`: Este es el componente principal de tu aplicación. De momento solo renderiza el mensaje 'Hello world'.
  - `main.js`: El punto de entrada a nuestra aplicación. Se encarga de instanciar el componente `App` y lo enlaza con el _body_ de tu página HTML.

- `public`: Este directorio contiene todos los archivos que serán publicados en producción.

  - `favicon.png`: Este es el _favicon_ para tu aplicación. Actualmente es el logo de Svelte.
  - `index.html`: Esta es la página principal de tu aplicación. 
  Inicialmente es simplemente una página HTML vacía que carga los paquetes de archivos CSS y js generados por Svelte.
  - `global.css`: Este archivo contiene los estilos globales. Es un archivo regular de CSS que será aplicado a toda tu aplicación.
  - `build`: Este directorio contiene el código fuente de JavaScript y CSS que fue generado.

    - `bundle.css`: El archivo CSS generado por Svelte a partir de los estilos definidos por cada componente.
    - `bundle.js`: El archivo de código Javascript compilado a partir de todo el código fuente de tu aplicación.

## Having a look at our first Svelte component

Components are the building blocks of Svelte applications. They are written into `.svelte` files using a superset of HTML.

All three sections — `<script>`, `<style>`, and markup — are optional, and can appear in any order you like.

```html
<script>
  // logic goes here
</script>

<style>
  /* styles go here */
</style>

<!-- markup (zero or more HTML elements) goes here -->
```

> **Note:** For more information on the component format, have a look at the [Svelte documentation](https://svelte.dev/docs#Component_format).

With this in mind, let's have a look at the `src/App.svelte` file that came with the starter template. You should see something like the following:

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

### The `<script>` section

The `<script>` block contains JavaScript that runs when a component instance is created. Variables declared (or imported) at the top level are 'visible' from the component's markup. Top-level variables are the way Svelte handles the component state, and they are reactive by default. We will explain in detail what this means later on.

```html
<script>
  export let name;
</script>
```

Svelte uses the [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) keyword to mark a variable declaration as a property (or prop), which means it becomes accessible to consumers of the component (e.g. other components). This is one example of Svelte extending JavaScript syntax to make it more useful, while keeping it familiar.

### The markup section

In the markup section you can insert any HTML you like, and in addition you can insert valid JavaScript expressions inside single curly brackets (`{}`). In this case we are embedding the value of the `name` prop right after the `Hello` text.

```html
<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>
```

Svelte also supports tags like `{#if}`, `{#each}`, and `{#await}` — these examples allow you to conditionally render a portion of the markup, iterate through a list of elements, and work with async values, respectively.

### The `<style>` section

If you have experience working with CSS, the following snippet should make sense:

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

We are applying a style to our [`<h1>`](/en-US/docs/Web/HTML/Element/Heading_Elements) element. What will happen to other components with `<h1>` elements in them?

In Svelte, CSS inside a component's `<style>` block will be scoped only to that component. This works by adding a class to selected elements, which is based on a hash of the component styles.

You can see this in action by opening `localhost:8080` in a new browser tab, right/<kbd>Ctrl</kbd>-clicking on the _HELLO WORLD!_ label, and choosing _Inspect_:

![Svelte starter app with devtools open, showing classes for scoped styles](02-svelte-component-scoped-styles.png)

When compiling the app, Svelte changes our `h1` styles definition to `h1.svelte-1tky8bj`, and then modifies every `<h1>` element in our component to `<h1 class="svelte-1tky8bj">`, so that it picks up the styles as required.

> **Note:** You can override this behavior and apply styles to a selector globally using the `:global()` modifier (see the [Svelte `<style>` docs](https://svelte.dev/docs#style) for more information).

## Making a couple of changes

Now that we have a general idea of how it all fits together, we can start making a few changes.
At this point you can try updating your `App.svelte` component — for example change the `<h1>` element on line 6 of `App.svelte` so that it reads like this:

```html
<h1>Hello {name} from MDN!</h1>
```

Just save your changes and the app running at `localhost:8080` will be automatically updated.

### A first look at Svelte reactivity

In the context of a UI framework, reactivity means that the framework can automatically update the DOM when the state of any component is changed.

In Svelte, reactivity is triggered by assigning a new value to any top-level variable in a component. For example, we could include a `toggleName()` function in our `App` component, and a button to run it.

Try updating your `<script>` and markup sections like so:

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

Whenever the button is clicked, Svelte executes the `toggleName()` function, which in turn updates the value of the `name` variable.

As you can see, the `<h1>` label is automatically updated. Behind the scenes, Svelte created the JavaScript code to update the DOM whenever the value of the name variable changes, without using any virtual DOM or other complex reconciliation mechanism.

Note the use of `:` in `on:click`. That's Svelte's syntax for listening to DOM events.

## Inspecting main.js: the entry point of our app

Let's open `src/main.js`, which is where the `App` component is being imported and used. This file is the entry point for our app, and it initially looks like this:

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

`main.js` starts by importing the Svelte component that we are going to use. Then in line 3 it instantiates it, passing an option object with the following properties:

- `target`: The DOM element inside which we want the component to be rendered, in this case the `<body>` element.
- `props`: the values to assign to each prop of the `App` component.

## A look under the hood

How does Svelte manage to make all these files work together nicely?

The Svelte compiler processes the `<style>` section of every component and compiles them into the `public/build/bundle.css` file.

It also compiles the markup and `<script>` section of every component and stores the result in `public/build/bundle.js`. It also adds the code in `src/main.js` to reference the features of each component.

Finally the file `public/index.html` includes the generated `bundle.css` and `bundle.js` files:

```html
<!DOCTYPE html>
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

The minified version of `bundle.js` weighs a little more than 3KB, which includes the "Svelte runtime" (just 300 lines of JavaScript code) and the `App.svelte` compiled component. As you can see, `bundle.js` is the only JavaScript file referenced by `index.html`. There are no other libraries loaded into the web page.

This is a much smaller footprint than compiled bundles from other frameworks. Take into account that, in the case of code bundles, it's not just the size of the files you have to download that matter. This is executable code that needs to be parsed, executed, and kept in memory. So this really makes a difference, especially in low-powered devices or CPU-intensive applications.

## Following this tutorial

In this tutorial series you will be building a complete web application. We'll learn all the basics about Svelte and also quite a few advanced topics.

You can just read the content to get a good understanding of Svelte features, but you'll get the most out of this tutorial if you follow along coding the app with us as you go. To make it easier for you to follow each article, we provide a GitHub repository with a folder containing the source for the app as it is at the start of each tutorial.

Svelte also provides an online REPL, which is a playground for live-coding Svelte apps on the web without having to install anything on your machine. We provide a REPL for each article so you can start coding along right away. Let's talk a bit more about how to use these tools.

### Using Git

The most popular version control system is Git, along with GitHub, a site that provides hosting for your repositories and several tools for working with them.

We'll be using GitHub so that you can easily download the source code for each article. You will also be able to get the code as it should be after completing the article, just in case you get lost.

After [installing git](https://git-scm.com/downloads), to clone the repository you should execute:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Then at the beginning of each article, you can just `cd` into the corresponding folder and start the app in dev mode to see what its current state should be, like this:

```bash
cd 02-starting-our-todo-app
npm install
npm run dev
```

If you want lo learn more about git and GitHub, we've compiled a list of links to useful guides — see [Git and GitHub](/en-US/docs/Learn/Tools_and_testing/GitHub).

> **Note:** If you just want to download the files without cloning the git repo, you can use the degit tool like this — `npx degit opensas/mdn-svelte-tutorial`. You can also download a specific folder with `npx degit opensas/mdn-svelte-tutorial/01-getting-started`. Degit won't create a local git repo, it will just download the files of the specified folder.

### Using the Svelte REPL

A REPL ([read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) is an interactive environment that allows you to enter commands and immediately see the results — many programming languages provide a REPL.

Svelte's REPL is much more than that. It's an online tool that allows you to create complete apps, save them online, and share with others.

It's the easiest way to start playing with Svelte from any machine, without having to install anything. It is also widely used by Svelte community. If you want to share an idea, ask for help, or report an issue, it's always extremely useful to create a REPL instance demonstrating the issue.

Let's have a quick look at the Svelte REPL and how you'd use it. It looks like so:

![the svelte REPL in action, showing component code on the left, and output on the right](03-svelte-repl-in-action.png)

To start a REPL, open your browser and navigate to <https://svelte.dev/repl>.

- On the left side of the screen you'll see the code of your components, and on the right you'll see the running output of your app.
- The bar above the code lets you create `.svelte` and `.js` files and rearrange them. To create a file inside a folder, just specify the complete pathname, like this: `components/MyComponent.svelte`. The folder will be automatically created.
- Above that bar you have the title of the REPL. Click on it to edit it.
- On the right side you have three tabs:

  - The _Result_ tab shows your app output, and provides a console at the bottom.
  - The _JS output_ tab lets you inspect the JavaScript code generated by Svelte and set compiler options.
  - The _CSS output_ tab shows the CSS generated by Svelte.

- Above the tabs, you'll find a toolbar that lets you enter fullscreen mode and download your app. If you log in with a GitHub account, you'll also be able to fork and save the app. You'll also be able to see all your saved REPLs by clicking on your GitHub username profile and selecting _Your saved apps_.

Whenever you change any file on the REPL, Svelte will recompile the app and update the Result tab. To share your app, share the URL. For example, here's the link for a REPL running our complete app: <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

> **Note:** Notice how you can specify Svelte's version in the URL. This is useful when reporting issues related to a specific version of Svelte.

We will provide a REPL at the beginning and end of each article so that you can start coding with us right away.

> **Note:** At the moment the REPL can't handle folder names properly. If you are following the tutorial on the REPL, just create all your components inside the root folder. Then when you see a path in the code, for example `import Todos from './components/Todos.svelte'`, just replace it with a flat URL, e.g. `import Todos from './Todos.svelte'`.

## The code so far

### Git

Clone the GitHub repo (if you haven't already done it) with:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Then to get to the current app state, run

```bash
cd mdn-svelte-tutorial/01-getting-started
```

Or directly download the folder's content:

```bash
npx degit opensas/mdn-svelte-tutorial/01-getting-started
```

Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at

<https://svelte.dev/repl/fc68b4f059d34b9c84fa042d1cce586c?version=3.23.2>

## Summary

This brings us to the end of our initial look at Svelte, including how to install it locally, create a starter app, and how the basics work. In the next article we'll start building our first proper application, a todo list. Before we do that, however, let's recap some of the things we've learned.

In Svelte:

- We define the script, style, and markup of each component in a single `.svelte` file.
- Component props are declared with the `export` keyword.
- Svelte components can be used just by importing the corresponding `.svelte` file.
- Components styles are scoped, keeping them from clashing with each other.
- In the markup section you can include any JavaScript expression by putting it between curly braces.
- The top-level variables of a component constitute its state.
- Reactivity is fired just by assigning a new value to a top-level variable.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Getting started with Angular](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
