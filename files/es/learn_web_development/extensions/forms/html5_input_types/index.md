---
title: Tipos de input de HTML5
slug: Learn_web_development/Extensions/Forms/HTML5_input_types
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}

En el [artículo anterior](/es/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) vimos el elemento {{htmlelement("input")}}, donde cubrimos los valores originales del atributo `type` disponibles desde los primeros días de HTML. Ahora veremos en detalle la funcionalidad de algunos tipos de input que se añadieron más tarde.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Una
        <a href="/es/docs/Learn_web_development/Core/Structuring_content"
          >comprensión básica de HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender los valores de tipo de input más recientes disponibles para
        crear controles de formulario nativos, y cómo implementarlos usando
        HTML.
      </td>
    </tr>
  </tbody>
</table>

Debido a que la apariencia de un control de formulario HTML puede ser bastante distinta de las especificaciones de un diseñador, los desarrolladores web a veces construyen sus propios controles de formulario personalizados. Cubrimos esto en un tutorial avanzado: [Cómo construir widgets de formulario personalizados](/es/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## Campo de dirección de correo electrónico

Este tipo de campo se establece usando el valor `email` en el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type):

```html hidden live-sample___email
<label for="email">Introduce tu dirección de correo electrónico:</label><br />
```

```html live-sample___email
<input type="email" id="email" name="email" />
```

{{EmbedLiveSample('email','100%','50')}}

Cuando se usa este [`type`](/es/docs/Web/HTML/Reference/Elements/input#type), el valor debe ser una dirección de correo electrónico para ser válido. Cualquier otro contenido hace que el navegador muestre un error cuando se envía el formulario. Puedes ver esto en acción en la siguiente captura de pantalla.

![Un input de correo electrónico inválido mostrando el mensaje "Please enter an email address."](email_address_invalid.png)

Puedes usar el atributo [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple) en combinación con el tipo de input `email` para permitir que se introduzcan varias direcciones de correo electrónico separadas por comas en el mismo input:

```html
<input type="email" id="email" name="email" multiple />
```

En algunos dispositivos —especialmente los dispositivos táctiles con teclados dinámicos como los teléfonos inteligentes— puede mostrarse un teclado virtual distinto, más adecuado para introducir direcciones de correo electrónico, incluyendo la tecla `@`:

![Teclado de Firefox para Android para correo electrónico, con el signo arroba mostrado por defecto.](fx-android-email-type-keyboard.jpg)

> [!NOTE]
> Puedes encontrar ejemplos de los tipos de input de texto básicos en [ejemplos de input básicos](https://mdn.github.io/learning-area/html/forms/basic-input-examples/) (consulta también el [código fuente](https://github.com/mdn/learning-area/blob/main/html/forms/basic-input-examples/index.html)).

Esta es otra buena razón para usar estos tipos de input más recientes, mejorando la experiencia de usuario para quienes utilizan estos dispositivos.

### Validación del lado del cliente

Como puedes ver arriba, `email` —junto con otros tipos de `input` más recientes— proporciona validación de errores integrada del _lado del cliente_, realizada por el navegador antes de que los datos se envíen al servidor. _Es_ una ayuda útil para guiar a los usuarios a completar un formulario correctamente, y puede ahorrar tiempo: es útil saber de inmediato que tus datos no son correctos, en lugar de tener que esperar un viaje de ida y vuelta al servidor.

Pero _no debería considerarse_ una medida de seguridad exhaustiva. Tus aplicaciones siempre deben realizar comprobaciones de seguridad sobre cualquier dato enviado por un formulario, tanto en el _lado del servidor_ como en el lado del cliente, porque la validación del lado del cliente es demasiado fácil de desactivar, por lo que los usuarios malintencionados aún pueden enviar fácilmente datos incorrectos a tu servidor. Lee [Seguridad en sitios web](/es/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) para hacerte una idea de lo que _podría_ ocurrir; implementar la validación del lado del servidor está algo fuera del alcance de este módulo, pero deberías tenerlo en cuenta.

Ten en cuenta que `a@b` es una dirección de correo electrónico válida según las restricciones predeterminadas. Esto se debe a que el tipo de input `email` permite direcciones de correo electrónico de intranet por defecto. Para implementar un comportamiento de validación diferente, puedes usar el atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern). También puedes personalizar los mensajes de error. Hablaremos de cómo usar estas características en el artículo [Validación de formularios del lado del cliente](/es/docs/Learn_web_development/Extensions/Forms/Form_validation), más adelante.

> [!NOTE]
> Si los datos introducidos no son una dirección de correo electrónico, la pseudoclase {{cssxref(':invalid')}} coincidirá, y la propiedad {{domxref('validityState.typeMismatch')}} devolverá `true`.

## Campo de búsqueda

Los campos de búsqueda están pensados para crear cajas de búsqueda en páginas y aplicaciones. Este tipo de campo se establece usando el valor `search` en el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type):

```html hidden
<label for="search">Introduce un término de búsqueda:</label><br />
```

```html
<input type="search" id="search" name="search" />
```

{{EmbedLiveSample('Campo de búsqueda','100%','50')}}

La diferencia principal entre un campo `text` y un campo `search` es la forma en que el navegador da estilo a su apariencia. En algunos navegadores, los campos `search` se renderizan con esquinas redondeadas. En algunos navegadores, se muestra un icono de borrado "Ⓧ", que borra el valor del campo al hacer clic en él. Este icono de borrado solo aparece si el campo tiene un valor y, aparte de Safari, solo se muestra cuando el campo tiene el foco. Además, en dispositivos con teclados dinámicos, la tecla intro del teclado puede mostrar "**search**", o un icono de lupa.

Otra característica que vale la pena mencionar es que los valores de un campo `search` pueden guardarse automáticamente y reutilizarse para ofrecer autocompletado en varias páginas del mismo sitio web; esto suele ocurrir automáticamente en la mayoría de los navegadores modernos.

## Campo de número de teléfono

Se puede crear un campo especial para introducir números de teléfono usando `tel` como valor del atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type):

```html hidden
<label for="tel">Introduce un número de teléfono:</label><br />
```

```html
<input type="tel" id="tel" name="tel" />
```

{{EmbedLiveSample('Campo de número de teléfono','100%','50')}}

Cuando se accede desde un dispositivo táctil con teclado dinámico, la mayoría de los dispositivos mostrarán un teclado numérico cuando se encuentre `type="tel"`, lo que significa que este tipo es útil siempre que un teclado numérico sea útil, y no tiene que usarse solo para números de teléfono.

-![Teclado de Firefox para Android para correo electrónico, con el símbolo & mostrado por defecto.](fx-android-tel-type-keyboard.jpg)

Debido a la amplia variedad de formatos de números de teléfono en todo el mundo, este tipo de campo no impone ninguna restricción sobre el valor introducido por un usuario (esto significa que puede incluir letras, etc.).

Como mencionamos antes, el atributo [`pattern`](/es/docs/Web/HTML/Reference/Attributes/pattern) puede usarse para imponer restricciones, lo cual aprenderás en [Validación de formularios del lado del cliente](/es/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Campo URL

Se puede crear un tipo especial de campo para introducir URLs usando el valor `url` en el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type):

```html hidden
<label for="url">Introduce una URL:</label><br />
```

```html
<input type="url" id="url" name="url" />
```

{{EmbedLiveSample('Campo URL','100%','50')}}

Agrega restricciones de validación especiales al campo. El navegador informará un error si no se introduce ningún protocolo (como `http:`), o si la URL está mal formada de alguna otra manera. En dispositivos con teclados dinámicos, el teclado predeterminado a menudo mostrará algunos o todos los dos puntos, el punto y la barra inclinada como teclas predeterminadas.

> [!NOTE]
> El hecho de que la URL esté bien formada no significa necesariamente que haga referencia a una ubicación que realmente exista.

## Campo numérico

Se pueden crear controles para introducir números con un [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) de {{HTMLElement("input")}} igual a `number`. Este control se parece a un campo de texto, pero solo permite números de punto flotante, y generalmente proporciona botones en forma de selector giratorio para aumentar y disminuir el valor del control. En dispositivos con teclados dinámicos, generalmente se muestra el teclado numérico.

```html hidden live-sample___number
<label for="number">Introduce un número:</label><br />
```

```html live-sample___number
<input type="number" id="number" name="number" />
```

{{EmbedLiveSample('number','100%','50')}}

Con el tipo de input `number`, puedes restringir los valores mínimo y máximo permitidos configurando los atributos [`min`](/es/docs/Web/HTML/Reference/Elements/input#min) y [`max`](/es/docs/Web/HTML/Reference/Elements/input#max).

También puedes usar el atributo `step` para establecer el incremento de aumento y disminución que provocan los botones del selector giratorio. Por defecto, el tipo de input number solo valida si el número es un entero, ya que el atributo [`step`](/es/docs/Web/HTML/Reference/Attributes/step) tiene por defecto el valor `1`. Para permitir números decimales, especifica `step="any"` o un valor específico, como `step="0.01"` para restringir el punto flotante. Si se omite, como el valor de `step` es `1` por defecto, solo son válidos los números enteros.

Veamos algunos ejemplos:

Este ejemplo crea un control numérico cuyo valor válido está restringido a un valor impar entre `1` y `10`. Los botones de aumento y disminución cambian el valor en `2`, comenzando por el valor de `min`.

```html hidden live-sample___number2
<label for="number">Introduce un número impar entre 1 y 10:</label><br />
```

```html live-sample___number2
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

{{EmbedLiveSample('number2','100%','50')}}

Este ejemplo crea un control numérico cuyo valor está restringido a cualquier valor entre `0` y `1` inclusive, y cuyos botones de aumento y disminución cambian su valor en `0.01`.

```html hidden live-sample___number3
<label for="number">Introduce un número entre 0 y 1, inclusive:</label><br />
```

```html live-sample___number3
<input type="number" name="change" id="pennies" min="0" max="1" step="0.01" />
```

{{EmbedLiveSample('number3','100%','50')}}

El tipo de input `number` tiene sentido cuando el rango de valores válidos es limitado, como la edad o la estatura de una persona. Si el rango es demasiado grande para que los incrementos tengan sentido (como los códigos postales de EE. UU., que van de `00001` a `99999`), el tipo `tel` podría ser una mejor opción; proporciona el teclado numérico sin incluir la función de selector giratorio de los números.

## Controles deslizantes

Otra forma de elegir un número es usando un **control deslizante**. Los ves con bastante frecuencia en sitios como los de compras, donde quieres establecer un precio máximo de propiedad para filtrar. Veamos un ejemplo en vivo para ilustrar esto:

{{EmbedLiveSample('Controles deslizantes','100%','50')}}

En cuanto al uso, los controles deslizantes son menos precisos que los campos de texto. Por eso se utilizan para elegir un número cuyo valor _preciso_ no es necesariamente importante.

Un control deslizante se crea usando {{HTMLElement("input")}} con su atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) establecido en el valor `range`. El control deslizante se puede mover con el ratón o el tacto, o con las flechas del teclado.

Es importante configurar correctamente tu control deslizante. Para ello, se recomienda encarecidamente establecer los atributos [`min`](/es/docs/Web/HTML/Reference/Attributes/min), [`max`](/es/docs/Web/HTML/Reference/Attributes/max) y [`step`](/es/docs/Web/HTML/Reference/Attributes/step), que establecen los valores mínimo, máximo e incremental, respectivamente.

Veamos el código detrás del ejemplo anterior, para que puedas ver cómo se hace. En primer lugar, el HTML básico:

```html
<label for="price">Elige un precio máximo de vivienda: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="1000"
  value="250000" />
<output class="price-output" for="price"></output>
```

Este ejemplo crea un control deslizante cuyo valor puede oscilar entre `50000` y `500000`, con incrementos/decrementos de 1000 a la vez. Le hemos dado un valor predeterminado de `250000`, usando el atributo `value`.

Un problema con los controles deslizantes es que no ofrecen ningún tipo de retroalimentación visual sobre cuál es el valor actual. Por eso hemos incluido un elemento {{htmlelement("output")}} para contener el valor actual. Podrías mostrar un valor de input o el resultado de un cálculo dentro de cualquier elemento, pero `<output>` es especial —al igual que `<label>`— y puede tomar un atributo `for` que te permite asociarlo con el elemento o elementos de los que proviene el valor de salida.

Para mostrar realmente el valor actual, y actualizarlo a medida que cambia, debes usar JavaScript, lo cual se puede lograr con algunas instrucciones:

```js
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});
```

```css hidden
body {
  text-align: center;
}
label,
output {
  display: block;
}
```

Aquí almacenamos referencias al input `range` y al `output` en dos variables. Luego establecemos inmediatamente el [`textContent`](/es/docs/Web/API/Node/textContent) del `output` con el `value` actual del input. Finalmente, se configura un detector de eventos para asegurar que, cada vez que se mueve el control deslizante, el `textContent` del `output` se actualice al nuevo valor.

## Selectores de fecha y hora

Generalmente, para una buena experiencia de usuario al recopilar valores de fecha y hora, es importante proporcionar una interfaz de selección de calendario. Estas permiten a los usuarios seleccionar fechas sin necesidad de cambiar de contexto a una aplicación de calendario nativa, o de introducirlas en formatos distintos que son difíciles de interpretar. El último minuto del milenio anterior se puede expresar de las siguientes formas: `1999/12/31`, `23:59`, o `12/31/99T11:59PM`.

Los controles de fecha de HTML están disponibles para manejar este tipo específico de datos, proporcionando widgets de calendario y uniformando los datos.

Un control de fecha y hora se crea usando el elemento {{HTMLElement("input")}} y un valor apropiado para el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type), dependiendo de si deseas recopilar fechas, horas, o ambas. Aquí tienes un ejemplo en vivo:

```html hidden live-sample___date1
<label for="party">Elige una fecha y hora para tu fiesta:</label>
<input type="datetime-local" id="party" name="bday" />
<span class="validity"></span>
```

```css hidden live-sample___date1
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

{{EmbedLiveSample('date1','100%','50')}}

Veamos brevemente los distintos tipos disponibles. Ten en cuenta que el uso de estos tipos es bastante complejo, especialmente si consideramos la compatibilidad con navegadores (ver más abajo); para conocer todos los detalles, sigue los enlaces de abajo a las páginas de referencia de cada tipo, que incluyen ejemplos detallados.

### `date`

[`<input type="date">`](/es/docs/Web/HTML/Reference/Elements/input/date) crea un widget para mostrar y elegir una fecha (año, mes y día, sin hora).

```html hidden
<label for="date">Introduce la fecha:</label><br />
```

```html
<input type="date" name="date" id="date" />
```

{{EmbedLiveSample('date','100%','50')}}

### `datetime-local`

[`<input type="datetime-local">`](/es/docs/Web/HTML/Reference/Elements/input/datetime-local) crea un widget para mostrar y elegir una fecha con hora, sin información de zona horaria específica.

```html hidden
<label for="month">Introduce la fecha y hora:</label><br />
```

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

{{EmbedLiveSample('datetime-local','100%','50')}}

### `month`

[`<input type="month">`](/es/docs/Web/HTML/Reference/Elements/input/month) crea un widget para mostrar y elegir un mes junto con un año.

```html hidden
<label for="month">Introduce el mes:</label><br />
```

```html
<input type="month" name="month" id="month" />
```

{{EmbedLiveSample('month','100%','50')}}

### `time`

[`<input type="time">`](/es/docs/Web/HTML/Reference/Elements/input/time) crea un widget para mostrar y elegir un valor de hora. Aunque la hora puede _mostrarse_ en formato de 12 horas, el _valor devuelto_ está en formato de 24 horas.

```html hidden
<label for="time">Introduce una hora:</label><br />
```

```html
<input type="time" name="time" id="time" />
```

{{EmbedLiveSample('time','100%','50')}}

### `week`

[`<input type="week">`](/es/docs/Web/HTML/Reference/Elements/input/week) crea un widget para mostrar y elegir un número de semana junto con su año.

Las semanas comienzan el lunes y terminan el domingo. Además, la primera semana del año contiene el primer jueves de ese año, lo cual puede no incluir el primer día del año, o puede incluir los últimos días del año anterior.

```html hidden
<label for="week">Introduce la semana:</label><br />
```

```html
<input type="week" name="week" id="week" />
```

{{EmbedLiveSample('week','100%','50')}}

### Restricción de valores de fecha y hora

Todos los controles de fecha y hora pueden restringirse usando los atributos [`min`](/es/docs/Web/HTML/Reference/Attributes/min) y [`max`](/es/docs/Web/HTML/Reference/Attributes/max), con restricciones adicionales posibles mediante el atributo [`step`](/es/docs/Web/HTML/Reference/Attributes/step) (cuyo valor varía según el tipo de input).

```html
<label for="myDate">¿Cuándo estás disponible este verano?</label><br />
<input
  type="date"
  name="myDate"
  min="2025-06-01"
  max="2025-08-31"
  step="7"
  id="myDate" />
```

{{EmbedLiveSample('Restricción de valores de fecha y hora','100%','50')}}

## Control de selector de color

Los colores siempre son un poco difíciles de manejar. Hay muchas formas de expresarlos: valores RGB (decimales o hexadecimales), valores HSL, palabras clave, etc.

Se puede crear un control `color` usando el elemento {{HTMLElement("input")}} con su atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) establecido en el valor `color`:

```html hidden
<label for="color">Elige un color:</label><br />
```

```html
<input type="color" name="color" id="color" />
```

{{EmbedLiveSample('Control de selector de color','100%','50')}}

Al hacer clic en un control de color, generalmente se muestra la funcionalidad predeterminada de selección de color del sistema operativo para que puedas elegir. El valor devuelto siempre es un color hexadecimal de 6 valores en minúsculas.

## Resumen

Con esto llegamos al final de nuestro recorrido por los tipos de input de formularios de HTML5. Hay algunos otros tipos de control que no se pueden agrupar fácilmente debido a sus comportamientos muy específicos, pero que siguen siendo esenciales de conocer. Los veremos en el próximo artículo.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Basic_native_form_controls", "Learn_web_development/Extensions/Forms/Other_form_controls", "Learn_web_development/Extensions/Forms")}}
