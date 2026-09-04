---
title: "HTMLCanvasElement : propriété width"
short-title: width
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLCanvasElement")}} est un entier positif reflétant l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/canvas#width) de l'élément HTML {{HTMLElement("canvas")}} interprété en pixels CSS. Lorsque l'attribut n'est pas défini, ou s'il est défini sur une valeur invalide, comme une valeur négative, la valeur par défaut `300` est utilisée.

Définir la propriété `width` réinitialise tout le contexte de rendu à son état par défaut. Cela inclut l'effacement du canevas (tampon de fond), la réinitialisation du chemin courant, et la réinitialisation de _toutes_ les propriétés comme `fillStyle` et `globalCompositeOperation`. Cette réinitialisation a lieu pour tous les types de contexte, même lorsque `width` est défini à sa valeur courante. Pour restaurer le contenu précédent après modification de la largeur, utilisez {{DOMxRef("CanvasRenderingContext2D.getImageData()")}} et {{DOMxRef("CanvasRenderingContext2D.putImageData()")}}. Les propriétés du contexte doivent être suivies et restaurées séparément.

Il s'agit de l'une des deux propriétés, l'autre étant {{DOMxRef("HTMLCanvasElement.height")}}, qui contrôlent la taille du canevas.

## Valeur

Un nombre.

## Exemples

Étant donné cet élément HTML {{HTMLElement("canvas")}}&nbsp;:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Vous pouvez obtenir la largeur du canevas avec le code suivant&nbsp;:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLCanvasElement")}}&nbsp;: Interface définissant la propriété `HTMLCanvasElement.width`
- Autre propriété permettant de contrôler la taille du canevas&nbsp;: {{DOMxRef("HTMLCanvasElement.height")}}
- La propriété {{DOMxRef("HTMLEmbedElement.width")}}
- La propriété {{DOMxRef("HTMLIFrameElement.width")}}
- La propriété {{DOMxRef("HTMLImageElement.width")}}
- La propriété {{DOMxRef("HTMLObjectElement.width")}}
- La propriété {{DOMxRef("HTMLSourceElement.width")}}
- La propriété {{DOMxRef("HTMLVideoElement.width")}}
