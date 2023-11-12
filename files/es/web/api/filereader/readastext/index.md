---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

El método `readAsText` se usa para leer el contenido de un tipo {{domxref("Blob")}} o {{domxref("File")}}. Cuando la operación de lectura se completa, el atributo {{domxref("FileReader.readyState","readyState")}} cambia a `DONE`, el evento [`loadend`](/es/docs/Web/Reference/Events/loadend) se dispara y el atributo {{domxref("FileReader.result","result")}} contiene el contenido del archivo como una cadena de texto.

## Sintaxis

```
instanceOfFileReader.readAsText(blob[, encoding]);
```

### Parametros

- `blob`
  - : Una variable de tipo {{domxref("Blob")}} o {{domxref("File")}} de la cual se leerán los datos.
- encoding {{optional_inline}}
  - : Una cadena de texto especificando la codificación de caracteres que se usará en los datos leidos. Por defecto, se utiliza UTF-8 si el parametro no se especifica

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{domxref("FileReader")}}
