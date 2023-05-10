---
title: HTMLHeadingElement
slug: Web/API/HTMLHeadingElement
translation_of: Web/API/HTMLHeadingElement
---

{{ APIRef("HTML DOM") }}

**`HTMLHeadingElement`** интерфейс представляет различные элементы заголовков. Наследует методы и свойства из {{domxref("HTMLElement")}}.

{{InheritanceDiagram(600, 120)}}

## Свойства

_Наследует свойства родителя, {{domxref("HTMLElement")}}._

- {{domxref("HTMLHeadingElement.align")}}
  - : Is a {{domxref("DOMString")}} representing an enumerated attribute indicating alignment of the heading with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`.

## Методы

_Нет специфичных методов; наследует методы родителя, {{domxref("HTMLElement")}}._

## Specifications

| Specification                                                                                                                                | Status                           | Comment                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmlheadingelement", "HTMLHeadingElement")}}                                             | {{Spec2('HTML WHATWG')}} |                                       |
| {{SpecName('HTML5 W3C', "sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements", "HTMLHeadingElement")}} | {{Spec2('HTML5 W3C')}}     | The `align` property is now obsolete. |
| {{SpecName('DOM2 HTML', 'html.html#ID-43345119', 'HTMLHeadingElement')}}                                             | {{Spec2('DOM2 HTML')}}     | No change                             |
| {{SpecName('DOM1', 'level-one-html.html#ID-43345119', 'HTMLHeadingElement')}}                                     | {{Spec2('DOM1')}}         | Initial definition                    |

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, and {{ HTMLElement("h6") }}.
