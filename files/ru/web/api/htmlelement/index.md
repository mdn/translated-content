---
title: HTMLElement
slug: Web/API/HTMLElement
translation_of: Web/API/HTMLElement
---

{{ APIRef("HTML DOM") }}

Интерфейс **`HTMLElement`** представляет собой любой элемент [HTML](/ru/docs/Web/HTML). Некоторые элементы напрямую используют этот интерфейс, другие - через промежуточный интерфейс.

{{InheritanceDiagram}}

## Свойства

_Наследует свойства родителя, {{domxref("Element")}}, и реализует их через {{domxref("GlobalEventHandlers")}} и {{domxref("TouchEventHandlers")}}._

- {{domxref("HTMLElement.accessKey")}} -- ключ доступа
  - : Эта строковая переменная {{domxref("DOMString")}} отображает ключ доступа, сопоставленный элементу _{{domxref("Element")}}_.
- {{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}
  - : Возвращает {{domxref ("DOMString")}}, содержащий назначенный ключ доступа элемента.
- {{domxref("HTMLElement.contentEditable")}}
  - : Является {{domxref ("DOMString")}}, где значение" true "означает, что элемент доступен для редактирования, а значение" false " означает, что это не так.
- {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}
  - : Возвращает {{domxref ("Boolean")}}, который указывает, можно ли редактировать содержимое элемента.
- {{domxref("HTMLElement.contextMenu")}}
  - : Является {{domxref ("HTMLMenuElement")}}, представляющим контекстное меню, связанное с элементом. Может быть null
- {{domxref("HTMLElement.dataset")}} {{readonlyInline}} -- набор данных
  - : Возвращает {{domxref("domstringmap")}}, который позволяет получить доступ к чтению и записи атрибутов пользовательских данных элемента (data-\*) .
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
  - : Is a {{jsxref("Boolean")}} that controls [spell-checking](/ru/docs/HTML/Controlling_spell_checking_in_HTML_forms). It is present on all HTML elements, though it hasn't an effect on all of them.
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

## Specifications

| Specification                                                                                                    | Status                           | Comment                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSSOM View', '#extensions-to-the-htmlelement-interface', 'HTMLElement')}} | {{Spec2('CSSOM View')}} | Added the following properties: `offsetParent`, `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight`.                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('HTML WHATWG', 'elements.html#htmlelement', 'HTMLElement')}}                 | {{Spec2('HTML WHATWG')}} | Added the following properties: `translate`, `itemScope`, `itemType`, `itemId`, `itemRef`, `itemProp`, `properties`, and `itemValue`. Added the following method: `forceSpellcheck()`. Moved the `onXYZ` attributes to the {{domxref("GlobalEventHandlers")}} interface and added an inheritance from it.                                                                                                                 |
| {{SpecName('HTML5 W3C', 'dom.html#htmlelement', 'HTMLElement')}}                             | {{Spec2('HTML5 W3C')}}     | Added the following properties: `dataset`, `hidden`, `tabindex`, `accessKey`, `accessKeyLabel`, `draggable`, `dropzone`, `contentEditable`, `isContentEditable`, `contextMenu`, `spellcheck`, `commandType`, `commandLabel`, `commandIcon`, `commandHidden`, `commandDisabled`, `commandChecked`, `style`, and all the `onXYZ` properties. Moved the `id` and `className` properties to the {{domxref("Element")}} interface. |
| {{SpecName('DOM2 HTML', 'html.html#ID-011100101', 'HTMLElement')}}                         | {{Spec2('DOM2 HTML')}}     | No change from {{SpecName('DOM2 HTML')}}                                                                                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('DOM1', 'level-one-html.html#ID-011100101', 'HTMLElement')}}                 | {{Spec2('DOM1')}}         | Initial definition.                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element")}}
