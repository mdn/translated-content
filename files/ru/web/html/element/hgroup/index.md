---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}

HTML-элемент **`<hgroup>`** представляет заголовок и связанное с ним содержимое. Он группирует одиночные элементы [`<h1>–<h6>`](/ru/docs/Web/HTML/Element/Heading_Elements) в один или несколько [`<p>`](/ru/docs/Web/HTML/Element/p).

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

## Атрибуты

Этот элемент поддерживает только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

## Техническая сводка

| Категория информации      | [Flow content](/ru/docs/Web/HTML/Content_categories#flow_content), heading content, palpable content.                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content         | One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}. |
| Tag omission              |                                                                                                                                                              |
| Permitted parent elements | Any element that accepts [flow content](/ru/docs/Web/HTML/Content_categories#flow_content).                                                                  |
| DOM interface             | {{domxref("HTMLElement")}}                                                                                                                                   |

## Примеры

```html
<hgroup>
  <h1>Главный заголовок</h1>
  <h2>Вторичный заголовок</h2>
</hgroup>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие элементы, связанные с разделом: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
