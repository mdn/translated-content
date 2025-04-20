---
title: <hgroup>
slug: Web/HTML/Reference/Elements/hgroup
---

{{HTMLSidebar}}

HTML-элемент **`<hgroup>`** представляет заголовок и связанное с ним содержимое. Он группирует одиночные элементы [`<h1>–<h6>`](/ru/docs/Web/HTML/Reference/Elements/Heading_Elements) в один или несколько [`<p>`](/ru/docs/Web/HTML/Reference/Elements/p).

{{InteractiveExample("HTML Demo: &lt;hgroup&gt;", "tabbed-standard")}}

```html interactive-example
<hgroup>
  <h1>Frankenstein</h1>
  <p>Or: The Modern Prometheus</p>
</hgroup>
<p>
  Victor Frankenstein, a Swiss scientist, has a great ambition: to create
  intelligent life. But when his creature first stirs, he realizes he has made a
  monster. A monster which, abandoned by his master and shunned by everyone who
  sees it, follows Dr Frankenstein to the very ends of the earth.
</p>
```

```css interactive-example
hgroup {
  text-align: right;
  padding-right: 16px;
  border-right: 10px solid #00c8d7;
}

hgroup h1 {
  margin-bottom: 0;
}

hgroup p {
  margin: 0;
  font-weight: bold;
}
```

## Атрибуты

Этот элемент поддерживает только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Техническая сводка

| Категория информации      | [Flow content](/ru/docs/Web/HTML/Guides/Content_categories#flow_content), heading content, palpable content.                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content         | One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}. |
| Tag omission              |                                                                                                                                                              |
| Permitted parent elements | Any element that accepts [flow content](/ru/docs/Web/HTML/Guides/Content_categories#flow_content).                                                           |
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
