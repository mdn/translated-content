---
title: Manipulation de pixels avec canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Tutoriel_canvas/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}

Jusqu'à présent, nous n'avons pas examiné dans le détail les pixels réels de notre canevas. Avec l'objet ImageData, vous pouvez directement lire et écrire dans le tableau de données de l'image, pour manipuler les pixels un par un. Nous verrons également comment le lissage (anticrénelage) de l'image peut être contrôlé et comment sauvegarder des images depuis votre canevas.

## L'objet `ImageData`

L'objet {{domxref("ImageData")}} représente les données de pixels sous-jacentes à une zone d'un objet canevas. Il contient les attributs (en lecture seule) suivants :

- `width`
  - : La largeur de l'image en pixels.
- `height`
  - : La hauteur de l'image en pixels.
- `data`
  - : Un {{jsxref("Uint8ClampedArray")}} représentant un tableau monodimensionnel contenant les données dans l'ordre RVBA, ayant des valeurs entières entre 0 et 255 (inclus).

La propriété `data` retourne un tableau {{jsxref("Uint8ClampedArray")}} auquel on peut accéder pour voir plus en détail les données brutes des pixels ; chaque pixel est représenté par quatre valeurs sur un octet (rouge, vert, bleu et alpha, dans cet ordre ; c'est-à-dire, le format "RVBA"). Chaque composante de couleur est représentée par un entier entre 0 et 255. Chaque composante reçoit un indice à l'intérieur du tableau, la composante rouge du pixel supérieur gauche étant à l'indice 0 à l'intérieur du tableau. Les pixels continuent ensuite de gauche à droite, puis vers le bas, jusqu'au bout du tableau.

Le {{jsxref("Uint8ClampedArray")}} contient `height`_(hauteur)_ × `width`_(largeur)_ × 4 octets, dont les valeurs d'indices vont de 0 à (`height` × `width` × 4)-1.

Par exemple, pour lire la valeur de la composante bleue d'un pixel situé en colonne 200, ligne 50 de l'image, vous pouvez faire ce qui suit&nbsp;:

```js
composanteBleue = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Vous pouvez accéder à la taille en octets du tableau de pixels en lisant l'attribut `Uint8ClampedArray.length`&nbsp;:

```js
var nbOctets = imageData.data.length;
```

## Création d'un objet `ImageData`

Pour créer un nouvel objet `ImageData` vierge, vous pouvez utiliser la méthode [`createImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/createImageData). Il existe deux versions de la méthode `createImageData()`&nbsp;:

```js
var monImageData = ctx.createImageData(largeur, hauteur);
```

Cela crée un nouvel objet `ImageData` avec les dimensions spécifiées. Tous les pixels sont prédéfinis comme étant noirs transparents.

Vous pouvez aussi créer un nouvel objet `ImageData` ayant les mêmes dimensions que celles de l'objet indiqué par `autreImageData`. Les pixels du nouvel objet sont tous prédéfinis comme étant noirs transparents. **Cela ne copie pas les données d'image&nbsp;!**

```js
var monImageData = ctx.createImageData(autreImageData);
```

## Obtention des données pixel pour un contexte

Pour obtenir un objet `ImageData` contenant une copie des données pixel pour un contexte de canevas, vous pouvez utiliser la méthode `getImageData()` :

```js
var monImageData = ctx.getImageData(gauche, haut, largeur, hauteur);
```

Cette méthode retourne un objet `ImageData` représentant les données pixel pour la zone du canevas dont les coins sont représentés par les points (`left`, `top`) _`(gauche,haut)`_, (`left+width`, `top`) _(gauche+largeur, haut)_, (`left`, `top+height`) _(gauche, haut+hauteur)_ et (`left+width`, `top+height`) _(gauche+largeur, haut+hauteur)_. Les coordonnées sont spécifiées en unités d'espace de coordonnées du canevas.

> **Note :** Tous les pixels en dehors du canevas seront retournés comme noirs transparents dans l'objet `ImageData` résultant.

Cette méthode est aussi présentée dans l'article [Manipulation vidéo utilisant canvas](/fr/docs/HTML/Manipulating_video_using_canvas).

### Une pipette à couleur

Dans cet exemple, nous utilisons la méthode [`getImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/getImageData) pour afficher la couleur en dessous du curseur de la souris. Pour cela, nous avons besoin de la position en cours de la souris donnée par `layerX` et `layerY`, nous recherchons ensuite les données pixel à cette position dans le tableau de pixels que [`getImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/getImageData) nous fournit. Finalement, nous utilisons les données du tableau pour définir une couleur d'arrière-plan et un texte dans le `<div>` pour afficher la couleur.

```html hidden
<canvas id="canvas" width="300" height="227" style="float:left"></canvas>
<div id="color" style="width:200px;height:50px;float:left"></div>
```

```js
var img = new Image();
img.src = "./assets/rhino.jpg";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
};
var color = document.getElementById("color");
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba =
    "rgba(" +
    data[0] +
    ", " +
    data[1] +
    ", " +
    data[2] +
    ", " +
    data[3] / 255 +
    ")";
  color.style.background = rgba;
  color.textContent = rgba;
}
canvas.addEventListener("mousemove", pick);
```

{{ EmbedLiveSample('Une_pipette_à_couleur', 610, 240) }}

## Peinture des données pixel dans un contexte

Vous pouvez utiliser la méthode [`putImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/putImageData) pour peindre les données pixel dans un contexte&nbsp;:

```js
ctx.putImageData(monImageData, dx, dy);
```

Les paramètres `dx` et `dy` indiquent les coordonnées système dans le contexte du coin supérieur gauche des données pixel qui doivent être peintes.

Par exemple, pour peindre l'image entière représentée par `monImageData` dans le coin supérieur gauche du contexte, vous pouvez simplement faire ce qui suit :

```js
ctx.putImageData(monImageData, 0, 0);
```

### Niveaux de gris et inversion de couleurs

Dans cet exemple, nous itérons sur tous les pixels pour changer leurs valeurs, puis nous remettons le tableau de pixels modifié sur le canevas à l'aide de [putImageData()](/fr-FR/docs/Web/API/CanvasRenderingContext2D/putImageData). La fonction inversion soustrait simplement chaque couleur de la valeur maximale 255. La fonction grayscale _(niveaux de gris)_ fait simplement la moyenne du rouge, du vert et du bleu. Vous pouvez également utiliser une moyenne pondérée, donnée par la formule x = 0.299r + 0.587v + 0.114b, par exemple. Voir [Niveaux de gris](https://fr.wikipedia.org/wiki/Niveau_de_gris) sur Wikipédia pour plus d'informations.

```html hidden
<canvas id="canevas" width="300" height="227"></canvas>
<div>
  <input id="btnniveaudegris" value="Niveau de gris" type="button" />
  <input id="btninversion" value="Inversion" type="button" />
</div>
```

```js
var img = new Image();
img.src = "./assets/rhino.jpg";
img.onload = function () {
  dessiner(this);
};

function dessiner(img) {
  var canevas = document.getElementById("canevas");
  var ctx = canevas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var imageData = ctx.getImageData(0, 0, canevas.width, canevas.height);
  var data = imageData.data;

  var inversion = function () {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // rouge
      data[i + 1] = 255 - data[i + 1]; // vert
      data[i + 2] = 255 - data[i + 2]; // bleu
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var niveaudegris = function () {
    for (var i = 0; i < data.length; i += 4) {
      var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = moy; // rouge
      data[i + 1] = moy; // vert
      data[i + 2] = moy; // bleu
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var btninversion = document.getElementById("btninversion");
  btninversion.addEventListener("click", inversion);
  var btnniveaudegris = document.getElementById("btnniveaudegris");
  btnniveaudegris.addEventListener("click", niveaudegris);
}
```

{{ EmbedLiveSample('Niveaux_de_gris_et_inversion_de_couleurs', 330, 270) }}

## Zoom et anticrénelage

A l'aide de la méthode {{domxref ("CanvasRenderingContext2D.drawImage", "drawImage ()")}}, un deuxième canevas, et la propriété {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} , nous pouvons zoomer sur notre image et voir les détails.

Nous obtenons la position de la souris et recadrons une image de 5 pixels à gauche et au-dessus à 5 pixels à droite et en-dessous. Ensuite, nous copions celle-ci sur un autre canevas et redimensionnons l'image à la taille que nous voulons. Dans la zone de zoom, nous redimensionnons une zone de 10 × 10 pixels du canevas d'origine à 200 × 200.

```js
zoomctx.drawImage(
  canvas,
  Math.abs(x - 5),
  Math.abs(y - 5),
  10,
  10,
  0,
  0,
  200,
  200,
);
```

Étant donné que l'anticrénelage est activé par défaut, nous pouvons désactiver le lissage pour voir les pixels clairs. Vous pouvez basculer la case à cocher pour voir l'effet de la propriété `imageSmoothingEnabled` (qui a besoin de préfixes pour différents navigateurs).

### Exemple de zoom

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<canvas id="zoom" width="300" height="227"></canvas>
<div>
  <label for="smoothbtn">
    <input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn" />
    Enable image smoothing
  </label>
</div>
```

```js hidden
var img = new Image();
img.src = "./assets/rhino.jpg";
img.onload = function () {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var zoomctx = document.getElementById("zoom").getContext("2d");

  var smoothbtn = document.getElementById("smoothbtn");
  var toggleSmoothing = function (event) {
    zoomctx.imageSmoothingEnabled = this.checked;
    zoomctx.mozImageSmoothingEnabled = this.checked;
    zoomctx.webkitImageSmoothingEnabled = this.checked;
    zoomctx.msImageSmoothingEnabled = this.checked;
  };
  smoothbtn.addEventListener("change", toggleSmoothing);

  var zoom = function (event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(
      canvas,
      Math.abs(x - 5),
      Math.abs(y - 5),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", zoom);
}
```

{{ EmbedLiveSample('Exemple_de_zoom', 620, 490) }}

## Sauvegarde des images

L' {{domxref ("HTMLCanvasElement")}} fournit une méthode `toDataURL ()`, utile lors de l'enregistrement d'images. Il retourne un [URI de données](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) contenant une représentation de l'image dans le format spécifié par le paramètre de `type` (par défaut en [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) ). L'image renvoyée est dans une résolution de 96 dpi.

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : Par défaut. Crée un image PNG.
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : Crée une image JPG. En option, vous pouvez fournir une qualité comprise entre 0 et 1, 1 étant de la meilleure qualité et 0 presque non reconnaissable mais de petite taille.

Une fois que vous avez généré un URI de données à partir de votre canevas, vous pouvez l'utiliser comme source de {{HTMLElement ("image")}} ou le mettre dans un lien hypertexte avec un attribut de téléchargement pour l'enregistrer sur le disque par exemple.

Vous pouvez également créer un {{domxref ("Blob")}} à partir du canevas.

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : Crée un objet `Blob` représentant l'image contenue dans le canevas.

## Voir aussi

- {{domxref("ImageData")}}
- [Manipulating video using canvas](/fr/docs/HTML/Manipulating_video_using_canvas)
- [Canevas, images et pixels – par Christian Heilmann (en)](https://codepo8.github.io/canvas-images-and-pixels/)

{{PreviousNext("Tutoriel_canvas/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}
