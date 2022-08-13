---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/max-height
---
{{ CSSRef() }}

## Übersicht

Die `max-height` Eigenschaft wird verwendet, um die maximale Höhe eines Elements festzulegen. Das verhindert, dass der benutzte Wert der {{ Cssxref("height") }} Eigenschaft größer wird als der festgelegte Wert von `max-height`.

{{ Cssxref("max-height") }} überschreibt {{cssxref("height")}}, aber {{ Cssxref("min-height") }} überschreibt {{ Cssxref("max-height") }}.

{{cssinfo}}

## Syntax

```css
/* <length> Wert */
max-height: 3.5em;

/* <percentage> Wert */
max-height: 75%;

/* Schlüsselwortwerte */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* Globale Werte */
max-height: inherit;
max-height: initial;
max-height: unset;
```

### Werte

- `<length>`
  - : Eine feste Maximalhöhe. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- `<percentage>`
  - : Der {{cssxref("&lt;percentage&gt;")}} Wert wird unter Berücksichtigung der Höhe des beinhaltenden Blocks berechnet. Falls die Höhe des beinhaltenden Blocks nicht explizit angegeben wurde, wird der prozentuale Wert als `none` behandelt.
- `none`
  - : Das Element verfügt über keine maximale Höhe.
- `max-content` {{experimental_inline()}}
  - : Die innere bevorzugte Höhe.
- `min-content` {{experimental_inline()}}
  - : Die innere Minimalhöhe.
- `fill-available` {{experimental_inline()}}
  - : Die Höhe des beinhaltenden Blocks minus dem horizontalen Außenabstand, Rand und Innenabstand. Einige Browser implementieren hierfür das veraltete Schlüsselwort `available`.
- `fit-content` {{experimental_inline()}}
  - : Hat die gleiche Bedeutung wie `max-content.`

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
table { max-height: 75%; }

form { max-height: none; }
```

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Anmerkung                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Sizing', '#width-height-keywords', 'max-height')}}     | {{Spec2('CSS3 Sizing')}}         | Fügt die Schlüsselwörter `max-content`, `min-content`, `fit-content` und `fill-available` hinzu. _Die Entwürfe zu CSS3 Box und CSS3 Writing Modes definierten zuvor beide diese Schlüsselwörter. Diese Entwürfe werden durch diese Spezifikation ersetzt._ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'max-height')}}     | {{Spec2('CSS3 Transitions')}} | Definiert `max-height` als animierbar.                                                                                                                                                                                                                     |
| {{SpecName('CSS2.1', 'visudet.html#min-max-heights', 'max-height')}} | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition                                                                                                                                                                                                                                   |

## Browser Kompatibilität

{{Compat("css.properties.max-height")}}

## Siehe auch

- [Das Boxmodell](/de/docs/Web/CSS/Boxmodell "en/CSS/box_model")
- {{cssxref("max-width")}}, {{cssxref("box-sizing")}}, {{cssxref("height")}}, {{cssxref("min-height")}}
