---
title: HTMLContentElement.select
slug: conflicting/Web/API/HTMLSlotElement_ded38e17cacb3809f7af4fec22adcc56
---

{{ APIRef("Web Components") }}

A propriedade **`HTMLContentElement.select`** reflete o atributo selecionado. É um {{domxref("DOMString")}} contendo uma lista de spaço-separado de seletores CSS que seleciona o conteúdo para inserir em lugar do elemento \<content>.

## Sintaxe

```
object.select = "CSSselector CSSselector ...";
```

## Exemplo

```js
// Select <h1> elements and elements with class="error"
myContentObject.select = "h1 .error";
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [HTMLContentElement](/pt-BR/docs/conflicting/Web/API/HTMLSlotElement)
