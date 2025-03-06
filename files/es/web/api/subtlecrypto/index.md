---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}

La interfaz **`SubtleCrypto`** de la [Web Crypto API](/es/docs/Web/API/Web_Crypto_API) provee una serie de funciones criptográficas de bajo nivel. Se accede a ella a través de las propiedades {{domxref("Crypto.subtle")}} disponible en un contexto de la ventana (via {{domxref("Window.crypto")}}).

> [!WARNING]
> Esta API proporciona una serie de primitivos criptográficos de bajo nivel. Es muy fácil hacer un mal uso de ellos, y las trampas involucradas pueden ser muy sutiles.
>
> Incluso suponiendo que se utilicen correctamente las funciones criptográficas básicas, la gestión segura de las claves y el diseño general del sistema de seguridad son extremadamente difíciles de conseguir correctamente, y generalmente son el dominio de expertos en seguridad especializados.
>
> Los errores en el diseño e implementación del sistema de seguridad pueden hacer que la seguridad del sistema sea completamente ineficaz.
>
> **Si no estás seguro de saber lo que estás haciendo, probablemente no deberías usar esta API.**

## Descripción general

Podemos dividir las funciones implementadas por esta API en dos grupos: funciones criptográficas y funciones de administración de claves.

### Funciones criptográficas

Estas son las funciones que puedes utilizar para implementar características de seguridad como la privacidad y la autenticación en un sistema. El API de `SubtleCrypto` proporciona las siguientes funciones criptográficas:

- {{DOMxRef("SubtleCrypto.sign","sign()")}} y {{DOMxRef("SubtleCrypto.verify","verify()")}}: crea y verifica las firmas digitales.
- {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}} y {{DOMxRef("SubtleCrypto.decrypt","decrypt()")}}: encripta y desencripta datos.
- {{DOMxRef("SubtleCrypto.digest","digest()")}}: crea un digest de longitud fija y resistente a colisiones de algunos datos.

### Funciones de gestión clave

Excepto para {{DOMxRef("SubtleCrypto.digest","digest()")}}, todas las funciones de criptografía de la API utilizan claves criptográficas. En la API `SubtleCrypto` una clave criptográfica se representa usando un objeto {{DOMxRef("CryptoKey","CryptoKey")}}. Para realizar operaciones como firmado y encriptación, provee un objeto {{DOMxRef("CryptoKey","CryptoKey")}} a la función {{DOMxRef("SubtleCrypto.sign","sign()")}} o {{DOMxRef("SubtleCrypto.encrypt","encrypt()")}}.

#### Generando y derivando claves

Las funciones {{DOMxRef("SubtleCrypto.generateKey","generateKey()")}} y {{DOMxRef("SubtleCrypto.deriveKey","deriveKey()")}} ambos crean un nuevo objeto {{DOMxRef("CryptoKey")}}.

La diferencia es que `generateKey()` generará un nuevo valor clave distinto cada vez que lo llames, mientras que `deriveKey()` deriva una llave de algún material inicial de claves. Si proporcionas el mismo material de claves a dos llamadas separadas a `deriveKey()`, obtendrás dos objetos `CryptoKey` que tienen el mismo valor de base. Esto es útil si, por ejemplo, se quiere derivar una clave de cifrado de una contraseña y luego derivar la misma clave de la misma contraseña para descifrar los datos.

#### Importación y exportación de claves

Para hacer que las claves estén disponibles fuera de tu aplicación, necesitas exportar la clave, y para eso sirve {{DOMxRef("SubtleCrypto.exportKey","exportKey()")}}.Puedes elegir uno de varios formatos de exportación.

El inverso de `exportKey()` es {{DOMxRef("SubtleCrypto.importKey","importKey()")}}. Puedes importar claves de otros sistemas, y la compatibilidad con formatos estándar como [PKCS #8](https://tools.ietf.org/html/rfc5208) y [JSON Web Key](https://tools.ietf.org/html/rfc7517) te ayudan a hacer esto. La función `exportKey()` exporta la clave en un formato no codificado.

Si la clave es sensible, deberías usar {{DOMxRef("SubtleCrypto.wrapKey","wrapKey()")}}, que exporta la clave y luego la encripta usando otra clave; el API llama a una "llave de envoltura".

El inverso de `wrapKey()` es {{DOMxRef("SubtleCrypto.unwrapKey","unwrapKey()")}}, que descifra y luego importa la llave.

#### Almacenamiento de claves

Epecification objetos `CryptoKey` pueden ser almacenados usando el [structured clone algorithm](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), lo que significa que puedes almacenarlos y recuperarlos usando las API de almacenamiento web estándar. La especificación espera que la mayoría de los desarrolladores usen el [IndexedDB API](/es/docs/Web/API/IndexedDB_API) para almacenar objetos `CryptoKey`.

### Algoritmos Suportados

Las funciones criptográficas que proporciona la Web Crypto API pueden ser realizadas por uno o más _algoritmos criptográficos_ diferentes: El argumento `algorithm` de la función indica el algoritmo a utilizar. Algunos algoritmos necesitan parámetros adicionales: en estos casos el argumento `algorithm` es un objeto de diccionario que incluye los parámetros adicionales.

En el cuadro que figura a continuación se resume qué algoritmos son adecuados para cada operación criptográfica:

|                   | [sign()](/es/docs/Web/API/SubtleCrypto/sign)[verify()](/es/docs/Web/API/SubtleCrypto/verify) | [encrypt()](/es/docs/Web/HTTP/Headers/Content-Digest)[decrypt()](/es/docs/Web/API/SubtleCrypto/decrypt) | [digest()](/es/docs/Web/API/SubtleCrypto/digest) | [deriveBits()](/es/docs/Web/API/SubtleCrypto/deriveBits)[deriveKey()](/es/docs/Web/API/SubtleCrypto/deriveKey) | [wrapKey()](/es/docs/Web/API/SubtleCrypto/wrapKey)[unwrapKey()](/es/docs/Web/API/SubtleCrypto/unwrapKey) |
| ----------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| RSASSA-PKCS1-v1_5 | ✓                                                                                            |                                                                                                         |                                                  |                                                                                                                |                                                                                                          |
| RSA-PSS           | ✓                                                                                            |                                                                                                         |                                                  |                                                                                                                |                                                                                                          |
| ECDSA             | ✓                                                                                            |                                                                                                         |                                                  |                                                                                                                |                                                                                                          |
| HMAC              | ✓                                                                                            |                                                                                                         |                                                  |                                                                                                                |                                                                                                          |
| RSA-OAEP          |                                                                                              | ✓                                                                                                       |                                                  |                                                                                                                | ✓                                                                                                        |
| AES-CTR           |                                                                                              | ✓                                                                                                       |                                                  |                                                                                                                | ✓                                                                                                        |
| AES-CBC           |                                                                                              | ✓                                                                                                       |                                                  |                                                                                                                | ✓                                                                                                        |
| AES-GCM           |                                                                                              | ✓                                                                                                       |                                                  |                                                                                                                | ✓                                                                                                        |
| SHA-1             |                                                                                              |                                                                                                         | ✓                                                |                                                                                                                |                                                                                                          |
| SHA-256           |                                                                                              |                                                                                                         | ✓                                                |                                                                                                                |                                                                                                          |
| SHA-384           |                                                                                              |                                                                                                         | ✓                                                |                                                                                                                |                                                                                                          |
| SHA-512           |                                                                                              |                                                                                                         | ✓                                                |                                                                                                                |                                                                                                          |
| ECDH              |                                                                                              |                                                                                                         |                                                  | ✓                                                                                                              |                                                                                                          |
| HKDF              |                                                                                              |                                                                                                         |                                                  | ✓                                                                                                              |                                                                                                          |
| PBKDF2            |                                                                                              |                                                                                                         |                                                  | ✓                                                                                                              |                                                                                                          |
| AES-KW            |                                                                                              |                                                                                                         |                                                  |                                                                                                                | ✓                                                                                                        |

## Propiedades

_Esta interfaz no hereda ni implementa ninguna propiedad._

## Métodos

_Esta interfaz no hereda ningún método._

- {{domxref("SubtleCrypto.encrypt()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con los datos codificados correspondientes al texto sin cifrar, el algoritmo y la clave dados como parámetros.
- {{domxref("SubtleCrypto.decrypt()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con los datos claros correspondientes al texto encriptado, el algoritmo y la clave dados como parámetros.
- {{domxref("SubtleCrypto.sign()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con la firma correspondiente al texto, algoritmo y clave dados como parámetros.
- {{domxref("SubtleCrypto.verify()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un valor {{jsxref("Boolean")}} indicando si la firma dada como parámetro coincide con el texto, el algoritmo y la clave que también se dan como parámetros.
- {{domxref("SubtleCrypto.digest()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con digest generado a partir del algoritmo y el texto dados como parámetros.
- {{domxref("SubtleCrypto.generateKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un recién generado {{domxref("CryptoKey")}}, para algoritmos simétricos, o un {{domxref("CryptoKeyPair")}}, que contiene dos claves recién generadas, para algoritmos asimétricos. Estas coincidirán con el algoritmo, usos y extraíbles dados como parámetros.
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un recién generado {{domxref("CryptoKey")}} derivado de la clave maestra y el algoritmo específico dados como parámetros.
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un recién generado buffer de bits pseudo-aleatorios derivado de la clave maestra y el algoritmo específico dados como parámetros.
- {{domxref("SubtleCrypto.importKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un {{domxref("CryptoKey")}} correspondiente al formato, el algoritmo, los datos clave en bruto, los usos y la extraíbilidad dados como parámetros.
- {{domxref("SubtleCrypto.exportKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un buffer que contiene la clave en el formato solicitado.
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con una llave simétrica envuelta para su uso (transferencia y almacenamiento) en entornos inseguros. La llave envuelta coincide con el formato especificado en los parámetros dados, y la envoltura se hace con la llave envuelta dada, usando el algoritmo especificado.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un {{domxref("CryptoKey")}} correspondiente a la llave envuelta dada en el parámetro.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): un curso de introducción a la criptografía (en inglés).
