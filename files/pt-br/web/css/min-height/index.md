---
title: min-height
slug: Web/CSS/min-height
---

{{ CSSRef() }}

## Sumário

A propriedade `min-height` do CSS é usado para definir a altura mínima de um determinado elemento. Ele impede que o valor usado da propriedade {{ Cssxref("height") }} se torne menor que o valor especificado para min-height.
O valor de {{ Cssxref("min-height") }} substitui os dois {{ Cssxref("max-height") }} e {{ Cssxref("height") }}.

{{cssinfo}}

## Sintaxe

```
sintaxe forma: {{csssyntax("min-height")}}
```

```
min-height: 3.5em
min-height: 10%
min-height: max-content
min-height: min-content
min-height: fit-content
min-height: fill-available

min-height: inherit
```

### Valores

- `<length>`
  - : O valor fixo mínimo da altura. Veja {{cssxref("&lt;length&gt;")}} para possíveis unidades. Valores negativos fazem da declaração inválida.
- `<percentage>`
  - : O valor fixo mínimo da altura expressado como uma {{cssxref("&lt;percentage&gt;")}} do conteúdo da altura do bloco. Valores negativos fazem da declaração inválida.
- `max-content` {{ experimental_inline() }}
  - : The intrinsic preferred height.
- `min-content` {{ experimental_inline() }}
  - : The intrinsic minimum height.
- `fill-available` {{ experimental_inline() }}
  - : The containing block height minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, `available`.
- `fit-content` {{ experimental_inline() }}
  - : According CSS3 Box, this is a synonym of `min-content`. CSS3 Sizing defines a more complex algorithm, but no browser implements it, even in an experimental way.

## Exemplos

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Ver também

- {{ Cssxref("width") }}, {{ Cssxref("height") }}, {{ Cssxref("max-height") }}
- The [box model](/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{ Cssxref("min-width") }}, {{ Cssxref("box-sizing") }}, {{ Cssxref("height") }}, {{ Cssxref("max-height") }}
