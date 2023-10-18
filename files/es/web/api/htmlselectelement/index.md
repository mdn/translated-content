---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

La interfaz **`HTMLSelectElement`** representa un elemento HTML {{HTMLElement("select")}}. Estos elementos también comparten todas las propiedades y métodos de otros elementos HTML a través de la interfaz {{domxref("HTMLElement")}}.

{{InheritanceDiagram}}

## Propiedades de instancia

_Esta interfaz hereda las propiedades de {{domxref("HTMLElement")}}, {{domxref("Element")}} y {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.autofocus")}}
  - : Un valor booleano que refleja el atributo HTML [`autofocus`](/es/docs/Web/HTML/Element/select#autofocus), que indica si el control debe tener el foco de entrada cuando se carga la página, a menos que el usuario lo anule, por ejemplo escribiendo en un control diferente. Solo un elemento asociado a un formulario en un documento puede tener este atributo especificado.
- {{domxref("HTMLSelectElement.disabled")}}
  - : Un valor booleano que refleja el atributo HTML [`disabled`](/es/docs/Web/HTML/Element/select#disabled), que indica si el control está deshabilitado. Si está deshabilitado, no acepta clics.
- {{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : Un {{domxref("HTMLFormElement")}} que hace referencia al formulario al que está asociado este elemento. Si el elemento no está asociado con un elemento {{HTMLElement("form")}}, entonces devuelve `null`.
- {{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : Un {{domxref("NodeList")}} de elementos {{HTMLElement("label")}} asociados con el elemento.
- {{domxref("HTMLSelectElement.length")}}
  - : Un `unsigned long` con el número de elementos {{HTMLElement("option")}} en este elemento `select`.
- {{domxref("HTMLSelectElement.multiple")}}
  - : Un valor booleano que refleja el atributo HTML [`multiple`](/es/docs/Web/HTML/Element/select#multiple), que indica si se pueden seleccionar varios elementos.
- {{domxref("HTMLSelectElement.name")}}
  - : Una cadena que refleja el atributo HTML [`name`](/es/docs/Web/HTML/Element/select#name), que contiene el nombre de este control utilizado por los servidores y las funciones de búsqueda DOM.
- {{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : Un {{domxref("HTMLOptionsCollection")}} que representa el conjunto de elementos {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) contenidos en este elemento.
- {{domxref("HTMLSelectElement.required")}}
  - : Un valor booleano que refleja el atributo HTML [`required`](/es/docs/Web/HTML/Element/select#required), que indica si el usuario debe seleccionar un valor antes de enviar el formulario.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : Un `long` que refleja el índice del primer elemento {{HTMLElement("option")}} seleccionado. El valor `-1` indica que no se ha seleccionado ningún elemento.
- {{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : Un {{domxref("HTMLCollection")}} que representa el conjunto de elementos {{HTMLElement("option")}} seleccionados.
- {{domxref("HTMLSelectElement.size")}}
  - : Un `long` que refleja el atributo HTML [`size`](/es/docs/Web/HTML/Element/select#size), que contiene el número de elementos visibles en el control. El valor predeterminado es 1, a menos que `multiple` sea `true`, en cuyo caso es 4.
- {{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : Una cadena que representa el tipo del control de formulario. Cuando `multiple` es `true`, devuelve `"select-multiple"`; de lo contrario, devuelve `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Una cadena que representa un mensaje traducido que describe las restricciones de validación que el control no cumple (si las hay). Este atributo es la cadena vacía si el control no es candidato para la validación de restricciones (`willValidate` es falso) o si cumple sus restricciones.
- {{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : Un {{domxref("ValidityState")}} que refleja el estado de validez en el que se encuentra este control.
- {{domxref("HTMLSelectElement.value")}}
  - : Una cadena que refleja el valor del control de formulario. Devuelve la propiedad `value` del primer elemento de opción seleccionado, si lo hay; de lo contrario, la cadena vacía.
- {{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el botón es candidato para la validación de restricciones. Es `falso` si alguna condición le impide la validación de restricciones.

## Métodos de instancia

_Esta interfaz hereda los métodos de {{domxref("HTMLElement")}}, {{domxref("Element")}} y {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.add()")}}
  - : Agrega un elemento a la colección de elementos `option` para este elemento `select`.
- {{domxref("HTMLSelectElement.blur()")}} {{deprecated_inline}}
  - : Elimina el foco de entrada de este elemento. _Este método ahora está implementado en {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Comprueba si el elemento tiene restricciones y si las cumple. Si el elemento falla en sus restricciones, el navegador activa un evento cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} en el elemento (y devuelve `false`).
- {{domxref("HTMLSelectElement.focus()")}} {{deprecated_inline}}
  - : Da foco de entrada a este elemento. _Este método ahora está implementado en {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.item()")}}
  - : Obtiene un elemento de la colección de opciones para este elemento {{HTMLElement("select")}}. También puede acceder a un elemento especificando el índice entre corchetes o paréntesis estilo matriz, sin llamar a este método explícitamente.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Obtiene el elemento de la colección de opciones con el nombre especificado. La cadena de nombre puede coincidir con el atributo `id` o `name` de un nodo de opción. También puede acceder a un elemento especificando el nombre entre corchetes o paréntesis estilo matriz, sin llamar a este método explícitamente.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Elimina el elemento en el índice especificado de la colección de opciones para este elemento `select`.
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : Este método informa al usuario de los problemas con las restricciones del elemento, si las hay. Si hay problemas, activa un evento cancelable {{domxref("HTMLInputElement/invalid_event", "invalid")}} en el elemento y devuelve `false`; si no hay problemas, devuelve `verdadero`.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Establece el mensaje de validación personalizado para el elemento de selección en el mensaje especificado. Utilice la cadena vacía para indicar que el elemento _no_ tiene un error de validación personalizado.

## Eventos

Detecte estos eventos usando {{domxref("EventTarget/addEventListener", "addEventListener()")}} o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz:

- Evento {{domxref("HTMLElement/change_event", "change")}}
  - : Se activa cuando el usuario selecciona una opción.
- Evento {{domxref("HTMLElement/input_event", "input")}}
  - : Se activa cuando se modifica `value` de un elemento {{HTMLElement("input")}}, {{HTMLElement("select")}} o {{HTMLElement("textarea")}}.

## Ejemplo

### Obtener información sobre la opción seleccionada

```js
/* asumiendo que tenemos el siguiente HTML
<select id='s'>
    <option>Primero</option>
    <option selected>Segundo</option>
    <option>Tercero</option>
</select>
*/

const select = document.getElementById("s");

// devolver el índice de la opción seleccionada
console.log(select.selectedIndex); // 1

// devolver el valor de la opción seleccionada
console.log(select.options[select.selectedIndex].value); // Segundo
```

Una mejor forma de realizar un seguimiento de los cambios en la selección del usuario es observar si se produce el evento {{domxref("HTMLElement/change_event", "change")}} en `<select>`. Esto le indicará cuándo cambia el valor y luego podrá actualizar cualquier cosa que necesite. Ver [el ejemplo proporcionado](/es/docs/Web/API/HTMLElement/change_event#select_element) en la documentación del evento `change` para más detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El elemento HTML {{HTMLElement("select")}}, que implementa esta interfaz.
