---
title: Stapeln ohne die Eigenschaft z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
tags:
  - CSS
  - CSS z-index
  - CSS z-index verstehen
  - Fortgeschritten
  - Leitfaden
  - Referenz
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
---
{{cssref}}

Wenn die [CSS](/de/docs/Web/CSS/)-Eigenschaft {{cssxref("z-index")}} bei keinem Element angegeben ist, werden die Elemente in der folgenden Reihenfolge gestapelt (von unten nach oben):

1.  Der Hintergrund und die Ränder des Wurzelelements
2.  Nachfolgende [nicht positionierte](/de/docs/Web/CSS/position) Blöcke, in der Reihenfolge ihres Erscheinens im HTML
3.  Nachfolgende [positionierte](/de/docs/Web/CSS/position) Elemente, in der Reihenfolge ihres Erscheinens in der HTML-Datei

Beachten Sie, dass die CSS-Eigenschaft {{cssxref("order")}}, wenn sie das Rendering von der "Reihenfolge des Erscheinens im HTML" innerhalb von {{cssxref("flex")}}-Containern ändert, auch die Reihenfolge für den Stapelkontext beeinflusst.

Im folgenden Beispiel sind die Elemente #1 bis #4 positionierte Elemente. Element Nr. 5 ist statisch und wird daher unter den anderen vier Elementen gezeichnet, obwohl es im HTML-Markup später kommt.

![Figure 1. Exemple de règles d'empilement sans propriété z-index](/@api/deki/files/1448/=Understanding_zindex_01.png)

## Quellcode für das Beispiel

### HTML

```html
<div id="abs1" class="absolute">
  <b>DIV #1</b><br />position: absolute;</div>
<div id="rel1" class="relative">
  <b>DIV #2</b><br />position: relative;</div>
<div id="rel2" class="relative">
  <b>DIV #3</b><br />position: relative;</div>
<div id="abs2" class="absolute">
  <b>DIV #4</b><br />position: absolute;</div>
<div id="sta1" class="static">
  <b>DIV #5</b><br />position: static;</div>
```

### CSS

```css
b {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## Siehe auch

- [Stapeln mit fließenden Blöcken:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float) Wie fließende (`float`) Elemente beim Stapeln behandelt werden.
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 2:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2) 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 3. November 2004
