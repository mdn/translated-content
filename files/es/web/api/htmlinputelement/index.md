---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
---

{{ APIRef("HTML DOM") }}

La interface **`HTMLInputElement`** proporciona propiedades y métodos especiales para manipular las opciones, estructura y presentacion de los elementos {{HtmlElement("input")}}.

{{InheritanceDiagram(600,120)}}

## Propiedades

Propiedades relacionadas al formulario padre

- `form`{{readonlyInline}}
  - : _`{{domxref("HTMLFormElement")}} object:`_ Retorna una referencia al elemento {{HtmlElement("form")}} padre
- `formAction`
  - : _`string`:_ **Retorna / Establece** los atributos de los elementos {{ htmlattrxref("formaction", "input") }}, conteniendo la URI de un programa que procesa la información enviada por el elemento. Esto invalida al atributo {{ htmlattrxref("action", "form") }} del formulario padre.
- `formEncType`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("formenctype", "input") }} attribute, containing the type of content that is used to submit the form to the server. This overrides the {{ htmlattrxref("enctype", "form") }} attribute of the parent form.
- `formMethod`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("formmethod", "input") }} attribute, containing the HTTP method that the browser uses to submit the form. This overrides the {{ htmlattrxref("method", "form") }} attribute of the parent form.
- `formNoValidate`
  - : _`boolean`:_ **Returns / Sets** the element's {{ htmlattrxref("formnovalidate", "input") }} attribute, indicating that the form is not to be validated when it is submitted. This overrides the {{ htmlattrxref("novalidate", "form") }} attribute of the parent form.
- `formTarget`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("formtarget", "input") }} attribute, containing a name or keyword indicating where to display the response that is received after submitting the form. This overrides the {{ htmlattrxref("target", "form") }} attribute of the parent form.

Propiedades que aplican a cualquier tipo de elemento input que no se encuentre escondido

- `name`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("name", "input") }} attribute, containing a name that identifies the element when submitting the form.
- `type`
  - : `string:` **Returns / Sets** the element's {{ htmlattrxref("type", "input") }} attribute, indicating the type of control to display. See {{ htmlattrxref("type", "input") }} attribute of {{ HTMLElement("input") }} for possible values.
- `disabled`
  - : _`boolean`:_ **Returns / Sets** the element's {{ htmlattrxref("disabled", "input") }} attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also {{ htmlattrxref("readOnly", "input") }}
- `autofocus`
  - : `boolean:` **Returns / Sets** the element's {{ htmlattrxref("autofocus", "input") }} attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the {{htmlattrxref("autofocus","input")}} attribute. It cannot be applied if the {{htmlattrxref("type","input")}} attribute is set to `hidden` (that is, you cannot automatically set focus to a hidden control).
- `required`
  - : _`boolean`:_ **Returns / Sets** the element's {{ htmlattrxref("required", "input") }} attribute, indicating that the user must fill in a value before submitting a form.
- `value`

  - : `string:` **Returns / Sets** the current value of the control.

    > **Nota:** Si el usuario ingresa un valor diferente al esperado, esto puede retornar una cadena vacía.

- `validity` {{readonlyInline}}
  - : `{{domxref("ValidityState")}} object:` Returns the validity state that this element is in.
- `validationMessage` {{readonlyInline}}
  - : `string:` **Returns** a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ({{htmlattrxref("willValidate","input")}} is false), or it satisfies its constraints.
- `willValidate`{{readonlyInline}}
  - : _`{{jsxref("Boolean")}}:`_ **Indicates** whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.

Propiedades que aplican solo a los elementos de tipo `checkbox` o `radio`

- `checked`
  - : `boolean:`**Returns / Sets** the current state of the element when {{htmlattrxref("type","input")}} is `checkbox` or `radio`.
- `defaultChecked`
  - : _`boolean:`_ **Returns / Sets** the default state of a radio button or checkbox as originally specified in HTML that created this object.
- `indeterminate`
  - : `boolean:` **indicates** that the checkbox is neither on nor off. Changes the appearance to resemble a third state. Does not affect the value of the **checked** attribute, and clicking the checkbox will set the value to false.

Propiedades que sólo aplican a los elementos de tipo `image`

- `alt`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("alt", "input") }} attribute, containing alternative text to use when {{htmlattrxref("type","input")}} is `image.`
- `height`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("height", "input") }} attribute, which defines the height of the image displayed for the button, if the value of {{htmlattrxref("type","input")}} is `image`.
- `src`
  - : `string:` **Returns / Sets** the element's {{ htmlattrxref("src", "input") }} attribute, which specifies a URI for the location of an image to display on the graphical submit button, if the value of {{htmlattrxref("type","input")}} is `image`; otherwise it is ignored.
- `width`
  - : `string:` **Returns / Sets** the document's {{ htmlattrxref("width", "input") }} attribute, which defines the width of the image displayed for the button, if the value of {{htmlattrxref("type","input")}} is `image`.

Propiedades que sólo aplican a los elementos de tipo `file`

- `accept`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("accept", "input") }} attribute, containing comma-separated list of file types accepted by the server when {{htmlattrxref("type","input")}} is `file`.
- `allowdirs` {{non-standard_inline}}
  - : boolean: Part of the non-standard Directory Upload API; **indicates** whether or not to allow directories and files both to be selected in the file list. Implemented only in Firefox and is hidden behind a preference.
- `files`
  - : **Returns/accepts** a {{domxref("FileList")}} object, which contains a list of {{domxref("File")}} objects representing the files selected for upload.
- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} {{Non-standard_inline}}
  - : boolean: **Returns** the {{htmlattrxref("webkitdirectory", "input")}} attribute; if true, the file system picker interface only accepts directories instead of files.
- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{Non-standard_inline}}
  - : Array of {{domxref("FileSystemEntry")}} objects **describing** the currently-selected files or directories.

Properties that apply only to text/number-containing or elements

- `autocomplete`

  - : _`string`:_ **Returns / Sets** the element's {{htmlattrxref("autocomplete", "input")}} attribute, indicating whether the value of the control can be automatically completed by the browser. Ignored if the value of the {{htmlattrxref("type","input")}} attribute is `hidden`, `checkbox`, `radio`, `file`, or a button type (`button`, `submit`, `reset`, `image`). Possible values are:

    "on": the browser can autocomplete the value using previously stored value

    "off": the user must explicity enter a value

- `maxLength`
  - : _`long`:_ **Returns / Sets** the element's {{ htmlattrxref("maxlength", "input") }} attribute, containing the **maximum length of characters** (in Unicode code points) that the value can have. (If you set this to a negative number, an exception will be thrown.)
- `size`
  - : _`unsigned long`:_ **Returns / Sets** the element's {{ htmlattrxref("size", "input") }} attribute, containing **size of the control**. This value is in pixels unless the value of {{htmlattrxref("type","input")}} is `text` or `password`, in which case, it is an integer number of characters. Applies only when {{htmlattrxref("type","input")}} is set to `text`, `search`, `tel`, `url`, `email`, or `password`; otherwise it is ignored.
- `pattern`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("pattern", "input") }} attribute, containing a **regular expression** that the control's value is checked against. Use the {{htmlattrxref("title","input")}} attribute to describe the pattern to help the user. This attribute applies when the value of the {{htmlattrxref("type","input")}} attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.
- `placeholder`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("placeholder", "input") }} attribute, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the {{htmlattrxref("type","input")}} attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.
- `readOnly`

  - : _`boolean`:_ **Returns / Sets** the element's {{ htmlattrxref("readonly", "input") }} attribute, indicating that the user cannot modify the value of the control. This is ignored if the value of the {{htmlattrxref("type","input")}} attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.

- `min`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("min", "input") }} attribute, containing the minimum (numeric or date-time) value for this item, which must not be greater than its maximum ({{htmlattrxref("max","input")}} attribute) value.
- `max`
  - : _`string`:_ **Returns / Sets** the element's {{ htmlattrxref("max", "input") }} attribute, containing the maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** attribute) value.
- `selectionStart`
  - : _`unsigned long`:_ **Returns / Sets** the beginning index of the selected text. When nothing is selected, this returns the position of the text input cursor (caret) inside of the {{HTMLElement("input")}} element.
- `selectionEnd`
  - : _`unsigned long`:_ **Returns / Sets** the end index of the selected text. When there's no selection, this returns the offset of the character immediately following the current text input cursor position.
- `selectionDirection`
  - : _`string`:_ **Returns / Sets** the direction in which selection occurred. Possible values are:
    `"forward"` if selection was performed in the start-to-end direction of the current locale,
    `"backward"` for the opposite direction,
    `"none"` if the direction is unknown."

Propiedades aun no categorizadas

- `defaultValue`
  - : _`string:`_ **Returns / Sets** the default value as originally specified in the HTML that created this object.
- `dirName`
  - : _`string:`_ **Returns / Sets** the directionality of the element.
- `accessKey`
  - : _`string`:_ **Returns** a string containing a single character that switches input focus to the control when pressed.
- `list` {{readonlyInline}}
  - : _`{{domxref("HTMLElement")}} object:`_ **Returns** the element pointed by the {{ htmlattrxref("list", "input") }} attribute. The property may be `null` if no HTML element found in the same tree.
- `multiple`
  - : _`boolean`:_ **Returns / Sets** the element's {{ htmlattrxref("multiple", "input") }} attribute, indicating whether more than one value is possible (e.g., multiple files).
- `files`
  - : _`{{domxref("FileList")}} array:`_ **Returns** the list of selected files.
- {{domxref("HTMLInputElement.labels")}} {{readonlyInline}}
  - : `{{domxref("NodeList")}} array:` **Returns** a list of {{ HTMLElement("label") }} elements that are labels for this element.
- `step`
  - : `string:` **Returns / Sets** the element's {{ htmlattrxref("step", "input") }} attribute, which works with {{htmlattrxref("min","input")}} and {{htmlattrxref("max","input")}} to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.
- `valueAsDate`
  - : `{{jsxref("Date")}} object:` Returns / Sets the value of the element, interpreted as a date, or `null` if conversion is not possible.
- `valueAsNumber`

  - : `double`: **Returns** the value of the element, interpreted as one of the following, in order:

    - a time value
    - a number
    - NaN if conversion is impossible

- `autocapitalize` {{experimental_inline}}
  - : `string:` **defines** the capitalization behavior for user input. Valid values are `none`, `off`, `characters`, `words`, or `sentences`.

<!---->

- {{domxref("HTMLInputElement.align")}} {{deprecated_inline}}
  - : `string:` **represents** the alignment of the element. _Use CSS instead._
- {{domxref("HTMLInputElement.useMap")}} {{deprecated_inline}}
  - : `string:` **represents** a client-side image map.

## Métodos

- `focus()`
  - : Focus on the input element; keystrokes will subsequently go to this element.
- `blur()`
  - : Removes focus from input; keystrokes will subsequently go nowhere.
- [`select()`](/es/docs/Web/API/HTMLInputElement/select)
  - : Selects the input text in the element, and focuses it so the user can subsequently replace the whole entry.
- [`click()`](/es/docs/Web/API/HTMLInputElement/click)
  - : Simulates a click on the element.
- [`setSelectionRange()`](/es/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Selects a range of text in the element (but does not focus it). The optional selectionDirection parameter may be "forward" or "backward" to establish the direction in which selection was set, or "none" if the direction is unknown or not relevant. The default is "none". Specifying a selectionDirection parameter sets the value of the selectionDirection property.
- `setRangeText()`

  - : Replaces a range of text with the new text. If the _start_ and _end_ arguments are not provided, the range is assumed to be the selection.The final argument determines how the selection should be set after the text has been replaced. The possible values are:

    - "`select`"
      - : Selects the newly inserted text.
    - "`start`"
      - : Moves the selection to just before the inserted text.
    - "`end`"
      - : Moves the selection to just after the selected text.
    - "`preserve`"
      - : Attempts to preserve the selection. This is the default.

- `setCustomValidity()`
  - : Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
- `checkValidity()`
  - : Returns a {{jsxref("Boolean")}} that is `false` if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an [`invalid`](/es/docs/Web/Reference/Events/invalid) event at the element. It returns `true` if the element is not a candidate for constraint validation, or if it satisfies its constraints.

<!---->

- {{domxref("HTMLInputElement.stepDown()")}}

  - : Decrements the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

- {{domxref("HTMLInputElement.stepUp()")}}

  - : Increments the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value.,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

### Métodos no estandarizados

- {{domxref("HTMLInputElement.mozSetFileArray()")}}{{non-standard_inline}}
  - : Sets the files selected on the input to the given array of {{domxref("File")}} objects. This is an alternative to `mozSetFileNameArray()` which can be used in frame scripts: a chrome script can [open files as File objects](/es/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) and send them via [message manager](/es/Firefox/Multiprocess_Firefox/The_message_manager).
- {{domxref("HTMLInputElement.mozGetFileNameArray()")}}{{non-standard_inline}}
  - : Returns an array of all the file names from the input.
- {{domxref("HTMLInputElement.mozSetFileNameArray()")}}{{non-standard_inline}}
  - : Sets the filenames for the files selected on the input. Not for use in [frame scripts](/es/Firefox/Multiprocess_Firefox/Limitations_of_frame_scripts), because it accesses the file system.

## Eventos

Responde a este elemento usando [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) o asignando una respuesta a la propiedad `oneventname` de esta interface:

- [`input`](/es/docs/Web/API/HTMLElement/input_event)

  - : Se activa cuando el `value` de un elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} ha sido modificado.

    **Nota:** Esto es actualmente gatillado en la interface {{domxref("HTMLElement")}} y también aplica a los elementos [`contenteditable`](/es/docs/Web/HTML/Global_attributes/contenteditable), pero lo hemos listado acá porque es más utilizado con los elementos de entrada de formularios.

    También disponible por la propiedad manipuladora [`oninput`](/es/docs/Web/API/GlobalEventHandlers/oninput).

- [`invalid`](/es/docs/Web/API/HTMLElement/invalid_event)

  - : Fired when an element does not satisfy its constraints during constraint validation.

    Also available via the [`oninvalid`](/es/docs/Web/API/GlobalEventHandlers/oninvalid) event handler property.

- [`search`](/es/docs/Web/API/HTMLInputElement/search_event)

  - : Fired when a search is initiated on an {{HTMLElement("input")}} of `type="search"`.

    Also available via the [`onsearch`](/es/docs/Web/API/GlobalEventHandlers/onsearch) event handler property.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- HTML element implementing this interface: {{ HTMLElement("input") }}.
