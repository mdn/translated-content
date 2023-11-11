---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

O método **`clear()`** remove todos os elementos de um objeto `Set`.

## Sintaxe

```
mySet.clear();
```

## Exemplos

### Usando o método `clear`

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size; // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size; // 0
mySet.has("bar"); // false
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
