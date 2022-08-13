---
title: '::selection'
slug: Web/CSS/::selection
tags:
  - CSS
  - CSS Pseudoelement
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/::selection
---
{{CSSRef}}

## Übersicht

Das `::selection` [CSS](/de/docs/Web/CSS) Pseudoelement weist dem durch den Benutzer ausgewählten Bereich (z. B. mit der Maus oder einem anderen Zeigegerät) eines Dokuments Regeln zu.

Nur ein kleiner Teil der CSS Eigenschaften kann innerhalb einer Regel benutzt werden, die `::selection` in ihrem Selektor verwendet: {{cssxref("color")}}, {{cssxref("background")}}, {{cssxref("background-color")}} und {{cssxref("text-shadow")}}. Zu beachten ist insbesondere, dass {{cssxref("background-image")}} ignoriert wird, sowie alle anderen Eigenschaften.

> **Note:** {{cssxref("text-shadow")}} in `::selection` wird von Chrome, Safari und Firefox 17+ unterstützt.

> **Note:** Obwohl dieses Pseudoelement in Entwürfen von CSS Selektoren Level 3 war, wurde es während der Candidate Recommendation Phase entfernt, da sein Verhalten nicht genau definiert erschien, besonders in Beziehung zu verschachtelten Elementen, und Interoperabilität war nicht gegeben [(auf Grundlage einer Diskussion in der W3C Style Mailingliste)](http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html).
>
> Das `::selection` Pseudoelement wurde in [Pseudo-Elements Level 4](http://dev.w3.org/csswg/css-pseudo-4/) wieder hinzugefügt.

## Beispiel

Gecko ist die einzige Engine, die einen Präfix benötigt. Dadurch, dass die CSS Parsingregeln verlangen, dass die gesamte Regel verworfen wird, falls ein ungültiges Pseudoelement gefunden wird, müssen zwei separate Regeln geschrieben werden: `::-moz-selection, ::selection {...}`. Die Regel würde von nicht-Gecko Browsern verworfen werden, da `::-moz-selection` für sie ungültig ist.

#### HTML

```html
<div>Dies ist etwas Text für dich, um CSS' ::selection Pseudoklasse zu testen.</div>
<p>Versuche auch, etwas Text in diesem &lt;p&gt;</p> zu markieren
```

#### CSS

```css
/* Zeichnet jeden markierten Text gelb auf rotem Hintergrund */
::-moz-selection {
  color: gold; background: red;
}

::selection {
  color: gold; background: red;
}

/* Zeichnet markierten Text innerhalb von Absätzen weiß auf schwarz */
p::-moz-selection {
  color: white;
  background: black;
}

p::selection {
  color: white;
  background: black;
}
```

#### Output

{{EmbedLiveSample('Beispiel')}}

## Spezifikationen

| Spezifikation                                                                                            | Status                                       | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------ |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-selection', '::selection')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Ursprüngliche Definition |

Das `::selection` CSS Pseudoelement wurde für _CSS Selectors Level 3_ entworfen, aber entfernt bevor die Spezifikation Empfehlungsstatus erreicht hat. Es wurde als Teil des _Pseudo-Elements Level 4_ Entwurfs wieder hinzugefügt.

## Browser Kompatibilität

{{Compat("css.selectors.selection")}}
