---
title: Mi primer formulario HTML
slug: Learn/Forms/Your_first_form
---

{{LearnSidebar}}{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

El primer artículo de nuestra serie te proporciona una primera experiencia de creación de un formulario web, que incluye diseñar un formulario sencillo con controles de formulario adecuados y otros elementos HTML, añadir un poco de estilo muy simple con CSS y describir cómo se envían los datos a un servidor. Ampliaremos cada uno de estos subtemas más adelante.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática y de
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">lenguaje HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con los formularios web, para qué se usan, cómo
        diseñarlos y qué elementos HTML básicos vas a necesitar para casos
        sencillos.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué son los formularios web?

Los **formularios web** son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Los formularios permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento (consulta [Enviar los datos de un formulario](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) más adelante en el módulo), o se usan en el lado del cliente para provocar de alguna manera una actualización inmediata de la interfaz (por ejemplo, se añade otro elemento a una lista, o se muestra u oculta una función de interfaz de usuario).

El HTML de un **formulario web** está compuesto por uno o más **controles de formulario** (a veces llamados **widgets**), además de algunos elementos adicionales que ayudan a estructurar el formulario general; a menudo se los conoce como **formularios HTML**. Los controles pueden ser campos de texto de una o varias líneas, cajas desplegables, botones, casillas de verificación o botones de opción, y se crean principalmente con el elemento {{htmlelement("input")}}, aunque hay algunos otros elementos que también hay que conocer.

Los controles de formulario también se pueden programar para forzar la introducción de formatos o valores específicos (**validación de formulario**), y se combinan con etiquetas de texto que describen su propósito para los usuarios con y sin discapacidad visual.

## Diseñar tu formulario

Antes de comenzar a escribir código, siempre es mejor dar un paso atrás y tomarte el tiempo necesario para pensar en tu formulario. Diseñar una maqueta rápida te ayudará a definir el conjunto de datos adecuado que deseas pedirle al usuario que introduzca. Desde el punto de vista de la experiencia del usuario (UX), es importante recordar que cuanto más grande es tu formulario, más te arriesgas a frustrar a las personas y perder usuarios. Tiene que ser simple y conciso: solicita solo los datos que necesitas.

Diseñar formularios es un paso importante cuando creas un sitio web o una aplicación. Va más allá del alcance de este artículo exponer la experiencia de usuario de los formularios, pero si deseas profundizar en ese tema, puedes leer los artículos siguientes:

- Smashing Magazine tiene algunos [artículos muy buenos sobre formularios UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), incluido el artículo —antiguo pero relevante— [An Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) \[Amplia guía de usabilidad para formularios web].
- UXMatters también es un recurso que da buenos consejos, desde [buenas prácticas básicas](http://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) hasta cuestiones complejas como los [formularios de varias páginas](http://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

En este artículo, vamos a crear un formulario de contacto sencillo. Hagamos un esbozo.

![Esbozo aproximado del formulario que vamos a construir](/files/4579/form-sketch-low.jpg)

Nuestro formulario va a tener tres campos de texto y un botón. Le pedimos al usuario su nombre, su correo electrónico y el mensaje que desea enviar. Al pulsar el botón sus datos se enviarán a un servidor web.

## Aprendizaje activo: La implementación de nuestro formulario HTML

De acuerdo, intentemos crear el HTML para nuestro formulario. Vamos a utilizar los elementos HTML siguientes: {{HTMLelement("form")}}, {{HTMLelement("label")}}, {{HTMLelement("input")}}, {{HTMLelement("textarea")}} y {{HTMLelement("button")}}.

Antes de continuar, haz una copia local de nuestra [plantilla HTML simple](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html): introduce aquí tu formulario HTML.

### El elemento {{HTMLelement("form")}}

Todos los formularios comienzan con un elemento {{HTMLelement("form")}}, como este:

```html
<form action="/my-handling-form-page" method="post"></form>
```

Este elemento define formalmente un formulario. Es un elemento contenedor, como un elemento {{HTMLelement("section")}} o {{HTMLelement("footer")}}, pero específico para contener formularios; también admite algunos atributos específicos para la configuración de la forma en que se comporta el formulario. Todos sus atributos son opcionales, pero es una práctica estándar establecer siempre al menos los atributos [`action`](/es/docs/Web/HTML/Attributes/action) y [`method`](/es/docs/Web/HTML/Attributes/method):

- El atributo `action` define la ubicación (URL) donde se envían los datos que el formulario ha recopilado cuando se validan.
- El atributo `method` define con qué método HTTP se envían los datos (generalmente `get` o `post`).

> **Nota:** Veremos cómo funcionan esos atributos en nuestro artículo [Enviar los datos de un formulario](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) que encontrarás más adelante.

Por ahora, añade el elemento {{htmlelement("form")}} anterior a tu elemento HTML {{htmlelement("body")}}.

### Los elementos {{HTMLelement("label")}}, {{HTMLelement("input")}} y {{HTMLelement("textarea")}}

Nuestro formulario de contacto no es complejo: la parte para la entrada de datos contiene tres campos de texto, cada uno con su elemento {{HTMLelement("label")}} correspondiente:

- El campo de entrada para el nombre es un {{HTMLelement("input/text", "campo de texto de una sola línea")}}.
- El campo de entrada para el correo electrónico es una {{HTMLelement ("input/email", "entrada de datos de tipo correo electrónico")}}: un campo de texto de una sola línea que acepta solo direcciones de correo electrónico.
- El campo de entrada para el mensaje es {{HTMLelement("textarea")}}; un campo de texto multilínea.

En términos de código HTML, para implementar estos controles de formulario necesitamos algo como lo siguiente:

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li>
      <label for="msg">Mensaje:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
```

Actualiza el código de tu formulario para que se vea como el anterior.

Los elementos {{HTMLelement("li")}} están ahí para estructurar nuestro código convenientemente y facilitar la aplicación de estilo (ver más adelante en el artículo). Por motivos de usabilidad y accesibilidad incluimos una etiqueta explícita para cada control de formulario. Ten en cuenta el uso del atributo [`for`](/es/docs/Web/HTML/Attributes/for) en todos los elementos {{HTMLelement("label")}}, que toma como valor el [`id`](/es/docs/Web/HTML/Attributes/id) del control de formulario con el que está asociado; así es como asocias un formulario con su etiqueta.

Hacer esto presenta muchas ventajas porque la etiqueta está asociada al control del formulario y permite que los usuarios con ratón, panel táctil y dispositivos táctiles hagan clic en la etiqueta para activar el control correspondiente, y también proporciona accesibilidad con un nombre que los lectores de pantalla leen a sus usuarios. Encontrarás más detalles sobre las etiquetas de los formularios en [Cómo estructurar un formulario web](/es/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form).

En el elemento {{HTMLelement("input")}}, el atributo más importante es `type`. Este atributo es muy importante porque define la forma en que el elemento {{HTMLelement("input")}} aparece y se comporta. Encontrarás más información sobre esto en el artículo sobre [Controles de formularios nativos básicos](/es/docs/Learn/HTML/Forms/The_native_form_widgets) más adelante.

- En nuestro ejemplo sencillo, usamos el valor {{HTMLelement("input/text")}} para la primera entrada, el valor predeterminado para este atributo. Representa un campo de texto básico de una sola línea que acepta cualquier tipo de entrada de texto.
- Para la segunda entrada, usamos el valor {{HTMLelement("input/email")}}, que define un campo de texto de una sola línea que solo acepta una dirección de correo electrónico. Esto convierte un campo de texto básico en una especie de campo «inteligente» que efectúa algunas comprobaciones de validación de los datos que el usuario escribe. También hace que aparezca un diseño de teclado más apropiado para introducir direcciones de correo electrónico (por ejemplo, con un símbolo @ por defecto) en dispositivos con teclados dinámicos, como teléfonos inteligentes. Encontrarás más información sobre la validación de formularios en el artículo de [Validación de formularios por parte del cliente](/es/docs/Learn/HTML/Forms/Validacion_formulario_datos) más adelante.

Por último, pero no por ello menos importante, ten en cuenta la sintaxis de `<input>` en contraposición con la de `<textarea></textarea>`. Esta es una de las rarezas del HTML. La etiqueta `<input>` es un elemento vacío, lo que significa que no necesita una etiqueta de cierre. El elemento {{HTMLElement("textarea")}} no es un elemento vacío, lo que significa que debe cerrarse con la etiqueta de cierre adecuada. Esto tiene un impacto en una característica específica de los formularios: el modo en que defines el valor predeterminado. Para definir el valor predeterminado de un elemento {{HTMLElement("input")}}, debes usar el atributo [`value`](/es/docs/Web/HTML/Attributes/value) de esta manera:

```html
<input type="text" value="por defecto este elemento se llena con este texto" />
```

Por otro lado, si deseas definir un valor predeterminado para un elemento {{HTMLElement("textarea")}}, lo colocas entre las etiquetas de apertura y cierre del elemento {{HTMLElement("textarea")}}, así:

```html
<textarea>
Por defecto, este elemento contiene este texto
</textarea>
```

### El elemento {{HTMLelement("button")}}

El marcado de nuestro formulario está casi completo; solo necesitamos añadir un botón para permitir que el usuario envíe sus datos una vez que haya completado el formulario. Esto se hace con el elemento {{HTMLelement("button")}}; añade lo siguiente justo encima de la etiqueta de cierre `</form>`:

```html
<li class="button">
  <button type="submit">Envíe su mensaje</button>
</li>
```

El elemento {{htmlelement("button")}} también acepta un atributo de `type`, que a su vez acepta uno de estos tres valores: `submit`, `reset` o `button`.

- Un clic en un botón `submit` (el valor predeterminado) envía los datos del formulario a la página web definida por el atributo `action` del elemento {{HTMLelement("form")}}.
- Un clic en un botón `reset` restablece de inmediato todos los controles de formulario a su valor predeterminado. Desde el punto de vista de UX, esto se considera una mala práctica, por lo que debes evitar usar este tipo de botones a menos que realmente tengas una buena razón para incluirlos.
- Un clic en un botón `button` no hace... ¡nada! Eso suena tonto, pero es muy útil para crear botones personalizados: puedes definir su función con JavaScript.

> **Nota:** También puedes usar el elemento {{HTMLElement("input")}} con el atributo `type` correspondiente para generar un botón, por ejemplo `<input type="submit">`. La ventaja principal del elemento {{HTMLelement("button")}} es que el elemento {{HTMLelement("input")}} solo permite texto sin formato en su etiqueta, mientras que el elemento {{HTMLelement("button")}} permite contenido HTML completo, lo que permite generar botones creativos más complejos.

## Aplicar estilo básico a un formulario

Ahora que has terminado de escribir el código HTML de tu formulario, guárdalo y observa lo que ocurre en un navegador. Por ahora, se verá bastante feo.

> **Nota:** Si crees que no has escrito bien el código HTML, compáralo con nuestro ejemplo final: véase [first-form.html](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form.html) ([ver en vivo](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)).

Resulta notablemente difícil aplicar estilo a los formularios. Está más allá del alcance de este artículo enseñarte cómo aplicar estilo a los formularios en detalle, por lo que por el momento solo vamos a exponer cómo añadir un poco de CSS para que se vea un poco bien.

En primer lugar, añade un elemento {{htmlelement("style")}} a tu página, dentro de la cabecera del HTML. Debe quedar así:

```html
<style></style>
```

Dentro de las etiquetas `style`, añade el código CSS siguiente:

```css
form {
  /* Centrar el formulario en la página */
  margin: 0 auto;
  width: 400px;
  /* Esquema del formulario */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Tamaño y alineación uniforme */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* Para asegurarse de que todos los campos de texto tienen la misma configuración de letra
     Por defecto, las áreas de texto tienen un tipo de letra monoespaciada */
  font: 1em sans-serif;

  /* Tamaño uniforme del campo de texto */
  width: 300px;
  box-sizing: border-box;

  /* Hacer coincidir los bordes del campo del formulario */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Destacado adicional para elementos que tienen el cursor */
  border-color: #000;
}

textarea {
  /* Alinear los campos de texto multilínea con sus etiquetas */
  vertical-align: top;

  /* Proporcionar espacio para escribir texto */
  height: 5em;
}

.button {
  /* Alinear los botones con los campos de texto */
  padding-left: 90px; /* mismo tamaño que los elementos de la etiqueta */
}

button {
  /* Este margen adicional representa aproximadamente el mismo espacio que el espacio
     entre las etiquetas y sus campos de texto */
  margin-left: 0.5em;
}
```

Guarda y vuelve a cargar, y observa que tu formulario presenta un aspecto mucho menos feo.

> **Nota:** Puedes encontrar nuestra versión en GitHub en [first-form-styled.html](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form-styled.html) ([ver en vivo](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form-styled.html)).

## Enviar los datos del formulario a un servidor web

La última parte, y quizás la más complicada, es manejar los datos del formulario en el lado del servidor. El elemento {{HTMLelement("form")}} define dónde y cómo enviar los datos gracias a los atributos [`action`](/es/docs/Web/HTML/Attributes/action) y [`method`](/es/docs/Web/HTML/Attributes/method).

Proporcionamos un nombre ([`name`](/es/docs/Web/HTML/Attributes/name)) a cada control de formulario. Los nombres son importantes tanto en el lado del cliente como del servidor; le dicen al navegador qué nombre debe dar a cada dato y, en el lado del servidor, dejan que el servidor maneje cada dato por su nombre. Los datos del formulario se envían al servidor como pares de nombre/valor.

Para poner nombre a los diversos datos que se introducen en un formulario, debes usar el atributo `name` en cada control de formulario que recopila un dato específico. Veamos de nuevo algunos de nuestros códigos de formulario:

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Mensaje:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    ...
  </ul>
</form>
```

En nuestro ejemplo, el formulario envía tres datos denominados «`user_name`», «`user_email`» y «`user_message`». Esos datos se envían a la URL «`/my-handling-form-page`» utilizando el método [`post` de HTTP](/es/docs/Web/HTTP/Methods/POST).

En el lado del servidor, la secuencia de comandos de la URL «`/my-handling-form-page`» recibe los datos como una lista de tres elementos clave/valor contenidos en la solicitud HTTP. La forma en que este script maneja esos datos depende de ti. Cada lenguaje de servidor (PHP, Python, Ruby, Java, C#, etc.) tiene su propio mecanismo de manipulación de datos de formulario. No profundizaremos sobre el tema en esta guía, pero si deseas obtener más información, proporcionamos algunos ejemplos en nuestro artículo [Enviar los datos de un formulario](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data) que encontrarás más adelante.

## Resumen

¡Enhorabuena!, has creado tu primer formulario web. Debería verse así:

```html hidden
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="user_name" />
  </div>
  <div>
    <label for="mail">Correo electrónico:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
  <div>
    <label for="msg">Mensaje:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>
  <div class="button">
    <button type="submit">Envia tu mensaje</button>
  </div>
</form>
```

```css hidden
form {
  /* Just to center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* To see the limits of the form */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
div + div {
  margin-top: 1em;
}
label {
  /* To make sure that all label have the same size and are properly align */
  display: inline-block;
  width: 90px;
  text-align: right;
}
input,
textarea {
  /* To make sure that all text field have the same font settings
     By default, textarea are set with a monospace font */
  font: 1em sans-serif;
  /* To give the same size to all text field */
  width: 300px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
}
input:focus,
textarea:focus {
  /* To give a little highlight on active elements */
  border-color: #000;
}
textarea {
  /* To properly align multiline text field with their label */
  vertical-align: top;
  /* To give enough room to type some text */
  height: 5em;
  /* To allow users to resize any textarea vertically
     It works only on Chrome, Firefox and Safari */
  resize: vertical;
}
.button {
  /* To position the buttons to the same position of the text fields */
  padding-left: 90px; /* same size as the label elements */
}
button {
  /* This extra margin represent the same space as the space between
     the labels and their text fields */
  margin-left: 0.5em;
}
```

{{EmbedLiveSample('', '100%', '240')}}

Pero esto es solo el comienzo: ahora ha llegado el momento de profundizar en el tema. Los formularios tienen mucho más potencial de lo que hemos visto aquí y los artículos siguientes de este módulo te ayudarán a dominarlo.

{{NextMenu("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms")}}

### Temas avanzados

- [Cómo construir controles de formulario personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Enviar formularios a través de JavaScript](/es/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Tabla de compatibilidad para las propiedades de los controles de formulario](/es/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)
