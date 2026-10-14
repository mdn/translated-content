---
title: "JavaScript: Añadir interactividad"
short-title: Añadir interactividad
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript es un lenguaje de programación que añade interactividad a los sitios web. Puedes usarlo para controlar prácticamente cualquier cosa: la validación de datos de formularios, la funcionalidad de los botones, la lógica de los juegos, los estilos dinámicos, la actualización de animaciones y mucho más. Este artículo te inicia en JavaScript y te guía para añadir algunas funciones divertidas a tu primer sitio web.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, el software básico que usarás para construir un sitio web y los sistemas de archivos.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>El propósito y la función de JavaScript.</li>
          <li>Una comprensión básica de los fundamentos del lenguaje JavaScript, como las variables, los operadores, los condicionales, las funciones y los eventos.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es JavaScript?

{{Glossary("JavaScript")}} es un lenguaje de programación completo: tiene todas las características clásicas de programación que quizá hayas visto en otros lenguajes (o de las que al menos hayas oído hablar), como las **variables**, los **bucles** y las **funciones**.

JavaScript, cuando se usa en páginas web (aunque también se puede usar en otros lugares), suele funcionar así:

- Obtiene referencias a uno o más valores, como números, o a elementos de la página.
- Hace algo con esos valores, como sumar los números.
- Devuelve un resultado que se puede usar para hacer otra cosa más adelante. Por ejemplo, quizá quieras mostrar en la página la suma de esos números.

Veamos un ejemplo. Usaremos la misma lista básica que vimos en los últimos artículos:

```html live-sample___basic-js
<p>Instrucciones para la vida:</p>

<ul>
  <li>Comer</li>
  <li>Dormir</li>
  <li>Repetir</li>
</ul>
```

También definiremos una clase CSS llamada `.done` que dará estilo a cualquier elemento al que se aplique, para que parezca una tarea completada, con el texto en verde y tachado. En el siguiente paso la aplicaremos a nuestros elementos `<li>` con JavaScript.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Ahora pasemos al JavaScript. Aquí, primero guardamos las referencias a los elementos `<li>` en una variable llamada `listItems`. Después definimos una función llamada `toggleDone()` que añade la clase `done` a un elemento de la lista si todavía no la tiene, y la quita si ya la tiene. Por último, recorremos los elementos de la lista (con `forEach()`) y añadimos un detector de eventos (con `addEventListener()`) a cada uno, para que al hacer clic en él se alterne la clase `done` y se aplique el CSS que definimos antes.

```js live-sample___basic-js
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
```

No te preocupes si ahora no entiendes el JavaScript anterior. Familiarizarse con JavaScript es más difícil que familiarizarse con HTML y CSS, pero las cosas quedarán más claras más adelante en el curso.

Este ejemplo se verá así en un navegador web:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Prueba a hacer clic varias veces en los elementos de la lista y fíjate en cómo se activan y desactivan los estilos de «hecho». No está nada mal para 11 líneas de JavaScript.

## Un recorrido por «Hello world!»

Para empezar a escribir algo de JavaScript, te guiaremos para añadir un ejemplo _Hello world!_ a tu sitio web de ejemplo. ([_Hello world!_](https://es.wikipedia.org/wiki/Hola_mundo) es el ejemplo introductorio estándar en programación).

> [!WARNING]
> Si no has seguido el resto de nuestro curso, [descarga este código de ejemplo](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/main) y úsalo como punto de partida.

1. Dentro de tu carpeta `first-website` o de la carpeta de ejemplo que acabas de descargar, crea una carpeta nueva llamada `scripts`.
2. Dentro de la carpeta `scripts`, crea un documento de texto nuevo llamado `main.js` y guárdalo.
3. Ve a tu archivo `index.html` y escribe este código en una línea nueva, justo antes de la etiqueta de cierre `</head>`:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Hace lo mismo que el elemento {{htmlelement("link")}} para el CSS: aplica el JavaScript a la página para que pueda afectar al HTML (junto con el CSS y cualquier otra cosa de la página).

4. Añade este código a tu archivo `scripts/main.js`:

   ```js
   // Guarda una referencia al <h1> en una variable
   const myHeading = document.querySelector("h1");
   // Actualiza el contenido de texto del <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Asegúrate de que los archivos HTML y JavaScript estén guardados y carga `index.html` en tu navegador. Deberías ver algo así:

![Encabezado «hello world» sobre un logotipo de Firefox](hello-world.png)

Veamos cómo funciona este ejemplo.

Usamos JavaScript para cambiar el texto del encabezado a `Hello world!`. Obtuvimos una referencia al encabezado y la guardamos en una variable llamada `myHeading` (un contenedor que guarda un valor). Es parecido a cómo se aplica CSS a los elementos: primero seleccionas los elementos que quieres modificar con un selector CSS y después defines los estilos que quieres para ellos. En ambos casos, cuando quieres hacer algo con un elemento, primero tienes que seleccionarlo.

Después, establecimos el valor de la propiedad `textContent` de la variable `myHeading` (que representa el contenido de texto del elemento `<h1>`) en _Hello world!_.

Las líneas que empiezan por `//` son comentarios de JavaScript. Al igual que los comentarios de HTML y CSS, el navegador los ignora, y te permiten añadir notas sobre tu código para explicar cómo funciona.

Sigamos y añadamos algunas funciones nuevas a nuestro sitio de ejemplo.

> [!WARNING]
> Antes de seguir, borra el código de «Hello world!» de tu archivo `main.js`. Si no lo haces, el código existente chocará con el código nuevo que vas a añadir.

## Añadir un cambiador de imágenes

En esta sección, usarás JavaScript y funciones de la [API del DOM](/es/docs/Web/API/HTML_DOM_API) para alternar entre dos imágenes. El cambio ocurrirá cuando un usuario haga clic en la imagen que se muestra.

1. Elige otra imagen para mostrar en tu sitio de ejemplo. Lo ideal es que tenga el mismo tamaño que la que añadiste antes, o lo más parecido posible.
2. Guarda esta imagen en tu carpeta `images`.
3. Añade el siguiente código JavaScript a tu archivo `main.js`, asegurándote de reemplazar `firefox2.png` y las dos apariciones de `firefox-icon.png` por los nombres de tu segunda y tu primera imagen, respectivamente.

   ```js
   const myImage = document.querySelector("img");

   myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. Guarda todos los archivos y carga `index.html` en el navegador. Ahora, al hacer clic en la imagen, debería cambiar a la otra.

En este código, guardaste una referencia a tu elemento {{htmlelement("img")}} en la variable `myImage`. Después le asignaste una función manejadora del evento `click`. Cada vez que se hace clic en el `<img>`, la función hace lo siguiente:

- Obtiene el valor del atributo `src` de la imagen.
- Usa un condicional (la estructura `if...else`) para comprobar si el valor de `src` es igual a la ruta de la imagen original:
  - Si lo es, el código cambia el valor de `src` a la ruta de la segunda imagen, lo que obliga a cargar la otra imagen dentro del elemento `<img>`.
  - Si no lo es (es decir, la imagen ya se ha cambiado), el valor de `src` vuelve a la ruta de la imagen original.

> [!NOTE]
> Esta sección presenta varios términos importantes. Entre los conceptos clave están:
>
> - [API](/es/docs/Glossary/API): un conjunto de funciones que permite a un desarrollador interactuar con un entorno de programación. Las API web (como las funciones de la API del DOM que usamos antes) se construyen sobre el lenguaje JavaScript y te permiten manipular distintas partes del navegador y de las páginas web que muestra.
> - [Eventos](/es/docs/Learn_web_development/Core/Scripting/Events): cosas que ocurren en el navegador. Son clave para que los sitios web sean interactivos. Puedes ejecutar código en respuesta a los eventos con **funciones manejadoras de eventos**, que son bloques de código que se ejecutan cuando ocurre un evento. El ejemplo más común es el [evento click](/es/docs/Web/API/Element/click_event), que el navegador dispara cuando un usuario hace clic en algo.
> - [Funciones](/es/docs/Learn_web_development/Core/Scripting/Functions): una forma de empaquetar código que quieres reutilizar. Puedes definir tu código dentro de una función una vez y después ejecutarlo tantas veces como quieras, lo que te ayuda a no escribir el mismo código una y otra vez. En nuestro ejemplo, definimos una función manejadora del evento `click`, que se ejecuta cada vez que un usuario hace clic en la imagen.
> - [Condicionales](/es/docs/Learn_web_development/Core/Scripting/Conditionals): estructuras de código que se usan para comprobar si una expresión devuelve `true` o `false` y ejecutar código distinto según cada resultado. Una forma muy común de condicional es la sentencia `if...else`.

## Añadir un mensaje de bienvenida personalizado

A continuación, vamos a cambiar el encabezado de la página para que muestre un mensaje de bienvenida personalizado cuando el usuario visite el sitio por primera vez. Este mensaje de bienvenida se guardará en el navegador con la [API de Web Storage](/es/docs/Web/API/Web_Storage_API), así que, si el usuario sale del sitio y vuelve más tarde, sus datos personalizados seguirán ahí. También incluiremos una forma de que el usuario cambie el mensaje.

1. En `index.html`, añade la siguiente línea justo antes de la etiqueta de cierre `</body>`:

   ```html
   <button>Change user</button>
   ```

2. En `main.js`, pon el siguiente código al final del archivo, exactamente como está escrito. Crea referencias al nuevo botón y al encabezado, y guarda cada una en una variable:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Añade la siguiente función para establecer el saludo personalizado. Todavía no hará nada; llamaremos a la función más adelante.

   ```js
   function setUserName() {
     const myName = prompt("Por favor, introduce tu nombre.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   La función `setUserName()` contiene una función [`prompt()`](/es/docs/Web/API/Window/prompt), que pide al usuario que introduzca datos y los guarda en una variable después de que haga clic en _Aceptar_. En este ejemplo, pedimos al usuario que introduzca un nombre y lo guardamos en `myName`.<br /><br />

   Después, el código usa la [API de Web Storage](/es/docs/Web/API/Web_Storage_API), que nos permite guardar datos en el navegador y recuperarlos más tarde. Usamos la función {{domxref("Storage.setItem", "localStorage.setItem()")}} para crear y guardar un elemento de datos llamado `"name"`, y le damos como valor la variable `myName`, que contiene lo que escribió el usuario.<br /><br />

   Por último, establecemos el `textContent` del encabezado en una cadena que incluye el nombre guardado del usuario.

4. Añade el siguiente bloque condicional después de la declaración de la función. Es nuestro _código de inicialización_: se ejecuta cuando la página se carga por primera vez para poner en marcha el programa:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   La primera línea de este bloque usa el operador de negación (NOT lógico, representado por el carácter `!`) para comprobar si el elemento de datos `name` _no_ está ya guardado en `localStorage`. Si no lo está, se ejecuta la función `setUserName()` para crearlo. Si existe (es decir, el usuario estableció un nombre de usuario en una visita anterior), obtenemos el nombre guardado con {{domxref("Storage.getItem", "localStorage.getItem()")}} y establecemos el `textContent` del encabezado en una cadena más el nombre del usuario, igual que hicimos dentro de `setUserName()`.

5. Añade al botón una función manejadora del evento `click`. Al hacer clic, se ejecuta `setUserName()`. Esto permite al usuario guardar otro nombre si quiere.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Guarda todos los archivos y carga `index.html` en el navegador. Debería pedirte de inmediato que introduzcas tu nombre. Cuando lo hagas, aparecerá dentro del `<h1>` como parte del saludo personalizado. Fíjate en que la personalización se mantiene incluso después de recargar la página. Puedes hacer clic en el botón «Change user» para introducir un nombre nuevo.

> [!NOTE]
> El término [operador](/es/docs/Learn_web_development/Core/Scripting/Math) se refiere a un carácter del lenguaje JavaScript que realiza una operación sobre uno o más valores. Por ejemplo, `+` (suma valores), `-` (resta un valor de otro) y `!` (niega un valor, como viste antes).

## ¿Un nombre de usuario null?

Cuando ejecutes el ejemplo y aparezca el cuadro de diálogo que te pide tu nombre, prueba a pulsar el botón _Cancelar_. Deberías acabar con un título que dice _Mozilla is cool, null_. Esto ocurre porque, al cancelar el cuadro de diálogo, el valor se establece en [`null`](/es/docs/Web/JavaScript/Reference/Operators/null). En JavaScript, _null_ es un valor especial que representa la ausencia de valor.

Prueba también a hacer clic en _Aceptar_ sin escribir ningún nombre. Deberías acabar con un título que dice _Mozilla is cool,_, porque has establecido `myName` en una cadena vacía.

Para evitar estos problemas, puedes añadir otro condicional que compruebe que el usuario no ha introducido un nombre en blanco. Actualiza tu función `setUserName()` así:

```js
function setUserName() {
  const myName = prompt("Por favor, introduce tu nombre.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
```

En lenguaje humano, esto significa: si `myName` no tiene valor, vuelve a ejecutar `setUserName()` desde el principio. Si tiene un valor (si la afirmación anterior no es cierta), guarda el valor en `localStorage` y establécelo como texto del encabezado.

## Conclusión

Si has seguido todas las instrucciones de este artículo, deberías acabar con una página parecida a la de la imagen de abajo. También puedes [ver nuestra versión](https://mdn.github.io/beginner-html-site-scripted/).

![Aspecto final de la página HTML después de crear los elementos: un encabezado, un logotipo grande centrado, contenido y un botón](website-screen-scripted.png)

Si te quedas atascado, puedes comparar tu trabajo con nuestro [código de ejemplo terminado en GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js).

En este artículo apenas hemos arañado la superficie de JavaScript. Aprenderás mucho más en nuestro módulo principal [Scripting dinámico con JavaScript](/es/docs/Learn_web_development/Core/Scripting), más adelante en el curso.

## Véase también

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup>
  - : El curso _Learn JavaScript_ de [Scrimba](https://scrimba.com?via=mdn) te enseña JavaScript resolviendo más de 140 desafíos de programación interactivos y construyendo proyectos que incluyen un juego, una extensión de navegador e incluso una aplicación móvil. Scrimba ofrece lecciones interactivas divertidas impartidas por profesores expertos.
- [Learn JavaScript](https://learnjavascript.online/)
  - : ¡Es un recurso excelente para quienes quieren dedicarse al desarrollo web! Aprende JavaScript en un entorno interactivo, con lecciones cortas y pruebas interactivas, guiado por una evaluación automática. Las primeras 40 lecciones son gratuitas. El curso completo está disponible por un pequeño pago único.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
