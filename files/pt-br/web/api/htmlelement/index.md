---
title: HTMLElement
slug: Web/API/HTMLElement
---

{{ APIRef("HTML DOM") }}

A interface **`HTMLElement`** representa qualquer elemento [HTML](/pt-BR/docs/Web/HTML). Alguns elementos implementam diretamente essa interface, outros a implementam por meio de uma interface que a herda.

## Propriedades

_Propriedades herdadas do elemento pai, {{domxref("Element")}}, e aquelas implementadas de {{domxref("GlobalEventHandlers")}} e de {{domxref("TouchEventHandlers")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : Is a {{domxref("DOMString")}} representing the access key assigned to the element.
- {{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the element's assigned access key.
- {{domxref("HTMLElement.contentEditable")}}
  - : Is a {{domxref("DOMString")}}, where a value of `"true"` means the element is editable and a value of `"false"` means it isn't.
- {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} that indicates whether or not the content of the element can be edited.
- {{domxref("HTMLElement.contextMenu")}}
  - : Is an {{domxref("HTMLMenuElement")}} representing the contextual menu associated with the element. It may be null
- {{domxref("HTMLElement.dataset")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMStringMap")}} that allows access to read and write the element custom data attributes (`data-*`) .
- {{domxref("HTMLElement.dir")}}
  - : Is a {{domxref("DOMString")}}, reflecting the `dir` global attribute, representing the directionality of the element. Possible values are `"ltr"`, `"rtl"`, and `"auto"`.
- {{domxref("HTMLElement.draggable")}}
  - : Is a {{jsxref("Boolean")}} indicating if the element can be dragged.
- {{domxref("HTMLElement.dropzone")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMSettableTokenList")}} reflecting the `dropzone` global attribute and describing the behavior of the element regarding a drop operation.
- {{domxref("HTMLElement.hidden")}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is hidden or not.
- {{domxref("HTMLElement.itemScope")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}}…
- {{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemId")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}}…
- {{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemValue")}} {{experimental_inline}}
  - : Returns an {{jsxref("Object")}}…
- {{domxref("HTMLElement.lang")}}
  - : Is a {{domxref("DOMString")}} representing the language of an element's attributes, text, and element contents.
- {{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a `double` containing the height of an element, relative to the layout.
- {{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double`, the distance from this element's left border to its `offsetParent`'s left border.
- {{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("Element")}} that is the element from which all offset calculations are currently computed.
- {{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double`, the distance from this element's top border to its `offsetParent`'s top border.
- {{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double` containing the width of an element, relative to the layout.
- {{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns an {{domxref("HTMLPropertiesCollection")}}…
- {{domxref("HTMLElement.spellcheck")}}
  - : Is a {{jsxref("Boolean")}} that controls [spell-checking](/pt-BR/docs/HTML/Controlling_spell_checking_in_HTML_forms). It is present on all HTML elements, though it hasn't an effect on all of them.
- {{domxref("HTMLElement.style")}}
  - : Is {{domxref("CSSStyleDeclaration")}}, an object representing the declarations of an element's style attributes.
- {{domxref("HTMLElement.tabIndex")}}
  - : Is a `long` representing the position of the element in the tabbing order.
- {{domxref("HTMLElement.title")}}
  - : Is a {{domxref("DOMString")}} containing the text that appears in a popup box when mouse is over the element.
- {{domxref("HTMLElement.translate")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}}

### Event handlers

Most events properties, of the form `onXYZ`, are defined on the {{domxref("GlobalEventHandlers")}} or {{domxref("TouchEventHandlers")}}, implemented by `HTMLElement`. A few more are specific to `HTMLElement`.

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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{domxref("Element")}}
