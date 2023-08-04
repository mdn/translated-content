---
title: XMLSerializer
slug: Web/API/XMLSerializer
---

`XMLSerializer` может быть использован для конвертации веток DOM-дерева или дерева целиком в текст. `XMLSerializer` доступен непривилегированным скриптам.

Для получения более подробной информации об `XMLSerializer` в расширениях для браузера Firefox, пожалуйста обратитесь к документации [`nsIDOMSerializer`](/ru/docs/nsIDOMSerializer).

## Методы

- `XMLSerializer.serializeToString()`
  - : Возвращает сериализованное дерево или ветку в виде строки
- `XMLSerializer.serializeToStream()` {{ non-standard_inline() }}{{ deprecated_inline() }}
  - : Поддерево, обёрнутое в указанный элемент, сериализуется в поток байтов с использованием указанной кодировки.

## Примеры

```js
var s = new XMLSerializer();
var d = document;
var str = s.serializeToString(d);
alert(str);
```

The next example uses XMLSerializer with [insertAdjacentHTML()](/ru/docs/DOM/element.insertAdjacentHTML) to insert a newly created DOM Node into the Document's body. Because [insertAdjacentHTML()](/ru/docs/DOM/element.insertAdjacentHTML) accepts a string and not a Node for its second parameter, XMLSerializer is used to first convert the node into a string.

```js
var inp = document.createElement("input");
var XMLS = new XMLSerializer();
var inp_xmls = XMLS.serializeToString(inp); // Конвертируем DOM-элемент в строку

// Вставляет вновь созданный элемент в тело документа
document.body.insertAdjacentHTML("afterbegin", inp_xmls);
```

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [Parsing and serializing XML](/en-US/Parsing_and_serializing_XML)
- [XMLHttpRequest](/en-US/XMLHttpRequest)
- [DOMParser](/en-US/DOMParser)
