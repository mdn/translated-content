---
title: CryptoKey
slug: Web/API/CryptoKey
---

{{APIRef("Web Crypto API")}}

A interface **`CryptoKey`** representa uma {{glossary("key")}} criptografada derivada de uma key de algoritmo definido.

Um objeto **`CryptoKey`** pode ser obtido utilizando {{domxref("SubtleCrypto.generateKey()")}}, {{domxref("SubtleCrypto.deriveKey()")}} ou {{domxref("SubtleCrypto.importKey()")}}

## Propriedades

_Esta interface não herda nehunha propriedade._

- {{domxref("CryptoKey.type")}}
  - : Retorna um valor enumerado representando o tipo da key, uma key secreta (para algoritmos simétricos), uma key pública ou privada (para algoritmos assimétricos).
- {{domxref("CryptoKey.extractable")}}
  - : Retorna um {{jsxref("Boolean")}} indicando se a informação bruta pode ser exportada para a aplicação ou não.
- {{domxref("CryptoKey.algorithm")}}
  - : Retorna um objeto opaco representando uma cifra em particular que deve ser utilizada com a key.
- {{domxref("CryptoKey.usages")}}
  - : Retorna uma matriz de valores enumerados indicando onde a key pode ser utilizada.

## Métodos

_Esta interface não herda, nem implementa nenhum método._

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Crypto")}} e {{domxref("Crypto.subtle")}}.

### Dicionário

"Key" = "Chave"
