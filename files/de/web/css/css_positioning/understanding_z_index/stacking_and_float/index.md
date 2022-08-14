---
title: Stapeln mit fließenden Blöcken
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
tags:
  - CSS
  - CSS z-index
  - CSS z-index verstehen
  - Fortgeschritten
  - Leitfaden
  - Referenz
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
---
{{cssref}}

Bei fließenden Blöcken ([`float`](/de/docs/Web/CSS/float)) ist die Stapelreihenfolge ein wenig anders. Fließende Blöcke werden zwischen nicht positionierten Blöcken und positionierten Blöcken platziert:

1.  Der Hintergrund und die Ränder des Wurzelelements
2.  Nachfolgende [nicht positionierte](/de/docs/Web/CSS/position#Types_of_positioning) Blöcke, in der Reihenfolge ihres Erscheinens im HTML
3.  Fließende Blöcke
4.  Nachfolgende [positionierte](/de/docs/Web/CSS/position#Types_of_positioning) Elemente, in der Reihenfolge ihres Erscheinens in der HTML-Datei

Wie Sie im Beispiel unten sehen können, sind Hintergrund und Rahmen des nicht positionierten Blocks (DIV #4) von fließenden Blöcken völlig unbeeinflusst, der Inhalt ist jedoch betroffen. Dies geschieht gemäß dem Standard-Float-Verhalten. Dieses Verhalten kann mit einer zusätzlichen Regel in der obigen Liste dargestellt werden:

1.  Der Hintergrund und die Ränder des Wurzelelements
2.  Nachfolgende [nicht positionierte](/de/docs/Web/CSS/position#Types_of_positioning) Blöcke, in der Reihenfolge ihres Erscheinens im HTML
3.  Schwebende Blöcke
4.  Nachfolgende [nicht-positionierte](/de/docs/Web/CSS/position#Types_of_positioning) Inline-Elemente
5.  Nachfolgende [positionierte](/de/docs/Web/CSS/position#Types_of_positioning) Elemente, in der Reihenfolge ihres Erscheinens in der HTML

![Example of stacking rules with floating boxes](/@api/deki/files/911/=Understanding_zindex_02.png)

> **Note:** **Hinweis:** Wenn ein Deckkraftwert ([`opacity`](/de/docs/Web/CSS/opacity)) auf den nicht positionierten Block (DIV #4) angewendet wird, passiert etwas Seltsames: Der Hintergrund und der Rand dieses Blocks ragen über die schwebenden Blöcke und die positionierten Blöcke hinaus. Das liegt an einem besonderen Teil der Spezifikation: Das Anwenden eines Deckkraftwerts erzeugt einen neuen Stapelkontext (siehe [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Quellcode für das Beispiel

### HTML

```html
<div id="abs1">
  <b>DIV #1</b><br />position: absolute;</div>

<div id="flo1">
  <b>DIV #2</b><br />float: left;</div>

<div id="flo2">
  <b>DIV #3</b><br />float: right;</div>

<br />

<div id="sta1">
  <b>DIV #4</b><br />no positioning</div>

<div id="abs2">
  <b>DIV #5</b><br />position: absolute;</div>

<div id="rel1">
  <b>DIV #6</b><br />position: relative;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}

#rel1 {
  position: relative;
  border: 1px dashed #996;
  background-color: #cff;
  margin: 0px 10px 0px 10px;
  text-align: left;
}
```

## See also

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln mit z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 2:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2) 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 3. November 2004
