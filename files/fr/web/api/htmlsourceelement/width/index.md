---
title: "HTMLSourceElement : propriété width"
short-title: width
slug: Web/API/HTMLSourceElement/width
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLSourceElement")}} est un nombre positif ou nul indiquant la largeur de la ressource image en pixels CSS.

Cette propriété n'a d'effet que si le parent de l'élément HTML {{HTMLElement("source")}} courant est un élément HTML {{HTMLElement("picture")}}.

Elle reflète l'attribut `width` de l'élément {{HTMLElement("source")}}.

## Valeur

Un nombre positif ou nul indiquant la largeur de la ressource image en pixels CSS.

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
console.log(Array.from(sources).map((el) => el.width)); // Affiche : [1000, 800, 600]
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
- La propriété {{DOMxRef("HTMLVideoElement.width")}}
