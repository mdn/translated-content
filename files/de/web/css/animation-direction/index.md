---
title: animation-direction
slug: Web/CSS/animation-direction
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/animation-direction
---
{{CSSRef}}

## Übersicht

Die `animation-direction` CSS Eigenschaft gibt an, ob die Animation rückwärts oder in Wechelzyklen abgespielt werden soll.

Es ist oft einfacher, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal zu setzen.

{{cssinfo}}

## Syntax

```css
/* Einzelne Animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Mehrere Animationen */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Globale Werte */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

### Werte

- `normal`
  - : Die Animation wird in jedem Durchlauf vorwärts abgespielt. In anderen Worten, jedesmal, wenn der nächste Zyklus der Animation beginnt, wird die Animation auf den Anfangszustand zurückgesetzt und beginnt erneut. Dies ist die Standardeinstellung der Animationsrichtung.
- `alternate`
  - : Die Animation ändert in jedem Durchlauf die Richtung. Wenn die Animation umgekehrt abgespielt wird, werden die Animationsschritte rückwärts ausgeführt. Des weiteren werden Timingfunktionen ebenfalls umgekehrt; zum Beispiel wird eine `ease-in` Animation durch eine `ease-out` Animation ersetzt, wenn sie rückwärts abgespielt wird. Die Zählung zur Bestimmung, ob es sich um eine gerade oder ungerade Iteration handelt, beginnt bei eins.
- `reverse`
  - : Die Animation wird in jedem Durchlauf rückwärts abgespielt. Jedes Mal, wenn der nächste Zyklus der Animation beginnt, wird die Animation auf den Endzustand zurückgesetzt und beginnt erneut.
- `alternate-reverse`
  - : Die Animation wird beim ersten Durchlauf rückwärts abgespielt, beim nächsten vorwärts und fährt danach abwechselnd fort. Die Zählung zur Bestimmung, ob es sich um eine gerade oder ungerade Iteration handelt, beginnt bei eins.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations") für Beispiele.

## Spezifikationen

| Spezifikation                                                                                            | Status                               | Kommentar                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Animations', '#animation-direction', 'animation-direction')}} | {{Spec2('CSS3 Animations')}} | For the two new values, see the [W3C discussion](http://lists.w3.org/Archives/Public/www-style/2011May/0090.html). |

## Browser Kompatibilität

{{Compat("css.properties.animation-direction")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}
