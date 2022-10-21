---
title: Document.body
slug: Web/API/Document/body
tags:
  - API
  - BODY
  - Document
  - frameset
translation_of: Web/API/Document/body
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

| Спецификация                                                                                     | Статус                           | Комментарии           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------- |
| {{SpecName('HTML WHATWG','dom.html#dom-document-body','Document.body')}} | {{Spec2('HTML WHATWG')}} |                       |
| {{SpecName('HTML5.1','dom.html#dom-document-body','Document.body')}}     | {{Spec2('HTML5.1')}}     |                       |
| {{SpecName('HTML5 W3C','dom.html#dom-document-body','Document.body')}}     | {{Spec2('HTML5 W3C')}}     |                       |
| {{SpecName('DOM2 HTML','html.html#ID-56360201','Document.body')}}         | {{Spec2('DOM2 HTML')}}     |                       |
| {{SpecName('DOM1','level-one-html.html#attribute-body','Document.body')}} | {{Spec2('DOM1')}}         | Исходное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("document.head")}}
