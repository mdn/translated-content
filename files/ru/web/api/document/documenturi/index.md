---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}

Свойство **`documentURI`** интерфейса {{domxref("Document")}} возвращает строку с текущим адресом документа.

Первоначально определено в DOM3 как атрибут для чтения и записи. В спецификации DOM4 это свойство доступно только для чтения.

## Синтаксис

```js
var string = document.documentURI;
```

## Примечание

HTML документы содержат свойство {{domxref("document.URL")}} которое возвращает то же значение. Но в отличие от `URL`, свойство `documentURI` доступно для всех типов документов.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
