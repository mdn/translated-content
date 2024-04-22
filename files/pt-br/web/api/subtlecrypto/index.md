---
title: SubtleCrypto
slug: Web/API/SubtleCrypto
---

{{APIRef("Web Crypto API")}}

A interface **`SubtleCrypto`** representa um conjunto de criptografias primitivas. E está disponível via propriedades {{domxref("Crypto.subtle")}} disponíveis em uma janela de contexto (via {{domxref("Window.crypto")}}).

> **Aviso:** Por especificação: "Desenvolvedores fazendo uso da interface SubtleCrypto devem estar cientes das preocupações associadas com o design e a implementação de vários algoritmos providos. Os algoritmos brutos são providos em ordem para permitir aos desenvolvedores uma felixibilidade máxima na implementação de uma variedade de protocolos e aplicações, cada um deve representar a composição e os parâmetros de segurança em uma maneira única que necessita do uso de algoritmos brutos."

## Propriedades

_Esta interface não herda e nem implementa nenhuma propriedade._

## Métodos

Esta interface não herda nenhum método

- {{domxref("SubtleCrypto.encrypt()")}}
  - : Retorna uma {{jsxref("Promise")}} da informação criptografada correspondente com o texto, algoritmo e chave key dados como parâmetros.
- {{domxref("SubtleCrypto.decrypt()")}}
  - : Retorna uma {{jsxref("Promise")}} da informação correspondente ao texto encriptografado, algoritmo e key dados como parâmetros.
- {{domxref("SubtleCrypto.sign()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma assinatura correspondente ao texto, algoritmo e key dados como parâmetros.
- {{domxref("SubtleCrypto.verify()")}}
  - : Retorna uma {{jsxref("Promise")}} de um valor {{jsxref("Boolean")}} indicando se a assinatura dada como parâmetro combina com o texto, algoritmo e key também dados como parâmetros.
- {{domxref("SubtleCrypto.digest()")}}
  - : Retorna uma {{jsxref("Promise")}} de um resumo gerado a partir do algoritmo e texto dados como parâmetros.
- {{domxref("SubtleCrypto.generateKey()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma recentemente gerada {{domxref("CryptoKey")}}, para algoritmos simétricos, ou uma {{domxref("CryptoKeyPair")}}, contendo duas novas keys simétricas, para algoritmos assimétricos, que combina com o algoritmo, os usos e a extrabilidade dados como parâmetros.
- {{domxref("SubtleCrypto.deriveKey()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma recentemente gerada {{domxref("CryptoKey")}} derivada de uma master key e um algoritmo específico dados como parâmetros.
- {{domxref("SubtleCrypto.deriveBits()")}}
  - : Retorna uma {{jsxref("Promise")}} de um buffer recentemente gerado de bits pseudo-randômicos derivados de uma master key e um algoritmo específico dados como parâmetros.
- {{domxref("SubtleCrypto.importKey()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma {{domxref("CryptoKey")}} correspondente ao formato, o algoritmo, a informação da key bruta, o uso e a extrabilidade dados como parâmetros.
- {{domxref("SubtleCrypto.exportKey()")}}
  - : Retorna uma {{jsxref("Promise")}} deu uma buffer contendo a key no formato requisitado.
- {{domxref("SubtleCrypto.wrapKey()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma key envolvida simetricamente para uso (transferência, armazenamento) em ambientes não seguros. O buffer envolvido retornado será no formato dado nos parâmetros, e contém a key envolvida com a key envolvendo e o algoritmo dado.
- {{domxref("SubtleCrypto.unwrapKey()")}}
  - : Retorna uma {{jsxref("Promise")}} de uma {{domxref("CryptoKey")}} correspondente à key envolvida dada como parâmetro.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Crypto")}} e {{domxref("Crypto.subtle")}}.
