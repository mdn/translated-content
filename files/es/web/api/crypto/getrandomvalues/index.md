---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}

El método **`Crypto.getRandomValues()`** permite obtener valores aleatorios criptográficamente fuertes.
El arreglo dado como parámetro se rellena con números aleatorios (aleatorios en su significado criptográfico).

Para garantizar un rendimiento suficiente, las implementaciones no utilizan un verdadero generador de números aleatorios, sino un generador de números pseudoaleatorios _sembrado_ con un valor con suficiente entropía.
El algoritmo del generador de números pseudoaleatorios (PRNG, por sus siglas en Inglés) puede variar entre _{{Glossary("user agent", "user agents")}}_, pero es adecuado para fines criptográficos.

`getRandomValues()` es el único miembro de la interfaz `Crypto` que puede utilizarse desde un contexto inseguro.

## Sintaxis

```js-nolint
getRandomValues(typedArray)
```

### Parametros

- `typedArray`
  - : Un {{jsxref("TypedArray")}} de enteros, que puede ser uno de los siguientes: {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Uint8ClampedArray")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}},
    {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} (pero **no** `Float32Array` ni `Float64Array`).
    Todos los elementos de la matriz se sobrescribirán con números aleatorios.

### Valor devuelto

El mismo array pasado como `typedArray` pero con su contenido reemplazado por los nuevos números aleatorios generados.
Tenga en cuenta que se modifica el `typedArray` original y no se realiza ninguna copia.

### Excepciones

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Se produce si {{jsxref("TypedArray.byteLength", "byteLength")}} de `typedArray` supera 65,536.

## Notas de uso

No utilice `getRandomValues()` para generar claves de cifrado.
En su lugar, utilice el método {{domxref("SubtleCrypto.generateKey", "generateKey()")}}.
Hay algunas razones para ello; por ejemplo, no se garantiza que `getRandomValues()` se ejecute en un contexto seguro.

No existe un grado mínimo de entropía exigido por la especificación Web Cryptography.
En su lugar, se pide a los _User Agents_ a que proporcionen la mejor entropía que puedan al generar números aleatorios, utilizando un generador de números pseudoaleatorios bien definido y eficiente integrado en el propio _User Agent_, pero sembrado con valores tomados de una fuente externa de números pseudoaleatorios, como una función de números aleatorios específica de la plataforma, el dispositivo `/dev/urandom` de Unix u otra fuente de datos aleatorios o pseudoaleatorios.

## Ejemplos

```js
const array = new Uint32Array(10);
self.crypto.getRandomValues(array);

console.log("Sus números de la suerte:");
for (const num of array) {
  console.log(num);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API Web Crypto](/es/docs/Web/API/Web_Crypto_API)
- {{domxref("crypto_property", "crypto")}} para obtener un objeto {{domxref("Crypto")}}.
- {{jsxref("Math.random")}}, una fuente no criptográfica de números aleatorios.
