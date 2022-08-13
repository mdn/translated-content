---
title: ':root'
slug: Web/CSS/:root
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - NeedsExample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:root
---
{{CSSRef}}

## Übersicht

Mit dem <kbd>:root</kbd>-Selektor kannst Du das oberste "Elternelement" im DOM oder die Dokumentstruktur als Ziel festlegen. Es ist in der Spezifikation der CSS Selectors Level 3 als „strukturelle Pseudoklasse“ definiert, was bedeutet, dass Inhalt basierend auf seiner Beziehung zu übergeordneten und gleichgeordneten Inhalten gestaltet wird.

In der überwiegenden Mehrheit der Fälle, auf die Du wahrscheinlich stößt, gilt Folgendes: <kbd>:root</kbd> bezieht sich auf das <kbd>&#x3C;html></kbd> -Element einer Webseite. In einem HTML-Dokument ist das HTML-Element immer das übergeordnete Element der höchsten Ebene, sodass das Verhalten von <kbd>:root</kbd> vorhersehbar ist. Da CSS jedoch eine Stilsprache ist, die mit anderen Dokumentformaten wie SVG und XML verwendet werden kann, kann die <kbd>:root</kbd>-Pseudoklasse in diesen Fällen auf andere Elemente verweisen. Unabhängig von der Auszeichnungssprache wählt <kbd>:root</kbd> immer das oberste Element des Dokuments in der Dokumentstruktur aus.

## Spezifikationen

| Spezifikation                                                            | Status                               | Kommentar                |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.root")}}
