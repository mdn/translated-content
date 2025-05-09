---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

{{JSRef}}

O método **`set()`** adiciona um novo elemento com a `chave` e o `valor` especificados em um objeto `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
```

## Sintaxe

```
wm.set(chave, valor);
```

### Parâmetros

- chave
  - : Obrigatório. A chave do elemento a ser adicionado no objeto `WeakMap`.
- valor
  - : Obrigatório. O valor do elemento a ser adicionado no objeto `WeakMap`.

### Valor de retorno

O objeto `WeakMap`.

## Exemplos

### Utilizando o método `set`

```js
var wm = new WeakMap();
var obj = {};

// Adicionar novos elementos ao WeakMap
wm.set(obj, "foo").set(window, "bar"); // encadeável

// Atualizar um elemento no WeakMap
wm.set(obj, "baz");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Notas específicas ao Firefox

- Antes do Firefox 33, `WeakMap.prototype.set` retornava `undefined` e, portanto, não era encadeável. Isso foi resolvido ([Erro do Firefox 1031632](https://bugzil.la/1031632)). O comportamento também podia ser encontrado no Chrome/v8 ([issue](https://code.google.com/p/v8/issues/detail?id=3410)).

## Ver também

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
