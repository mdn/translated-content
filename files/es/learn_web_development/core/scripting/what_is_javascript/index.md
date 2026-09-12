---
title: ¿Qué es JavaScript?
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

¡Bienvenido al curso de JavaScript para principiantes de MDN!
En este artículo veremos JavaScript desde un nivel general, respondiendo preguntas como «¿Qué es?» y «¿Qué puedes hacer con él?», y nos aseguraremos de que te sientas cómodo con el propósito de JavaScript.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Comprender <a href="/es/docs/Learn_web_development/Core/Structuring_content">HTML</a> y los <a href="/es/docs/Learn_web_development/Core/Styling_basics">fundamentos de CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objetivos de aprendizaje:</th>
      <td>
        <ul>
          <li>Qué es JavaScript y cómo encaja en un sitio web.</li>
          <li>Qué puedes hacer con JavaScript.</li>
          <li>Cómo agregar JavaScript a una página web.</li>
          <li>Cómo escribir comentarios dentro de JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Una definición de alto nivel

JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web — cada vez que una página web hace algo más que quedarse ahí mostrando información estática para que la mires (mostrar actualizaciones de contenido en el momento oportuno, mapas interactivos, gráficos animados en 2D/3D, reproductores de vídeo con desplazamiento, etc.) puedes apostar que probablemente JavaScript está involucrado.
Es la tercera capa del pastel de tecnologías web estándar, dos de las cuales ([HTML](/es/docs/Learn_web_development/Core/Structuring_content) y [CSS](/es/docs/Learn_web_development/Core/Styling_basics)) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.

![Las tres capas de las tecnologías web estándar: HTML, CSS y JavaScript](cake.png)

- {{glossary("HTML")}} es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y vídeos en la página.
- {{glossary("CSS")}} es un lenguaje de reglas de estilo que usamos para aplicar estilos a nuestro contenido HTML, por ejemplo estableciendo colores de fondo y tipos de letra, y distribuyendo nuestro contenido en varias columnas.
- {{glossary("JavaScript")}} es un lenguaje de secuencias de comandos que te permite crear contenido que se actualiza dinámicamente, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Bueno, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

Las tres capas se combinan muy bien entre sí. Tomemos un botón como ejemplo. Podemos marcarlo con HTML para darle estructura y propósito:

```css hidden live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  font-size: 1.4em;
}
```

```html live-sample___string-concat-name-html live-sample___string-concat-name-css live-sample___string-concat-name-js
<button>Jugador 1: Chris</button>
```

{{EmbedLiveSample('string-concat-name-html', , '80')}}

Luego podemos añadir algo de CSS a la mezcla para que se vea bien:

```css live-sample___string-concat-name-css live-sample___string-concat-name-js
button {
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

{{EmbedLiveSample('string-concat-name-css', , '80')}}

Y finalmente, podemos añadir algo de JavaScript para implementar un comportamiento dinámico:

```js live-sample___string-concat-name-js
function updateName() {
  const name = prompt("Ingresa un nuevo nombre");
  button.textContent = `Jugador 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Intenta hacer clic en la etiqueta de texto, ingresa un nombre en el cuadro de diálogo que se abre y pulsa el botón Aceptar.

{{EmbedLiveSample('string-concat-name-js', , '80', , , , , 'allow-modals')}}

JavaScript puede hacer mucho más que eso — exploremos qué con más detalle.

> [!NOTE]
> Antes de continuar, ¿por qué no te animas a ensuciarte las manos con un desafío de Scrimba en esta etapa temprana? Consulta [Muestra un mensaje de bienvenida](https://scrimba.com/learn-javascript-c0v/~0n?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>. Si no sabes cómo escribir este código, no te preocupes en absoluto; puedes intentar hacer algunas búsquedas en la web para encontrar respuestas, o ver la solución al final del scrim.

## Entonces, ¿qué puede hacer realmente?

El núcleo del lenguaje JavaScript del lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como:

- Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que se ingrese un nuevo nombre y luego almacenamos ese nombre en una variable llamada `name`.
- Operaciones sobre fragmentos de texto (conocidos como "strings" o cadenas en programación). En el ejemplo anterior tomamos la cadena "Jugador 1: " y la unimos a la variable `name` para crear la etiqueta de texto completa, por ejemplo, "Jugador 1: Chris".
- Ejecutar código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento {{domxref("Element/click_event", "click")}} en nuestro ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto.
- ¡Y mucho más!

Sin embargo, lo que resulta aún más emocionante es la funcionalidad construida sobre el lenguaje JavaScript del lado del cliente. Las llamadas **interfaces de programación de aplicaciones** (**API**) te proporcionan superpoderes adicionales para usar en tu código JavaScript.

Las API son conjuntos de bloques de código ya hechos que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar.
Hacen por la programación lo mismo que los kits de muebles prefabricados hacen por la construcción de una casa — es mucho más fácil tomar paneles ya cortados y atornillarlos entre sí para hacer una estantería que resolver tú mismo el diseño, ir a buscar la madera correcta, cortar todos los paneles con el tamaño y la forma adecuados, encontrar los tornillos del tamaño correcto y _luego_ juntarlos para hacer una estantería.

Generalmente se dividen en dos categorías.

![Dos categorías de API: las API de terceros se muestran al costado del navegador y las API del navegador están dentro del navegador](browser.png)

Las **API del navegador** están integradas en tu navegador web y pueden exponer datos del entorno informático que te rodea, o realizar tareas complejas útiles. Por ejemplo:

- La [API del DOM (Document Object Model)](/es/docs/Web/API/Document_Object_Model) te permite manipular HTML y CSS, creando, eliminando y cambiando HTML, aplicando dinámicamente nuevos estilos a tu página, etc.
  Cada vez que ves aparecer una ventana emergente en una página, o se muestra contenido nuevo (como vimos antes en nuestra demostración sencilla), por ejemplo, eso es el DOM en acción.
- La [API de Geolocalización](/es/docs/Web/API/Geolocation_API) recupera información geográfica.
  Así es como [Google Maps](https://www.google.com/maps) puede encontrar tu ubicación y trazarla en un mapa.
- Las API de [Canvas](/es/docs/Web/API/Canvas_API) y [WebGL](/es/docs/Web/API/WebGL_API) te permiten crear gráficos animados en 2D y 3D. Hay gente haciendo cosas increíbles con estas tecnologías web — mira [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) y [webglsamples](https://webglsamples.org/).
- Las [API de audio y vídeo](/es/docs/Web/Media/Guides/Audio_and_video_delivery) como {{domxref("HTMLMediaElement")}} y [WebRTC](/es/docs/Web/API/WebRTC_API) te permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y vídeo directamente en una página web, o tomar vídeo de tu cámara web y mostrarlo en la computadora de otra persona (prueba nuestra sencilla [demostración de Snapshot](https://chrisdavidmills.github.io/snapshot/) para hacerte una idea).

Las **API de terceros** no están integradas en el navegador de forma predeterminada, y por lo general tienes que obtener su código e información de algún lugar de la Web. Por ejemplo:

- La [API de Bluesky](https://bsky.network/) te permite hacer cosas como mostrar tus últimas publicaciones en tu sitio web.
- La [API de Google Maps](https://developers.google.com/maps/) y la [API de OpenStreetMap](https://wiki.openstreetmap.org/wiki/API) te permiten insertar mapas personalizados en tu sitio web, entre otras funciones similares.

> [!NOTE]
> Estas API son avanzadas y no cubriremos ninguna de ellas en este módulo. Puedes obtener mucha más información sobre estas en nuestro [módulo de API web del lado del cliente](/es/docs/Learn_web_development/Extensions/Client-side_APIs).

¡También hay mucho más disponible! Sin embargo, no te emociones demasiado todavía. No podrás crear el próximo Facebook, Google Maps o Instagram después de estudiar JavaScript durante 24 horas — hay muchos conceptos básicos que cubrir primero. Y por eso estás aquí — ¡sigamos adelante!

## ¿Qué está haciendo JavaScript en tu página?

Aquí vamos a empezar a ver algo de código y, mientras lo hacemos, exploraremos lo que realmente sucede cuando ejecutas JavaScript en tu página.

Repasemos brevemente la historia de lo que sucede cuando cargas una página web en un navegador (de lo que hablamos por primera vez en nuestro artículo [¿Qué es CSS?](/es/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)). Cuando cargas una página web en tu navegador, estás ejecutando tu código (el HTML, el CSS y el JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y produce un producto (la página web).

![El código HTML, CSS y JavaScript se combinan para crear el contenido de la pestaña del navegador cuando se carga la página](execution.png)

Un uso muy común de JavaScript es modificar dinámicamente el HTML y el CSS para actualizar una interfaz de usuario, a través de la API del Document Object Model (como se mencionó anteriormente).

### Seguridad del navegador

Cada pestaña del navegador tiene su propio depósito separado para ejecutar código (estos depósitos se denominan "entornos de ejecución" en términos técnicos) — esto significa que, en la mayoría de los casos, el código de cada pestaña se ejecuta de forma completamente independiente, y el código de una pestaña no puede afectar directamente al código de otra pestaña, o de otro sitio web.
Esta es una buena medida de seguridad — si no fuera así, los piratas informáticos podrían empezar a escribir código para robar información de otros sitios web, entre otras cosas malas.

> [!NOTE]
> Existen formas de enviar código y datos entre diferentes sitios web/pestañas de manera segura, pero son técnicas avanzadas que no cubriremos en este curso.

### Orden de ejecución de JavaScript

Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo.
Esto significa que debes tener cuidado con el orden en el que colocas las cosas.
Por ejemplo, volvamos al bloque de JavaScript que vimos en nuestro primer ejemplo:

```js
function updateName() {
  const name = prompt("Ingresa un nuevo nombre");
  button.textContent = `Jugador 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
```

Aquí, primero definimos un bloque de código llamado `updateName()` (este tipo de bloques de código reutilizables se llaman **funciones**), que le pide al usuario un nuevo nombre e inserta ese nombre en el texto de un botón. Luego almacenamos una referencia a un botón usando `document.querySelector` y le adjuntamos un detector de eventos usando `addEventListener` para que, cuando se haga clic en el botón, se ejecute la función `updateName()`.

Si intercambiaras el orden de las líneas `const button = ...` y `button.addEventListener(...)`, el código ya no funcionaría — en su lugar, obtendrías un error en la [consola de desarrollador del navegador](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) — `Uncaught ReferenceError: Cannot access 'button' before initialization`.
Esto significa que el objeto `button` todavía no se ha inicializado, por lo que no podemos agregarle un detector de eventos.

> [!NOTE]
> No siempre es cierto que JavaScript se ejecute exactamente en orden de arriba a abajo, debido a comportamientos como el [hoisting](/es/docs/Glossary/Hoisting), pero por ahora ten en cuenta que, en general, los elementos deben definirse antes de que puedas usarlos. Esta es una fuente común de errores.

### Código interpretado versus compilado

Es posible que escuches los términos **interpretado** y **compilado** en el contexto de la programación.
En los lenguajes interpretados, el código se ejecuta de arriba a abajo y el resultado de ejecutarlo se devuelve de inmediato.
No tienes que transformar el código en una forma diferente antes de que el navegador lo ejecute.
El código se recibe en su forma de texto amigable para el programador y se procesa directamente a partir de ahí.

Los lenguajes compilados, por otro lado, se transforman (se compilan) en otra forma antes de que la computadora los ejecute.
Por ejemplo, C/C++ se compila a código máquina, que luego ejecuta la computadora.
El programa se ejecuta a partir de un formato binario, que se generó a partir del código fuente original del programa.

JavaScript es un lenguaje de programación interpretado y ligero.
El navegador web recibe el código JavaScript en su forma de texto original y ejecuta el script a partir de ahí.
Desde un punto de vista técnico, la mayoría de los intérpretes modernos de JavaScript en realidad usan una técnica llamada **compilación justo a tiempo** (_just-in-time compiling_) para mejorar el rendimiento; el código fuente de JavaScript se compila en un formato binario más rápido mientras se usa el script, de modo que pueda ejecutarse lo más rápido posible.
Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se gestiona en tiempo de ejecución, en lugar de por adelantado.

Ambos tipos de lenguaje tienen ventajas, pero no las abordaremos ahora.

### Código del lado del servidor versus del lado del cliente

También es posible que escuches los términos código **del lado del servidor** y **del lado del cliente**, especialmente en el contexto del desarrollo web.
El código del lado del cliente es el código que se ejecuta en la computadora del usuario — cuando se visualiza una página web, el código del lado del cliente de la página se descarga, y luego el navegador lo ejecuta y lo muestra.
En este módulo estamos hablando explícitamente de **JavaScript del lado del cliente**.

El código del lado del servidor, por otro lado, se ejecuta en el servidor, y luego sus resultados se descargan y se muestran en el navegador.
Ejemplos de lenguajes web populares del lado del servidor incluyen PHP, Python, Ruby, C# ¡e incluso JavaScript!
JavaScript también se puede usar como lenguaje del lado del servidor, por ejemplo en el popular entorno Node.js — puedes obtener más información sobre JavaScript del lado del servidor en nuestro tema [Sitios web dinámicos: programación del lado del servidor](/es/docs/Learn_web_development/Extensions/Server-side).

### Código dinámico versus estático

La palabra **dinámico** se usa para describir tanto a JavaScript del lado del cliente como a los lenguajes del lado del servidor — se refiere a la capacidad de actualizar la visualización de una página web/aplicación para mostrar cosas distintas en circunstancias distintas, generando contenido nuevo según sea necesario.
El código del lado del servidor genera dinámicamente contenido nuevo en el servidor, por ejemplo, extrayendo datos de una base de datos, mientras que JavaScript del lado del cliente genera dinámicamente contenido nuevo dentro del navegador, en el cliente, por ejemplo, creando una nueva tabla HTML, llenándola con datos solicitados al servidor y luego mostrando la tabla en una página web que se le muestra al usuario.
El significado es ligeramente diferente en los dos contextos, pero está relacionado, y ambos enfoques (del lado del servidor y del lado del cliente) generalmente funcionan juntos.

A una página web sin contenido que se actualiza dinámicamente se le llama **estática** — simplemente muestra el mismo contenido todo el tiempo.

## ¿Cómo agregas JavaScript a tu página?

JavaScript se aplica a tu página HTML de una manera similar a CSS.
Mientras que CSS usa elementos {{htmlelement("link")}} para aplicar hojas de estilo externas y elementos {{htmlelement("style")}} para aplicar hojas de estilo internas al HTML, JavaScript solo necesita un amigo en el mundo del HTML: el elemento {{htmlelement("script")}}. Aprendamos cómo funciona esto.

> [!NOTE]
> El tutorial interactivo de Scrimba [Configurando nuestro archivo JavaScript](https://scrimba.com/learn-javascript-c0v/~03?via=mdn) <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> recorre un par de formas distintas de agregar JavaScript a tu HTML.

### JavaScript interno

1. En primer lugar, haz una copia local de nuestro archivo de ejemplo [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Guárdalo en un directorio en algún lugar razonable.
2. Abre el archivo en tu navegador web y en tu editor de texto. Verás que el HTML crea una página web sencilla que contiene un botón en el que se puede hacer clic.
3. A continuación, ve a tu editor de texto y agrega lo siguiente al final de tu `body`, justo antes de la etiqueta de cierre `</body>`:

   ```html
   <script>
     // El código JavaScript va aquí
   </script>
   ```

   Ten en cuenta que el código de tus documentos web generalmente se carga y se ejecuta en el orden en que aparece en la página. Al colocar el JavaScript al final, nos aseguramos de que todos los elementos HTML ya se hayan cargado. (Consulta también [Estrategias de carga de scripts](#estrategias_para_la_carga_de_scripts) más abajo).

4. Ahora agregaremos algo de JavaScript dentro de nuestro elemento {{htmlelement("script")}} para hacer que la página haga algo más interesante — agrega el siguiente código justo debajo de la línea "// El código JavaScript va aquí":

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "¡Hiciste clic en el botón!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

5. Guarda tu archivo y actualiza el navegador — ahora deberías ver que cuando haces clic en el botón, se genera un nuevo párrafo y se coloca debajo.

> [!NOTE]
> Si tu ejemplo no parece funcionar, repasa los pasos de nuevo y verifica que hayas hecho todo correctamente.
> ¿Guardaste tu copia local del código inicial como un archivo `.html`?
> ¿Agregaste tu elemento {{htmlelement("script")}} justo antes de la etiqueta `</body>`?
> ¿Ingresaste el JavaScript exactamente como se muestra? **JavaScript distingue entre mayúsculas y minúsculas y es muy exigente, así que debes ingresar la sintaxis exactamente como se muestra, o de lo contrario puede que no funcione.**

> [!NOTE]
> Puedes ver esta versión en GitHub como [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([míralo en vivo también](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### JavaScript externo

Esto funciona muy bien, pero ¿qué pasa si quisiéramos poner nuestro JavaScript en un archivo externo? Exploremos esto ahora.

1. Primero, crea un nuevo archivo en el mismo directorio que tu archivo HTML de ejemplo. Llámalo `script.js` — asegúrate de que tenga la extensión de archivo .js, ya que así es como se lo reconoce como JavaScript.
2. Elimina tu elemento {{htmlelement("script")}} actual al final del `</body>` y agrega lo siguiente justo antes de la etiqueta de cierre `</head>` (de esa manera el navegador puede empezar a cargar el archivo antes que si estuviera al final):

   ```html
   <script type="module" src="script.js"></script>
   ```

3. Dentro de `script.js`, agrega el siguiente script:

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "¡Hiciste clic en el botón!";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. Guarda y actualiza tu navegador. Descubrirás que hacer clic en el botón no tiene ningún efecto, y si revisas la consola de tu navegador, verás un error similar a `Cross-origin request blocked`. Esto se debe a que, como muchos recursos externos, los módulos de JavaScript necesitan cargarse desde el [mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy) que el HTML, y las URL `file://` no califican. Hay dos soluciones para arreglar este problema:
   - Nuestra solución recomendada es [configurar un servidor de pruebas local](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Con el programa de servidor en ejecución sirviendo los archivos `apply-javascript-external.html` y `script.js` en el puerto `8000`, abre tu navegador y ve a `http://localhost:8000`.
   - Si no puedes ejecutar un servidor local, también puedes usar `<script defer src="script.js"></script>` en lugar de `<script type="module" src="script.js"></script>`. Consulta [Estrategias de carga de scripts](#estrategias_para_la_carga_de_scripts) más abajo para más información. Pero ten en cuenta que las funciones que usamos en otras partes del tutorial pueden requerir un servidor HTTP local de todos modos.
5. Ahora el sitio web funciona igual que antes, pero ahora tenemos nuestro JavaScript en un archivo externo.
   Esto generalmente es bueno en términos de organizar tu código y hacerlo reutilizable en varios archivos HTML.
   Además, el HTML es más fácil de leer sin grandes fragmentos de script volcados en él.

> [!NOTE]
> Puedes ver esta versión en GitHub como [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) y [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js) ([míralo en vivo también](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Controladores de JavaScript en línea

Ten en cuenta que a veces te encontrarás con fragmentos de código JavaScript real que viven dentro del HTML.
Podría verse algo así:

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "¡Hiciste clic en el botón!";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">¡Haz clic aquí!</button>
```

Puedes probar esta versión de nuestra demostración a continuación.

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

Esta demostración tiene exactamente la misma funcionalidad que en las dos secciones anteriores, excepto que el elemento {{htmlelement("button")}} incluye un controlador `onclick` en línea para hacer que la función se ejecute cuando se presiona el botón.

**Sin embargo, por favor no hagas esto.** Es mala práctica contaminar tu HTML con JavaScript, y es ineficiente — tendrías que incluir el atributo `onclick="createParagraph()"` en cada botón al que quieras que se le aplique el JavaScript.

### Usar addEventListener en su lugar

En lugar de incluir JavaScript en tu HTML, usa una construcción de JavaScript puro.
La función `querySelectorAll()` te permite seleccionar todos los botones de una página.
Luego puedes recorrer los botones, asignando un controlador a cada uno con `addEventListener()`.
El código para esto se muestra a continuación:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

Esto puede ser un poco más largo que el atributo `onclick`, pero funcionará para todos los botones — sin importar cuántos haya en la página, ni cuántos se agreguen o eliminen.
No es necesario cambiar el JavaScript.

> [!NOTE]
> Intenta editar tu versión de `apply-javascript.html` y agrega algunos botones más al archivo.
> Cuando la recargues, deberías ver que al hacer clic en cualquiera de los botones se crea un párrafo.
> Genial, ¿no?

### Estrategias para la carga de scripts

Todo el HTML de una página se carga en el orden en que aparece.
Si estás usando JavaScript para manipular elementos de la página (o, más precisamente, el [Document Object Model](/es/docs/Learn_web_development/Core/Scripting/DOM_scripting)), tu código no funcionará si el JavaScript se carga y se procesa antes que el HTML sobre el que intentas hacer algo.

Hay unas cuantas estrategias distintas para asegurarte de que tu JavaScript solo se ejecute después de que el HTML se haya procesado:

- En el ejemplo de JavaScript interno anterior, el elemento script se coloca al final del cuerpo del documento y, por lo tanto, solo se ejecuta después de que se procesa el resto del cuerpo HTML.
- En el ejemplo de JavaScript externo anterior, el elemento script se coloca en el encabezado del documento, antes de que se procese el cuerpo HTML. Pero como estamos usando `<script type="module">`, el código se trata como un [módulo](/es/docs/Web/JavaScript/Guide/Modules) y el navegador espera a que se procese todo el HTML antes de ejecutar los módulos de JavaScript. (También podrías colocar los scripts externos al final del cuerpo. Pero si hay mucho HTML y la red es lenta, puede pasar bastante tiempo antes de que el navegador siquiera empiece a obtener y cargar el script, así que colocar los scripts externos en el encabezado suele ser mejor).
- Si aun así quieres usar scripts que no son módulos en el encabezado del documento, lo cual podría bloquear que se muestre toda la página y podría causar errores porque se ejecuta antes de que se procese el HTML:
  - Para los scripts externos, deberías agregar el atributo `defer` (o, si no necesitas que el HTML esté listo, el atributo `async`) al elemento {{htmlelement("script")}}.
  - Para los scripts internos, deberías envolver el código en un [detector del evento `DOMContentLoaded`](/es/docs/Web/API/Document/DOMContentLoaded_event).

  Esto está fuera del alcance del tutorial en este punto, pero a menos que necesites dar soporte a navegadores muy antiguos, no tienes que hacer esto y simplemente puedes usar `<script type="module">` en su lugar.

## Comentarios

Al igual que con HTML y CSS, es posible escribir comentarios en tu código JavaScript que el navegador ignorará, y que existen para dar instrucciones a tus compañeros desarrolladores sobre cómo funciona el código (y a ti mismo, si vuelves a tu código después de seis meses y no puedes recordar qué hiciste).
Los comentarios son muy útiles, y deberías usarlos con frecuencia, particularmente en aplicaciones más grandes.
Hay dos tipos:

- Un comentario de una sola línea se escribe después de una doble barra inclinada (`//`), por ejemplo:

  ```js
  // Soy un comentario
  ```

- Un comentario de varias líneas se escribe entre las cadenas `/*` y `*/`, por ejemplo:

  ```js
  /*
    Yo también soy
    un comentario
  */
  ```

Entonces, por ejemplo, podríamos anotar el JavaScript de nuestra última demostración con comentarios así:

```js
// Función: crea un nuevo párrafo y lo agrega al final del cuerpo del HTML.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "¡Hiciste clic en el botón!";
  document.body.appendChild(para);
}

/*
  1. Obtiene referencias a todos los botones de la página en formato de arreglo.
  2. Recorre todos los botones y le agrega un detector de eventos de clic a cada uno.

  Cuando se presione cualquier botón, se ejecutará la función createParagraph().
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> En general, más comentarios suelen ser mejor que menos, pero deberías tener cuidado si te encuentras agregando muchos comentarios para explicar qué son las variables (tal vez los nombres de tus variables deberían ser más intuitivos), o para explicar operaciones muy simples (tal vez tu código esté demasiado complicado).

## Resumen

Así que ahí lo tienes, tu primer paso en el mundo de JavaScript.
Empezamos solo con teoría, para empezar a acostumbrarte a por qué usarías JavaScript y qué tipo de cosas puedes hacer con él.
En el camino, viste algunos ejemplos de código y aprendiste cómo encaja JavaScript con el resto del código de tu sitio web, entre otras cosas.

JavaScript puede parecer un poco abrumador en este momento, pero no te preocupes — en este curso te iremos guiando en pasos sencillos que tendrán sentido más adelante.
En el próximo artículo nos sumergiremos directamente en la práctica, para que empieces de una vez y crees tus propios ejemplos de JavaScript.

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
