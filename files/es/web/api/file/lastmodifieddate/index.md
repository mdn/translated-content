---
title: File.lastModifiedDate
slug: Web/API/File/lastModifiedDate
tags:
  - API
  - Archivo
  - Archivos
  - Deprecado
  - File API
  - Propiedad
  - Referencia
  - Solo lectura
translation_of: Web/API/File/lastModifiedDate
---
{{APIRef("File API") }} {{deprecated_header}}

La propiedad de solo lectura **`File.lastModifiedDate`**retorna la fecha de ultima modificacion del archivo. Archivos sin una ultima fecha de modificacion conocida retornan la fecha actual.

## Sintaxis

```js
var time = instanceOfFile.lastModifiedDate
```

## Valor

Un objeto [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Ejemplo

```js
// fileInput es un HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files es un objeto FileList (similar a NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert(files[i].name + " tiene una fecha de ultima modificacion el " + files[i].lastModifiedDate);
}
```

## Especificaciones

_Aunque estaba presente en las primeras versiones de la especificacion de File API, esta propiedad ha sido eliminada de esta y ahora es no-estandar. Usar {{domxref("File.lastModified")}} como reemplazo._

## Compatibilidad con navegadores

{{Compat("api.File.lastModifiedDate")}}

## Vea también

- {{domxref("File")}}
