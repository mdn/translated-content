---
title: Node.normalize()
slug: Web/API/Node/normalize
tags:
  - API
  - DOM
  - Méthode
  - Node
  - Referenz
translation_of: Web/API/Node/normalize
---
{{APIRef("DOM")}}

Die **`Node.normalize()`** Methode fügt die ausgewählte Node und all Ihre Kindelemente in eine "normalisierte" Form. In einer normalisierten Node sind keine Textnodes leer und es gibt keine parallel existierenden Textnodes.

## Schreibweise

    element.normalize();

## Beispiel

```js
var wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Teil 1 ") );
wrapper.appendChild( document.createTextNode("Teil 2 ") );

// Her wäre: wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Teil 1 "
// wrapper.childNodes[1].textContent === "Teil 2 "

wrapper.normalize();

// Jetzt: wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Teil 1 Teil 2 "
```

## Spezifikation

- [DOM Level 2 Core: Node.normalize](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-normalize)

## Verwandte Themen

- [`Text.splitText`](/de/docs/DOM/Text.splitText "DOM/Text.splitText")
