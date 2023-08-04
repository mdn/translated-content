---
title: SubtleCrypto.digest()
slug: Web/HTTP/Headers/Digest
---

{{APIRef("Web Crypto API")}}

El método **`digest()`** de la interfaz {{domxref("SubtleCrypto")}} genera un digest de los datos proveidos. Un {{domxref("digest")}} es un valor corto de longitud fija derivado de alguna entrada de longitud variable. Los digest criptográficos deben mostrar resistencia a colisiones, lo que significa que es difícil encontrar dos entradas diferentes que tengan el mismo valor de digest.

Toma como argumento un identificador para el algoritmo digest a utilizar y los datos a codificar. Devuelve un [`Promise`](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise) que se completará con el digest.

## Sintaxis

```
const digest = crypto.subtle.digest(algorithm, data);
```

### Parámetros

- _`algorithm`_ es un {{domxref("DOMString")}} definiendo la función hash a utilizar. Los valores admitidos son:

  - `SHA-1` (pero no debe utilizarse en aplicaciones criptográficas)
  - `SHA-256`
  - `SHA-384`
  - `SHA-512`

- _`data`_ es un {{jsxref("ArrayBuffer")}} o {{domxref("ArrayBufferView")}} que contiene los datos a ser digitalizados.

### Valor de retorno

- `digest` es un [`Promise`](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise) que se completa con un [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) conteniendo el digest.

## Algoritmos soportados

Los argoritmos digest, también conocidos como [funciones criptográficas hash](/es/docs/Glossary/Cryptographic_hash_function), transforman un bloque de datos arbitrariamente grande en una salida de tamaño fijo, normalmente mucho más corta que la entrada. Tienen una variedad de aplicaciones en criptografía.

### SHA-1

Este algoritmo se especifica en [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), sección 6.1, y produce una salida de 160 bits de largo.

> **Advertencia:** Este algoritmo se considera ahora vulnerable y no debe utilizarse para aplicaciones criptográficas.

### SHA-256

Este algoritmo se especifica en [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), sección 6.2, y produce una salida de 256 bits de largo.

### SHA-384

Este algoritmo se especifica en [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), sección 6.5, y produce una salida de 384 bits de largo.

### SHA-512

Este algoritmo se especifica en [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), sección 6.4, y produce una salida de 512 bits de largo.

> **Nota:** Sugerencia: Si estás buscando aquí cómo crear un código de autenticación de mensajes "keyed-hash" ([HMAC](/es/docs/Glossary/HMAC)), necesitas usar [SubtleCrypto.sign()](/es/docs/Web/API/SubtleCrypto/sign#HMAC) en su lugar.

## Ejemplos

### Ejemplo básico

Este ejemplo codifica un mensaje, luego calcula su digest SHA-256 y muestra la longitud del mismo:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}

const digestBuffer = await digestMessage(text);
console.log(digestBuffer.byteLength);
```

### Convirtiendo un digest a una cadena hexadecimal

El resumen se devuelve como un `ArrayBuffer`, pero para la comparación y visualización los digests se representan a menudo como cadenas hexadecimales. Este ejemplo calcula un digest, y luego convierte el `ArrayBuffer` a un string hexadecimal:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

const digestHex = await digestMessage(text);
console.log(digestHex);
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

> **Nota:** En Chrome 60, se añadió una característica que deshabilita crypto.subtle para conexiones no TLS.

## Ver también

- [Chromium especificación de origines seguro](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) especifica la familia de algoritmos de digest SHA.
