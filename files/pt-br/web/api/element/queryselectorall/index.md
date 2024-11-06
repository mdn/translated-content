---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
---

{{APIRef("DOM")}}

## Sumário

Retorna uma [`NodeList`](/pt-BR/docs/DOM/NodeList) de todos os elementos descendentes do elemento que foi invocado que sejam compatíveis com o grupo de seletores CSS especificados.

## Sintaxe

```
elementList = baseElement.querySelectorAll(selectors);
```

Onde

- `elementList` é uma lista não-viva de objetos [element](/pt-BR/docs/DOM/element).
- `baseElement` é um objeto [elemento](/pt-BR/docs/DOM/element).
- `selectors` é um grupo de [seletores](/pt-BR/docs/Web/Guide/CSS/Getting_Started/Selectors) que serão procurados.

## Exemplos

Este exemplo retorna uma lista de todos os elementos `p` no corpo do HTML:

```js
var matches = document.body.querySelectorAll("p");
```

Este exemplo retorna uma lista de elementos `p` que estejam contidos em outro elemento, o qual é uma `div` que tem a classe 'highlighted':

```js
var el = document.querySelector("#test");
var matches = el.querySelectorAll("div.highlighted > p");
```

Este exemplo retorna uma lista de elementos `iframe` que contenham um atributo **data** 'src':

```js
var matches = el.querySelectorAll("iframe[data-src]");
```

## Notas

Joga uma excessão `SYNTAX_ERR` se o grupo especificado de seletores for inválido.

`querySelectorAll()` foi introduzida na WebApps API.

A _string_ passada como argumento para `querySelectorAll` deve seguir a sintaxe do CSS. veja {{domxref("document.querySelector")}} para um exemplo concreto.

Lembre-se que o valor retornado é uma NodeList, então não é recomendado o uso de recursões for...in, nem de nenhum método de _array_. Se realmente houver a necessidade de usar métodos de uma _array,_ então o NodeList deve ser convertido em uma _array_ antes de ser usado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`document.querySelectorAll`](/pt-BR/docs/DOM/Document.querySelectorAll)
- [`document.querySelector`](/pt-BR/docs/DOM/Document.querySelector)
- [Code snippets for `querySelector`](/pt-BR/docs/Code_snippets/QuerySelector)
