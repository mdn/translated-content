---
title: File.name
slug: Web/API/File/name
tags:
  - API
  - Archivo
  - Archivos
  - Propiedad
  - Referencia
translation_of: Web/API/File/name
---
{{APIRef("File API")}}

Retorna el nombre del archivo representado por el objeto {{domxref("File")}}. Por razones de seguridad, la ruta de directorios es excluida de esta propiedad.

## Sintaxis

```js
var nombre = file.name;
```

## Valor

Una cadena, conteniendo el nombre del archivo sin la ruta de directorios, por ejemplo: "Mi resumen.rtf".

## Ejemplo

```html
<input type="file" multiple onchange="processSelectedFiles(this)">
```

```js
function processSelectedFiles(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    alert("Filename " + files[i].name);
  }
}
```

Prueba el resultado:

{{ EmbedLiveSample('Example', 300, 50) }}

## Especificaciones

| Especificacion                                                   | Estado                       | Comentario          |
| ---------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API', '#file-attrs', 'name')}} | {{Spec2('File API')}} | Definicion inicial. |

## Compatibilidad con navegadores

{{Compat("api.File.name")}}

## Vea también

- [Usando archivos desde aplicaciones web](/es/docs/Using_files_from_web_applications)
