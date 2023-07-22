---
title: FileReader.result
slug: Web/API/FileReader/result
---

{{APIRef("File API")}}La propiedad **`result`** de {{domxref("FileReader")}} retorna el contenido del archivo. Esta propiedad es válida únicamente después de que la operación de lectura del archivo es completada. El formato de la infomación devuelta depende de cuál de los métodos de lectura fue usado.

## Sintaxis

```
var file = instanceOfFileReader.result
```

### Valor

Una cadena de texto apropiada o un {{domxref("ArrayBuffer")}} dependiendo de cuál método de lectura haya provocado la operación de lectura. El valor es `null` si la lectura no se ha completado aún o no fue exitosa.

Los tipos de resultados son descritos a continuación.

| Método                                                                   | Descripción                                                                                                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`readAsArrayBuffer()`](/es/docs/Web/API/FileReader/readAsArrayBuffer)   | `result` es un [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) de JavaScript que contiene la información binaria. |
| [`readAsBinaryString()`](/es/docs/Web/API/FileReader/readAsBinaryString) | `result` contiene la información binaria del archivo en una cadena de texto.                                                                    |
| [`readAsDataURL()`](/es/docs/Web/API/FileReader/readAsDataURL)           | `result` es una cadena de texto que representa una URL con la propiedad `data:` que contiene la información leída del archivo.                  |
| [`readAsText()`](/es/docs/Web/API/FileReader/readAsText)                 | `result` es una cadena de texto con el contenido del archivo.                                                                                   |

## Ejemplo

Este ejemplo representa una función `read()`, que lee un archivo de un [file input](/es/docs/Web/HTML/Element/input/file). Funciona creando un objeto de {{domxref("FileReader")}} y creando un listener para los eventos [load](/es/docs/Web/Events/load) de tal manera que cuando el archivo es leído, la propiedad `result` es obtenida y pasada a la función callback proporcionada a `read()`.

El contenido es manejado como texto.

```js
var fileInput = document.querySelector('input[type="file"]');

function read(callback) {
  var file = fileInput.files.item(0);
  var reader = new FileReader();

  reader.onload = function () {
    callback(reader.result);
  };

  reader.readAsText(file);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("FileReader")}}
