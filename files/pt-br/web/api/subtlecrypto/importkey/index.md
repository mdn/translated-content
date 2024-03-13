---
title: SubtleCrypto.importKey()
slug: Web/API/SubtleCrypto/importKey
---

{{APIRef("Web Crypto API")}}

O método **`SubtleCrypto.importKey()`** retorna como {{jsxref("Promise")}} de uma {{domxref("CryptoKey")}} de uma informção dada como parâmetro.

## Sintaxe

```
var result = crypto.subtle.importKey(format, keyData, algo, extractable, usages);
```

### Parâmetros

- _`format`_ é um valor enumerado descrevendo o formato de informação da key exportada. Podendo ser um dos seguintes:

  - `"raw"`, a key como um conjunto de bytes, normalmente uma key secreta.
  - `"pkcs8"` uma key privada, no [IETF Public Key-Cryptographic Standard Encryption #8](http://tools.ietf.org/html/rfc5208).
  - `"spki"`, normalmente uma key pública, no [Simple public key infrastructure](http://en.wikipedia.org/wiki/Simple_public-key_infrastructure) padrão.
  - `"jwk"`, a key no formato [JSON Web Key](https://tools.ietf.org/html/draft-ietf-jose-json-web-key-41).

- `keyData` é uma {{domxref("ArrayBuffer")}} ou uma {{domxref("JSONWebKey")}} contendo uma key no formato dado.
- `algo` é um objeto de dicionário que define o algoritmo que foi utilizado para gerar a key que está sendo importada.
- `extractable` é um {{jsxref("Boolean")}} indicando se a key pode ser extraída de um objeto {{domxref("CryptoKey")}} em um estágio mais tardio.
- `usages` é um {{jsxref("Array")}} que indica o que pode ser feito com a key. Valores possíveis do array são:

  - `"encrypt"`, permitindo que a key seja utilizada para {{glossary("encryption", "encrypting")}} mensagens.
  - `"decrypt"`, permitindo que a key seja utilizada para {{glossary("decryption", "decrypting")}} mensagens.
  - `"sign"`, permitindo que a key seja utilizada para {{glossary("signature", "signing")}} mensagens.
  - `"verify"`, permitindo que a key seja utilizada para {{glossary("verification", "verifying the signature")}} de mensagens.
  - `"deriveKey"`, permitindo que a key seja utilizada como uma key base na derivação de uma nova key.
  - `"deriveBits"`, permitindo que a key seja utilizada como key base na derivação de bits de informação para uso em criptografias primitivas.
  - `"wrapKey"`, permitindo que a key envolva uma key simétrica para uso (transferência, armazenamento) em ambientes não seguros.
  - `"unwrapKey"`, permitindo que a key se desvincule de uma key simétrica para uso (transferência, armazenamento) em ambientes não seguros.

### Valor de retorno

- `result` é uma {{jsxref("Promise")}} que retorna a {{domxref("CryptoKey")}} gerada.

### Exceções

A promise é rejeitada quando umas das seguintes exceções é encontrada:

- [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) quando `keyUsages` está vazia mas a key desvinculada é do tipo `"secret"` ou `"private"`.
- {{jsxref("TypeError")}} quando tentando utilizar um formato invalido ou se a `keyData` não é adequada para este formato.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Crypto")}} e {{domxref("Crypto.subtle")}}.
- {{domxref("SubtleCrypto")}}, a interface a qual ele pertence.

### Dicionário

"Key" = "Chave"
