---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsMobileBrowserCompatibility
  - Referenz
  - SVG
translation_of: Web/CSS/letter-spacing
---
{{CSSRef}}

## Übersicht

Die **`letter-spacing`** CSS Eigenschaft gibt das Abstandsverhalten zwischen Textzeichen an.

{{cssinfo}}

## Syntax

```css
/* <length> Werte */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Schlüsselwortwerte */
letter-spacing: normal;

/* Globale Werte */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### Werte

- `normal`
  - : Die Abstände sind die normalen Abstände für die aktuelle Schriftart. Im Gegensatz zu einem Wert von 0, erlaubt es dieser Wert dem User Agent, den Leerraum zwischen Zeichen zu ändern, um Text im Block anzuordnen.
- `<length>`
  - : Beschreibt Leerraum zwischen den Zeichen **_zusätzlich_** zum Standardleerraum zwischen Zeichen. Werte können negativ sein, aber es kann implementationsspezifische Beschränkungen geben. User Agents können den Leerraum zwischen den Zeichen nicht weiter verringern oder vergrößern, um den Text im Block anzuordnen.
    Siehe {{cssxref("length")}} Werte für mögliche Einheiten.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML Inhalt

```html
<p class="first-example"> letter spacing </p>
<p class="second-example"> letter spacing </p>
<p class="third-example"> letter spacing </p>
<p class="fourth-example"> letter spacing </p>
```

### CSS Inhalt

```css
.first-example { letter-spacing: 0.4em; }
.second-example { letter-spacing: 1em; }
.third-example { letter-spacing: -0.05em; }
.fourth-example { letter-spacing: 6px; }
```

{{ EmbedLiveSample('Beispiele', 440, 185) }}

## Spezifikationen

| Spezifikation                                                                                        | Status                                   | Kommentar                                  |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------ |
| {{SpecName('CSS3 Text', '#letter-spacing-property', 'letter-spacing')}}     | {{Spec2('CSS3 Text')}}             | Keine Änderung                             |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'letter-spacing')}}         | {{Spec2('CSS3 Transitions')}} | Definiert `letter-spacing` als animierbar. |
| {{SpecName('CSS2.1', 'text.html#propdef-letter-spacing', 'letter-spacing')}} | {{Spec2('CSS2.1')}}                 | Keine Änderung                             |
| {{SpecName('SVG1.1', 'text.html#LetterSpacingProperty', 'letter-spacing')}} | {{Spec2('SVG1.1')}}                 | Ursprüngliche SVG Definition               |
| {{SpecName('CSS1', '#letter-spacing', 'letter-spacing')}}                         | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                   |

## Browser Kompatibilität

{{Compat("css.properties.letter-spacing")}}

## Siehe auch

- {{cssxref("font-kerning")}}
