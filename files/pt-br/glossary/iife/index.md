---
title: IIFE
slug: Glossary/IIFE
---

**IIFE** (Immediately Invoked Function Expression) é uma função em {{glossary("JavaScript")}} que é executada assim que definida.

É um {{glossary("Design Pattern")}} também conhecido como {{glossary("Self-Executing Anonymous Function")}} e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

A segunda parte corresponde à criação da expressão `()`, por meio da qual o interpretador JavaScript avaliará e executará a função.

## Exemplos

A função se torna uma expressão que é imediatamente executada. A variável definida dentro da expressão não pode ser acessada fora de seu escopo.

```js
(function () {
  var nome = "Felipe";
})();
// A variável nome não é acessível fora do escopo da expressão
nome; // gerará o erro "Uncaught ReferenceError: nome is not defined"
```

Atribuir uma IIFE a uma variável não armazenará a função em si, mas o **resultado da função.**

```js
var result = (function () {
  var nome = "Felipe";
  return nome;
})();
// Imediatamente gera a saída:
result; // "Felipe"
```

## Aprenda Mais

### Aprenda mais sobre IFFE

- [Ben Alman's blog post defining IIFEs](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- [Quick example](/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (at the end of the "Functions" section, right before "Custom objects")

### Conhecimentos Gerais

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) on Wikipedia
