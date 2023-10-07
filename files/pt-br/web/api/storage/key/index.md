---
title: Storage.key()
slug: Web/API/Storage/key
---

{{APIRef("Web Storage API")}}

O método **`key()`** da interface {{domxref("Storage")}}, quando passado um número n, retorna o nome da n-ésima chave no dado objeto `Storage`. A ordem das chaves é definida pelo user-agent, então não deve-se confiar nela.

## Syntax

```
var aKeyName = storage.key(index);
```

### Parâmetros

- `index`
  - : Um inteiro representando o número da chave que deseja obter. Esse é um índice que começa em zero.

### Retorno

Uma {{domxref("DOMString")}} contendo o nome da chave. Se o index não existir, retornará `null`.

## Exemplos

A função a seguir itera sobre as chaves do armazenamento local:

```js
function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

A função a seguir itera sobre as chaves do armazenamento local e obtém o valor de cada chave:

```js
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

> **Nota:** Pra ver um exemplo real, consulte nossa [Demonstração de armazenamento na Web](https://mdn.github.io/dom-examples/web-storage/).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
