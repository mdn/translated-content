---
title: "HTMLCanvasElement : méthode toDataURL()"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("Canvas API")}}

La méthode **`toDataURL()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} retourne une [URL de données](/fr/docs/Web/URI/Reference/Schemes/data) contenant une représentation de l'image au format défini par le paramètre `type`.

Vous pouvez définir le format de fichier souhaité ainsi que la qualité de l'image.
Si le format de fichier n'est pas défini, ou si le format donné n'est pas pris en charge, les données seront exportées en `image/png`.
Autrement dit, si la valeur retournée commence par `data:image/png` pour un autre `type` demandé, alors ce format n'est pas pris en charge.

Les navigateurs doivent prendre en charge `image/png`&nbsp;; beaucoup prennent aussi en charge d'autres formats comme `image/jpeg` et `image/webp`.

Les données d'image créées auront une résolution de 96&nbsp;dpi pour les formats de fichier qui prennent en charge l'encodage des métadonnées de résolution.

> [!WARNING]
> `toDataURL()` encode toute l'image dans une chaîne de caractères en mémoire. Pour les images volumineuses, cela peut avoir un impact sur les performances, et peut même dépasser la limite de longueur d'URL des navigateurs si elle est affectée à {{DOMxRef("HTMLImageElement.src")}}. Il est recommandé d'utiliser [`toBlob()`](/fr/docs/Web/API/HTMLCanvasElement/toBlob) avec {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}.

## Syntaxe

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### Paramètres

- `type` {{Optional_Inline}}
  - : Une chaîne de caractères indiquant le format de l'image.
    Le type par défaut est `image/png`&nbsp;; ce format sera aussi utilisé si le type défini n'est pas pris en charge.
- `quality` {{Optional_Inline}}
  - : Un nombre ({{JSxRef("Number")}}) compris entre `0` et `1` indiquant la qualité de l'image à utiliser lors de la création d'images avec des formats prenant en charge la compression destructive (comme `image/jpeg` ou `image/webp`).
    L'agent utilisateur utilisera sa valeur de qualité par défaut si cette option n'est pas précisée, ou si le nombre est en dehors de la plage autorisée.

### Valeur de retour

Une chaîne de caractères contenant l'[URL de données](/fr/docs/Web/URI/Reference/Schemes/data) demandée.

Si la hauteur ou la largeur du canevas est `0` ou supérieure à la [taille maximale du canevas](/fr/docs/Web/HTML/Reference/Elements/canvas#taille_maximale_dun_canevas), la chaîne `"data:,"` est retournée.

### Exceptions

- `SecurityError`
  - : Le bitmap du canevas n'est pas d'origine sûre&nbsp;; au moins une partie de son contenu a été ou pourrait avoir été chargée depuis un site différent de celui du document lui-même.

## Exemples

Étant donné cet élément HTML {{HTMLElement("canvas")}}&nbsp;:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Vous pouvez obtenir une URL de données du canevas avec les lignes suivantes&nbsp;:

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Définir la qualité d'image avec les JPEG

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Exemple : changer dynamiquement les images

Vous pouvez utiliser cette technique en coordination avec des évènements souris afin de changer dynamiquement les images (niveaux de gris contre couleur dans cet exemple)&nbsp;:

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description de mon image" />
```

#### JavaScript

```js
function showColorImg() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function showGrayImg() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function removeColors() {
  const images = document.getElementsByClassName("grayscale");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  for (const colorImg of images) {
    const width = colorImg.offsetWidth;
    const height = colorImg.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(colorImg, 0, 0);
    const imgData = ctx.getImageData(0, 0, width, height);
    const pix = imgData.data;
    const pixLen = pix.length;
    for (let pixel = 0; pixel < pixLen; pixel += 4) {
      pix[pixel + 2] =
        pix[pixel + 1] =
        pix[pixel] =
          (pix[pixel] + pix[pixel + 1] + pix[pixel + 2]) / 3;
    }
    ctx.putImageData(imgData, 0, 0);
    const grayImg = new Image();
    grayImg.src = canvas.toDataURL();
    grayImg.onmouseover = showColorImg;
    colorImg.onmouseout = showGrayImg;
    ctx.clearRect(0, 0, width, height);
    colorImg.style.display = "none";
    colorImg.parentNode.insertBefore(grayImg, colorImg);
  }
}

removeColors();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [URL de données](/fr/docs/Web/URI/Reference/Schemes/data) dans la référence [HTTP](/fr/docs/Web/HTTP).
