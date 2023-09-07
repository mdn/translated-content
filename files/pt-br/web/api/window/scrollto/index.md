---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## Resumo

Realiza a rolagem para um conjunto de coordenadas em particular em um documento.

## Sintaxe

```
window.scrollTo(x-coord, y-coord)
```

### Parâmetros

- `x-coord` é o pixel do eixo horizontal do documento que você quer exibir no canto superior esquerdo.
- `y-coord` é o pixel do eixo vertical do documento que você quer exibir no canto superior esquerdo.

## Exemplo

```js
window.scrollTo(0, 1000);
```

## Notas

Essa função é efetivamente a mesma que [window.scroll](/pt-BR/docs/DOM/Window.scroll). Para rolagem relativa, veja [window.scrollBy](/pt-BR/docs/DOM/Window.scrollBy), [window.scrollByLines](/pt-BR/docs/DOM/Window.scrollByLines) e [window.scrollByPages](/pt-BR/docs/DOM/Window.scrollByPages).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
