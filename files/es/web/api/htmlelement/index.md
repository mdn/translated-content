---
title: HTMLElement
slug: Web/API/HTMLElement
tags:
  - API
translation_of: Web/API/HTMLElement
---
{{ APIRef("HTML DOM") }}La interfaz **`HTMLElement`** representa cualquier elemento [HTML](/es/docs/Web/HTML). Algunos elementos implementan directamente esta interfaz, otros la implementan a través de una interfaz que hereda de ella.

## Properties

_Hereda propiedades de su padre, {{domxref("Element")}}, y los implementalo de {{domxref("GlobalEventHandlers")}} y {{domxref("TouchEventHandlers")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : Es un {{domxref("DOMString")}} que representa la clave de acceso al elemento.
- {{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}
  - : Devuelve un {{domxref("DOMString")}} que contiene la clave asignada del elemento.
- {{domxref("HTMLElement.contentEditable")}}
  - : Es un {{domxref("DOMString")}}, donde el valor `"true"` significa que el elemento es editable y si el valor es `"false"` significa que no lo es.
- {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}
  - : Devuelve un {{domxref("Boolean")}} si el contenido del elemento puede ser editado.
- {{domxref("HTMLElement.contextMenu")}}
  - : Es un {{domxref("HTMLMenuElement")}} que representa el menú contextual asociado al elemento. Puede ser `null`
- {{domxref("HTMLElement.dataset")}} {{readonlyInline}}
  - : Devuelve un {{domxref("DOMStringMap")}} que permite el acceso de lectura y escritura de los atributos personalizados del elemento (`data-*`) .
- {{domxref("HTMLElement.dir")}}
  - : Es un {{domxref("DOMString")}}, que refleja el atributo global `dir`, representando la direccionalidad del elemento. Los posibles valores son `"ltr"`, `"rtl"`, and `"auto"`.
- {{domxref("HTMLElement.draggable")}}
  - : Es un {{jsxref("Boolean")}} que indica si el elemento puede ser arrastrado..
- {{domxref("HTMLElement.dropzone")}} {{readonlyInline}}
  - : Devuelve un {{domxref("DOMSettableTokenList")}} que refleja el atributo global `dropzone` y describe el comportamiento del elemento con respecto a una operación de soltar.
- {{domxref("HTMLElement.hidden")}}
  - : Es un {{jsxref("Boolean")}} que indica si el elemento está oculto.
- {{domxref("HTMLElement.itemScope")}} {{experimental_inline}}
  - : Es un {{jsxref("Boolean")}}...
- {{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemId")}} {{experimental_inline}}
  - : Es un {{domxref("DOMString")}}…
- {{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemValue")}} {{experimental_inline}}
  - : Devuelve un {{jsxref("Object")}}…
- {{domxref("HTMLElement.lang")}}
  - : Es un {{domxref("DOMString")}} que representa el lenguaje de los atributos del elemento, texto, y contenido del elemento.
- {{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un `double` que contiene la altura de, en relación al diseño (`layout)`.
- {{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}{{experimental_inline}}
  - : Devuelve un `double`, que representa la distancia desde el borde izquierdo del elemento hasta el borde izquierdo del elemento padre `offsetParent`'.
- {{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("Element")}} that is the element from which all offset calculations are currently computed.
- {{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double`, the distance from this element's top border to its `offsetParent`'s top border.
- {{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double` containing the width of an element, relative to the layout.
- {{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("HTMLPropertiesCollection")}}…
- {{domxref("HTMLElement.spellcheck")}}{{ gecko_minversion_inline("1.9")}}
  - : Is a {{jsxref("Boolean")}} that controls [spell-checking](/es/docs/HTML/Controlling_spell_checking_in_HTML_forms "en/Controlling_spell_checking_in_HTML_forms"). It is present on all HTML elements, though it hasn't an effect on all of them.
- {{domxref("HTMLElement.style")}}
  - : Is {{domxref("CSSStyleDeclaration")}}, an object representing the declarations of an element's style attributes.
- {{domxref("HTMLElement.tabIndex")}}
  - : Is a `long` representing the position of the element in the tabbing order.
- {{domxref("HTMLElement.title")}}
  - : Is a {{domxref("DOMString")}} containing the text that appears in a popup box when mouse is over the element.
- {{domxref("HTMLElement.translate")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}}

### Event handlers

La mayoria de las propiedades de los eventos, del formulario `onXYZ`, estan definidas en las interfaces {{domxref("GlobalEventHandlers")}} or {{domxref("TouchEventHandlers")}}, implementadas por `HTMLElement`. Otras pocas son especificas de `HTMLElement`.

- {{ domxref("HTMLElement.oncopy") }} {{ non-standard_inline() }}
  - : Returns the event handling code for the `copy` event ({{bug("280959")}}).
- {{ domxref("HTMLElement.oncut") }} {{ non-standard_inline() }}
  - : Returns the event handling code for the `cut` event ({{bug("280959")}}).
- {{ domxref("HTMLElement.onpaste") }} {{ non-standard_inline() }}
  - : Returns the event handling code for the `paste` event ({{bug("280959")}}).
- {{domxref("TouchEventHandlers.ontouchstart")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchstart")}} event.
- {{domxref("TouchEventHandlers.ontouchend")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchend")}} event.
- {{domxref("TouchEventHandlers.ontouchmove")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchmove")}} event.
- {{domxref("TouchEventHandlers.ontouchenter")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchenter")}} event.
- {{domxref("TouchEventHandlers.ontouchleave")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchleave")}} event.
- {{domxref("TouchEventHandlers.ontouchcancel")}} {{non-standard_inline}}
  - : Returns the event handling code for the {{event("touchcancel")}} event.

## Methods

_Inherits methods from its parent, {{domxref("Element")}}._

- {{domxref("HTMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{domxref("HTMLElement.click()")}}
  - : Sends a mouse click event to the element.
- {{domxref("HTMLElement.focus()")}}
  - : Makes the element the current keyboard focus.
- {{domxref("HTMLElement.forceSpellCheck()")}} {{experimental_inline}}
  - : Makes the spell checker runs on the element.

## Specifications

| Specification                                                                                                    | Status                           | Comment                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSSOM View', '#extensions-to-the-htmlelement-interface', 'HTMLElement')}} | {{Spec2('CSSOM View')}} | Added the following properties: `offsetParent`, `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight`.                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('HTML WHATWG', 'elements.html#htmlelement', 'HTMLElement')}}                 | {{Spec2('HTML WHATWG')}} | Added the following properties: `translate`, `itemScope`, `itemType`, `itemId`, `itemRef`, `itemProp`, `properties`, and `itemValue`. Added the following method: `forceSpellcheck()`. Moved the `onXYZ` attributes to the {{domxref("GlobalEventHandlers")}} interface and added an inheritance from it.                                                                                                                 |
| {{SpecName('HTML5 W3C', 'dom.html#htmlelement', 'HTMLElement')}}                             | {{Spec2('HTML5 W3C')}}     | Added the following properties: `dataset`, `hidden`, `tabindex`, `accessKey`, `accessKeyLabel`, `draggable`, `dropzone`, `contentEditable`, `isContentEditable`, `contextMenu`, `spellcheck`, `commandType`, `commandLabel`, `commandIcon`, `commandHidden`, `commandDisabled`, `commandChecked`, `style`, and all the `onXYZ` properties. Moved the `id` and `className` properties to the {{domxref("Element")}} interface. |
| {{SpecName('DOM2 HTML', 'html.html#ID-011100101', 'HTMLElement')}}                         | {{Spec2('DOM2 HTML')}}     | No change from {{SpecName('DOM2 HTML')}}                                                                                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('DOM1', 'level-one-html.html#ID-011100101', 'HTMLElement')}}                 | {{Spec2('DOM1')}}         | Initial definition.                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Browser compatibility

{{Compat("api.HTMLElement")}}

## See also

- {{domxref("Element")}}
