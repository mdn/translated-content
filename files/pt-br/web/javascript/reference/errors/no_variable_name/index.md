---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que deu errado?

O nome de uma variável está faltando. Isto é provavelmente devido a um erro de sintaxe no seu código. Provavelmente uma vírgula está errada em algum lugar. Totalmente compreensível! Nomear as coisas é tão difícil.

## Exemplos

### Falta um nome de variável

```js example-bad
var = "foo";
```

É difícil chegar com bons nomes de variáveis. Nós todos estivemos lá.

```js example-good
var ohGodWhy = "foo";
```

### Palavras-chave reservadas não podem ser nomes de variáveis

Existem alguns nomes de variáveis que são palavras-chave resevadas. Você não pode usar isso. Desculpa :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Declarando múltiplas variáveis

Preste especial atenção às vírgulas ao declarar múltiplas variáveis. Existe um excesso de vírgula? Você acidentalmente adicionou vírgulas em vez de ponto e vírgula?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

A versão corrigida:

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("one");
var second = document.getElementById("two");
```

### Arrays

{{jsxref("Array")}} literais em JavaScript precisam de colchetes ao redor dos valores. Isso não funcionará:

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

Isso seria correto:

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## Veja também

- Bons nomes de variáveis
- [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var)
- Declarações de variáveis no Guia JavaScript
