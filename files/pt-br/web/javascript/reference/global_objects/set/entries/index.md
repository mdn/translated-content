---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

O método **`entries()`** retorna um novo objeto Iterador (`Iterator`) que contém **um array de \[valor, valor]** para cada elemento de um objeto `Set`em ordem de inserção. Os objetos `Set` não possuem `chaves (key)` como objetos do tipo `Map`. Entretanto, para manter a API similar a objetos `Map`, cada entrada (_entry_) tem o mesmo valor para sua chave (`key`) e valor (`value`), então uma matriz `array [valor, valor]` é retornado.

## Sintaxe

```
mySet.entries()
```

## Exemplos

### Usando `entries()`

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Especificações

| Especificações                                                                 | Status               | Comentário        |
| ------------------------------------------------------------------------------ | -------------------- | ----------------- |
| {{SpecName('ES6', '#sec-set.prototype.entries', 'Set.prototype.entries')}}     | {{Spec2('ES6')}}     | Definição inicial |
| {{SpecName('ESDraft', '#sec-set.prototype.entries', 'Set.prototype.entries')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Set.entries")}}

## Veja também

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
