---
title: Declaração de função
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

A **declaração function** define uma função com os especificados parâmetros.

Você pode também definir funções usando o construtor {{jsxref("Function")}} e uma {{jsxref("Operators/function", "function expression")}}.

## Sintaxe

```
function name([param,[, param,[..., param]]]) {
   [statements]
}
```

- `name`
  - : O nome da função.
- `param`
  - : O nome de um argumento a ser passado para a função. Uma função pode ter atè 255 argumentos.
- `statements`
  - : As instruções que compõem o corpo da função.

## Descrição

Uma função criada com uma declaração function é um objeto `Function` e tem todas as propriedades, métodos e comportamentos dos objetos `Function`. Veja {{jsxref("Function")}} para informações detalhadas sobre as funções.

Uma função pode também ser criada usando uma expressão (veja {{jsxref("Operators/function", "function expression")}}).

Por padrão, funções retornam `undefined`. Para retornar qualquer outro valor, a função precisa ter uma instrução {{jsxref("Statements/return", "return")}} que especifica o valor para retorno.

### Criando funções condicionalmente

Funções podem ser condicionalmente declaradas, isso é, uma instrução de função pode ser aninhada dentro de uma instrução `if`. A maioria dos navegadores que não sejam Mozilla ir tratar essas declarações condicionais como uma incondicional e criará a função se a condição for true ou não, veja [esse artigo](http://kangax.github.io/nfe/#function-statements) para uma visão geral. Portanto, ela não pode ser usada para criação de expressões de função condicional.

### Declarações de funções hoisting

Declarações de funções em JavaScript são hoisted à definição da função. Você pode usar uma função antes de tê-la declarado:

```js
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
```

Note que {{jsxref("Operators/function", "function expressions")}} não são hoisted:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

## Exemplos

### Usando funções

O seguinte código declara uma função que retorna a quantidade total das vendas, quando dados os números de unidades vendidas dos produtos a, b e c.

```js
function calc_sales(units_a, units_b, units_c) {
  return units_a * 79 + units_b * 129 + units_c * 699;
}
```

## Especificações

| Specification                                                                | Status               | Comment                                            |
| ---------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-13', 'Function definition')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-13', 'Function definition')}}                        | {{Spec2('ES3')}}     |                                                    |
| {{SpecName('ES1', '#sec-13', 'Function definition')}}                        | {{Spec2('ES1')}}     | Definição inicial. Implementado em JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.statements.function")}}

## Veja também

- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions")}}
- {{jsxref("GeneratorFunction")}}
