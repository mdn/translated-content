---
title: RandomSource.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

O método **`RandomSource.getRandomValues()`** permite que você obtenha valores criptográficos randômicos. O array passado como parametro é preenchido com números randômicos (randômicos no sentido criptográfico).

Para garantir performance suficiente, as implementações não estão usando um gerador de número randômico de verdade, mas estão usando um gerador de número pseudo-randômico alimentado com um valor com {{Glossary("entropia")}} suficiente. Os PRNG (pseudo-random number generator - gerador de número pseudo-randômico) usados diferem de uma implementação para a outra, mas são adequadas para usos criptográficos. As implementações precisam ter um valor de alimentação com entropia suficiente, como uma fonte de entropia a nível de sistema.

## Sintaxe

```
cryptoObj.getRandomValues(typedArray);
```

### Parâmetros

- _typedArray_
  - : É uma {{jsxref("TypedArray")}} de números inteiros, que pode ser {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, ou {{jsxref("Uint32Array")}}. Todos os elementos no array serão sobrescristos com números randômicos.

### Exceções

- Um `QuotaExceededError` {{domxref("DOMException")}} é enviado se o tamanho da requisição for maior que 65536 bytes.

## Exemplo

```js
/* assumindo que window.crypto.getRandomValues está disponível */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Seus números da sorte são:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("Window.crypto") }} to get a {{domxref("Crypto")}} object.
- {{jsxref("Math.random")}}, a non-cryptographic source of random numbers.
