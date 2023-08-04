---
title: Window.crypto
slug: Web/API/crypto_property
---

{{APIRef}}

{{domxref("Window.crypto")}} propriedade somente de leitura, devolve um objeto do tipo {{domxref("Crypto")}} associado ao objeto global. Este objeto permite que páginas da web utilizem recursos de criptografia.

## Sintaxe

```
var cryptoObj = window.crypto || window.msCrypto; // for IE 11
```

## Exemplo

#### Usando a propriedade {{domxref("Window.crypto")}} para acessar o método getRandomValues()

### JavaScript

```js
genRandomNumbers = function getRandomNumbers() {
  var array = new Uint32Array(10);
  window.crypto.getRandomValues(array);

  var randText = document.getElementById("myRandText");
  randText.innerHTML = "The random numbers are: ";
  for (var i = 0; i < array.length; i++) {
    randText.innerHTML += array[i] + " ";
  }
};
```

### HTML

```html
<p id="myRandText">The random numbers are:</p>
<button type="button" onClick="genRandomNumbers()">
  Generate 10 random numbers
</button>
```

### Resultado

{{ EmbedLiveSample('Example') }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O objeto global {{domxref("Window")}}
