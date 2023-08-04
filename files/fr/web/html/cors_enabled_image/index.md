---
title: Autoriser les images et canevas provenant d'autres origines
slug: Web/HTML/CORS_enabled_image
---

HTML permet d'utiliser l'attribut [`crossorigin`](/fr/docs/Web/HTML/Element/Img#attr-crossorigin) sur les images. Utilisé avec un en-tête [CORS](/fr/docs/Glossary/CORS) adéquat, les images définies par [`<img>`](/fr/docs/Web/HTML/Element/Img) provenant d'origines étrangères pourront être utilisées au sein d'un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) comme si elles avaient été chargées depuis l'origine courante.

Pour plus de détails sur l'attribut `crossorigin`, voir [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Attributes/crossorigin).

## Canevas corrompu et sécurité

Les pixels composant un canevas pouvant venir de différentes sources, notamment d'images ou de vidéos récupérées depuis des hôtes tiers, il est nécessaire de se prémunir contre certains problèmes de sécurité.

Dès que des données sont chargées dans le canevas depuis une autre origine sans avoir été « approuvées » par le CORS, le canevas devient **corrompu** (_tainted_). Dès qu'un canevas est corrompu, il n'est plus considéré comme sécurisé et toute tentative de récupérer des données depuis les données de l'image résultera en une exception.

Si la source du contenu tiers est un élément HTML [`<img>`](/fr/docs/Web/HTML/Element/Img) ou SVG [`<svg>`](/fr/docs/Web/SVG/Element/svg), il n'est plus permis de récupérer le contenu du canevas.

Si la source du contenu tiers est une image obtenue à partir d'un [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement) ou d'une [`ImageBitMap`](/fr/docs/Web/API/ImageBitMap) et que la source de l'image ne respecte pas les règles quant à l'unicité de l'origine, il ne sera pas possible de lire le contenu du canevas.

Appeler l'une des méthodes suivantes sur un canevas corrompu déclenchera une erreur :

- [`getImageData()`](/fr/docs/Web/API/CanvasRenderingContext2D/getImageData) sur le contexte du canevas
- [`toBlob()`](/fr/docs/Web/API/HTMLCanvasElement/toBlob) sur l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas)
- [`toDataURL()`](/fr/docs/Web/API/HTMLCanvasElement/toDataURL) sur le canevas

L'exception levée par de tels appels sera une exception `SecurityError`. Cette mesure protège les utilisateurs contre l'exposition de données privées via des images provenant de sites tiers sans permission.

## Stocker une image provenant d'une origine tierce

Dans cet exemple, on souhaite autoriser la récupération et l'enregistrement d'images provenant d'une autre origine. Pour parvenir à ce résultat, il faudra configurer le serveur et également écrire du code pour le site web.

### Configuration serveur

Pour commencer, configurons le serveur stockant les images avec un en-tête [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) qui permet un accès multi-origines aux fichiers images.

Dans la suite de cet exemple, on prendra le cas d'un site est servi via [Apache](https://httpd.apache.org/). On pourra utiliser le fragment [de configuration serveur Apache pour les images CORS](https://github.com/h5bp/server-configs-apache/blob/master/h5bp/cross-origin/images.conf) :

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Pour résumer, cela permet de configurer le serveur afin de pouvoir accéder aux fichiers graphiques (ceux avec les extensions ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz", and ".webp") depuis d'autres origines, d'où qu'elles soient sur Internet.

### Implémenter l'enregistrement

Maintenant que le serveur est configuré pour permettre la récupération d'image depuis plusieurs origines, on peut écrire le code qui permet à l'utilisateur d'enregistrer les images [en stockage local](/fr/docs/Web/API/Web_Storage_API) comme si elles étaient servies depuis le même domaine que le code.

Pour cela, on utilise l'attribut [`crossorigin`](/fr/docs/Web/HTML/Global_attributes#attr-crossorigin) en définissant [`crossOrigin`](/fr/docs/Web/API/HTMLImageElement/crossOrigin) sur l'élément [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement) sur lequel l'image sera chargée. Ainsi, on indique au navigateur de demander un accès multi-origine lors du téléchargement de l'image.

#### Démarrer le téléchargement

Voici le code qui démarre le téléchargement (déclenché par exemple lorsque l'utilisateur clique sur un bouton « Télécharger ») :

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}
```

Ici, l'URL de l'image à télécharger est codée en dur mais cette valeur pourrait très bien provenir d'un argument passé à la fonction. Pour démarrer le téléchargement, on crée un nouvel objet [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement) grâce au constructeur [`Image()`](/fr/docs/Web/API/HTMLImageElement/Image). L'image est ensuite configurée afin de permettre un téléchargement multi-origine grâce à l'attribut `crossOrigin` paramétré avec `"Anonymous"` (qui permet le téléchargement, non-authentifié, d'une image multi-origine). Un gestionnaire d'évènement est ajouté afin de réagir à l'évènement [`load`](/fr/docs/Web/API/Window/load_event) lorsque l'image a été reçue.

Enfin, l'attribut [`src`](/fr/docs/Web/API/HTMLImageElement/src) de l'image est défini avec l'URL de l'image à télécharger et le téléchargement démarre.

#### Recevoir et enregistrer l'image

Voici le fragment de code exécuté lorsque l'image a été téléchargée :

```js
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log("Error: " + err);
  }
}
```

`imageReceived()` est invoquée lorsque l'évènement `"load"` est déclenché sur l'élément `HTMLImageElement` qui reçoit l'image téléchargée. Cet évènement se produit lorsque l'ensemble des données téléchargées est disponible. Cette fonction commence par créer un nouvel élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) qui sera utilisé afin de convertir l'image en une URL de donnée. On récupère également un accès au contexte du canevas pour dessiner en 2D ([`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D)) dans la variable `context`.

La taille du canevas est ajustée afin que ses dimensions correspondent à celles de l'image. L'image est ensuite dessinée dans le canevas grâce à [`drawImage()`](/fr/docs/Web/API/CanvasRenderingContext2D/drawImage). Le canevas est alors inséré dans le document et l'image y devient visible.

Enfin, on enregistre l'image dans le stockage local. Pour cela, on utilise les méthodes de l'API _Web Storage_ en passant par la variable globale [`localStorage`](/fr/docs/Web/API/Window/localStorage). La méthode [`toDataURL()`](/fr/docs/Web/API/HTMLCanvasElement/toDataURL) est utilisée afin de convertir l'image en une URL de données représentant une image PNG qui est enregistrée dans l'espace local grâce à la méthode [`setItem()`](/fr/docs/Web/API/Storage/setItem).

Vous pouvez [essayer](https://cors-image-example.glitch.me/) ou [adapter](https://glitch.com/edit/#!/remix/cors-image-example) cet exemple sur Glitch.

## Voir aussi

- [Utilisation d'images inter-domaines dans WebGL et Chrome 13](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [Spécification HTML : l'attribut `crossorigin`](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [L'API _Web Storage_](/fr/docs/Web/API/Web_Storage_API)

{{QuickLinksWithSubpages("/fr/docs/Web/HTML/")}}
