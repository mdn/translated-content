---
title: 'SyntaxError: flag de expressão regular inválida "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---

{{jsSidebar("Errors")}}

A exceção JavaScript "flag de expressão regular inválida" ocorre quando as flags de uma expressão regular contêm qualquer flag que não seja uma das flag: `g`, `i`, `m`, `s`, `u`, `y` ou `d`.

Também pode ser lançada se a expressão contiver mais do que uma instância de uma flag válida.

## Mensagem

```
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que ocorreu de errado?

A expressão regular contém flags inválidas, ou foram utilizadas flags válidas mais de uma vez na expressão.

As flags válidas (permitidas) são listadas em [Expressões regulares > Pesquisa avançada com flags](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags), e reproduzidas abaixo:

| Flag | Descrição                                                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | Pesquisa Global. Veja {{jsxref("RegExp/global", "global")}}                                                                           |
| `i`  | Pesquisa case-sensitive. Veja {{jsxref("RegExp/sticky", "ignoreCase")}}.                                                              |
| `m`  | Pesquisa em múltiplas linhas. Veja {{jsxref("RegExp/multiline", "multiline")}}.                                                       |
| `s`  | Permitir que `.` se igualem a novas linhas. Veja {{jsxref("RegExp/dotAll", "dotAll")}}.                                               |
| `u`  | Unicode; trata um padrão como uma sequência de pontos de código Unicode. Veja {{jsxref("RegExp/unicode", "unicode")}}.                |
| `y`  | Realiza uma pesquisa "sticky" que coincida a partir da posição atual na cadeia de destino. Veja {{jsxref("RegExp/sticky", "sticky")}} |
| `d`  | Índices. Geração de índices para a correspondência de substrato. Veja {{jsxref("RegExp/hasIndices", "hasIndices")}}                   |

## Exemplos

Em uma expressão regular literal, que consiste em um padrão fechado entre barras, as flags são definidas após a segunda barra.
As flags de expressão regular podem ser utilizadas separadamente ou em conjunto em qualquer ordem.
Esta sintaxe mostra como declarar as flags usando a expressão regular literal:

```js
const re = /pattern/flags;
```

Podem também ser definidos na função construtora do objecto {{jsxref("RegExp")}} (segundo parâmetro):

```js
const re = new RegExp("pattern", "flags");
```

Aqui está um exemplo que mostra a utilização apenas de flags corretas.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

Abaixo está um exemplo que mostra a utilização de algumas flags inválidas `b`, `a` e `r`:

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"

```

O código abaixo está incorrecto, porque `W`, `e` e `b` não são flags válidas.

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

Uma expressão contendo duas barras é interpretada como uma expressão regular literal.
Muito provavelmente a intenção era criar uma cadeia literal, usando citações simples ou duplas, como se mostra abaixo:

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## Veja também

- [Expressões Regulares](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions)
- [XRegEx flags](https://xregexp.com/flags/) – biblioteca de expressões regulares que fornece quatro novas bandeiras (`n`, `s`, `x`, `A`)
