---
title: File.webkitRelativePath
slug: Web/API/File/webkitRelativePath
tags:
  - Archivo
  - Entidades Archivo y Directorio de la API
  - File API
  - Propiedad
  - Referencia
  - Solo lectura
  - Web
translation_of: Web/API/File/webkitRelativePath
---
{{APIRef("File API")}}{{non-standard_header}}

La propiedad **`File.webkitRelativePath`** de solo lectura contiene un {{domxref("USVString")}} el cual especifica la ruta relativa del archivo al directorio seleccionado por el usuario en un elemento {{HTMLElement("input")}} con su {{htmlattrxref("webkitdirectory", "input")}} atributo definido.

## Sintaxis

```js
var rulaRelativa = File.webkitRelativePath
```

### Valor

Un {{domxref("USVString")}} conteniendo la ruta del archivo relativa al directorio padre seleccionado por el usuario.

## Ejemplo

En este ejemplo,un seleccionador de directorios es mostrado al usuario para permitirle seleccionar uno o mas directorios. Cuando el evento {{event("change")}} ocurre, una lista de todos los archivos contenidos dentro de la gerarquia de directorio seleccionado es generado y mostrado.

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
```

### Resultado

{{ EmbedLiveSample('Example') }}

## Especificaciones

| Especificacion                                                                                                       | Estado                                   | Comentario              |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------- |
| {{ SpecName('File System API', '#dom-file-webkitrelativepath', 'webkitRelativePath') }} | {{ Spec2('File System API') }} | Especificacion inicial. |

Esta API no tiene especificacion W3C o WHATWG.

## Compatibilidad con navegadores

{{Compat("api.File.webkitRelativePath")}}

## Vea también

- [Entidades "Archivo" y "Directorio" en la API](/es/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
