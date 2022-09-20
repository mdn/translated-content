---
title: HTMLContentElement.select
slug: Web/API/HTMLContentElement/select
tags:
  - API
  - HTMLContentElement
  - HTMLContentElement.select
  - Select
translation_of: Web/API/HTMLContentElement/select
original_slug: Web/API/HTMLContentElement/Seletor
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

| Especificações                                                                   | Status                           | Commentário |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('Shadow DOM', '#the-content-element', 'content')}} | {{Spec2('Shadow DOM')}} |             |

## Compatibilidade com navegadores

{{Compat("api.HTMLContentElement.select")}}

## Veja também

- [HTMLContentElement](/pt-BR/docs/Web/API/HTMLContentElement)
