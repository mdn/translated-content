---
title: transition-property
slug: Web/CSS/transition-property
tags:
  - CSS
  - CSS Animationen
  - CSS Übergänge
  - Reference
  - Référence(2)
translation_of: Web/CSS/transition-property
---
{{CSSRef("CSS Transitions")}}

## Übersicht

Die CSS Eigenschaft `transition-property` wird verwendet, um den [Übergangseffekte](/de/docs/Web/Guide/CSS/Using_CSS_transitions) auf bestimmte CSS Eigenschaften anzuwenden.

> **Note:** **Hinweis:** Die Eigenschaften, die animiert werden können, könnten sich unter Umständen ändern. Eigenschaften, die bis jetzt noch nicht animierbar sind, sollten nicht angegeben werden, da sie vielleicht eines Tages animierbar sein werden, und es dann unerwartete Auswirkungen haben könnte.

Wird eine Kurzform einer CSS Eigenschaft (zum Beispiel {{cssxref("background")}}) angegeben, so werden alle Untereigenschaften (zum Beispiel {{cssxref("background-color")}}), wenn diese animierbar sind, ebenfalls animiert.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property: all, -moz-specific, sliding;

/* Globale Werte */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

### Werte

- `none`
  - : Keine Eigenschaften werden animiert.
- `all`
  - : An allen animierbaren Eigenschaften werden Übergangsanimationen angewant.
- `IDENT`
  - : Zeichenkette, die eine Eigenschaft bezeichnet, an der bei einer Änderung des Wertes der jeweiligen Eigenschaft, eine Übergangsanimation angewant werden soll. Die Groß- und Kleinschreibung des Eingenschaftsnamen wird ignoriert. Ein Eigenschaftsname darf nur alphabetische (`a` bis `z)` und numerische (`0` bis `9) Zeichen`, sowie Unter- (`_`) und Bindestriche(`-`) erhalten. Das erste Zeichen, das kein Bindestrich ist, muss ein alphabetisches Zeichen sein (Es darf keine Zahl am Anfang stehen, auch wenn kein Bindestrich vorangestellt wurde). Der Eigenschaftsname darf ebenfalls nicht mit zwei Bindestrichen beginnen.

### Formale Syntax

{{csssyntax}}

## Beispiele

Es gibt mehrere Beispiele von CSS Übergängen im [CSS Animationen](/de/docs/Web/Guide/CSS/Using_CSS_transitions) Hauptartikel.

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Komentar            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('CSS3 Transitions', '#transition-property', 'transition-property')}} | {{Spec2('CSS3 Transitions')}} | Initiale definition |

## Browser Kompatibilität

{{Compat("css.properties.transition-property")}}

## Siehe auch

- [CSS Animationen nutzen](/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
