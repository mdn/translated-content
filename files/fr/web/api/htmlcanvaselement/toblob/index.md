---
title: "HTMLCanvasElement : méthode toBlob()"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: 7efdbbe04ee2ba39340fb22d7ee9b4aaa6269385
---

{{APIRef("Canvas API")}}

La méthode **`toBlob()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} crée un objet {{DOMxRef("Blob")}} représentant l'image contenue dans le canevas.
Ce fichier peut être mis en cache sur le disque ou stocké en mémoire à la discrétion de l'agent utilisateur.

Le format de fichier souhaité et la qualité de l'image peuvent être définis.
Si le format de fichier n'est pas défini, ou si le format donné n'est pas pris en charge, les données seront exportées au format `image/png`.
Les navigateurs doivent prendre en charge `image/png`&nbsp;; beaucoup prendront en charge des formats supplémentaires tels que `image/jpeg` et `image/webp`.

L'image créée aura une résolution de 96 dpi pour les formats de fichier qui prennent en charge l'encodage des métadonnées de résolution.

## Syntaxe

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Paramètres

- `callback`
  - : Une fonction de rappel recevant l'objet {{DOMxRef("Blob")}} résultant en argument unique.
    `null` peut être passé si l'image ne peut pas être créée pour une raison quelconque.
- `type` {{Optional_Inline}}
  - : Une chaîne de caractères indiquant le format de l'image.
    Le type par défaut est `image/png`&nbsp;; ce type est également utilisé si le type fourni n'est pas pris en charge.
- `quality` {{Optional_Inline}}
  - : Un nombre ({{JSxRef("Number")}}) compris entre `0` et `1` indiquant la qualité de l'image à utiliser lors de la création d'images avec des formats prenant en charge la compression destructive (par exemple `image/jpeg` ou `image/webp`).
    L'agent utilisateur utilisera sa valeur de qualité par défaut si cette option n'est pas précisée, ou si le nombre est en dehors de la plage autorisée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `SecurityError`
  - : Le bitmap du canevas n'est pas d'origine sûre&nbsp;; au moins une partie de son contenu a été ou pourrait avoir été chargée depuis un site différent de celui d'où provient le document.

## Exemples

### Obtenir un fichier représentant le canevas

Une fois que vous avez dessiné du contenu dans un canevas, vous pouvez le convertir en un fichier dans n'importe quel format d'image pris en charge.
Le fragment de code ci‑dessous, par exemple, récupère l'image contenue dans l'élément HTML {{HTMLElement("canvas")}} dont l'ID est «&nbsp;canvas&nbsp;», obtient une copie en tant qu'image PNG, puis ajoute un nouvel élément {{HTMLElement("img")}} au document, dont la source est l'image créée à partir du canevas.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Ici nous créons une image PNG&nbsp;; si vous ajoutez un second paramètre à l'appel `toBlob()`, vous pouvez préciser un autre type d'image pris en charge par l'agent utilisateur.
Par exemple, pour obtenir l'image au format JPEG&nbsp;:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG à 95% de qualité
```

Remarquez que nous ne révoquons pas immédiatement l'URL d'objet après le chargement de l'image, car cela rendrait l'image inutilisable pour les interactions utilisateur (comme le clic droit pour enregistrer l'image ou l'ouverture dans un nouvel onglet). Pour les applications de longue durée, vous devez révoquer les URL d'objet lorsqu'elles ne sont plus nécessaires (par exemple lorsque l'image est retirée du DOM) afin de libérer de la mémoire en appelant la méthode {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} et en lui passant la chaîne de caractères de l'URL d'objet.

### Convertir un canevas en `ico` (Mozilla uniquement)

Cela utilise `-moz-parse` pour convertir le canevas en ico, et fonctionne donc uniquement sur Firefox.
Windows XP ne prend pas en charge la conversion de PNG en ico, il utilise donc bmp à la place.
Un lien de téléchargement est créé en définissant l'attribut de téléchargement. La valeur de l'attribut de téléchargement correspond au nom de fichier utilisé.

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = `${iconName}.ico`;
    a.href = window.URL.createObjectURL(b);
  };
}
canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

### Enregistrer `toBlob` sur le disque avec `OS.File` (contexte Chrome/add-on uniquement)

> [!NOTE]
> Cette technique enregistre le fichier sur le bureau et n'est utile que dans le contexte chrome de Firefox ou dans le code d'un module complémentaire, car les API OS ne sont pas présentes sur les sites Web.

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const r = new FileReader();
    r.onloadend = () => {
      // r.result contient l'ArrayBuffer.
      Cu.import("resource://gre/modules/osfile.jsm");
      const writePath = OS.Path.join(
        OS.Constants.Path.desktopDir,
        `${iconName}.ico`,
      );
      const promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result), {
        tmpPath: `${writePath}.tmp`,
      });
      promise.then(
        () => {
          console.log("successfully wrote file");
        },
        () => {
          console.log("failure writing file");
        },
      );
    };
    r.readAsArrayBuffer(b);
  };
}

canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Blob")}}
