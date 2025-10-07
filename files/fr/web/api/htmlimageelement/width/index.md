---
title: "HTMLImageElement : propriété width"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{domxref("HTMLImageElement")}} indique la largeur à laquelle une image est affichée en {{Glossary("CSS pixel", "pixels CSS")}} si elle est rendue sur un support visuel (écran ou imprimante). Sinon, il s'agit de la largeur intrinsèque de l'image, corrigée selon la densité de pixels.

## Valeur

Un entier qui indique la largeur de l'image.

- Si l'image est affichée sur un support visuel, la largeur est exprimée en {{Glossary("CSS pixel", "pixels CSS")}}.
- Sinon, la largeur correspond à la largeur intrinsèque de l'image, ajustée selon la densité d'affichage (voir {{domxref("HTMLImageElement.naturalWidth", "naturalWidth")}}).

## Exemples

Dans cet exemple, deux tailles sont fournies pour une image d'horloge avec l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset)&nbsp;: 200px et 400px. L'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) définit la largeur d'affichage selon la largeur de la zone d'affichage (<i lang="en">viewport</i>).

### HTML

Pour une zone d'affichage jusqu'à 400px de large, l'image est affichée à 200px. Sinon, elle est affichée à 400px.

```html
<p>
  Largeur de l'image&nbsp;: <span class="size">?</span>px (redimensionnez pour
  mettre à jour)
</p>
<img
  src="/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Horloge"
  srcset="
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width <= 400px) 200px, 400px" />
```

### JavaScript

Le code suivant lit la propriété `width` pour obtenir la largeur de l'image. Il s'exécute lors des événements {{domxref("Window.load_event", "load")}} et {{domxref("Window.resize_event", "resize")}} afin d'afficher la largeur actuelle.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateWidth = () => {
  output.innerText = clockImage.width;
};

updateWidth();
window.addEventListener("resize", updateWidth);
```

### Résultat

{{EmbedLiveSample("exemples", 640, 450)}}

Vous pouvez aussi essayer cet exemple {{LiveSampleLink('exemples', 'dans sa propre fenêtre')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
