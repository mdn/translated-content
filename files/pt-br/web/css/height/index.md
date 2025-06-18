---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

## Sumário

A propriedade `height` do CSS determina a altura da área do conteúdo de um elemento. A [área de conteúdo](/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content) consiste no `padding`, `margin` e `border` do elemento.

As propriedades {{Cssxref("min-height")}} e {{Cssxref("max-height")}} sobrepõem a {{Cssxref("height")}}.

{{cssinfo}}

## Sintaxe

```plain
Sintaxe formal: [<length> | <percentage>] && [border-box | content-box]? | available | min-content | max-content | fit-content | complex | auto
```

```
height: auto     /* auto keyword */

height: 120px    /* <length> values */
height: 10em

height: 75%      /* <percentage> values */

height: inherit
```

### Valores

- `<length>`
  - : Veja {{cssxref("&lt;length&gt;")}} para unidades disponíveis.
- `<percentage>`
  - : Especificada como uma {{cssxref("&lt;percentage&gt;")}} da altura do conteúdo do bloco.
- `border-box` {{ experimental_inline }}
  - : Se presente, o último {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} é aplicado a caixa de borda do elemento.
- `content-box` {{ experimental_inline }}
  - : Se presente, o último {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} é aplicado a caixa de conteúdo do elemento.
- `auto`
  - : O navegador calculará a altura do conteúdo especificado.
- `max-content` {{ experimental_inline }}
  - : A altura máxima intrínseca.
- `min-content` {{ experimental_inline }}
  - : A altura mínima intrínseca.
- `available` {{ experimental_inline }}
  - : Altura da caixa menos margem vertical, borda e padding.
- `fit-content` {{ experimental_inline }}

  - : O maior de:

    - a altura mínima intrínseca
    - a menor entre a altura intrínseca preferida e a altura disponível

## Exemplos

### HTML

```html
<div id="red">
  <span>I'm 50 pixels tall.</span>
</div>
<div id="green">
  <span>I'm 25 pixels tall.</span>
</div>
<div id="parent">
  <div id="child">
    <span>I'm half the height of my parent.</span>
  </div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 3px solid #999999;
}

#red {
  height: 50px;
}

#green {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

{{EmbedLiveSample('Exemplos')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [box model](/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{Cssxref("width")}}, {{Cssxref("box-sizing")}}, {{Cssxref("min-height")}}, {{Cssxref("max-height")}}
