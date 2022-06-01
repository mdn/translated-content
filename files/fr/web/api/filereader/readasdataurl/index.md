---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
translation_of: Web/API/FileReader/readAsDataURL
browser-compat: api.FileReader.readAsDataURL
---
{{APIRef("File API")}}

La méthode **`FileReader.readAsDataURL()`** est utilisée afin de lire le contenu d'un blob ([`Blob`](/fr/docs/Web/API/Blob)) ou d'un fichier ([`File`](/fr/docs/Web/API/File)). Lorsque l'opération de lecture est terminée, [`readyState`](/fr/docs/Web/API/FileReader/readyState) prend la valeur `DONE`, et l'évènement [`loadend`](/fr/docs/Web/API/XMLHttpRequest/loadend_event) est déclenché. À partir de ce moment, la propriété [`result`](/fr/docs/Web/API/FileReader/result) contient les données sous la forme d'une [URL de données](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) qui représente les données du fichier sous la forme d'une chaîne de caractères encodée en base64.

> **Note :** Pour un blob, [`result`](/fr/docs/Web/API/FileReader/result) ne peut pas être décodé en base64 sans avoir d'abord retiré la déclaration d'URL de données qui précède les données encodées. Pour récupérer uniquement la chaîne encodée en base 64, il faut d'abord supprimer le préfixe `data:*/*;base64,` du résultat.

## Syntaxe

```js
instanceOfFileReader.readAsDataURL(blob);
```

### Paramètres

- `blob`
  - : L'objet [`Blob`](/fr/docs/Web/API/Blob) ou [`File`](/fr/docs/Web/API/File) qu'on souhaite lire.

## Exemples

### Exemple simple

#### HTML

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Prévisualisation de l'image…">
```

#### JavaScript

```js
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // on convertit l'image en une chaîne de caractères base64
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 240)}}

### Lire plusieurs fichiers

#### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // On s'assure que `file.name` termine par 
    // une des extensions souhaitées
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

> **Note :** Le constructeur [`FileReader()`](/fr/docs/Web/API/FileReader) n'était pas pris en charge pour les versions d'Internet Explorer antérieures à IE 10. Voir aussi [cet autre exemple](https://mdn.mozillademos.org/files/3698/image_upload_preview.html).
 
## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`FileReader`](/fr/docs/Web/API/FileReader)
- [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL)