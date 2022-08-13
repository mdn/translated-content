---
title: BlobBuilder
slug: Web/API/BlobBuilder
tags:
  - API
  - Archivo
  - DOM
  - File API
  - NeedsBrowserCompatibility
  - Obsoleto
  - Referencia
translation_of: Web/API/BlobBuilder
---
{{APIRef("File API")}}{{ obsolete_header}}

La interfaz BlobBuilder provee una manera fácil de construir objetos {{domxref("Blob")}} . Solo crea un BlobBuilder y anexa trozos de datos invocando el método [append](#append) . Cuando termines de construir tu objeto, llama al método [getBlob](#getblob) para obtener un objeto {{domxref("Blob")}} que contiene los datos que le enviaste al blob builder.

> **Nota:** La interfaz `BlobBuilder` ha sido descontinuada en favor de introducir el constructor mas reciente {{domxref('Blob')}}.

## Información general de los metodos

| `void append(in ArrayBuffer data);`                                     |
| ----------------------------------------------------------------------- |
| `void append(in Blob data);`                                            |
| `void append(in String data, [optional] in String endings);`            |
| `Blob getBlob([optional] in DOMString contentType);`                    |
| `File getFile(in DOMString name, [optional] in DOMString contentType);` |

## Metodos

### append()

Anexa el contenido del objeto javascript especificado al {{domxref("Blob")}} que esta siendo construido. Si el valor especificado no es un {{domxref("Blob")}}, [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), o [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String), el valor es convertido a String antes de ser anexado al blob.

    void append(
      in ArrayBuffer data
    );

    void append(
      in Blob data
    );


    void append(
      in String data,
      [optional] in String endings
    );

### Parametros

- `data`
  - : Los datos a anexar al objeto {{domxref("Blob")}} que esta siendo construido.
- `endings`
  - : Establece como serán escritas las cadenas que contienen `\n`. Puede ser `"transparent"` (los finales no cambian) o `"native"` (los finales cambian para coincidir a conveniencia del sistema operativo anfitrión). El valor predeterminado es `"transparent"`.

### getBlob()

Regresa el objeto {{domxref("Blob")}} que ha sido construido usando los datos pasados atraves del método [append](#append).

    Blob getBlob(
      in DOMString contentType {{optional_inline}}
    );

### Parametros

- contentType {{optional_inline}}
  - : El tipo MIME de los datos que seran regresados en el objeto {{domxref("Blob")}}. Esto será la propiedad tipo (Type) de los objetos `Blob`.

### Valor de Retorno

Un objeto {{domxref("Blob")}} conteniendo todos los datos pasados por cualquier llamada hecha al método [append](#append) desde que el `BlobBuilder` fue creado. Esto tambien reinicializa el `BlobBuilder` sí que la siguiente llamada al metodo [append](#append) es empezar de nuevo , un blob vacio.

### getFile() {{non-standard_inline}}

Retorna un objeto {{domxref("File")}}.

    File getFile(
      in DOMString name,
      [optional] in DOMString contentType
    );

### Parametros

- name
  - : El nombre del archivo.
- contentType {{optional_inline}}
  - : El tipo MIME de dats regresados en el objeto {{domxref("File")}}. Este será el valor de la propiedad tipo (type) del objeto `File`.

### Valor de Retorno

Un Objeto {{domxref("File")}}.

## Compatibilidad con Nevegadores

{{Compat("api.BlobBuilder")}}

## Vea también

- {{spec("http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder", "File API Specification: BlobBuilder", "ED")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
