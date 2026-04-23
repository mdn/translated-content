---
title: "HTMLImageElement : propriété width"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLImageElement")}} indique la largeur à laquelle une image est affichée en {{Glossary("CSS pixel", "pixels CSS")}} si elle est rendue sur un support visuel (écran ou imprimante). Sinon, il s'agit de la largeur intrinsèque de l'image, corrigée selon la densité de pixels.

## Valeur

Une valeur entière indiquant la largeur de l'image. La façon dont la largeur est définie dépend du fait que l'image est rendue sur un support visuel ou non.

- Si l'image est affichée sur un support visuel, la largeur est exprimée en {{Glossary("CSS pixel", "pixels CSS")}}.
- Sinon, la largeur correspond à la largeur intrinsèque de l'image, ajustée selon la densité d'affichage (voir {{DOMxRef("HTMLImageElement.naturalWidth", "naturalWidth")}}).

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

Le code suivant lit la propriété `width` pour obtenir la largeur de l'image. Il s'exécute lors des événements {{DOMxRef("Window.load_event", "load")}} et {{DOMxRef("Window.resize_event", "resize")}} afin d'afficher la largeur actuelle.

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

{{EmbedLiveSample("Exemples", 640, 450)}}

Vous pouvez aussi essayer cet exemple {{LiveSampleLink('Exemples', 'dans sa propre fenêtre')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.height")}}
- La propriété {{DOMxRef("HTMLImageElement.naturalWidth")}}
- La propriété {{DOMxRef("HTMLCanvasElement.width")}}
- La propriété {{DOMxRef("HTMLEmbedElement.width")}}
- La propriété {{DOMxRef("HTMLIFrameElement.width")}}
- La propriété {{DOMxRef("HTMLObjectElement.width")}}
- La propriété {{DOMxRef("HTMLSourceElement.width")}}
- La propriété {{DOMxRef("HTMLVideoElement.width")}}
