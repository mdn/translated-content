---
title: "HTMLInputElement : propriété files"
short-title: files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("File and Directory Entries API")}}

La propriété **`files`** de l'interface {{DOMxRef("HTMLInputElement")}} permet d'accéder à la {{DOMxRef("FileList")}} sélectionnée avec l'élément HTML `{{HTMLElement("input/file", "&lt;input type=\"file\"&gt;")}}`.

## Valeur

Un objet {{DOMxRef("FileList")}} listant les fichiers sélectionnés, le cas échéant, ou `null` si **`HTMLInputElement`** n'est pas de `type="file"`.

## Exemples

L'exemple ci-dessous montre comment accéder à la propriété **`HTMLInputElement.files`** et afficher le nom, la date de modification, la taille et le type de chaque fichier sélectionné par l'utilisateur·ice.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

Notez que **`HTMLInputElement.files`** retourne toujours une instance de {{DOMxRef("FileList")}}, même si aucun fichier n'est sélectionné.
Il est donc possible d'itérer dessus avec {{JSxRef("Statements/for...of", "for...of")}} sans vérifier si des fichiers sont sélectionnés.

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true même si vide

for (const file of fileInput.files) {
  console.log(file.name); // affiche le nom du fichier
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // affiche la date lisible
  console.log(
    file.size < 1000 ? file.size : `${Math.round(file.size / 1000)}KB`,
  );
  console.log(file.type); // affiche le type MIME
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("DataTransfer.files")}}
