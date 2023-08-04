---
title: "SyntaxError: uma declaração na cabeça de um laço for-of não pode ter um inicializador"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---

{{jsSidebar("Errors")}}

A exceção JavaScript "a declaration in the head of a for-of loop can't have an initializer" ocorre quando a cabeça de um [for...of](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) loop contém uma expressão inicializadora tal como `for (const i = 0 of iteravel)`. Isto não é permitido no laço `for-of`.

## Mensagem

```
SyntaxError: for-of loop variable declaration may not have an initializer. (V8-based)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-of loop header. (Safari)
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que ocorreu errado?

The head of a [for...of](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) loop contains an initializer expression. That is, a variable is declared and assigned a value `for (const i = 0 of iterable)`. This is not allowed in for-of loops. You might want a [`for`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for) loop that does allow an initializer.

A cabeça de um laço [for...of](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) contém uma expressão inicializadora. Ou seja, uma variável é declarada e atribuída um valor `for (const i = 0 in iteravel)`. Isto não é permitido no laço for-of. Vocẽ pode querer utilizar um laço [`for`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for) que permita um inicializador.

## Exemplos

### Laços for-of inválidos

```js example-bad
const iteravel = [10, 20, 30];

for (const valor = 50 of iteravel) {
  console.log(valor);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Laço for-of válido

É necessário remover o inicializador (`valor = 50`) na cabeça do laço `for-of`. Talvez pretendesse fazer de 50 um valor de offset, nesse caso poderia adicioná-lo ao corpo do laço, por exemplo.

```js example-good
const iteravel = [10, 20, 30];

for (let valor of iteravel) {
  valor += 50;
  console.log(valor);
}
// 60
// 70
// 80
```

## Veja também

- [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) – disallows an initializer in strict mode as well ([SyntaxError: for-in loop head declarations may not have initializers](/pt-BR/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for) – allows to define an initializer when iterating.
