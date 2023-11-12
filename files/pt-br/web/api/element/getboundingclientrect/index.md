---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
---

{{APIRef("DOM")}}

O método `Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport.`

## Sintaxe

```
rectObject = object.getBoundingClientRect();
```

### Valor de retorno

O valor de retorno é o objeto [DOMRect](/pt-BR/docs/XPCOM_Interface_Reference/nsIDOMClientRect) que é a uniāo dos retângulos retornados por [`getClientRects()`](/pt-BR/docs/DOM/element.getClientRects) para o elemento, ou seja, os atributos border-boxes do CSS associados ao elemento.

O valor retornado é um objeto `DOMRect`, que contém as propriedades apenas-leitura `left`, `top`, `right` e `bottom` que descrevem o border-box em pixels. `top` e `left` são relativos às propriedades top-left do _viewport_.

> **Nota:** Gecko 1.9.1 adiciona as propriedades `width` e `height` ao objeto `DOMRect`.

Border-boxes vazias são completamente ignoradas. Se todos os border-boxes do elemento são vazias, então é retornado o retângulo com width e height como zero, e no lugar de `top` e `left` determina-se o top-left do border-box relacionado ao primeiro box CSS (determinado pela ordem do conteúdo) em relaçāo ao elemento.

A quantidade de scrolling que foi feita na área do viewport (ou qualquer outra área de qualquer outro elemento _scrollable_) é tomada com medida ao computar o delimitador do retângulo. Isso significa que as propriedades `top` e `left` mudam seus valores tão logo a posiçāo do scroll for alterada (assim seus valores sāo relativos ao viewport e não são absolutos). Se esse não for o comportamento esperado basta adicionar a posição atual do scroll para as propriedades `top` e `left` (via `window.scrollX` e `window.scrollY`) para pegar os valores constantes independentemente da posiçāo atual do scroll.

Scripts que requerem uma alta compatibilidade cross-browser podem usar `window.pageXOffset` e `window.pageYOffset` ao invés de `window.scrollX` e `window.scrollY`. Scripts sem acesso ao `window.pageXOffset`, `window.pageYOffset`, `window.scrollX` e `window.scrollY` podem usar:

```js
// Para o scrollX
(((t = document.documentElement) || (t = document.body.parentNode)) &&
typeof t.ScrollLeft == "number"
  ? t
  : document.body
).ScrollLeft(
  // Para o scrollY
  ((t = document.documentElement) || (t = document.body.parentNode)) &&
    typeof t.ScrollTop == "number"
    ? t
    : document.body,
).ScrollTop;
```

## Exemplo

```js
// rect é um objeto DOMRect com seis propriedades: left, top, right, bottom, width, height
var rect = obj.getBoundingClientRect();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx>)
- [`getClientRects()`](/pt-BR/docs/DOM/element.getClientRects)
