---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---

{{JSRef}}

O **construtor `AsyncFunction`** cria um novo objeto {{jsxref("Statements/async_function", "async function")}}. Em JavaScript cada função assíncrona é atualmente um objeto do tipo `AsyncFunction`.

Note que`AsyncFunction` não é um objeto global. Ele poderia ser obtido analisando o seguinte código:

```js
Object.getPrototypeOf(async function () {}).constructor;
```

## Sintaxe

```
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### Parameters

- `arg1, arg2, ... argN`
  - : Nomes que vão ser usados pela função como argumentos formais. Cada um deve ser uma string que corresponde a um indentificador JavaScript válido ou uma lista das strings separadas com uma vírgula; por exemplo "`x`", "`oValor`", or "`a,b`".
- `functionBody`
  - : Uma string contendo as declarações JavaScript que compõem a definição da função.

## Descrição

Objetos {{jsxref("Statements/async_function", "async function")}} criados com o construtor `AsyncFunction` são tratados quando a função é criada. Isso é menos eficiente que declarar uma função async com a {{jsxref("Statements/async_function", "expression async function")}} e chama-la com seu código, porque essas funções são tratadas com o resto do código.

Todos os argumentos passado para a função são tratados como nomes dos identificadores dos parâmetros na função que vai ser criada, na ordem que eles são passados.

> [!NOTE]
> {{jsxref("Statements/async_function", "async functions")}} criadas com o construtor `AsyncFunction` não cria closures para seus contextos de criação; elas sempre criadas no escopo global. Quando rodar eles, eles só poderão acessar suas variáveis local e as globais, mas não as que estão no escopo que o construtor foi `AsyncFunction` chamado. Isso é diferente de usar {{jsxref("Global_Objects/eval", "eval")}} com código para uma expressão async function.

Invocar o construtor `AsyncFunction` como uma função (sem usar o operador `new`) tem o mesmo efeito de invocá-lo como um construtor.

## Propriedades

- **`AsyncFunction.length`**
  - : A propriedade tamanho do construtor da `AsyncFunction` cujo valor é 1.
- {{jsxref("AsyncFunction")}}
  - : Permite a adição de propriedades para todos os objetos async function.

## `AsyncFunction` prototype object

### Propriedades

<!-- TODO: page macro not supported: page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype', 'Propriedades') -->

## `AsyncFunction` instances

Instância `AsyncFunction` herdam métodos e propriedades do {{jsxref("AsyncFunction")}}. Com todos os contrutores, que podem mudar o prototype do objeto construtor para fazer mudanças em todas as instâncias do `AsyncFunction`.

## Exemplos

### Criando uma async function a partir do construtor de uma `AsyncFunction`

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

var a = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

a(10, 20).then((v) => {
  console.log(v); // imprime 30 após 4 seconds
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Statements/async_function", "async function function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Funções e escopo de função", "", 1)}}
