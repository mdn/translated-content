---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/animation-fill-mode
---
{{ CSSRef() }}

## Übersicht

`animation-fill-mode` definiert den Zustand einer Animation vor und nach deren Ablauf.

{{cssinfo}}

## Syntax

{{csssyntax}}

    animation-fill-mode: none
    animation-fill-mode: forwards
    animation-fill-mode: backwards
    animation-fill-mode: both

    The # indicates that several values may be given, separated by commas.
    Each applies to the animation defined in the same order in animation-name.
    animation-fill-mode: none, backwards
    animation-fill-mode: both, forwards, none

### Werte

- `none`
  - : Das Element nimmt keine Werte der Animation an.
- `forwards`
  - | : Das Element nimmt nach Ablauf die Werte des letzten Animationsschrittes an, unter der Berücksichtigung von {{ cssxref("animation-direction") }} und {{ cssxref("animation-iteration-count") }}: | `animation-direction` | `animation-iteration-count` | Letzte keyframe Regel |
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------- | --------------------- |
    | `normal`                                                                                                                                                                                                                    | gerade oder ungerade  | `100%` oder `to`            |
    | `reverse`                                                                                                                                                                                                                   | gerade oder ungerade  | `0%` oder `from`            |
    | `alternate`                                                                                                                                                                                                                 | gerade                | `0%` oder `from`            |
    | `alternate`                                                                                                                                                                                                                 | ungerade              | `100%` oder `to`            |
    | `alternate-reverse`                                                                                                                                                                                                         | gerade                | `100%` oder `to`            |
    | `alternate-reverse`                                                                                                                                                                                                         | ungerade              | `0%` oder `from`            |
- `backwards`
  - | : Das Element nimmt die Werte des ersten Animationsschrittes an und behält diesen auch während der {{ cssxref("animation-delay") }} Zeit. {{ cssxref("animation-direction") }} wird wie folgt gehandhabt: | `animation-direction` | Erste keyframe Regel |
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------- |
    | `normal` oder `alternate`                                                                                                                                                                                                         | `0%` oder `from`      |
    | `reverse` oder `alternate-reverse`                                                                                                                                                                                                | `100%` oder `to`      |
- `both`
  - : Vereint die Werte `backwards` und `forwards`.

## Beispiele

```css
h1 {
  animation-fill-mode: forwards;
}
```

## Spezifikation

| Spezifikation                                                                                                | Status                                   | Anmerkung |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------- |
| {{ SpecName('CSS3 Animations', '#animation-fill-mode', 'animation-fill-mode') }} | {{ Spec2('CSS3 Animations') }} |           |

## Browser Kompatibilität

{{Compat("css.properties.animation-fill-mode")}}

## Siehe auch

- [Using CSS animations](/de/docs/CSS/Tutorials/Using_CSS_animations "Tutorial about CSS animations")
- {{ domxref("AnimationEvent", "AnimationEvent") }}
