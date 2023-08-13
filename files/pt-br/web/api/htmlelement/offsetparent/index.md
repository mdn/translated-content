---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
---

{{ APIRef("HTML DOM") }}

A propriedade somente de leitura **`HTMLElement.offsetParent`** retorna uma referência ao objeto ao qual está contido(mais próximo na hierarquia do conteúdo) posicionado contendo o elemento. Caso o elemento não esteja posicionado, mais próximo a célula da tabela ou do elemento raiz (nos padrões do modo de conformidade do `html; no modo quirks de redenrização) é o` `offsetParent`. quando o elemento está definido `style.display` para "none", `offsetParent` retorna null. A propriedade `offsetParent` é útil devido a {{domxref("HTMLElement.offsetTop","offsetTop")}} e {{domxref("HTMLElement.offsetLeft","offsetLeft")}} serem relativos ao seu preenchimento da borda.

```
parentObj = element.offsetParent;
```

- _parentObj_ é uma referência de objeto ao elemento no qual o elemento corrente é offset.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
