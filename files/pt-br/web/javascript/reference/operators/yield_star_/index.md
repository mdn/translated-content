---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

A **expressão `yield*`** é usada para delegar para outro objeto {{jsxref("Statements/function*", "generator")}} ou iterable.

## Sintaxe

```
 yield* [[expressão]];
```

- `expressão`
  - : A expressão que retorna um objeto iterable.

## Descrição

A expressão `yield*` itera sobre a operação e yields cada valor retornado por ele.

O valor da expressão `yield*` sozinha é o valor retornado pelo iterator quando ele for fechado (i.e., quando `done` é `true`).

## Exemplos

### Delegando para outro generator

No código seguinte, valores "yeldados" por `g1()` são retornados por `next()` chamam apenas os que foram "yeldados" por `g2()`.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### Outros objetos Iterables

Além de objetos generator, `yield*` também podem `yield` outros tipos de objetos iterables, e.g. arrays, strings ou objetos de argumentos.

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### O valor da expressão `yield*` sozinha

`yield*` é uma expressão, não uma declaração, então ele espera um valor.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true},
// g4() returned {value: 'foo', done: true} nesse ponto

console.log(result); // "foo"
```

## Especificações

| Especificação                         | Situação             | Comentário         |
| ------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#', 'Yield')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#', 'Yield')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.yield_star")}}

## Notas específicas do Firefox

- A partir do Gecko 33, o tratamento da expressão yield foi atualizado para se conformar com a espeficação do ES2015 ([Erro do Firefox 981599](https://bugzil.la/981599)):

  - A restrição de linha finalizadora agora está implementada. Nenhuma linha finalizadora entre "yield" e "\*" é permitida. Código como o a seguir irá invocar uma exception {{jsxref("SyntaxError")}}:

    ```js
    function* foo() {
      yield
      *[];
    }
    ```

## Veja também

- [O protocolo Iterator](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
