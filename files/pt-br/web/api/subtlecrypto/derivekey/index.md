---
title: SubtleCrypto.deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
---

{{APIRef("Web Crypto API")}}

O método **`SubtleCrypto.deriveKey()`** retorna como {{jsxref("Promise")}} de um recentemente gerado {{domxref("CryptoKey")}} derivada de uma master key e um algoritmo específico dados como parâmetro.

## Sintaxe

```
var result = crypto.subtle.deriveKey(algorithm, masterKey, derivedKeyAlgorithm, extractable, keyUsages);
```

### Parâmetros

- `algorithm` é um objeto definindo o algoritmo de derivação a se usar. Os valores suportados são:

  - `{"name": "ECDH", "public": publicKey}`
  - `{"name": "DH", "public": publicKey}`
  - `{"name": "PBKDF2", salt, iterations, hash}` where _`salt`_ is an {{jsxref("ArrayBuffer")}} ou um {{jsxref("ArrayBufferView")}}, _`iterations`_ é o número de interações e _`hash`_ é um {{domxref("DOMString")}} identificando o algoritmo hashing para uso.
  - `{"name": "HKDF-CTR", hash, label, context}`

- _`masterKey`_ é uma {{domxref("CryptoKey")}} representando a master key para ser utilizada por um algoritmo de derivação de key.
- `derivedKeyAlgorithm` é um objeto que define o algoritmo, a key derivada será utilizada para {{domxref("DOMString")}} como um atalho para `{"name": derivedKeyAlgo}`. Para AES uma propriedade `length` também é requerida, e os valores possíveis são 128, 192 ou 256 bits.
- `extractable` é um {{jsxref("Boolean")}} indicando se a key pode ser extraída de um objeto {{domxref("CryptoKey")}} em um estágio mais tardio.
- `keyUsages` é um {{jsxref("Array")}} indicando o que pode ser feito com a chave derivada. Os valores possíveis do array são:

  - `"encrypt"`, permitindo que a key seja utilizada para {{glossary("encryption", "encrypting")}} mensagens.
  - `"decrypt"`, permitindo que a key seja utilizada para {{glossary("decryption", "decrypting")}} mensagens.
  - `"sign"`, permitindo que a key seja utilizada para {{glossary("signature", "signing")}} mensagens.
  - `"verify"`, permitindo que a key seja utilizada para {{glossary("verification", "verifying the signature")}} de mensagens.
  - `"deriveKey"`, permitindo que a key seja utilizada como key base na derivação de uma nova key.
  - `"deriveBits"`, permitindo que a key seja utilizada como key base na derivação de bits de informação para uso em criptografias primitivas.
  - `"wrapKey"`, permitindo que a key envolva uma key simétrica (transferência, armazenamento) em ambientes não seguros.
  - `"unwrapKey"`, permitindo que a key se desvincule de uma key simétrica para uso (transfererência, armazenamento) em ambientes não seguros.

### Valor de retorno

- `result` é uma {{jsxref("Promise")}} que retorna a key derivada como uma {{domxref("CryptoKey")}} ou uma {{domxref("CryptoKeyPair")}}.

### Exceções

A promise é rejeitada quando uma das seguintes exceções é encontrada:

- `InvalidAccessError` quando a master key não é uma key para o algoritmo de derivação requisitado ou se o valor desta chave, {{domxref("CryptoKey.usages")}}, não contém `"deriveKey"`.
- `NotSupported` quando tentando usar um algoritmo que não é nem desconhecido e nem se encaixa para a derivação, ou se, o algoritmo requisitado da key derivada não define o comprimento da key.
- [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) quando _`keyUsages`_ está vazio mas a key desvinculada é do tipo `"secret"` ou `"private"`.

## Exemplo

Aqui está um exemplo de como usar **deriveKey()** para criar uma **Secure Remote Password** (também nomeado de **Proof of Secret**) da password de um usuário.

```js
// salt deve ser Uint8Array ou ArrayBuffer
var saltBuffer = Unibabel.hexToBuffer("e85c53e7f119d41fd7895cdc9d7bb9dd");

// não use métodos naïve para conversão de texto, senão caracteres
// internacionais não terão a sequência correta de byte. Use o TextEncoder quando
// possível ou então use polyfills relevantes
var passphraseKey = Unibabel.utf8ToBuffer("I hëart årt and £$¢!");

// Você deve primeiramente importar sua passphrase Uint8array em uma CryptoKey
window.crypto.subtle
  .importKey("raw", passphraseKey, { name: "PBKDF2" }, false, [
    "deriveBits",
    "deriveKey",
  ])
  .then(function (key) {
    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: saltBuffer,
        // não seja muito ambicioso, ou pelo menos tenha em mente
        // que celulares com baixo poder de processamento vão acessar o seu app
        iterations: 100,
        hash: "SHA-256",
      },
      key,

      // Nota: para essa demo nós não vamos precisar de uma cipher suite,
      // mas a API exige que a mesma seja especificada.

      // Para AES o comprimento requerido é de 128 ou 256 bits (não bytes)
      { name: "AES-CBC", length: 256 },

      // Independente da resposta a key é extraível (menos seguro) ou não extraível (mais seguro),
      // quando falso, a key pode ser entregue apenas como um objeto crypto web, não inspecionado
      true,

      // esse objeto crypto web será permitido para apenas essas funções:
      ["encrypt", "decrypt"],
    );
  })
  .then(function (webKey) {
    return crypto.subtle.exportKey("raw", webKey);
  })
  .then(function (buffer) {
    var proofOfSecret = Unibabel.bufferToHex(buffer);
    // esta proof-of-secret / password remota-segura
    // pode agora ser enviada no lugar da password do usuário
  });
```

Nota: Por conta de não haver ferramentas nativas que convertam entre Uint8Array, Unicode, hex, e base64, você provavelmente vai querer utilizar algo como o [Unibabel](https://github.com/coolaj86/unibabel-js) ou [Buffer](https://github.com/feross/buffer) para converter entre eles.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Crypto")}} e {{domxref("Crypto.subtle")}}.
- {{domxref("SubtleCrypto")}}, a interface a qual ele pertence.

### Dicionário

"Key" = "Chave"

"Master key" = "Chave mestre"

"Proof-of-secret" = "Prova de segredo ou Atestado de sigilo"

"Password" = "Palavra passe ou Senha"
