---
title: <input type="number">
slug: Web/HTML/Element/input/number
translation_of: Web/HTML/Element/input/number
browser-compat: html.elements.input.input-number
---

{{HTMLRef("Input_types")}}

Los elementos {{HTMLElement("input")}} del tipo **`number`** son usados para permitir al usuario ingresar un número. Éstos incluyen validación incorporada para rechazar entradas no numéricas. El navegador puede optar por proveer flechas de pasos para permitir al usuario, usando su ratón o símplemente pulsando con la punta del dedo, incrementar y decrementar el valor.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

En navegadores que no soportan entradas de tipo `number`, una entrada `number` recurre al tipo `text`.

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">Value</a></strong></td>
   <td>Un {{jsxref("Number")}} representando un número, o vacío.</td>
  </tr>
  <tr>
   <td><strong>Eventos</strong></td>
   <td>{{domxref("HTMLElement/change_event", "change")}} e {{domxref("HTMLElement/input_event", "input")}}</td>
  </tr>
  <tr>
   <td><strong>Atributos comunes que soporta</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}</td>
  </tr>
  <tr>
   <td><strong>Atributos IDL</strong></td>
   <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code></td>
  </tr>
  <tr>
   <td><strong>Métodos</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepUp", "stepUp()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}</td>
  </tr>
 </tbody>
</table>

## Valor

Un {{jsxref("Number")}} representando el valor del número ingresado en la entrada. Tú puedes colocar el valor por omisión para la entrada incluyendo un número dentro del atributo {{htmlattrxref("value", "input")}}, de esta manera:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Additional attributes

Además de los atributos comúnmente soportados por todos los tipos de {{HTMLElement("input")}}, las entradas de tipo `number` soportan estos atributos:

### `list`

Los valores del atributo lista es el {{domxref("Element.id", "id")}} de un elemento {{HTMLElement("datalist")}} localizado en el mismo documento. {{HTMLElement("datalist")}} proporciona una lista de valores predefinidos sugeridos al usuario para esta entrada. Cualquier valor de esta lista que no sea compatable con el {{htmlattrxref("type", "input")}} no es incluido entre las sugerencias. Los valores proporcionados son sugerencias, no requeridos: los usuarios pueden seleccionar un valor de la lista o proporcionar uno diferente.

## `max`

El valor máximo a aceptar para esta entrada. Si el {{htmlattrxref("value", "input")}} ingresado en el elemento lo excede, el elemento falla la [validación de restricciones](/es/docs/Web/Guide/HTML/Constraint_validation). Si el valor del atributo `max` no es un número, entonces el elemento no tiene un valor máximo.

Este valor debe ser mayor que o igual al valor del atributo `min`.

### `min`

El valor mínimo a aceptar para esta entrada. Si el {{htmlattrxref("value", "input")}} del elemento es menor, el elemento falla la [validación de restricciones](/es/docs/Web/Guide/HTML/Constraint_validation). Si el valor del atributo `min` no es un número, entonces el elemento no tiene un valor mínimo.

Este valor debe ser menor que o igual al valor del atributo `max`.

### `placeholder`

El atributo `placeholder` es una cadena de texto que proporciona una pista corta al usuario sobre qué tipo de información se espera en la entrada. Debe ser una palabra o una frase corta que muestre el tipo de dato esperado, y no un mensaje explicatorio. El texto _no tiene_ que incluir avances de línea.

Si el controlador de contenido no tiene direccionalidad ({{Glossary("LTR")}} o {{Glossary("RTL")}}), pero necesitas presentar el marcador de posición en la direccionalidad opuesta, puedes usar el algoritmo bidireccional para formatear caracteres Unicode para sobreescribir la direccionalidad del marcador de posición; véase [Cómo usar los controles Unicode para texto bidireccional](https://www.w3.org/International/questions/qa-bidi-unicode-controls) para más información.

> **Nota**: Evita usar el atributo `placeholder` si tu puedes. No es semánticamente útil como otras formas de explicar tu formulario, y puede causar problemas técnicos imprevisto con tu contenido. Véase {{SectionOnPage("/es/docs/Web/HTML/Element/input", "Marcadores y parámetros de ejemplo")}} para más información.

### `readonly`

Un atributo booleano el cuál, si está presente, expresa que este campo no puede ser editado por el usuario. Este `value` puede todavía cambiarse con JavaScript directamente estableciendo la propiedad {{domxref("HTMLInputElement")}} `value`.

> **Nota**: A causa de que una entrada solo de lectura no puede tener un valor, `required` no tiene ningún efecto en entradas con el atributo `readonly`.

### `step`

El atributo `step` es un número que especifica la granularidad a la que debe adherirse el valor, o el valor especial `any`, el cual es descrito abajo. Solo valores que sean iguales a la base del escalonado ([`min`](#min) si es especificado, si no {{htmlattrxref("value", "input")}}, y un valor por omisión apropiado si ninguno de esos es provisto) son válidos.

Un valor de cadena `any` significa que ningún escalonado es implicado, y cualquier valor es permitido (salvo otras restricciones, tales como [`min`](#min) and [`max`](#max)).

> **Nota**: Cuando los datos ingresados por el usuario no se adhieran a la configuración de escalonado, el {{Glossary("user agent")}} puede redondear al valor válido más cercano, prefiriendo numeros en la dirección positiva cuando hayan dos opciones igualmente cercanas.

El valor por omisión para entradas `number` es `1`, permitiendo solo ingresar números enteros, _a menos que_ la base del escalonado no sea un entero.

## Usar entradas numéricas

La entrada de tipo `number` solo deben usarse para números incrementales, especialmente cuando los botones para incrementar y desincrementar son útiles para la experiencia del usuario. La entradas de tipo `number` no son apropiadas para valores que solo consisten en números, pero que no son estrictamente hablando un número, como códigos postales o números de tarjeta de crédito. Para entradas no numéricas, considera usar un tipo de entrada diferente, como [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel) o otros tipos de {{HTMLElement('input')}} con el atributo {{HTMLAttrXref('inputmode')}}:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

Los elementos `<input type="number">` puede ayudar a simplificar tu trabajo cuando construyes la interfaz de usuario y la lógica para introducir números en un formulario. Cuando tu creas una entrada de tipo número con el valor `type` indicado, `number`, consigues validación automática de que el texto introducido es un número y usualmente un conjunto de botones arriba/abajo para incrementar o disminuir el valor.

> **Advertencia:** Ten en mente que, lógicamente, no deberías poder ingresar otros caracteres que no sean números dentro de una entrada numérica. Parece haber algo de desacuerdo acerca de esto entre navegadores; ver {{bug(1398528)}}.

> **Nota:** Un usuario puede jugar con tu HTML tras bambalinas, así que tu sitio _no debe_ usar validación simple del lado del cliente para ningún fin de seguridad. Tú _debes_ verificar en el lado del servidor cualquier transacción en la cual el valor provisto pueda tener alguna implicación de seguridad de cualquier tipo.

Los navegadores de móviles ayudan más con la experiencia de usuario mostrando un teclado especial mejor adaptado para ingresar números cuando el usuario intenta ingresar un valor.

### Una entrada numérica simple

En su forma más básica, una entrada numérica puede ser implementada así:

```html
<label for="ticketNum">Número de tickets que tu gustaría comprar:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_simple_number_input', 600, 40)}}

Una entrada numérica es considerada válida cuando está vacía y cuando un único número es ingresado, pero en cualquier otro caso será inválida. Si el atributo {{htmlattrxref("required", "input")}} es usado, la entrada ya no es considerada válida cuando está vacía.

> **Nota**: Cualquier número es un valor aceptable, en la medida de que sea un [número de coma flotante válido](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number), es decir, que no sea [NaN](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN) o [Infinity](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

### Marcadores de posición

Algunas veces es de ayuda ofrecer una indicación contextual sobre qué forma deben tomar los datos de entrada. Esto puede ser especialmente importante si el diseño de la página no ofrece etiquetas descriptivas para cada {{HTMLElement("input")}}. Es aquí donde entran los **marcadores de posición**. Un marcador de posición es un valor comúnmente usado para proveer un indicio del formato que la entrada debe tomar por `value`. Este es mostrado dentro de la caja de edición cuando el `value` del elemento es `""`. Una vez que los datos son ingresados dentro de la caja, la marca de posición desaparece; si la caja se vacía, la marca de lugar reaparece.

Aquí, tenemos una entrada `number` con el marcador de posición "`Múltiple de 10`". Nota cómo el marcador de posición desaparece y reaparece conforme manipulas el contenido del campo de edición.

```html
<input type="number" placeholder="Múltiple de 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Controlando el tamaño del escalón

Por defecto, los botones arriba y abajo provistos para que cambies el número pasarán el valor arriba y abajo de 1 en 1. Puedes cambiar esto con el atributo {{htmlattrxref("step", "input")}}, el cual toma como valor un número que especifica la cantidad de escalones. Tomando nuestro ejemplo de arriba, este contiene un marcador de posición que indica que el valor debe ser un múltiplo de 10; por lo tanto, tiene sentido agregar un valor a `step` de `10`:

```html
<input type="number" placeholder="Múltiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

En este ejemplo, verás que las flechas de subir y bajar escalón incrementan y decrementan el valor por 10 cada vez, y no por 1. Aún puedes ingresar manualmente un número que no sea múltiplo de 10, pero este será considerado inválido.

### Especificando los valores mínimo y máximo

Puedes usar los atributos {{htmlattrxref("min", "input")}} y {{htmlattrxref("max", "input")}} para especificar un valor mínimo y máximo que pueda tener el campo. Por ejemplo, demos a nuestro ejemplo un mínimo de `0` y un máximo de `100`:

```html
<input type="number" placeholder="múltiple de 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

En esta versión actualizada, verás que los botones para subir y bajar escalón no te permitirán ir bajo 0 o sobre 100. Tú aún puedes ingresar manualmente un número fuera de estos límites, pero este será considerado inválido.

### Permitir valores decimales

Un problema con las entradas numéricas es que su tamaño de escalón por omisión es 1. Si tratas de ingresar un número con un decimal (tal como "1.0"), este será considerado como inválido. Si quieres ingresar un valor que requiere decimales, necesitarás reflejar esto en el valor `step`(como por ejemplo, `step="0.01"` permitirá hasta dos dígitos en la parte decimal). Aquí tienes un ejemplo simple:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

Fíjate que este ejemplo permite cualquier valor entre `0.0`y `10.0`, con decimales de dos cifras. Por ejemplo, "9.52" es válido, pero "9.521" no.

### Controlando el tamaño de la entrada

Los elementos {{HTMLElement("input")}} de tipo `number` no soportan atributos de dimensión tales como {{htmlattrxref("size", "input")}}. Necesitarás recurrir a [CSS](/es/docs/Web/CSS) para cambiar el tamaño de estos controles.

Por ejemplo, para ajustar el ancho de la entrada para que sea tan ancho como se necesita para ingresar un número de tres dígitos, podemos cambiar nuestro HTML para incluir un {{htmlattrxref("id")}} y acortar nuestro marcador de posición ya que el campo es demasiado ancho para el texto que hemos estado usando hasta ahora:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number"
/>
```

Entonces añadimos un poco de CSS para acortar el ancho del elemento con el selector `id` `#number`:

```css
#number {
  width: 3em;
}
```

El resultado será este:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Ofreciendo valores sugeridos

Tú puedes proveer una lista de opciones por defecto que el usuario puede seleccionar especificando el atributo {{htmlattrxref("list", "input")}}, el cual contiene como valor el {{htmlattrxref("id")}} de un {{HTMLElement("datalist")}}, la cual a su vez contiene un elemento {{HTMLElement("option")}} por cada valor sugerido. El `value` de cada `option` es el valor sugerido correspondiente para la caja de entrada numérica.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

## Validación

Ya hemos mencionado una serie de diferentes opciones de validación para las entradas `number, pero revisémoslas ahora:

- Los elementos `<input type="number">` automáticamente invalidan cualquier entrada que no sea un número (o vacío, si `required` está especificado).
- Puedes usar el atributo {{htmlattrxref("required", "input")}} para hacer las entradas vacías inválidas. (En otras palabras, la entrata _tiene_ que ser completada).
- Puedes usar el atributo {{htmlattrxref("step", "input")}} para limitar los valores válidos a cierto grupo de escalones (como por ejemplo, múltiples de 10).
- Puedes usar los atributos {{htmlattrxref("min", "input")}} y {{htmlattrxref("max", "input")}} para limitar los valores mínimo y máximo.

El siguiente ejemplo presenta todas las características anteriores, así como el uso de CSS para mostrar íconos de validez o invalidez, dependiendo del valor del `input`:

```html
<form>
  <div>
    <label for="balloons">Número de globos a comprar (múltiples de 10):</label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required
    />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

{{EmbedLiveSample("Validation", 600, 110)}}

Trata de mandar el formulario con diferentes valores inválidos (sin valor, valores por debeajo de 0 o por encima de 100, valores que no sea múltiples de 10) y fíjate como el mensaje de error que te arroja el navegador varía.

El CSS aplicado a este ejemplo es el siguiente:

```css
div {
  margin-bottom: 10px;
}

input:invalid + span:after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  content: "✓";
  padding-left: 5px;
}
```

Aquí utilizamos las pseudoclases {{cssxref(":invalid")}} y {{cssxref(":valid")}} para mostrar un ícono apropiado, según la invalidez o validez del campo, como contenido generado en el elemento adyacente {{htmlelement("span")}}, sirviéndonos de indicador visual.

Lo colocamos en un elemento separado `<span>` para mayor flexibilidad. Algunos navegadores no muestran contenido generado muy eficientemente en algunos tipos o entradas de formulario. (Lee, por ejemplo, la sección sobre [validación `<input type="date">`](/es/docs/Web/HTML/Element/input/date#validation)).

> **Advertencia:** ¡La validación de formularios HTML _no_ es subtituye la validación del lado del servidor que asegura que los datos estén en el formato apropiado!
>
> Es demasiado fácil para alguien hacer ajustes al HTML que le permitan evitar la validación o removerla completamente. También es posible para alguien evadir tu HTML y enviar los datos directamente a tu servidor.
>
> Si tu código del lado del servidor falla en validar los datos que recibe, esto puede conllevar consecuencias desastosas cuando datos que no están formateados apropiadamente sean enviados (o cuando los datos son demasiado grandes o son del tipo incorrecto).

### Validación de patrón

Elementos `<input type="number">` no soportan el uso del atributo {{htmlattrxref("pattern", "input")}} para hacer que los valores ingresados se ajusten a un patrón de expresión regular específico.

La fundamentación para esto es que las entradas numéricas no serán válidas si contienen cualquier cosa excepto números, y tú puedes restringir el número mínimo y máximo de dígitos válidos usando los atributos {{htmlattrxref("min", "input")}} y {{htmlattrxref("max", "input")}}.

## Ejemplos

Ya hemos cubierto el hecho de que, por defecto, el incremento es `1` y tú puedes usar el atributo {{htmlattrxref("step", "input")}} para permitir entradas decimales. Echemos un vistazo más de cerca.

En el siguiente ejemplo hay un formulario para ingresar la estatura del usuario. Por defecto, acepta la estatura en metros, pero puedes hacer click en el botón para que el formulario a que acepte pies y pulgadas. La entrada para la estatura en metros acepta decimales a dos posiciones.

{{EmbedLiveSample("Examples", 600, 100)}}

El HTML se ve así:

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Introduce tu estatura, en metros:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="e.g. 1.78"
      required
    />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Introduce tu estatura </span>
    <label for="feet">pies:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">pulgadas:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Introduce la altura en pies y pulgadas"
    />
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

Verás que estamos usando muchos de los atributos que ya hemos visto antes en el artículo. Como queremos que acepte un valor de medida en centímetros, hemos colocado el valor de `step` a `0.01`, de manera que valores como _1.78_ no sean vistos como inválidos. También hemos provisto una marcadores de posición para esa entrada.

Hemos escondido las entradas de pies y pulgadas inicialmente usando `class="hidden"`, de manera que metros sea el tipo de entrada preseleccionado.

Ahora, al CSS. Este se ve muy similar al estilo de validación que vimos antes; nada extraordinario aquí.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Y finalmente, el JavaScript:

```js
let metersInputGroup = document.querySelector(".metersInputGroup");
let feetInputGroup = document.querySelector(".feetInputGroup");
let metersInput = document.querySelector("#meters");
let feetInput = document.querySelector("#feet");
let inchesInput = document.querySelector("#inches");
let switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener("click", function () {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Enter height in meters";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Enter height in feet and inches";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

Después de declarar unas pocas variables, un manejador de eventos es agredgado al `button` para controlar el botón. Esto es bastante simple, principalmente involucra cambiar las {{HTMLElement("label")}} y `class` del botón, y actualizar los valores de muestra de los dos conjuntos de entradas cuando el botón sea presionado.

(Fíjate que aquí no estamos convirtiendo de aquí para allá entre metros y pies/pulgadas, lo que probablemente haría una aplicación web en la vida real.)

> **Nota**: Cuando el usuario haga click en el botón, el/los atributo/s `required` de la/s entradas que estemos ocultando son removidos, y vaciará el `value` del/los atributo/s. Así nos aseguramos que el formulario puede ser enviado si ambos conjuntos de entradas no están llenas. También asegura que el formulario no enviará datos que el usuario no quiere.
>
> ¡Si no hiciera eso, tendrías que llenar ambos pies/pulgadas **y** metros para enviar el formulario!

## Accessibilidad

El [role](/es/docs/Web/Accessibility/ARIA/Roles) implícito para el elemento `<input type="number">` es [`spinbutton`](/es/docs/Web/Accessibility/ARIA/Roles/spinbutton). Si el spinbutton no es una funcionalidad importante para el controlador de tu formulario, considera _no_ usar `type="number"`. Por el contrario, usa [`inputmode="numeric"`](/es/docs/Web/HTML/Global_attributes/inputmode) junto con el atributo [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) que limita los caracteres a números y a caracteres asociados. Con `<input type="number">`, existe el riesgo que los usuarios accidentamente incremento un número cuando ellos están intentanto hacer otra cosa. Adicionalmente, si los usuarios tratan de introducir algo que no es un número, no hay ninguna sugerencia explícita sobre que se está haciendo mal.

También considera usar el atributo [`autocomplete`](/es/docs/Web/HTML/Attributes/autocomplete) para ayudar a los usuarios a completar formularios más rapidamente con menos oportunidades para el error. Por ejemplo, para habilitar el autocompletado en un campo de código postal, estipula `autocomplete="postal-code"`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Guía de formularios HTML](/es/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/es/docs/Web/HTML/Element/input/tel)
- [Compatibilidad de propiedades CSS](/es/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Artículo: Why Gov.UK changed the input type for numbers](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
