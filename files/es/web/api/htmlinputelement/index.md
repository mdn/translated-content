---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("HTML DOM")}}

La interfaz **`HTMLInputElement`** proporciona propiedades y métodos especiales para manipular las opciones, el diseño y la presentación de los elementos {{HtmlElement("input")}}.

{{InheritanceDiagram}}

## Propiedades de instancia

Algunas propiedades solo se aplican a los tipos de elementos de entrada que admiten los atributos correspondientes.

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : `string`: **Representa** la alineación del elemento. _Use CSS en su lugar._

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{Experimental_Inline}}

  - : `string`: **Define** el comportamiento de uso de mayúsculas para la entrada del usuario. Los valores válidos son `none`, `off`, `characters`, `words` o `sentences`.

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : `string`: **Devuelve/Establece** el valor predeterminado como se especificó originalmente en el código HTML que creó este objeto.

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : `string`: **Devuelve/Establece** la direccionalidad del elemento.

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}

  - : Proporciona una pista a los navegadores sobre el tipo de configuración de teclado virtual que se debe usar al editar este elemento o su contenido.

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : Arreglo de {{domxref("NodeList")}}: **Devuelve** una lista de elementos {{ HTMLElement("label") }} que son etiquetas para este elemento.

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLElement")}}: **Devuelve** el elemento al que apunta el atributo [`list`](/es/docs/Web/HTML/Element/input#list). La propiedad puede ser `null` si no se encuentra ningún elemento HTML en el mismo árbol.

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`multiple`](/es/docs/Web/HTML/Element/input#multiple) del elemento, indicando si es posible más de un valor (por ejemplo, varios archivos).

- {{domxref("HTMLInputElement.name", "name")}}

  - : `string`: **Devuelve/Establece** el atributo [`name`](/es/docs/Web/HTML/Element/input#name) del elemento, que contiene un nombre que identifica al elemento al enviar el formulario.

- {{domxref("HTMLInputElement.popoverTargetAction", "popoverTargetAction")}}

  - : Obtiene y establece la acción que se realizará (`"hide"`, `"show"`, o `"toggle"`) en un elemento emergente controlado por un elemento {{htmlelement("input")}} de tipo `type="button"`. Refleja el valor del atributo HTML [`popovertargetaction`](/es/docs/Web/HTML/Element/input#popovertargetaction).

- {{domxref("HTMLInputElement.popoverTargetElement", "popoverTargetElement")}}

  - : Obtiene y establece el control del elemento popover a través de un elemento {{htmlelement("input")}} de `type="button"`. El equivalente JavaScript del atributo HTML [`popovertarget`](/es/docs/Web/HTML/Element/input#popovertarget).

- {{domxref("HTMLInputElement.step", "step")}}

  - : `string`: **Devuelve/Establece** el atributo [`step`](/es/docs/Web/HTML/Element/input#step) del elemento, que funciona con [`min`](/es/docs/Web/HTML/Element/input#min) y [`max`](/es/docs/Web/HTML/Element/input#max) para limitar los incrementos en los que se puede establecer un valor numérico o de fecha y hora. Puede ser la cadena `any` o un número de punto flotante positivo. Si esto no se establece en `any`, el control solo acepta valores en múltiplos del valor de paso mayor que el mínimo.

- {{domxref("HTMLInputElement.type", "type")}}

  - : `string`: **Devuelve/Establece** el atributo [`type`](/es/docs/Web/HTML/Element/input#type) del elemento, indicando el tipo de control a mostrar. Para conocer los posibles valores, consulte la documentación del atributo [`type`](/es/docs/Web/HTML/Element/input#type).

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : `string`: **Representa** un mapa de imagen del lado del cliente.

- {{domxref("HTMLInputElement.value", "value")}}

  - : `string`: **Devuelve/Establece** el valor actual del control. Si el usuario ingresa un valor diferente del valor esperado, esto puede devolver una cadena vacía.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : {{jsxref("Date")}}: **Devuelve/Establece** el valor del elemento, interpretado como una fecha, o `null` si la conversión no es posible.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : `double`: **Devuelve** el valor del elemento, interpretado como uno de los siguientes, en orden: un valor de tiempo, un número o `NaN` si la conversión es imposible

### Propiedades de instancia relacionadas con el formulario padre

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLFormElement")}}: **Devuelve** una referencia al elemento {{HtmlElement("form")}} padre.

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : `string`: **Devuelve/Establece** el atributo [`formaction`](/es/docs/Web/HTML/Element/input#formaction) del elemento, que contiene la URL de un programa que procesa la información enviada por el elemento. Esto anula el atributo [`action`](/es/docs/Web/HTML/Element/form#action) del formulario padre.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : `string`: **Devuelve/Establece** el atributo [`formenctype`](/es/docs/Web/HTML/Element/input#formenctype) del elemento, que contiene el tipo de contenido que se utiliza para enviar el formulario al servidor. Esto anula el atributo [`enctype`](/es/docs/Web/HTML/Element/form#enctype) del formulario padre.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : `string`: **Devuelve/Establece** el atributo [`formmethod`](/es/docs/Web/HTML/Element/input#formmethod) del elemento, que contiene el método HTTP que utiliza el navegador para enviar el formulario. Esto anula el atributo [`method`](/es/docs/Web/HTML/Element/form#method) del formulario padre.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`formnovalidate`](/es/docs/Web/HTML/Element/input#formnovalidate) del elemento, indicando que el formulario no debe validarse cuando se envía. Esto anula el atributo [`novalidate`](/es/docs/Web/HTML/Element/form#novalidate) del formulario padre.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : `string`: **Devuelve/Establece** el atributo [`formtarget`](/es/docs/Web/HTML/Element/input#formtarget) del elemento, que contiene un nombre o palabra clave que indica dónde mostrar la respuesta que se recibe después de enviar el formulario. Esto anula el atributo [`target`](/es/docs/Web/HTML/Element/form#target) del formulario padre.

### Propiedades de instancia que se aplican a cualquier tipo de elemento de entrada que no esté oculto

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`autofocus`](/es/docs/Web/HTML/Element/input#autofocus) del elemento, que especifica que un control de formulario debe tener el foco de entrada cuando se carga la página, a menos que el usuario lo anula, por ejemplo, escribiendo en un control diferente. Solo un elemento de formulario en un documento puede tener el atributo [`autofocus`](/es/docs/Web/HTML/Element/input#autofocus).

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`disabled`](/es/docs/Web/HTML/Element/input#disabled) del elemento, indicando que el control no está disponible para la interacción. Los valores de entrada no se enviarán con el formulario. Vea también [`readonly`](/es/docs/Web/HTML/Element/input#readonly).

- {{domxref("HTMLInputElement.required", "required")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`required`](/es/docs/Web/HTML/Element/input#required) del elemento, indicando que el usuario debe llenar un valor antes de enviar un formulario.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : `string`: **Devuelve** un mensaje específico que describe las restricciones de validación que el control no cumple (si las hay). Esta es la cadena vacía si el control no es candidato para la validación de restricciones ([`willValidate`](/es/docs/Web/API/HTMLObjectElement/willValidate) es `false`), o cumple sus restricciones. Este valor se puede establecer mediante el método {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}.

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : {{domxref("ValidityState")}}: **Devuelve** el estado de validez actual del elemento.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : `boolean`: **Devuelve** si el elemento es candidato para la validación de restricciones. Es `false` si alguna condición le impide la validación de restricciones, incluyendo: si `type` es `hidden`, `reset` o `button`, tiene un antecesor {{HTMLElement("datalist")}} o su propiedad `disabled` es `true`.

### Propiedades de instancia que se aplican solo a elementos de tipo checkbox o radio

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : `boolean`: **Devuelve/Establece** el estado actual del elemento.

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : `boolean`: **Devuelve/Establece** el estado predeterminado de un botón de radio o casilla de verificación como se especificó originalmente en el HTML que creó este objeto.

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : `boolean`: **Devuelve** si la casilla de verificación o el botón de opción están en un estado indeterminado. Para las casillas de verificación, el efecto es que la apariencia de la casilla de verificación está oscurecida o atenuada de alguna manera para indicar que su estado es indeterminado (no está marcada pero tampoco no está marcada). No afecta el valor del atributo `checked` y al hacer clic en la casilla de verificación se establecerá el valor en falso.

### Propiedades de instancia que se aplican solo a elementos de tipo imagen

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : `string`: **Devuelve/Establece** el atributo [`alt`](/es/docs/Web/HTML/Element/input#alt) del elemento, que contiene texto alternativo a utilizar.

- {{domxref("HTMLInputElement.height", "height")}}

  - : `string`: **Devuelve/Establece** el atributo [`height`](/es/docs/Web/HTML/Element/input#height) del elemento, que define la altura de la imagen mostrada para el botón.

- {{domxref("HTMLInputElement.src", "src")}}

  - : `string`: **Devuelve/Establece** el atributo [`src`](/es/docs/Web/HTML/Element/input#src) del elemento, que especifica un URI para la ubicación de una imagen que se mostrará en el botón de envío gráfico.

- {{domxref("HTMLInputElement.width", "width")}}
  - : `string`: **Devuelve/Establece** el atributo [`width`](/es/docs/Web/HTML/Element/input#width) del elemento, que define el ancho de la imagen mostrada para el botón.

### Propiedades de instancia que se aplican solo a elementos de tipo archivo

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : `string`: **Devuelve/Establece** el atributo [`accept`](/es/docs/Web/HTML/Element/input#accept) del elemento, que contiene una lista separada por comas de los tipos de archivos que se pueden seleccionar.

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{Non-standard_Inline}}

  - : `boolean`: Parte de la API de carga de directorios no estándar. Indica si se permite o no la selección de directorios y archivos en la lista de archivos. Implementado solo en Firefox y está oculto detrás de una preferencia.

- {{domxref("HTMLInputElement.files", "files")}}

  - : {{domxref("FileList")}}: **Devuelve/Establece** una lista de objetos {{domxref("File")}} que representan los archivos seleccionados para cargar.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : `boolean`: **Devuelve** el atributo [`webkitdirectory`](/es/docs/Web/HTML/Element/input#webkitdirectory). Si es `true`, la interfaz del selector del sistema de archivos solo acepta directorios en lugar de archivos.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
  - : Arreglo de {{domxref("FileSystemEntry")}}: **Describe** los archivos o directorios actualmente seleccionados.

### Propiedades de instancia que se aplican solo a elementos visibles que contienen texto o números

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : `string`: **Devuelve/Establece** el atributo [`autocompletar`](/es/docs/Web/HTML/Element/input#autocomplete) del elemento, indicando si el valor del control puede ser completado automáticamente por el navegador.

- {{domxref("HTMLInputElement.max", "max")}}

  - : `string`: **Devuelve/Establece** el atributo [`max`](/es/docs/Web/HTML/Element/input#max) del elemento, que contiene el valor máximo (numérico o de fecha y hora) para este elemento, que no debe ser menor que su valor mínimo (atributo [`min`](/es/docs/Web/HTML/Element/input#min)).

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : `unsigned long`: **Devuelve/Establece** el atributo [`maxlength`](/es/docs/Web/HTML/Element/input#maxlength) del elemento, que contiene el número máximo de caracteres (en puntos de código Unicode) que puede tener el valor.

- {{domxref("HTMLInputElement.min", "min")}}

  - : `string`: **Devuelve/Establece** el atributo [`min`](/es/docs/Web/HTML/Element/input#min) del elemento, que contiene el valor mínimo (numérico o de fecha y hora) para este elemento, que no debe ser mayor que su valor máximo (atributo [`max`](/es/docs/Web/HTML/Element/input#max)).

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : `unsigned long`: **Devuelve/Establece** el atributo [`minlength`](/es/docs/Web/HTML/Element/input#minlength) del elemento, que contiene el número mínimo de caracteres (en puntos de código Unicode) que puede tener el valor.

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : `string`: **Devuelve/Establece** el atributo [`pattern`](/es/docs/Web/HTML/Element/input#pattern) del elemento, que contiene una expresión regular con la que se compara el valor del control. Use el atributo [`title`](/es/docs/Web/HTML/Element/input#title) para describir el patrón para ayudar al usuario. Este atributo solo aplica cuando el valor del atributo [`type`](/es/docs/Web/HTML/Element/input#type) es `text`, `search`, `tel`, `url` o `email` `.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : `string`: **Devuelve/Establece** el atributo [`placeholder`](/es/docs/Web/HTML/Element/input#placeholder) del elemento, que contiene una pista para el usuario de lo que se puede ingresar en el control. El texto del marcador de posición no debe contener retornos de carro ni saltos de línea. Este atributo solo aplica cuando el valor del atributo [`type`](/es/docs/Web/HTML/Element/input#type) es `text`, `search`, `tel`, `url` o `email` `.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : `boolean`: **Devuelve/Establece** el atributo [`readonly`](/es/docs/Web/HTML/Element/input#readonly) del elemento, indicando que el usuario no puede modificar el valor del control. Esto se ignora si [`type`](/es/docs/Web/HTML/Element/input#type) es `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, o un tipo de botón.

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : `unsigned long`: **Devuelve/Establece** el índice final del texto seleccionado. Cuando no hay selección, esto devuelve el desplazamiento del carácter que sigue inmediatamente a la posición actual del cursor de entrada de texto.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : `unsigned long`: **Devuelve/Establece** el índice inicial del texto seleccionado. Cuando no se selecciona nada, esto devuelve la posición del cursor de entrada de texto (signo de intercalación `^`) dentro del elemento {{HTMLElement("input")}}.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : `string`: **Devuelve/Establece** la dirección en la que ocurrió la selección. Los valores posibles son: `forward` (la selección se realizó en la dirección de principio a fin de la ubicación actual), `backward` (la dirección opuesta) o `none` (la dirección es desconocida).

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: **Devuelve/Establece** el atributo [`size`](/es/docs/Web/HTML/Element/input#size) del elemento, que contiene el tamaño visual del control. Este valor está en píxeles a menos que el valor [`type`](/es/docs/Web/HTML/Element/input#type) sea `text` o `password`, en cuyo caso, es un número entero de caracteres . Se aplica solo cuando [`type`](/es/docs/Web/HTML/Element/input#type) se establece en `text`, `search`, `tel`, `url`, `email` o `password`.

## Instance methods

- {{domxref("HTMLElement/blur", "blur()")}}

  - : Elimina el foco del elemento de entrada; las pulsaciones de teclas no irán a ninguna parte.

- {{domxref("HTMLElement.click()", "click()")}}

  - : Simula un clic en el elemento de entrada.

- {{domxref("HTMLElement/focus", "focus()")}}

  - : Se enfoca en el elemento de entrada; las pulsaciones de teclas irán posteriormente a este elemento.

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : Selecciona todo el texto en el elemento de entrada y lo enfoca para que el usuario pueda reemplazar todo su contenido posteriormente.

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : Selecciona un rango de texto en el elemento de entrada (pero no lo enfoca).

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : Reemplaza un rango de texto en el elemento de entrada con texto nuevo.

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : Establece un mensaje de validación personalizado para el elemento. Si este mensaje no es la cadena vacía, entonces el elemento sufre un error de validación personalizado y no se valida.

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : Muestra un selector del navegador para fecha, hora, color y archivos.

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : Devuelve un valor booleano que es `false` si el elemento es candidato para la validación de restricciones y no satisface sus restricciones. En este caso, también activa un evento {{domxref("HTMLInputElement/invalid_event", "invalid")}} en el elemento. Devuelve `true` si el elemento no es candidato para la validación de restricciones, o si satisface sus restricciones.

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : Ejecuta el método `checkValidity()` y, si devuelve falso (por una entrada no válida o porque no se proporcionó ningún atributo de patrón), informa al usuario que la entrada no es válida de la misma manera que si hubiera enviado un formulario.

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : Decrementa [`value`](/es/docs/Web/HTML/Element/input#value) en ([`step`](/es/docs/Web/HTML/Element/input#step) \* n) , donde n por defecto es 1 si no se especifica. Lanza una excepción `InvalidStateError`:
    - si el método no es aplicable para el valor actual de [`type`](/es/docs/Web/HTML/Element/input#type),
    - si el elemento no tiene valor [`step`](/es/docs/Web/HTML/Element/input#step),
    - si [`value`](/es/docs/Web/HTML/Element/input#value) no se puede convertir a un número,
    - si el valor resultante está por encima de [`max`](/es/docs/Web/HTML/Element/input#max) o por debajo de [`min`](/es/docs/Web/HTML/Element/input #min).

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : Incrementa [`value`](/es/docs/Web/HTML/Element/input#value) en ([`step`](/es/docs/Web/HTML/Element/input#step) \* n) , donde n por defecto es 1 si no se especifica. Lanza una excepción `InvalidStateError`:
    - si el método no es aplicable para el valor actual de [`type`](/es/docs/Web/HTML/Element/input#type),
    - si el elemento no tiene valor [`step`](/es/docs/Web/HTML/Element/input#step),
    - si [`value`](/es/docs/Web/HTML/Element/input#value) no se puede convertir a un número,
    - si el valor resultante está por encima de [`max`](/es/docs/Web/HTML/Element/input#max) o por debajo de [`min`](/es/docs/Web/HTML/Element/input #min).

## Eventos

Detecte estos eventos usando [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz:

- [`input`](/es/docs/Web/API/Element/input_event)
  - : Se activa cuando se modifica `value` de un elemento {{HTMLElement("input")}}, {{HTMLElement("select")}} o {{HTMLElement("textarea")}}. Tenga en cuenta que esto se activa en la interfaz {{domxref("HTMLElement")}} y también se aplica a los elementos [`contenteditable`](/es/docs/Web/HTML/Global_attributes/contenteditable), pero lo hemos enumerado aquí porque se usa más comúnmente con elementos de entrada de formulario.
- [`invalid`](/es/docs/Web/API/HTMLInputElement/invalid_event)
  - : Se activa cuando un elemento no satisface sus restricciones durante la validación de restricciones.
- [`search`](/es/docs/Web/API/HTMLInputElement/search_event) {{Non-standard_Inline}}
  - : Se activa cuando se inicia una búsqueda en un {{HTMLElement("input")}} con `type="search"`.
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} event {{Experimental_Inline}}
  - : Se activa cuando se cambia la selección de texto en un elemento {{HTMLElement("input")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elemento HTML que implementa esta interfaz: {{ HTMLElement("input") }}
