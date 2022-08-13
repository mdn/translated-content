---
title: Document.body
slug: Web/API/Document/body
translation_of: Web/API/Document/body
---
{{APIRef("DOM")}}

Gibt den {{HTMLElement("body")}} oder {{HTMLElement("frameset")}} Knoten des aktuellen Dokuments wieder, oder `null` falls keines dieser Elemente existiert.

## Syntax

    var objRef = document.body;
    document.body = objRef;

## Beispiel

```js
// in HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Anmerkungen

`document.body` ist das Element, welches den Inhalt eines Dokuments enthält. In Dokumenten mit `<body>` Inhalt, gibt das `<body>` Element den Inhalt aus, in Frameset Dokumenten wiederum, wird das äußerste `<frameset>` Element ausgegeben.

Da `body` setzbar ist, wird das Setzen eines neuen Body Elements alle aktuellen Elemente des existierenden `<body>` Elements entfernen.

## Spezifikation

{{Specifications}}

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.head")}}
