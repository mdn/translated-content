---
title: animation-duration
slug: Web/CSS/animation-duration
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Layout
  - Referenz
translation_of: Web/CSS/animation-duration
---
{{CSSRef}}

## Übersicht

Die `animation-duration` CSS Eigenschaft bestimmt die Ablaufdauer einer Animation.

Der Standartwert ist `0s`, somit wird keine Animation ausgeführt.

Anstelle von `animation-duration` kann auch die Kurzschreibweise {{ cssxref("animation") }} verwendet werden.

{{cssinfo}}

## Syntax

```css
animation-duration: 6s;
animation-duration: 120ms;
animation-duration: 1s, 15s;
animation-duration: 10s, 30s, 230ms;
```

### Werte

- `<time>`
  - : Die Ablaufdauer der Animation wird in Sekunden (`s`) oder Millisekunden (`ms`) angegeben. Ohne Angabe einer Masseinheit ist der Wert ungültig. Negative Werte sind nicht zulässig.

> **Note:** **Hinweis:** Einige ältere Implementierungen mit Präfix interpretieren negative Werte als `0s`.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS animations](/en/CSS/CSS_animations "en/CSS/CSS_animations")

## Spezifikation

| Spezifikation                                                                                            | Status                                   | Anmerkung                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{ SpecName('CSS3 Animations', '#animation-duration', 'animation-duration') }} | {{ Spec2('CSS3 Animations') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.animation-duration")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent")}}
