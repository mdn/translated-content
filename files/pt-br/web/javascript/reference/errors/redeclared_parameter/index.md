---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## Tipo de Erro

{{jsxref("SyntaxError")}}

## O que deu errado?

O mesmo nome de variável ocorre como parâmetro da função e é então redeclarada atribuindo [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let) no corpo da função. Redeclarando a mesma variável dentro da mesma função ou no escopo do bloco usando `let` não é permitido em JavaScript.

## Exemplos

Neste caso, a variável "arg" redeclara o argumento.

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Se você quiser mudar o valor de "arg" no corpo da função, você pode fazer, mas você não precisa declarar novamente a mesma variável. Em outras palavras: você pode omitir a palavra chave `let`. Se você quiser criar uma nova variável, você precisa renomea-la, pois isso conflita com o parâmetro da função.

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## Notas de compatibilidade

- Antes do Firefox 49, isto foi lançado como um {{jsxref("TypeError")}} ([Erro do Firefox 1275240](https://bugzil.la/1275240)).

## Veja também

- [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var)
- [Declaring variables](/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations) in the [JavaScript Guide](/pt-BR/docs/Web/JavaScript/Guide)
