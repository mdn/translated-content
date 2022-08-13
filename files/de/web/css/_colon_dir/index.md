---
title: ':dir()'
slug: Web/CSS/:dir
tags:
  - CSS
  - CSS Pseudoklasse
  - Experimentell
  - Referenz
translation_of: Web/CSS/:dir
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die `:dir` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) matcht Elemente basierend auf der Direktionalität des in ihnen beinhalteten Texts. In HTML wird die Richtung durch das {{htmlattrxref("dir", "html")}} Attribut bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache existieren.

Beachte, dass die Verwendung der Pseudoklasse `:dir()` nicht gleichbedeutend mit den `[dir=…]` Attributselektoren ist. Letztere matchen einen Wert von {{htmlattrxref("dir", "html")}} und matchen nicht, falls kein Attribut gesetzt ist, auch wenn in diesem Fall das Elemente den Wert seines Elternelements erbt; ebenso matchen `[dir=rtl]` oder `[dir=ltr]` auch nicht den `auto` Wert, der für das `dir` Attribut verwendet werden kann. Im Gegensatz dazu matcht `:dir()` den vom User Agent berechneten, den geerbten oder den `auto` Wert.

Auch berücksichtigt `:dir()` nur den _semantischen_ Wert der Ausrichtung, der innerhalb des Dokuments definiert wird, normalerweise in HTML. Er berücksichtigt nicht die _Styling_-Ausrichtung, die durch CSS Eigenschaften wie {{cssxref("direction")}}, welche rein stilistisch sind, gesetzt wird.

## Syntax

```css
/* element:dir(directionality) { Stileigenschaften }
   wobei die Richtungn ltr oder rtl ist */

div:dir(ltr) { /* Stileigenschaften */ }
span:dir(rtl) { /* Stileigenschaften */ }
```

## Beispiele

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

In diesem Beispiel matcht `:dir(rtl)` den obersten div, span, welcher `test1` beinhaltet und den div mit den hebräischen Zeichen. `:dir(ltr)` matcht den div, der `test2` beinhaltet.

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#the-dir-pseudo', ':dir()')}} | {{Spec2('CSS4 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.dir")}}

## Siehe auch

- Sprachbezogene Pseudoklassen: {{cssxref(":lang")}}, {{cssxref(":dir")}}
