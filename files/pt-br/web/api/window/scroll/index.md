---
title: Window.scroll()
slug: Web/API/Window/scroll
tags:
  - API
  - CSSOM View
  - Referencia
  - metodo
translation_of: Web/API/Window/scroll
---
{{APIRef}}

## Resumo

Rola a janela para uma posição específica no documento.

## Sintaxe

```
window.scroll(x-coord, y-coord)
```

### Parâmetros

- `x-coord` é o pixel que você deseja exibir ao longo do eixo horizontal do documento em relação à sua extremidade superior esquerda.
- `y-coord` é o pixel que você deseja exibir ao longo do eixo vertical do documento em relação à sua extremidade superior esquerda.

## Exemplo

```html
<!-- disponha o centésimo pixel vertical no topo da janela -->

<button onClick="scroll(0, 100);">clique para rolar 100 pixels para baixo</button>
```

## Notas

[window.scrollTo](/pt-BR/docs/DOM/window.scrollTo) é essencialmente equivalente a este método. Para rolar uma distância específica repetidamente, utilize o método [window.scrollBy](/pt-BR/docs/Window.scrollBy). Veja também [window.scrollByLines](/pt-BR/docs/Window.scrollByLines), [window.scrollByPages](/pt-BR/docs/Window.scrollByPages).

## Especificação

| Especificação                                                                                | Status                           | Comentário         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{ SpecName('CSSOM View', '#dom-window-scroll', 'window.scroll()') }} | {{ Spec2('CSSOM View') }} | Definição inicial. |
