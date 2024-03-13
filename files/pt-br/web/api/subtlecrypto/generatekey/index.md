---
title: SubtleCrypto.generateKey()
slug: Web/API/SubtleCrypto/generateKey
---

{{APIRef("Web Crypto API")}}

O método **`SubtleCrypto.generateKey()`** retorna como {{jsxref("Promise")}} de uma recentemente gerada {{domxref("CryptoKey")}}, para algoritmos simétricos, ou uma {{domxref("CryptoKeyPair")}}, contendo duas keys recentemente geradas, para algoritmos assimétricos, que combina com o algoritmo, o uso e a extractividade são dados como parâmetro.

## Sintaxe

```
var result = crypto.subtle.generateKey(algo, extractable, keyUsages);
```

### Parâmetros

- _`algo`_ é um objeto do dicionário definindo a função utilizada da geração da key. algo suportados são : [AES-CBC](/pt-BR/docs/Web/API/Web_Crypto_API/Supported_algorithms#AES-CBC), `AES-CTR`, `AES-GCM`, `RSA-OAEP`, `AES-KW`, `HMAC`, `RSASSA-PKCS1-v1_5`, `ECDSA`, `ECDH`, e `DH`. Os formatos de objetos do dicionário são:

  - `"name"`, o qual corresponde com um dos algo's suportados listados acima,
  - `"modulusLength"`, o qual corresponde com o número de dígitos usado nos módulos
  - `"publicExponent`", uma {{jsxref("Uint8Array")}} representando o exponencial público
  - `"hash"`, um objeto do dicionário referenciando o uso do algoritmo hash. Por exemplo:

    - `{name: "SHA-512"}`

- `extractable` é um {{jsxref("Boolean")}} indicando se a key pode ser extraída do objeto {{domxref("CryptoKey")}} em um estágio mais tardio.
- `keyUsages` é uma {{jsxref("Array")}} indicando o que pode ser feito com uma key recentemente gerada. Os possíveis valores da array são:

  - `"encrypt"`, permitindo que a key seja utilizada para {{glossary("encryption", "encrypting")}} mensagens.
  - `"decrypt"`, permitindo que a key seja utilizada para {{glossary("decryption", "decrypting")}} mensagens.
  - `"sign"`, permitindo que a key seja utilizada para {{glossary("signature", "signing")}} mensagens.
  - `"verify"`, permitindo que a key seja utilizada para {{glossary("verification", "verifying the signature")}} de mensagens.
  - `"deriveKey"`, permitindo que a key seja utilizada como uma key base para quando se derivando uma nova key.
  - `"deriveBits"`, permitindo que a key seja utilizada como uma key base quando se derivando {{glossary("bits")}} de dados para uso em criptografias primitivas.
  - `"wrapKey"`, permitindo que a key envolva uma chave simétrica para uso (transferência, armazenamento) em ambientes não seguros.
  - `"unwrapKey"`, permitindo que a key se desvincule de uma chave simétrica para uso (transferência, armazenamento) em ambientes não seguros.

### Valor de retorno

- `result` é uma {{jsxref("Promise")}} que retorna uma key gerada como uma {{domxref("CryptoKey")}} ou uma {{domxref("CryptoKeyPair")}}.

### Exceções

A {{jsxref("Promise")}} é rejeitada quando a seguinte exceção é encontrada:

- [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) quando `keyUsages` está vazia mas a key gerada simetricamente é do tipo `"secret"` ou `"private"` ou o componente privado gerado do par de key assimétrica está vazio.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Crypto")}} e {{domxref("Crypto.subtle")}}.
- {{domxref("SubtleCrypto")}}, a interface a qual ele pertence.

### Dicionário

"Key" = "Chave"
