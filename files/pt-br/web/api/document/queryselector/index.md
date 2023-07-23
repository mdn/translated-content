---
title: Document.querySelector()
slug: Web/API/Document/querySelector
---

{{ ApiRef("DOM") }}

## Sumário

Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

## Sintaxe

```
element = document.querySelector(selectors);
```

Onde:

- `element` é um objeto {{ jsxref("Element")}}.
- `selectors` é uma string que contém um ou mais seletores CSS separados por vírgulas.

## Exemplo

Neste exemplo, o primeiro elemento no documento com a classe "`myclass`" é retornado:

```js
var el = document.querySelector(".myclass");
```

## Notas

Retorna `null` se nenhum resultado for encontrado; caso contrário, retorna o primeiro elemento correspondente.

Se o seletor utilizado for um `ID` e este `ID` foi erroneamente utilizado várias vezes no documento, ele retorna somente o primeiro elemento correspondente.

Gera uma exceção `SYNTAX_ERR` se o grupo de seletores utilizado for inválido.

`querySelector()` foi introduzido com a API de seletores.

## Compatibilidade dos navegadores

{{Compat("api.Document.querySelector")}}

## Especificação

- [Selectors API](https://www.w3.org/TR/selectors-api/)

## Veja também

- {{domxref("document.querySelectorAll()")}}
- {{domxref("element.querySelector()")}}
- {{domxref("element.querySelectorAll()")}}
- [Code snippets for querySelector](/pt-BR/docs/Code_snippets/QuerySelector)
