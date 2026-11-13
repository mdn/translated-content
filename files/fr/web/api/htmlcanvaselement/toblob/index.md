---
title: "HTMLCanvasElement : méthode toBlob()"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: 735976ba98a4de14f7b568aba220841f14c2d65d
---

{{APIRef("Canvas API")}}

La méthode **`toBlob()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} crée un objet {{DOMxRef("Blob")}} représentant l'image contenue dans le canevas.
Ce fichier peut être mis en cache sur le disque ou stocké en mémoire à la discrétion de l'agent utilisateur.

Le format de fichier souhaité et la qualité de l'image peuvent être définis.
Si le format de fichier n'est pas défini, ou si le format donné n'est pas pris en charge, les données sont exportées au format `image/png`.
Les navigateurs doivent prendre en charge `image/png`&nbsp;; beaucoup prennent en charge des formats supplémentaires tels que `image/jpeg` et `image/webp`.

L'image créée a une résolution de 96 dpi pour les formats de fichier qui prennent en charge l'encodage des métadonnées de résolution.

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
    L'agent utilisateur utilise sa valeur de qualité par défaut si cette option n'est pas précisée, ou si le nombre est en dehors de la plage autorisée.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Blob")}}
