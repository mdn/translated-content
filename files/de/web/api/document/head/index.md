---
title: Document.head
slug: Web/API/Document/head
tags:
  - Referenz
translation_of: Web/API/Document/head
---
{{APIRef("DOM")}}

Gibt das {{HTMLElement("head")}} Element des aktuellen Dokuments aus. Ist mehr als ein `<head>` Element vorhanden, wird das erste Element ausgegeben.

## Syntax

```js
var objRef = document.head;
```

## Beispiel

```js
// in HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert( document.head === document.querySelector("head") ); // true
```

## Anmerkungen

`document.head` ist nur lesbar. Der Versuch dieser Eigenschaft einen Wert zu zuweisen, wird ohne Ausgabe einer Fehlermeldung fehlschlagen, oder, bei verwendetem
[ECMAScript Strict Mode](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) in einem Gecko Browser, mit einem [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) quittiert.

## Spezifikation

{{Specifications}}

## Browser Kompatibilität

{{Compat("api.Document.head")}}

## Siehe auch

- {{domxref("document.body")}}
