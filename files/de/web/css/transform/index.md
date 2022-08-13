---
title: transform
slug: Web/CSS/transform
tags:
  - CSS
  - CSS-Eigenschaft
  - Referenz
  - Transfomation
  - recipe:css-property
translation_of: Web/CSS/transform
---
{{CSSRef}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`transform`** können Sie ein Element drehen, skalieren, schräg stellen oder übersetzen. Sie modifiziert den Koordinatenraum des CSS [visuellen Formatierungsmodells](/de/docs/Web/CSS/Visual_formatting_model).

{{EmbedInteractiveExample("pages/css/transform.html")}}

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stapelkontext](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) erstellt. In diesem Fall fungiert das Element als ein enthaltender Block für alle `position: fixed;` oder `position: absolute;` Elemente, die es enthält.

> **Warning:** Nur transformierbare Elemente können transformiert werden. Das heißt, alle Elemente, deren Layout durch das CSS-Box-Modell geregelt wird, mit Ausnahme von: [nicht ersetzten Inline-Boxen](/de/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [Tabellen-Spalten-Boxen](/de/docs/Web/HTML/Element/col) und [Tabellen-Spalten-Gruppen-Boxen](/de/docs/Web/HTML/Element/colgroup).

## Syntax

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

Die Eigenschaft `transform` kann entweder als Schlüsselwortwert [`none`](/de/docs/Web/CSS/transform$edit#none) oder mehrere[`<transform-function>`](/de/docs/Web/CSS/transform$edit#<transform-function>) -Werte angegeben werden.

> **Note:** **Hinweis:** Wenn {{cssxref("transform-function/perspective", "perspective()")}} einer von mehreren Funktionswerten ist, muss er zuerst aufgeführt werden.

### Werte

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere der [CSS-Transformationsfunktionen](/de/docs/Web/CSS/transform-function), die angewendet werden sollen. Die Transformationsfunktionen werden in der Reihenfolge von links nach rechts multipliziert, was bedeutet, dass zusammengesetzte Transformationen effektiv in der Reihenfolge von rechts nach links angewendet werden.
- `none`
  - : Specifies that no transform should be applied.

## Bedenken hinsichtlich der Zugänglichkeit

Skalierungs-/Zoom-Animationen sind problematisch für die Barrierefreiheit, da sie ein häufiger Auslöser für bestimmte Arten von Migräne sind. Wenn Sie solche Animationen auf Ihrer Website einbinden müssen, sollten Sie ein Steuerelement bereitstellen, mit dem Benutzer Animationen abschalten können, vorzugsweise site-wide.

Ziehen Sie außerdem in Erwägung, die Medienfunktion {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} zu nutzen - verwenden Sie sie, um eine [Media Queries](/de/docs/Web/CSS/Media_Queries) zu schreiben, die Animationen ausschaltet, wenn der Benutzer in seinen Systemeinstellungen reduzierte Animationen angegeben hat.

Erfahren Sie mehr:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

### Verschieben und Drehen eines Elements

#### HTML

```html
<div>Transformed element</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### Ergebnis

{{EmbedLiveSample("Translating_and_rotating_an_element", "400", "160")}}

### Mehr Beispiele

Weitere Beispiele finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_Transforms/CSS_Transformationen_verwenden) und {{cssxref("&lt;transform-function&gt;")}}.

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Kommentar                                 |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| {{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}} | {{Spec2('CSS Transforms 2')}} | Zusätzliche 3D Transformationsfunctionen. |
| {{SpecName('CSS3 Transforms', '#transform-property', 'transform')}}     | {{Spec2('CSS3 Transforms')}}     | Ursprünglich Definition.                  |

## Browser-Kompatibilität

{{Compat("css.properties.transform")}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/CSS/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} Datentyp mit allen Transformationsfunktionen erklärt.
- Online-Tool zur Visualisierung von CSS Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
- {{cssxref ('matrix')}}
- {{cssxref ('matrix3d')}}
- {{cssxref ('perspective')}}
- {{cssxref ('rotate')}}
- {{cssxref ('scale')}}
- {{cssxref ('skew')}}
