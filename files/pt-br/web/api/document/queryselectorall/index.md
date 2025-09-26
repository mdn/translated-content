---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
---

{{ ApiRef("DOM") }}

## Introdução

Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma {{ domxref("NodeList") }}.

## Sintaxe

```
elementList = document.querySelectorAll(selectors);
```

onde

- `elementList` é uma {{ domxref("NodeList") }} não-viva (alterações no DOM não refletem na lista) de objetos {{ domxref("Element") }}.
- `selectors` é uma _string_ contendo um ou mais seletores CSS separados por vírgulas.

A NodeList retornada irá conter todos os elementos do documento que coincidam com os seletores especificados. Se a string `selectors` conter um CSS {{ cssxref("PseudoElements") }}, o retorno será uma NodeList vazia.

## Exemplo

Esse exemplo retorna uma lista de todos os elementos `div` presentes no `document` que contenham as classes "`note`" ou "`alert`":

```js
var matches = document.querySelectorAll("div.note, div.alert");
```

## Notas

Retorna uma {{ jsxref("NodeList") }} não-viva (alterações no DOM não refletem na lista) de todos os elementos que coincidam com os seletores informados.

Lança uma exceção `SYNTAX_ERR` se o grupo especificado de seletores for inválido.

`querySelectorAll()` foi introduzida na WebApps API.

Navegadores baseados em _WebKit_ têm um _bug_: quando a string `seletores` contém um [pseudo-elemento CSS](/pt-BR/docs/Web/CSS/Pseudo-elements), a {{ jsxref("NodeList") }} retornada não esta vazia, neste caso ela contém o elemento {{ HTMLElement("html") }}.

## Compatibilidade com navegadores

{{Compat}}

## Especificação

- [API Selectors](https://www.w3.org/TR/selectors-api/)

## Veja também

- {{ domxref("Element.querySelectorAll") }}
- {{ domxref("Document.querySelector") }}
- {{ domxref("Element.querySelector") }}
- [`Exemplos de código com querySelector`](/pt-BR/docs/Code_snippets/QuerySelector)
