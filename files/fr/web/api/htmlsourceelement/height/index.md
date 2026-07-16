---
title: "HTMLSourceElement : propriété height"
short-title: height
slug: Web/API/HTMLSourceElement/height
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLSourceElement")}} est un nombre positif ou nul indiquant la hauteur de la ressource image en pixels CSS.

Cette propriété n'a d'effet que si le parent de l'élément HTML {{HTMLElement("source")}} courant est un élément HTML {{HTMLElement("picture")}}.

Elle reflète l'attribut `height` de l'élément HTML {{HTMLElement("source")}}.

## Valeur

Un nombre positif ou nul indiquant la hauteur de la ressource image en pixels CSS.

## Exemples

```html
<picture id="img">
  <source
    srcset="landscape.png"
    media="(width >= 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(width >= 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(width >= 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image utilisée lorsque le navigateur ne prend pas en charge les sources"
    width="500"
    height="400" />
</picture>
```

```js
const img = document.getElementById("img");
const sources = img.querySelectorAll("source");
console.log(Array.from(sources).map((el) => el.height)); // Affiche : [400, 800, 800]
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
- La propriété {{DOMxRef("HTMLVideoElement.height")}}
