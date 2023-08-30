---
title: height
slug: Web/CSS/height
---

{{CSSRef()}}

## Sumário

A propriedade `height` do CSS determina a altura da área do conteúdo de um elemento. A [área de conteúdo](/pt-BR/docs/CSS/box_model#content) consiste no `padding`, `margin` e `border` do elemento.

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

| Specification                                                          | Status                        | Comment                                                                                                   |
| ---------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-width-and-height-properties', 'height')}} | {{Spec2('CSS3 Box')}}         | Added the `max-content`, `min-content`, `available`, `fit-content`, `border-box`, `content-box` keywords. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'height')}}          | {{Spec2('CSS3 Transitions')}} | Lists `height` as animatable.                                                                             |
| {{SpecName('CSS2.1', 'visudet.html#the-height-property', 'height')}}   | {{Spec2('CSS2.1')}}           | Adds support for the {{cssxref("&lt;length&gt;")}} values and precises on which element it applies to.    |
| {{SpecName('CSS1', '#height', 'height')}}                              | {{Spec2('CSS1')}}             | Initial specification.                                                                                    |

## Compatibilidade com navegadores

{{Compat("css.properties.height")}}

## Veja também

- [box model](/pt-BR/docs/CSS/box_model), {{Cssxref("width")}}, {{Cssxref("box-sizing")}}, {{Cssxref("min-height")}}, {{Cssxref("max-height")}}
