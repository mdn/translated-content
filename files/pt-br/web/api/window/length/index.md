---
title: Window.length
slug: Web/API/Window/length
tags:
  - API
  - DOM
  - Gecko
  - Propriedade
  - Referencia
  - Referência do DOM
  - Referência do DOM do Gecko
  - WebAPI
  - Window
translation_of: Web/API/Window/length
---
{{ ApiRef() }}

## Resumo

Retorna o número de frames (tanto elementos `frame` ou `iframe`) dentro da janela.

## Sintaxe

```
quantidadeFrames = window.length;
```

- _quantidadeFrames_ é o número de frames.

## Exemplo

```js
if (window.length) {
  // este é um documento com subframes
}
```

## Especificações

| Especificação                                                                                | Status                           | Comentário |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG','browsers.html#dom-length','Window.length')}} | {{Spec2('HTML WHATWG')}} |            |
