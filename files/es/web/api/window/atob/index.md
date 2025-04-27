---
title: WindowBase64.atob()
slug: Web/API/Window/atob
original_slug: Web/API/atob
---

{{APIRef}}

La función **WindowBase64.atob()** descodifica una cadena de datos que ha sido codificada utilizando la codificación en base-64. Puedes utilizar el método {{domxref("window.btoa()")}} para codificar y transmitir datos que, de otro modo podrían generar problemas de comunicación. Luego de ser transmitidos se puede usar el método window\.atob() para decodificar los datos de nuevo. Por ejemplo, puedes codificar, transmitir y decodificar los caracteres de control como valores ASCII 0 a 31.

For use with Unicode or UTF-8 strings, see [this note at Base64 encoding and decoding](/es/docs/Glossary/Base64#the_.22unicode_problem.22) and [this note at `window.btoa()`](/es/docs/Web/API/Window/btoa#unicode_strings).

## Syntax

```
var decodedData = window.atob(encodedData);
```

## Example

```js
var encodedData = window.btoa("Hello, world"); // encode a string
var decodedData = window.atob(encodedData); // decode the string
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Base64 encoding and decoding](/es/docs/Glossary/Base64)
- [`data` URIs](/es/docs/Web/URI/Reference/Schemes/data)
- {{domxref("window.btoa()")}}
- [Components.utils.importGlobalProperties](/es/docs/Components.utils.importGlobalProperties)
