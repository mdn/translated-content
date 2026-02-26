---
title: "HTMLCanvasElement : propriété height"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLCanvasElement")}} est un entier positif (`integer`) correspondant à l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/canvas#height) de l'élément {{HTMLElement("canvas")}} interprété en pixels CSS. Lorsque l'attribut n'est pas défini, ou s'il est défini sur une valeur invalide (par exemple une valeur négative), la valeur par défaut `150` est utilisée.

La modification de la propriété `height` réinitialise l'intégralité du contexte de rendu à son état par défaut. Cela inclut le nettoyage du canevas (tampon d'arrière-plan), la réinitialisation du chemin courant et la remise à zéro de _toutes_ les propriétés telles que `fillStyle` et `globalCompositeOperation`. Cette réinitialisation s'applique à tous les types de contexte et intervient même lorsque l'on assigne à `height` sa valeur actuelle. Pour restaurer le contenu précédent après avoir modifié la hauteur, utilisez {{DOMxRef("CanvasRenderingContext2D.getImageData()")}} et {{DOMxRef("CanvasRenderingContext2D.putImageData()")}}. Les propriétés du contexte doivent être gérées et restaurées séparément.

Il s'agit de l'une des deux propriétés, l'autre étant {{DOMxRef("HTMLCanvasElement.width")}}, qui contrôlent la taille du canevas.

## Valeur

Un nombre.

## Exemples

Étant donné cet élément {{HTMLElement("canvas")}}&nbsp;:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

vous pouvez obtenir la hauteur du canevas avec le code suivant&nbsp;:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLCanvasElement")}}
- La propriété {{DOMxRef("HTMLCanvasElement.width")}}
- La propriété {{DOMxRef("HTMLEmbedElement.height")}}
- La propriété {{DOMxRef("HTMLIFrameElement.height")}}
- La propriété {{DOMxRef("HTMLImageElement.height")}}
- La propriété {{DOMxRef("HTMLObjectElement.height")}}
- La propriété {{DOMxRef("HTMLSourceElement.height")}}
- La propriété {{DOMxRef("HTMLVideoElement.height")}}
