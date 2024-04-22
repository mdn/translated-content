---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

Возвращает узел {{HTMLElement("body")}} или {{HTMLElement("frameset")}} текущей страницы, или **`null`** если таких элементов не существует.

## Синтаксис

```
var objRef = document.body;
document.body = objRef;
```

## Пример

```js
// в HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Примечания

**`document.body`** это элемент, который включает в себя содержимое страницы. На страницах с `<body>` вернётся элемент `<body>`, а с frameset - элемент `<frameset>`.

**`body`** может быть заменено, но это удалит все его дочерние элементы.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("document.head")}}
