---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
tags:
  - API
  - DOM
  - File API
  - FileReader
  - Files
  - Method
  - Reference
  - readAsArrayBuffer
browser-compat: api.FileReader.readAsArrayBuffer
translation_of: Web/API/FileReader/readAsArrayBuffer
---
{{APIRef("File API")}}

El método **`readAsArrayBuffer()`** de la interfaz {{domxref("FileReader")}}
se utiliza para comenzar a leer el contenido de un {{domxref("Blob")}}
o {{domxref("File")}} especificado. Cuando la operación de lectura finaliza,
la propiedad {{domxref("FileReader.readyState","readyState")}} se convierte en `DONE`,
y se desencadena el evento {{domxref("FileReader/loadend_event", "loadend")}}. En ese momento,
el atributo {{domxref("FileReader.result", "result")}} contiene
un {{jsxref("ArrayBuffer")}} que representa los datos del archivo.

## Sintaxis

```js
instanceOfFileReader.readAsArrayBuffer(blob);
```

### Parámetros

- `blob`
  - : El {{domxref("Blob")}} o {{domxref("File")}} desde el que se leerá.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("FileReader")}}

