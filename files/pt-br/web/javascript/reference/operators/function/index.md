---
title: Expressão de função (function expression)
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

A palavra-chave **`function`** pode ser usada para definir uma função dentro de uma expressão.

## Sintaxe

```
function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

### Parâmetros

- `name`
  - : O nome da função. Pode ser omitido, neste caso a função será anônima. O nome só é local em relação ao corpo da função.
- `paramN`
  - : O nome de um argumento a ser passado para a função.
- `statements`
  - : As declarações que compreendem o corpo da função.

## Descrição

Uma expressão de função (_function expression_) é muito similar e tem quase a mesma sintaxe de uma declaração de função (veja [function statement](/pt-BR/docs/Web/JavaScript/Reference/Statements/function) para mais detalhes). A principal diferença entre uma expressão de função e a declaração de uma função é o nome da função (_function name_)_,_ o qual pode ser omitido em expressões de funções para criar funções anônimas. Veja ainda o capítulo sobre [funções](/pt-BR/docs/Web/JavaScript/Reference/Functions) para maiores informações.

## Exemplos

O exemplo a seguir define uma função sem nome e a atribui a x. A função retorna o quadrado de seu argumento:

```js
var x = function (y) {
  return y * y;
};
```

### Expressão de função nomeada

Se você quer se referir à função atual dentro do corpo da função, você terá que criar uma expressão de função nomeada. Este nome será local apenas para o corpo (escopo) da função. Isto ainda evita o uso da propriedade não-padronizada [`arguments.callee`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/callee).

```js
var math = {
  factorial: function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};
```

## Especificações

| Especificação                                                                | Status               | Comentários                                        |
| ---------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-13', 'Function definition')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-13', 'Function definition')}}                        | {{Spec2('ES3')}}     | Initial definition. Implemented in JavaScript 1.5. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.function")}}

## Veja também

- {{jsxref("Functions_and_function_scope", "Funções e Escopos de Funções")}}
- {{jsxref("Função")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}VersãoCompatívelDesconhecidaVersãoCompatívelDesconhecida
