---
title: Ejemplos en vivo (EmbedLiveSample)
short-title: Ejemplos en vivo
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

MDN permite mostrar bloques de código dentro de los artículos como _ejemplos en vivo_, lo que permite a los lectores ver tanto el código fuente como su salida tal como se vería en una página web.
Esta característica permite a los lectores comprender exactamente qué produciría el código ejecutado, y hace que la documentación sea dinámica e instructiva. También permite a los autores asegurarse de que los bloques de código en la documentación tengan la salida esperada y funcionen correctamente cuando se usen con diferentes navegadores.

El sistema de ejemplos en vivo puede procesar bloques de código escritos en HTML, CSS y JavaScript, sin importar el orden en el que estén escritos en la página.
Esto garantiza que la salida corresponda al código fuente combinado, ya que el sistema ejecuta el código directamente dentro de la página.

A diferencia de los [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#¿qué_tipos_de_ejemplos_de_código_hay_en_mdn), los ejemplos en vivo no proporcionan soporte integrado para capturar registros de consola o restablecer ejemplos que han sido modificados por la entrada del usuario.
La sección [Ejemplos](#ejemplos) muestra cómo puedes implementar estas y otras características útiles.

## ¿Cómo funcionan los ejemplos en vivo?

El sistema de ejemplos en vivo agrupa bloques de código, los combina en HTML y renderiza el HTML en un {{HTMLElement("iframe")}}.
Un ejemplo en vivo consta de dos partes:

- Uno o más bloques de código agrupados
- Una llamada de macro que muestra el resultado de los bloques de código en un {{HTMLElement("iframe")}}

Cada [bloque de código](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) que contiene código para el resultado tiene un identificador de lenguaje—`html`, `css` o `js`—que especifica si es código HTML, CSS o JavaScript. Los identificadores de lenguaje deben estar en los bloques de código correspondientes, y debe haber una llamada a la macro (`EmbedLiveSample`) en la página para mostrar la salida:

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

El sistema de ejemplos en vivo permite agrupar bloques de código de diferentes maneras para mostrar el resultado eficazmente. La siguiente sección describe estos métodos.

### Agrupar bloques de código

Los bloques de código pueden agruparse de dos maneras:

1. Usando el ID de un encabezado o un elemento de bloque que contenga los bloques de código como identificador
2. Especificando una cadena como identificador junto con los bloques de código

Los bloques de código que no especifican explícitamente un identificador se agrupan, por defecto, usando el ID del encabezado o del elemento de bloque que los contiene. El identificador, en este caso, es el ID de un encabezado o de un elemento de bloque (como un {{HTMLElement("div")}}). Esto se muestra en el siguiente ejemplo, donde los códigos `html` y `css` dentro del bloque "Aplicar estilos a un párrafo" se usan para generar el resultado de la llamada a la macro `EmbedLiveSample`.

````md
## Ejemplos

### Aplicar estilos a un párrafo

En este ejemplo, usamos CSS para aplicar estilo a los párrafos que tienen la clase `fancy`.

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

\{{EmbedLiveSample("Aplicar estilos a un párrafo")}}

Solo el elemento `<p>` con `class="fancy"` recibirá el estilo `red`.
````

- Si el ID pertenece a un elemento de bloque, el grupo incluye todos los bloques de código dentro del elemento de bloque contenedor cuyo ID se esté utilizando.
- Si el ID pertenece a un encabezado, el grupo incluye todos los bloques de código que están después de ese encabezado y antes del siguiente encabezado del mismo nivel. Ten en cuenta que se utilizan todos los bloques de código que se encuentran debajo de los subencabezados del encabezado especificado; si este no es el efecto que deseas, usa un ID en un elemento de bloque o utiliza una cadena como identificador en su lugar.

Para agrupar bloques de código utilizando un identificador, agrega una cadena con el formato `live-sample___{IDENTIFIER}` a la cadena de información del bloque de código. El identificador debe ser único para los bloques de código que deseas agrupar. Por ejemplo, `live-sample___color-picker` usa `color-picker` como identificador para el sistema de ejemplos en vivo, y todos los bloques de código con `live-sample___color-picker` en su cadena de información se combinan en el ejemplo en vivo.
El siguiente ejemplo agrupa un bloque de código CSS y uno de JavaScript usando el identificador `color-picker`:

````md
## Ejemplos

### Aplicar estilos a un párrafo

En este ejemplo, usamos CSS para aplicar estilo a los párrafos que tienen la clase `fancy`.

```html live-sample___paragraph-styling
<p>No soy elegante.</p>

<p class="fancy">¡Pero yo sí lo soy!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Solo el elemento `<p>` con `class="fancy"` recibirá el estilo `red`:

\{{EmbedLiveSample("paragraph-styling")}}
````

La macro usa una URL especial que incluye el ID para obtener el resultado de un grupo determinado de bloques de código. Nunca escribas esta URL directamente en el código (hardcode) dentro del contenido; si necesitas enlazar al ejemplo, usa la macro [`LiveSampleLink`](#livesamplelink_macro).

El marco (o página) resultante está aislado en un entorno de pruebas (sandboxed), es seguro y, técnicamente, puede hacer cualquier cosa que funcione en la web. Por supuesto, en la práctica, el código debe ser relevante para el contenido de la página; cualquier material no relacionado está sujeto a eliminación por parte de la comunidad de editores de MDN.

El sistema de ejemplos en vivo tiene muchas opciones disponibles, así que desglosaremos para analizarlas una por una.

### Macros para ejemplos en vivo

Hay dos macros que puedes usar para mostrar ejemplos en vivo:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) incrusta un ejemplo en vivo en una página.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) crea un enlace que abre el ejemplo en vivo en una página nueva.

En muchos casos, ¡puedes agregar la macro `EmbedLiveSample` o `LiveSampleLink` a las páginas con poco o ningún trabajo adicional! Siempre que el ejemplo pueda identificarse mediante el ID de un encabezado o esté en un bloque con un ID que puedas usar, agregar la macro debería ser suficiente.

#### Macro EmbedLiveSample

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Requerido: puede ser la cadena identificadora del ejemplo, o el ID del encabezado o bloque contenedor de donde extraer el código. Para verificar si tienes el ID de encabezado correcto, mira la URL de la sección en la tabla de contenidos de la página; también puedes comprobarlo viendo el código fuente de la página.
- `width` {{deprecated_inline}}
  - : El atributo `width` del {{HTMLElement("iframe")}}, especificado en `px`. Obsoleto, ya que ya no tiene efecto: los ejemplos en vivo siempre ocupan todo el ancho del área de contenido.
- `height`
  - : El atributo `height` del {{HTMLElement("iframe")}}, especificado en `px`. Debe ser al menos `60`. Es opcional; se usará un valor predeterminado razonable si se omite.
- `screenshot_URL` {{deprecated_inline}}
  - : La URL de una captura de pantalla que muestra cómo debería verse el ejemplo en vivo. Obsoleto; añade ejemplos en vivo solo si existe compatibilidad razonable con los navegadores.
- `page_slug` {{deprecated_inline}}
  - : El slug de la página que contiene el ejemplo; es opcional y, si no se proporciona, el ejemplo se extrae de la misma página en la que se usa la macro. Obsoleto; solo incluye ejemplos en vivo si el código está en la misma página.
- `class_name` {{deprecated_inline}}
  - : El nombre de la clase que se aplicará al {{HTMLElement("iframe")}}. Obsoleto; no hay razón para usar otro nombre de clase.
- `allow`
  - : El atributo `allow` para el {{HTMLElement("iframe")}}. Es opcional; por defecto no se permiten características adicionales.
- `sandbox`
  - : Una cadena con los atributos `sandbox` que debe incluir el ejemplo.
    Los valores permitidos son `allow-modals`, `allow-forms` y `allow-popups`.
    Se pueden proporcionar varios valores, como `"allow-modals allow-popups"`.

#### Macro LiveSampleLink

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : El ID del encabezado o bloque contenedor del que se extraerá el código. La mejor forma de asegurarte de que tienes el ID correcto es mirar la URL de la sección en la tabla de contenidos de la página; también puedes comprobarlo viendo el código fuente de la página.
- `link_text`
  - : Una cadena para usar como texto del enlace.

## Uso del sistema de ejemplos en vivo

Las siguientes secciones describen algunos casos de uso comunes del sistema de ejemplos en vivo.

### Formato de los ejemplos en vivo

Si escribes un ejemplo en vivo en la sección "Ejemplos", proporciona un encabezado H3 (`###`) descriptivo para ese ejemplo. Idealmente, escribe una breve descripción del ejemplo que explique el escenario y lo que esperas demostrar. Luego, añade subsecciones con los siguientes encabezados H4 (`####`), en el orden indicado:

- HTML
- CSS
- JavaScript
- Resultado

Escribe los bloques de código en las subsecciones respectivas listadas anteriormente.

En la subsección **Resultado**, añade la llamada a la macro `EmbedLiveSample`. Preferiblemente, incluye algo más de texto en esta subsección para describir el resultado.

Si no estás utilizando un tipo de lenguaje en particular (por ejemplo, si no estás utilizando JavaScript) o si estás ocultando el bloque de código, entonces omite el encabezado correspondiente.

### Ocultar código

A veces, solo quieres mostrar el bloque de código estático correspondiente al ejemplo renderizado dentro de una página. Sin embargo, aún necesitas los bloques de código HTML, CSS y JavaScript para mostrar dicho ejemplo.

Para lograrlo, puedes ocultar los bloques de código que no sean relevantes añadiendo la cadena de información `hidden` al identificador de lenguaje. Si lo haces, omite los encabezados `### HTML/CSS/JavaScript` para los bloques de código ocultos.

Si usamos el ejemplo anterior pero ocultamos el código HTML, se vería así:

````md
## Ejemplos

### Aplicar estilos a un párrafo

En este ejemplo, usamos CSS para aplicar estilo a los párrafos que tienen la clase `fancy`.

```html hidden
<p>No soy elegante.</p>

<p class="fancy">¡Pero yo sí lo soy!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

Solo el elemento `<p>` con `class="fancy"` recibirá el estilo `red`.

\{{EmbedLiveSample("Aplicar estilos a un párrafo")}}
````

### Convertir fragmentos de código en ejemplos en vivo

Un caso de uso común es tomar fragmentos de código existentes que ya se muestran en MDN y convertirlos en ejemplos en vivo.
El primer paso es agregar fragmentos de código o asegurarse de que los existentes estén listos para usarse como ejemplos en vivo, tanto en lo que respecta a su contenido como a su marcado. Los fragmentos de código, considerados en conjunto, deben conformar un ejemplo completo y ejecutable. Por ejemplo, si el fragmento existente solo muestra CSS, es posible que debas agregar un fragmento de HTML para que el CSS funcione.

Cada fragmento de código debe estar en un bloque de código, con un bloque separado para cada lenguaje, debidamente marcado para indicar de qué lenguaje se trata. La mayor parte del tiempo, esto ya estará hecho, pero siempre es bueno verificar que cada pieza de código esté configurada con la sintaxis correcta. Esto se hace con un identificador de lenguaje en el bloque de código del tipo `language-type`, donde _language-type_ es el tipo de lenguaje que contiene el bloque, por ejemplo, `html`, `css` o `js`.

> [!NOTE]
> Puedes tener más de un bloque para cada lenguaje; todos se concatenan juntos. Esto te permite tener un fragmento de código, seguido de una explicación de cómo funciona, luego otro fragmento, y así sucesivamente. Esto facilita aún más la creación de tutoriales y otros contenidos que utilicen ejemplos en vivo intercalados con texto explicativo.

Asegúrate de que los bloques de código para tu HTML, CSS y/o JavaScript estén configurados correctamente para el resaltado de sintaxis del lenguaje correspondiente, y estarás listo para continuar.

## Ejemplos

Esta sección contiene ejemplos que muestran cómo se puede usar el sistema de ejemplos en vivo, incluyendo las diferentes formas de agrupar los bloques de código que componen un ejemplo y cómo mostrar la salida del registro en los ejemplos.

Ten en cuenta que los encabezados de los bloques de código ("HTML", "CSS" o "JavaScript") se usan por convención en la mayoría de los ejemplos de MDN, pero no son estrictamente necesarios para la macro de ejemplo en vivo.

### Agrupar bloques de código por encabezado

#### HTML

Este HTML crea un párrafo y algunos bloques para ayudar a posicionar y aplicar estilos a un mensaje.

```html
<p>Una demostración sencilla del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">¡Hola mundo! Bienvenidos a MDN</div>
</div>
```

#### CSS

El código CSS define el estilo tanto a la caja como al texto de su interior.

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

En el ejemplo de JavaScript, asignamos un manejador de eventos al texto "¡Hola mundo!" que alterna su contenido cuando se hace clic sobre él.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "¡Hola mundo! Bienvenidos a MDN"
    : "¡Owww, deja de presionarme!";
  toggleClick = !toggleClick;
};
```

#### Resultado

Aquí está el resultado de ejecutar los bloques de código anteriores a través de `\{{EmbedLiveSample('agrupar_bloques_de_código_por_encabezado')}}`:

{{EmbedLiveSample('agrupar_bloques_de_código_por_encabezado')}}

Aquí hay un enlace generado a partir de estos bloques de código mediante `\{{LiveSampleLink('agrupar_bloques_de_código_por_encabezado', 'Enlace a la demostración en vivo')}}`:

{{LiveSampleLink('agrupar_bloques_de_código_por_encabezado', 'Enlace a la demostración en vivo')}}

### Agrupar bloques de código por identificador

Este HTML crea un párrafo y algunos bloques para ayudarnos a posicionar y aplicar estilo a un mensaje. Se ha añadido la cadena `live-sample___hello-world` al identificador de lenguaje `html` para este bloque de código.

```html live-sample___hello-world
<p>Una demostración sencilla del sistema de ejemplos en vivo en acción.</p>
<div class="box">
  <div id="item">¡Hola mundo! Bienvenidos a MDN</div>
</div>
```

El código CSS aplica estilo tanto a la caja como al texto de su interior. La cadena `live-sample___hello-world` se ha añadido al identificador de lenguaje `css` para este bloque de código.

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

El código JavaScript adjunta un manejador de eventos al texto "¡Hola mundo!" que lo alterna cuando se hace clic sobre él. La cadena `live-sample___hello-world` también se ha agregado al identificador de lenguaje `js` para este bloque de código.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "¡Hola mundo! Bienvenidos a MDN"
    : "¡Owww, deja de presionarme!";
  toggleClick = !toggleClick;
};
```

Obtenemos este resultado al ejecutar los bloques de código anteriores utilizando el identificador `hello-world` en la llamada a la macro `\{{EmbedLiveSample('hello-world')}}`:

{{EmbedLiveSample("hello-world")}}

### Mostrar un `<iframe>` de cierto tamaño

Usa el parámetro `height` para especificar el tamaño del elemento `<iframe>` que contiene el resultado del ejemplo en vivo.

```html
<p>Solo un texto simple aquí.</p>
```

Resultado de `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Resultado de `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Permitir funcionalidades

El parámetro `allow` se puede usar para especificar las funcionalidades permitidas en el elemento `<iframe>` que contiene el resultado del ejemplo en vivo. Los valores disponibles provienen de la [sintaxis de política de permisos para marcos](/es/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax).

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

Resultado de `\{{EmbedLiveSample("permitir_funcionalidades", "", "60", "", "", "", "fullscreen")}}`:

{{EmbedLiveSample("permitir_funcionalidades", "", "60", "", "", "", "fullscreen")}}

Resultado de `\{{EmbedLiveSample("permitir_funcionalidades", "", "60")}}`:

{{EmbedLiveSample("permitir_funcionalidades", "", "60")}}

### Mostrar un registro de entrada única

Este ejemplo muestra cómo implementar un registro simple de una sola entrada en tu ejemplo en vivo, donde el valor anterior se reemplaza cada vez que se agrega una nueva entrada al registro.

Para mayor claridad, este ejemplo separa el código de registro del código que lo usa, y muestra primero el código de registro.
En general, al implementar tus propios ejemplos, coloca los elementos de registro debajo de los demás elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar la salida del registro como parte del ejemplo proporciona una experiencia de usuario mucho mejor que usar `console.log()`.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar el resultado del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

Define la función de registro `log()`.
Esta toma como argumento el texto que se va a registrar y lo usa para reemplazar el registro existente.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Ten en cuenta que el contenido del elemento de registro se establece usando la propiedad `innerText`, la cual es más segura que usar `innerHTML`, ya que el texto registrado no se analiza como HTML (lo que podría inyectar código malicioso).

#### CSS

El CSS establece la altura del elemento de registro.

```css
#log {
  height: 20px;
}
```

#### Código de prueba de registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "qué se registra" no es tan importante.
Por lo tanto, esto se implementa fácilmente como un botón que el usuario puede presionar para incrementar un valor.

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

Presiona el botón para agregar nuevo contenido al registro.

{{EmbedLiveSample("Mostrar un registro de entrada única", "100%", "80px")}}

### Mostrar un registro que añade elementos

Este ejemplo muestra cómo implementar una "consola de registro" sencilla en tu ejemplo en vivo.
La consola añade una nueva línea al final del resultado cada vez que se agrega un registro, desplazando el nuevo elemento para que sea visible.

Para mayor claridad, este ejemplo separa el código de registro del código que lo utiliza y muestra primero el código de registro.
En general, al implementar tus propios ejemplos, coloca los elementos de registro debajo de los demás elementos de la interfaz de usuario.

> [!NOTE]
> Mostrar el resultado del registro como parte del ejemplo proporciona una experiencia de usuario mucho mejor que usar `console.log()`.
>
> Consulta [`DataTransfer.effectAllowed`](/es/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) para ver un ejemplo más completo.

#### HTML

Crea un elemento {{HTMLElement("pre")}} con un `id` de `"log"` para mostrar el resultado del registro.

```html
<pre id="log"></pre>
```

#### JavaScript

A continuación, define la función de registro `log()`.
Esta toma como argumento el texto que se va a registrar y lo agrega al contenido del elemento de registro como una nueva línea.
La función también establece el `scrollTop` del elemento con el valor de su `scrollHeight`, lo que obliga a que la nueva línea de texto del registro se desplace hasta quedar visible.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Al igual que en el ejemplo anterior, establecemos el contenido usando la propiedad `innerText`, ya que esto es menos susceptible a código malicioso que usar `innerHTML`.

#### CSS

El CSS añade barras de desplazamiento si el contenido del elemento excede su tamaño, establece la altura del elemento de registro y agrega un borde.
Ten en cuenta que el código JavaScript anterior asegura que, si el contenido excede su tamaño, la adición de nuevo texto de registro desplazará el texto hasta quedar visible.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Código de prueba del registro

Este ejemplo está diseñado para mostrar "cómo registrar", por lo que "qué se registra" no es tan importante.
Por lo tanto, esto se implementa fácilmente como un botón que el usuario puede presionar para incrementar un valor.

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

Presiona el botón para agregar nuevo contenido al registro.

{{EmbedLiveSample("Mostrar un registro que añade elementos", "100%", "180px")}}

### Mostrar un botón de reinicio

Un botón de reinicio puede ser útil para ejemplos que no se pueden restaurar a su estado inicial sin reiniciar la página.
Por ejemplo, [el ejemplo "establecer prioridad" de `Highlight.priority`](/es/docs/Web/API/Highlight/priority#result_2) necesita un botón de reinicio, ya que una vez que se ha establecido cualquiera de las prioridades, el estado inicial ya no está disponible.

Este ejemplo muestra cómo agregar un botón de reinicio al ejemplo [Mostrar un registro que añade elementos](#mostrar_un_registro_que_añade_elementos) anterior.
Ten en cuenta que el código JavaScript y CSS para el código de registro es el mismo que en el ejemplo anterior, por lo que ese código se oculta.

#### HTML

El HTML del ejemplo ahora incluye un botón de reinicio.

```html
<button id="increment" type="button">Presióname muchas veces</button>
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

Haz clic en el botón "Presióname muchas veces" varias veces.
Reinicia el ejemplo presionando el botón "Reiniciar".

{{EmbedLiveSample("Mostrar un botón de reinicio", "100%", "180px")}}

## Convenciones sobre los ejemplos en vivo

- Orden de los bloques de código
  - : Al agregar un ejemplo en vivo, los bloques de código deben estar ordenados de manera que el primero corresponda al lenguaje principal del ejemplo (si lo hay). Por ejemplo, al agregar un ejemplo en vivo para la referencia de HTML, el primer bloque debe ser HTML; al agrega un ejemplo en vivo para la referencia de CSS, debe ser CSS, y así sucesivamente.
- Nombres de los encabezados
  - : Cuando no haya ambigüedad (por ejemplo, si el bloque está en una sección "Ejemplos"), los encabezados deben ser directos e incluir únicamente el nombre del lenguaje correspondiente: HTML, CSS, JavaScript, SVG, etc. (véase arriba). No uses encabezados como "Contenido HTML" o "Contenido JavaScript". Sin embargo, si un encabezado tan corto dificulta la comprensión del contenido, usa un título más descriptivo.
- Uso de un bloque "Resultado"
  - : Después de los diferentes bloques de código, por favor usa un último bloque "Resultado" antes de utilizar la macro `EmbedLiveSample` (véase arriba). De esta manera, la semántica del ejemplo es más clara tanto para el lector como para cualquier herramienta que analice la página (por ejemplo, lectores de pantalla, rastreadores web).
