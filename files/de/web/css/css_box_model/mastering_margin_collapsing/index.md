---
title: Zusammenfallen von Außenabständen meistern
slug: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
tags:
  - CSS
  - CSS Boxmodell
  - Referenz
translation_of: Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
original_slug: Web/CSS/CSS_Boxmodell/Zusammenfallen_von_Außenabständen_meistern
---
{{CSSRef}}

[Obere](/de/docs/Web/CSS/margin-top) und [untere](/de/docs/Web/CSS/margin-bottom) Außenabstände von Blöcken werden manchmal zu einem einzelnen Außenabstand zusammengefasst (kollabiert), dessen Größe der größte der Außenabstände ist, die in ihm zusammengefasst werden, ein Verhalten bekannt als **Außenabstandszusammenfassung** (engl. margin collapsing).

Außenabstandszusammenfassung tritt in drei grundlegenden Fällen auf:

- Angrenzende Geschwisterelemente
  - : Die Außenabstände von angrenzenden Geschwisterelementen werden zusammengefasst (außer, wenn des nachfolgende Geschwisterelement nach Seitenumflüssen [freigestellt](/de/docs/Web/CSS/clear) ist). Zum Beispiel:```html
     <p>Der untere Außenabstand dieses Absatzes fällt ...</p>
     <p>...mit dem oberen Außenabstand dieses Absatzes zusammen.</p>
    ```
- Eltern- und erstes/letztes Kindelement
  - : Falls es keinen Rahmen, Innenabstand, Inlineinhalt oder _[Freilegung](/de/docs/Web/CSS/clear)_ gibt, um den {{cssxref("margin-top")}} eines Blocks vom {{cssxref("margin-top")}} seines ersten Kindblocks zu trennen, oder keinen Rahmen, Innenabstand Inlineinhalt, {{cssxref("height")}}, {{cssxref("min-height")}} oder {{cssxref("max-height")}} gibt, um den {{cssxref("margin-bottom")}} des Blocks vom {{cssxref("margin-bottom")}} seines letzten Kindelements zu trennen, dann fallen diese Außenabstände zusammen. Der zusammengefallene Außenabstand verläuft dabei außerhalb des Elternelements.
- Leere Blöcke
  - : Falls es keinen Rahmen, Innenabstand, Inlineinhalt, {{cssxref("height")}} oder {{cssxref("min-height")}} gibt, um den {{cssxref("margin-top")}} des Blocks vom {{cssxref("margin-bottom")}} zu trennen, fallen sein oberer und unterer Außenabstand zusammen.

Kompliziertere Außenabstandszusammenfassung (von mehr als zwei Außenabständen) tritt auf, wenn diese Fälle kombiniert werden.

Diese Regeln gelten sogar für Außenabstände, die null sind, sodass ein Außenabstand eines ersten/letzten Kinds sich (gemäß den oben genannten Regeln) am Ende außerhalb seines Elternelements befindet, unabhängig davon, ob der Außenabstand des Elternelements null ist oder nicht.

Falls negative Außenabstände involviert sind, ist die Größe des zusammengefassten Außenabstands die Summe des größten positiven Abstands und dem kleinsten (meist negativen) negativen Abstands.

Außenabstände von [umfließenden](/de/docs/Web/CSS/float) und [absolut positionierten](/de/docs/Web/CSS/position) Elementen werden niemals zusammengefasst.

## Spezifikationen

| Spezifikation                                                                                        | Status                   | Kommentar                |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName("CSS2.1", "box.html#collapsing-margins", "margin collapsing")}} | {{Spec2("CSS2.1")}} | Ursprüngliche Definition |

## Siehe auch

- [CSS Referenz](/de/docs/Web/CSS/CSS_Referenz)
