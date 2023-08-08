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

| Especificações                                                             | Status               | Comentário          |
| -------------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-set.prototype.clear', 'Set.prototype.clear')}}     | {{Spec2('ES6')}}     | Definições iniciais |
| {{SpecName('ESDraft', '#sec-set.prototype.clear', 'Set.prototype.clear')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Set.clear")}}

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
