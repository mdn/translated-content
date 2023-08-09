---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: missing formal parameter (Firefox)
```

## Tipo de error

{{jsxref("SyntaxError")}}

## O que deu errado?

"Parâmetro Formal" é uma maneira elegante de dizer "parâmetro de função". Faltam parâmetros válidos em sua função. Na declaração de uma função os parâmetros devem ser {{Glossary("Identifier", "identifiers")}}, em vez de um valor como números, strings ou objetos. Declarar funções e chamar funções são dois passos diferentes. Declarações exigem identificadores como parâmetros e é apenas ao chamar (invocar) a função que você fornece os valores que a função deve usar.

Em {{glossary("JavaScript")}}, identificadores podem obter apenas caracteres alfanuméricos (ou "$" e "\_"), e não podem começar com um número. Um identificador difere de uma **string** porque uma string é um dado, enquanto que um identificador é parte do código.

## Exemplos

Parâmetros de função devem ser identificadores ao se configurar uma função. Todas essas declarações de função abaixo falham, pois estão fornecendo valores para seus parâmetros:

```js example-bad
function quadrado(3) {
  return numero * numero;
};
// SyntaxError: missing formal parameter

function saudacao("Olá") {
  return saudacao;
};
// SyntaxError: missing formal parameter

function log({ obj: "valor"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

Você terá de usar identificadores nas declarações de função:

```js example-good
function quadrado(numero) {
  return numero * numero;
}

function saudar(saudacao) {
  return saudacao;
}

function log(arg) {
  console.log(arg);
}
```

You can then call these functions with the arguments you like:

```js
quadrado(2); // 4

saudar("Olá"); // "Olá"

log({ obj: "valor" }); // Object { obj: "valor" }
```

## Ver também

- Outros erros referentes a parâmetros formais:

  - [SyntaxError: Parâmetro formal mal formado](/pt-BR/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaração de parâmetro formal "x"](/pt-BR/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
