---
title: "Window: método scroll()"
slug: Web/API/Window/scroll
---

{{APIRef}}

O método **`Window.scroll()`** rola a janela para um local específico no documento.

## Sintaxe

```js-nolint
scroll(x-coord, y-coord)
scroll(options)
```

### Parâmetros

- `x-coord` é o pixel ao longo do eixo horizontal do documento que você
  deseja exibido no canto superior esquerdo.
- `y-coord` é o pixel ao longo do eixo vertical do documento que você
  deseja exibido no canto superior esquerdo.

\- ou -

- `options`
  - : Um dicionário contendo os seguintes parâmetros:
    - `top`
      - : Especifica o número de pixels ao longo do eixo Y para rolar a janela ou elemento.
    - `left`
      - : Especifica o número de pixels ao longo do eixo X para rolar a janela ou elemento.
    - `behavior`
      - : Determina se a rolagem é instantânea ou animada suavemente. Esta opção é uma string que deve assumir um dos seguintes valores:
        - `smooth`: a rolagem deve ser animada suavemente
        - `instant`: a rolagem deve acontecer instantaneamente em um único salto
        - `auto`: o comportamento de rolagem é determinado pelo valor calculado de {{cssxref("scroll-behavior")}}

### Valor de retorno

Nenhum ({{jsxref("undefined")}}).

## Exemplos

```html
<!-- coloque o centésimo pixel vertical no topo da janela -->

<button onclick="scroll(0, 100);">clique para rolar até o 100º pixel</button>
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

{{domxref("Window.scrollTo()")}} é efetivamente o mesmo que este método. Para parente
rolagem, veja {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}},
e {{domxref("Window.scrollByPages()")}}.

Para elementos de rolagem, consulte {{domxref("Element.scrollTop")}} e
{{domxref("Element.scrollLeft")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
