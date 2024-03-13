---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

## Resumo

Desloca o documento dentro da janela pelo valor fornecido.

## Sintaxe

```
window.scrollBy(X, Y);
```

### Parâmetros

- `X` é o deslocamento em pixels (px) para a rolagem horizontalmente.
- `Y` é o deslocamento em pixels (px) para a rolagem verticalmente.

Coordenadas positivas deslocarão para a direita e para baixo. Coordenadas negativas deslocarão para a esquerda e para cima.

## Exemplo

```
// Desloca a altura interna da janela
window.scrollBy(0, window.innerHeight);
```

## Notas

[window.scrollBy](/pt-BR/docs/DOM/Window.scrollBy) desloca uma quantidade específical enquanto [window.scroll](/pt-BR/docs/DOM/Window.scroll) desloca para uma posição absoluta no documento. Veja Também [window.scrollByLines](/pt-BR/docs/DOM/Window.scrollByLines), [window.scrollByPages](/pt-BR/docs/DOM/Window.scrollByPages)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
