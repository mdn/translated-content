---
title: ¿Qué es JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

¡Bienvenido al curso de JavaScript para principiantes de MDN! En este artículo veremos JavaScript desde un alto nivel, respondiendo preguntas como "¿Qué es?" y "¿Qué puedes hacer con él?", y asegúrate de estar cómodo con el propósito de JavaScript.

| Prerrequisitos: | Conocimientos básicos de informática, conocimientos básicos de HTML y CSS.                 |
| --------------- | ------------------------------------------------------------------------------------------ |
| Objetivo:       | Familiarizarte con lo que es JavaScript, lo que puede hacer y cómo encaja en un sitio web. |

## Una definición de alto nivel

JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales ([HTML](/es/docs/Learn/HTML) y [CSS](/es/docs/Learn/CSS)) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.

![](cake.png)

- {{Glossary("HTML")}} es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
- {{Glossary("CSS")}} es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
- {{Glossary("JavaScript")}} es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

Las tres capas se superponen muy bien. Tomemos una etiqueta de texto simple como ejemplo. Podemos marcarla usando HTML para darle estructura y propósito:

```html
<p>Player 1: Chris</p>
```

![](just-html.png)

Luego, podemos agregar algo de CSS a la mezcla para que se vea bien:

```css
p {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0, 0, 200, 0.6);
  background: rgba(0, 0, 200, 0.3);
  color: rgba(0, 0, 200, 0.6);
  box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}
```

![](html-and-css.png)

Y finalmente, podemos agregar algo de JavaScript para implementar un comportamiento dinámico:

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80, "", "", "hide-codepen-jsfiddle") }}

Intenta hacer clic en esta última versión de la etiqueta de texto para ver qué sucede (ten en cuenta también que puedes encontrar esta demostración en GitHub — ¡consulta el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html) o [ejecútalo en vivo](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html))!

JavaScript puede hacer mucho más que eso — exploremos qué con más detalle.

## Entonces, ¿qué puede hacer realmente?

El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como:

- Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que ingreses un nuevo nombre y luego almacenamos ese nombre en una variable llamada `name`.
- Operaciones sobre fragmentos de texto (conocidas como "cadenas" (`strings`) en programación). En el ejemplo anterior, tomamos la cadena "`Player1`:" y la unimos a la variable `name` para crear la etiqueta de texto completa, p. ej. ''`Player1: Chris`".
- Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento [`click`](/es/docs/Web/Reference/Events/click) en nuestro ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto.
- ¡Y mucho más!

Sin embargo, lo que aún es más emocionante es la funcionalidad construida sobre el lenguaje JavaScript de lado del cliente. Las denominadas **interfaces de programación de aplicaciones** (**API**) te proporcionan superpoderes adicionales para utilizar en tu código JavaScript.

Las API son conjuntos de bloques de construcción de código listos para usar que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles prefabricados para la construcción de viviendas — es mucho más fácil tomar paneles precortados y atornillarlos para hacer una estantería que elaborar el diseño tú mismo, que ir y encontrar la madera correcta, cortar todos los paneles del tamaño y la forma correctos, buscar los tornillos del tamaño correcto y _luego_ júntalos para hacer una estantería.

Generalmente se dividen en dos categorías.

![](browser.png)

Las **APIs del navegador** están integradas en tu navegador web y pueden exponer datos del entorno informático circundante o realizar tareas complejas y útiles. Por ejemplo:

- La {{domxref("Document_Object_Model", " API del DOM (<code>Document Object Model</code>)")}} te permite manipular HTML y CSS, crear, eliminar y cambiar el HTML, aplicar dinámicamente nuevos estilos a tu página, etc. Cada vez que ves aparecer una ventana emergente en una página, o se muestra algún nuevo contenido (como vimos anteriormente en nuestra sencilla demostración), por ejemplo, ese es el DOM en acción.
- La {{domxref("Geolocation", "API de Geolocalización")}} recupera información geográfica. Así es como [Google Maps](https://www.google.com/maps) puede encontrar tu ubicación y trazarla en un mapa.
- Las APIs {{domxref("Canvas_API", "Canvas")}} y {{domxref("WebGL_API", "WebGL")}} te permiten crear gráficos animados en 2D y 3D. Las personas están haciendo cosas increíbles con estas tecnologías web — consulta [Experimentos de Chrome](https://www.chromeexperiments.com) y [webglsamples](https://webglsamples.org/).
- [APIs de audio y video](/es/Apps/Fundamentals/Audio_and_video_delivery) como {{domxref("HTMLMediaElement")}} y {{domxref("WebRTC API", "WebRTC")}} te permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de tu cámara web y mostrarlo en la computadora de otra persona (prueba nuestra sencilla [demostración instantánea](https://chrisdavidmills.github.io/snapshot/) para hacerte una idea).

> **Nota:** Muchas de las demostraciones anteriores no funcionarán en un navegador antiguo — al experimentar, es una buena idea utilizar un navegador moderno como Firefox, Chrome, Edge u Opera para ejecutar tu código. Deberás considerar las [pruebas en varios navegadores](/es/docs/Learn/Tools_and_testing/Cross_browser_testing) con más detalle cuando estés más cerca de entregar el código de producción (es decir, código real que usarán los clientes reales).

Las **APIs de terceros** no están integradas en el navegador de forma predeterminada y, por lo general, debes obtener su código e información de algún lugar de la Web. Por ejemplo:

- La [API de Twitter](https://dev.twitter.com/overview/documentation) te permite hacer cosas como mostrar tus últimos tweets en tu sitio web.
- La [API de Google Maps](https://developers.google.com/maps/) y la [API de OpenStreetMap](https://wiki.openstreetmap.org/wiki/API) te permiten insertar mapas personalizados en tu sitio web y otras funciones similares.

> **Nota:** estas APIs son avanzadas y no cubriremos ninguna de ellas en este módulo. Puedes obtener más información sobre estas en nuestro [módulo de APIs web de lado del cliente](/es/docs/Learn/JavaScript/Client-side_web_APIs).

¡También hay mucho más disponible! Sin embargo, no te emociones demasiado todavía. No podrás crear el próximo Facebook, Google Maps o Instagram después de estudiar JavaScript durante 24 horas — hay muchos conceptos básicos que cubrir primero. Y es por eso que estás aquí — ¡sigamos adelante!

## ¿Qué está haciendo JavaScript en tu página?

Aquí, de hecho, comenzaremos a ver algo de código y, mientras lo hacemos, exploraremos lo que realmente sucede cuando ejecutas JavaScript en tu página.

Recapitulemos brevemente sobre la historia de lo que sucede cuando cargas una página web en un navegador (de lo que hablamos por primera vez en nuestro artículo [Cómo funciona CSS](/es/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_does_CSS_actually_work)). Cuando cargas una página web en tu navegador, estás ejecutando tu código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y genera un producto (la página web).

![](execution.png)

Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API del modelo de objetos del documento (como se mencionó anteriormente). Ten en cuenta que el código de tus documentos web generalmente se cargan y ejecutan en el orden en que aparece en la página. Si JavaScript se carga e intenta ejecutarse antes de que se hayan cargado el HTML y el CSS al que afecta, pueden producirse errores. Aprenderás formas de evitar esto más adelante en el artículo, en la sección [Estrategias de carga de scripts](/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Script_loading_strategies).

### Seguridad del navegador

Cada pestaña del navegador tiene su propio depósito separado para ejecutar código (estos depósitos se denominan "entornos de ejecución" en términos técnicos) — esto significa que, en la mayoría de los casos, el código de cada pestaña se ejecuta de forma completamente independiente y el código de una pestaña no puede afectar el código en otra pestaña, o en otro sitio web. Esta es una buena medida de seguridad — si este no fuera el caso, los piratas podrían comenzar a escribir código para robar información de otros sitios web y otras cosas muy malas.

> **Nota:** Existen formas de enviar código y datos entre diferentes sitios web/pestañas de manera segura, pero estas son técnicas avanzadas que no cubriremos en este curso.

### Orden de ejecución de JavaScript

Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. Esto significa que debes tener cuidado con el orden en el que colocas las cosas. Por ejemplo, volvamos al bloque de JavaScript que vimos en nuestro primer ejemplo:

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}
```

Aquí seleccionamos un párrafo de texto (línea 1), luego adjuntamos un detector de eventos (línea 3) de modo que cuando se hace clic en el párrafo, el bloque de código `updateName()` (líneas 5-8) se ejecuta. El bloque de código `updateName()` (estos tipos de bloques de código reutilizables se denominan "funciones") pide al usuario un nuevo nombre y luego inserta ese nombre en el párrafo para actualizar la pantalla.

Si cambiaras el orden de las dos primeras líneas de código, ya no funcionaría — en su lugar, obtendrías un error en la [consola del desarrollador del navegador](/es/docs/Learn/Common_questions/What_are_browser_developer_tools) — `TypeError: para is undefined`. Esto significa que el objeto `para` aún no existe, por lo que no podemos agregarle un detector de eventos.

> **Nota:** Este es un error muy común; debes tener cuidado de que los objetos a los que se hace referencia en tu código existan antes de intentar hacer algo con ellos.

### Código interpretado versus compilado

Es posible que escuches los términos **interpretados** y **compilados** en el contexto de la programación. En los lenguajes interpretados, el código se ejecuta de arriba a abajo y el resultado de ejecutar el código se devuelve inmediatamente. No tienes que transformar el código en una forma diferente antes de que el navegador lo ejecute. El código se recibe en su forma de texto amigable para el programador y se procesa directamente desde allí.

Los lenguajes compilados, por otro lado, se transforman (compilan) a código máquina antes de que sean ejecutados por la computadora. Por ejemplo, C/C++ se compila a código máquina que luego ejecuta la computadora. El programa se ejecuta desde un formato binario, que se generó a partir del código fuente del programa original.

JavaScript es un lenguaje de programación interpretado ligero. El navegador web recibe el código JavaScript en su forma de texto original y ejecuta el script a partir de ahí. Desde un punto de vista técnico, la mayoría de los intérpretes de JavaScript modernos utilizan una técnica llamada **compilación en tiempo real** para mejorar el rendimiento; el código fuente de JavaScript se compila en un formato binario más rápido mientras se usa el script, de modo que se pueda ejecutar lo más rápido posible. Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se maneja en el entorno de ejecución, en lugar de antes.

Ambos tipos de lenguaje tienen ventajas, pero no las abordaremos ahora.

### Código de lado del servidor versus de lado del cliente

También puedes escuchar los términos código **de lado del servidor** y **de lado del cliente**, especialmente en el contexto del desarrollo web. El código de lado del cliente es un código que se ejecuta en la computadora del usuario — cuando se ve una página web, el código de lado del cliente de la página se descarga, luego se ejecuta y se muestra en el navegador. En este módulo estamos hablando explícitamente de **JavaScript de lado del cliente**.

El código de lado del servidor, por otro lado, se ejecuta en el servidor, luego sus resultados se descargan y se muestran en el navegador. Ejemplos de lenguajes web populares de lado del servidor incluyen a ¡PHP, Python, Ruby, ASP.NET y... JavaScript! JavaScript también se puede utilizar como lenguaje de lado del servidor, por ejemplo, en el popular entorno Node.js — puedes obtener más información sobre JavaScript de lado del servidor en nuestro tema [Sitios web dinámicos — Programación de lado del servidor](/es/docs/Learn/Server-side).

### Código dinámico versus estático

La palabra **dinámico** se usa para describir tanto a JavaScript de lado del cliente como a los lenguajes de lado del servidor — se refiere a la capacidad de actualizar la visualización de una página web/aplicación para mostrar diferentes cosas en diferentes circunstancias, generando contenido nuevo según sea necesario. El código de lado del servidor genera dinámicamente nuevo contenido en el servidor, p. ej. extraer datos de una base de datos, mientras que JavaScript de lado del cliente genera dinámicamente nuevo contenido dentro del navegador del cliente, p. ej. creando una nueva tabla HTML, llenándola con los datos solicitados al servidor y luego mostrando la tabla en una página web que se muestra al usuario. El significado es ligeramente diferente en los dos contextos, pero relacionado, y ambos enfoques (de lado del servidor y de lado del cliente) generalmente funcionan juntos.

Una página web sin contenido que se actualiza dinámicamente se denomina **estática** — simplemente muestra el mismo contenido todo el tiempo.

## ¿Cómo agregas JavaScript a tu página?

JavaScript se aplica a tu página HTML de manera similar a CSS. Mientras que CSS usa elementos {{htmlelement("link")}} para aplicar hojas de estilo externas y elementos {{htmlelement("style")}} para aplicar hojas de estilo internas a HTML, JavaScript solo necesita un amigo en el mundo de HTML: el elemento {{htmlelement("script")}}. Aprendamos cómo funciona esto.

### JavaScript interno

1. En primer lugar, haz una copia local de nuestro archivo de ejemplo [apply-javascript.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Guárdalo en un directorio en algún lugar accesible.
2. Abre el archivo en tu navegador web y en tu editor de texto. Verás que el HTML crea una página web simple que contiene un botón en el que se puede hacer clic.
3. A continuación, ve a tu editor de texto y agrega lo siguiente en tu `head`, justo antes de tu etiqueta de cierre `</head>`:

   ```html
   <script>
     // JavaScript va aquí
   </script>
   ```

4. Ahora agregaremos algo de JavaScript dentro de nuestro elemento {{htmlelement("script")}} para que la página haga algo más interesante — agrega el siguiente código justo debajo de la línea "// El código JavaScript va aquí":

   ```js
   document.addEventListener("DOMContentLoaded", function () {
     function createParagraph() {
       let para = document.createElement("p");
       para.textContent = "You clicked the button!";
       document.body.appendChild(para);
     }

     const buttons = document.querySelectorAll("button");

     for (let i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener("click", createParagraph);
     }
   });
   ```

5. Guarda tu archivo y actualiza el navegador — ahora deberías ver que cuando haces clic en el botón, se genera un nuevo párrafo y se coloca debajo.

> **Nota:** Si tu ejemplo no parece funcionar, sigue los pasos nuevamente y verifica que hiciste todo bien. ¿Guardaste tu copia local del código de inicio como un archivo `.html`? ¿Agregaste tu elemento {{htmlelement("script")}} justo antes de la etiqueta `</head>`? ¿Ingresaste el JavaScript exactamente como se muestra? **JavaScript distingue entre mayúsculas y minúsculas y es muy exigente, por lo que debes ingresar la sintaxis exactamente como se muestra; de lo contrario, es posible que no funcione.**

> **Nota:** Puedes ver esta versión en GitHub como [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) o ([verla en vivo también](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### JavaScript externo

Esto funciona muy bien, pero ¿y si quisiéramos poner nuestro JavaScript en un archivo externo? Exploremos esto ahora.

1. Primero, crea un nuevo archivo en el mismo directorio que tu archivo HTML del ejemplo. Como nombre ponle `script.js`; asegúrate de que el nombre tenga la extensión `.js`, ya que así es como se reconoce como JavaScript.
2. Reemplaza tu elemento {{htmlelement("script")}} actual con lo siguiente:

   ```html
   <script src="script.js" defer></script>
   ```

3. Dentro de `script.js`, agrega el siguiente script:

   ```js
   function createParagraph() {
     let para = document.createElement("p");
     para.textContent = "You clicked the button!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", createParagraph);
   }
   ```

4. Guarda y actualiza tu navegador, ¡y deberías ver lo mismo! Funciona igual, pero ahora tenemos nuestro JavaScript en un archivo externo. Por lo general, esto es bueno en términos de organización de tu código y para hacerlo reutilizable en varios archivos HTML. Además, el HTML es más fácil de leer sin grandes trozos de script en él.

> **Nota:** Puedes ver esta versión en GitHub como [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) y [script.js](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js) ([verla en vivo también](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Controladores de JavaScript en línea

Ten en cuenta que a veces te encontrarás con fragmentos de código JavaScript real dentro de HTML. Podría verse algo similar a esto:

```js example-bad
function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

Puedes probar esta versión de nuestra demostración a continuación.

{{ EmbedLiveSample('inline_js_example', '100%', 150, "", "", "hide-codepen-jsfiddle") }}

Esta demostración tiene exactamente la misma funcionalidad que en las dos secciones anteriores, excepto que el elemento {{htmlelement("button")}} incluye un controlador `onclick` en línea para que la función se ejecute cuando se presiona el botón .

**Sin embargo, no hagas esto**. Es una mala práctica contaminar tu HTML con JavaScript, y es ineficiente; tendrías que incluir el atributo `onclick="createParagraph()"` en cada botón al que desees que se aplique JavaScript.

El uso de una construcción de JavaScript pura te permite seleccionar todos los botones usando una instrucción. El código que usamos anteriormente para cumplir este propósito se ve así:

#### Ejemplo

```js
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
```

Esto puede ser un poco más largo que el atributo `onclick`, pero funcionará para todos los botones, sin importar cuántos haya en la página, ni cuántos se agreguen o eliminen. No es necesario cambiar el JavaScript.

> **Nota:** Intenta editar tu versión de `apply-javascript.html` y agrega algunos botones más en el archivo. Cuando la vuelvas a cargar, deberías encontrar que todos los botones al hacer clic crearán un párrafo. Limpio, ¿eh?

### Estrategias para la carga de scripts

Hay una serie de problemas relacionados con la carga de los scripts en el momento adecuado. ¡Nada es tan simple como parece! Un problema común es que todo el HTML de una página se carga en el orden en que aparece. Si estás utilizando JavaScript para manipular elementos en la página (o exactamente, el [Modelo de objetos del documento](/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)), tu código no funcionará si el JavaScript se carga y procesa antes que el HTML que estás intentando haga algo.

En los ejemplos de código anteriores, en los ejemplos internos y externos, JavaScript se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML. Esto podría causar un error, por lo que hemos utilizado algunas construcciones para solucionarlo.

En el ejemplo interno, puedes ver esta estructura alrededor del código:

```js
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```

Este es un detector de eventos, que escucha el evento "DOMContentLoaded" del navegador, lo cual significa que el cuerpo HTML está completamente cargado y analizado. El JavaScript dentro de este bloque no se ejecutará hasta que se active ese evento, por lo que se evita el error ([aprenderás sobre los eventos](/es/docs/Learn/JavaScript/Building_blocks/Events) más adelante en el curso).

En el ejemplo externo, usamos una función de JavaScript más moderno para resolver el problema, el atributo `defer`, que le dice al navegador que continúe descargando el contenido HTML una vez que se ha alcanzado la etiqueta del elemento `<script>`.

```js
<script src="script.js" defer></script>
```

En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.

> **Nota:** En el caso externo, no necesitamos usar el evento `DOMContentLoaded` porque el atributo `defer` nos resolvió el problema. No usamos la solución `defer` para el ejemplo interno de JavaScript porque `defer` solo funciona para scripts externos.

Una solución pasada de moda a este problema solía ser colocar tu elemento `script` justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta `</body>`), para que se cargara después de haber procesado todo el HTML. El problema con esta solución es que la carga/procesamiento del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios muy grandes con mucho JavaScript, esto puede causar un importante problema de rendimiento y ralentizar tu sitio.

#### `async` y `defer`

En realidad, hay dos modernas características que podemos usar para evitar el problema del bloqueo de `script`: `async` y `defer` (que vimos anteriormente). Veamos la diferencia entre estas dos.

Los scripts cargados con el atributo `async` (ve más abajo) descargarán el `script` sin bloquear el renderizado de la página y lo ejecutará tan pronto como el `script` se termine de descargar. No tienes garantía de que los `script`s se ejecuten en un orden específico, solo que no detendrán la visualización del resto de la página. Es mejor usar `async` cuando los `script`s de la página se ejecutan de forma independiente y no dependen de ningún otro `script` de la página.

Por ejemplo, si tienes los siguientes elementos `script`:

```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

No puedes confiar en el orden en que se cargarán los `script`s. `jquery.js` se puede cargar antes o después de `script2.js` y `script3.js` y si este es el caso, cualquier función en esos `script`s dependiendo de `jquery` producirá un error porque `jquery` no se definirá en el momento en que se ejecute el `script`.

`async` se debe usar cuando tienes un montón de `script`s en segundo plano para cargar, y solo deseas ponerlos en su lugar lo antes posible. Por ejemplo, tal vez tengas algunos archivos de datos del juego para cargar, que serán necesarios cuando el juego realmente comience, pero por ahora solo deseas continuar mostrando la introducción del juego, los títulos y el lobby, sin que se bloqueen al cargar el `script`.

Los `script`s cargados con el atributo `defer` (ve a continuación) se ejecutarán en el orden en que aparecen en la página y los ejecutará tan pronto como se descarguen el `script` y el contenido:

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

Todos los `script`s con el atributo `defer` se cargarán en el orden en que aparecen en la página. Entonces, en el segundo ejemplo, podemos estar seguros de que `jquery.js` se cargará antes que `script2.js` y `script3.js` y que `script2.js` se cargará antes de `script3.js`. No se ejecutarán hasta que se haya cargado todo el contenido de la página, lo cual es útil si tus `script`s dependen de que el DOM esté en su lugar (por ejemplo, modifican uno o más elementos de la página).

Para resumir:

- `async` y `defer` indican al navegador que descargue los `script`s en un hilo separado, mientras que el resto de la página (el DOM, etc.) se descarga, por lo que los `script`s no bloquean la carga de la página.
- Si tus `script`s se deben ejecutar inmediatamente y no tienen ninguna dependencia, utiliza `async`.
- Si tus `script`s necesitan esperar a ser procesados y dependen de otros `script`s y/o del DOM en su lugar, cárgalos usando `defer` y coloca tus elementos `<script>` correspondientes en el orden que desees que el navegador los ejecute.

## Comentarios

Al igual que con HTML y CSS, es posible escribir comentarios en tu código JavaScript que el navegador ignorará y que existen simplemente para proporcionar instrucciones a tus compañeros desarrolladores sobre cómo funciona el código (y a ti, si regresas a tu código después de seis meses y no puedes recordar lo que hiciste). Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:

- Un comentario de una sola línea se escribe después de una doble barra inclinada (//), p. ej.

  ```js
  // soy un comentario
  ```

- Se escribe un comentario de varias líneas entre las cadenas /\* y \*/, p. ej.

  ```js
  /*
    Yo también soy
    un comentario
  */
  ```

Entonces, por ejemplo, podríamos anotar el JavaScript de nuestra última demostración con comentarios como este:

```js
// Función: crea un nuevo párrafo y lo agrega al final del cuerpo HTML.

function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
  2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.

  Cuando se presione cualquier botón, se ejecutará la función createParagraph().
*/

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
```

> **Nota:** En general, más comentarios suelen ser mejor que menos, pero debes tener cuidado si agregas muchos comentarios para explicar qué son las variables (los nombres de tus variables tal vez deberían ser más intuitivos), o para explicar operaciones muy simples (tal vez tu código sea demasiado complicado).

## Resumen

Así que ahí tienes, tu primer paso en el mundo de JavaScript. Comenzamos solo con teoría, para comenzar a acostumbrarte a por qué usarías JavaScript y qué tipo de cosas puedes hacer con él. En el camino, viste algunos ejemplos de código y aprendiste cómo encaja JavaScript con el resto del código en tu sitio web, entre otras cosas.

JavaScript puede parecer un poco abrumador en este momento, pero no te preocupes — en este curso, te guiaremos en pasos simples que tendrán sentido en el futuro. En el próximo artículo, [nos sumergiremos directamente en lo práctico](/es/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash), lo que te permitirá comenzar directamente y crear tus propios ejemplos de JavaScript.

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
