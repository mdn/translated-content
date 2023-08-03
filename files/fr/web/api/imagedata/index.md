---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

L'interface **`ImageData`** représente les données des pixels au sein d'une certaine zone dans un élément {{HTMLElement("canvas")}}. Elle est définie par les méthodes des constructeurs ou créateurs d'objet {{domxref("ImageData.ImageData", "ImageData()")}} sur l'objet {{domxref("CanvasRenderingContext2D")}} associé à canevas, {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} et {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. Elle peut être également utilisée pour redéfinir une partie du canevas en utilisant {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}}.

## Constructeurs

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : Crée un objet ImageData à partir d'un {{jsxref ("Uint8ClampedArray")}} donné et la taille de l'image qu'il contient. Si aucun tableau n'est donné, il crée une image d'un rectangle noir. Notez que c'est la façon la plus courante de créer un tel objet dans les "Workers" car {{domxref ("CanvasRenderingContext2D.createImageData", "createImageData ()")}} n'y est pas disponible.

## Propriétés

- {{domxref("ImageData.data")}}
  - : Un {{domxref("Uint8ClampedArray")}} représentant un tableau à une seule dimension contenant les données des pixels sous format RVBA, chaque valeur comprise entre `0` et `255` (inclus).
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : Un `unsigned` `long` représentant la hauteur effective, en pixels, de l'objet `ImageData`.
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : Un `unsigned` `long` représentant la largeur effective, en pixels, de l'objet `ImageData`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("CanvasRenderingContext2D")}}.
- L'élément {{HTMLElement("canvas")}} et l'interface associée, {{domxref("HTMLCanvasElement")}}.
