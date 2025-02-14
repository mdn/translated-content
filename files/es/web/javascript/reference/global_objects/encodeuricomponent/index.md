---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{jsSidebar("Objects")}}

La función **`encodeURIComponent()`** codifica un {{Glossary("URI")}} reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación {{Glossary("UTF-8")}} del carácter (serán cuatro secuencias de escape solo para caracteres compuestos por dos caracteres sustitutos). En comparación con {{jsxref("encodeURI()")}}, esta función codifica más caracteres, incluidos aquellos que son parte de la sintaxis de un URI.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - encodeURIComponent()", "shorter")}}

```js interactive-example
// Encodes characters such as ?,=,/,&,:
console.log(`?x=${encodeURIComponent("test?")}`);
// Expected output: "?x=test%3F"

console.log(`?x=${encodeURIComponent("шеллы")}`);
// Expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## Sintaxis

```js-nolint
encodeURIComponent(uriComponent)
```

### Parámetros

- `uriComponent`
  - : Una cadena que se codificará como un componente de URI (una ruta, cadena de consulta, fragmento, etc.). Otros valores son [convertidos a cadenas](/es/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).

### Valor de retorno

Una nueva cadena de caracteres que representa el `uriComponent` proporcionado codificado como un componente URI.

### Excepciones

- {{jsxref("URIError")}}
  - : Se lanza si `uriComponent` contiene un [sustituto solitario](/es/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Descripción

`encodeURIComponent()` es una propiedad de tipo función del objeto global.

`encodeURIComponent()` usa el mismo algoritmo de codificación que se describe en {{jsxref("encodeURI()")}}. Escapa todos los caracteres **excepto**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

En comparación con {{jsxref("encodeURI()")}}, `encodeURIComponent()` escapa un conjunto más amplio de caracteres. Usa `encodeURIComponent()` en campos ingresados por el usuario en formularios enviados con {{HTTPMethod("POST")}} al servidor, ya que esto codificará los símbolos `&` que podrían generarse inadvertidamente durante la entrada de datos para {{glossary("character reference", "caracteres de referencia")}} u otros caracteres que requieran codificación/decodificación. Por ejemplo, si un usuario escribe `Jack & Jill`, sin `encodeURIComponent()`, el símbolo & podría interpretarse en el servidor como el inicio de un nuevo campo y poner en riesgo la integridad de los datos.

Para [`application/x-www-form-urlencoded`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm), los espacios deben reemplazarse por `+`, por lo que puede que se desee continuar una llamada a `encodeURIComponent()` con un reemplazo adicional de la cadena `%20` por `+`.

## Ejemplos

### Codificación para encabezados Content-Disposition y Link

El siguiente ejemplo proporciona la codificación especial requerida dentro de los parámetros de los encabezados de respuesta del servidor {{HTTPHeader("Content-Disposition")}} y {{HTTPHeader("Link")}} con codificación UTF-8 (por ejemplo, nombres de archivos UTF-8):

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName,
)}`;

console.log(header);
// "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // A continuación crea las secuencias %27 %28 %29 %2A (nótese que
      // la codificación válida de "*" es %2A, lo que requiere llamar a
      // toUpperCase() para codificar correctamente). Aunque RFC3986 reserva "!",
      // RFC5987 no lo hace, por lo que no es necesario escaparlo.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // Los siguientes códigos no son necesarios para el percent-encoding según el
      // RFC5987,
      // por lo que podemos permitir una mejor legibilidad en la transmisión: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Codificación para RFC3986

El [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) más reciente reserva `!`, `'`, `(`, `)`, y `*`, aunque estos caracteres no tienen usos formalizados para la delimitación de un URI. La siguiente función codifica una cadena para un formato de componente de URL compatible con RFC3986. También codifica `[` y `]`, que son parte de la sintaxis de URI {{Glossary("IPv6")}}. Una implementación de `encodeURI` compatible con RFC3986 no debería escapar estos caracteres, como se demuestra en el [ejemplo de `encodeURI()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#encoding_for_rfc3986).

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Codificación de un sustituto solitario lanza

Un {{jsxref("URIError")}} será lanzado si se intenta codificar un sustituto que no es parte de un par alto-bajo. Por ejemplo:

```js
// El par alto-bajo está bien
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"

// Un código solitario de sustituto alto lanza "URIError: secuencia de URI mal formada"
encodeURIComponent("\uD800");

// Un código solitario de sustituto bajo lanza "URIError: secuencia de URI mal formada"
encodeURIComponent("\uDFFF");
```

Puedes usar {{jsxref("String.prototype.toWellFormed()")}}, que reemplaza los sustitutos solitarios con el carácter de reemplazo de Unicode (U+FFFD), para evitar este error. También puedes usar {{jsxref("String.prototype.isWellFormed()")}} para verificar si una cadena contiene sustitutos solitarios antes de pasarla a `encodeURIComponent()`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
