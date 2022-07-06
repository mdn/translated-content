---
title: File.name
slug: Web/API/File/name
translation_of: Web/API/File/name
original_slug: Web/API/File/fileName
browser-compat: api.File.name
---
{{APIRef("File API")}}

Cette propriété renvoie le nom du fichier représenté par l'objet [`File`](/fr/docs/Web/API/File) courant. Pour des raisons de sécurité, le chemin du fichier est exclu de cette propriété.

## Syntaxe

```js
let name = file.name;
```

## Valeur

Une chaîne de caractères qui contient le nom du fichier sans le chemin, par exemple `"Mon compte-rendu.md"`.

## Exemple

### HTML

```html
<input type="file" multiple onchange="processSelectedFiles(this)">

<div id="output"></div>
```

### JavaScript

```js
const output = document.querySelector("#output");
function processSelectedFiles(fileInput) {
  let files = fileInput.files;
  output.textContent = "Liste des fichiers sélectionnés :";

  for (let i = 0; i < files.length; i++) {
    output.textContent += `\nNom du fichier : ${files[i].name}`;
  }
}
```

```css hidden
#output{
  padding: 0.5em 0;
  white-space: pre;
}
```

### Résultat

{{EmbedLiveSample('', 300, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
