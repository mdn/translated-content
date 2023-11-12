---
title: Base64 codificando y decodificando
slug: Glossary/Base64
---

**Base64** es un grupo de esquemas de [codificación de binario a texto](https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_binario_a_texto) que representa los datos binarios mediante una cadena ASCII, traduciéndolos en una representación radix-64. El término _Base64_ se origina de un [sistema de codificación de transmisión de contenido MIME](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding) específico.

Los esquemas de codificación Base64 son comúnmente usados cuando se necesita codificar datos binarios para que sean almacenados y transferidos sobre un medio diseñado para tratar con datos textuales. Esto es para asegurar que los datos se mantienen intactos y sin modificaciones durante la transmisión. Base64 es comúnmente usado en muchas aplicaciones, incluyendo la escritura de emails vía [MIME](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions) y el almacenamiento de datos complejos en [XML](/es/docs/XML).

En JavaScript hay dos funciones para decodificar y codificar cadenas base64, respectivamente:

- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}

La función `atob()` decodifica una cadena de datos que ha sido codificada usando la codificación en base 64. Por el contrario, la función `btoa()` crea una cadena ASCII codificada en base 64 a partir de una "cadena" de datos binarios.

Ambas funciones trabajan sobre cadenas de texto. Si desea trabajar con [ArrayBuffers](/es/docs/Web/JavaScript/Referencia/Objetos_globales/ArrayBuffer), lea [este párrafo](/es/docs/Web/API/WindowBase64/Base64_codificando_y_decodificando#Solution_.232_.E2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_TypedArrays_and_UTF-8).

- [`data` URIs](/es/docs/data_URIs)

  - Los URIs de `data`, definidos por [RFC 2397](https://tools.ietf.org/html/rfc2397), permiten a los creadores de contenido introducir pequeños ficheros en línea en documentos.

- [Base64](https://es.wikipedia.org/wiki/Base64)

  - Artículo en Wikipedia sobre el sistema de codificación Base64.

- [`atob()`](/es/docs/Web/API/atob)

  - Decodifica una cadena de datos que ha sido codificada utilizando base-64.

- [`btoa()`](/es/docs/Web/API/btoa)

  - Crea una cadena ASCII codificada en base 64 a partir de una "cadena" de datos binarios.

- [The "Unicode Problem"](/es/docs/glossary/base64#the_.22unicode_problem.22)

  - En la mayoría de navegadores, llamar a `btoa()` con una cadena Unicode causará una excepción `Character Out Of Range`. Este párrafo muestra algunas soluciones.

- [URIScheme](/es/docs/URIScheme)

  - Lista de esquemas URI soportados por Mozilla.

- [`StringView`](/es/docs/Web/JavaScript/Typed_arrays/StringView)

  - En este artículo está publicada una librería hecha por nosotros con los siguientes objetivos:

    - crear una interfaz al estilo de [C](http://es.wikipedia.org/wiki/C_%28programming_language%29) para cadenas (es decir, arrays de códigos de caracteres — [`ArrayBufferView`](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) en JavaScript) basada en la interfaz [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) de JavaScript.
    - crear una colección de métodos para los que los objetos parecidos a cadenas (de ahora en adelante, `stringView`s) funcionen estrictamente en arrays de números más que en cadenas JavaScript inmutables.
    - trabajar con otras codificaciones Unicode diferentes de las [`DOMString`](/es/docs/Web/JavaScript/Reference/Global_Objects/String)s UTF-16 por defecto de JavaScript.

**Herramientas**

- [Reescribir atob() y btoa() usando TypedArrays y UTF-8](/es/docs/glossary/base64#solution_.232_.e2.80.93_rewriting_atob%28%29_and_btoa%28%29_using_typedarrays_and_utf-8)
- [`StringView`, una representación tipo C de cadenas basadas en arrays tipados](/es/docs/Web/JavaScript/Typed_arrays/StringView)

**Temas relacionados**

- [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [Vectores o arrays tipados](/es/docs/Web/JavaScript/Typed_arrays)
- [ArrayBufferView](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [`Uint8Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`StringView`](/es/docs/Web/JavaScript/Typed_arrays/StringView), una representación tipo C de cadenas basadas en arrays tipados
- [`DOMString`](/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`URI`](/es/docs/Glossary/URI)
- [`encodeURI()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

## El "Problema Unicode"

Como las [`DOMString`](/es/docs/Web/API/DOMString)s son cadenas codificadas en 16 bits, en la mayoría de navegadores llamar a `window.btoa` sobre una cadena Unicode resultará en una excepción `Character Out Of Range` si un carácter excede el rango de los caracteres ASCII de 8 bits. Hay dos posibles métodos para resolver este problema:

- el primero es escapar la cadena completa y, entonces, codificarla;
- el segundo es convertir la [`DOMString`](/es/docs/Web/API/DOMString) UTF-16 en un array de caracteres UTF-8 y codificarla.

Aquí están los dos posibles métodos:

### Solución 1 – escapar la cadena antes de codificarla

```js
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

// Uso:
utf8_to_b64("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"
```

Esta solución ha sido propuesta por [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Otra posible solución sin utilizar las funciones 'unscape' y 'escape', ya obsoletas.

```js
function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode("0x" + p1);
    }),
  );
}
b64EncodeUnicode("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
```

### Solución 2 – reescribir `atob()` y `btoa()` usando `TypedArray`s y UTF-8

> **Nota:** El siguiente código también es útil para obtener un [ArrayBuffer](/es/docs/Web/JavaScript/Typed_arrays/ArrayBuffer) a partir de una cadena _Base64_ y/o viceversa ([véase abajo](#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)). **Para una librería completa de arrays tipados, vea [este artículo](/es/docs/Web/JavaScript/Typed_arrays/StringView)**.

```js
"use strict";

/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities
|*|
|*|  https://developer.mozilla.org/es/docs/Web/JavaScript/Base64_encoding_and_decoding
|*|
\*/

/* Decodificación de cadena base64 en array de bytes */

function b64ToUint6(nChr) {
  return nChr > 64 && nChr < 91
    ? nChr - 65
    : nChr > 96 && nChr < 123
    ? nChr - 71
    : nChr > 47 && nChr < 58
    ? nChr + 4
    : nChr === 43
    ? 62
    : nChr === 47
    ? 63
    : 0;
}

function base64DecToArr(sBase64, nBlocksSize) {
  var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
    nInLen = sB64Enc.length,
    nOutLen = nBlocksSize
      ? Math.ceil(((nInLen * 3 + 1) >> 2) / nBlocksSize) * nBlocksSize
      : (nInLen * 3 + 1) >> 2,
    taBytes = new Uint8Array(nOutLen);

  for (
    var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0;
    nInIdx < nInLen;
    nInIdx++
  ) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << (18 - 6 * nMod4);
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = (nUint24 >>> ((16 >>> nMod3) & 24)) & 255;
      }
      nUint24 = 0;
    }
  }

  return taBytes;
}

/* Codificación de array en una cadena Base64 */

function uint6ToB64(nUint6) {
  return nUint6 < 26
    ? nUint6 + 65
    : nUint6 < 52
    ? nUint6 + 71
    : nUint6 < 62
    ? nUint6 - 4
    : nUint6 === 62
    ? 43
    : nUint6 === 63
    ? 47
    : 65;
}

function base64EncArr(aBytes) {
  var nMod3 = 2,
    sB64Enc = "";

  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx > 0 && ((nIdx * 4) / 3) % 76 === 0) {
      sB64Enc += "\r\n";
    }
    nUint24 |= aBytes[nIdx] << ((16 >>> nMod3) & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCharCode(
        uint6ToB64((nUint24 >>> 18) & 63),
        uint6ToB64((nUint24 >>> 12) & 63),
        uint6ToB64((nUint24 >>> 6) & 63),
        uint6ToB64(nUint24 & 63),
      );
      nUint24 = 0;
    }
  }

  return (
    sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) +
    (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==")
  );
}

/* De array UTF-8 a DOMString y viceversa */

function UTF8ArrToStr(aBytes) {
  var sView = "";

  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCharCode(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen /* six bytes */
        ? /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (nPart - 252) * 1073741824 +
            ((aBytes[++nIdx] - 128) << 24) +
            ((aBytes[++nIdx] - 128) << 18) +
            ((aBytes[++nIdx] - 128) << 12) +
            ((aBytes[++nIdx] - 128) << 6) +
            aBytes[++nIdx] -
            128
        : nPart > 247 && nPart < 252 && nIdx + 4 < nLen /* five bytes */
        ? ((nPart - 248) << 24) +
          ((aBytes[++nIdx] - 128) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen /* four bytes */
        ? ((nPart - 240) << 18) +
          ((aBytes[++nIdx] - 128) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 223 && nPart < 240 && nIdx + 2 < nLen /* three bytes */
        ? ((nPart - 224) << 12) +
          ((aBytes[++nIdx] - 128) << 6) +
          aBytes[++nIdx] -
          128
        : nPart > 191 && nPart < 224 && nIdx + 1 < nLen /* two bytes */
        ? ((nPart - 192) << 6) + aBytes[++nIdx] - 128
        : /* nPart < 127 ? */ /* one byte */
          nPart,
    );
  }

  return sView;
}

function strToUTF8Arr(sDOMStr) {
  var aBytes,
    nChr,
    nStrLen = sDOMStr.length,
    nArrLen = 0;

  /* mapeando... */

  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.charCodeAt(nMapIdx);
    nArrLen +=
      nChr < 0x80
        ? 1
        : nChr < 0x800
        ? 2
        : nChr < 0x10000
        ? 3
        : nChr < 0x200000
        ? 4
        : nChr < 0x4000000
        ? 5
        : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcripción... */

  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
    nChr = sDOMStr.charCodeAt(nChrIdx);
    if (nChr < 128) {
      /* un byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* dos bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* tres bytes */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* cuatro bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x4000000) {
      /* cinco bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else {
      /* seis bytes; if (nChr <= 0x7fffffff) */
      aBytes[nIdx++] = 252 + (nChr >>> 30);
      aBytes[nIdx++] = 128 + ((nChr >>> 24) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
      aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    }
  }

  return aBytes;
}
```

#### Tests

```js
/* Tests */

var sMyInput = "Base 64 \u2014 Mozilla Developer Network";

var aMyUTF8Input = strToUTF8Arr(sMyInput);

var sMyBase64 = base64EncArr(aMyUTF8Input);

alert(sMyBase64);

var aMyUTF8Output = base64DecToArr(sMyBase64);

var sMyOutput = UTF8ArrToStr(aMyUTF8Output);

alert(sMyOutput);
```

#### Apéndice: Decodificar una cadena Base64 en Uint8Array o ArrayBuffer

Estas funciones nos permiten crear también [uint8Arrays](/es/docs/Web/JavaScript/Typed_arrays/Uint8Array) o [arrayBuffers](/es/docs/Web/JavaScript/Typed_arrays/ArrayBuffer) a partir de cadenas codificadas en base 64:

```js
var myArray = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
); // "Base 64 \u2014 Mozilla Developer Network"

var myBuffer = base64DecToArr(
  "QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==",
).buffer; // "Base 64 \u2014 Mozilla Developer Network"

alert(myBuffer.byteLength);
```

> **Nota:** La función `base64DecToArr(sBase64[, nBlocksSize])` devuelve un [`uint8Array`](/es/docs/Web/JavaScript/Typed_arrays/Uint8Array) de bytes. Si tu objetivo es construir un búfer de datos crudos de 16, 32 o 64 bits, usa el argumento `nBlocksSize`, que es el número de bytes de los que la propiedad `uint8Array.buffer.bytesLength` debe devolver un múltiplo (1 u omitido para ASCII, [cadenas binarias](/es/docs/Web/API/DOMString/Binary) o cadenas UTF-8 codificacas, 2 para cadenas UTF-16, 4 para cadenas UTF-32).

Para una librería más completa, véase [`StringView`](/es/docs/Web/JavaScript/Typed_arrays/StringView)[, una representación tipo C de cadenas basadas en arrays tipados](/es/docs/Web/JavaScript/Typed_arrays/StringView).

## Véase también

- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [`data` URIs](/es/docs/data_URIs)
- [ArrayBuffer](/es/docs/Web/JavaScript/Typed_arrays/ArrayBuffer)
- [TypedArrays](/es/docs/Web/JavaScript/Typed_arrays)
- [ArrayBufferView](/es/docs/Web/JavaScript/Typed_arrays/ArrayBufferView)
- [Uint8Array](/es/docs/Web/JavaScript/Typed_arrays/Uint8Array)
- [`StringView` – una representación tipo C de cadenas basadas en arreglos tipados](/es/docs/Web/JavaScript/Typed_arrays/StringView)
- [DOMString](/es/docs/Web/API/DOMString)
- [`URI`](/es/docs/URI)
- [`encodeURI()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
- [`nsIURIFixup()`](/es/docs/XPCOM_Interface_Reference/nsIURIFixup)
- [`Base64 en Wikipedia`](https://es.wikipedia.org/wiki/Base64)
