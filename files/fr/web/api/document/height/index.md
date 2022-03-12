---
title: Document.height
slug: Web/API/Document/height
translation_of: Web/API/Document/height
---
{{APIRef("DOM")}} {{Obsolete_header}}

> **Note :** Apparu avec Gecko 6.0, `document.height` n'est plus supporté. Utilisez à la place `document.body.clientHeight`. Voir [`element.clientHeight`](/fr/docs/Web/API/Element/clientHeight).

## Résumé

Retourne la hauteur de l'objet {{domxref("document")}}. Dans la plupart des cas, ceci est égal à l'élément {{HTMLElement("body")}} du document courant.

## Syntaxe

    height_value = document.height

## Exemple

```js
// alert document height
alert(document.height);
```

## Alternatives

    document.body.clientHeight
    document.documentElement.clientHeight
    document.documentElement.scrollHeight

## Spécification

HTML5

## Voir aussi

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
