---
title: Blob()
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

El constructor **`Blob()`** retorna un nuevo objeto {{domxref("Blob")}} . El contenido del blob consiste en la concatenación de los valores obtenidos en el parrametro _array_.

## Sintaxis

```
var aBlob = new Blob( array, options );
```

### Parámetros

- `array`
  - : Es un {{jsxref("Array")}} de {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, objetos {{domxref("USVString")}}, o una mezcla de cualquiera de éstos objetos, que será puesto dentro de {{domxref("Blob")}}. Los objetos `USVString` estan codificados como UTF-8.
- `options` {{optional_inline}}

  - : Un objeto opcional de tipo {{domxref("BlobPropertyBag")}} que puede especificar las siguientes propiedades:

    - `type` {{optional_inline}}
      - : El {{Glossary("MIME type")}} de la información que será almacenada en el blob. El valor por defecto es una cadena vacía, (`""`).
    - `endings` {{optional_inline}} {{non-standard_inline}}
      - : Cómo interpretar los carácteres de nueva línea (`\n`) en el contenido, si la información es texto. El valor por defecto, `transparent`, copia los caracteres de nueva línea en el blob sin cambiarlos. Para convertir las nuevas líneas a la convención nativa del sistema, se especifica `endings`.

### Valor de retorno

Un nuevo objeto {{domxref("Blob")}} conteniendo la información especificada.

## Ejemplo

```js
var unaParteDeArchivo = ['<a id="a"><b id="b">hey!</b></a>']; // un array de un solo DOMString
var oMiBlob = new Blob(unaParteDeArchivo, { type: "text/html" }); // el blob
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- La interfaz deprecada {{domxref("BlobBuilder")}}, la cual es reemplazada por este constructor.
