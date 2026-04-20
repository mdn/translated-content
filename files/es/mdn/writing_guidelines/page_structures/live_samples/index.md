---
title: Ejemplos en vivo (EmbedLiveSample)
short-title: Ejemplos en vivo
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{MDNSidebar}}

MDN admite la visualización de bloques de código dentro de los artículos como _ejemplos en vivo_, por lo que los lectores pueden ver tanto el código fuente como su salida tal como se ve en una página web.
Esta característica permite a los lectores comprender exactamente qué produciría el código ejecutado, haciendo que la documentación sea dinámica e instructiva.
También permite a los autores estar absolutamente seguros de que los bloques de código en la documentación tienen la salida esperada y funcionan adecuadamente cuando se usan con diferentes navegadores.

El sistema de ejemplos en vivo puede procesar bloques de código escritos en HTML, CSS y JavaScript, independientemente del orden en el que estén escritos en la página.
Esto garantiza que la salida corresponda al código fuente combinado porque el sistema ejecuta el código directamente dentro de la página.

A diferencia de los [ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn), los ejemplos en vivo no proporcionan soporte integrado para capturar el registro de la consola ni para restablecer ejemplos que se han modificado mediante la entrada del usuario.
La sección [Ejemplos](#ejemplos) muestra cómo puedes implementar estas y otras características útiles.

## ¿Cómo funcionan los ejemplos en vivo?

Los ejemplos en vivo agrupan bloques de código, los combinan en HTML y representan el HTML en un {{HTMLElement("iframe")}}.
Un ejemplo en vivo consta de dos partes:

- Uno o más bloques de código agrupados juntos
- Una llamada a una macro que muestra el resultado de los bloques de código en un {{HTMLElement("iframe")}}

Cada [bloque de código](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) que contiene código para la salida tiene un identificador de lenguaje — `html`, `css` o `js` — que especifica si es código HTML, CSS o JavaScript. Los identificadores de lenguaje deben estar en los bloques de código correspondientes, y debe haber una llamada a la macro (`EmbedLiveSample`) en la página para mostrar la salida:

````md
## Ejemplos

```html
<!-- Código HTML -->
```

```css
/* Código CSS */
```

\{{EmbedLiveSample("Ejemplos")}}
````

El sistema de ejemplos en vivo permite agrupar bloques de código de diferentes maneras para mostrar eficazmente la salida. La siguiente sección describe estos métodos.

### Agrupación de bloques de código

Los bloques de código pueden agruparse de dos maneras:

1. Usando el ID de un encabezado o un elemento de bloque que contiene los bloques de código como identificador
2. Especificando un identificador de cadena junto con los bloques de código

Los bloques de código que no especifican explícitamente un identificador se agrupan por defecto utilizando el ID del encabezado o elemento de bloque que contiene los bloques de código. El identificador, en este caso, es el ID de un encabezado o un elemento de bloque (como un {{HTMLElement("div")}}). Esto se muestra en el siguiente ejemplo, donde los códigos `html` y `css` dentro del bloque "Estilizando un párrafo" se usan para generar la salida de la llamada a la macro `EmbedLiveSample`.

````md
## Ejemplos

### Estilizando un párrafo

En este ejemplo, usamos CSS para estilizar párrafos que tienen la clase `fancy` establecida.

#### HTML

```html
<p>No soy elegante.</p>

<p class="fancy">¡Pero yo sí!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

\{{EmbedLiveSample("Estilizando un párrafo")}}

Solo el elemento `<p>` con `class="fancy"` se estilizará como `red`.
````

- Si el ID pertenece a un elemento de bloque, el grupo incluye todos los bloques de código dentro del elemento de bloque contenedor cuyo ID se usa.
- Si el ID pertenece a un encabezado, el grupo incluye todos los bloques de código que están después de ese encabezado y antes del siguiente encabezado del mismo nivel. Ten en cuenta que todos los bloques de código bajo los subencabezados del encabezado especificado se usan; si este no es el efecto que deseas, usa un ID en un elemento de bloque o utiliza un identificador de cadena en su lugar.

Para agrupar bloques de código usando un identificador, agrega una cadena en el formato `live-sample___{IDENTIFICADOR}` a la cadena de información del bloque de código. El identificador debe ser único para los bloques de código que deseas agrupar. Por ejemplo, `live-sample___color-picker` usa `color-picker` como identificador para el sistema de ejemplos en vivo, y todos los bloques de código con `live-sample___color-picker` en su cadena de información se combinan en el ejemplo en vivo.
El siguiente ejemplo agrupa un bloque de código CSS y uno de JavaScript juntos usando el identificador `color-picker`:

````md
## Ejemplos

### Estilizando un párrafo

En este ejemplo, usamos CSS para estilizar párrafos que tienen la clase `fancy` establecida.

```html live-sample___paragraph-styling
<p>No soy elegante.</p>

<p class="fancy">¡Pero yo sí!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Solo el elemento `<p>` con `class="fancy"` se estilizará como `red`:

\{{EmbedLiveSample("paragraph-styling")}}
````

La macro usa una URL especial que incluye el ID para obtener la salida de un grupo determinado de bloques de código. Nunca debes codificar esta URL manualmente en el contenido; si necesitas enlazar al ejemplo, usa la macro [`LiveSampleLink`](#macro_livesamplelink).

El marco resultante (o página) está en sandbox, es seguro y técnicamente puede hacer cualquier cosa que funcione en la web. Por supuesto, en la práctica, el código debe ser relevante para el contenido de la página; cualquier material no relacionado está sujeto a eliminación por parte de la comunidad editorial de MDN.

El sistema de ejemplos en vivo tiene muchas opciones disponibles, y trataremos de desglosarlo paso a paso.

### Macros de ejemplos en vivo

Hay dos macros que puedes usar para mostrar ejemplos en vivo:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) incrusta un ejemplo en vivo en una página
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) crea un enlace que abre el ejemplo en vivo en una nueva página

En muchos casos, puedes agregar la macro `EmbedLiveSample` o `LiveSampleLink` a las páginas con poco o ningún trabajo adicional. Siempre que el ejemplo pueda identificarse mediante el ID de un encabezado o esté en un bloque con un ID que puedas usar, agregar la macro debería bastar.

#### Macro EmbedLiveSample

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Requerido: Puede ser el identificador de cadena del ejemplo o el ID del encabezado o bloque contenedor del cual extraer el código.
    Para verificar si tienes el ID de encabezado correcto, mira la URL de la sección en la tabla de contenidos de la página; también puedes verificarlo viendo el código fuente de la página.
- `width` {{deprecated_inline}}
  - : El atributo `width` para el {{HTMLElement("iframe")}}, especificado en `px`. Obsoleto ya que no tiene ningún efecto: los ejemplos en vivo siempre ocupan todo el ancho del área de contenido.
- `height`
  - : El atributo `height` del {{HTMLElement("iframe")}}, especificado en `px`. Debe ser al menos `60`. Es opcional; se usará una altura predeterminada razonable si lo omites.
- `screenshot_URL` {{deprecated_inline}}
  - : La URL de una captura de pantalla que muestra cómo debería verse el ejemplo en vivo. Obsoleto; solo agrega ejemplos en vivo si existe un soporte razonable del navegador.
- `page_slug` {{deprecated_inline}}
  - : El slug de la página que contiene el ejemplo; es opcional, y si no se proporciona, el ejemplo se extrae de la misma página en la que se usa la macro. Obsoleto; solo incluye ejemplos en vivo si el código está en la misma página.
- `class_name` {{deprecated_inline}}
  - : El nombre de clase para aplicar al {{HTMLElement("iframe")}}. Obsoleto; no hay razón para usar otro nombre de clase.
- `allow`
  - : El atributo `allow` para el {{HTMLElement("iframe")}}. Es opcional; por defecto no hay características permitidas.
- `sandbox`
  - : Una cadena que contiene los atributos `sandbox` que el ejemplo debe incluir.
    Los valores permitidos son `allow-modals`, `allow-forms` y `allow-popups`.
    Se pueden proporcionar múltiples valores, como `"allow-modals allow-popups"`.

#### Macro LiveSampleLink

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : El ID del encabezado o bloque contenedor del cual extraer el código. La mejor manera de asegurarte de que tienes el ID correcto es mirar la URL de la sección en la tabla de contenidos de la página; también puedes verificarlo viendo el código fuente de la página.
- `link_text`
  - : Una cadena para usar como texto del enlace.

## Uso del sistema de ejemplos en vivo

Las secciones a continuación describen algunos casos de uso comunes para el sistema de ejemplos en vivo.

### Formato de ejemplos en vivo

Si escribes un ejemplo en vivo en la sección "Ejemplos", proporciona un encabezado H3 (`###`) descriptivo para este ejemplo. Idealmente, escribe una breve descripción del ejemplo explicando el escenario y qué esperas demostrar. Luego agrega subsecciones con los siguientes encabezados H4 (`####`), en el orden indicado:

- HTML
- CSS
- JavaScript
- Resultado

Escribe los bloques de código en las subsecciones respectivas indicadas anteriormente.

En la subsección **Resultado**, agrega la llamada a la macro `EmbedLiveSample`. Preferiblemente, incluye más texto en esta subsección para describir el resultado.

Si no estás usando un tipo de lenguaje en particular (por ejemplo, si no estás usando JavaScript) o si estás ocultando el bloque de código, debes omitir el encabezado correspondiente.

### Ocultar código

A veces, solo quieres mostrar el bloque de código estático pertinente al ejemplo representado dentro de una página. Sin embargo, todavía necesitas los bloques de código HTML, CSS y JavaScript para representar dicho ejemplo.

Para lograr esto, puedes ocultar los bloques de código que no sean relevantes agregando la cadena de información `hidden` al identificador de lenguaje. Si haces esto, omite los encabezados `### HTML/CSS/JavaScript` para los bloques de código ocultos.

Usando el ejemplo anterior pero ocultando el código HTML se vería así:

````md
## Ejemplos

### Estilizando un párrafo

En este ejemplo, usamos CSS para estilizar párrafos que tienen la clase `fancy` establecida.

```html hidden
<p>No soy elegante.</p>

<p class="fancy">¡Pero yo sí!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

Solo el elemento `<p>` con `class="fancy"` se estilizará como `red`.

\{{EmbedLiveSample("Estilizando un párrafo")}}
````

### Convertir fragmentos de código en ejemplos en vivo

Un caso de uso común es tomar fragmentos de código ya mostrados en MDN y convertirlos en ejemplos en vivo.
El primer paso es agregar fragmentos de código o asegurarse de que los existentes estén listos para usarse como ejemplos en vivo, en términos del contenido y de su marcado. Los fragmentos de código, en conjunto, deben constituir un ejemplo completo y ejecutable. Por ejemplo, si el fragmento existente solo muestra CSS, es posible que necesites agregar un fragmento de HTML para que el CSS tenga un elemento sobre el cual operar.

Cada pieza de código debe estar en un bloque de código, con un bloque separado para cada lenguaje, debidamente marcado como qué lenguaje es. La mayor parte del tiempo, esto ya se habrá hecho, pero siempre vale la pena verificarlo para estar seguro de que cada pieza de código esté configurada con la sintaxis correcta. Esto se hace con un identificador de lenguaje en el bloque de código de `language-type`, donde _language-type_ es el tipo de lenguaje que contiene el bloque, por ejemplo, `html`, `css` o `js`.

> [!NOTE]
> Puedes tener más de un bloque para cada lenguaje; todos se concatenan juntos. Esto te permite tener un fragmento de código, seguido de una explicación de cómo funciona, luego otro fragmento, y así sucesivamente. Esto facilita aún más la creación de tutoriales y otros contenidos que utilizan ejemplos en vivo intercalados con texto explicativo.

Asegúrate de que los bloques de código para tu código HTML, CSS y/o JavaScript estén cada uno configurados correctamente para el resaltado de sintaxis de ese lenguaje, y estarás listo para continuar.

## Ejemplos

Esta sección contiene ejemplos que muestran cómo se puede usar el sistema de ejemplos en vivo, incluidas las diferentes formas de agrupar los bloques de código que componen un ejemplo y cómo mostrar la salida del registro en tus ejemplos.

Ten en cuenta que los encabezados de los bloques de código ("HTML", "CSS" o "JavaScript") se usan por convención en la mayoría de los ejemplos de MDN, pero en realidad no son requeridos por la macro de ejemplo en vivo.

### Agrupación de bloques de código por encabezado

#### HTML

Este HTML crea un párrafo y algunos bloques para ayudarnos a posicionar y estilizar un mensaje.

```html
<p>Un ejemplo simple del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">¡Hola mundo! Bienvenido a MDN</div>
</div>
```

#### CSS

El código CSS da estilo al cuadro, así como al texto dentro de él.

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

#### JavaScript

En el ejemplo de JavaScript, adjuntamos un manejador de eventos al texto "¡Hola mundo!" que alterna su contenido cuando se hace clic sobre él.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "¡Hola mundo! Bienvenido a MDN"
    : "¡Owww, deja de tocarme!";
  toggleClick = !toggleClick;
};
```

#### Resultado

Aquí está el resultado de ejecutar los bloques de código anteriores a través de `\{{EmbedLiveSample('Agrupación_de_bloques_de_código_por_encabezado')}}`:

{{EmbedLiveSample('Agrupación_de_bloques_de_código_por_encabezado')}}

Aquí hay un enlace que resulta de llamar a estos bloques de código a través de `\{{LiveSampleLink('Agrupación_de_bloques_de_código_por_encabezado', 'Enlace de demostración del ejemplo en vivo')}}`:

{{LiveSampleLink('Agrupación_de_bloques_de_código_por_encabezado', 'Enlace de demostración del ejemplo en vivo')}}

### Agrupación de bloques de código por identificador

Este HTML crea un párrafo y algunos bloques para ayudarnos a posicionar y estilizar un mensaje. Se ha añadido la cadena `live-sample___hello-world` al identificador de lenguaje `html` para este bloque de código.

```html live-sample___hello-world
<p>Un ejemplo simple del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">¡Hola mundo! Bienvenido a MDN</div>
</div>
```

El código CSS da estilo al cuadro, así como al texto dentro de él. La cadena `live-sample___hello-world` también se ha agregado al identificador de lenguaje `css` para este bloque de código.

```css live-sample___hello-world
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

Este código JavaScript adjunta un manejador de eventos al texto "¡Hola mundo!" que alterna su contenido cuando se hace clic sobre él. La cadena `live-sample___hello-world` también se ha agregado al identificador de lenguaje `js` para este bloque de código.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "¡Hola mundo! Bienvenido a MDN"
    : "¡Owww, deja de tocarme!";
  toggleClick = !toggleClick;
};
```

Obtenemos esta salida ejecutando los bloques de código anteriores usando el identificador de cadena `hello-world` en la llamada a la macro `\{{EmbedLiveSample('hello-world')}}`:

{{EmbedLiveSample("hello-world")}}

### Mostrar `<iframe>` de un cierto tamaño

Usa el parámetro `height` para especificar el tamaño del elemento `<iframe>` que contiene la salida del ejemplo en vivo.

```html
<p>Solo un texto simple aquí.</p>
```

Resultado de `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Resultado de `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Permitir características

El parámetro `allow` se puede usar para especificar las características que se permiten en el elemento `<iframe>` que contiene la salida del ejemplo en vivo. Los valores disponibles provienen de la [sintaxis de política de permisos para marcos](/es/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax).

```html
<div id="fullscreen-content">
  <button id="toggle-btn">Alternar pantalla completa</button>
</div>
```

```js
const toggleBtn = document.getElementById("toggle-btn");
const fullscreenContent = document.getElementById("fullscreen-content");

toggleBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fullscreenContent.requestFullscreen();
  }
});
```

Resultado de `\{{EmbedLiveSample("Permitir_características", "", "60", "", "", "", "fullscreen")}}`:

{{EmbedLiveSample("Permitir_características", "", "60", "", "", "", "fullscreen")}}

Resultado de `\{{EmbedLiveSample("Permitir_características", "", "60")}}`:

{{EmbedLiveSample("Permitir_características", "", "60")}}

### Mostrar un registro de entrada única

Este ejemplo muestra cómo implementar un registro de entrada único simple en tu ejemplo en vivo, donde el valor anterior se reemplaza cada vez que se agrega una nueva entrada al registro.

Para mayor claridad, este ejemplo separa el código de registro y el código que lo usa, y muestra primero el código de registro.
Generalmente, al implementar tus propios ejemplos, debes colocar los elementos de registro debajo de otros elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar la salida del registro como parte del ejemplo proporciona una experiencia de usuario mucho mejor que usar `console.log()`.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar la salida del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

A continuación, define la función de registro `log()`.
Esta toma el texto a registrar como argumento y lo usa para reemplazar el registro existente.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Ten en cuenta que el contenido del elemento de registro se establece usando la propiedad `innerText`, lo cual es más seguro que usar `innerHTML` porque el texto registrado no se analiza como HTML (lo que podría inyectar código malicioso).

#### CSS

El CSS establece la altura del elemento de registro.

```css
#log {
  height: 20px;
}
```

#### Código de prueba del registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "qué se registra" no es tan importante.
Por lo tanto, se implementa de manera trivial como un botón que el usuario puede presionar para incrementar un valor.

```html
<button id="increment" type="button">Presióname muchas veces</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`El botón ha sido presionado ${incrementValue} vez/veces`);
});
```

#### Resultado

Presiona el botón para agregar nuevo contenido de registro.

{{EmbedLiveSample("Mostrar_un_registro_de_entrada_única", "100%", "80px")}}

### Mostrar un registro que agrega elementos

Este ejemplo muestra cómo implementar una simple "consola de registro" en tu ejemplo en vivo.
La consola agrega una nueva línea al final de la salida cada vez que se agrega un registro, desplazando el nuevo elemento a la vista.

Para mayor claridad, este ejemplo separa el código de registro y el código que lo usa, y muestra primero el código de registro.
Generalmente, al implementar tus propios ejemplos, debes colocar los elementos de registro debajo de otros elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar la salida del registro como parte del ejemplo es una experiencia de usuario mucho mejor que usar `console.log()`.
>
> Consulta [`DataTransfer.effectAllowed`](/es/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) para ver un ejemplo más completo.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar la salida del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

A continuación, define la función de registro `log()`.
Esta toma el texto a registrar como argumento y lo agrega al contenido del elemento de registro como una nueva línea.
La función también establece `scrollTop` en `scrollHeight` del elemento, lo que fuerza la nueva línea de texto de registro a desplazarse a la vista.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Al igual que en el ejemplo anterior, establecemos el contenido usando la propiedad `innerText` ya que es menos susceptible a código malicioso que usar `innerHTML`.

#### CSS

El CSS agrega barras de desplazamiento si el contenido del elemento desborda, establece la altura del elemento de registro y agrega un borde.
Ten en cuenta que el JavaScript anterior garantiza que, si desborda, la adición de nuevo texto de registro desplazará el texto a la vista.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Código de prueba de registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "qué se registra" no es tan importante.
Por lo tanto, se implementa de manera trivial como un botón que el usuario puede presionar para incrementar un valor.

```html
<button id="increment" type="button">Presióname muchas veces</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`El botón ha sido presionado ${incrementValue} vez/veces`);
});
```

#### Resultado

Presiona el botón para agregar nuevo contenido de registro.

{{EmbedLiveSample("Mostrar_un_registro_que_agrega_elementos", "100%", "180px")}}

### Mostrar un botón de reinicio

Un botón de reinicio puede ser útil para ejemplos que no se pueden restaurar a su estado inicial sin restablecer la página.
Por ejemplo, [el ejemplo `Highlight.priority` "estableciendo prioridad"](/es/docs/Web/API/Highlight/priority#result_2) necesita un botón de reinicio, porque una vez que has establecido cualquier prioridad, el estado inicial ya no está disponible.

Este ejemplo muestra cómo agregar un botón de reinicio al ejemplo [Mostrar un registro que agrega elementos](#mostrar_un_registro_que_agrega_elementos) anterior.
Ten en cuenta que el JavaScript y el CSS para el código de registro son los mismos que en el ejemplo anterior, por lo que ese código está oculto.

#### HTML

El HTML para el ejemplo ahora incluye un botón de reinicio.

```html
<button id="increment" type="button">Presióname muchas veces</button>
<button id="reset" type="button">Reiniciar</button>
<pre id="log"></pre>
```

#### JavaScript

El código para el botón agrega una función de manejador de eventos `click` que simplemente recarga el marco que contiene el ejemplo actual.

```js
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`El botón ha sido presionado ${incrementValue} vez/veces`);
});
```

#### Resultado

Haz clic en el botón "Presióname muchas veces" varias veces.
Reinicia el ejemplo presionando el botón "Reiniciar".

{{EmbedLiveSample("Mostrar_un_botón_de_reinicio", "100%", "180px")}}

## Convenciones sobre ejemplos en vivo

- Orden de los bloques de código
  - : Al agregar un ejemplo en vivo, los bloques de código deben ordenarse de manera que el primero corresponda al lenguaje principal de este ejemplo (si lo hay). Por ejemplo, al agregar un ejemplo en vivo para la referencia de HTML, el primer bloque debe ser HTML; al agregar un ejemplo para la referencia de CSS, debe ser CSS, y así sucesivamente.
- Nombres de los encabezados
  - : Cuando no haya ambigüedad (por ejemplo, si el ejemplo está en una sección "Ejemplos"), los encabezados deben ser directos con el solo nombre del lenguaje correspondiente: HTML, CSS, JavaScript, SVG, etc. (ver arriba). No se deben usar encabezados como "Contenido HTML" o "Contenido JavaScript". Sin embargo, si un encabezado tan corto hace que el contenido no sea claro, se puede usar un título más descriptivo.
- Uso de un bloque "Resultado"
  - : Después de los diferentes bloques de código, por favor usa un último bloque "Resultado" antes de usar la macro `EmbedLiveSample` (ver arriba). De esta manera, la semántica del ejemplo se hace más clara tanto para el lector como para cualquier herramienta que analice la página (por ejemplo, lector de pantalla, rastreador web).
