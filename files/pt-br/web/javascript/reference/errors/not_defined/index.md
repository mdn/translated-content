---
title: 'ReferenceError: "x" não está definido'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

## Mensagem

```
ReferenceError: "x" is not defined
```

## Tipo de erro

{{jsxref("ReferenceError")}}

## O que deu errado?

Há uma variavel inexistente referenciada em algum lugar. Essa variável precisa ser declarada ou você precisa ter certeza que ela está disponível no seu atual script ou {{Glossary("escopo")}}.

> **Nota:** Quando carregar uma biblioteca (como o JQuery) tenha certeza que ela está carregada antes que você acesse as variáveis dela, como "$". Coloque na tag {{HTMLElement("script")}} para carregar a biblioteca antes do seu código usá-lo.

## Exemplos

### Variável não declarada

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

A variável "foo" não está definida em lugar nenhum. Ela precisa ser uma string e assim o método {{jsxref("String.prototype.substring()")}} irá funcionar.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### Escopo Errado

Uma variável precisa estar disponível no atual contexto de execução. Variáveis definidas dentro de uma [function](/pt-BR/docs/Web/JavaScript/Reference/Functions) não podem ser acessadas de outros lugares fora da função, porque a variável é definida apenas no escopo da função

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Entretanto, uma função pode acessar todas as variáveis e funções definidas dentro do escopo no qual elas estão definidas. Em outras palavras, uma função definida no escopo global pode acessar todas as variáveis no escopo global.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## Veja também

- {{Glossary("Scope")}}
- [Declarando variáveis no JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
- [Escopo de função no JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)
