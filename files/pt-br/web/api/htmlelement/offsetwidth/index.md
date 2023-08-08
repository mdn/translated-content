---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
---

{{ APIRef("HTML DOM") }}

`A propriedade HTMLElement.offsetWidth` é de somente leitura e retorna a largura de um elemento no layout. Normalmente, o `offsetWidth` é uma medida que inclui as bordas do elemento, seu padding horizontal e o vertical scrollbar (se presente e renderizado) e também a largura CSS do elemento.

Sintaxe

```
var offsetWidth =element.offsetWidth;
```

`offsetWidth` é uma propriedade somente leitura.

> **Nota:** Esta propriedade irá arredondar o valor para um inteiro. se você precisa um valor fracionado, use {{ domxref("element.getBoundingClientRect()") }}.

## Exemplo

![Image:Dimensions-offset.png](/@api/deki/files/186/=Dimensions-offset.png)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determinando as dimensões dos elementos](/pt-BR/docs/Determining_the_dimensions_of_elements)
