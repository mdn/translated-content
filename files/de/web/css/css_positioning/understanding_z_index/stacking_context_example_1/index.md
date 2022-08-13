---
title: Stapelkontext Beispiel 1
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1
---
{{cssref}}

« [CSS](/de/docs/Web/CSS) « [Understanding CSS z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index "Understanding CSS z-index")

## Stapelkontext Beispiel 1

Lassen Sie uns mit einem einfachen Beispiel beginnen. Im Wurzel-Stapelkontext haben wir zwei DIVs (DIV #1 und DIV #3), beide relativ positioniert, aber ohne {{cssxref("z-index")}} Eigenschaften. Innerhalb von DIV #1 befindet sich ein absolut positioniertes DIV #2, während sich in DIV #3 ein absolut positioniertes DIV #4 befindet, beide ohne `z-index` Eigenschaften.

Der einzige Stapelkontext ist der Root-Kontext. Ohne z-indizes werden die Elemente in der Reihenfolge ihres Auftretens gestapelt.

![Stacking context example 1](/@api/deki/files/914/=Understanding_zindex_05a.png)

Wenn DIV #2 ein positiver `z-index` Wert (nicht Null und nicht automatisch) zugewiesen wird, wird es über allen anderen DIVs gerendert.

![Stacking context example 1](/@api/deki/files/915/=Understanding_zindex_05b.png)

Wenn dann DIV #4 ebenfalls einen positiven `z-index` zugewiesen bekommt, der größer ist als der `z-index` von DIV #2, wird es über allen anderen DIVs einschließlich DIV #2 gerendert.

![Stacking context example 1](/@api/deki/files/916/=Understanding_zindex_05c.png)

In diesem letzten Beispiel können Sie sehen, dass DIV #2 und DIV #4 keine Geschwister sind, da sie zu verschiedenen Eltern in der Hierarchie der HTML-Elemente gehören. Trotzdem kann die Stapelung von DIV #4 in Bezug auf DIV #2 durch `z-index` gesteuert werden. Da DIV #1 und DIV #3 kein z-index-Wert zugewiesen ist, bilden sie keinen Stapelkontext. Das bedeutet, dass ihr gesamter Inhalt, einschließlich DIV #2 und DIV #4, zu demselben Wurzel-Stacking-Kontext gehört.

In Bezug auf die Stapelkontexte werden DIV #1 und DIV #3 einfach in das Wurzelelement assimiliert, und die resultierende Hierarchie ist die folgende:

- Wurzel-Stapelkontext

  - DIV #2 (z-index 1)
  - DIV #4 (z-index 2)

> **Note:** **Hinweis:** DIV #1 und DIV #3 sind nicht lichtdurchlässig. Es ist wichtig, sich daran zu erinnern, dass das Zuweisen einer Deckkraft von weniger als 1 zu einem positionierten Element implizit einen Stapelkontext erzeugt, genau wie das Hinzufügen eines `z-index` Wertes. Und dieses Beispiel zeigt, was passiert, wenn ein übergeordnetes Element keinen Stapelkontext erzeugt.

## Beispiel

### HTML

```html
<div id="div1">
<br /><span class="bold">DIV #1</span>
<br />position: relative;
   <div id="div2">
   <br /><span class="bold">DIV #2</span>
   <br />position: absolute;
   <br />z-index: 1;
   </div>
</div>

<br />

<div id="div3">
<br /><span class="bold">DIV #3</span>
<br />position: relative;
   <div id="div4">
   <br /><span class="bold">DIV #4</span>
   <br />position: absolute;
   <br />z-index: 2;
   </div>
</div>

</body></html>
```

### CSS

```css
.bold {
    font-weight: bold;
    font: 12px Arial;
}
#div1,
#div3 {
    height: 80px;
    position: relative;
    border: 1px dashed #669966;
    background-color: #ccffcc;
    padding-left: 5px;
}
#div2 {
    opacity: 0.8;
    z-index: 1;
    position: absolute;
    width: 150px;
    height: 200px;
    top: 20px;
    left: 170px;
    border: 1px dashed #990000;
    background-color: #ffdddd;
    text-align: center;
}
#div4 {
    opacity: 0.8;
    z-index: 2;
    position: absolute;
    width: 200px;
    height: 70px;
    top: 65px;
    left: 50px;
    border: 1px dashed #000099;
    background-color: #ddddff;
    text-align: left;
    padding-left: 10px;
}
```

### Ergebnis

{{ EmbedLiveSample('Example', '100%', '250px', '', 'Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1') }}

## See also

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn der `z-index` nicht verwendet wird.
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 2:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2) 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
- [Stapelkontext-Beispiel 3:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 9. Juli 2005
