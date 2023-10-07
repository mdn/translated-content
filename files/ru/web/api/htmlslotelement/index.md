---
title: HTMLContentElement
slug: Web/API/HTMLSlotElement
---

{{ APIRef("Web Components") }}

{{Deprecated_header}}

The **`HTMLContentElement`** interface represents a {{HTMLElement("content")}} HTML Element, which is used in [Shadow DOM](/ru/docs/Web/Web_Components/Shadow_DOM).

## Свойства

_This interface inherits the properties of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.select")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`select`](/ru/docs/Web/HTML/Element/content#select) HTML attribute. The value is a comma-separated list of CSS selectors that select the content to insert in place of the `<content>` element.

## Методы

_This interface inherits the methods of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : Returns a static {{domxref("NodeList")}} of the {{glossary("distributed nodes")}} associated with this `<content>` element.

## Спецификации

This feature is no longer defined by any standards.

## Поддержка браузерами

{{Compat}}

## Смотрите также

- The {{HTMLElement("content")}} HTML element, implementing this interface.
- [Shadow DOM](/ru/docs/Web/Web_Components/Shadow_DOM)
