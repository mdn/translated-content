---
title: "File: Constructor File()"
slug: Web/API/File/File
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

El constructor **`File()`** crea una nueva instancia del objeto {{domxref("File")}}.

## Sintaxis

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### Parámetros

- `fileBits`
  - : Un objeto [iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) como un {{jsxref("Array")}}, que tiene {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, {{domxref("Blob")}}s, cadenas,
    o una mezcla de cualquiera de dichos elementos, que se pondrá dentro de {{domxref("File")}}.
    Nota que las cadenas aquí están codificados como UTF-8, a diferencia de las cadenas UTF-16 de JavaScript habituales.
- `fileName`
  - : Una cadena que representa el nombre del archivo o ruta del archivo.
- `options` {{optional_inline}}
  - : Un objeto de opciones que contiene los atributos para el archivo. Las opciones disponibles son los siguientes.
    - `type` {{optional_inline}}
      - : Una cadena que representa el tipo MIME del contenido que contendrá el archivo. El valor predeterminado es `""`
    - `endings` {{optional_inline}}
      - : Cómo interpretar los caracteres de salto de linea (`\n`) dentro del contenido, si el dato es texto. El valor predeterminado, `transparent`, copia caracteres de nueva línea en el blob sin cambiarlos. Para convertir nuevas líneas a la convención nativa del sistema anfitrión, especifica el valor `native`.
    - `lastModified` {{optional_inline}}
      - : Un número que representa el número de milisegundos entre la época de tiempo Unix y la última modificación del archivo. El valor predeterminado es {{jsxref("Date.now()")}}.

## Ejemplos

```js
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
