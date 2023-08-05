---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

A interface **`Crypto`** apresenta características de criptografia básica disponíveis no contexto atual. Isto permite acesso a um forte gerador criptográfico de números aleatórios e a criptografias primitivas.

Um objeto com essa interface está disponível no contexto web via propriedade {{domxref("Window.crypto")}} .

## Propriedades

_Esta interface implementa propriedades definidas em {{domxref("RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}
  - : Retorna um objeto {{domxref("SubtleCrypto")}} provendo acesso a criptografias primitivas comuns, como hashing, signing, encryption ou decryption.

## Métodos

_Esta interface implementa métodos definidos em {{domxref("RandomSource")}}._

- {{domxref("RandomSource.getRandomValues()")}}
  - : Preenche a {{ jsxref("TypedArray") }} com valores criptografados aleatórios.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Components.utils.importGlobalProperties](/pt-BR/docs/Components.utils.importGlobalProperties)

## Dicionário

"Key" = "Chave"
