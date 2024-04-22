---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

## Resumo

Retorna um novo objeto {{domxref("MediaQueryList")}} representando o resultado analisado da string [media query](/pt-BR/docs/CSS/Media_queries) especificada.

## Sintaxe

```
mql = window.matchMedia(mediaQueryString)
```

onde `mediaQueryString` é uma string representando a media query para o qual retorna um novo objeto {{domxref("MediaQueryList")}}.

## Exemplo

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* a viewport tem pelo menos 400 pixels de largura */
} else {
  /* a viewport menos que 400 pixels de largura */
}
```

Este código permite-lhe lidar com as coisas de forma diferente quando a janela é muito estreita.

Veja [Usando media queries a partir do código](/pt-BR/docs/DOM/Using_media_queries_from_code) para mais exemplos.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Media queries](/pt-BR/docs/CSS/Media_queries)
- [Usando media queries a partir do código](/pt-BR/docs/DOM/Using_media_queries_from_code)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
