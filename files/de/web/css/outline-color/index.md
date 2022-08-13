---
title: outline-color
slug: Web/CSS/outline-color
translation_of: Web/CSS/outline-color
---
{{CSSRef}}

## Zusammenfassung

Die **`outline-color`** CSS-Eigenschaft bestimmt die Farbe der Outline (den Umriss) eines Elements. Eine Outline ist eine Linie, die außerhalb des Rahmens (border) um Elemente gezeigt wird, damit das Element hervorsticht.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
outline-color: invert;
outline-color: red;

/* Global values */
outline-color: inherit;
outline-color: initial;
outline-color: unset;
```

### Werte

- `<color>`
  - : See {{cssxref("&lt;color&gt;")}} for the various color keywords and notations.
- `invert`
  - : To ensure the outline is visible, performs a color inversion of the background. This makes the focus border more salient, regardless of the color in the background. Note that browsers are not required to support it. If not, they just consider the statement as invalid

### Formal syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<p class="example">My outline is blue, da ba dee.</p>
```

### CSS

```css
.example {
  /* first need to set "outline" */
  outline: 2px solid;
  /* make the outline blue */
  outline-color: #0000FF;
}
```

### Live:

{{ EmbedLiveSample('Example', '', '', '', 'Web/CSS/outline-color') }}

## Spezifikationen

| Specification                                                                                    | Status                                   | Comment                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------- |
| {{SpecName('CSS3 Basic UI', '#outline-color', 'outline-color')}}             | {{Spec2('CSS3 Basic UI')}}     | No change                              |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'outline-color')}}     | {{Spec2('CSS3 Transitions')}} | Defines `outline-color` as animatable. |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline-color', 'outline-color')}} | {{Spec2('CSS2.1')}}                 | Initial definition                     |

## Browser Kompatibilität

{{Compat}}

\[1] In versions previous to Gecko 1.8: `-moz-outline-color`.

\[2] Support had been dropped in version 3.0 (1.9).

\[3] Supported in Opera 7 but support was dropped in Opera 15 with the adoption of Chromium/Blink engine.
