---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

O método **`has()`** retorna um valor booleano indicando se um elemento com o valor especificado existe em um objecto `Set` ou não.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## Sintaxe

```
mySet.has(valor);
```

### Parâmetros

- `valor`
  - : O valor para testar a existência no objeto `Set`.

### Valor de retorno

Retorna `true` se um elemento com o valor especificado existe no objeto `Set`; `false` caso contrário.

> **Nota:**Tecnicamente falando, `has()` usa o algorítimo [`sameValueZero`](/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) para determinar quando o elemento dado é encontrado.

## Exemplos

### Usando o método `has`

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // retorna true
mySet.has("bar"); // retorna false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // retorna true
set1.has({ key1: 1 }); // retorna false porque obj1 e {'key': 1} fazem referência a objetos diferentes.
set1.add({ key1: 1 }); // agora set1 contém 2 registros
```

## Especificações

| Especificação                                                          | Status               | Comentário         |
| ---------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-set.prototype.has', 'Set.prototype.has')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Set.has")}}

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
