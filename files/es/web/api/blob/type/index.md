---
title: Blob.type
slug: Web/API/Blob/type
tags:
  - API
  - Archivo
  - Archivos
  - DOM
  - Propiedad
  - Referencia
translation_of: Web/API/Blob/type
---
{{APIRef("File API")}}

La propiedad **`type`** de un objeto [`Blob`](/en-US/docs/Web/API/Blob) proporciona el tipo MIME del archivo. Retorna una cadena vacía si el tipo no puede ser determinado.

## Sintaxis

    var tipo = instanceOfFile.type

## Valor

Una cadena

## Ejemplo

```js
var i, fileInput, files, allowedFileTypes;

// fileInput es un HTMLInputElement: <input type="file" multiple id="myfileinput">
fileInput = document.getElementById("myfileinput");

// files es un objeto FileList (similar a NodeList)
files = fileInput.files;

// nuestra aplicacion solo acepta imagenes *.png, *.jpeg y *.gif
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // Prueba si file.type es un tipo de archivo permitido.
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // El tipo de archivo es uno de los permitidos. Hacer algo aquí.
  }
});
```

## Especificaciones

| Espeficicaciones                                             | Estado                       | Comentario          |
| ------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('File API', '#dfn-type', 'type')}} | {{Spec2('File API')}} | Definicion inicial. |

## Compatibilidad con browsers

{{Compat("api.Blob.type")}}

## Ver también

- {{domxref("Blob")}}
