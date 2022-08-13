---
title: <em>
slug: Web/HTML/Element/em
translation_of: Web/HTML/Element/em
---
## Übersicht

Das HTML Element _Emphasis_ **\<em>** stellt das eingeschlossene Wort _kursiv_ dar. Wenn das **`<em>`** ein Nachfahr von _\<strong>_ ist, wird dessen Text sowohl _kursiv_ als auch **fett** dargestellt.

> **Note:** **Anmerkung:** Normalerweise wird dieses Element in kursiv Schrift angezeigt. Sie können mit CSS jeden Text fett oder kursiv ausgeben und auch die Standartformatierung eines Browsers für die Elemente wie \<strong> und \<em> überschreiben. Verwenden Sie \<cite> Elemente für Zitate oder Quellenverweise. Man nimmt es z.B. für Titel oder Bücher, Namen eines Lieds oder ein Konzert, Theaterstück usw. ; \<cite> ist nur für die Quelle gedacht, nicht für das, was Sie daraus zitieren. Verwenden Sie \<strong> Element um einen wichtigen Text zu kennzeichnen, während \<em> die Betonung vermittelt. Sie verwenden sie je nach inhaltlicher Anforderung einzeln oder zusammen.

| Inhaltsverzeichnis      | fließender Inhalt, gestaltender Inhalt, eindeutiger Inhalt                                                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nicht erlaubter Inhalt  | Ausdrucksinhalt                                                                                                                                                                    |
| Tag wegfall             | keiner ; kleine Anmerkung= Tag in diesem Sinne heisst "Schlagwort", im Zusammenhang mit HTML belasse ich das Wort TAG im Orginalen, zum besseren Verständnis.                      |
| Erlaubtes Elternelement | Alle Elemente die Inhaltsformulierung akzeptieren                                                                                                                                  |
| DOM interface           | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implementiert die {{domxref("HTMLSpanElement")}} Schnittstelle für dieses Element. |

## Attributes

Dieses Element beinhaltet nur die [globalen Eigenschaften](/de/docs/Web/HTML/Global_attributes).

## Example

Das Element \<em> wird oft verwendet, um einen impliziten oder expliziten Kontrast anzugeben.

```html
<p>
  In HTML 5, what was previously called <em>blockorientiert</em> content is now called <em>dynamisch</em> content.
</p>
```

### Result

In HTML 5 wird der Inhalt, der zuvor als \_blockorientiert_er-Inhalt bezeichnet wurde, wird jetzt als \_dynamisch_er-Inhalt bezeichnet.

## \<i> vs. \<em>

Es ist für neue Entwickler oft verwirrend, warum es so viele Elemente gibt, um die Betonung auf etwas Text auszudrücken. \<i> und \<em> sind vielleicht eine der häufigsten. Warum sollten Sie \<em> \</ em> vs \<i> \</ i> verwenden? Sie produzieren genau das gleiche Ergebnis, nicht wahr?

Nicht genau. Das visuelle Ergebnis ist standardmäßig das gleiche - beide Tags(_Schlagwörter_) rendern den Inhalt kursiv. Aber die semantische Bedeutung ist anders. Das \<em> -Tag stellt die Betonung des Inhalts dar, während das \<i> -Tag Text darstellt, der von der normalen Prosa abgesetzt wird, wie z. B. der Name eines Films oder Buchs, ein Fremdwort oder wenn sich der Text auf die Definition eines Wortes statt seiner semantischen Bedeutung.

Ein Beispiel für \<em> könnte lauten: "Just _do_ it already!", oder: "We _had_ to do something about it". Eine Person oder Software, die den Text liest, würde die Wörter in Kursivschrift mit Betonung aussprechen.

Ein Beispiel für \<i> könnte sein: "The _Queen Mary_ sailed last night". Hier gibt es keine zusätzliche Betonung oder Bedeutung für das Wort "Queen Mary". Es wird lediglich angedeutet, dass es sich nicht um eine Königin namens Mary handelt, sondern um ein Schiff namens Queen Mary. Ein weiteres Beispiel für \<i> könnte sein: "The word _the_ is an article"

## Specifications

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-em-element', '&lt;em&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-em-element', '&lt;em&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;em&gt;')}}                         | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}

## See also

- HTMLElement i

HTML Referenz
