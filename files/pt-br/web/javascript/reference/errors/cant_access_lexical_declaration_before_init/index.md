---
title: "ReferenceError: can't access lexical declaration`X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---

{{jsSidebar("Errors")}}

## Mensagem

```
ReferenceError: Use before delaration (Edge)
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## Tipo de Erro

{{jsxref("ReferenceError")}}

## O que está errado

Uma variável léxica foi acessada antes de ser inicializada. Isso acontece dentro de qualquer declaração de bloco, quando as declarações `let` ou `const` são acessadas antes de serem definidas.

## Exemplos

### Errado

Neste caso, a variável "foo" é redeclarada usando `let`.

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = foo + 55;
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### Certo

Para mudar "foo" dentro do bloco if você precisa remover o `let` que causa a redeclaração.

```js example-good
function test() {
  let foo = 33;
  if (true) {
    foo = foo + 55;
  }
}
test();
```

## Veja também

- [Temporal Dead Zone e erros com let.](/pt-BR/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let)
