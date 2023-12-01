---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}{{seeCompatTable}}

> **Примечание:** Этот элемент был удалён из HTML5 (W3C) спецификации , но до сих пор остаётся в спецификации WHATWG. Он частично встроен в большинство браузеров, хотя бы поэтому вряд ли уйдёт. Поскольку схематический алгоритм не реализован ни в одном браузере, семантика тега `<hgroup>` на практике реализована только теоретически. Спецификация HTML5 (W3C) даёт совет как обозначать [подзаголовки, альтернативные заголовки и слоганы](http://www.w3.org/TR/html5/common-idioms.html#sub-head).

HTML \<hgroup> Элемент (HTML Headings Group Element - Элемент Группы Заголовков HTML) представляет заголовок раздела. Он определяет один заголовок, который участвует в схеме документа как заголовок явно или неявно заданного раздела, к которому он принадлежит.

Собственно текст для схематического алгоритма - это текст первого элемента заголовка HTML наивысшего ранга (т. Е. Первый {{HTMLElement ("h1")}}, {{HTMLElement ("h2")}}, {{HTMLElement (" h3 ")}}, {{HTMLElement (" h4 ")}}, {{HTMLElement (" h5 ")}} или {{HTMLElement (" h6 ")}} с наименьшим числом потомков), а rank - уровень этого элемента заголовка HTML.

Поэтому этот элемент группирует несколько заголовков, внося лишь основной текст в план документа. Он позволяет связывать вторичные заголовки, такие как подзаголовки, альтернативные заголовки или даже теги, с основным заголовком, без загрязнения структуры документа.

| Категория информации      | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), heading content, palpable content.                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content         | One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}. |
| Tag omission              | {{no_tag_omission}}                                                                                                                                          |
| Permitted parent elements | Any element that accepts [flow content](/ru/docs/HTML/Content_categories#Flow_content).                                                                      |
| DOM interface             | {{domxref("HTMLElement")}}                                                                                                                                   |

## Атрибуты

This element only includes the [global attributes](/ru/docs/HTML/Global_attributes).

## Примеры

```html
<hgroup>
  <h1>Главный заголовок</h1>
  <h2>Вторичный заголовок</h2>
</hgroup>
```

## Совместимость браузеров

{{Compat}}

## Смотрите также

- Другие элементы, связанные с разделом: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
