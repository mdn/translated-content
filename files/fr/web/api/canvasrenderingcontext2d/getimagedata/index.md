---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
tags:
  - API
  - Canvas
  - Canvas API
  - CanvasRenderingContext2D
  - Image
  - ImageData
  - Méthode
  - Méthodes
  - References
  - getImageDate
translation_of: Web/API/CanvasRenderingContext2D/getImageData
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.getImageData()`** de l'API Canvas 2D retourne un objet {{domxref("ImageData")}} représentant les données de pixels sous-jacentes pour la zone du canevas désigné par le rectangle qui commence aux positions _(sx, sy)_ et qui possède des attributs : *largeur (sw) et hauteur (sh)*. Cette méthode n'est pas affectée par la matrice de transformation du canevas.

Les pixels en dehors de la zone de canevas sont présents sous forme de valeurs noires transparentes dans les données d'image renvoyées.

## Syntaxe

    ImageData ctx.getImageData(sx, sy, sw, sh);

### Paramètres

- `sx`
  - : La coordonnée x du coin supérieur gauche du rectangle à partir duquel _ImageData_ sera extrait.
- `sy`
  - : La coordonnée y du coin supérieur gauche du rectangle à partir duquel *ImageData* sera extrait.
- `sw`
  - : La largeur du rectangle à partir duquel *ImageData* sera extrait.
- `sh`
  - : La hauteur du rectangle à partir duquel *ImageData* sera extrait.

### Valeur retournée

Un objet {{domxref("ImageData")}}  contenant les données de l'image pour le rectangle donné du canevas.

### Erreurs renvoyées

- `IndexSizeError`
  - : Renvoyé si l'un des arguments de largeur ou de hauteur est égal à zéro.

## Exemples

### Utilisation de la méthode `getImageData`

Ceci est juste un petit exemple qui utilise la méthode getImageData. Pour plus d'informations, visitez  [Manipulation de pixels avec canvas](/fr/docs/Tutoriel_canvas/Pixel_manipulation_with_canvas) et l'objet {{domxref("ImageData")}}.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();

console.log(ctx.getImageData(50, 50, 100, 100));
// ImageData { largeur: 100, hauteur: 100, données: Uint8ClampedArray[40000] }
```

## Spécifications

| Spécification                                                                                                                                            | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-getimagedata", "CanvasRenderingContext2D.getImageData")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.getImageData")}}

## Voir aussi

- L'interface le définissant : {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Manipulation de pixels avec canvas](/fr/docs/Tutoriel_canvas/Pixel_manipulation_with_canvas)
