---
title: transition
slug: Web/CSS/transition
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Transitions
  - Referenz
translation_of: Web/CSS/transition
---
{{CSSRef}}

Die **`transition`** [CSS ](/en/CSS "CSS")Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) für {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }} und {{ cssxref("transition-delay") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Übergänge erlauben Ihnen, den Übergang zwischen zwei Stati eines Elements zu betimmen. Verschiedene Stati können etwa durch das Nutzen von [pseudo-classes](/de/docs/Web/CSS/Pseudo-classes "/en-US/docs/CSS/Pseudo-classes") wie {{cssxref(":hover")}} oder {{cssxref(":active")}} bestimmt oder dynamisch durch JavaScript gesetzt werden.

## Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

Die `transition` Eigenschaft wird durch eine einzelne Eigenschaft oder durch mehrere Eigenschaften von transitions ausgezeichnet. Mehrere Eigenschaften müssen durch Kommas getrennt werden.

Jede einzelne transition Eigenschaft beschreibt die transition, die auf eine einzelne Eigenschaft (oder die speziellen Werte `all` und `none`) angewandt werden soll. Das bezieht mit ein:

- kein oder ein Wert repräsentiert die Eigenschaft, auf welche die transition angewandt werden soll. Diese Eigenschaft kann eine der folgenden sein:

  - das Schlüsselwort `none`
  - das Schlüsselwort `all`
  - ein {{cssxref("&lt;custom-ident&gt;")}}, das eine CSS Eigenschaft nennt.

- kein oder ein {{cssxref("&lt;single-transition-timing-function&gt;")}} Wert, der die zu benutzende timing function definiert
- kein, ein oder zwei {{cssxref("&lt;time&gt;")}} Werte. Der erste Wert, der als Zeit geparst werden kann, wird der {{cssxref("transition-duration")}} zugewiesen. Der zweite als Zeit parsbare Wert wird der {{cssxref("transition-delay")}} zugewiesen.

Sehen Sie [wie Dinge gehandhabt werden](/de/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#When_property_value_lists_are_of_different_lengths "en/CSS/CSS transitions#When property value lists are of different lengths"), wenn die Liste der Eigenschaftswerte nicht unterschiedliche Länge haben. Die Kurzfassung ist, dass zusätzliche transition Beschreibungen ignoriert werden, wenn sie die Anzahl der Eigenschaften überschreiten.

### Formale Syntax

{{csssyntax}}

## Beispiele

Es gibt viele weitere Beispiele über CSS transitions in dem Hauptartikel über [CSS transitions](/de/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions "en/CSS/CSS transitions").

## Spezifikationen

| Spezifikation                                                                                                | Status                                   | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{ SpecName('CSS3 Transitions', '#transition-shorthand-property', 'transition') }} | {{ Spec2('CSS3 Transitions') }} | Ursprüngliche Definition |

## Browserkompatibilität

{{Compat("css.properties.transition")}}

## Siehe auch

- [Verwendung von CSS transitions](/de/docs/CSS/Using_CSS_transitions "en/CSS/CSS transitions")
- {{ domxref("TransitionEvent") }}
