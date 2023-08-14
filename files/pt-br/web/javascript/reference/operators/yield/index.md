---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

A palavra-chave `yield` é usada para pausar e resumir uma generator function ({{jsxref("Statements/function*", "function*")}} or [generator function legada](/pt-BR/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)).

## Sintaxe

```
[rv] = yield [expressão];
```

- `expressão`
  - : Define o valor que retorna de uma generator function via [o protocolo iterator](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol). Se omitido, será retornado `undefined`.
- `rv`
  - : Retorna o valor opcional passado para o metódo `next()` do generator e resume sua execução.

## Descrição

A palavra-chave `yield` pausa a execução de uma generator function e o valor da expressão em frente a palavra-chave `yield` é retornado para a chamada do generator. Ele pode ser considerado uma versão da palavra-chave `return` para o generator.

A palavra-chave `yield` atualmente retorna um objeto do tipo `IteratorResult` com duas propriedades, `value` e `done`. A propriedade `value` é o resultado da avaliação da expressão `yield`, e `done` é `false`, indicando que a generator function não foi totalmente completada.

Uma vez pausado em uma expressão `yield`, a execução do código do generator permanece pausado até a próxima chamada do métod `next()`. Cada vez que o método `next()` do generator é chamado, o generator resume a execução e roda até atingir um dos seguintes estados:

- Um `yield`, que causa a pausa do generator novamente e retorna seu novo valor. Na próxima vez que `next()` for chamado, a execução resumirá com a declaração imediamente após `yield`.
- {{jsxref("Statements/throw", "throw")}} é usado para invocar uma exception à partir do generator. Isso irá parar completamente a execução do generator, e a execução resume para onde foi chamado o generator normalmente no caso que uma exception é invocada.
- O final de uma generator function é atingido; nesse caso, a execução do generator termina e um `IteratorResult` é retornado para onde o generator foi chamado no qual o `value` é {{jsxref("undefined")}} e `done` é `true`.
- Uma declaração {{jsxref("Statements/return", "return")}} é atingida. Nesse caso, a execução do generator termina e um `IteratorResult` é retornado para onde o generator foi chamado no qual o `value` é o valor especificado pela declaração `return` statement e `done` é `true`.

Se um valor opcional é passado para o método `next()` do generator, esse valor se torna o valor retornado pela operação `yield` atual do generator.

Entre o caminho de código do generator, os seus operadores `yield`, e a habilidade de especificar um novo valor inicial passando isso para o {{jsxref("Generator.prototype.next()")}}, generators oferecem um poder e controle enormes

## Exemplos

O código seguinte é a declaração de um exemplo de uma generator function.

```js
function* foo() {
  var index = 0;
  while (index <= 2) yield index++;
}
```

Uma vez que a generator function é definida, isso pode ser usada para construir um iterator como mostrado a seguir:

```js
var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## Especificações

| Especificação                         | Situação             | Comentário         |
| ------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#', 'Yield')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#', 'Yield')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.yield")}}

## Notas específicas do Firefox

- A partir do Gecko 29, uma generator function completada não invoca mais um {{jsxref("TypeError")}} "generator has already finished". Ao invés, isso retorna um objeto `IteratorResult` como `{ value: undefined, done: true }` ([Erro do Firefox 958951](https://bugzil.la/958951)).
- A partir do Gecko 33, a análise (parsing) de uma expressão `yield` foi atualizada para se conformar com a especificação do ES2015 ([Erro do Firefox 981599](https://bugzil.la/981599)):

  - A expressão após a palavra-chave `yield` é opcional e omitir isso não invoca mais um {{jsxref("SyntaxError")}}: `function* foo() { yield; }`

## Veja também

- [O protocolo Iterator](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
