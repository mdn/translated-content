---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
---

{{JSRef}}

O símbolo conhecido **`Symbol.iterator`** especifíca o iterador padrão para um objeto. Usado por [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of).

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Descrição

Sempre que um objeto precisa ser iterado (como um começo de um `for..of` loop), o método `@@iterator` é chamado sem argumentos, e o **iterador** retornado é usado para obter os valores para serem iterados.

Alguns tipos built-in tem um comportamento padrão de iteração, enquanto outros tipos (assim como {{jsxref("Object")}}) não tem. O tipo built-in com um método `@@iterator` são:

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

Veja também [Iteration protocols](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols) para mais informação.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Iteráveis definidos pelo usuário

Podemos fazer nosso próprio iterável dessa forma:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

Ou iteráveis podem ser definidos diretamente dentro de uma classe ou um objeto usando [computed property](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```js
class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

[...new Foo] // [ 1, 2, 3 ]
[...someObj] // [ 'a', 'b' ]
```

### Iteráveis não bem formados

Se um método `@@iterator` não retornar um objeto iterador, então é um iterável não bem formado. Usando dessa forma é resultará em uma excessão de tempo ou comportamentos com erros:

```js
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Especificações

| Especificação                                                      |
| ------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-symbol.iterator', 'Symbol.iterator')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.iterator")}}

## Veja também

- [Iteration protocols](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
