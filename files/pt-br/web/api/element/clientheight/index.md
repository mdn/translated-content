---
title: Document.height
slug: Web/API/Element/clientHeight
---

{{APIRef("DOM")}}

> **Nota:** A partir do Gecko 6.0, `document.height` não é mais suportado. Em seu lugar use `document.body.clientHeight`. Veja {{domxref("element.clientHeight")}}.

## Sumário

Retorna a altura do objeto {{domxref("document")}}. Em muitos casos, isto é igual à do elemento {{HTMLElement("body")}} do documento atual.

## Sintaxe

```
height_value = document.height
```

## Exemplo

```js
// alert document height
alert(document.height);
```

## Alternativas

```
document.body.clientHeight
document.documentElement.clientHeight
document.documentElement.scrollHeight
```

## Especificação

HTML5

## Veja também

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
