---
title: "SubtleCrypto: generateKey() method"
slug: Web/API/SubtleCrypto/generateKey
l10n:
  f1c0a3282b3e30892bd6ec382564774979611feb
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

El método **`generateKey()`** de la interfaz {{domxref("SubtleCrypto")}} es utilizado para generar una nueva clave (para algoritmos simétricos) o un par de claves (para algoritmos de claves públicas).

## Sintaxis

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### Parámetros

- `algorithm`
  - : Un objeto que define el tipo de clave que se va a generar y proporciona parámetros adicionales específicos del algoritmo.
    - Para [RSASSA-PKCS1-v1_5](/en-US/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/en-US/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      o [RSA-OAEP](/en-US/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      pase un objeto [`RsaHashedKeyGenParams`](/en-US/docs/Web/API/RsaHashedKeyGenParams).
    - Para [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) o [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      pase un objeto [`EcKeyGenParams`](/en-US/docs/Web/API/EcKeyGenParams).
    - Para [HMAC](/en-US/docs/Web/API/SubtleCrypto/sign#hmac): pase un objeto [`HmacKeyGenParams`](/en-US/docs/Web/API/HmacKeyGenParams).
    - Para [AES-CTR](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), o [AES-KW](/en-US/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      pase un objeto [`AesKeyGenParams`](/en-US/docs/Web/API/AesKeyGenParams).
    - Para [Ed25519](/en-US/docs/Web/API/SubtleCrypto/sign#ed25519): pase una cadena de texto `Ed25519` o un objeto de la forma `{ name: "Ed25519" }`.
    - Para [X25519](/en-US/docs/Web/API/SubtleCrypto/deriveKey#x25519): pase la cadena de texto `X25519` o un objeto de la forma `{ name: "X25519" }`.

- `extractable`
  - : Un valor booleano que indica si será posible exportar la clave utilizando {{domxref("SubtleCrypto.exportKey()")}} o {{domxref("SubtleCrypto.wrapKey()")}}.
    Ten en cuenta que al generar un par de claves asimétricas (como una RSA o ECDSA), el parámetro `extractable` determina si la clave privada se puede exportar; la clave pública siempre es extraíble (o exportable).

- `keyUsages`
  - : Un {{jsxref("Array")}} de texto que indica qué se puede hacer con las claves recién generadas. Los valores posibles de los elementos del array son:
    - `encrypt`
      - : La clave se puede usar para {{domxref("SubtleCrypto.encrypt()", "cifrar", "", "nocode")}} mensajes.
    - `decrypt`
      - : La clave se puede usar para {{domxref("SubtleCrypto.decrypt()", "descifrar", "", "nocode")}} mensajes.
    - `sign`
      - : La clave se puede usar para {{domxref("SubtleCrypto.sign()", "firmar", "", "nocode")}} mensajes.
    - `verify`
      - : La clave se puede usar para {{domxref("SubtleCrypto.verify()", "verificar", "", "nocode")}} firmas.
    - `deriveKey`
      - : La clave se puede usar para {{domxref("SubtleCrypto.deriveKey()", "generar una nueva clave", "", "nocode")}}.
    - `deriveBits`
      - : La clave se puede usar para {{domxref("SubtleCrypto.deriveBits()", "derivar bits", "", "nocode")}}.
    - `wrapKey`
      - : La clave se puede usar para {{domxref("SubtleCrypto.wrapKey()", "envolver una clave", "", "nocode")}}.
    - `unwrapKey`
      - : La clave se puede usar para {{domxref("SubtleCrypto.unwrapKey()", "desenvolver una clave", "", "nocode")}}.

### Valor de retorno

Un objeto {{jsxref("Promise")}} que se resuelve con un {{domxref("CryptoKey")}} (para algoritmos simétricos) o una {{domxref("CryptoKeyPair")}} (para algoritmos de clave pública).

### Excepciones

La promesa es rechazada cuando se presentan las siguientes excepciones:

- `SyntaxError` {{domxref("DOMException")}}
  - : Se lanza cuando el resultado es un {{domxref("CryptoKey")}} de tipo `secret` o `private` pero `keyUsages` está vacío o no es válido para el tipo de algoritmo.
- `SyntaxError` {{domxref("DOMException")}}
  - : Se lanza cuando el resultado es un {{domxref("CryptoKeyPair")}} y su atributo `privateKey.usages` está vacío o no es válido para el tipo de algoritmo.

## Ejemplos

> [!NOTE]
> Puedes [probar los ejemplos prácticos](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) en GitHub.

### Generación de un par de claves RSA

Este código genera un par de claves de cifrado RSA-OAEP.
[Consulta el código completo en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
  },
  true,
  ["encrypt", "decrypt"],
);
```

### Generación de un par de claves de curva elíptica. 

Este código genera un par de claves de firma ECDSA.
[Consulta el código completo en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-384",
  },
  true,
  ["sign", "verify"],
);
```

### Generación de clave HMAC

Este código genera una clave de firma HMAC.
[Consulta el código completo en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: { name: "SHA-512" },
  },
  true,
  ["sign", "verify"],
);
```

### Generación de clave AES

Este código genera una claves de cifrado AES-GCM.
[Consulta el código completo en GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"],
);
```

### Generación de claves Ed25519

Este código genera un par de claves de firma Ed25519.
Se deriva de [este código fuente en GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js), que puedes [ver en directo aquí](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

```html hidden
<input id="run-button" type="button" value="Run" />
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 170px;
  white-space: pre-wrap; /* envolver los bloques previos */
  overflow-wrap: break-word; /* división de palabras */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

A continuación se muestra el código para generar un par de claves utilizando el algoritmo `Ed25519` y registrar la información de cada clave.
Ten en cuenta que el código se ejecuta dentro en un bloque `try..catch` ya que no todos los navegadores admiten este algoritmo.

El código JavaScript primero obtiene los elementos `#sign-button` y `#message` {{HTMLElement("input")}} y luego añade un detector de evento "click" en el botón.
El manejador de evento borra el registro y ejecuta las demás operaciones pasando el contenido del elemento `<input>`.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Borra los registros
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Ejecuta la función test
  test();
});

async function test() {
  try {
    // Crea un par de claves y usa desestructuración para asignarlas a las variables. 
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "Ed25519",
      },
      true,
      ["sign", "verify"],
    );

    // Muestra las propiedades de las claves
    log(`Clave pública: ${publicKey}`);
    log(`Tipo: ${publicKey.type}`);
    log(`Extraíble: ${publicKey.extractable}`);
    log(`Algoritmo: ${JSON.stringify(publicKey.algorithm)}`);
    log(`Usos: ${publicKey.usages}`);
    log(`Clave privada: ${privateKey}`);
    log(`Tipo: ${privateKey.type}`);
    log(`Extraíble: ${privateKey.extractable}`);
    log(`Algoritmo: ${JSON.stringify(privateKey.algorithm)}`);
    log(`Usos: ${privateKey.usages}`);
  } catch (error) {
    log(error);
  }
}
```

#### Resultado

 La información sobre las claves creadas se muestran a continuación. (o un mensaje de error en el navegador si no permite crear la clave). 

{{EmbedLiveSample("Ed25519", "100%", "240px")}}

### Generación de clave X25519 

Este código genera un par de claves pública y privada X25519 que se puede utilizar en {{domxref("SubtleCrypto.deriveKey()")}} para crear una clave compartida o un {{domxref("SubtleCrypto.deriveBits()")}} para crear un secreto compartido. 

```html hidden
<input id="run-button" type="button" value="Run" />
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 170px;
  white-space: pre-wrap; /* Envolver el bloque previo */
  overflow-wrap: break-word; /* división de palabras */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

A continuación se muestra el código para generar un par de claves utilizando el algoritmo `X25519` y registrar la información de cada clave.
Ten en cuenta que el código se ejecuta dentro de un bloque `try..catch` ya que no todos los navegadores admiten este algoritmo.

El código JavaScript primero obtiene los elemento `#run-button` y `#log` {{HTMLElement("input")}}, luego agrega un detector de evento `click` en el botón.
El manejador de evento borra el registro, genera un par de claves X25519 y registra algunas de sus propiedades.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Borra los registros
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Ejecuta función test
  test();
});

async function test() {
  try {
     // Crea un par de claves y usa desestructuración para asignarlas a las variables. 
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      true,
      ["deriveKey", "deriveBits"],
    );

    // Registra las propiedades de las claves
    log(`Clave pública: ${publicKey}`);
    log(`Tipo: ${publicKey.type}`);
    log(`Extraíble: ${publicKey.extractable}`);
    log(`Algoritmo: ${JSON.stringify(publicKey.algorithm)}`);
    log(`Uso: ${publicKey.usages}`);
    log(`Clave privada: ${privateKey}`);
    log(`Tipo: ${privateKey.type}`);
    log(`Extraíble: ${privateKey.extractable}`);
    log(`Algoritmo: ${JSON.stringify(privateKey.algorithm)}`);
    log(`Uso: ${privateKey.usages}`);
  } catch (error) {
    log(error);
  }
}
```

#### Resultado

A continuación se registra la información sobre las claves creadas (o un mensaje de error si el navegador no permite crear la clave).

{{EmbedLiveSample("X25519", "100%", "240px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cryptographic key length recommendations](https://www.keylength.com/).
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final).
