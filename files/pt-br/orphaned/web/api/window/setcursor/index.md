---
title: Window.setCursor()
slug: orphaned/Web/API/Window/setCursor
---

{{ ApiRef() }}

## Sumário

Altera o cursor para a janela atual.

## Exemplo

```
function setBusyCursor(enable) {
  window.setCursor(enable ? "wait" : "auto");
}
```

## Notas

O cursor não retornará ao seu padrão até que seja definido novamente para `auto`.

Esta função é parte do [ChromeWindow interface](/pt-BR/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow). Esta função não está habilitada para páginas web, que podem usar a propriedade CSS {{cssxref("cursor")}} em seu lugar.

## Especificação

{{Specifications}}
