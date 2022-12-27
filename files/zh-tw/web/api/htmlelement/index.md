---
title: HTMLElement
slug: Web/API/HTMLElement
---

{{ APIRef("HTML DOM") }}

**`HTMLElement`** 介面表示了所有的 [HTML](/docs/Web/HTML) 元素。部分元素直接實作了此介面，其它則是實作繼承自 `HTMLElement` 的子介面。

{{InheritanceDiagram}}

## 屬性

_Inherits properties from its parent, {{domxref("Element")}}, and implements those from {{domxref("GlobalEventHandlers")}} and {{domxref("TouchEventHandlers")}}._

- {{domxref("HTMLElement.accessKey")}}
  - : Is a {{domxref("DOMString")}} representing the access key assigned to the element.
- {{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the element's assigned access key.
- {{domxref("HTMLElement.contentEditable")}}
  - : Is a {{domxref("DOMString")}}, where a value of `"true"` means the element is editable and a value of `"false"` means it isn't.
- {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} that indicates whether or not the content of the element can be edited.
- {{domxref("HTMLElement.contextMenu")}}
  - : Is a {{domxref("HTMLMenuElement")}} representing the contextual menu associated with the element. It may be `null`.
- {{domxref("HTMLElement.dataset")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMStringMap")}} with which script can read and write the element's [custom data attributes](/zh-TW/docs/Web/Guide/HTML/Using_data_attributes) (`data-*`) .
- {{domxref("HTMLElement.dir")}}
  - : Is a {{domxref("DOMString")}}, reflecting the `dir` global attribute, representing the directionality of the element. Possible values are `"ltr"`, `"rtl"`, and `"auto"`.
- {{domxref("HTMLElement.draggable")}}
  - : Is a {{jsxref("Boolean")}} indicating if the element can be dragged.
- {{domxref("HTMLElement.dropzone")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMSettableTokenList")}} reflecting the `dropzone` global attribute and describing the behavior of the element regarding a drop operation.
- {{domxref("HTMLElement.hidden")}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is hidden or not.
- {{domxref("HTMLElement.itemScope")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}} representing the item scope.
- {{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemId")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} representing the item ID.
- {{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMSettableTokenList")}}…
- {{domxref("HTMLElement.itemValue")}} {{experimental_inline}}
  - : Returns a {{jsxref("Object")}} representing the item value.
- {{domxref("HTMLElement.lang")}}
  - : Is a {{domxref("DOMString")}} representing the language of an element's attributes, text, and element contents.
- {{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a `double` containing the height of an element, relative to the layout.
- {{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double`, the distance from this element's left border to its `offsetParent`'s left border.
- {{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("Element")}} that is the element from which all offset calculations are currently computed.
- {{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double`, the distance from this element's top border to its `offsetParent`'s top border.
- {{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}{{experimental_inline}}
  - : Returns a `double` containing the width of an element, relative to the layout.
- {{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("HTMLPropertiesCollection")}}…
- {{domxref("HTMLElement.spellcheck")}}
  - : Is a {{jsxref("Boolean")}} that controls [spell-checking](/zh-TW/docs/HTML/Controlling_spell_checking_in_HTML_forms). It is present on all HTML elements, though it doesn't have an effect on all of them.
- {{domxref("HTMLElement.style")}}
  - : Is a {{domxref("CSSStyleDeclaration")}}, an object representing the declarations of an element's style attributes.
- {{domxref("HTMLElement.tabIndex")}}
  - : Is a `long` representing the position of the element in the tabbing order.
- {{domxref("HTMLElement.title")}}
  - : Is a {{domxref("DOMString")}} containing the text that appears in a popup box when mouse is over the element.
- {{domxref("HTMLElement.translate")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}} representing the translation.

### 事件處理器

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

## 方法

_Inherits methods from its parent, {{domxref("Element")}}._

- {{domxref("HTMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{domxref("HTMLElement.click()")}}
  - : Sends a mouse click event to the element.
- {{domxref("HTMLElement.focus()")}}
  - : Makes the element the current keyboard focus.
- {{domxref("HTMLElement.forceSpellCheck()")}} {{experimental_inline}}
  - : Runs the spell checker on the element's contents.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Element")}}
