---
title: "SubtleCrypto: método encrypt() "
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: 373b648fd3f8f742aac14180ebe4ab2e07f8dfab
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

El método **`encrypt()`** de la interfaz {{domxref("SubtleCrypto")}} cifra datos.

Recibe como argumento una {{glossary("key")}} para cifrar, los parámetros específicos del algoritmo, y los datos que se van a cifrar (también conocido como "texto plano" o "plaintext" en inglés).
Retorna un objeto {{jsxref("Promise")}} que se resolverá con los datos cifrados (También conocidos como "texto cifrado" o "ciphertext" en inglés).

## Sintaxis

```js-nolint
encrypt(algorithm, key, data)
```

### Parámetros

- `algorithm`
  - : Un objeto que especifica el [algorithm](#supported_algorithms) que se va a utilizar y cualquier parámetro adicional necesario:
    - Para usar [RSA-OAEP](#rsa-oaep), pasa un objeto{{domxref("RsaOaepParams")}}.
    - Para usar [AES-CTR](#aes-ctr), pasa un objeto {{domxref("AesCtrParams")}}.
    - Para usar [AES-CBC](#aes-cbc), pasa un objeto {{domxref("AesCbcParams")}}.
    - Para usar [AES-GCM](#aes-gcm), pasa un objeto {{domxref("AesGcmParams")}}.

- `key`
  - : Un objeto {{domxref("CryptoKey")}} que contienen la clave que se usará para el cifrado.
- `data`
  - : Un {{jsxref("ArrayBuffer")}}, un {{jsxref("TypedArray")}}, o un {{jsxref("DataView")}}
    que contiene los datos a cifrar (también conocidos como {{glossary("plaintext", "texto plano")}}).

### Valor de retorno

Un objeto {{jsxref("Promise")}} que se resuelve con un {{jsxref("ArrayBuffer")}} que contiene "el texto cifrado".

### Excepciones

La promesa se rechaza cuando se presentan las siguientes excepciones:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Se lanza cuando la operación solicitada no es válida para la clave proporcionada (por ejemplo, un algoritmo de crifrado no válido o una clave incompatible con el algoritmo especificado).
- `OperationError` {{domxref("DOMException")}}
  - : Se lanza cuando la operación falla por un motivo específico (por ejemplo, parámetros del algoritmo con tamaños no válidos o un texto plano en AES-GCM más largo que 2<sup>39</sup>−256 bytes).

## Algoritmos soportados

La Web Crypto API proporciona cuatro algoritmos que admiten las operaciones `encrypt()` y `decrypt()`.

Uno de estos algoritmos — RSA-OAEP — es un {{Glossary("public-key cryptography", "criptosistema de clave pública")}}.

Los otros tres algoritmos de cifrado son todos {{Glossary("Symmetric-key cryptography", "algoritmos simétricos")}}, y se basan en el mismo cifrado subyacente, AES (Advanced Encryption Standard).
La diferencia entre ellos es el {{Glossary("Block cipher mode of operation", "modo")}}.
La Web Crypto API admite tres modos AES diferentes:

- CTR (Modo contador / Counter Mode)
- CBC (Encadenamiento de bloques de cifrado / Cipher Block Chaining)
- GCM (Modo Galois/Contador / Galois/Counter Mode)

Se recomienda encarecidamente utilizar _cifrado autenticado_, que incluye comprobaciones para asegurar que el texto cifrado no haya sido modificado por un atacante.
La autenticación ayuda a proteger contra ataques de _texto-cifrado-elegido_ (chosen-ciphertext attacks), en los que un atacante puede solicitar al sistema que descifre mensajes arbitrarios para deducir información sobre la clave secreta.
Si bien es posible añadir autenticación a los modos CTR y CBC, estos no la proporcionan por defecto y al implementarla manualmente, es fácil cometer errores sutiles,pero graves.
GCM proporciona autenticación integrada y, por esta razón, suele recomendarse por encima de los otros dos modos AES.

### RSA-OAEP

El sistema de cifrado de clave pública RSA-OAEP se especifica en [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447).

### AES-CTR

Representa a AES en modo contador, tal como se especifica en [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final).

AES es un cifrado por bloques, lo que significa que divide el mensaje en bloques y los cifra uno a uno.
En el modo CTR, cada vez que se cifra un bloque del mensaje, se mezcla un bloque de datos adicional llamado "bloque contador" (counter block en inglés).

Un valor de bloque contador determinado nunca debe usarse más de una vez con la misma clave:

- Para un mensaje de _n_ bloques de longitud, se debe usar un bloque contador diferente para cada bloque.
- Si se utiliza la misma clave para cifrar más de un mensaje, se debe usar un bloque contador diferente para todos los bloques de todos los mensajes.

Normalmente, esto se logra dividiendo el valor inicial del bloque contador en dos partes concatenadas:

- Un {{Glossary("Nonce")}} (un número que solo se puede usar una vez). La parte del nonce permanece igual para cada bloque del mensaje. Cada vez que se cifra un mensaje nuevo, se elige un nonce nuevo. Los nonces no tienen que ser secretos, pero no deben reutilizarse con la misma clave.
- Un contador. Esta parte del bloque se incrementa cada vez que se cifra un bloque.

En esencia: el nonce garantiza que los bloques contadores no se reutilicen entre mensajes, mientras que el contador garantiza que no se reutilicen dentro de un mismo mensaje.

> [!NOTE]
> Consulte el [Appendix B of the NIST SP800-38A standard](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) para más información.

### AES-CBC

Esto representa el algoritmo AES en modo de encadenamiento de bloques de cifrado, tal y como se especifica en [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final).

### AES-GCM

Esto representa el cifrado AES en modo Galois/Contador, tal y como se especifica en [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final).

Una diferencia importante entre este modo y los demás es que GCM es un modo "autenticado", lo que significa que incluye comprobaciones para garantizar que el texto cifrado no haya sido modificado por un atacante.

## Ejemplos

> [!NOTE]
> Puedes [probar los ejemplos prácticos](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) en GitHub.

### RSA-OAEP

Este código obtiene el contenido de un cuadro de texto, lo codifica para su cifrado y lo cifra mediante RSA-OAEP. [Puedes consultar el código en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-oaep #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(publicKey) {
  let encoded = getMessageEncoding();
  return window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );
}
```

### AES-CTR

Este código obtiene el contenido de un cuadro de texto, lo codifica para su cifrado y lo cifra mediante AES en modo CTR.
[Puedes consultar el código en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // Se necesitará un contador para el descifrado
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64,
    },
    key,
    encoded,
  );
}
```

### AES-CBC

Este código obtiene el contenido de un cuadro de texto, lo codifica para su cifrado, y lo cifra mediante AES en modo CBC.
[Puedes consultar el código en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // Se necesitará iv para el descifrado
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt({ name: "AES-CBC", iv }, key, encoded);
}
```

### AES-GCM

Este codigo obtiene el contenido de un cuadro de texto, lo codifica para su cifrado y lo cifra mendiante AES en modo GCM. [Puedes consultar el código en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  const message = messageBox.value;
  const enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  const encoded = getMessageEncoding();
  // Se necesitará iv para el descifrado
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SubtleCrypto.decrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) specifies RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) specifies CTR mode.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) specifies CBC mode.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) specifies GCM mode.
