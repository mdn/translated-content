---
title: animation-delay
slug: Web/CSS/animation-delay
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/animation-delay
---
{{CSSRef}}

## Übersicht

Die `animation-delay` [CSS](/de/docs/CSS "CSS") Eigenschaft gibt an, wann eine Animation starten soll. Dies lässt die Animationssequenz einige Zeit später starten nachdem sie einem Element zugewiesen wurde.

Ein Wert von `0s`, welcher der Standardwert für die Eigenschaft ist, gibt an, dass die Animation starten soll sobald sie zugewiesen wird. Andernfalls legt der Wert eine Verzögerung von dem Moment fest, an dem die Animation dem Element zugewiesen wird; die Animation startet um diesen Wert verzögert nachdem sie zugewiesen wurde.

Falls ein negativer Wert für die Animationsverzögerung zugewiesen wird, wird die Animation sofort ausgeführt. Jedoch wird sie so dargestellt, als ob sie vor dem Animationszyklus begonnen hat. Zum Beispiel, wenn Sie `-1s` als die Animationsverzögerungszeit angeben, wird die Animation sofort starten, allerdings 1 Sekunde innerhalb der Animationssequenz.

Falls Sie einen negativen Wert für die Animationsverzögerung angeben, der Startwert jedoch implizit ist, wird der Moment, an dem die Animation dem Element zugewiesen wird, als Startwert verwendet.

Es ist oft einfacher, die Kurzform Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal zu setzen.

{{cssinfo}}

## Syntax

{{csssyntax}}

    animation-delay: 3s
    animation-delay: 2s, 4ms

### Werte

- `<time>`
  - : Der Zeitversatz von dem Zeitpunkt, an dem die Animation dem Element zugewiesen wird, nach dem die Animation starten soll. Dieser kann entweder in Sekunden angegeben werden (mittels `s` als Einheit) oder in Millisekunden (mittels `ms` als Einheit). Falls keine Einheit angegeben wird, ist der Ausdruck ungültig.

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations") für Beispiele.

## Spezifikation

| Spezifikation                                                                                | Status                               | Kommentar |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('CSS3 Animations', '#animation-delay', 'animation-delay')}} | {{Spec2('CSS3 Animations')}} |           |

## Browser-Kompatibilität

{{Compat("css.properties.animation-delay")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}
