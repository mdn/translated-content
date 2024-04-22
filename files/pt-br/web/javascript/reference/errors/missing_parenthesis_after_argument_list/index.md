---
title: Erro de sintaxe falta ) depois da lista de argumentos
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---

{{jsSidebar("Errors")}}

## Mensagem

```
Erro de sintaxe: Falta ) depois da lista de argumento
```

## Tipo de Erro

{{jsxref("Erro de sintaxe")}}.

## O que houve de errado?

Ocorreu um erro quando a função foi chamada. Pode ter sido um erro de escrita, falta de operador, ou uma string fora das aspas, por exemplo.

## Exemplos

Pela falta do operador "+" para fazer a concatenação da string, o JavaScript esperou um argumento para a função log ser "PI: ". Nesse caso, deveria ser finalizado com parênteses de fechamento ')'.

```js example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

Você pode corrigir a chamada do log adicionand o operador "+":

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

## Veja também

- [Funções](/pt-BR/docs/Web/JavaScript/Guide/Functions)
