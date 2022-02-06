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
se utiliza para comenzar a leer el contenido especificado en {{domxref("Blob")}}
o {{domxref("File")}}. Cuando la operación de lectura finaliza,
el método {{domxref("FileReader.readyState","readyState")}} se convierte en `DONE`,
y el evento {{domxref("FileReader/loadend_event", "loadend")}} es lanzado. Al mismo tiempo,
el atributo {{domxref("FileReader.result", "result")}} contiene
un {{jsxref("ArrayBuffer")}} que representa los datos del archivo.

## Sintaxis

```js
instanceOfFileReader.readAsArrayBuffer(blob);
```

### Parámetros

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ver también

- {{domxref("FileReader")}}

