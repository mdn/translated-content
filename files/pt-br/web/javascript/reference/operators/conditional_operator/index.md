---
title: Operador Condicional Ternário
slug: Web/JavaScript/Reference/Operators/Conditional_operator
---

{{jsSidebar("Operators")}}

## Sumário

O **operador condicional (ternário)** é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução [`if`](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else).

## Sintaxe

```
condition ? expr1 : expr2
```

## Parâmetros

- `condition`
  - : Uma expressão que é avaliada como `true` ou `false`.
- `expr1`, `expr2`
  - : Expressões com valores de qualquer tipo.

## Descrição

Se `condition` é `true`, o operador retornará o valor de `expr1`; se não, ele retorna o valor de `exp2`. Por exemplo, para exibir uma mensagem diferente baseada no valor da variável `isMember`, você poderá utilizar o código (statement) seguinte:

```js
"The fee is " + (isMember ? "$2.00" : "$10.00");
```

Conforme o resultado da operação, você também poderá atribuir a variáveis:

```js
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
```

Também são possíveis múltiplas avaliaçãoes ternárias (nota: o operador condicional é associativo a direita):

```js
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Access denied"
    : secondCheck
    ? "Access denied"
    : "Access granted";

console.log(access); // logs "Access granted"
```

Você também pode usar avaliações ternárias no espaço livre de modo a fazer diferentes operações:

```js
var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);
```

Você também pode fazer mais do que uma única operação em cada caso, separando-os por vírgula:

```js
var stop = false,
  age = 23;

age > 18
  ? (alert("OK, you can go."), location.assign("continue.html"))
  : ((stop = true), alert("Sorry, you are much too young!"));
```

Você também pode fazer mais de uma operação durante a atribuição de um valor. Neste caso, **o último valor separado por vírgula dentro** dos parênteses **será o valor a ser atribuído**.

```js
var age = 16;

var url =
  age > 18
    ? (alert("OK, you can go."),
      // alert returns "undefined", but it will be ignored because
      // isn't the last comma-separated value of the parenthesis
      "continue.html") // the value to be assigned if age > 18
    : (alert("You are much too young!"),
      alert("Sorry :-("),
      // etc. etc.
      "stop.html"); // the value to be assigned if !(age > 18)

location.assign(url); // "stop.html"
```

## Especificações

| Especificações                                                           | Status             | Comentários                                       |
| ------------------------------------------------------------------------ | ------------------ | ------------------------------------------------- |
| ECMAScript 1st Edition.                                                  | Standard           | Definição inicial. Implementado em JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-11.12', 'The conditional operator')}}          | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-conditional-operator', 'Conditional Operator')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.operators.conditional")}}

## Veja também

- [Operador condicional if](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
