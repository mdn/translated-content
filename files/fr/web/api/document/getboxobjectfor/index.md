---
title: Document.getBoxObjectFor()
slug: Web/API/Document/getBoxObjectFor
tags:
  - API
  - Boîte
  - DOM
  - Méthodes
  - Objets
translation_of: Web/API/Document/getBoxObjectFor
---
{{ ApiRef("DOM") }} {{obsolete_header}}

Renvoie un `boxObject` (x, y, largeur, hauteur) pour un élément spécifié.

> **Note :** Cette méthode est obsolète. Vous devez utiliser la méthode {{domxref("element.getBoundingClientRect()")}} à la place.

## Syntaxe

    boxObject = document.getBoxObjectFor(element);

- `boxObject` est un {{interface("nsIBoxObject")}}.
- `element` est un {{domxref("element","DOMElement")}}

## Exemple

```js
var myDiv = document.getElementById("myDiv"),
    boxObj = document.getBoxObjectFor (myDiv);

alert (
  "x:" + boxObj.x +
  ", y:" + boxObj.y +
  ", Width:" + boxObj.width +
  ", Height:" + boxObj.height
);
```

## Notes

Spécifié dans [nsIXULDocument.idl](http://mxr.mozilla.org/mozilla-central/source/dom/interfaces/xul/nsIDOMXULDocument.idl)
