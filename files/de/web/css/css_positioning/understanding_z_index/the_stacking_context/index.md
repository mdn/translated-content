---
title: Der Stapelkontext
slug: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
tags:
  - CSS
  - CSS Positionierung
  - Position
  - Referenz
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
---
{{cssref}}

Der **Stapelkontext** ist eine dreidimensionale Konzeptualisierung von HTML-Elementen entlang einer imaginären z-Achse relativ zum Benutzer, von dem angenommen wird, dass er dem Ansichtsfenster oder der Webseite zugewandt ist. HTML-Elemente füllen diesen Raum in Prioritätsreihenfolge auf der Grundlage von Elementattributen aus.

## Der Stapelkontext

Im vorherigen Teil dieses Artikels, die Verwendung von {{cssxref("z-index")}}, wird die Darstellungsreihenfolge bestimmter Elemente durch ihren `z-index` Wert beeinflusst. Dies ist darauf zurückzuführen, dass diese Elemente spezielle Eigenschaften haben, die dazu führen, dass sie einen Stapelkontext bilden.

Ein Stapelkontext wird an beliebiger Stelle im Dokument durch ein beliebiges Element in den folgenden Szenarien gebildet:

- Root Element des Dokumentes (`<html>`).
- Ein Element mit einem {{cssxref("position")}} Wert `absolute` oder `relative` und einem {{cssxref("z-index")}} Wert anders als `auto`.
- Ein Element mit einem {{cssxref("position")}} Wert `fixed` oder `sticky` (`sticky` für alle mobilen Browser, aber nicht für ältere Desktops).
- Ein Element das als Kind eines Flex-Container ({{cssxref("flexbox")}}), mit einem {{cssxref("z-index")}} Wert anders als `auto`.
- Ein Element das als Kind eines Grid-Container ({{cssxref("grid")}}), mit einem {{cssxref("z-index")}} Wert anders als `auto`.
- Ein Element mit einem {{cssxref("opacity")}} Wert unter `1` (siehe auch [die Spezifikation für opacity](http://www.w3.org/TR/css3-color/#transparency)).
- Ein Element mit einem {{cssxref("mix-blend-mode")}} Wert anders als `normal`.
- Element with any of the following properties with Wert anders als `none`:

  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Ein Element mit einem {{cssxref("isolation")}} Wert `isolate`.
- Ein Element mit einem {{cssxref("-webkit-overflow-scrolling")}} Wert `touch`.
- Ein Element mit einem {{cssxref("will-change")}} Wert, der irgendeine Eigenschaft angibt, die einen Stapelkontext auf einem nicht initialen Wert erzeugen würde (siehe auch [this post](http://dev.opera.com/articles/css-will-change-property/)).
- Ein Element mit einem {{cssxref("contain")}} Wert `layout` oder `paint` oder einen zusammengesetzten Wert, der einen von beiden enthält (d.h. `contain: strict`, `contain: content`).

Innerhalb eines Stapelkontext werden die untergeordneten Elemente nach den gleichen Regeln gestapelt, die zuvor erläutert wurden. Wichtig ist, dass die `z-index `Werte der untergeordneten Stapelkontexte nur in diesem übergeordneten Kontext eine Bedeutung haben. Stapelkontexte werden im übergeordneten Stapelkontext atomar als eine einzige Einheit behandelt.

Zusammengefasst:

- Stapelkontexte können in anderen Stapelkontexten enthalten sein und zusammen eine Hierarchie von Stapelkontexten bilden.
- Jeder Stapelkontext ist völlig unabhängig von seinen Geschwistern: Bei der Verarbeitung des Stapels werden nur nachkommende Elemente berücksichtigt.
- Jeder Stapelkontext ist in sich geschlossen: Nachdem der Inhalt des Elements gestapelt wurde, wird das gesamte Element in der Stapelreihenfolge des übergeordneten Stapelkontextes betrachtet.

> **Note:** **Hinweis:** Die Hierarchie der Stapelkontexte ist eine Teilmenge der Hierarchie der HTML-Elemente, da nur bestimmte Elemente Stapelkontexte erzeugen. Man kann sagen, dass Elemente, die keinen eigenen Stapelkontext bilden, vom übergeordneten Stapelkontext _assimiliert_ werden.

## Das Beispiel

![Example of stacking rules modified using z-index](/@api/deki/files/913/=Understanding_zindex_04.png)

In diesem Beispiel erzeugt jedes positionierte Element aufgrund seiner Positionierung und seiner `z-index` -Werte einen eigenen Stapelkontext. Die Hierarchie der Stapelkontext ist wie folgt organisiert:

- Root

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Es ist wichtig zu beachten, dass DIV #4, DIV #5 und DIV #6 Kinder von DIV #3 sind, so dass das Stapeln dieser Elemente innerhalb von DIV #3 vollständig aufgelöst wird. Sobald das Stapeln und Rendern innerhalb von DIV #3 abgeschlossen ist, wird das gesamte DIV #3-Element für das Stapeln im Wurzelelement in Bezug auf das DIV seines Geschwisters übergeben.

> **Note:** **Notes:\*** DIV #4 wird unter DIV #1 gerendert, weil der z-Index (5) von DIV #1 innerhalb des Stapelkontextes des Wurzelelementes gültig ist, während der z-Index (6) von DIV #4 innerhalb des Stapelkontextes von DIV #3 gültig ist. DIV #4 ist also unter DIV #1, weil DIV #4 zu DIV #3 gehört, das einen niedrigeren z-Indexwert hat.
>
> - Aus dem gleichen Grund wird DIV #2 (z-Index 2) unter DIV#5 (z-Index 1) gerendert, weil DIV #5 zu DIV #3 gehört, das einen höheren z-Index-Wert hat.
> - Der z-Index von DIV #3 ist 4, aber dieser Wert ist unabhängig vom z-Index von DIV #4, DIV #5 und DIV #6, da er zu einem anderen Stapelkontext gehört.
> - Eine einfache Möglichkeit, die Rendering-Reihenfolge von gestapelten Elementen entlang der Z-Achse herauszufinden, besteht darin, sie sich als eine Art "Versionsnummer" vorzustellen, wobei untergeordnete Elemente Minor-Versionsnummern unter den Major-Versionsnummern ihrer übergeordneten Elemente sind. Auf diese Weise können wir leicht erkennen, wie ein Element mit einem z-Index von 1 (DIV #5) über einem Element mit einem z-Index von 2 (DIV #2) gestapelt wird, und wie ein Element mit einem z-Index von 6 (DIV #4) unter einem Element mit einem z-Index von 5 (DIV #1) gestapelt wird. In unserem Beispiel (sortiert nach der endgültigen Rendering-Reihenfolge):
>
>   - Root
>
>     - DIV #2 - z-index is 2
>     - DIV #3 - z-index is 4
>
>       - DIV #5 - z-index ist 1, gestapelt unter einem Element mit einem z-Index von 4, was eine Rendering-Reihenfolge von 4,1 ergibt
>       - DIV #6 - z-index ist 3, gestapelt unter einem Element mit einem z-Index von 4, was eine Rendering-Reihenfolge von 4,3 ergibt
>       - DIV #4 - z-index ist 6, gestapelt unter einem Element mit einem z-Index von 4, was zu einer Rendering-Reihenfolge von 4,6 führt
>
>     - DIV #1 - z-index is 5

## Beispiel

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code>position: relative;<br/>
  z-index: 5;</code>
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code>position: relative;<br/>
  z-index: 2;</code>
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code>position: relative;<br/>
    z-index: 6;</code>
  </div>

  <h1>Division Element #3</h1>
  <code>position: absolute;<br/>
  z-index: 4;</code>

  <div id="div5">
    <h1>Division Element #5</h1>
    <code>position: relative;<br/>
    z-index: 1;</code>
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code>position: absolute;<br/>
    z-index: 3;</code>
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font: 12px/20px Arial, sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

#### Ergebnis

{{ EmbedLiveSample('Example', '100%', '396') }}

## Siehe auch

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn der `z-index` nicht verwendet wird.
- [Stapeln mit fließenden Blöcken](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): Wie fließende Elemente (`float`) beim Stapeln behandelt werden.
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 9. Juli 2005
