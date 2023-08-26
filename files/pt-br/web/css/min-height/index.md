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

| Especificação                                                          | Status                          | Comentário                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Sizing', '#width-height-keywords', 'min-height') }}  | {{ Spec2('CSS3 Sizing') }}      | Adds the `max-content`, `min-content`, `fit-content`, and `fill-available` keywords. _Both CSS3 Box and CSS3 Writing Modes drafts defined at some point these keywords. These drafts are superseded by this spec._                                                                                                                                                                                          |
| {{ SpecName('CSS3 Flexbox', '#min-auto', 'min-height') }}              | {{ Spec2('CSS3 Flexbox') }}     | An [earlier revision of the spec](https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/) added the `auto` keyword and used it as the initial value. The CSSWG subsequently resolved to revert this change, however. As of March 29, 2013, the latest [Editor's Draft](http://dev.w3.org/csswg/css-flexbox/) doesn't modify the `min-width` property anymore (i.e. it no longer introduces the `auto` value). |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'min-height') }}    | {{ Spec2('CSS3 Transitions') }} | Defines `min-height` as animatable.                                                                                                                                                                                                                                                                                                                                                                         |
| {{ SpecName('CSS2.1', 'visudet.html#min-max-heights', 'min-height') }} | {{ Spec2('CSS2.1') }}           | Initial definition.                                                                                                                                                                                                                                                                                                                                                                                         |

## Navegadores compatíveis

{{Compat("css.properties.min-height")}}

## Ver também

- {{ Cssxref("width") }}, {{ Cssxref("height") }}, {{ Cssxref("max-height") }}
- The [box model](/pt-BR/docs/CSS/box_model), {{ Cssxref("min-width") }}, {{ Cssxref("box-sizing") }}, {{ Cssxref("height") }}, {{ Cssxref("max-height") }}
