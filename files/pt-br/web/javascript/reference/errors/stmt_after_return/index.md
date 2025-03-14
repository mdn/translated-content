---
title: "Warning: unreachable code after return statement"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
---

{{jsSidebar("Errors")}}

## Mensagem

```
Warning: unreachable code after return statement (Firefox)
```

## Tipo de Erro

Warning

## O que deu errado?

Codigo inacessível depois da declaração de retorno pode ocorrer nas seguintes situações:

- Quando usado em uma expressão após a declaração de um {{jsxref("Statements/return", "return")}} , ou
- quando usado em uma expressão **return** sem ponto e vírgula porém incluindo uma expressão diretamente depois.

Quando existe uma expressão após uma declaração válida de `return`, um warning é dado para indicar que o código depois da declaração `return` é inacessível, significando que ele pode nunca ser executado.

Porque eu devo usar ponto-e-virgula após declarações `return`? No caso de declarações `return` sem ponto-e-vírgula, ele pode deixar obscuro se o desenvolvedor quis usar o return na proxima linha, ou parar a execução e retornar. O warning indica que há uma ambiguidade no modo que a declaração `return` foi escrita.

Warnings não serão mostrado para declarações return sem ponto-e-vírgula nas seguintes situações:

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## Exemplos

### Casos Inválidos

```js example-bad
function f() {
  var x = 3;
  x += 4;
  return x; // return exits the function immediately
  x -= 3; // so this line will never run; it is unreachable
}

function f() {
  return; // this is treated like `return;`
  3 + 4; // so the function returns, and this line is never reached
}
```

### Casos Válidos

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x; // OK: return after all other statements
}

function f() {
  return 3 + 4; // OK: semicolon-less return with expression on the same line
}
```

## Ver também

- {{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}
