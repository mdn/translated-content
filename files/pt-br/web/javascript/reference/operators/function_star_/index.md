---
title: Expressão function*
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}

A palavra-chave **`function*`** pode ser usada para definir uma função generator dentro de uma expressão.

## Sintaxe

```
function* [nome]([param1[, param2[, ..., paramN]]]) {
    declarações
}
```

- `nome`
  - : O nome da função. Pode ser omitido, no caso da função ser anônima. O nome é local apenas para o corpo da função.
- `paramN`
  - : O nome de um argumento para ser passado para a função. Uma função pode ter até 255 argumentos.
- `declarações`
  - : As declarações que compõem o corpo da função.

## Descrição

Uma expressão `function*` é muito similar e tem quase a mesma sintaxe que a {{jsxref('Statements/function*', 'declaração function*')}}. A principal diferença entre uma expressão `function*` e a declaração `function*` é o _nome da função_, que pode ser omitido em expressões `function*` para criar funções _anônimas_. Veja também o capítulo sobre [funções](/pt-BR/docs/Web/JavaScript/Reference/Functions) para mais informações.

## Exemplos

O exemplo a seguir define uma função generator e atribui à variável `x`. A função faz um yield do quadrado do seu argumento:

```js
var x = function* (y) {
  yield y * y;
};
```

## Especificações

| Especificação                             | Situação             | Comentário         |
| ----------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#', 'function*')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#', 'function*')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.generator_function")}}

## Veja também

- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
