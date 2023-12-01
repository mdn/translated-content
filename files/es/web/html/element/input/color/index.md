---
title: <input type="color">
slug: Web/HTML/Element/input/color
---

{{HTMLSidebar}}

Los elementos {{HTMLElement("input")}} del tipo «**`color`**» proporciona un elemento de interfaz de usuario que permite a los usuarios especificar un color, bien mediante una interfaz visual de selección, bien a través de un cuadro de texto donde ingresar un valor hexadecimal en el formato «`#rrggbb`». Solo se permiten colores simples (sin canal alfa). Los valores son compatibles con CSS.

La presentación del elemento puede variar considerablamente entre navegadores y plataformas: podría ser un campo de entrada sencillo que valida automáticamente que la entrada esté en el formato adecuado, o podría lanzar un selector de colores estándar de la plataforma, o incluso podría abrir una ventana de colores personalizada.

## Ejemplo

```html
<input type="color" />
```

{{EmbedLiveSample("summary_example1", 700, 30)}}

| **[Value](#value)**             | Una {{domxref("DOMString")}} de siete caracteres que especifica un {{cssxref("&lt;color&gt;")}} en notación hexadecimal en minúsculas |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Sucesos**                     | [`change`](/es/docs/Web/Reference/Events/change) e [`input`](/es/docs/Web/Reference/Events/input)                                     |
| **Atributos comunes admitidos** | [`autocomplete`](/es/docs/Web/HTML/Element/input#autocomplete) y [`list`](/es/docs/Web/HTML/Element/input#list)                       |
| **Atributos IDL**               | `list` y `value`                                                                                                                      |
| **Métodos**                     | {{domxref("HTMLInputElement.select", "select()")}}                                                                                    |

## Valor

El [`value`](/es/docs/Web/HTML/Element/input#value) de un elemento {{HTMLElement("input")}} del tipo «`color`» es siempre una {{domxref("DOMString")}} que contiene una cadena de siete caracteres en la que se especifica un color RGB de manera hexadecimal. Aunque es posible introducir el color tanto en mayúsculas como en minúsculas, este se almacena en minúsculas. El valor nunca presenta otra forma y nunca está vacío.

> **Nota:** definir el valor a cualquier cosa que no sea un color válido, totalmente opaco y contenido dentro del espacio RGB _en notación hexadecimal_ causará que el valor se establezca a «`#000000`». En particular, no es posible utilizar los nombres de colores estandarizados de CSS ni cualquier sintaxis de función CSS para definir el valor. Esto tiene sentido si se tiene en cuenta que HTML y CSS son lenguajes y especificaciones independientes. Por otra parte, no se admiten los colores que incluyan un canal alfa; definir un color en la notación hexadecimal de nueve caracteres (p. ej., `#009900aa`) también provocará que el valor se establezca a «`#000000`».

## Uso de las entradas de color

Las entradas del tipo «`color`» son sencillas debido al número limitado de atributos que admiten.

### Proporcionar un color predeterminado

Puede actualizar el ejemplo simple anterior para definir un valor predeterminado, de manera que el botón muestrario de colores tenga precargado ese color y el selector de colores (si lo hay) se abra con ese color preseleccionado también:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Si no especifica un valor, se utilizará «`#000000`», negro, de manera predeterminada. El valor debe especificarse en la notación hexadecimal de siete caracteres; esto es, el carácter «#» seguido de dos dígitos para representar el rojo, el verde y el azul: «`#rrggbb`». Si utiliza colores especificados en cualquier otro formato (como los nombres de colores CSS o las funciones cromáticas de CSS como `rgb()` o `rgba()`), deberá convertirlos en valores hexadecimales antes de definir `value`.

### Llevar un seguimiento de los cambios de color

Como sucede con otros tipos de {{HTMLElement("input")}}, existen dos sucesos que pueden emplearse para detectar cambios en el valor de color: [`input`](/es/docs/Web/Reference/Events/input) y [`change`](/es/docs/Web/Reference/Events/change). El suceso `input` se desencadena en el elemento `<input>` siempre que cambia el color. El suceso `change` se desencadena cuando el usuario cierra el selector de colores. En ambos casos, puede determinar el valor nuevo del elemento al examinar su {{domxref("HTMLInputElement.value", "value")}}.

Este ejemplo vigila los cambios del valor de color en el tiempo:

```js
colorPicker.addEventListener("input", actualizarPrimero, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });
}
```

### Seleccionar el valor

Si la implementación del elemento {{HTMLElement("input")}} del tipo «`color`» en el navegador del usuario no admite un botón muestrario, y es en cambio un campo de texto para escribir directamente la cadena de color, podrá utilizar el método {{domxref("HTMLInputElement.select", "select()")}} para seleccionar el texto actualmente presente en el campo editable. Si el navegador utiliza en su lugar un botón muestrario, `select()` no hace nada. Debe tener presente este comportamiento para que su código pueda responder adecuadamente en cada caso.

```js
muestrario.select();
```

## Validación

El valor de una entrada de colores se considera no válido si el {{Glossary("user agent")}} no es capaz de convertir la entrada del usuario en la notación hexadecimal de siete caracteres minúsculos. Cuando se da esta situación, se aplica la pseudoclase {{cssxref(":invalid")}} al elemento.

## Ejemplo

Creemos un ejemplo que realice algo más con la entrada de color a través de la monitorización de los sucesos [`change`](/es/docs/Web/Reference/Events/change) y [`input`](/es/docs/Web/Reference/Events/input) para tomar el color nuevo y aplicarlo a cada uno de los elementos {{HTMLElement("p")}} del documento.

### HTML

El código HTML es bastante sencillo: un par de párrafos de material descriptivo con un {{HTMLElement("input")}} del tipo «`color`» con el identificador «`muestrario`», el cual utilizaremos para modificar el color del texto de los párrafos.

```html
<p>
  Este ejemplo demuestra la utilización del control
  <code>&lt;input type="color"&gt;</code>.
</p>

<label for="muestrario">Color:</label>
<input type="color" value="#ff0000" id="muestrario" />

<p>
  Observe cómo el color de los párrafos cambia cuando manipula el selector de
  colores. A medida que realiza cambios en el selector, el color del primer
  párrafo cambia, a manera de previsualización (esto usa el suceso
  <code>input</code>). Cuando cierra el selector, se desencadena el suceso
  <code>change</code> y podemos detectarlo para cambiar todos los párrafos al
  color elegido.
</p>
```

### JavaScript

Primero hay que realizar un poco de configuración. Aquí estableceremos algunas variables, una de las cuales contendrá el color que definiremos en el botón muestrario durante la primera carga y, a continuación, configurará un manejador para [`load`](/es/docs/Web/Reference/Events/load) para realizar el trabajo de inicialización cuando termine de cargarse la página.

```js
var muestrario;
var colorPredeterminado = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Inicialización

Una vez que se haya cargado la página, se realizará una llamada a nuestro manejador del suceso `load`, `startup()`:

```js
function startup() {
  muestrario = document.querySelector("#muestrario");
  muestrario.value = colorPredeterminado;
  muestrario.addEventListener("input", actualizarPrimero, false);
  muestrario.addEventListener("change", actualizarTodo, false);
  muestrario.select();
}
```

Esto obtiene una referencia al elemento de color `<input>` en una variable denominada `muestrario` y, acto seguido, define el valor de la entrada de color al valor de `colorPredeterminado`. Después, el suceso [`input`](/es/docs/Web/Reference/Events/input) de la entrada de color se configura para llamar a nuestra función `actualizarPrimero()` y el suceso [`change`](/es/docs/Web/Reference/Events/change) se configura para llamar `actualizarTodo()`. Ambos pueden apreciarse a continuación.

Por último, llamamos {{domxref("HTMLInputElement.select", "select()")}} para seleccionar el contenido de texto de la entrada de color input en caso de que el control se haya implementado como un cuadro de texto (lo cual no producirá ningún efecto si se ha brindado una interfaz de selección de colores en su lugar).

#### Reaccionar a cambios de color

Proveemos dos funciones que se ocupan de los cambios de color. La función `actualizarPrimero()` se llama en respuesta al suceso `input`. Esta modifica el color del primer elemento de párrafo del documento para que corresponda con el nuevo valor de la entrada de color. Como los sucesos `input` se desencadenan cada vez que se realiza un ajuste al valor (por ejemplo, si se aumenta el brillo del color), estos se producirán repetidamente mientras se manipule el selector de colores.

```js
function actualizarPrimero(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}
```

Cuando se cierre el selector de colores, señalando que el valor dejará de cambiar (a menos que el usuario vuelva a abrir el selector), se envía el suceso `change` al elemento. Manejamos ese suceso a través de la función `actualizarTodo()`, sirviéndonos de {{domxref("HTMLInputElement.value", "Event.target.value")}} para obtener el color final seleccionado:

```js
function actualizarTodo(event) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });
}
```

Esto define el color de cada uno de los bloques {{HTMLElement("p")}} de manera que sus atributos {{cssxref("color")}} coincidan con el valor actual de la entrada de color, a la cual se hace referencia con {{domxref("Event.target", "event.target")}}.

### Resultado

El resultado final es el siguiente:

{{EmbedLiveSample("Example", 700, 200)}}

## Especificaciones

{{Specifications}}

## Compatibilidad entre navegadores

{{Compat}}
