---
title: 'ReferenceError: Atribuição à variável não declarada "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
---

{{jsSidebar("Errors")}}

## Message

```
ReferenceError: Atribuição à variável não declarada "x"(Firefox)
ReferenceError: "x" não está definido (Chrome)
ReferenceError: Variável indefinida em strict mode (Edge)
```

## Tipo de erro

{{jsxref("ReferenceError")}} aviso em _[strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)_ somente.

## O que deu errado?

Um valor foi atribuído a uma variável não declarada. Em outras palavras, houve uma atribuição sem a palavra-chave var. Existem algumas diferenças entre as variáveis declaradas e não declaradas, o que pode levar a resultados inesperados e é por isso que o JavaScript apresenta um erro no modo estrito.

Três coisas a observar sobre as variáveis declaradas e não declaradas:

- Variáveis declaradas são limitadas no contexto de execução em que são declarados. Variáveis não declaradas são sempre globais.
- Variáveis declaradas são criados antes de qualquer código ser executado. Variáveis não declaradas não existem até que o código atribuido for executado.
- Variáveis declaradas são uma propriedade não-configurável de seu contexto de execução (função ou global). Variáveis não declaradas são configuráveis (por exemplo, pode ser excluído).

Para mais exemplos, veja a página de referência [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var).

Erros sobre atribuições de variáveis não declaradas ocorrem apenas em [código de modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode). Em código não-estrito, eles são silenciosamente ignorados.

## Exemplos

### Casos inválidos

neste caso, a variavel "bar" é uma variavel não declarada.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Casos válidos

Para fazer uma variável declarada "bar", você pode adicionar a palavra-chave [var](/pt-BR/docs/Web/JavaScript/Reference/Statements/var) na frente dele.

```js example-good
function foo() {
  "use strict";
  var bar = true;
}
foo();
```

## Veja também

- _[Strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)_
