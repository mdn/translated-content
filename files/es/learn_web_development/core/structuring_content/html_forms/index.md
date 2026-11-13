---
title: Formularios y botones en HTML
short-title: Formularios y botones
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

Los formularios y botones de HTML son herramientas potentes para interactuar con los usuarios de un sitio web. Lo más habitual es que ofrezcan a los usuarios controles para manipular una interfaz de usuario (IU) o introducir datos cuando haga falta.

En este artículo te presentamos los conceptos básicos de los formularios y los botones. Hay mucho más que saber (muchos tipos de campos y características de los formularios no se mencionan), pero este artículo te dará una base sólida para la mayoría de los casos. Puedes aprender los usos avanzados o especializados a medida que los necesites, como parte del aprendizaje constante que harás a lo largo de tu carrera.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, como se explica en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >. La semántica a nivel de texto, como los <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        > y las <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >. <a href="/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >HTML estructural</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Entender que los formularios y los botones son, junto con los enlaces, las principales herramientas con las que los usuarios interactúan con un sitio web.</li>
          <li>Los distintos tipos de botones.</li>
          <li>Los tipos de <code>&lt;input&gt;</code> más habituales.</li>
          <li>Atributos habituales como <code>name</code> y <code>value</code>.</li>
          <li>El elemento <code>&lt;form&gt;</code> y los conceptos básicos del envío de formularios.</li>
          <li>Hacer que los formularios sean accesibles con etiquetas y una semántica correcta.</li>
          <li>Otros tipos de controles: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> y <code>&lt;option&gt;</code>.</li>
          <li>Conceptos básicos de la validación del lado del cliente.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interactuar con los usuarios

Hasta ahora en el curso has visto un par de formas en que los usuarios pueden interactuar con la web:

- Los [enlaces](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links) se pueden usar para navegar a distintas secciones de contenido, ya sea en la misma página o en otra.
- Los elementos [`<video>` y `<audio>`](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) suelen tener controles como reproducir/pausar, avanzar rápido, rebobinar, etc., que permiten a los usuarios consumir el contenido multimedia como quieran.

Sin embargo, estas funciones suelen facilitar interacciones en un solo sentido, en las que los usuarios consumen el contenido de forma pasiva. Está bien, pero la web es una experiencia en dos sentidos. Los usuarios de los sitios web establecen preferencias sobre cómo quieren usar el contenido y los servicios. Piden taxis y solicitan que les devuelvan la llamada. Dan su opinión y presentan quejas. Compran productos y los reciben en casa.

Para ofrecer esta experiencia en dos sentidos, tienes que usar botones y formularios.

Los botones se suelen crear con elementos {{htmlelement("button")}} de HTML (a veces también se crean con elementos {{htmlelement("input")}} cuyo atributo `type` tiene un valor como `button` o `submit`). Estos botones son de uso general: puedes conectarlos para que activen cualquier funcionalidad que quieras, con el único límite de tu imaginación y tus habilidades de programación.

Los formularios se crean con elementos como {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} y {{htmlelement("select")}}. Los elementos de formulario se pueden usar para crear controles más complejos que los que permiten los botones sencillos; por ejemplo, un menú desplegable con varias opciones que te permite elegir entre distintos temas para un elemento de la interfaz de usuario.

Pero, sobre todo, también se pueden usar para crear formularios que los usuarios rellenan cuando necesitan enviar información al servidor de un sitio web. Piensa en los sitios de comercio electrónico: cuando quieres buscar un producto para comprarlo, usas un formulario para introducir los términos de búsqueda. Cuando quieres pagar algunos artículos y finalizar la entrega, usas un formulario para introducir tu dirección postal y otro para introducir los datos de tu tarjeta de crédito.

En este artículo nos centraremos sobre todo en este uso, más tradicional, de los elementos de formulario. Ten en cuenta que los botones también se usan habitualmente dentro de los formularios para enviar al servidor los datos introducidos.

Con esta teoría importante ya vista, pasemos a explorar el código y ver cómo se implementan los botones y los formularios.

## Botones

Como adelantamos antes, los botones tienen un par de usos principales en la web. En primer lugar, se usan para activar funcionalidades, lo que resulta útil al crear controles de la IU. El botón más sencillo se implementa con el siguiente código:

```html live-sample___basic-button
<button>Presióname</button>
```

Se ve así:

{{EmbedLiveSample("basic-button", "100%", "60")}}

El texto que aparece entre las etiquetas `<button></button>` se representa dentro del botón, y el navegador le da un estilo básico para que de forma predeterminada tenga el aspecto y el comportamiento de un botón. Hasta aquí, todo bien. Sin embargo, aquí hay un problema: nuestro botón solitario no hará nada útil por sí solo. Para que haga algo útil, tendrás que ponerlo dentro de un formulario (lo veremos más adelante) o añadirle algo de JavaScript.

Por ejemplo, si aplicaras el siguiente JavaScript al botón anterior:

```html hidden live-sample___basic-button-with-js
<button>Presióname</button>
```

```js live-sample___basic-button-with-js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Presióname";
  }, 1000);
});
```

Obtendrías el siguiente resultado; prueba a hacer clic en él:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Por ahora no se espera que entiendas cómo funciona el JavaScript. Aprenderás más sobre él más adelante en el curso.

En la siguiente sección verás una demostración del segundo uso principal de los botones: enviar formularios.

## La anatomía de un formulario

Un formulario básico contiene tres cosas:

- Un elemento {{htmlelement("form")}}, que envuelve todo el resto del contenido del formulario. Todos los controles de formulario que hay dentro de las etiquetas `<form></form>` forman parte del mismo formulario, y sus datos se incluyen cuando se envía el formulario.
- Uno o más pares formados por un elemento {{htmlelement("label")}} y un elemento de control de formulario (normalmente un elemento {{htmlelement("input")}}, aunque también hay otros tipos, por ejemplo, {{htmlelement("select")}}):
  - El elemento de control de formulario permite al usuario elegir o introducir algunos datos, que se enviarán al servidor cuando se envíe el formulario.
  - El elemento `<label>` proporciona una etiqueta identificativa asociada al control de formulario, que describe los datos que hay que introducir en él.
- Un elemento {{htmlelement("button")}}, que se usa para enviar el formulario.

Veamos un ejemplo básico que incluye los tres elementos anteriores. Este formulario se podría usar para pedir el nombre y el correo electrónico de un usuario y suscribirlo a un boletín (no te preocupes: no está conectado a ningún servidor, así que por ahora no hará nada).

```html live-sample___form-anatomy
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Primer formulario</title>
  </head>
  <body>
    <form action="./submit_page" method="get">
      <h2>Suscríbete a nuestro boletín</h2>
      <p>
        <label for="name">Nombre (obligatorio):</label>
        <input type="text" name="name" id="name" required />
      </p>
      <p>
        <label for="email">Correo electrónico (obligatorio):</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <button>¡Suscríbeme!</button>
      </p>
    </form>
  </body>
</html>
```

```js hidden live-sample___form-anatomy live-sample___form-other-controls
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
```

Se ve así:

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

Si haces clic en «¡Suscríbeme!» de inmediato, verás un error de validación porque no has introducido ningún dato. Si rellenas los campos con un nombre y una dirección de correo electrónico y después haces clic en «¡Suscríbeme!», no ocurre nada: esto se debe a que impedimos que el formulario se envíe, porque eso te llevaría fuera de esta página.

Antes de seguir, copia el código HTML anterior en un archivo HTML nuevo con tu [editor de código](/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) y ábrelo en una pestaña nueva del navegador.

### El elemento `<form>`

Como dijimos antes, el elemento {{htmlelement("form")}} funciona como el envoltorio exterior del formulario y agrupa todos los controles de formulario que hay dentro. Cuando se pulsa el `<button>`, todos los datos representados por los controles de formulario se envían al servidor. El elemento `<form>` puede llevar muchos atributos, pero los dos más importantes, que hemos incluido en nuestro ejemplo, son los siguientes:

- `action`: contiene la ruta de la página a la que queremos enviar los datos del formulario para que se procesen. Más adelante, después de enviar el formulario, verás `/submit_page` incluido en la URL. También obtendrás una respuesta de error {{HTTPStatus("404")}}, porque la página no existe realmente, pero por ahora no pasa nada.
- `method`: especifica el [método](/es/docs/Web/HTTP/Reference/Methods) de transmisión de datos que quieres usar para enviar los datos del formulario al servidor. Por ahora no te preocupes demasiado por esto; el valor `get` hace que los datos se envíen como parámetros añadidos al final de la URL.

#### Revisar los datos enviados

1. Ve al ejemplo en la otra pestaña y prueba a introducir el nombre «Bob» y la dirección de correo electrónico «bob@bob.com».
2. Pulsa el `<button>`.

Los atributos `action` y `method` hacen que los datos del formulario se envíen en una URL parecida a esta:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Estructurar formularios

Puedes incluir los elementos HTML que quieras dentro de un elemento `<form>` para estructurar los propios elementos del formulario y ofrecer contenedores que seleccionar con CSS para darles estilo, etc.

En nuestro ejemplo, hemos incluido un [elemento de encabezado](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) para describir el propósito del formulario.

También hemos puesto cada par de campo y etiqueta, y el botón de envío, dentro de un {{htmlelement("p")}} independiente, para que cada uno aparezca en una línea distinta. Todos estos elementos son en línea de forma predeterminada, lo que significa que, si no lo hiciéramos, quedarían todos en la misma línea.

Es un patrón habitual para estructurar formularios. Algunas personas usan elementos `<p>` para separar los elementos de sus formularios, y otras usan elementos {{htmlelement("div")}}, {{htmlelement("section")}} o incluso {{htmlelement("li")}}. No importa demasiado, siempre que los elementos usados tengan sentido semántico. Por ejemplo, tiene sentido dividir los grupos de elementos de formulario en párrafos o secciones de contenido independientes, o incluso en elementos de una lista. Tendría menos sentido representarlos como [citas en bloque](/es/docs/Web/HTML/Reference/Elements/blockquote), [contenido aparte (_asides_)](/es/docs/Web/HTML/Reference/Elements/aside) o [direcciones](/es/docs/Web/HTML/Reference/Elements/address).

Hay un elemento especializado para agrupar elementos de formulario llamado {{htmlelement("fieldset")}}. Es útil en ciertas circunstancias, como en formularios complejos y al agrupar varias casillas de verificación y botones de opción. Más adelante veremos un par de ejemplos de `<fieldset>`.

### Elementos `<input>`

Los elementos {{htmlelement("input")}} representan los distintos datos que se introducen en el formulario. Estudiemos uno de los ejemplos de nuestro formulario básico:

```html
<input type="text" name="name" id="name" required />
```

Los atributos son los siguientes:

- `type`: especifica el tipo de control de formulario que se va a crear. Hay muchos tipos distintos de controles de formulario, desde simples campos de texto de distintos tipos hasta botones de opción, casillas de verificación y más. El tipo `text` muestra un campo de texto básico que acepta cualquier valor.
- `name`: especifica un nombre para el dato. Cuando se envía el formulario, los datos se envían en pares de nombre/valor. En cada caso, el nombre es igual al valor de este atributo `name`, y el valor es igual al texto introducido en el campo de texto.
- `id`: especifica un ID que se puede usar para identificar el elemento. En este caso, se usa para asociar el control de formulario con su `<label>`.
- `required`: especifica que hay que introducir un valor en el elemento de formulario antes de poder enviar el formulario. Solo deberías establecerlo en los campos obligatorios, no en los opcionales.

Ten en cuenta que algunos tipos de campo no suelen obtener sus valores del texto introducido en un campo. Por ejemplo, [`<input type="color">`](/es/docs/Web/HTML/Reference/Elements/input/color) muestra un widget selector de color en el que eliges un color, mientras que [`<input type="radio">`](/es/docs/Web/HTML/Reference/Elements/input/radio) muestra un botón de opción que se puede seleccionar o no.

En el caso de los botones de opción, normalmente tienes que indicar en un atributo `value` concreto el valor que se enviaría si se selecciona. Ten en cuenta que _puedes_ especificar un atributo `value` en tipos de campo como `text` y `color`: el efecto es que el valor aparece ya rellenado en el campo del formulario cuando se muestra por primera vez.

#### Los atributos `required` y `value` en acción

1. De nuevo, ve al ejemplo que cargaste en otra pestaña y prueba a enviar el formulario sin introducir ningún valor en ninguno de los campos. Verás aparecer un mensaje de error junto al campo «Nombre» que dirá algo como «Completa este campo» (variará según el navegador). Es el atributo `required` (y la validación de formularios predeterminada del navegador en el lado del cliente) en acción.
2. Ahora prueba a enviar el formulario con un nombre válido en el primer campo, pero con un valor que no sea una dirección de correo electrónico válida en el segundo campo (algo como «aaaa» servirá). Esta vez verás aparecer un mensaje de error junto al campo «Correo electrónico» que dirá algo como «Introduce una dirección de correo electrónico».
3. Prueba a editar el formulario para incluir `value="Bob"` en el primer campo. Cuando vuelvas a cargar el código, verás que el primer campo tiene el valor «Bob» introducido de forma predeterminada.

#### Campos de texto especializados

El segundo ejercicio anterior plantea una cuestión interesante. El segundo campo espera específicamente una dirección de correo electrónico y valida los valores introducidos como tal. Si vuelves a mirar el código del formulario, verás por qué: el segundo `<input>` tiene un `type` de `email`.

Hay varios tipos de campos de texto especializados, pensados para manejar tipos de datos concretos, como [`<input type="number">`](/es/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/es/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/es/docs/Web/HTML/Reference/Elements/input/tel), [`<input type="url">`](/es/docs/Web/HTML/Reference/Elements/input/url), etc.

Sigue algunos de los enlaces anteriores para averiguar para qué se usan estos tipos de campo. Echa un vistazo a nuestra referencia de [`<input>`](/es/docs/Web/HTML/Reference/Elements/input) y mira si encuentras más tipos de campos de texto especializados.

### Elementos `<label>`

Como dijimos antes, los elementos {{htmlelement("label")}} proporcionan etiquetas identificativas asociadas a los controles de formulario, que describen los datos que hay que introducir en ellos. Puedes poner el contenido de texto que quieras en los elementos `<label>`, pero deben describir con precisión qué datos espera el control de formulario asociado. La asociación se crea dando al control de formulario un atributo `id` y después dando al elemento `<label>` un atributo `for` con el mismo valor que el `id` del control.

Por ejemplo:

```html
<label for="name">Nombre (obligatorio):</label>
<input type="text" name="name" id="name" required />
```

Los elementos `<label>` son importantes por varios motivos, sobre todo porque:

- Cuando los usuarios con discapacidad visual usan un lector de pantalla para leer el contenido de una página web e interactuar con él, el lector de pantalla lee en voz alta el texto de la etiqueta asociada al llegar a cada control. Así es más fácil para los usuarios entender qué contenido hay que introducir en cada control.
- Permiten dar el foco a los elementos de formulario haciendo clic en el texto de su etiqueta, además de en los propios controles. Es especialmente útil para los usuarios de teléfonos móviles, en los que puede ser difícil seleccionar con precisión un elemento de formulario con el dedo en una pantalla táctil. En esas circunstancias resulta útil ampliar el **área de impacto**.

#### Etiquetas de formulario explícitas e implícitas

El estilo de etiqueta de formulario que viste antes se llama **etiqueta de formulario explícita**: la asociación entre el control y la etiqueta se hace de forma explícita mediante los atributos `id` y `for`. También puedes implementar una **etiqueta de formulario implícita** anidando el control dentro de la etiqueta, así:

```html
<label>
  Nombre (obligatorio):
  <input type="text" name="name" required />
</label>
```

El anidamiento crea una asociación implícita entre el control y la etiqueta, y ya no necesitas los atributos `id` y `for`.

Cualquiera de los dos enfoques está bien, pero te recomendamos usar el etiquetado explícito. Esto se debe a que la asociación explícita suele ser más fácil de identificar y entender, sobre todo a medida que tu código HTML se vuelve más complejo. Además, los lectores de pantalla (y otras tecnologías de asistencia) no siempre manejan correctamente las etiquetas implícitas.

Puedes leer más sobre las buenas prácticas de etiquetado de formularios en [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021).

### El elemento `<button>`

Cuando un elemento {{htmlelement("button")}} se incluye dentro de un elemento `<form>`, su comportamiento predeterminado es enviar el formulario, siempre que no haya datos no válidos que hagan que la validación de formularios del lado del cliente bloquee el envío. Ya viste este comportamiento al jugar con nuestro ejemplo de formulario básico.

Se pueden especificar otros comportamientos del botón mediante el atributo `type` del elemento `<button>`:

- `<button type="submit">` declara de forma explícita que un botón debe comportarse como un botón de envío. En realidad nunca necesitas declararlo, salvo que por algún motivo incluyas otros botones dentro de tu `<form>` y quieras dejar claro cuál es el botón de envío. Será muy poco habitual.
- `<button type="reset">` crea un _botón de restablecimiento_, que borra de inmediato todos los datos del formulario y lo devuelve a su estado inicial. **No uses botones de restablecimiento**: eran populares en los primeros tiempos de la web, pero suelen ser más molestos que útiles. A la mayoría de la gente le ha pasado rellenar un formulario largo y hacer clic por accidente en el botón de restablecimiento en lugar de en el de envío, lo que obliga a empezar de nuevo.
- `<button type="button">` crea un botón con el mismo comportamiento que los botones especificados fuera de los elementos `<form>`. Como vimos antes, de forma predeterminada no hacen absolutamente nada, y hace falta JavaScript para darles funcionalidad.

Aunque puedes crear estos tipos de botón con un elemento `<input>` con los mismos valores de `type` (como [`<input type="submit">`](/es/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/es/docs/Web/HTML/Reference/Elements/input/reset) y [`<input type="button">`](/es/docs/Web/HTML/Reference/Elements/input/button)), tienen muchas desventajas en comparación con sus equivalentes `<button>`. Así que deberías usar `<button>` en su lugar.

> [!NOTE]
> Scrimba<sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#enlaces_externos_o_embebidos)</sup> tiene una lección gratuita, [The very basics of forms](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn), que ofrece un repaso interactivo útil de los conceptos básicos de los formularios que vimos antes en este artículo.

## Un inciso sobre la accesibilidad

Ya hemos hablado de la importancia de las etiquetas de formulario para la accesibilidad, pero también queríamos comentar la importancia general de usar los elementos semánticos correctos para crear formularios (por ejemplo, usar un `<button>` para enviar el formulario, y no un `<div>` programado para comportarse como un `<button>`). Es perfectamente posible usar una combinación de CSS y JavaScript para que prácticamente cualquier elemento HTML parezca y se comporte como un elemento de formulario. Los desarrolladores suelen hacerlo por motivos de diseño: a algunos controles de formulario es difícil darles estilo.

Sin embargo, al hacerlo, te complicas la vida a ti y a tus usuarios. El navegador ofrece de forma predeterminada varias funciones de `<button>` y de los controles de formulario, sin necesidad de JavaScript ni de otro código adicional, para que los formularios sean más usables para todos los usuarios.

Por ejemplo:

- Las tecnologías de asistencia, como los lectores de pantalla, entienden los elementos semánticos y comunican su significado a los usuarios que no pueden verlos.
- Los controles de formulario y los botones son accesibles con el teclado de forma predeterminada. En el ejemplo anterior, prueba a moverte hacia delante y hacia atrás entre los elementos del formulario con <kbd>Tab</kbd> y <kbd>Shift</kbd> + <kbd>Tab</kbd> (lo que se llama «tabular»).
- Fíjate también en que, al tabular entre los elementos del formulario, el elemento con el foco se resalta con un contorno azul (llamado **contorno de foco**). Es una característica importante para que los usuarios de teclado sepan en qué punto del formulario están.

Si no usas los elementos semánticos correctos para implementar tus formularios, los elementos del formulario no se comportarán como esperan los usuarios y parecerán rotos. Tendrás que volver a implementar tú mismo toda esta funcionalidad, y todo eso suma.

## Otros tipos de controles

Hay muchos otros tipos de controles que puedes usar para recopilar datos en un formulario. Veamos un ejemplo algo más complejo y después lo exploraremos y explicaremos.

> [!NOTE]
> En este ejemplo, suponemos que el usuario ya está registrado y ha iniciado sesión, así que no hace falta recopilar datos como el nombre y el correo electrónico.

```html live-sample___form-other-controls
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Segundo formulario</title>
  </head>
  <body>
    <form action="./payment_page" method="get">
      <h2>Inscríbete en el encuentro</h2>
      <fieldset>
        <legend>Elige el tipo de habitación de hotel:</legend>
        <div>
          <input
            type="radio"
            id="hotelChoice1"
            name="hotel"
            value="economy"
            checked />
          <label for="hotelChoice1">Económica (+$0)</label>

          <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
          <label for="hotelChoice2">Superior (+$50)</label>

          <input
            type="radio"
            id="hotelChoice3"
            name="hotel"
            value="penthouse"
            disabled />
          <label for="hotelChoice3">Penthouse (+$150)</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Elige las clases a las que asistirás:</legend>
        <div>
          <input type="checkbox" id="yoga" name="yoga" />
          <label for="yoga">Yoga (+$10)</label>

          <input type="checkbox" id="coffee" name="coffee" />
          <label for="coffee">Tostado de café (+$20)</label>

          <input type="checkbox" id="balloon" name="balloon" />
          <label for="balloon">Arte de animales con globos (+$5)</label>
        </div>
      </fieldset>
      <p>
        <label for="transport">¿Cómo vas a llegar?:</label>
        <select name="transport" id="transport">
          <option value="">--Elige una opción--</option>
          <option value="plane">Avión</option>
          <option value="bike">Bicicleta</option>
          <option value="walk">Caminando</option>
          <option value="bus">Autobús</option>
          <option value="train">Tren</option>
          <option value="jetPack">Mochila propulsora</option>
        </select>
      </p>
      <p>
        <label for="comments">Algún otro comentario:</label>
        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
      </p>
      <p>
        <button>Continuar al pago</button>
      </p>
    </form>
  </body>
</html>
```

Se ve así:

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

Te recomendamos abrir este ejemplo en otra pestaña del navegador mientras trabajas en las próximas secciones, en las que veremos cada tipo de control por turnos. Para ello, copia el código en un archivo HTML con tu editor de código y ábrelo en una pestaña del navegador.

Antes de seguir, juega con los distintos controles del formulario en tu copia local y selecciona algunos valores. Prueba a enviar el formulario y mira cómo son los datos enviados en la URL.

### Botones de opción

Los botones de «Elige el tipo de habitación de hotel» se implementan con controles [`<input type="radio">`](/es/docs/Web/HTML/Reference/Elements/input/radio). Se muestran como un conjunto de botones en el que solo se puede seleccionar uno a la vez: no puedes seleccionar más de uno a la vez. En inglés se llaman _radio buttons_ por los botones de las radios antiguas, en las que pulsabas un botón y el que estaba seleccionado antes volvía a saltar.

El código de nuestro ejemplo es así:

```html
<fieldset>
  <legend>Elige el tipo de habitación de hotel:</legend>
  <div>
    <input
      type="radio"
      id="hotelChoice1"
      name="hotel"
      value="economy"
      checked />
    <label for="hotelChoice1">Económica (+$0)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">Superior (+$50)</label>

    <input
      type="radio"
      id="hotelChoice3"
      name="hotel"
      value="penthouse"
      disabled />
    <label for="hotelChoice3">Penthouse (+$150)</label>
  </div>
</fieldset>
```

Los campos de tipo `radio` funcionan casi igual que los de tipo `text`, pero con algunas diferencias:

- Los atributos `name` de cada conjunto de botones de opción tienen que contener el mismo valor, para asociarlos como un único conjunto. Si contienen valores distintos, en la práctica serán conjuntos separados, con valores distintos al enviarlos.
- Tienes que incluir un atributo `value` con el valor que se enviará para cada botón de opción. El valor enviado será un par de nombre/valor, pero el nombre siempre será el mismo, por ejemplo, `hotel=economy` o `hotel=superior`.
- La `<label>` de cada botón de opción debe describir esa opción de valor concreta, más que el valor general que estás seleccionando. La forma preferida de describir la elección del valor general es envolverlos en un {{htmlelement("fieldset")}}, que lleva como hijo un elemento {{htmlelement("legend")}} con la descripción.

> [!NOTE]
> Además de para estructurar y etiquetar formularios, los `fieldset` tienen otros usos, como [desactivar](#desactivar_controles_de_formulario) todo un conjunto de controles como una sola unidad.

También vale la pena señalar que hemos aplicado el atributo `checked` al primer botón de opción: esto hace que esté seleccionado cuando se carga la página por primera vez. Esto significa que siempre habrá una opción seleccionada, y no puedes deseleccionar un botón de opción sin seleccionar otro.

Prueba a quitar el atributo `checked` del primer botón de opción, guarda y vuelve a cargar, para ver qué efecto tiene. Vuelve a ponerlo antes de seguir.

#### Desactivar controles de formulario

En el ejemplo de los botones de opción, verás que el tercer botón tiene establecido el atributo `disabled`. Esto hace que el control se muestre atenuado y no se pueda seleccionar. Es útil en muchas situaciones en las que una opción normalmente está disponible, pero no en este momento. Por ejemplo, un producto podría estar agotado o, como en nuestro ejemplo, ¡todas las suites penthouse están reservadas!

Puedes establecer el atributo `disabled` en cualquier control de formulario, incluidos los elementos `<button>`. Los elementos `<fieldset>` también admiten el atributo `disabled`, lo que hace que se desactiven todos los controles de formulario que hay dentro del `fieldset`.

Prueba a establecer el atributo `disabled` en los dos elementos `<fieldset>`, guarda y vuelve a cargar, para ver qué efecto tiene. Vuelve a quitarlos antes de seguir.

### Casillas de verificación

Nuestros selectores de «clases a las que asistirás» se implementan con controles [`<input type="checkbox">`](/es/docs/Web/HTML/Reference/Elements/input/checkbox). Se muestran como un conjunto de casillas de verificación con estado activado/desactivado. A diferencia de los botones de opción, puedes seleccionar más de una a la vez.

```html
<fieldset>
  <legend>Elige las clases a las que asistirás:</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">Yoga (+$10)</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">Tostado de café (+$20)</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">Arte de animales con globos (+$5)</label>
  </div>
</fieldset>
```

Como puedes ver en los fragmentos de código, los botones de opción y las casillas de verificación se implementan de forma muy parecida (también admiten atributos `checked` para que aparezcan preseleccionados al cargar la página). También se comportan de forma bastante parecida, salvo que los botones de opción te permiten elegir cero o un elemento entre muchos, y las casillas de verificación te permiten elegir cero o más elementos entre muchos.

La diferencia principal (¡aparte del valor de `type`!) es que cada casilla de verificación tiene un valor de `name` distinto y, por lo general, no se les dan atributos `value`. En cuanto al comportamiento, esto significa que representan valores de datos distintos, mientras que un conjunto de botones de opción solo representa uno. Al enviar el formulario, cada valor se envía con el valor `on` si la casilla estaba marcada: `yoga=on`, `balloon=on`, etc.

> [!NOTE]
> Se puede cambiar el valor que se envía para una casilla de verificación dándole un atributo `value`; por ejemplo, `<input type="checkbox" id="yoga" name="yoga" value="yes" />` haría que se enviara `yoga=yes` si estuviera marcada.

### Menús desplegables

Los menús desplegables, como el control de selección «¿Cómo vas a llegar?» de nuestro ejemplo, no se implementan con un tipo de `<input>`, sino con los elementos {{htmlelement("select")}} y {{htmlelement("option")}}:

```html
<label for="transport">¿Cómo vas a llegar?:</label>
<select name="transport" id="transport">
  <option value="">--Elige una opción--</option>
  <option value="plane">Avión</option>
  <option value="bike">Bicicleta</option>
  <option value="walk">Caminando</option>
  <option value="bus">Autobús</option>
  <option value="train">Tren</option>
  <option value="jetPack">Mochila propulsora</option>
</select>
```

El elemento `<select>` envuelve todas las opciones de valor. Es donde estableces el atributo `id`, que asocia el control con su etiqueta, y el atributo `name`, que establece el nombre del dato que se enviará.

Cada valor posible del dato se representa con un elemento `<option>`, anidado dentro del elemento `<select>`. Cada elemento `<option>` puede llevar un atributo `value`, que especifica el valor que se enviará si se elige esa opción en la lista desplegable. Si no especificas un `value`, se usa como valor el texto que hay dentro de las etiquetas `<option></option>`.

También puedes dividir las opciones de un menú desplegable `<select>` en varios subgrupos con el elemento {{htmlelement("optgroup")}}. Consulta la página de referencia de este elemento para saber cómo.

> [!NOTE]
> Si quieres que una opción concreta esté seleccionada al cargar la página, puedes añadir un atributo `selected` al elemento `<option>` correspondiente.

### Campos de texto de varias líneas

Los campos de texto de varias líneas se crean con elementos {{htmlelement("textarea")}}:

```html
<label for="comments">Algún otro comentario:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Se comportan igual que los elementos `<input type="text">`, salvo que permiten introducir varias líneas de texto. El atributo `rows` especifica cuántas filas de alto tendrá el área de texto de forma predeterminada, mientras que el atributo `cols` especifica cuántas columnas de ancho tendrá. Si no se especifican, los valores usados son `cols="20"` y `rows="2"`.

La mayoría de los navegadores muestran las áreas de texto con un tirador en una esquina, que se puede usar para cambiar su tamaño. Prueba a usarlo para cambiar el tamaño del área de texto de nuestra demostración.

## Validación de formularios

Antes vimos parte de la validación básica de formularios del lado del cliente que ofrece el navegador. El atributo `required` se usa para especificar que hay que rellenar un campo antes de poder enviar el formulario; además, se comprueba que se introduce el tipo de valor correcto en tipos de valor concretos, como direcciones de correo electrónico, URL, números, etc. La validación es importante por dos motivos principales:

- Asegurarse de que los datos se envían en el formato correcto para que no provoquen errores en tu aplicación.
- Asegurarse de que los datos no provocan problemas de seguridad. Las personas malintencionadas saben enviar datos con un formato específico que, en aplicaciones inseguras, puede ejecutar comandos para borrar bases de datos o tomar el control de un sistema.

La validación de formularios es un tema enorme que queda fuera del alcance de este artículo, así que lo dejaremos aquí por ahora. Solo ten en cuenta que hay dos tipos de validación de formularios:

- La validación del lado del cliente, que ocurre en el navegador, se implementa con una combinación de atributos de validación de formularios (como `required`) y JavaScript. La validación del lado del cliente es útil para dar a los usuarios pistas inmediatas cuando han introducido datos incorrectos, pero no es tan eficaz para impedir que pasen datos maliciosos. Es demasiado fácil desactivar JavaScript o modificar el código del lado del cliente para que la validación deje de funcionar.
- La validación del lado del servidor, que ocurre en el servidor, se implementa con el lenguaje que use el servidor. Se pueden enviar mensajes mal formados a un servidor por accidente o a propósito. Lo más sensato es asegurarse de que el servidor no se fíe de nada de lo que envía un cliente, para evitar errores o problemas de seguridad causados por mensajes mal formados. La validación del lado del servidor es muy buena para detener los mensajes maliciosos, porque es más difícil manipular el código que se ejecuta en el servidor. No es tan buena para dar a los usuarios pistas sobre los datos incorrectos, porque los datos tienen que ir al servidor para validarse y después el resultado tiene que volver al cliente antes de poder avisar al usuario.

En resumen, no elijas entre la validación del lado del cliente y la del lado del servidor: necesitarás las dos. Necesitas la validación del lado del cliente para dar a los usuarios información sobre lo que introducen, y la del lado del servidor para asegurarte de que los mensajes tienen un formato que tu servidor puede manejar de forma segura. Si quieres empezar a aprender más sobre la validación, un buen punto de partida es [Validación de formularios del lado del cliente](/es/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Resumen

Eso es todo por ahora. Hay mucho más que saber sobre los formularios, pero por ahora te hemos dado suficientes conocimientos para seguir avanzando en tus estudios.

A continuación, te daremos algunas pruebas que puedes usar para comprobar si has entendido y retenido la información que te hemos dado sobre los formularios HTML.

## Véase también

- [Formularios web: trabajar con los datos del usuario](/es/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
