---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
l10n:
  sourceCommit: 44b15fff6c156ec81c2290e252e20c4519089688
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

La interfaz **`SubtleCrypto`** de la [Web Crypto API](/es/docs/Web/API/Web_Crypto_API) proporciona una serie de funciones criptográficas de bajo nivel.

El nombre de la interfaz incluye el término "subtle" (sutil) para indicar que muchos de sus algoritmos tienen requisitos de uso sutiles y que, por lo tanto, debe utilizarse con cuidado para ofrecer garantías de seguridad adecuadas.

Una instancia de `SubtleCrypto` está disponible a través de la propiedad {{domxref("Crypto.subtle", "subtle")}} de la interfaz {{domxref("Crypto")}}, la cual se encuentra disponible en ventanas mediante {{domxref("Window.crypto")}} y en _workers_ a través de la propiedad {{domxref("WorkerGlobalScope.crypto")}}.

> [!WARNING]
> Esta API proporciona una serie de primitivas criptográficas de bajo nivel. Es muy fácil hacer un mal uso de ellas, y los riesgos que conlleva pueden ser muy sutiles.
>
> Incluso suponiendo que las funciones criptográficas básicas se utilicen correctamente, la gestión segura de las claves y el diseño general del sistema de seguridad son extremadamente difíciles de implementar de forma adecuada y, por lo general, son competencia de expertos especializados en seguridad.
>
> Los errores en el diseño e implementación del sistema de seguridad pueden hacer que la seguridad del sistema sea completamente ineficaz.
>
> Por favor, aprende y experimenta, pero no garantices ni insinúes la seguridad de tu trabajo antes de que una persona con conocimientos en esta materia lo revise exhaustivamente. El [curso Crypto 101](https://www.crypto101.io/) puede ser un excelente punto de partida para aprender sobre el diseño e implementación de sistemas seguros.

## Propiedades de instancia

_Esta interfaz no hereda ni implementa ninguna propiedad._

## Métodos de instancia

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
  - : Retorna un {{jsxref("Promise")}} que se completa con el digest generado a partir del algoritmo y el texto dados como parámetros.
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
  - : Retorna un {{jsxref("Promise")}} que se completa con una clave simétrica envuelta para su uso (transferencia y almacenamiento) en entornos inseguros. La clave envuelta coincide con el formato especificado en los parámetros dados, y la envoltura se hace con la clave envuelta dada, usando el algoritmo especificado.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Retorna un {{jsxref("Promise")}} que se completa con un {{domxref("CryptoKey")}} correspondiente a la clave envuelta dada en el parámetro.

## Uso de SubtleCrypto

Podemos dividir las funciones implementadas por esta API en dos grupos: funciones criptográficas y funciones de administración de claves.

### Funciones criptográficas

Estas son las funciones que puedes utilizar para implementar características de seguridad como la privacidad y la autenticación en un sistema. El API de `SubtleCrypto` proporciona las siguientes funciones criptográficas:

- {{domxref("SubtleCrypto.sign","sign()")}} y {{domxref("SubtleCrypto.verify","verify()")}}: crea y verifica las firmas digitales.
- {{domxref("SubtleCrypto.encrypt","encrypt()")}} y {{domxref("SubtleCrypto.decrypt","decrypt()")}}: encripta y desencripta datos.
- {{domxref("SubtleCrypto.digest","digest()")}}: crea un digest de longitud fija y resistente a colisiones de algunos datos.

### Funciones de gestión de claves

Excepto para {{domxref("SubtleCrypto.digest","digest()")}}, todas las funciones de criptografía de la API utilizan claves criptográficas. En la API `SubtleCrypto` una clave criptográfica se representa usando un objeto {{domxref("CryptoKey","CryptoKey")}}. Para realizar operaciones como firmado y encriptación, provee un objeto {{domxref("CryptoKey","CryptoKey")}} a la función {{domxref("SubtleCrypto.sign","sign()")}} o {{domxref("SubtleCrypto.encrypt","encrypt()")}}.

#### Generando y derivando claves

Las funciones {{domxref("SubtleCrypto.generateKey","generateKey()")}} y {{domxref("SubtleCrypto.deriveKey","deriveKey()")}} ambas crean un nuevo objeto {{domxref("CryptoKey")}}.

La diferencia es que `generateKey()` generará un nuevo valor clave distinto cada vez que lo llames, mientras que `deriveKey()` deriva una clave de algún material inicial de claves. Si proporcionas el mismo material de claves a dos llamadas separadas a `deriveKey()`, obtendrás dos objetos `CryptoKey` que tienen el mismo valor de base. Esto es útil si, por ejemplo, se quiere derivar una clave de cifrado de una contraseña y luego derivar la misma clave de la misma contraseña para descifrar los datos.

#### Importación y exportación de claves

Para hacer que las claves estén disponibles fuera de tu aplicación, necesitas exportar la clave, y para eso sirve {{domxref("SubtleCrypto.exportKey","exportKey()")}}. Puedes elegir uno de varios formatos de exportación.

El inverso de `exportKey()` es {{domxref("SubtleCrypto.importKey","importKey()")}}. Puedes importar claves de otros sistemas, y la compatibilidad con formatos estándar como [PKCS #8](https://tools.ietf.org/html/rfc5208) y [JSON Web Key](https://tools.ietf.org/html/rfc7517) te ayudan a hacer esto. La función `exportKey()` exporta la clave en un formato no codificado.

Si la clave es sensible, deberías usar {{domxref("SubtleCrypto.wrapKey","wrapKey()")}}, que exporta la clave y luego la encripta usando otra clave; la API la llama "clave de envoltura".

El inverso de `wrapKey()` es {{domxref("SubtleCrypto.unwrapKey","unwrapKey()")}}, que descifra y luego importa la clave.

#### Almacenamiento de claves

`CryptoKey` es un {{glossary("serializable object", "objeto serializable")}}, lo que permite que las claves se almacenen y recuperen utilizando las API de almacenamiento web estándar.

La especificación espera que la mayoría de los desarrolladores utilicen la [API IndexedDB](/es/docs/Web/API/IndexedDB_API), almacenando los objetos `CryptoKey` asociados a algún identificador de cadena clave que sea significativo para la aplicación, junto con cualquier otro metadato que consideren útil.
Esto permite el almacenamiento y la recuperación de la `CryptoKey` sin tener que exponer su material de clave subyacente a la aplicación o al entorno de JavaScript.

### Algoritmos soportados

Las funciones criptográficas que proporciona la Web Crypto API pueden ser realizadas por uno o más _algoritmos criptográficos_ diferentes: El argumento `algorithm` de la función indica el algoritmo a utilizar. Algunos algoritmos necesitan parámetros adicionales: en estos casos el argumento `algorithm` es un objeto de diccionario que incluye los parámetros adicionales.

En el cuadro que figura a continuación se resume qué algoritmos son adecuados para cada operación criptográfica:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/sign">sign</a><br /><a href="/es/docs/Web/API/SubtleCrypto/verify">verify</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/encrypt">encrypt</a><br /><a href="/es/docs/Web/API/SubtleCrypto/decrypt">decrypt</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/digest">digest</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/deriveBits">deriveBits</a><br /><a href="/es/docs/Web/API/SubtleCrypto/deriveKey">deriveKey</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/wrapKey">wrapKey</a><br /><a href="/es/docs/Web/API/SubtleCrypto/unwrapKey">unwrapKey</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/generateKey">generateKey</a><br /><a href="/es/docs/Web/API/SubtleCrypto/exportKey">exportKey</a>
      </th>
      <th scope="col">
        <a href="/es/docs/Web/API/SubtleCrypto/importKey">importKey</a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5">RSASSA-PKCS1-v1_5</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/sign#rsa-pss">RSA-PSS</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/sign#ecdsa">ECDSA</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/sign#ed25519">Ed25519</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/sign#hmac">HMAC</a></th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep">RSA-OAEP</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/encrypt#aes-ctr">AES-CTR</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/encrypt#aes-cbc">AES-CBC</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/encrypt#aes-gcm">AES-GCM</a></th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/wrapKey#aes-kw">AES-KW</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-1</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-256</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-384</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/digest#supported_algorithms">SHA-512</a></th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/deriveKey#ecdh">ECDH</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/deriveKey#x25519">X25519</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/deriveKey#hkdf">HKDF</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <th scope="row"><a href="/es/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2">PBKDF2</a></th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Web Crypto API](/es/docs/Web/API/Web_Crypto_API)
- [Usos no criptográficos de SubtleCrypto](/es/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Seguridad web](/es/docs/Web/Security)
- [Privacidad, permisos y seguridad de la información](/es/docs/Web/Privacy)
- {{domxref("Crypto")}} y {{domxref("Crypto.subtle")}}.
- [Crypto 101](https://www.crypto101.io/): un curso de introducción a la criptografía (en inglés).
