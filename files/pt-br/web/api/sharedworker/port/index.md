---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
---

{{APIRef("Web Workers API")}}

A propriedade **`port`** do {{domxref ("SharedWorker")}} retorna um objeto {{domxref ("MessagePort")}} usado para comunicar e controlar o shared worker.

## Sintaxe

```
myWorker.port;
```

### Valor

Um objeto {{domxref("MessagePort")}}.

## Exemplo

O snippet de código a seguir mostra a criação de um objeto SharedWorker usando o construtor {{domxref ("SharedWorker.SharedWorker", "SharedWorker ()")}} . Vários scripts podem acessar o worker através de um objeto do tipo {{domxref ("MessagePort")}} , usando a propriedade SharedWorker.port — A porta é iniciada usando o método `start()` .

```js
var myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

Veja um exemplo completo [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/).)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
