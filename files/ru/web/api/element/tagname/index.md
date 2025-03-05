---
title: Element.tagName
slug: Web/API/Element/tagName
---

{{APIRef("DOM")}}

## Описание

Возвращает HTML-тег элемента _("div", "p", "a" и т.д)._

## Синтаксис

```
var elementName = element.tagName;
```

- **`elementName`** это строка, содержащая название HTML-тега элемента **`element`**.

> [!WARNING]
> В XML (и XML-подобных языках) возвращаемое значение будет в нижнем регистре, а в HTML - в верхнем.

> [!NOTE]
> Существует более древнее и обыденное свойство [nodeName](/en-US/DOM/Node.nodeName)!

## Пример

Предположим, есть на странице элемент с id **"born"**:

```
<span id="born">Я родился...</span>
```

Давайте узнаем его HTML-тег:

```js
var span = document.getElementById("born");
alert(span.tagName); //"SPAN"
```

## Спецификации

- [DOM Level 2 Core: tagName](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815)
- [HTML 5: APIs in HTML documents](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
