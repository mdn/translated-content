---
title: mix-blend-mode
slug: Web/CSS/mix-blend-mode
tags:
  - CSS
  - CSS Compositing
  - CSS Eigenschaft
translation_of: Web/CSS/mix-blend-mode
---
{{CSSRef()}}

## Übersicht

Die `mix-blend-mode` CSS Eigenschaft beschreibt, wie sich der Inhalt des Elements mit dem Inhalt des Elements unter ihm und dem Element-Hintergrund vermischen soll.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
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

/* Global values */
mix-blend-mode: initial;
mix-blend-mode: inherit;
mix-blend-mode: unset;
```

### Werte

- `<blend-mode>`
  - : Ein {{cssxref("&lt;blend-mode&gt;")}} der den zu verwendenden Mischmodus festlegt. Mehrere Werte können per Komma getrennt angegeben werden.

### Formale Syntax

{{csssyntax}}

## Beispiele

```html
<svg>
  <circle cx="40" cy="40" r="40" fill="red"/>
  <circle cx="80" cy="40" r="40" fill="lightgreen"/>
  <circle cx="60" cy="80" r="40" fill="blue"/>
</svg>
```

```css
circle { mix-blend-mode: screen; }
```

### Result

{{EmbedLiveSample("Examples", "100%", "180")}}

## Spezifikationen

| Spezifikation                                                                            | Status                               | Kommentar              |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------- |
| {{ SpecName('Compositing', '#mix-blend-mode', 'mix-blend-mode') }} | {{ Spec2('Compositing') }} | Initial specification. |

## Browser Unterstützung

{{Compat("css.properties.mix-blend-mode")}}

## Siehe auch

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("background-blend-mode")}}
