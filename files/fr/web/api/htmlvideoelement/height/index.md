---
title: "HTMLVideoElement : propriété height"
short-title: height
slug: Web/API/HTMLVideoElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLVideoElement")}} retourne un entier qui reflète l'attribut `height` de l'élément HTML {{HTMLElement("video")}}, définissant la hauteur affichée de la ressource en pixels CSS.

## Valeur

Un entier positif ou 0.

## Exemples

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.height); // Affiche : 600
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.height")}}
- La propriété {{DOMxRef("HTMLEmbedElement.height")}}
- La propriété {{DOMxRef("HTMLIFrameElement.height")}}
- La propriété {{DOMxRef("HTMLImageElement.height")}}
- La propriété {{DOMxRef("HTMLObjectElement.height")}}
- La propriété {{DOMxRef("HTMLSourceElement.height")}}
