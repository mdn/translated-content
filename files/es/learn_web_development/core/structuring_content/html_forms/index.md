---
title: Formularios y botones en HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: f9881dd30bec0793e97782578dbb8b8d859ce9f9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

Los formularios y botones HTML son herramientas poderosas para interactuar con los usuarios de un sitio web. Principalmente, proporcionan a los usuarios controles para manipular una interfaz de usuario (UI, por sus siglas en inglés) o ingresar datos cuando sea necesario.

En este artículo, ofrecemos una introducción a los aspectos básicos de los formularios y botones. Hay mucho más que aprender (se omiten muchos tipos de entrada y características de los formularios), pero este artículo le proporcionará una base sólida para la mayoría de los casos. Puede aprender los usos avanzados o especializados según sea necesario, como parte del aprendizaje constante que realizará a lo largo de su carrera.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad básica con HTML, como se cubre en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis HTML básica</a
        >. Semántica a nivel de texto, como
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        >
        y
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >.
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >HTML estructural</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>
            Comprender que los formularios y botones son las principales herramientas
            para que los usuarios interactúen con un sitio web, junto con los
            enlaces.
          </li>
          <li>Diferentes tipos de botones.</li>
          <li>Tipos comunes de <code>&lt;input&gt;</code>.</li>
          <li>
            Atributos comunes como <code>name</code> y <code>value</code>.
          </li>
          <li>
            El elemento <code>&lt;form&gt;</code> y los aspectos básicos del envío
            de formularios.
          </li>
          <li>
            Creación de formularios accesibles con etiquetas y la semántica
            correcta.
          </li>
          <li>
            Otros tipos de controles: <code>&lt;textarea&gt;</code>,
            <code>&lt;select&gt;</code> y <code>&lt;option&gt;</code>.
          </li>
          <li>Conceptos básicos de la validación del lado del cliente.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interactuar con los usuarios

Hasta ahora en este curso, ha visto un par de formas en que los usuarios pueden interactuar con la web:

- Los [enlaces](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links) se pueden usar para navegar a diferentes secciones de contenido, ya sea en la misma página o en una página diferente.
- Los elementos [`<video>` y `<audio>`](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) generalmente cuentan con controles como reproducir/pausar, avanzar rápidamente, rebobinar, etc., que permiten a los usuarios consumir contenido multimedia como deseen.

Sin embargo, estas características tienden a facilitar las interacciones unidireccionales, con los usuarios consumiendo contenido pasivamente. Esto está bien, pero la web es una experiencia bidireccional. Los usuarios de los sitios web establecen preferencias sobre cómo quieren experimentar el contenido y los servicios. Piden taxis y solicitan que se les devuelva la llamada. Proporcionan comentarios y presentan quejas. Compran productos y los reciben en sus casas.

Para proporcionar esta experiencia bidireccional, debe utilizar botones y formularios.

Los botones se crean normalmente utilizando elementos HTML {{htmlelement("button")}} (a veces también se crean utilizando elementos {{htmlelement("input")}} con sus atributos `type` establecidos en un valor como `button` o `submit`). Estos botones son de propósito general: puede conectarlos para que activen cualquier funcionalidad que desee, limitada únicamente por su imaginación y sus habilidades de programación.

Los formularios se crean utilizando elementos como {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} y {{htmlelement("select")}}. Los elementos de formulario se pueden utilizar para crear controles más complejos de lo que permiten los botones simples, por ejemplo, un menú desplegable que contiene múltiples opciones que le permiten elegir entre diferentes temas para un elemento de la interfaz de usuario.

Sin embargo, lo más importante es que también se pueden utilizar para crear formularios para que los usuarios los rellenen cuando necesiten enviar información a un servidor de sitio web. Piense en los sitios de comercio electrónico: cuando desea buscar un producto para comprar, utiliza un formulario para ingresar los términos de búsqueda. Cuando desea pagar algunos artículos y finalizar la entrega, utiliza un formulario para ingresar su dirección postal y otro formulario para ingresar los detalles de su tarjeta de crédito.

En este artículo, nos concentraremos principalmente en este uso, más tradicional, de los elementos de formulario. Tenga en cuenta que los botones también se utilizan comúnmente dentro de los formularios para enviar los datos ingresados al servidor.

Con esta importante teoría aclarada, pasemos a explorar el código y veamos cómo se implementan los botones y los formularios.

## Botones

Como se insinuó anteriormente, los botones tienen un par de usos principales en la web. En primer lugar, se utilizan para activar la funcionalidad, lo que resulta útil al crear controles de interfaz de usuario. El botón más simple se implementa con el siguiente código:

```html live-sample___basic-button
<button>Presióname</button>
```

Esto se representa de la siguiente manera:

{{EmbedLiveSample("basic-button", "100%", "60")}}

El texto que aparece entre las etiquetas `<button></button>` se representa dentro del botón y el navegador le da un estilo básico para que tenga el aspecto y el comportamiento de un botón de forma predeterminada. Hasta ahora, todo bien. Sin embargo, aquí hay un problema: nuestro botón solitario no hará nada útil por sí solo. Para que haga algo útil, deberá colocarlo dentro de un formulario (que cubriremos más adelante) o agregar algo de JavaScript.

Por ejemplo, si aplicó el siguiente JavaScript al botón anterior:

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

Le daría la siguiente salida; intente hacer clic:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

No se espera que comprenda cómo funciona JavaScript por ahora. Aprenderá más sobre esto más adelante en el curso.

En la siguiente sección, verá una demostración del segundo uso principal de los botones: el envío de formularios.

## La anatomía de un formulario

Un formulario básico contiene tres cosas:

- Un elemento {{htmlelement("form")}}, que envuelve todo el contenido del formulario. Cualquier control de formulario dentro de las etiquetas `<form></form>` forma parte del mismo formulario, y sus datos se incluyen cuando se envía el formulario.
- Uno o más pares, cada uno de los cuales consta de un elemento {{htmlelement("label")}} y un elemento de control de formulario (generalmente un elemento {{htmlelement("input")}}, pero también hay otros tipos, por ejemplo, {{htmlelement("select")}}):
  - El elemento de control de formulario permite al usuario elegir o ingresar algunos datos, que se enviarán al servidor cuando se envía el formulario.
  - El elemento `<label>` proporciona una etiqueta de identificación asociada con el control de formulario que describe los datos que se deben ingresar en él.
- Un elemento {{htmlelement("button")}}, que se utiliza para enviar el formulario.

Veamos un ejemplo básico que incluye los tres elementos anteriores. Este formulario podría usarse para solicitar el nombre y el correo electrónico de un usuario, para registrarlo en un boletín informativo (no se preocupe, no está conectado a ningún servidor, por lo que actualmente no hará nada).

```html live-sample___form-anatomy
<form action="./submit_page" method="get">
  <h2>Suscríbase a nuestro boletín</h2>
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
```

Esto se representa de la siguiente manera:

{{EmbedLiveSample("form-anatomy", "100%", "200")}}

Debido a la forma en que funciona MDN, puede ingresar texto en los campos de entrada, pero no verá que el formulario se envíe correctamente cuando presione el botón. Para seguir las siguientes secciones, copie el código HTML anterior en un nuevo archivo HTML utilizando su [editor de código](/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) y ábralo en una nueva pestaña del navegador.

### El elemento `<form>`

Como dijimos anteriormente, el elemento {{htmlelement("form")}} actúa como el contenedor exterior del formulario, agrupando todos los controles del formulario dentro de él. Cuando se presiona el `<button>`, todos los datos representados por los controles del formulario se enviarán al servidor. El elemento `<form>` puede tener muchos atributos, pero los dos más importantes, que hemos incluido aquí, son los siguientes:

- `action`: Contiene una ruta a la página a la que queremos enviar los datos del formulario enviados para que sean procesados. Más adelante, después de enviar el formulario, verá `/submit_page` incluido en la URL. También obtendrá una respuesta de error {{HTTPStatus("404")}} porque la página no existe en realidad, pero está bien por ahora.
- `method`: Especifica el [método](/es/docs/Web/HTTP/Reference/Methods) de transmisión de datos que desea utilizar para enviar los datos del formulario al servidor. No se preocupe demasiado por esto por ahora; el valor `get` hace que los datos se envíen como parámetros adjuntos al final de la URL.

> [!CALLOUT]
>
> **Pruébalo**
>
> Vaya al ejemplo en la pestaña separada, intente ingresar un nombre de "Bob" y una dirección de correo electrónico de "bob@bob.com".
>
> Los dos atributos anteriores hacen que los datos del formulario se envíen en una URL similar a la siguiente:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Estructurando formularios

Puede incluir cualquier elemento HTML que desee dentro de un elemento `<form>` para estructurar los elementos del formulario y proporcionar contenedores para orientar con CSS para el estilo, etc.

En nuestro ejemplo, hemos incluido un [elemento de encabezado](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) para describir el propósito del formulario.

También hemos colocado cada par entrada/etiqueta y el botón de envío dentro de un {{htmlelement("p")}} separado, de modo que cada uno aparezca en una línea separada. Todos estos elementos están en línea de forma predeterminada, lo que significa que si no hiciéramos esto, todos estarían en la misma línea.

Este es un patrón común para la estructuración de formularios. Algunas personas usan elementos `<p>` para separar los elementos de su formulario, algunos usan {{htmlelement("div")}}, {{htmlelement("section")}} o incluso elementos {{htmlelement("li")}}. No importa mucho, siempre y cuando los elementos utilizados tengan sentido semántico. Por ejemplo, tiene sentido dividir los grupos de elementos de formulario en párrafos o secciones de contenido separados, o incluso en elementos de una lista. Tendría menos sentido representarlos como [citas en bloque](/es/docs/Web/HTML/Reference/Elements/blockquote), [aparte](/es/docs/Web/HTML/Reference/Elements/aside) o [direcciones](/es/docs/Web/HTML/Reference/Elements/address).

Hay un elemento especializado para agrupar elementos de formulario llamado {{htmlelement("fieldset")}}. Esto es útil en determinadas circunstancias, como en formularios complejos y al agrupar varias casillas de verificación y botones de opción. Veremos un par de ejemplos de `<fieldset>` más adelante.

### Elementos `<input>`

Los elementos {{htmlelement("input")}} representan los diferentes elementos de datos ingresados en el formulario. Estudiemos uno de los ejemplos de nuestro formulario básico:

```html
<input type="text" name="name" id="name" required />
```

Los atributos son los siguientes:

- `type`: Especifica el tipo de control de formulario que se va a crear. Hay muchos tipos diferentes de controles de formulario, desde campos de texto simples de diferentes tipos hasta botones de opción, casillas de verificación y más. El tipo `text` representa un campo de texto básico que puede aceptar cualquier valor.
- `name`: Especifica un nombre para el elemento de datos. Cuando se envía el formulario, los datos se envían en pares nombre/valor. En cada caso, el nombre es igual al valor de este atributo `name` y el valor es igual al texto ingresado en el campo de texto.
- `id`: Especifica una ID que se puede usar para identificar el elemento. En este caso, se utiliza para asociar el control de formulario con su `<label>`.
- `required`: Especifica que se debe ingresar un valor en el elemento de formulario antes de que se pueda enviar el formulario. Esto solo debe configurarse en las entradas que requiera, no en los campos opcionales.

Debe tener en cuenta que algunos tipos de entrada normalmente no obtienen sus valores del texto ingresado en un campo. Por ejemplo, [`<input type="color">`](/es/docs/Web/HTML/Reference/Elements/input/color) representa un widget de selector de color del que elige un color, mientras que [`<input type="radio">`](/es/docs/Web/HTML/Reference/Elements/input/radio) representa un control de botón de opción que se puede seleccionar o no.

En el caso de los botones de opción, generalmente necesita proporcionar el valor que se enviaría si se selecciona dentro de un atributo `value` específico. Nota que puedes especificar un atributo `value` en tipos de entrada como `text` y `color`; el efecto es que el valor se rellena previamente en el campo de formulario cuando se representa por primera vez.

> [!CALLOUT]
>
> **Pruébalo**
>
> 1. Nuevamente, vaya al ejemplo que cargó en una pestaña separada e intente enviar el formulario sin ingresar ningún valor en ninguno de los campos. Verá un mensaje de error que aparece junto al campo "Nombre" que dice algo como "Complete este campo" (variará entre los diferentes navegadores). Este es el atributo `required`, y la validación de formulario predeterminada del lado del cliente del navegador, en acción.
> 2. Ahora intente enviar el formulario con un nombre válido ingresado en el primer campo, pero un valor que no sea una dirección de correo electrónico válida en el segundo campo (algo como "aaaa" servirá). Esta vez verá un mensaje de error que aparece junto al campo "Correo electrónico" que dice algo como "Ingrese una dirección de correo electrónico".
> 3. Para este ejercicio, deberá editar el código del formulario. Puede hacer esto abriendo el ejemplo local que creó en su editor de texto, editándolo allí y guardándolo. Intente editar el formulario para incluir `value="Bob"` en la primera entrada. Cuando vuelva a cargar el código, verá que el primer campo tiene un valor de "Bob" ingresado de forma predeterminada.

#### Entradas especializadas de campo de texto

El segundo ejercicio anterior plantea un punto interesante. El segundo campo de entrada espera específicamente una dirección de correo electrónico y valida los valores ingresados como tales. Si mira el código del formulario nuevamente, verá por qué: el segundo `<input>` tiene un `type` de `email`. Hay varios tipos de entrada de campo de texto especializados diseñados para manejar tipos de datos específicos: [`<input type="number">`](/es/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/es/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/es/docs/Web/HTML/Element/input/tel), etc.

> [!CALLOUT]
>
> **Pruébalo**
>
> Siga algunos de los enlaces anteriores para averiguar para qué se utilizan estos tipos de entrada. Eche un vistazo a nuestra referencia [`<input>`](/es/docs/Web/HTML/Reference/Elements/input) y vea si puede encontrar más tipos de entrada de campo de texto especializados.

### Elementos `<label>`

Como dijimos anteriormente, los elementos {{htmlelement("label")}} proporcionan etiquetas de identificación asociadas con los controles de formulario que describen los datos que se deben ingresar en ellos. Puede poner cualquier contenido de texto que desee en los elementos `<label>`, pero deben describir con precisión qué datos espera el control de formulario asociado. La asociación se crea dando al control de formulario un atributo `id`, luego dando al elemento `<label>` un atributo `for` con el mismo valor que el `id` del control.

Por ejemplo:

```html
<label for="name">Nombre (obligatorio):</label>
<input type="text" name="name" id="name" required />
```

Los elementos `<label>` son importantes por varias razones, sobre todo porque:

- Cuando los usuarios con discapacidades visuales utilizan un lector de pantalla para ayudarles a leer e interactuar con el contenido de la página web, el lector de pantalla leerá el texto de la etiqueta asociada cuando se encuentre con cada control. Esto facilita a los usuarios la comprensión del contenido que debe introducirse en cada control.
- Permiten enfocar los elementos del formulario haciendo clic en el texto de su etiqueta, así como en los controles. Esto es especialmente útil para los usuarios de teléfonos móviles, donde puede ser difícil seleccionar con precisión un elemento de formulario con el dedo en una pantalla táctil. Ampliar el **área de impacto** es útil en tales circunstancias.

#### Etiquetas de formulario explícitas e implícitas

El estilo de etiqueta de formulario que vio anteriormente se llama **etiqueta de formulario explícita**: la asociación entre el control y la etiqueta se realiza explícitamente a través de los atributos `id` y `for`. También puede implementar una **etiqueta de formulario implícita** anidando el control dentro de la etiqueta, de esta manera:

```html
<label>
  Nombre (obligatorio):
  <input type="text" name="name" required />
</label>
```

La anidación crea una asociación implícita entre el control y la etiqueta, y ya no necesita los atributos `id` y `for`.

Cualquiera de los dos enfoques es correcto, pero recomendamos utilizar el enfoque de etiquetado explícito. Esto se debe a que la asociación explícita suele ser más fácil de identificar y comprender, especialmente a medida que su código HTML se vuelve más complejo. Además, los lectores de pantalla (y otras tecnologías de asistencia) no siempre gestionan correctamente las etiquetas implícitas.

Puede leer más sobre las prácticas recomendadas para el etiquetado de formularios en [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021).

### El elemento `<button>`

Cuando se incluye un elemento {{htmlelement("button")}} dentro de un elemento `<form>`, su comportamiento predeterminado es que enviará el formulario, siempre que no haya datos no válidos que hagan que el envío sea bloqueado por la validación del formulario del lado del cliente. Ya ha visto este comportamiento al jugar con nuestro ejemplo de formulario básico anterior.

Existen otros comportamientos de los botones que se pueden especificar a través del atributo `type` del elemento `<button>`:

- `<button type="submit">` declara explícitamente que un botón debe comportarse como un botón de envío. En realidad, nunca es necesario declarar esto, a menos que por alguna razón esté incluyendo otros botones dentro de su `<form>`, y quiera dejar claro cuál es el botón de envío. Esto será muy raro.
- `<button type="reset">` crea un _botón de reinicio_; esto elimina inmediatamente todos los datos del formulario, restableciéndolo a su estado inicial. **No utilice botones de reinicio**: solían ser populares en los primeros tiempos de la web, pero suelen ser más molestos que útiles. La mayoría de la gente ha experimentado el hecho de rellenar un formulario largo sólo para hacer clic en el botón de reinicio por accidente en lugar de en el botón de envío, lo que significa que tiene que volver a empezar.
- `<button type="button">` crea un botón con el mismo comportamiento que los botones especificados fuera de los elementos `<form>`. Como vimos antes, no hacen absolutamente nada por defecto, y se necesita JavaScript para darles funcionalidad.

> [!NOTE]
>
> También puede crear los tipos de botones anteriores utilizando un elemento `<input>` con los mismos valores de `type` especificados: [`<input type="submit">`](/es/docs/Web/HTML/Element/input/submit), [`<input type="reset">`](/es/docs/Web/HTML/Element/input/reset) y [`<input type="button">`](/es/docs/Web/HTML/Reference/Elements/input/button). Sin embargo, estos tienen muchas desventajas en comparación con sus homólogos `<button>`. Debe utilizar `<button>` en su lugar.

## Sobre la accesibilidad

Ya hemos hablado de la importancia de las etiquetas de los formularios para la accesibilidad, pero también queríamos incluir algunos comentarios sobre la importancia general de utilizar los elementos semánticos correctos para crear formularios (por ejemplo, utilizar un `<button>` para enviar su formulario, y no un `<div>` programado para comportarse como un `<button>`). Es perfectamente posible utilizar una combinación de CSS y JavaScript para hacer que prácticamente cualquier elemento HTML parezca y se comporte como un elemento de formulario. Los desarrolladores suelen hacer esto por razones de diseño: algunos controles de formulario son difíciles de diseñar.

Sin embargo, al hacer esto, está haciendo la vida más difícil para usted y para sus usuarios. El navegador proporciona varias características de `<button>` y de control de formulario por defecto, sin necesidad de JavaScript u otro código adicional, para hacer que los formularios sean más utilizables para todos los usuarios.

Por ejemplo:

- Las tecnologías de asistencia, como los lectores de pantalla, entienden los elementos semánticos y comunican su significado a los usuarios que no pueden verlos.
- Los controles de formulario y los botones son accesibles por teclado por defecto. En el ejemplo anterior, intente moverse hacia delante y hacia atrás entre los elementos del formulario utilizando <kbd>Tab</kbd> y <kbd>Shift</kbd> + <kbd>Tab</kbd> (lo que se denomina "tabulación").
- Observe también cómo la tabulación entre los elementos del formulario hace que el elemento enfocado se resalte con un contorno azul (lo que se denomina **contorno de enfoque**). Esta es una característica importante para que los usuarios del teclado sepan dónde se encuentran actualmente en el formulario.

Si no utiliza los elementos semánticos correctos para implementar sus formularios, tendrá que volver a implementar toda esta funcionalidad; de lo contrario, los elementos de su formulario no se comportarán como esperan los usuarios y, por lo tanto, parecerán rotos. Todo esto se suma.

## Otros tipos de controles

Hay muchos otros tipos de controles que puede utilizar para recopilar datos en un formulario. Veamos un ejemplo un poco más complejo y luego lo exploraremos y explicaremos.

> [!NOTE]
> En este ejemplo, asumimos que el usuario ya está registrado e iniciado la sesión, por lo que no es necesario recopilar datos como el nombre y el correo electrónico.

```html live-sample___form-other-controls
<form action="./payment_page" method="get">
  <h2>Regístrese para la reunión</h2>
  <p>
    <fieldset>
      <legend>Elija el tipo de habitación de hotel (obligatorio):</legend>
      <div>
        <input type="radio" id="hotelChoice1" name="hotel" value="economy" checked />
        <label for="hotelChoice1">Económico (+$0)</label>

        <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
        <label for="hotelChoice2">Superior (+$50)</label>

        <input type="radio" id="hotelChoice3" name="hotel" value="penthouse" disabled />
        <label for="hotelChoice3">Penthouse (+$150)</label>
      </div>
    </fieldset>
  </p>
  <p>
    <fieldset>
      <legend>Elija las clases a las que asistir:</legend>
      <div>
        <input type="checkbox" id="yoga" name="yoga" />
        <label for="yoga">Yoga (+$10)</label>

        <input type="checkbox" id="coffee" name="coffee" />
        <label for="coffee">Tostado de café (+$20)</label>

        <input type="checkbox" id="balloon" name="balloon" />
        <label for="balloon">Arte de animales con globos (+$5)</label>
      </div>
    </fieldset>
  </p>
  <p>
    <label for="transport">¿Cómo va a llegar hasta aquí?:</label>
    <select name="transport" id="transport">
      <option value="">--Por favor, elija una opción--</option>
      <option value="plane">Avión</option>
      <option value="bike">Bicicleta</option>
      <option value="walk">Caminar</option>
      <option value="bus">Autobús</option>
      <option value="train">Tren</option>
      <option value="jetPack">Jet pack</option>
    </select>
  </p>
  <p>
    <label for="comments">Algún comentario adicional:</label>
    <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
  </p>
  <p>
    <button>Continuar con el pago</button>
  </p>
</form>
```

Esto se representa de la siguiente manera:

{{EmbedLiveSample("form-other-controls", "100%", "500")}}

Recomendamos que abra este ejemplo en una pestaña separada del navegador mientras trabaja en las siguientes secciones, en las que analizaremos cada tipo de control en turno. Para lograr esto, copie el código en un archivo HTML utilizando su editor de código y ábralo en una pestaña del navegador.

> [!CALLOUT]
>
> **Pruébalo**
>
> Antes de seguir adelante, juegue con los diferentes controles del formulario, seleccione algunos valores e intente enviar el formulario.

### Botones de radio

Los botones "Elija el tipo de habitación de hotel" se implementan utilizando controles [`<input type="radio">`](/es/docs/Web/HTML/Reference/Elements/input/radio). Estos se representan como un conjunto de controles de botón en los que solo se puede seleccionar uno del conjunto a la vez; no puede seleccionar más de uno a la vez. Llevan el nombre de los botones que se encuentran en las radios antiguas, donde se presiona un botón y el seleccionado previamente vuelve a aparecer.

Nuestro código de ejemplo se ve así:

```html-nolint
<fieldset>
  <legend>Elija el tipo de habitación de hotel (obligatorio):</legend>
  <div>
    <input type="radio" id="hotelChoice1" name="hotel" value="economy" checked />
    <label for="hotelChoice1">Económico (+$0)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">Superior (+$50)</label>

    <input type="radio" id="hotelChoice3" name="hotel" value="penthouse" disabled />
    <label for="hotelChoice3">Penthouse (+$150)</label>
  </div>
</fieldset>
```

Los tipos de entrada `radio` funcionan en su mayoría de la misma manera que los tipos de entrada `text`, pero con algunas diferencias:

- Los atributos `name` para cada conjunto de botones de opción deben contener el mismo valor, para asociarlos entre sí como un solo conjunto. Si contienen valores diferentes, serán efectivamente conjuntos separados, con diferentes valores en el envío.
- Debe incluir un atributo `value` que contenga el valor a enviar para cada botón de opción. El valor enviado será un par nombre/valor, pero el nombre siempre será el mismo, por ejemplo, `hotel=economy` o `hotel=superior`.
- La etiqueta `<label>` para cada botón de opción debe describir esa elección de valor en particular, en lugar del valor general que está seleccionando. La forma preferida de proporcionar una descripción de la elección de valor general es envolverlos en un {{htmlelement("fieldset")}}, que toma un elemento {{htmlelement("legend")}} como hijo que contiene la descripción.

> [!NOTE]
> Además de estructurar y etiquetar los formularios, los _fieldsets_ tienen otros usos, como [desactivar](#disabling_form_controls) un conjunto completo de controles como una sola unidad.

También vale la pena señalar que hemos aplicado el atributo `checked` al primer botón de opción: esto hace que se seleccione cuando la página se carga por primera vez. Así es como justificamos marcar el valor del tipo de habitación de hotel como "obligatorio": siempre se seleccionará una opción y no puede deseleccionar un botón de opción sin seleccionar otro.

> [!CALLOUT]
>
> **Pruébalo**
>
> Intente eliminar el atributo `checked` del primer botón de opción, guarde y luego vuelva a cargar, para ver el efecto que tiene. Vuelva a colocarlo antes de seguir adelante.

#### Deshabilitar controles de formulario

En el ejemplo del botón de opción, notará que el tercer botón de opción tiene el atributo `disabled` configurado. Esto hace que el control renderizado se muestre en gris y no se pueda seleccionar. Esto es útil en muchas situaciones en las que una opción normalmente está disponible, pero no en este momento. Por ejemplo, un producto puede estar agotado o, como en el caso del ejemplo, ¡las suites penthouse están todas reservadas!

Puede establecer el atributo `disabled` en cualquier control de formulario, incluidos los elementos `<button>`. Los elementos `<fieldset>` también pueden aceptar el atributo `disabled`; esto hace que cada control de formulario dentro del fieldset se desactive.

> [!CALLOUT]
>
> **Pruébalo**
>
> Intente establecer el atributo `disabled` en los dos elementos `<fieldset>`, guarde y luego vuelva a cargar, para ver el efecto que tiene. Vuelva a quitarlos antes de seguir adelante.

### Casillas de verificación

Nuestros selectores "clases a las que asistir" se implementan utilizando controles [`<input type="checkbox">`](/es/docs/Web/HTML/Reference/Elements/input/checkbox). estos se representan como un conjunto de casillas de verificación de estado activado/desactivado. A diferencia de los botones de opción, puede seleccionar más de uno a la vez.

```html-nolint
<fieldset>
  <legend>Elija las clases a las que asistir:</legend>
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

Como puede ver en los fragmentos de código, los botones de opción y las casillas de verificación se implementan de una manera muy similar (también pueden tomar atributos `checked` para renderizarlos preseleccionados cuando se carga la página). También se comportan de una manera bastante similar, excepto que los botones de opción le permiten elegir cero o un elemento de muchos, y las casillas de verificación le permiten elegir cero o más elementos de muchos.

La principal diferencia (¡aparte del valor de `type`!) es que cada casilla de verificación tiene un valor de `name` diferente y generalmente no se les dan atributos `value`. En cuanto al comportamiento, esto significa que representan diferentes valores de datos, mientras que un conjunto de botones de opción solo representa uno. En el momento del envío, cada valor se envía con un valor de `on` si la casilla de verificación se marcó: `yoga=on`, `balloon=on`, etc.

> [!NOTE]
> Es posible cambiar el valor enviado para una casilla de verificación dándole un atributo `value`, por ejemplo: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` resultaría en que se enviaría `yoga=yes` si se marca. Sin embargo, no tiene mucho sentido hacer esto. Una casilla de verificación se envía con un solo valor si se marca, o no se envía en absoluto. Realmente no importa qué valor se envía al servidor.

### Menús desplegables

Los menús desplegables, por ejemplo, el control de selección "Cómo va a llegar hasta aquí" en nuestro ejemplo, se implementan no con un tipo `<input>`, sino con los elementos {{htmlelement("select")}} y {{htmlelement("option")}}:

```html-nolint
<label for="transport">¿Cómo va a llegar hasta aquí?:</label>
<select name="transport" id="transport">
  <option value="">--Por favor, elija una opción--</option>
  <option value="plane">Avión</option>
  <option value="bike">Bicicleta</option>
  <option value="walk">Caminar</option>
  <option value="bus">Autobús</option>
  <option value="train">Tren</option>
  <option value="jetPack">Jet pack</option>
</select>
```

El elemento `<select>` envuelve todas las diferentes opciones de valor. Es donde se establece el atributo `id` que asocia el control con su etiqueta, y el atributo `name` que establece el nombre del elemento de datos que se enviará.

Cada valor posible para el elemento de datos está representado por un elemento `<option>`, anidado dentro del elemento `<select>`. Cada elemento `<option>` puede tomar un atributo `value`, que especifica el valor que se enviará si esa opción se elige de la lista desplegable. Si no especifica un `value`, el texto dentro de las etiquetas `<option></option>` se utiliza como valor.

> [!NOTE]
> Si desea que una opción específica se seleccione al cargar la página, puede agregar un atributo `selected` al elemento `<option>` relevante.

### Campos de entrada de texto de varias líneas

Los campos de entrada de texto de varias líneas se crean utilizando elementos {{htmlelement("textarea")}}:

```html-nolint
<label for="comments">Algún comentario adicional:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Se comportan de la misma manera que los elementos `<input type="text">`, excepto que permiten ingresar múltiples líneas de texto. El atributo `rows` especifica la cantidad de filas de alto que tendrá el área de texto de forma predeterminada, mientras que el atributo `cols` especifica la cantidad de columnas de ancho que tendrá el área de texto de forma predeterminada. Si no se especifican, los valores utilizados son `cols="20"` y `rows="2"`.

> [!CALLOUT]
>
> **Pruébalo**
>
> La mayoría de los navegadores representan las áreas de texto con un controlador de arrastre en una esquina, que se puede utilizar para cambiar su tamaño. Intenta usar esto para cambiar el tamaño del área de texto en nuestra demostración.

## Validación de formularios

Anteriormente, analizamos algunas de las validaciones básicas de formularios del lado del cliente proporcionadas por el navegador. El atributo `required` se utiliza para especificar que un campo debe completarse antes de que se pueda enviar el formulario; también verifica que se ingrese el tipo de valor correcto para tipos de valor específicos como direcciones de correo electrónico, URL, números, etc. La validación es importante por dos razones principales:

- Asegurarse de que los datos se envíen en el formato correcto para que no causen errores en su aplicación.
- Asegurarse de que los datos no causen problemas de seguridad. Las personas malintencionadas saben cómo enviar datos formateados específicamente para que, en aplicaciones no seguras, puedan ejecutar comandos para eliminar bases de datos o tomar el control de un sistema.

La validación de formularios es un tema extenso que está fuera del alcance de este artículo, por lo que lo dejaremos aquí por ahora. Solo ten en cuenta que hay dos tipos de validación de formularios:

- Validación del lado del cliente, que se realiza en el navegador, implementada utilizando una combinación de atributos de validación de formularios (como `required`) y JavaScript. La validación del lado del cliente es útil para brindar a los usuarios sugerencias instantáneas cuando han ingresado datos incorrectos, pero no es tan eficaz para evitar que entren datos maliciosos. Es muy fácil desactivar JavaScript o alterar el código del lado del cliente para que la validación ya no funcione.
- Validación del lado del servidor, que se realiza en el servidor, implementada utilizando cualquier lenguaje que esté utilizando el servidor. Se pueden enviar mensajes con formato incorrecto a un servidor por accidente o a propósito. La sabiduría convencional es asegurarse de que su servidor no confíe en nada de lo que un cliente está enviando para evitar errores o problemas de seguridad causados ​​por mensajes con formato incorrecto. La validación del lado del servidor es excelente para detener mensajes maliciosos, ya que es más difícil manipular el código que se ejecuta en el servidor. La validación del lado del servidor no es tan buena para dar a los usuarios sugerencias sobre datos incorrectos porque los datos deben ir al servidor para ser validados, luego el resultado debe enviarse de vuelta al cliente antes de que se pueda notificar al usuario.

En resumen, no decida entre usar la validación del lado del cliente o del lado del servidor: necesitará ambas. Necesita la validación del lado del cliente para brindar a los usuarios comentarios sobre su entrada y la validación del lado del servidor para asegurarse de que los mensajes estén en un formato que su servidor pueda manejar de forma segura. Si desea comenzar a obtener más información sobre la validación, un buen lugar para comenzar es [Validación de formularios del lado del cliente](/es/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Resumen

Eso es todo por ahora. Hay mucho más que saber sobre los formularios, pero por ahora, le hemos brindado suficiente información para seguir adelante con sus estudios.

A continuación, echaremos un vistazo a cómo depurar problemas en su código HTML.

## Véase también

- [Formularios web: cómo trabajar con datos de usuario](/es/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
