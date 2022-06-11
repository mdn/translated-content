---
title: Document.width
slug: Web/API/Document/width
translation_of: Web/API/Document/width
---
{{APIRef("DOM")}}{{deprecated_header}}

> **Note :** À partir de {{Gecko("6.0")}},` document.width `n'est plus pris en charge. Au lieu de cela, utilisez document.body.clientWidth. Voir {{domxref("element.clientWidth")}}.

Renvoie la largeur de l'élément {{HTMLElement("body")}} du document courrent en pixels.

Non pris en charge par Internet Explorer.

## Syntaxe

    pixels = document.width;

## Exemple

```js
function init() {
    alert("La largeur du document est " + document.width + " pixels.");
}
```

## Alternatives

    document.body.clientWidth              /* largeur de <body> */
    document.documentElement.clientWidth   /* largeur de <html> */
    window.innerWidth                      /* largeur de la fenêtre */

## Spécification

HTML5

## Voir également

- {{domxref("document.height")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
