---
title: Tipos de input de HTML5
slug: Learn/Forms/HTML5_input_types
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

En el [artículo anterior](/es/docs/Learn/Forms/Basic_native_form_controls) vimos el elemento {{htmlelement("input")}} y los valores de su atributo `type`, disponibles desde los inicios de HTML. Ahora veremos en detalle la funcionalidad de los controles de formulario más recientes, incluyendo algunos tipos de input nuevos, los cuales fueron añadidos en HTML5 para permitir la recolección de tipos de datos específicos

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Formación básica en informática, y una
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >comprensión básica de HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender los valores de tipo input disponibles más recientes para crear
        controles de formulario nativos, y cómo implementarlos utilizando HTML.
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** La mayoría de las características discutidas en este artículo tienen un amplio soporte en todos los navegadores, anotaremos cualquier excepción. Si quieres más detalles referente al soporte de navegadores, deberías consultar nuestra [referéncia de elementos de formulario HTML](/es/docs/Web/HTML/Element#Forms), y en particular nuestra referéncia extensiva de [Tipos de \<input>](/es/docs/Web/HTML/Element/input).

Debido a que la apariéncia de un control de formulario puede ser algo distinta con respecto a unas especificaciones del diseñador, los desarrolladores web a veces construyen sus propios controles de formulario personalizados. Cubrimos este aspecto en un tutorial avanzado: [Cómo construir widgets de formulario personalizados](/es/docs/Learn/Forms/How_to_build_custom_form_widgets).

## Campo de dirección de correo electrónico

Este tipo de campo se define utilizando el valor `email` en el atributo [`type`](/es/docs/Web/HTML/Element/input#type) del elemento \<input>:

```html
<input type="email" id="email" name="email" />
```

Cuando se utiliza este valor [`type`](/es/docs/Web/HTML/Element/input#type) , se le obliga al usuario a escribir dentro del campo una dirección de correo electrónico válida. Cualquier otro contenido ocasiona que el navegador muestre un mensaje de error cuando se envía el formulario. Puedes verlo en acción en la siguiente captura de pantalla

![﻿An invalid email input showing the message "Please enter an email address."](email_address_invalid.png)

Puedes utilizar también el atributo [`multiple`](/es/docs/Web/HTML/Attributes/multiple) en combinación con el tipo input `email` para permitir que sean introducidas varias direcciones de correo electrónico separadas por comas en el mismo input:

```html
<input type="email" id="email" name="email" multiple />
```

En algunos dispositivos, en particular dispositivos táctiles con teclados dinámicos como los smart phones, debería presentarse un teclado virtual que es más adecuado para introducir direcciones de correo electrónico, incluyendo la tecla `@`. Mira como ejemplo la siguiente captura de pantalla del teclado de Firefox para Android:

![firefox for android email keyboard, with ampersand displayed by default.](fx-android-email-type-keyboard.jpg)

> **Nota:** Puedes encontrar ejemplos sobre los tipos de entrada de texto básicos en [Ejemplos input básicos](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (Consulta también el [código fuente](https://github.com/mdn/learning-area/blob/master/html/forms/basic-input-examples/index.html)).

Mejorar la experiéncia del usuario para usuarios con estos dispositivos, es otra buena razón para utilizar estos tipos de input más recientes.

### Validación del lado cliente

Como puedes haber visto anteriormente, `email`, junto con otros tipos de `input` más recientes, proporciona la validación de errores _en el lado cliente_ de forma predeterminada, realizados por el navegador antes de que los datos obtenidos se envíen al servidor. _Es_ una ayuda útil guiar a los usuarios a rellenar un formulario de forma precisa y puede ahorrar tiempo: es útil saber de inmediato que tu dato no es correcto, en vez de tener que esperar el viaje de ida y vuelta al servidor.

Pero _no debería ser considerado_ una medida de seguridad exhaustiva! Tus aplicaciones siempre deben realizar comprobaciones de seguridad en cada dato, tanto en el _lado servidor_ como en el lado cliente debido a que la validación en el lado cliente es muy fácil desactivarla, por lo que usuarios malintencionados pueden enviar fácilmente datos incorrectos al servidor. Lee [Seguridad en el sitio web](/es/docs/Learn/Server-side/First_steps/Website_security) para tener una idea de lo que _podría_ ocurrir; Implementar validación en el lado servidor está más allá del alcance de este módulo-guía, pero debería tenerlo en cuenta.

Ten en cuenta que `a@b` es una dirección de correo electrónico válida de acuerdo a las restricciones proporcionadaas por defecto. Esto es debido a que el tipo de input `email`, permite por defecto direcciones de correo electrónico de una intranet. Para implementar un comportamiento diferente de validación puedes utilizar el atributo [`pattern`](/es/docs/Web/HTML/Attributes/pattern), y también puedes utilizar mensajes de error personalizados; Hablaremos de cómo utilizar estas características en [Validación de formularios en el lado cliente](/es/docs/Learn/Forms/Form_validation) en un artículo posterior.

> **Nota:** Si los datos introducidos no son una dirección de correo electrónico, habrá coincidéncia con la pseudo clase {{cssxref(':invalid')}}, y la propiedad {{domxref('validityState.typeMismatch')}} devolverá `true`.

## Campo de búsqueda

Los campos de búsqueda están destinados a ser utilizados para crear cajas de búsqueda en páginas y aplicaciones. Este tipo de campo se define utilizando el valor `search` en su atributo [`type`](/es/docs/Web/HTML/Element/input#type):

```html
<input type="search" id="search" name="search" />
```

La diferéncia principal entre un campo `text` y un campo `search`, es la forma en que el navegador aplica estilo a su apariéncia. A menudo los campos `search` se muestran con bordes redondeados; y a veces también muestran una "Ⓧ", el cual despeja el campo de cualquier valor cuando se pulsa sobre él. Adicionalmente, en dispositivos con teclado dinámico, la tecla enter del teclado puede leer "**search**" o mostrar un icono de lupa.

La captura de pantalla siguiente muestra un campo de búsqueda con contenido, en Firefox 71, Safari 13, y Chrome 79 en macOS, y Edge 18 y Chrome 79 en Windows 10. Ten en cuenta que el icono de reseteo sólo aparece si el campo tiene un valor y, aparte de Safari, sólo se muestra cuando el campo tiene el foco.

![Screenshots of search fields on several platforms.](search_focus.png)

Otra característica que vale la pena señalar es que se puede guardar los valores de un campo `search` automáticamente y reutilizarse en múltiples páginas del mismo sitio web para ofrecer autocompletado. Esta característica suele ocurrir de forma automática en la mayoría de navegadores modernos.

## Campo número de teléfono

Se puede crear un campo especial para introducir números de teléfono utilizando `tel` como valor del atributo [`type`](/es/docs/Web/HTML/Element/input#type):

```html
<input type="tel" id="tel" name="tel" />
```

Cuando se accede desde un dispositivo táctil con teclados dinámicos, muchos de ellos mostrarán un teclado numérico cuando se encuentren con `type="tel"`, lo que significa que este tipo es útil no sólo para ser utilizado para números de teléfono, sino también cuando sea útil un teclado numérico.

La siguiente captura de pantalla del teclado de Firefox para Android proporciona un ejemplo:

![firefox for android email keyboard, with ampersand displayed by default.](fx-android-tel-type-keyboard.jpg)

Debido a la gran variedad de formatos de número de teléfono existentes, este tipo de campo no cumple con ningún tipo de restricción sobre el valor introducido por el usuario. (Esto significa que puede incluir letras, etc...).

Como mencionamos anteriormente, se puede utilizar el atributo [`pattern`](/es/docs/Web/HTML/Attributes/pattern) para que asuma restricciones, sobre el cuál aprenderemos en [Validación de formulario en el lado cliente](/es/docs/Learn/Forms/Form_validation).

## Campo URL

Se puede crear un tipo especial de campo para introducir URLs utilizando el valor `url` para el atributo [`type`](/es/docs/Web/HTML/Element/input#type):

```html
<input type="url" id="url" name="url" />
```

Este tipo añade restricciones de validación en el campo. El navegador informará de un error si no se introdujo el protocolo (como `http:`), o si de algún modo el URL está mal formado. En dispositivos con teclados dinámicos a menudo mostrará por defecto algunas o todas las teclas como los dos puntos, el punto, y la barra inclinada.

Mira el siguiente ejemplo tomado de Firefox para Android:

![firefox for android email keyboard, with ampersand displayed by default.](fx-android-url-type-keyboard.jpg)

> **Nota:** Solo porque el URL esté bien formado no significa necesariamente que la dirección al que hace referéncia exista!

## Campo numérico

Se pueden crear controles para introducir números con el [`type`](/es/docs/Web/HTML/Element/input#type) `number` de {{HTMLElement("input")}}. Este control se parece a un campo de texto pero solo permite números de punto flotante, y normalmente proporciona botones deslizadores para incrementar o reducir el valor del control. En dispositivos con teclados dinámicos generalmente se muestra el teclado numérico.

La siguiente captura de pantalla tomada de Firefox para Android proporciona un ejemplo:

![firefox for android email keyboard, with ampersand displayed by default.](fx-android-number-type-keyboard.jpg)

Con el tipo de input `number` puedes limitar los valores mínimo y máximo permitidos definiendo los atributos [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max).

También puedes utilizar el atributo `step` para cambiar el incremento y decremento causado por los botones deslizadores. Por defecto, el tipo de input number sólo valida si el número es un entero. Para permitir números decimales, especifica [`step="any"`](/es/docs/Web/HTML/Attributes/step). Si se omite, su valor por defecto es `1`, lo que significa que solo son válidos números enteros.

Miremos algunos ejemplos. El primero de los siguientes crea un control numérico cuyo valor está restringido a cualquier valor entre `1` y `10`, y sus botones cambian su valor en incrementos o decrementos de `2`.

```html
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

El segundo crea un control numérico cuyo valor está restringido a cualquier valor entre el `0` y `1` ambos inclusive, y sus botones cambian su valor en incrementos o decrementos de `0.01`.

```html
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

El tipo de input `number` tiene sentido cuando esté limitado el rango de valores válidos, por ejemplo la edad de una persona o su altura. Si el rango es demasiado grande para que los cambios de incremento tengan sentido ( por ejemplo los códigos postales de USA, cuyo rango va de `00001` a `99999`), entonces sería una mejor opción utilizar el tipo `tel`: proporciona el teclado numérico mientras que omite el componente de interfaz de usuario de los deslizadores de número.

> **Nota:** En versiones inferiores a la 10 de Internet Explorer no se soportan las entradas `number`

## Slider controls

Otra forma de tomar un número es usando un **slider**. Podrás observar cómo son bastantes parecidas a los sitios inmobiliarios, dónde quieres determinar un máximo de precio por propiedad y filtrar tu búsqueda en el. Observaremos un ejemplo en vivo.

{{EmbedGHLiveSample("learning-area/html/forms/range-example/index.html", '100%', 200)}}

Usage-wise, sliders are less accurate than text fields. Therefore, they are used to pick a number whose _precise_ value is not necessarily important.

A slider is created using the {{HTMLElement("input")}} with its [`type`](/es/docs/Web/HTML/Element/input#type) attribute set to the value `range`. The slider-thumb can be moved via mouse or touch, or with the arrows of the keypad.

It's important to properly configure your slider. To that end, it's highly recommended that you set the [`min`](/es/docs/Web/HTML/Attributes/min), [`max`](/es/docs/Web/HTML/Attributes/max), and [`step`](/es/docs/Web/HTML/Attributes/step) attributes which set the minimum, maximum and increment values, respectively.

Let's look at the code behind the above example, so you can see how its done. First of all, the basic HTML:

```html
<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="100"
  value="250000" />
<output class="price-output" for="price"></output>
```

This example creates a slider whose value may range between `50000` and `500000`, which increments/decrements by 100 at a time. We've given it default value of `250000`, using the `value` attribute.

One problem with sliders is that they don't offer any kind of visual feedback as to what the current value is. This is why we've included an {{htmlelement("output")}} element — to contain the current value (we'll also look at this element in the next article). You could display an input value or the output of a calculation inside any element, but `<output>` is special — like `<label>`, it can take a `for` attribute that allows you to associate it with the element or elements that the output value came from.

To actually display the current value, and update it as it changed, you must use JavaScript, but this is relatively easy to do:

```js
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", function () {
  output.textContent = price.value;
});
```

Here we store references to the `range` input and the `output` in two variables. Then we immediately set the `output`'s [`textContent`](/es/docs/Web/API/Node/textContent) to the current `value` of the input. Finally, an event listener is set to ensure that whenever the range slider is moved, the `output`'s `textContent` is updated to the new value.

> **Nota:** `range` inputs are not supported in versions of Internet Explorer below 10.

## Date and time pickers

Gathering date and time values has traditionally been a nightmare for web developers. For good user experience, it is important to provide a calendar selection UI, enabling users to select dates without necessating context switching to a native calendar application or potentially entering them in differing formats that are hard to parse. The last minute of the previous millenium can be expressed in the following different ways, for example: 1999/12/31, 23:59 or 12/31/99T11:59PM.

HTML date controls are available to handle this specific kind of data, providing calendar widgets and making the data uniform.

A date and time control is created using the {{HTMLElement("input")}} element and an appropriate value for the [`type`](/es/docs/Web/HTML/Element/input#type) attribute, depending on whether you wish to collect dates, times, or both. Here's a live example that falls back to {{htmlelement("select")}} elements in non-supporting browsers:

{{EmbedGHLiveSample("learning-area/html/forms/datetime-local-picker-fallback/index.html", '100%', 200)}}

Let's look at the different available types in brief. Note that the usage of these types is quite complex, especially considering browser support (see below); to find out the full details, follow the links below to the reference pages for each type, including detailed examples.

### `datetime-local`

[`<input type="datetime-local">`](/es/docs/Web/HTML/Element/input/datetime-local) creates a widget to display and pick a date with time with no specific time zone information.

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

### `month`

[`<input type="month">`](/es/docs/Web/HTML/Element/input/month) creates a widget to display and pick a month with a year.

```html
<input type="month" name="month" id="month" />
```

### `time`

[`<input type="time">`](/es/docs/Web/HTML/Element/input/time) creates a widget to display and pick a time value. While time may _display_ in 12-hour format, the _value returned_ is in 24-hour format.

```html
<input type="time" name="time" id="time" />
```

### `week`

[`<input type="week">`](/es/docs/Web/HTML/Element/input/week) creates a widget to display and pick a week number and its year.

Weeks start on Monday and run to Sunday. Additionally, the first week 1 of each year contains the first Thursday of that year—which may not include the first day of the year, or may include the last few days of the previous year.

```html
<input type="week" name="week" id="week" />
```

### Constraining date/time values

All date and time controls can be constrained using the [`min`](/es/docs/Web/HTML/Attributes/min) and [`max`](/es/docs/Web/HTML/Attributes/max) attributes, with further constraining possible via the [`step`](/es/docs/Web/HTML/Attributes/step) attribute (whose value varies according to input type).

```html
<label for="myDate">When are you available this summer?</label>
<input
  type="date"
  name="myDate"
  min="2013-06-01"
  max="2013-08-31"
  step="7"
  id="myDate" />
```

### Browser support for date/time inputs

You should be warned that the date and time widgets don't have the best browser support. At the moment, Chrome, Edge, and Opera support them well, but there is no support in Internet Explorer, Safari has some mobile support (but no desktop support), and Firefox supports `time` and `date` only.

The reference pages linked to above provide suggestions on how to program fallbacks for non-supporting browsers; another option is to consider using a JavaScript library to provide a date picker. Most modern frameworks have good components available to provide this functionality, and there are standalone libraries available to (see [Top date picker javascript plugins and libraries](https://flatlogic.com/blog/best-javascript-date-picker-libraries/) for some suggestions).

## Color picker control

Colors are always a bit difficult to handle. There are many ways to express them: RGB values (decimal or hexadecimal), HSL values, keywords, etc.

A `color` control can be created using the {{HTMLElement("input")}} element with its [`type`](/es/docs/Web/HTML/Element/input#type) attribute set to the value `color`:

```html
<input type="color" name="color" id="color" />
```

When supported, clicking a color control will tend to display the operating system's default color picking functionality for you to actually make your choice with. The following screenshot taken on Firefox for macOS provides an example:

![firefox for android email keyboard, with ampersand displayed by default.](fx-macos-color.jpg)

And here is a live example for you to try out:

{{EmbedGHLiveSample("learning-area/html/forms/color-example/index.html", '100%', 200)}}

The value returned is always a lowercase 6-value hexidecimal color.

> **Nota:** `color` inputs are not supported in Internet Explorer.

## Summary

That brings us to the end of our tour of the HTML5 form input types. There are a few other control types that cannot be easily grouped together due to their very specific behaviors, but which are still essential to know about. We cover those in the next article.

{{PreviousMenuNext("Learn/Forms/Basic_native_form_controls", "Learn/Forms/Other_form_controls", "Learn/Forms")}}

### Advanced Topics

- [How to build custom form controls](/es/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/es/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/es/docs/Learn/Forms/Property_compatibility_table_for_form_widgets)
