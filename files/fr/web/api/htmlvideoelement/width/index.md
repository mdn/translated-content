---
title: "HTMLVideoElement : propriété width"
short-title: width
slug: Web/API/HTMLVideoElement/width
l10n:
  sourceCommit: 33b0a16f58b83a24a682b469e58f6b78713d0258
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLVideoElement")}} retourne un entier qui reflète l'attribut `width` de l'élément HTML {{HTMLElement("video")}}, définissant la largeur affichée de la ressource en pixels CSS.

## Valeur

Un entier positif ou 0.

## Exemples

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.width); // Affiche : 800
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.width")}}
- La propriété {{DOMxRef("HTMLEmbedElement.width")}}
- La propriété {{DOMxRef("HTMLIFrameElement.width")}}
- La propriété {{DOMxRef("HTMLImageElement.width")}}
- La propriété {{DOMxRef("HTMLObjectElement.width")}}
- La propriété {{DOMxRef("HTMLSourceElement.width")}}
