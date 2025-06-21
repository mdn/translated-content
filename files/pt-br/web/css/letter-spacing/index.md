---
title: letter-spacing
slug: Web/CSS/letter-spacing
---

{{CSSRef}}

A propriedade CSS **`letter-spacing`** específica o comportamento do espaçamento entre caracteres de texto.

{{InteractiveExample("CSS Demo: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: -1px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar;
}
```

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

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-kerning")}}
