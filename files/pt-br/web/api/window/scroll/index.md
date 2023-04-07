---
title: Window.scroll()
slug: Web/API/Window/scroll
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

-ou- 

`options`

  Um dicionário contendo os seguintes parâmetros:


   `top`

  
Especifica o número de pixels ao longo do eixo Y para rolar a janela ou elemento.
 
`left`
 
 Especifica o número de pixels ao longo do eixo X para rolar a janela ou elemento.
 

 `behavior`
 

Determina se a rolagem é instantânea ou anima suavemente. Esta opção é uma string que deve assumir um dos seguintes valores:
-  `smooth`: A rolagem deve animar suavemente.
- `instant`: A rolagem deve acontecer instantaneamente em um único salto.
- `auto`: O comportamento de rolagem é determinado pelo valor calculado de scroll-behavior.

### Return value

None ([undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemplos

```html
<!-- disponha o centésimo pixel vertical no topo da janela -->

<button onClick="scroll(0, 100);">clique para rolar 100 pixels para baixo</button>
```

Usando `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Notas

[window.scrollTo](/pt-BR/docs/DOM/window.scrollTo) é essencialmente equivalente a este método. Para rolar uma distância específica repetidamente, utilize o método [window.scrollBy](/pt-BR/docs/Window.scrollBy). Veja também [window.scrollByLines](/pt-BR/docs/Window.scrollByLines), [window.scrollByPages](/pt-BR/docs/Window.scrollByPages).

## Especificação

| Especificação                                                                                | Status                           | Comentário         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{ SpecName('CSSOM View', '#dom-window-scroll', 'window.scroll()') }} | {{ Spec2('CSSOM View') }} | Definição inicial. |
