---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
tags:
  - API
  - API File
  - Fichiers
  - Méthode
  - Reference
translation_of: Web/API/FileReader/readAsDataURL
---
{{APIRef("API File")}}

La méthode `readAsDataURL` permet de lire le contenu de l’objet  {{domxref("Blob")}} ou {{domxref("File")}} spécifié. À la fin de l’opération de lecture, la propriété {{domxref("FileReader.readyState","readyState")}} renvoie l’état `DONE`, et l’évènement {{event("loadend")}} se déclenche. À ce moment-là, l’attribut {{domxref("FileReader.result","result")}} contient les données dans une URL représentant les données du fichier sous forme de chaîne encodée en base64.

## Syntaxe

    instanceOfFileReader.readAsDataURL(blob);

### Paramètres

- `blob`
  - : L’argument {{domxref("Blob")}} ou {{domxref("File")}} à partir duquel exécuter la lecture.

## Exemple

### HTML

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Aperçu de l’image...">
```

### JavaScript

```js
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### Résultat en direct

{{EmbedLiveSample("Example", "100%", 240)}}



## Exemple de lecture de plusieurs fichiers

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Veillez à ce que `file.name` corresponde à nos critères d’extension
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}
```

> **Note :** Le constructeur [`FileReader()`](/en-US/docs/Web/API/FileReader) n’est pas pris en charge dans les versions IE antérieures à Internet Explorer 10. Pour un code compatible avec tous les navigateurs, accédez à notre [solution d’aperçu d’image multinavigateur](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html). Examinez également cette [alternative plus puissante](https://mdn.mozillademos.org/files/3698/image_upload_preview.html).

## Spécifications

| Spécification                                                                        | État                         | Commentaire         |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName("API File", "#FileReader-interface", "FileReader")}} | {{Spec2("API File")}} | Définition initiale |

## Compatibilité avec les navigateurs

{{Compat("api.FileReader.readAsDataURL")}}

## Voir aussi

- {{domxref("FileReader")}}
