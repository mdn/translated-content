---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef}}

## Sumário

Retorna o número de pixels que o documento já rolou verticalmente.

## Sintaxe

```
var y = window.scrollY;
```

- y é o número atual de pixels que o documento rolou a partir do topo.

## Exemplo

```js
// verificar e ir para a segunda página
if (window.scrollY) {
  window.scroll(0, 0); // reinicia a posição do scroll para a posição superior esquerda do documento.
}

window.scrollByPages(1);
```

## Notas

Utilize esta propriedade para verificar se o documento já foi rolado quando funções de rolagem relativa, tais como {{domxref("window.scrollBy")}}, {{domxref("window.scrollByLines")}}, ou {{domxref("window.scrollByPages")}}, forem utilizadas.

A propriedade `pageYOffset` é um alias para `scrollY`:

```js
window.pageYOffset == window.scrollY; // always true
```

For cross-browser compatibility, use `window.pageYOffset` instead of `window.scrollY`. **Additionally**, older versions of Internet Explorer (< 9) do not support either property and must be worked around by checking other non-standard properties. A fully compatible example:

Para compatibilidade cross-browser, utilize window\.pageYOffset em vez de window\.scrollY. Além disso, versões inferiores do Internet Explorer 9 não suportam ambas as propriedades, e deve ser contornado verificando outras propriedades não padronizadas.

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("window.scrollX")}}
