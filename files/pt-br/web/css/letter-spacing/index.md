---
title: letter-spacing
slug: Web/CSS/letter-spacing
---

{{CSSRef}}

A propriedade CSS **`letter-spacing`** específica o comportamento do espaçamento entre caracteres de texto.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## Syntax

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### Values

- `normal`
  - : O espaçamento de letras normal para a fonte atual. Ao contrário de um valor de 0, essa palavra-chave permite que o {{glossary("agente do usuário")}} altere o espaço entre os caracteres para justificar o texto.
- {{cssxref("&lt;length&gt;")}}
  - : Especifica o espaço adicional entre caracteres, além do espaço padrão entre os caracteres. Os valores podem ser negativos, mas pode haver limites específicos da implementação. Os agentes de usuário podem não aumentar ou diminuir o espaço inter-personagem para justificar o texto.

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

### CSS

```css
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

### Result

{{ EmbedLiveSample('Examples', 440, 185) }}

## Specifications

| Specification                                                                | Status                        | Comment                                 |
| ---------------------------------------------------------------------------- | ----------------------------- | --------------------------------------- |
| {{SpecName('CSS3 Text', '#letter-spacing-property', 'letter-spacing')}}      | {{Spec2('CSS3 Text')}}        | No change.                              |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'letter-spacing')}}        | {{Spec2('CSS3 Transitions')}} | Defines `letter-spacing` as animatable. |
| {{SpecName('CSS2.1', 'text.html#propdef-letter-spacing', 'letter-spacing')}} | {{Spec2('CSS2.1')}}           | No change.                              |
| {{SpecName('SVG1.1', 'text.html#LetterSpacingProperty', 'letter-spacing')}}  | {{Spec2('SVG1.1')}}           | Initial SVG definition.                 |
| {{SpecName('CSS1', '#letter-spacing', 'letter-spacing')}}                    | {{Spec2('CSS1')}}             | Initial definition.                     |

{{cssinfo}}

## Browser compatibility

{{Compat("css.properties.letter-spacing")}}

## See also

- {{cssxref("font-kerning")}}
