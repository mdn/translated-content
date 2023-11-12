---
title: Primeros pasos en React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

En este artículo conoceremos React. Descubriremos algunos detalles sobre su trasfondo y casos de uso, configuraremos una cadena básica de herramientas para React en nuestra computadora local, crearemos y jugaremos con una aplicación inicial sencilla, mientras aprendemos —durante el proceso— un poco acerca de cómo funciona React.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        <p>
          Familiaridad con los lenguajes
          <a href="/es/docs/Learn/HTML">HTML</a>,
          <a href="/es/docs/Learn/CSS">CSS</a>, y
          <a href="/es/docs/Learn/JavaScript">JavaScript</a>, conocimiento
          del
          <a
            href="/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/línea de comandos</a
          >.
        </p>
        <p>
          React usa una sintaxis HTML-en-JavaScript llamada JSX (JavaScript y
          XML). Estar familiarizado con HTML y JavaScript te ayudará a aprender
          JSX, y a identificar —en una mejor manera— si los errores en tu
          aplicación están relacionados con JavaScript o con el más específico
          dominio de React.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Configurar un entorno de desarrollo local para React, crear una
        aplicación inicial, y entender los aspectos básicos de su
        funcionamiento.
      </td>
    </tr>
  </tbody>
</table>

## Hola, React

Como su eslogan oficial señala, [React](https://es.reactjs.org/) es una biblioteca para construir interfaces de usuario. React no es un _framework_ — ni siquiera se limita a la web. React es utilizado con otras bibliotecas para renderizar en ciertos entornos. Por ejemplo, [React Native](https://reactnative.dev/) puede usarse para desarrollar aplicaciones móviles; [React 360](https://facebook.github.io/react-360/) permite crear aplicaciones de realidad virtual; además de otras posibilidades.

Al desarrollar para la web, los desarrolladores usan React en conjunto con [ReactDOM](https://reactjs.org/docs/react-dom.html). React y ReactDOM son, a menudo, considerados al igual que —y utilizados para resolver los mismo problemas que— otros verdaderos frameworks de desarrollo web. Cuando nos referimos a React como un "framework", estamos trabajando con este significado coloquial.

El objetivo principal de React es minimizar los errores que ocurren cuando los desarrolladores construyen interfaces de usuario. Esto lo hace mediante el uso de componentes — piezas de código lógicas y auto-contenidas que describen una parte de la interfaz del usuario. Estos componentes se pueden juntar para crear una interfaz de usuario completa, y React abstrae la mayor parte del trabajo de renderizado, permitiéndote enfocarte en el diseño de la interfaz.

## Casos de uso

A diferencia de los otros frameworks vistos en este módulo, React no impone reglas estrictas sobre convenciones de código u organización de archivos. Esto le permite a los equipos establecer las convenciones que funcionen mejor para ellos y adoptar React de la manera en que deseen. React puede manejar un solo botón, algunas piezas de una interfaz o la interfaz de usuario completa de una aplicación.

Si bien React _puede_ usarse para [pequeñas piezas de una interfaz](https://es.reactjs.org/docs/add-react-to-a-website.html), no resulta tan sencillo "introducirlo" en una aplicación como sería el caso de una biblioteca como jQuery —o incluso de un framework, como Vue—, por lo que viene a ser más abordable cuando construimos una aplicación completamente con React.

Además, muchos de los beneficios de la experiencia del desarrollador de una aplicación React, como codificar interfaces con JSX, requieren un proceso de compilación. Agregar un compilador como Babel a un sitio web hace que el código se ejecute de manera lenta, por lo que los desarrolladores a menudo configuran dichas herramientas con un paso de compilación. Podrá decirse que React tiene un gran requisito de herramientas, pero se puede aprender.

Este artículo se enfocará en el caso de uso de usar React para renderizar la interfaz de usuario completa de una aplicación, usando herramientas proporcionadas por la propia herramienta de Facebook [create-react-app](https://create-react-app.dev/).

## ¿Cómo React usa JavaScript?

React utiliza características modernas de JavaScript para muchos de sus patrones. El punto donde más se aleja de JavaScript se refleja en el uso de la sintaxis [JSX](https://es.reactjs.org/docs/introducing-jsx.html), la que, a su vez, amplía la sintaxis de JavaScript para que código similar a HTML pueda formar parte del mismo. Por ejemplo:

```jsx
const heading = <h1>Mozilla Developer Network</h1>;
```

Esta constante "heading" se conoce como una **expresión JSX**. React puede usarla para representar la etiqueta [`<h1>`](/es/docs/Web/HTML/Element/Heading_Elements) en nuestra aplicación.

Supongamos que, por razones semánticas, queremos envolver nuestro encabezado en una etiqueta [`<header>`](/es/docs/Web/HTML/Element/header). El enfoque JSX nos permite anidar nuestros elementos entre sí, tal como lo hacemos con HTML:

```jsx
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **Nota:** Los paréntesis en el fragmento anterior no son exclusivos de JSX y no tienen ningún efecto en la aplicación. Son una señal para ti (y tu computadora) de que las múltiples líneas de código que contiene forman parte de una misma expresión. También podríamos escribir la expresión del encabezado de esta manera:
>
> ```jsx
> const header = (
>   <header>
>     <h1>Mozilla Developer Network</h1>
>   </header>
> );
> ```
>
> Sin embargo, esto luce un poco raro, ya que la etiqueta [`<header>`](/es/docs/Web/HTML/Element/header) que inicia la expresión no tiene sangría en la misma posición que su correspondiente etiqueta de cierre.

Por supuesto, tu navegador no puede leer JSX sin ayuda. Al compilarla (usando una herramienta como [Babel](https://babeljs.io/) o [Parcel](https://parceljs.org/)), nuestra expresión de encabezado se vería así:

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

Es _posible_ omitir el paso de la compilación y usar [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) para codificar la interfaz de usuario tú mismo. Sin embargo, al hacer esto, perderías el beneficio declarativo de JSX y tu código resultaría más difícil de leer. La compilación es un paso adicional en el proceso de desarrollo, pero muchos desarrolladores de la comunidad React piensan que la legibilidad de JSX vale la pena. Además, las herramientas populares hacen que la compilación de JSX a JavaScript sea parte de su proceso de configuración. No tendrás que configurar la compilación tú mismo, a menos que así lo quieras.

Dado que JSX es una combinación de HTML y JavaScript, algunos desarrolladores lo encuentran intuitivo. Otros dicen que su naturaleza combinada lo hace confuso. Sin embargo, una vez que te sientas cómodo con JSX, te permitirá crear interfaces de usuario de forma más rápida e intuitiva, y permitirá que otros comprendan mejor tu base de código de un vistazo.

Para leer más sobre JSX, consulta el artículo [JSX en profundidad](https://es.reactjs.org/docs/jsx-in-depth.html) del equipo de React.

## Configurando tu primera aplicación React

Hay muchas maneras de usar React, pero usaremos la herramienta create-react-app de la interfaz de línea de comandos (CLI, por sus siglas en inglés), como se mencionó anteriormente, la cual acelera el proceso de desarrollo de una aplicación React al instalar algunos paquetes y crear algunos archivos por ti, manejando las herramientas descritas anteriormente.

Es posible [agregar React a un sitio website sin usar create-react-app](https://es.reactjs.org/docs/add-react-to-a-website.html) copiando algunos elementos [`<script>`](/es/docs/Web/HTML/Element/script) en un archivo HTML, pero la CLI de create-react-app es un punto de partida común para las aplicaciones React. Su uso te permitirá dedicar más tiempo a crear tu aplicación y menos a preocuparte por la configuración.

### Requerimientos

Para usar create-react-app, necesitas tener instalado [Node.js](https://nodejs.org/en/). Se recomienda utilizar la versión de soporte a largo plazo (LTS, por sus siglas en inglés). Node incluye npm (el administrador de paquetes de Node), y npx (el ejecutor de paquetes de Node).

También puedes usar el administrador de paquetes Yarn como alternativa, pero asumiremos que estarás usando npm en estos tutoriales. Consulta [Conceptos básicos de administración de paquetes](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) para obtener más información sobre npm y yarn.

Si estás usando Windows, necesitarás instalar algún software para darle paridad con el terminal Unix/macOS, y así poder usar los comandos del terminal mencionados en este tutorial. **Gitbash** (el cual viene como parte del [conjunto de herramientas git para Windows](https://gitforwindows.org/)) o el **[Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/about)** (**WSL**, por sus siglas en inglés) son ambos adecuados. Consulte el [Curso intensivo de línea de comandos](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) para obtener más información sobre estos y sobre los comandos de terminal en general.

También ten en cuenta que React y ReactDOM producen aplicaciones que solo funcionan en un conjunto bastante moderno de navegadores (IE9+ a través de algunos polyfills). Se recomienda el uso de un navegador moderno como Firefox, Safari o Chrome cuando trabajes con estos tutoriales.

Además, consulta lo siguiente para obtener más información:

- ["¿Qué es npm?" en nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introducing npx" en el blog de npm](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [La documentación de create-react-app](https://create-react-app.dev/)

### Inicializando tu aplicación

create-react-app recibe un argumento: el nombre que te gustaría darle a tu aplicación. create-react-app usa este nombre para crear una nueva carpeta, luego crea los archivos necesarios dentro de la misma. Asegúrate de `cd` al lugar donde te gustaría que se guarde tu aplicación en tu disco duro, luego ejecuta lo siguiente en tu terminal:

```bash
npx create-react-app moz-todo-react
```

Esto crea una carpeta `moz-todo-react`, y hace varias cosas dentro de la misma:

- Instala algunos paquetes npm esenciales para la funcionalidad de la aplicación.
- Escribe scripts para iniciar y servir la aplicación.
- Crea una estructura de archivos y carpetas que definen la arquitectura básica de la aplicación.
- Inicializa la carpeta como un repositorio de git, si tienes git instalado en tu computadora.

> **Nota:** si tienes instalado el administrador de paquetes yarn, create-react-app lo usará por defecto en lugar de npm. Si tienes ambos administradores de paquetes instalados y quieres, explícitamente, usar npm, puedes agregar el indicador `--use-npm` cuando ejecutes create-react-app:
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

create-react-app mostrará una serie de mensajes en tu terminal mientras opera, ¡lo cual es normal! Esto puede tardar unos minutos, por lo que ahora podría ser un buen momento para preparar una taza de té.

Una vez completado el proceso, `cd` a la carpeta `moz-todo-react` y ejecuta el comando `npm start`. Los scripts instalados por create-react-app comenzarán a servirse en un servidor local en `localhost:3000` y abrirán la aplicación en una nueva pestaña del navegador. Tu navegador mostrará algo como esto:

![Screenshot of Firefox MacOS, open to localhost:3000, showing the default create-react-app application](default-create-react-app.png)

### Estructura de la aplicación

create-react-app nos provee todo lo que necesitamos para desarrollar una aplicación React. Su estructura inicial de archivos luce así:

```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

La carpeta **`src`** es donde pasaremos la mayor parte de nuestro tiempo, ya que es donde reside el código fuente de nuestra aplicación.

La carpeta **`public`** contiene archivos que serán leidos por tu navegador mientras desarrollas la aplicación; el más importante de ellos es `index.html`. React introduce tu código en este archivo de manera que tu navegador pueda ejecutarlo. Hay alguno que otro marcado que ayuda a create-react-app a funcionar, así que ten cuidado de no editarlo a menos que sepas lo que estás haciendo. Deberías cambiar el texto dentro del elemento [`<title>`](/es/docs/Web/HTML/Element/title) en este archivo para reflejar el título de tu aplicación. ¡Los títulos de página precisos son importantes para la accesibilidad!

La carpeta `public` también será publicada cuando crees y despliegues una versión para producción de tu aplicación. No cubriremos el despliegue en este tutorial, pero deberías poder usar una solución similar a la descrita en nuestro tutorial [Despliegue de nuestra aplicación](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment).

El archivo `package.json` contiene información sobre nuestro proyecto que Node.js/npm usa para mantenerlo organizado. Este archivo no es exclusivo de las aplicaciones React; create-react-app simplemente lo completa. No es necesario que entiendas este archivo en lo absoluto para completar este tutorial, sin embargo, si deseas obtener más información al respecto, puedes leer [What is the file `package.json`? en NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/); también hablamos de ello en nuestro tutorial [Conceptos básicos de administración de paquetes](/es/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

## Explorando nuestro primer componente React — `<App/>`

En React, un **componente** es un módulo reutilizable que representa una parte de nuestra aplicación. Estas partes pueden ser grandes o pequeñas, pero, generalmente, están bien definidas: tienen un propósito único y obvio.

Abramos `src/App.js`, ya que nuestro navegador nos pide que lo editemos. Este archivo contiene nuestro primer componente —`App`—, y algunas otras líneas de código:

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

El archivo `App.js` se compone de tres partes principales: algunas declaraciones [`import`](/es/docs/Web/JavaScript/Reference/Statements/import) en la parte superior, el componente `App` en el medio, y una declaración [`export`](/es/docs/Web/JavaScript/Reference/Statements/export) en la parte inferior. La mayoría de los componentes de React siguen este patrón.

### Declaraciones `import`

Las declaraciones `import` en la parte superior del archivo le permiten a `App.js` utilizar código que ha sido definido en otra parte. Revisemos estas declaraciones más detalladamente.

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

La primera declaración importa la biblioteca React como tal. Dado que React convierte el JSX que escribimos en `React.createElement()`, todos los componentes de React deben importar el módulo `React`. Si omites este paso, tu aplicación producirá un error.

La segunda declaración importa un logotipo de `'./logo.svg'`. Observa el uso de `./` al principio de la ruta y la extensión `.svg` al final — estos nos indican que el archivo es local y que no es un archivo JavaScript. De hecho, el archivo `logo.svg` reside en nuestra carpeta raíz.

No hace falta proveer una ruta o extensión al importar el módulo `React`, ya que este no es un archivo local. En cambio, aparece como una dependencia en nuestro archivo `package.json`. ¡Ten cuidado con esta distinción mientras trabajas en esta lección!

La tercera declaración importa el CSS relacionado con nuestro componente `App`. Observa que no hay nombre de variable ni de directiva `from`. Esta sintaxis de importación en particular no es propia de la sintaxis de módulos de JavaScript. Esta proviene de Webpack, la herramienta que create-react-app usa para agrupar todos nuestros archivos JavaScript y enviarlos al navegador.

### El componente `App`

Después de las importaciones, tenemos una función llamada `App`. Mientras que una mayor parte de la comunidad JavaScript prefiere nombres tipo _camel-case_ como `helloWorld`, los componentes de React usan nombres de variables tipo _pascal-case_, como `HelloWorld`, para dejar en claro que un determinado elemento JSX es un componente de React y no una etiqueta HTML normal. Si llegaras a cambiar el nombre de la función `App` por `app`, tu navegador te mostraría un error.

Vamos a darle un vistazo más detallado a `App`.

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
```

La función `App` devuelve una expresión JSX. Esta expresión define lo que tu navegador presenta en última instancia al DOM.

Algunos elementos de la expresión tienen atributos, los cuales se escriben igual que en HTML, siguiendo un patrón de `atributo="valor"`. En la línea 3, la etiqueta de apertura [`<div>`](/es/docs/Web/HTML/Element/div) tiene un atributo `className`. Este es equivalente al atributo [`class`](/es/docs/Web/HTML/Global_attributes/class) de HTML, pues dado que JSX es JavaScript, no podemos usar la palabra `class` —la cual está reservada—, lo que significa que JavaScript ya la usa para un propósito específico y causaría problemas en nuestro código. Algunos otros atributos HTML también se escriben de manera diferente en JSX (de como se escriben en HTML), por el mismo tipo de razón. Los revisaremos a medida que nos crucemos con estos.

Tómate un momento para cambiar la etiqueta [`<p>`](/es/docs/Web/HTML/Element/p) en la línea 6 para que diga "¡Hola, mundo!", luego guarda los cambios. Notarás que este cambio se procesa inmediatamente en el servidor de desarrollo que se ejecuta en `http://localhost:3000` en tu navegador. Ahora elimina la etiqueta [`<a>`](/es/docs/Web/HTML/Element/a) y guarda los cambios; el enlace "Learn React" habrá desaparecido.

Ahora, tu componente `App` debería lucir así:

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Hola, mundo!</p>
      </header>
    </div>
  );
}
```

### Declaraciones `export`

En la parte inferior del archivo `App.js`, la declaración `export default App` hace que nuestro componente `App` esté disponible para otros módulos.

## Explorando el index

Vamos a abrir el archivo `src/index.js`, ya que es en este donde el componente `App` está siendo utilizado. Este archivo es el punto de entrada para nuestra aplicación, e inicialmente luce así:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Al gual que `App.js`, el archivo comienza importando todos los módulos JS y otros activos que necesita para ejecutarse. `src/index.css` contiene estilos globales que se aplican a toda nuestra aplicación. Podemos ver que nuestro componente `App` también es importado acá; su importación es posible gracias a la declaración `export` en la parte inferior de `App.js`.

En la línea 7, se invoca la función `ReactDOM.render()` de React con dos argumentos:

- El componente que queremos renderizar, `<App />` en este caso.
- El elemento DOM dentro del cual queremos que se renderice el componente, en este caso, el elemento con un ID de `root`. Si miras dentro de `public/index.html`, verás que este es un elemento `<div>` justo dentro de `<body>`.

Todo esto le indica a React que queremos renderizar nuestra aplicación React con el componente `App` como raíz, o primer componente.

> **Nota:** En JSX, los componentes de React y los elementos HTML deben tener, obligatoriamente, barras diagonales de cierre. Escribir solo `<App>` o solo `<img>` provocará un error.

Los [Service workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers) son interesantes piezas de código que ayudan al rendimiento de las aplicaciones y permiten que las funciones de tus aplicaciones web funcionen sin conexión, pero estas no están dentro del alcance de este artículo. Puedes eliminar la línea 5, así como las líneas 9 a 12.

Finalmente, tu archivo `index.js` debería verse así:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Variables y props

A continuación, usaremos algunas de nuestras habilidades de JavaScript para lograr sentirnos un poco más cómodos editando componentes y trabajando con datos en React. Hablaremos sobre cómo se usan las variables dentro de JSX, e introduciremos props, que son una forma de pasar datos a un componente (al que luego se puede acceder usando variables).

### Variables en JSX

De vuelta en `App.js`, enfoquémonos en la línea 9:

```jsx
<img src={logo} className="App-logo" alt="logo" />
```

Aquí, el valor del atributo `src` de la etiqueta `<img />` está entre llaves. Así es como JSX reconoce las variables. Al encontrarse con `{logo}`, React sabrá que nos referimos a la importación del logotipo en la línea 2 de nuestra aplicación, y luego recuperará el archivo del logo y lo renderizará.

Vamos a intentar crear una variable propia. Antes de la declaración return de `App`, agrega `const subject = "React";`. Tu componente `App` ahora debería verse así:

```jsx
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Hola, mundo!</p>
      </header>
    </div>
  );
}
```

Cambia la línea 8, de manera que se use la variable `subject` en vez de la palabra "mundo", así:

```jsx
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Hola, {subject}!</p>
      </header>
    </div>
  );
}
```

Al guardar, tu navegador debería mostrar "¡Hola, React!" en vez de "¡Hola, mundo!"

Las variables son convenientes, pero la que acabamos de configurar no hace gran uso de las funciones de React. Es allí donde entran los props.

### Props de componentes

Un **prop** es cualquier dato que se pasa a un componente de React. Los props se escriben dentro de las llamadas a los componentes y utilizan la misma sintaxis que los atributos HTML: `prop="value"`. Abramos `index.js` y démosle a la llamada de nuestro `<App/>` su primer prop.

Agrega un prop de `subject` a la llamada del componente `<App />`, con un valor de `Clarice`. Al terminar, tu código debería verse similar a este:

```jsx
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

Volviendo a `App.js`, vamos a revisar nuevamente la función `App` como tal, la cual se lee así (acortando la declaración `return` por razones de brevedad):

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

Cambia la declaración de la función `App` de manera que tome `props` como un parámetro, y elimina la constante `subject`. Al igual que cualquier otro parámetro de una función, puedes pasar `props` a `console.log()` para imprimirlos en la consola de tu navegador. Continúa, haciendo esto antes de la declaración `return`, así:

```js
function App(props) {
  console.log(props);
  return (
    // return statement
  );
}
```

Guarda tu archivo y revisa la consola JavaScript de tu navegador. Deberías ver registrado algo como esto:

```js
Object { subject: "Clarice" }
```

La propiedad `subject` del objeto corresponde al prop `subject` que agregamos a la llamada de nuestro componente `<App />`, y la cadena `Clarice` corresponde a su valor. Los props de componentes en React siempre se recopilan en objetos de esta manera.

Ahora que `subject` es uno de nuestros props, usémoslo en `App.js`. Cambia la constante `subject` de manera que, en vez de definirla como la cadena `React`, estés leyendo el valor de `props.subject`. También puedes eliminar `console.log()`, si así lo quieres.

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

Una vez guardes, la aplicación debería darte la bienvenida con un "¡Hola, Clarice!". Si regresas a `index.js`, editas el valor de `subject`, y guardas, el texto cambiará.

## Resumen

Esto nos lleva al final de nuestra introducción a React, la cual incluye cómo instalarlo de manera local, cómo crear una aplicación inicial, y cómo funcionan los conceptos básicos. En el próximo artículo comenzaremos a construir nuestra primera aplicación como tal: una lista de tareas pendientes. Sin embargo, antes de ello, recapitulemos algunas de las cosas que hemos aprendido.

En React:

- Los componentes pueden importar los módulos que necesitan y deben exportarse a sí mismos al final de sus archivos.
- Las funciones de componentes se nombran con `PascalCase`.
- Puedes leer las variables JSX poniéndolas entre llaves, `{así}`.
- Algunos atributos JSX son diferentes a los atributos HTML, para evitar conflictos con las palabras reservadas de JavaScript. Por ejemplo, el atributo `class` de HTML se convierte en `className` en JSX. Ten en cuenta que los atributos de varias palabras se nombran con `camelCase`.
- Los props se escriben como atributos dentro de las llamadas de componentes y se pasan a los componentes.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
