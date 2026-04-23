---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

O método **`has()`** retorna um valor booleano indicando se um elemento com o valor especificado existe em um objecto `Set` ou não.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## Sintaxe

```
mySet.has(valor);
```

### Parâmetros

- `valor`
  - : O valor para testar a existência no objeto `Set`.

### Valor de retorno

Retorna `true` se um elemento com o valor especificado existe no objeto `Set`; `false` caso contrário.

> [!NOTE]
> Tecnicamente falando, `has()` usa o algorítimo [`sameValueZero`](/pt-BR/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) para determinar quando o elemento dado é encontrado.

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
