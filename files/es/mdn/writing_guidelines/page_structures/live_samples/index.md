---
title: Ejemplos ejecutables
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

{{MDNSidebar}}

MDN admite la visualización de bloques de código dentro de los artículos como _ejemplos en vivo_, lo que permite a los lectores ver tanto el código como su salida tal como se vería en una página web. Esta característica permite a los lectores comprender exactamente qué produciría el código ejecutado, haciendo que la documentación sea dinámica e instructiva. También permite a los autores asegurarse de que los bloques de código en la documentación tengan la salida esperada y funcionen correctamente cuando se usen con diferentes navegadores.

El sistema de ejemplos en vivo puede procesar bloques de código escritos en HTML, CSS y JavaScript, sin importar el orden en el que estén escritos en la página. Esto garantiza que la salida corresponda al código fuente combinado porque el sistema ejecuta el código directamente dentro de la página.

A diferencia de los [ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#%C2%BFqu%C3%A9_tipos_de_ejemplos_de_c%C3%B3digo_est%C3%A1n_disponibles), los ejemplos en vivo no proporcionan soporte integrado para capturar registros de consola o restablecer ejemplos que han sido modificados por la entrada del usuario. La sección [Ejemplos](#ejemplos) muestra cómo puedes implementar estas y otras características útiles.

## ¿Cómo funciona el sistema de ejemplos en vivo?

El sistema de ejemplos en vivo agrupa bloques de código, los combina en HTML y renderiza el HTML en un {{HTMLElement("iframe")}}. Un ejemplo en vivo consta de dos partes:

- Uno o más bloques de código agrupados juntos
- Una llamada a una macro que muestra el resultado de los bloques de código combinados en un {{HTMLElement("iframe")}}

Cada [bloque de código](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) que contiene código para la salida tiene un identificador de lenguaje—`html`, `css` o `js`—que especifica si es código HTML, CSS o JavaScript. Los identificadores de lenguaje deben estar en los bloques de código correspondientes, y debe haber una llamada a la macro (`EmbedLiveSample`) en la página para mostrar la salida:

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

El sistema de ejemplos en vivo permite agrupar bloques de código de diferentes maneras para mostrar efectivamente la salida. La siguiente sección describe estos métodos.

### Agrupación de bloques de código

Los bloques de código pueden agruparse de dos maneras:

1. Usando el ID de un encabezado o un elemento de bloque que contenga los bloques de código como identificador
2. Especificando un identificador de cadena junto con los bloques de código

Los bloques de código que no especifican explícitamente un identificador se agrupan por defecto utilizando el ID del encabezado o el elemento de bloque que los contiene. El identificador, en este caso, es el ID de un encabezado o un elemento de bloque (como un {{HTMLElement("div")}}). Esto se muestra en el siguiente ejemplo, donde los códigos `html` y `css` dentro del bloque "Estilizando un párrafo" se usan para generar la salida de la llamada a la macro `EmbedLiveSample`.

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

\{{EmbedLiveSample("Estilizando_un_parrafo")}}

Solo el elemento `<p>` con `class="fancy"` se estilizará en `red`.
````

- Si el ID pertenece a un elemento de bloque, el grupo incluye todos los bloques de código dentro del elemento de bloque que tenga el ID utilizado.
- Si el ID pertenece a un encabezado, el grupo incluye todos los bloques de código que están después de ese encabezado y antes del siguiente encabezado del mismo nivel. Ten en cuenta que los bloques de código bajo subencabezados del encabezado especificado también se incluyen; si este no es el efecto que deseas, usa un ID en un elemento de bloque o utiliza un identificador de cadena en su lugar.

Para agrupar bloques de código utilizando un identificador, agrega una cadena en el formato `live-sample___{IDENTIFICADOR}` a la cadena de información del bloque de código. El identificador debe ser único para los bloques de código que deseas agrupar. Por ejemplo, `live-sample___color-picker` usa `color-picker` como identificador para el sistema de muestra en vivo, y todos los bloques de código con `live-sample___color-picker` en su cadena de información se combinan en la muestra en vivo.

El siguiente ejemplo agrupa un bloque de código CSS y uno de JavaScript usando el identificador `color-picker`:

````md
## Ejemplos

### Estilizando un párrafo

En este ejemplo, usamos CSS para estilizar párrafos que tienen la clase `fancy`.

```html live-sample___paragraph-styling
<p>No soy elegante.</p>

<p class="fancy">Pero yo sí lo soy!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Solo el elemento `<p>` con `class="fancy"` se mostrará en rojo:

\{{EmbedLiveSample("paragraph-styling")}}
````

La macro usa una URL especial que incluye el ID para obtener el resultado de un grupo de bloques de código determinado. Nunca debes codificar manualmente esta URL en el contenido; si necesitas enlazar al ejemplo, usa la macro [`LiveSampleLink`](#livesamplelink_macro).

El marco resultante (o página) está en modo sandbox, es seguro y técnicamente puede hacer cualquier cosa que funcione en la web. Por supuesto, en la práctica, el código debe ser relevante para el contenido de la página; cualquier material no relacionado está sujeto a eliminación por parte de la comunidad editorial de MDN.

El sistema de muestras en vivo tiene muchas opciones disponibles, y trataremos de desglosarlas paso a paso.

### Macros de muestras en vivo

Hay dos macros que puedes usar para mostrar muestras en vivo:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) incrusta una muestra en vivo en una página.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) crea un enlace que abre la muestra en vivo en una nueva página.

En muchos casos, puedes agregar la macro `EmbedLiveSample` o `LiveSampleLink` a las páginas con poco o ningún trabajo adicional. Siempre que la muestra pueda identificarse mediante el ID de un encabezado o esté en un bloque con un ID que puedas usar, agregar la macro debería ser suficiente.

#### Macro EmbedLiveSample

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- `sample_id`
  - : Requerido: Puede ser el identificador de cadena de la muestra o el ID del encabezado o bloque contenedor de donde extraer el código. Para verificar si tiene el ID de encabezado correcto, mire la URL de la sección en la tabla de contenido de la página; también puede comprobarlo viendo el código fuente de la página.
- `width` {{deprecated_inline}}
  - : Atributo `width` del {{HTMLElement("iframe")}}, especificado en `px`. Ya no tiene efecto: las muestras en vivo siempre ocupan todo el ancho del área de contenido.
- `height`
  - : Atributo `height` del {{HTMLElement("iframe")}}, especificado en `px`. Debe ser al menos `60`. Es opcional; se usará un valor predeterminado razonable si se omite.
- `screenshot_URL` {{deprecated_inline}}
  - : URL de una captura de pantalla que muestra cómo debería verse la muestra en vivo. Obsoleto; solo agregue muestras en vivo si existe un soporte razonable del navegador.
- `page_slug` {{deprecated_inline}}
  - : Identificador de la página que contiene la muestra. Si se omite, se toma de la misma página donde se usa la macro. Obsoleto; solo incluya muestras en vivo si el código está en la misma página.
- `class_name` {{deprecated_inline}}
  - : Nombre de clase para aplicar al {{HTMLElement("iframe")}}. Obsoleto; no hay razón para utilizar otro nombre de clase.
- `allow`
  - : Atributo `allow` para el {{HTMLElement("iframe")}}. Es opcional y por defecto no se permiten características adicionales.

#### Macro LiveSampleLink

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : ID del encabezado o bloque contenedor de donde extraer el código. La mejor forma de asegurarse de que tiene el ID correcto es mirar la URL de la sección en la tabla de contenidos de la página; también puede comprobarlo viendo el código fuente de la página.
- `link_text`
  - : Cadena de texto a utilizar como texto del enlace.

## Uso del sistema de muestras en vivo

Las secciones siguientes describen algunos casos de uso comunes para el sistema de muestra en vivo.

### Formato de muestras en vivo

Si escribes una muestra en vivo en la sección "Ejemplos", proporciona un encabezado H3 (`###`) descriptivo para esta muestra. Luego, agrega subsecciones con encabezados H4 (`####`), en el siguiente orden:

- HTML
- CSS
- JavaScript
- Resultado

Escribe los bloques de código en las subsecciones correspondientes.

En la subsección **Resultado**, agrega la llamada a la macro `EmbedLiveSample` y describe el resultado.

Si no usas un tipo de lenguaje en particular (por ejemplo, si no usas JavaScript) o si ocultas el bloque de código, omite el encabezado correspondiente.

### Ocultando código

A veces, solo deseas mostrar el bloque de código estático correspondiente al ejemplo representado dentro de una página. Sin embargo, aún necesita los bloques de código HTML, CSS y JavaScript para representar dicho ejemplo.

Para lograrlo, puedes ocultar los bloques de código que no sean relevantes agregando la cadena de información `hidden` al identificador de lenguaje. Si lo haces, omite los encabezados `### HTML/CSS/JavaScript` para los bloques de código ocultos.

Usando el ejemplo anterior pero ocultando el código HTML:

````md
## Ejemplos

### Estilizando un párrafo

En este ejemplo, usamos CSS para estilizar párrafos que tienen la clase `fancy`.

```html hidden
<p>No soy elegante.</p>
<p class="fancy">Pero yo sí lo soy!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

Solo el elemento `<p>` con `class="fancy"` se mostrará en rojo.

\{{EmbedLiveSample("Estilizando_un_parrafo")}}
````

### Convertir fragmentos de código en ejemplos en vivo

Un caso de uso común es tomar fragmentos de código ya mostrados en MDN y convertirlos en ejemplos en vivo.
El primer paso es agregar fragmentos de código o asegurarse de que los existentes estén listos para usarse como ejemplos en vivo, tanto en términos de contenido como de marcado. Los fragmentos de código, en conjunto, deben constituir un ejemplo completo y ejecutable. Por ejemplo, si el fragmento existente solo muestra CSS, es posible que necesites agregar un fragmento de HTML para que el CSS tenga un elemento sobre el cual aplicarse.

Cada pieza de código debe estar en un bloque de código separado para cada lenguaje, correctamente marcado con su tipo de lenguaje. La mayor parte del tiempo, esto ya estará hecho, pero siempre es bueno verificar que cada pieza de código esté configurada con la sintaxis correcta. Esto se hace con un identificador de lenguaje en el bloque de código del tipo `language-type`, donde _language-type_ es el tipo de lenguaje que contiene el bloque, por ejemplo, `html`, `css` o `js`.

> [!NOTE]
> Puedes tener más de un bloque para cada lenguaje; todos se concatenan juntos. Esto permite tener un fragmento de código seguido de una explicación de su funcionamiento, luego otro fragmento, y así sucesivamente. Esto facilita la creación de tutoriales y otros contenidos que utilicen ejemplos en vivo intercalados con texto explicativo.

Asegúrate de que los bloques de código para tu HTML, CSS y/o JavaScript estén configurados correctamente para el resaltado de sintaxis del lenguaje correspondiente, y estarás listo para continuar.

## Ejemplos

Esta sección contiene ejemplos que muestran cómo se puede usar el sistema de ejemplos en vivo, incluidas las diferentes formas de agrupar los bloques de código que componen un ejemplo y cómo mostrar la salida del registro en los ejemplos.

Ten en cuenta que los encabezados de los bloques de código ("HTML", "CSS" o "JavaScript") se usan por convención en la mayoría de los ejemplos de MDN, pero no son estrictamente necesarios para la macro de ejemplo en vivo.

### Agrupación de bloques de código por encabezado

#### HTML

Este HTML crea un párrafo y algunos bloques para ayudar a posicionar y estilizar un mensaje.

```html
<p>Un ejemplo simple del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">Hola mundo! Bienvenido a MDN</div>
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

En el ejemplo de JavaScript, adjuntamos un manejador de eventos al texto "Hola mundo!" que alterna su contenido cuando se hace clic sobre él.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hola mundo! Bienvenido a MDN"
    : "¡Owww, deja de tocarme!";
  toggleClick = !toggleClick;
};
```

#### Resultado

Aquí está el resultado de ejecutar los bloques de código anteriores a través de `\{{EmbedLiveSample('Agrupación_de_bloques_de_código_por_encabezado')}}`:

{{EmbedLiveSample('Agrupación_de_bloques_de_código_por_encabezado')}}

Aquí hay un enlace generado a partir de estos bloques de código mediante `\{{LiveSampleLink('Agrupación_de_bloques_de_código_por_encabezado', 'Enlace de demostración del ejemplo en vivo')}}`:

{{LiveSampleLink('Agrupación_de_bloques_de_código_por_encabezado', 'Enlace de demostración del ejemplo en vivo')}}

### Agrupación de bloques de código por identificador

Este HTML crea un párrafo y algunos bloques para ayudar a posicionar y estilizar un mensaje. Se ha añadido la cadena `live-sample___hello-world` al identificador de lenguaje `html` para este bloque de código.

```html live-sample___hello-world
<p>Un ejemplo simple del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">Hola mundo! Bienvenido a MDN</div>
</div>
```

El código CSS da estilo al cuadro, así como al texto dentro de él. La cadena `live-sample___hello-world` también se ha agregado al identificador de lenguaje `css`.

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

El código JavaScript adjunta un manejador de eventos al texto "Hola mundo!" que alterna su contenido cuando se hace clic sobre él. La cadena `live-sample___hello-world` también se ha agregado al identificador de lenguaje `js`.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hola mundo! Bienvenido a MDN"
    : "¡Owww, deja de tocarme!";
  toggleClick = !toggleClick;
};
```

Obtenemos esta salida ejecutando los bloques de código anteriores utilizando el identificador `hello-world` en la llamada a la macro `\{{EmbedLiveSample('hello-world')}}`:

{{EmbedLiveSample("hello-world")}}

### Mostrar `<iframe>` de un tamaño determinado

Usa el parámetro `height` para especificar el tamaño del elemento `<iframe>` que contiene la salida del ejemplo en vivo.

```html
<p>Solo un texto simple aquí.</p>
```

Resultado de `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Resultado de `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Permitir caracterísitcas

El parámetro `allow` se puede usar para especificar las funciones permitidas en el elemento `<iframe>` que contiene la salida del ejemplo en vivo. Los valores disponibles provienen de la [sintaxis de política de permisos para iframes](/es/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

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

Resultado de `\{{EmbedLiveSample("Permitir_caracterísitcas", "", "60", "", "", "", "fullscreen")}}`:

{{EmbedLiveSample("Permitir_caracterísitcas", "", "60", "", "", "", "fullscreen")}}

Resultado de `\{{EmbedLiveSample("Permitir_caracterísitcas", "", "60")}}`:

{{EmbedLiveSample("Permitir_caracterísitcas", "", "60")}}

### Mostrar un registro de entrada único

Este ejemplo muestra cómo implementar un registro de entrada único en tu muestra en vivo, donde el valor anterior se reemplaza cada vez que se agrega una nueva entrada al registro.

Para mayor claridad, este ejemplo separa el código de registro del código que lo usa y muestra primero el código de registro. Generalmente, cuando implementes tus propios ejemplos, deberías colocar los elementos de registro debajo de otros elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar la salida del registro como parte del ejemplo proporciona una mejor experiencia de usuario que usar `console.log()`.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar la salida del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

Define la función de registro `log()`. Esta toma el texto a registrar como argumento y lo usa para reemplazar el contenido existente en el registro.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Nota que el contenido del elemento de registro se establece usando la propiedad `innerText`, lo que es más seguro que usar `innerHTML`, ya que el texto registrado no se analiza como HTML (lo que podría inyectar código malicioso).

#### CSS

El CSS establece la altura del elemento de registro.

```css
#log {
  height: 20px;
}
```

#### Código de prueba del registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "lo que se registra" no es tan importante. Se implementa trivialmente como un botón que el usuario puede presionar para incrementar un valor.

```html
<button id="increment" type="button">Presióname varias veces</button>
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

Presiona el botón para agregar nuevo contenido al registro.

{{EmbedLiveSample("mostrar_un_registro_de_entrada_único", "100%", "80px")}}

### Mostrar un registro que agrega elementos

Este ejemplo muestra cómo implementar una simple "consola de registro" en tu ejemplo interactivo.
La consola agrega una nueva línea al final de la salida cada vez que se añade un nuevo registro, desplazando el nuevo elemento a la vista.

Para mayor claridad, este ejemplo separa el código de registro del código que lo utiliza y muestra primero el código de registro.
Generalmente, al implementar tus propios ejemplos, deberías colocar los elementos de registro debajo de otros elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar la salida del registro como parte del ejemplo proporciona una experiencia de usuario mucho mejor que usar `console.log()`.

> [!NOTE]
> Consulta [`DataTransfer.effectAllowed`](/es/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) para ver un ejemplo más completo.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar la salida del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

A continuación, define la función de registro `log()`.
Esta toma el texto a registrar como argumento y lo agrega al contenido del elemento de registro como una nueva línea.
La función también establece `scrollTop` en `scrollHeight` del elemento, lo que fuerza el desplazamiento del nuevo texto de registro a la vista.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Al igual que en el ejemplo anterior, el contenido del elemento de registro se establece usando la propiedad `innerText`, ya que esto es menos susceptible a código malicioso que `innerHTML`.

#### CSS

El CSS añade barras de desplazamiento si el contenido del elemento excede su tamaño, establece la altura del elemento de registro y agrega un borde.
Ten en cuenta que el código JavaScript anterior asegura que, si el contenido desborda, la adición de nuevos registros desplazará el texto a la vista.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Código de prueba de registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "lo que se registra" no es tan importante.
Por lo tanto, se implementa de manera trivial como un botón que el usuario puede presionar para incrementar un valor.

```html
<button id="increment" type="button">Presióname varias veces</button>
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

Presiona el botón para agregar un nuevo contenido de registro.

{{EmbedLiveSample("mostrar_un_registro_que_agrega_elementos", "100%", "180px")}}

### Mostrar un botón de reinicio

Un botón de reinicio puede ser útil para ejemplos que no pueden restaurarse a su estado inicial sin recargar la página.
Por ejemplo, el [ejemplo de `Highlight.priority` "estableciendo prioridad"](/es/docs/Web/API/Highlight/priority#resultado_2) necesita un botón de reinicio, ya que una vez que se ha establecido cualquier prioridad, el estado inicial ya no está disponible.

Este ejemplo muestra cómo agregar un botón de reinicio al ejemplo [Mostrar un registro que agrega elementos](#mostrar_un_registro_que_agrega_elementos) anterior.
Ten en cuenta que el código JavaScript y CSS para el registro es el mismo que en el ejemplo anterior, por lo que ese código se oculta.

#### HTML

El HTML del ejemplo ahora incluye un botón de reinicio.

```html
<button id="increment" type="button">Presióname varias veces</button>
<button id="reset" type="button">Reiniciar</button>
<pre id="log"></pre>
```

#### JavaScript

El código para el botón agrega un manejador de eventos `click` que simplemente recarga el marco que contiene el ejemplo actual.

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

Haz clic en el botón "Presióname varias veces" varias veces.
Reinicia el ejemplo presionando el botón "Reiniciar".

{{EmbedLiveSample("Mostrar_un_botón_de_reinicio", "100%", "180px")}}

### Convenciones sobre muestras en vivo

- Orden de los bloques de código
  - : Al agregar una muestra en vivo, los bloques de código deben estar ordenados de manera que el primero corresponda al lenguaje principal de la muestra (si lo hay). Por ejemplo, cuando se agrega una muestra en vivo para la referencia de HTML, el primer bloque debe ser HTML; cuando se agrega una muestra para la referencia de CSS, debe ser CSS, y así sucesivamente.
- Nombres de los encabezados
  - : Cuando no haya ambigüedad (por ejemplo, si la muestra está en una sección "Ejemplos"), los encabezados deben ser directos y usar solo el nombre del lenguaje correspondiente: HTML, CSS, JavaScript, SVG, etc. (ver arriba). No se deben usar encabezados como "Contenido HTML" o "Contenido JavaScript". Sin embargo, si un encabezado tan corto hace que el contenido sea poco claro, se puede usar un título más descriptivo.
- Uso de un bloque "Resultado"
  - : Después de los diferentes bloques de código, por favor usa un último bloque "Resultado" antes de utilizar la macro `EmbedLiveSample` (ver arriba). De esta manera, la semántica del ejemplo es más clara tanto para el lector como para cualquier herramienta que analice la página (por ejemplo, lectores de pantalla, rastreadores web).
