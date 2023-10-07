---
title: URL.toJSON()
slug: Web/API/URL/toJSON
---

{{APIRef("URL API")}}

O metodo **`toJSON()`** da interface {{domxref("URL")}} retorna uma {{domxref("USVString")}} contendo a versão serializada de uma URL, apesar de que na prática ele tem o mesmo efeito que o {{domxref("URL.toString()")}}

{{AvailableInWorkers}}

## Sintaxe

```js
const href = url.toJSON();
```

### Valor de retorno

Uma {{domxref("USVString")}}.

## Exemplos

```js
const url = new URL(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/URL/toString",
);
url.toJSON(); // deve retornar a url como string
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- [Polyfill de `URL.prototype.toJSON` em `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
