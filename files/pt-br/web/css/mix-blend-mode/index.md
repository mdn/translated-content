---
title: mix-blend-mode
slug: Web/CSS/mix-blend-mode
---

{{CSSRef}}

## Resumo

A propriedade **`mix-blend-mode`** descreve como um elemento de conteúdo deve ser mesclado com os elementos abaixo dele no background.

{{cssinfo}}

## Sintaxe

```css
/* Valores para esta propriedade */
mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;

/* Valores globais */
mix-blend-mode: initial;
mix-blend-mode: inherit;
mix-blend-mode: unset;
```

### Valores

- `<blend-mode>`
  - : É uma {{cssxref("&lt;blend-mode&gt;")}} que descreve qual mesclagem deve ser aplicada. Podem ser descritos vários valores, separados por vírgula.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```html
<svg>
  <circle cx="40" cy="40" r="40" fill="red" />
  <circle cx="80" cy="40" r="40" fill="lightgreen" />
  <circle cx="60" cy="80" r="40" fill="blue" />
</svg>
```

```css
circle {
  mix-blend-mode: screen;
}
```

### Resultado

{{EmbedLiveSample("Examples", "100%", "180")}}

## Especificações

| Specification                                                      | Status                     | Comment                |
| ------------------------------------------------------------------ | -------------------------- | ---------------------- |
| {{ SpecName('Compositing', '#mix-blend-mode', 'mix-blend-mode') }} | {{ Spec2('Compositing') }} | Initial specification. |

## Compatibilidade de navegadores

{{Compat("css.properties.mix-blend-mode")}}

## Veja também

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("background-blend-mode")}}
