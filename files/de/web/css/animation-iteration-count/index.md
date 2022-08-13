---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/animation-iteration-count
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) Eigenschaft `animation-iteration-count` legt die Anzahl Wiederholungen der Animation fest.

Meistens wird die Kurzform {{ cssxref("animation") }} genutzt, um alle Eigenschaften der Animation auf einen Blick zu haben.

{{cssinfo}}

## Syntax

{{csssyntax}}

    animation-iteration-count: infinite
    animation-iteration-count: 3
    animation-iteration-count: 2.3

    animation-iteration-count: 2, 0, infinite

### Werte

- `infinite`
  - : Die Animation wird unbegrenzt wiederholt.
- `<number>`
  - : Die Anzahl Wiederholungen der Animation. Standartmässig ist dieser Wet `1`. Negative Werte sind nicht zulässig. Es können auch Dezimalzahlen genutzt werden um nur einen Teil der Animation abzuspielen (z. B. `0.5` spielt die nur die Halbe Animation ab).

## Beispiel

Siehe [CSS Animationen](/de/docs/CSS/Using_CSS_animations).

## Spezifikation

| Spezifikation                                                                                                                | Status                                   | Anmerkung |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| {{ SpecName('CSS3 Animations', '#animation-iteration-count', 'animation-iteration-count') }} | {{ Spec2('CSS3 Animations') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.animation-iteration-count")}}

## Siehe auch

- [Using CSS animations](/de/docs/CSS/Tutorials/Using_CSS_animations "Tutorial about CSS animations")
- {{ domxref("AnimationEvent", "AnimationEvent") }}
