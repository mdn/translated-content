---
title: Utiliser des images et canevas provenant d'autres origines
short-title: Utiliser des images inter-origines
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

HTML permet d'utiliser l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/img#crossorigin) sur les images. Utilisé avec un en-tête {{Glossary("CORS")}} adéquat, les images définies par l'élément {{HTMLElement("img")}} provenant d'origines étrangères pourront être utilisées au sein d'un élément {{HTMLElement("canvas")}} comme si elles avaient été chargées depuis l'origine courante.

Pour plus de détails sur l'attribut `crossorigin`, voir [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin).

## Canevas corrompu et sécurité

Les pixels composant un canevas pouvant venir de différentes sources, notamment d'images ou de vidéos récupérées depuis des hôtes tiers, il est nécessaire de se prémunir contre certains problèmes de sécurité.

Dès que des données sont chargées dans le canevas depuis une autre origine sans avoir été approuvées par le CORS, le canevas devient **corrompu** (<i lang="en">tainted</i> en anglais). Dès qu'un canevas est corrompu, il n'est plus considéré comme sécurisé et toute tentative de récupérer des données depuis les données de l'image résultera en une exception.

Si la source du contenu tiers est un élément HTML {{HTMLElement("img")}} ou SVG {{SVGElement("svg")}}, il n'est plus permis de récupérer le contenu du canevas.

Si la source du contenu tiers est une image obtenue à partir d'un {{DOMxRef("HTMLCanvasElement")}} ou d'une {{DOMxRef("ImageBitMap")}} et que la source de l'image ne respecte pas les règles quant à l'unicité de l'origine, il ne sera pas possible de lire le contenu du canevas.

Appeler l'une des méthodes suivantes sur un canevas corrompu déclenchera une erreur&nbsp;:

- Appeler {{DOMxRef("CanvasRenderingContext2D.getImageData", "getImageData()")}} sur le contexte du canevas
- Appeler {{DOMxRef("HTMLCanvasElement.toBlob", "toBlob()")}}, {{DOMxRef("HTMLCanvasElement.toDataURL", "toDataURL()")}} or {{DOMxRef("HTMLCanvasElement.captureStream", "captureStream()")}} sur l'élément {{HTMLElement("canvas")}} lui-même

L'exception levée par de tels appels sera une exception `SecurityError`. Cette mesure protège les utilisateurs contre l'exposition de données privées via des images provenant de sites tiers sans permission.

## Stocker une image provenant d'une origine tierce

Dans cet exemple, on souhaite autoriser la récupération et l'enregistrement d'images provenant d'une autre origine. Pour parvenir à ce résultat, il faudra configurer le serveur et également écrire du code pour le site web.

### Configuration serveur

Pour commencer, configurons le serveur stockant les images avec un en-tête {{HTTPHeader("Access-Control-Allow-Origin")}} qui permet un accès multi-origines aux fichiers images.

Dans la suite de cet exemple, on prendra le cas d'un site est servi via [Apache](https://httpd.apache.org/). On pourra utiliser le fragment [de configuration serveur Apache pour les images CORS](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), comme suit&nbsp;:

```apacheconf
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Pour résumer, cela permet de configurer le serveur afin de pouvoir accéder aux fichiers graphiques (ceux avec les extensions ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" et ".webp") depuis d'autres origines, d'où qu'elles soient sur Internet.

### Implémenter l'enregistrement

Maintenant que le serveur est configuré pour permettre la récupération d'image depuis plusieurs origines, on peut écrire le code qui permet à l'utilisateur·ice d'enregistrer les images [en stockage local](/fr/docs/Web/API/Web_Storage_API) comme si elles étaient servies depuis le même domaine que le code.

Pour cela, on utilise l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Global_attributes#crossorigin) en définissant {{DOMxRef("HTMLImageElement.crossOrigin", "crossOrigin")}} sur l'élément {{DOMxRef("HTMLImageElement")}} sur lequel l'image sera chargée. Ainsi, on indique au navigateur de demander un accès multi-origine lors du téléchargement de l'image.

#### Démarrer le téléchargement

Voici le code qui démarre le téléchargement (déclenché par exemple lorsque l'utilisateur·ice clique sur un bouton «&nbsp;Télécharger&nbsp;»)&nbsp;:

```js
function startDownload() {
  let imageURL = "https://mdn.github.io/shared-assets/images/examples/mdn.svg";
  let imageDescription = "Logo d'un dinosaure devant une carte";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Ici, nous utilisons une URL codée en dur (`imageURL`) et un texte descriptif associé (`imageDescription`), mais cela pourrait venir de n'importe où. Pour commencer le téléchargement de l'image, nous créons un nouvel objet {{DOMxRef("HTMLImageElement")}} en utilisant le constructeur {{DOMxRef("HTMLImageElement.Image", "Image()")}}. L'image est ensuite configurée pour permettre le téléchargement inter-origines en définissant son attribut `crossOrigin` à `"anonymous"` (c'est-à-dire, permettre le téléchargement inter-origines de l'image sans authentification). Un gestionnaire d'évènement est ajouté pour l'évènement {{DOMxRef("Window/load_event", "load")}} déclenché sur l'élément image, ce qui signifie que les données de l'image ont été reçues. Un texte alternatif est ajouté à l'image&nbsp;; bien que `<canvas>` ne prenne pas en charge l'attribut `alt`, la valeur peut être utilisée pour définir un `aria-label` ou le contenu interne du canevas.

Enfin, l'attribut {{DOMxRef("HTMLImageElement.src", "src")}} de l'image est défini sur l'URL de l'image à télécharger&nbsp;; cela déclenche le début du téléchargement.

#### Recevoir et enregistrer l'image

Le code qui gère l'image nouvellement téléchargée se trouve dans la méthode `imageReceived()`&nbsp;:

```js
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log(`Erreur : ${err}`);
  }
}
```

`imageReceived()` est appelée pour gérer l'évènement `"load"` sur le `HTMLImageElement` qui reçoit l'image téléchargée. Cet évènement est déclenché une fois que toutes les données téléchargées sont disponibles. Elle commence par créer un nouvel élément HTML {{HTMLElement("canvas")}} que nous utiliserons pour convertir l'image en URL de données, et en obtenant l'accès au contexte de dessin 2D du canevas ({{DOMxRef("CanvasRenderingContext2D")}}) dans la variable `context`.

La taille du canevas est ajustée pour correspondre à l'image reçue, le texte interne est défini sur la description de l'image, puis l'image est dessinée dans le canevas à l'aide de {{DOMxRef("CanvasRenderingContext2D.drawImage", "drawImage()")}}. Le canevas est ensuite inséré dans le document pour que l'image soit visible.

Il est maintenant temps d'enregistrer effectivement l'image localement. Pour cela, nous utilisons le mécanisme de stockage local de l'API Web Storage, accessible via la globale {{DOMxRef("Window.localStorage", "localStorage")}}. La méthode du canevas {{DOMxRef("HTMLCanvasElement.toDataURL", "toDataURL()")}} est utilisée pour convertir l'image en une URL de type `data://` représentant une image PNG, qui est ensuite enregistrée dans le stockage local à l'aide de {{DOMxRef("Storage.setItem", "setItem()")}}.

## Voir aussi

- [Utilisation d'images inter-domaines dans WebGL et Chrome 13 <sup>(angl.)</sup>](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [Spécification HTML — l'attribut `crossorigin` <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [L'API Web Storage](/fr/docs/Web/API/Web_Storage_API)
