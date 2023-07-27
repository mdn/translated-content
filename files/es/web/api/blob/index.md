---
title: Blob
slug: Web/API/Blob
---

{{ APIRef("File API") }}

## Resumen

Un objeto `Blob` representa un objeto tipo fichero de datos planos inmutables. Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript. La interfaz {{ domxref("File") }} se encuentra basada en un `Blob`, heredando y expendiendo la funcionalidad de un `Blob` para soportar archivos en el sistema del usuario.

Una forma fácil de construir un `Blob` es invocando el constructor {{domxref("Blob.Blob", "Blob()")}}. Otra manera es utilizando el método `slice()` para crear un blob que contiene un subconjunto de los datos de otro `Blob`.

## Constructor

- {{domxref("Blob.Blob", "Blob()")}}
  - : Regresa un nuevo objeto `Blob` creado cuyo contenido consiste en la concatenación de un arreglo de valores establecidos en el parámetro de la función.

## Propiedades

- {{domxref("Blob.size")}} {{readonlyinline}}
  - : El tamaño, en bytes, de los datos contenidos en el objeto `Blob`
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : Una cadena (String) indicando el tipo MIME de los datos contenidos en el `Blob`. Si el tipo es desconocido, esta cadena será vacía.

## Métodos

- {{domxref("Blob.slice()")}}
  - : `Regresa un nuevo objeto Blob` conteniendo los datos de un rango específico de bytes del origen del `Blob`.

> **Nota:** Esté consciente que el método `slice()` posee prefijos propios del fabricante en algunos exploradores y versiones: `blob.mozSlice()` para Firefox 12 e inferior y `blob.webkitSlice()` en Safari. Una versión anterior del método `slice()`, sin prefijos del fabricante, tenía diferente semántica, y se encuentra obsoleto. El soporte para `blob.mozSlice()` ha sido eliminado a partir de Firefox 30.

## Ejemplos

### Ejemplo de uso de un constructor de Blob

El siguiente código:

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // the blob
```

es equivalente a:

```js
var oBuilder = new BlobBuilder();
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
oBuilder.append(aFileParts[0]);
var oMyBlob = oBuilder.getBlob("text/xml"); // the blob
```

> **Advertencia:** La interfaz {{ domxref("BlobBuilder") }} ofrece otra manera de crear `Blob`, pero se encuentra ahora obsoleta y no debería volverse a utilizar.

### Ejemplo para crear una URL en un arreglo tipado utilizando un blob

El siguiente código:

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], { type: "application/octet-binary" }); // pass a useful mime type here
var url = URL.createObjectURL(blob);
// url will be something like: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// now you can use the url in any context that regular URLs can be used in, for example img.src, etc.
```

### Ejemplo para extraer datos de un Blob

La única manera de leer contenido de un Blob es utilizando un {{domxref("FileReader")}}. El siguiente código lee el contenido de un Blob como un arreglo tipado.

```js
var reader = new FileReader();
reader.addEventListener("loadend", function () {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Al utilizar otros métodos de {{domxref("FileReader")}}, es posible leer los contenidos del Blob como una cadena o una URL de datos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ domxref("BlobBuilder") }}
- {{ domxref("File") }}
