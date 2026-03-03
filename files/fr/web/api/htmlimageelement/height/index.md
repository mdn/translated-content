---
title: "HTMLImageElement : propriété height"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLImageElement")}} indique la hauteur à laquelle l'image est affichée, en {{Glossary("CSS pixel", "pixels CSS")}} si l'image est affichée ou rendue sur un support visuel tel qu'un écran ou une imprimante&nbsp;; sinon, il s'agit de la hauteur naturelle de l'image, corrigée de la densité de pixels.

## Valeur

Une valeur entière indiquant la hauteur de l'image. L'unité dans laquelle la hauteur est définie dépend du fait que l'image est affichée sur un support visuel ou non.

- Si l'image est affichée sur un support visuel tel qu'un écran ou une imprimante, la hauteur est exprimée en {{Glossary("CSS pixel", "pixels CSS")}}.
- Sinon, la hauteur de l'image est représentée par sa hauteur naturelle (intrinsèque), ajustée selon la densité d'affichage comme indiqué par {{DOMxRef("HTMLImageElement.naturalHeight", "naturalHeight")}}.

## Exemples

Dans cet exemple, deux tailles différentes sont proposées pour une image d'horloge à l'aide de l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset). L'une fait 200px de large et l'autre 400px. De plus, l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) est utilisé pour spécifier la largeur à laquelle l'image doit être affichée selon la largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais).

### HTML

Concrètement, pour les zones d'affichage jusqu'à 400px de large, l'image est affichée à une largeur de 200px&nbsp;; sinon, elle est affichée à 300px.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img
  src="/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Horloge"
  srcset="
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width <= 400px) 200px, 300px" />
```

### JavaScript

Le code JavaScript ci-dessous lit la propriété `height` pour déterminer la hauteur de l'image selon la largeur à laquelle elle est actuellement affichée.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = () => {
  output.innerText = clockImage.height;
};

updateHeight();
window.addEventListener("resize", updateHeight);
```

### Résultat

{{EmbedLiveSample("Exemples", 640, 450)}}

Vous pouvez aussi essayer cet exemple {{LiveSampleLink('Exemples', 'dans une nouvelle fenêtre')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.height")}}
- La propriété {{DOMxRef("HTMLEmbedElement.height")}}
- La propriété {{DOMxRef("HTMLIFrameElement.height")}}
- La propriété {{DOMxRef("HTMLObjectElement.height")}}
- La propriété {{DOMxRef("HTMLSourceElement.height")}}
- La propriété {{DOMxRef("HTMLVideoElement.height")}}
