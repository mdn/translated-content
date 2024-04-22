---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

La propriété **`type`** de l'objet [`Blob`](/fr/docs/Web/API/Blob) fourni le type MIME (Internet media type) d'un fichier. Celle-ci retourne une chaîne de caractère vide si le type n'a pas pu être déterminé.

## Syntaxe

```js
var mimetype = instanceOfFile.type;
```

## Valeur

Une chaîne de caractères (par exemple : "image/png").

## Exemple

```js
var i, fileInput, files, allowedFileTypes;

// fileInput est un HTMLInputElement: <input type="file" multiple id="myfileinput">
fileInput = document.getElementById("myfileinput");

// files est un objet FileList (similaire à NodeList)
files = fileInput.files;

// notre application accepte seulement les images de type *.png, *.jpeg et *.gif
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // Vérifie si file.type est un type autorisé.
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // le type du fichier (file) correspond à l'un des types autorisés. Faites quelque chose ici.
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Blob")}}
