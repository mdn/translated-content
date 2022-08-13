---
title: Stapeln mit z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index
tags:
  - CSS
  - Referenz
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index
---
{{cssref}}

Im ersten Teil dieses Artikels, [Stapeln ohne die Eigenschaft](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index) `z-index`, wird erklärt, wie die Stapelung standardmäßig angeordnet wird. Wenn Sie eine benutzerdefinierte Stapelreihenfolge erstellen möchten, können Sie die Eigenzschaft {{cssxref("z-index")}} bei einem [positionierten](/de/docs/Web/CSS/position#Types_of_positioning) Element verwenden.

Die Eigenschaft `z-index` kann mit einem ganzzahligen Wert (positiv, null oder negativ) angegeben werden, der die Position des Elements entlang der z-Achse darstellt. Wenn Sie mit der z-Achse nicht vertraut sind, stellen Sie sich die Seite als einen Stapel von Ebenen vor, von denen jede eine Nummer hat. Die Ebenen werden in numerischer Reihenfolge gerendert, wobei größere Zahlen über kleineren Zahlen stehen.

- unterste Schicht (am weitesten vom Beobachter entfernt)
- ...
- Schicht -3
- Schicht -2
- Schicht -1
- Schicht 0 _(Standard-Renderingschicht)_
- Schicht 1
- Schicht 2
- Schicht 3
- ...
- oberste Schicht _(am nähesten zum Beobachter liegend)_

> **Note:** \* Wenn keine Eigenschaft `z-index` angegeben ist, werden Elemente auf der Standard-Rendering-Ebene 0 (Null) gerendert.
>
> - Wenn mehrere Elemente denselben `z-index` Wert haben (d. h. sie werden auf derselben Ebene platziert), gelten die im Abschnitt [Stapeln ohne z-Index-Eigenschaft](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index) erläuterten Stapelungsregeln.

Im folgenden Beispiel wird die Stapelreihenfolge der Ebenen mithilfe des `z-index` neu angeordnet. Der `z-index` von Element Nr. 5 hat keine Auswirkung, da es sich nicht um ein positioniertes Element handelt.

![Example of stacking rules modified using z-index](/@api/deki/files/912/=Understanding_zindex_03.png)

## Beispiel

### HTML

```html
<div id="abs1">
  <b>DIV #1</b>
  <br />position: absolute;
  <br />z-index: 5;
</div>

<div id="rel1">
  <b>DIV #2</b>
  <br />position: relative;
  <br />z-index: 3;
</div>

<div id="rel2">
  <b>DIV #3</b>
  <br />position: relative;
  <br />z-index: 2;
</div>

<div id="abs2">
  <b>DIV #4</b>
  <br />position: absolute;
  <br />z-index: 1;
</div>

<div id="sta1">
  <b>DIV #5</b>
  <br />no positioning
  <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## Siehe auch

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn der `z-index` nicht verwendet wird.
- [Stapeln mit fließenden Blöcken](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): Wie fließende (`float`) Elemente beim Stapeln behandelt werden.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Document Information

- Author(s): Paolo Lombardi
- This article is the English translation of an article I wrote in Italian for [YappY](http://www.yappy.it). I grant the right to share all the content under the [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/).
- Last Updated Date: November 3, 2014
