---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

O método **`delete()`** remover o elemento especificado ou setado a partir de um objeto instanciado do `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
// Expected output: false
```

## Sintaxe

```
wm.delete(key);
```

### Parâmetros

- chave(key)
  - : Requerido. A chave(`key`) do elemento a ser removido do objeto instanciado do `WeakMap`.

### Valores retornados

`true` se o emento do objeto do `WeakMap` tenha sido removido com sucesso. `false` se a chave(`key`) não for encontrada no `WeakMap` ou se a chave(`key`) não for um objeto.

## Exemplos

### Usando o método `delete`

```js
var wm = new WeakMap();
wm.set(window, "foo");

console.log(wm.delete(window)); // Retorna true. Removido com sucesso.

wm.has(window); // Retorna false. O objeto window não é mais pertecente ao WeakMap.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("WeakMap")}}
