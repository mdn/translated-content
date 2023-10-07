---
title: <display-listitem>
slug: Web/CSS/display-listitem
---

{{CSSRef}}

Ключевое слово `list-item` приводит к тому, что элемент генерирует `::marker` псевдо-элемент с определяемыми {{cssxref("list-style")}} свойствами (например, маркерной точкой) вместе с основным блоком указанного типа для его содержимого.

## Синтаксис

Единственное значение `list-item приведёт к тому, что элемент будет вести себя как элемент списка. Это можно использовать вместе с {{CSSxRef("list-style-type")}} и {{CSSxRef("list-style-position")}}.`

> **Примечание:** В браузерах, поддерживающих двухзначный синтаксис, если внутреннее значение не указано, по умолчанию оно будет `flow`. Если внешнее значение не указано, основной блок будет иметь внешний вид отображения (`outer display type`) block.`

## `Пример`

### `HTML`

```html
<div class="fake-list">I will display as a list item</div>
```

### `CSS`

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### `Результат`

`{{EmbedLiveSample("Пример", "100%", 150)}}`

## Совместимость с браузерами

### `Поддержка list-item`

{{Compat("css.properties.display.list-item", 10)}}
