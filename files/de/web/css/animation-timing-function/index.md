---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Layout
  - Referenz
translation_of: Web/CSS/animation-timing-function
---
{{CSSRef}}

## Übersicht

Die `animation-timing-function` [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie eine CSS Animation über die Dauer eines Zyklus verlaufen soll. Die möglichen Werte sind eine oder mehrere {{cssxref("&lt;timing-function&gt;")}}.

Für Schlüsselbildanimationen wird die Timingfunktion zwischen den [Schlüsselbildern](/de/docs/Web/CSS/@keyframes) angewandt, anstatt über die gesamte Animation. Mit anderen Worten, die Timingfunktion wird auf den Start des Schlüsselbildes und an dessen Ende angewandt.

Eine Animationstimingfunktion, die innerhalb eines Schlüsselbildblocks definiert wurde, wird auf dieses Schlüsselbild angewandt. Falls keine Timingfunktion für das Schlüsselbild angegeben wurde, wird die Timingfunktion verwendet, die für die gesamte Animation definiert wurde.

Es ist oftmals einfacher, die Kurzform Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal zu setzen.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Funktionswerte */
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: steps(4, end);

/* Mehrere Animationen */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Globale Werte */
animation-timing-function: inherited;
animation-timing-function: initial;
animation-timing-function: unset;
```

### Werte

- `<timingfunction>`
  - : Jeder {{cssxref("&lt;timing-function&gt;")}} Wert repräsentiert die Timingfunktion, die mit der dazugehörigen zu animierenden Eigenschaft verknüpft wird, die in {{ cssxref("animation-property") }} definiert wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations") für Beispiele

## Spezifikationen

| Spezifikation                                                                                                            | Status                               | Anmerkung                |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Animations', '#animation-timing-function', 'animation-timing-function')}} | {{Spec2('CSS3 Animations')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.animation-timing-function")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{ domxref("AnimationEvent") }}
