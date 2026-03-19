---
title: "Window : méthode createImageBitmap()"
short-title: createImageBitmap()
slug: Web/API/Window/createImageBitmap
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}

La méthode **`createImageBitmap()`** de l'interface {{DOMxRef("Window")}} crée un bitmap à partir d'une source donnée, éventuellement rogné pour ne contenir qu'une portion de cette source.
Elle accepte différents types de sources d'image et retourne une {{JSxRef("Promise")}} qui se résout en un {{DOMxRef("ImageBitmap")}}.

## Syntaxe

```js-nolint
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### Paramètres

- `image`
  - : Une source d'image, qui peut être l'une des suivantes&nbsp;:
    - {{DOMxRef("HTMLImageElement")}}
    - {{DOMxRef("SVGImageElement")}}
    - {{DOMxRef("HTMLVideoElement")}}
    - {{DOMxRef("HTMLCanvasElement")}}
    - {{DOMxRef("Blob")}}
    - {{DOMxRef("ImageData")}}
    - {{DOMxRef("ImageBitmap")}}
    - {{DOMxRef("OffscreenCanvas")}}
    - {{DOMxRef("VideoFrame")}}
- `sx`
  - : La coordonnée x du point de référence du rectangle à partir duquel un `ImageBitmap` sera extrait.
- `sy`
  - : La coordonnée y du point de référence du rectangle à partir duquel un `ImageBitmap` sera extrait.
- `sw`
  - : La largeur du rectangle à partir duquel un `ImageBitmap` sera extrait.
    Cette valeur peut être négative.
- `sh`
  - : La hauteur du rectangle à partir duquel un `ImageBitmap` sera extrait. Cette valeur peut être négative.
- `options` {{Optional_Inline}}
  - : Un objet qui définit des options pour l'extraction de l'image.
    Les options disponibles sont&nbsp;:
    - `imageOrientation`
      - : Indique comment l'image matricielle doit être orientée.
        - `from-image`
          - : Image orientée selon les métadonnées d'orientation EXIF, si présentes (par défaut).
        - `flipY`
          - : Image orientée selon les métadonnées EXIF, si présentes, puis retournée verticalement.
        - `none`
          - : Image orientée selon l'encodage de l'image, en ignorant toute métadonnée d'orientation (comme les métadonnées EXIF, qui peuvent être ajoutées à une image pour indiquer que l'appareil a été tourné sur le côté pour capturer l'image en mode portrait).

    - `premultiplyAlpha`
      - : Indique si les canaux de couleur du bitmap doivent être multipliés par le canal alpha.
        L'une des valeurs `none`, `premultiply` ou `default` (par défaut).
    - `colorSpaceConversion`
      - : Indique si l'image doit être décodée en utilisant une conversion d'espace colorimétrique.
        Soit `none` soit `default` (par défaut).
        La valeur `default` indique qu'un comportement dépendant de l'implémentation est utilisé.
    - `resizeWidth`
      - : Un entier long qui indique la largeur de sortie.
    - `resizeHeight`
      - : Un entier long qui indique la hauteur de sortie.
    - `resizeQuality`
      - : Indique l'algorithme à utiliser pour redimensionner l'entrée afin de correspondre aux dimensions de sortie.
        L'une des valeurs `pixelated`, `low` (par défaut), `medium` ou `high`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout en un objet {{DOMxRef("ImageBitmap")}} contenant les données matricielles du rectangle donné.

## Exemples

### Créer des sous-images à partir d'une feuille de sous-images

L'exemple charge une feuille de sous-images, extrait des sous-images individuelles, puis affiche
chaque sous-image sur le canevas. Une feuille de sous-images est une image contenant plusieurs petites images,
chacune pouvant être rendue séparément.

```html hidden
Image originale&nbsp;:
<img src="50x50.jpg" />
<hr />
<canvas id="myCanvas"></canvas>
```

```css hidden
canvas {
  border: 2px solid green;
}
```

```js
const canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  image = new Image();

// Attendre le chargement de la feuille de sous-images
image.onload = () => {
  Promise.all([
    // Découper deux sous-images depuis la feuille de sous-images
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32),
    createImageBitmap(image, 0, 0, 50, 50, { imageOrientation: "flipY" }),
  ]).then((sousImages) => {
    // Dessiner chaque sous-image sur le canevas
    ctx.drawImage(sousImages[0], 0, 0);
    ctx.drawImage(sousImages[1], 32, 32);
    ctx.drawImage(sousImages[2], 64, 64);
  });
};

// Charger la feuille de sous-images depuis un fichier image
image.src = "50x50.jpg";
```

{{EmbedLiveSample("Créer des sous-images à partir d'une feuille de sous-images", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("WorkerGlobalScope.createImageBitmap()")}}
- La méthode {{DOMxRef("CanvasRenderingContext2D.drawImage()")}}
- L'interface {{DOMxRef("ImageData")}}
