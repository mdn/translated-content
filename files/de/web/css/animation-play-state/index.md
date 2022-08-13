---
title: animation-play-state
slug: Web/CSS/animation-play-state
tags:
  - CSS
  - CSS Animationen
  - CSS Eigenschaft
  - Experimentell
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/animation-play-state
---
{{CSSRef}}

## Übersicht

Die `animation-play-state` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft bestimmt, ob eine Animation abläuft oder pausiert ist. Der Wert dieser Eigenschaft kann abgefragt werden, um festzustellen, ob die Animation gerade abläuft oder nicht; darüber hinaus kann der Wert auch gesetzt werden, um die das Abspielen der Animation anzuhalten und fortzusetzen.

Wenn eine pausierte Animation fortgesetzt wird, wird sie dort gestartet, wo sie angehalten wurde, nicht vom Anfang der Animationssequenz.

{{cssinfo}}

## Syntax

```css
/* Einzelne Animation */
animation-play-state: running;
animation-play-state: paused;

/* Mehrere Animationen */
animation-play-state: paused, running, running;

/* Globale Werte */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: unset;
```

### Werte

- `running`
  - : Die Animation läuft aktuell ab.
- `paused`
  - : Die Animation ist aktuell pausiert.

### Formale Syntax

{{csssyntax}}

## Beispiele

Siehe [CSS Animationen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "CSS/CSS_animations") für Beispiele.

## Spezifikationen

| Spezifikation                                                                                                | Status                               | Anmerkung                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS3 Animations', '#animation-play-state', 'animation-play-state')}} | {{Spec2('CSS3 Animations')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.animation-play-state")}}

## Siehe auch

- [CSS Animationen nutzen](/de/docs/Web/Guide/CSS/CSS_Animationen_nutzen "Tutorial about CSS animations")
- {{domxref("AnimationEvent", "AnimationEvent")}}
