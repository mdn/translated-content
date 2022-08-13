---
title: Document.width
slug: Web/API/Document/width
translation_of: Web/API/Document/width
---
{{APIRef("DOM")}} {{Obsolete_header}}

> **Note:** Starting in {{Gecko("6.0")}},` document.width `is no longer supported. Instead, use `document.body.clientWidth`. See {{domxref("element.clientWidth")}}.

Gibt die Breite des {{HTMLElement("body")}} Elements des aktuellen Dokuments in Pixeln zurück.

Wird nicht vom Internet Explorer unterstützt.

## Syntax

    pixels = document.width;

## Beispiel

```js
function init() {
    alert("Die Breite des Dokuments beträgt " + document.width + " Pixel.");
}
```

## Alternativen

    document.body.clientWidth              /* Breite des <body> */
    document.documentElement.clientWidth   /* Breite des <html> */
    window.innerWidth                      /* Breite des Browserfensters */

## Spezifikation

HTML5

## Siehe auch

- {{domxref("document.height")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
