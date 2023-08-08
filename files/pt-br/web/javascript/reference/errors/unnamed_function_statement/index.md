---
title: "Erro de sintaxe: declaração de função requer um nome"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---

{{jsSidebar("Errors")}}

## Mensagem

```
Errodesintaxe: Identificador Esperado(Edge)
Errodesintaxe: declaração de função requer um nome [Firefox]
Errodesintaxe: Token inesperado ( [Chrome]
```

## Tipo de erro

{{jsxref("Errodesintaxe")}}

## O que estava errado?

Existe uma declaração no código que requer um nome. Você precisa checar como as funções são definidas e se você precisa providenciar um nome, se a função em questão precisa ser uma expressão de função, um {{Glossary("IIFE")}} ou se o código da função está colocado corretamente neste contexto.

## Exemplos

### Statements vs expressions

Uma _declaração de função_ (ou _declaração de função_) requer um nome, isso não vai funcionar:

```js example-bad
function () {
  return 'Olha mundo';
}
// SyntaxError: function statement requires a name
```

Você pode usar uma expressão de função ao invés de uma atribuição.

```js example-good
var saudar = function () {
  return "Ola mundo";
};
```

Ou, sua função pode ser pretendida a ser uma [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression), qual é uma função que será em breve definida. Você vai precisar de um pouco mais de colchetes neste caso:

```js example-good
(function () {})();
```

### Funçoes etiquetadas

Se usar [labels](/pt-BR/docs/Web/JavaScript/Reference/Statements/label), precisará providenciar um nome de função depois da palavra `function` . Isto não funciona:

```js example-bad
function Saudacao() {
  alemao: function () {
    return "Moin";
  }
}
// SyntaxError: a função declaração requer um nome
```

Isso funciona ,veja o exemplo:

```js example-good
function Saudacao() {
  alemao: function g() {
    return "Moin";
  }
}
```

### Métodos de Objetos

Se pretende criar um metodo para um objeto, voce precisa-rá criar um objeto (hehehe). A seguir uma sintaxe sem nome depois de `function` é válida.

```js example-good
var saudacao = {
  alemao: function () {
    return "Moin";
  },
};
```

### Callback Sintaxe

Alem disso,cheque sua sintaxe usando callbacks. Colchetes e virgulas ficam facilmente atrapalhar e dificultar.

```js example-bad
promessa.then(
  function() {
    console.log("sucesso");
  });
  function() {
    console.log("erro");
}
// SyntaxError: function statement requires a name
```

O correto seria:

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);//sempre que abrir feche();
```

## Veja também

- [Guia de funções em JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [Funções de Declaração](/pt-BR/docs/Web/JavaScript/Reference/Statements/function)
- [Funções de Expressão](/pt-BR/docs/Web/JavaScript/Reference/Operators/function)
- [Funções imediatas (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [Etiqueta](/pt-BR/docs/Web/JavaScript/Reference/Statements/label)
