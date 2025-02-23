---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

O método **`values()`** retorna um novo objeto `Iterator` que contem os valores para cada elemento dentro do objeto `Set` por ordem de inserção.

O método **`keys()`** é um alias desse método (por similaridade com os objetos {{jsxref("Map")}}); ele se comporta exatamente da mesma forma e retorna os **valores** dos elementos do `Set`.

{{InteractiveExample("JavaScript Demo: Set.prototype.values")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.values();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

## Sintaxe

```
mySet.values();
```

### Valor retornado

Um novo objeto **`Iterator`** condendo os valores de cada elemento contido no `Set`, por ordem de inserção.

## Exemplos

### Usando `values()`

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Especificações

{{Specifications}}

## Browsers compatíveis

{{Compat}}

## Veja também

- {{jsxref("Set.prototype.entries()")}}
