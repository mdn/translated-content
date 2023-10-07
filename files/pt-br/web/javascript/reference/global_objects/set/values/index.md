---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

O método **`values()`** retorna um novo objeto `Iterator` que contem os valores para cada elemento dentro do objeto `Set` por ordem de inserção.

O método **`keys()`** é um alias desse método (por similaridade com os objetos {{jsxref("Map")}}); ele se comporta exatamente da mesma forma e retorna os **valores** dos elementos do `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

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

| Especificação                                                                | Status               | Comentário           |
| ---------------------------------------------------------------------------- | -------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.values', 'Set.prototype.values')}}  | {{Spec2('ES2015')}}  | Definições iniciais. |
| {{SpecName('ESDraft', '#sec-set.prototype.values', 'Set.prototype.values')}} | {{Spec2('ESDraft')}} |                      |

## Browsers compatíveis

{{Compat("javascript.builtins.Set.values")}}

## Veja também

- {{jsxref("Set.prototype.entries()")}}
