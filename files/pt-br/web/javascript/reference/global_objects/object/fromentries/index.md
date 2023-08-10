---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

O método **`Object.fromEntries()`** transforma uma lista de pares chave-valor em um objeto.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Sintaxe

```
Object.fromEntries(iterable);
```

### Parâmetros

- `iterable`
  - : Um iterável como {{jsxref("Array")}} ou {{jsxref("Map")}} ou qualquer outro objeto que implemente [o protocolo iterável](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

### Valor de retorno

Um novo objeto com suas propriedades definidas pelas entradas fornecidadas pelo iterável.

## Descrição

O método `Object.fromEntries()` recebe uma lista de pares chave-valor e retorna um novo objeto cujas propriedades foram definidas pelas entradas da lista. O parâmetro _iterable_ deve ser um objeto que implemente o método `@@iterator`, que retorne um objeto iterador que produza um objeto _array-like_ de dois elementos, onde o primeiro será a chave da propriedade e o segundo será o valor associado à chave.

`Object.fromEntries()` faz o inverso de {{jsxref("Object.entries()")}}.

## Exemplos

### Convertendo um `Map` em um `Object`

Com o método `Object.fromEntries`, é possível fazer a conveeção de um {{jsxref("Map")}} em um {{jsxref("Object")}}:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Convertendo um `Array` em um `Object`

Com o método `Object.fromEntries`, é possível converter um {{jsxref("Array")}} em um {{jsxref("Object")}}:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Transformações de objetos

Com o método `Object.fromEntries`, seu inverso {{jsxref("Object.entries()")}}, e os [métodos para manipulação de arrays](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2), é possível fazer transformações em objetos como por exemplo:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Especificações

| Especificação                                                            | Status               | Comentário                             |
| ------------------------------------------------------------------------ | -------------------- | -------------------------------------- |
| {{SpecName('ESDraft', '#sec-object.fromentries', 'Object.fromEntries')}} | {{Spec2('ESDraft')}} | Initial definition in ECMAScript 2019. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.fromEntries")}}

## Veja Também

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
