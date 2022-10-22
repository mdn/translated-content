---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
translation_of: Web/API/HTMLElement/contentEditable
---
{{APIRef("HTML DOM")}}

A propriedade **`HTMLElement.contentEditable`** é usada para indicar se o elemento é editável ou não. Esse atributo enumerado pode ter os seguintes valores:

- `"true"` Indica que o elemento é editável;
- `"false"` Indica que o elemento não pode ser editável;
- `"inherit"` Indica que o elemento herda o status editável de seu pai.

Você pode usar a propriedade {{domxref( "HTMLElement.isContentEditable")}} para testar o valor calculado {{domxref ("Boolean")}} desta propriedade.

## Sintaxe

```
editable = element.contentEditable element.contentEditable= "true"
```

## Especificação

| Especificação                                                                                                | Status                           | Comentário         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', 'interaction.html#contenteditable', 'contenteditable')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("api.HTMLElement.contentEditable")}}

## Veja também

- {{domxref("HTMLElement.isContentEditable")}}
- The [contenteditable](/pt-BR/docs/Web/HTML/Global_attributes/contenteditable) global attribute.
- [Why ContentEditable is Terrible, Or: How the Medium Editor Works](https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480)
