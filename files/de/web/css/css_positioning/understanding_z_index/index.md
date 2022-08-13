---
title: CSS z-index verstehen
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - Advanced
  - CSS
  - Guide
  - NeedsTranslation
  - Reference
  - TopicStub
  - Understanding_CSS_z-index
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index
---
{{cssref}}

In den meisten einfachen Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden, da Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Rendering-Fluss, und der Prozess kennt den Platz, den jedes Elemente einimmt. Mit dem Attribut {{cssxref("z-index")}} können Sie die Reihenfolge der Schichtung von Objekten beim Rendern von Inhalten verändern.

> In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Zusätzlich zu ihrer horizontalen und vertikalen Position liegen die Boxen entlang einer "Z-Achse" und werden übereinander formatiert. Die Positionen der Z-Achse sind besonders relevant, wenn sich Boxen visuell überlappen.

(von [CSS 2.1 Section 9.9.1 - Layered presentation](http://www.w3.org/TR/CSS21/visuren.html#z-index))

Das bedeutet, dass Sie mit CSS-Stilregeln Boxen auf Ebenen zusätzlich zur normalen Rendering-Ebene (Ebene 0) positionieren können. Die Z-Position jeder Ebene wird als Ganzzahl ausgedrückt, die die Stapelreihenfolge für das Rendering darstellt. Größere Zahlen bedeuten näher am Betrachter. Die Z-Position kann mit der CSS-Eigenschaft [`z-index`](/de/docs/Web/CSS/z-index) gesteuert werden

Die Verwendung von `z-index` erscheint extrem einfach: eine einzelne Eigenschaft, der eine einzelne Ganzzahl zugewiesen ist, mit einem leicht verständlichen Verhalten. Wenn z-index jedoch auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten schwer zu verstehen oder vorherzusagen sein. Das liegt an den komplexen Stapelungsregeln. In der Tat wurde in der CSS-Spezifikation [CSS-2.1 Anhang E](http://www.w3.org/TR/CSS21/zindex.html) ein eigener Abschnitt reserviert, um diese Regeln besser zu erklären.

Dieser Artikel wird versuchen, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

1. [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Stapeln mit schwebenden Blöcken](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): Wie schwebende Elemente beim Stapeln behandelt werden.
3. [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
4. [Der S](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)[tapelungskontext](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): Hinweise zum Stacking-Kontext.
5. [Stapelungskontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
6. [Sta](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2)[pelungsk](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1)[ontext-Beispiel 2](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
7. [Sta](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3)[pelungsk](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1)[ontext-Beispiel 3](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 9. Juli 2005

_Anmerkung des Autors: Danke an Wladimir Palant und Rod Whiteley für die Rezension._
