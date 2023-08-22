---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

El método `readAsDataURL` es usado para leer el contenido del especificado {{domxref("Blob")}} o {{domxref("File")}}. Cuando la operación de lectura es terminada, el {{domxref("FileReader.readyState","readyState")}} se convierte en `DONE`, y el [`loadend`](/es/docs/Web/Reference/Events/loadend) es lanzado. En ese momento, el atributo {{domxref("FileReader.result","result")}} contiene la información como un [datos: URL](/es/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) representando la información del archivo como una cadena de caracteres codificados en base64.

> **Nota:** El {{domxref("FileReader.result","result")}} de blob no puede ser
> directamente decodificado como Base64 sin primero remover la delaración de Datos-URL
> de la información codificada en Base64. Para recuperar únicamente la cadena codifidicada
> en Base64, primero remueve `data:*/*;base64`, del resultado.

## Sintaxis

```js
instanceOfFileReader.readAsDataURL(blob);
```

### Parametros

- `blob`
  - : El {{domxref("Blob")}} o {{domxref("File")}} desde el cual leer.

## Ejemplo

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="Image preview..." />
```

### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convierte la imagen a una cadena en base64
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### Resultado

{{EmbedLiveSample("Ejemplo", "100%", 240)}}

## Ejemplo leyendo multiples archivos

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple />
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {
  var preview = document.querySelector("#preview");
  var files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Asegurate que `file.name` coincida con el criterio de extensiones
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}
