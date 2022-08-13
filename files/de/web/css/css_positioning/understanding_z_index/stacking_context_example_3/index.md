---
title: Stapelkontext  Beispiel 3
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
---
{{cssref}}

« [CSS](/de/docs/Web/CSS) « [Understanding CSS z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index "Understanding CSS z-index")

## Stapelkontext Beispiel 3

Dieses letzte Beispiel zeigt Probleme, die entstehen, wenn mehrere positionierte Elemente in einer mehrstufigen HTML-Hierarchie gemischt werden und wenn z-Indizes über Klassenselektoren zugewiesen werden.

Nehmen wir als Beispiel ein hierarchisches Menü mit drei Ebenen, das aus mehreren positionierten DIVs besteht. Die DIVs der zweiten und dritten Ebene erscheinen, wenn man mit dem Mauszeiger über die übergeordneten Elemente fährt oder auf sie klickt. Normalerweise wird diese Art von Menü entweder clientseitig oder serverseitig per Skript generiert, so dass die Stilregeln mit einem Klassenselektor anstelle des id-Selektors zugewiesen werden.If the three menu levels partially overlap, then managing stacking could become a problem.

Wenn sich die drei Menüebenen teilweise überlappen, könnte die Verwaltung der Stapelung zu einem Problem werden.

{{ EmbedLiveSample('Example_source_code', '320', '330') }}

Das Menü der ersten Ebene wird nur relativ positioniert, es wird also kein Stapelkontext erzeugt.

Das Menü der zweiten Ebene wird absolut innerhalb des übergeordneten Elements positioniert. Um es über alle Menüs der ersten Ebene zu legen, wird ein `{{cssxref("z-index")}}` verwendet. Das Problem ist, dass für jedes Menü der zweiten Ebene ein Stapelkontext erzeugt wird und jedes Menü der dritten Ebene zum Kontext seines Elternelements gehört.

Ein Menü der dritten Ebene wird also unter den folgenden Menüs der zweiten Ebene gestapelt, da alle Menüs der zweiten Ebene denselben `z-index` Wert haben und die Standard-Stapelregeln gelten.

Um die Situation besser zu verstehen, sehen Sie hier die Stapelkontexthierarchie:

- Wurzel-Stapelkontext

  - LEVEL #1

    - LEVEL #2 (z-index: 1)

      - LEVEL #3
      - ...
      - LEVEL #3

    - LEVEL #2 (z-index: 1)
    - ...
    - LEVEL #2 (z-index: 1)

  - LEVEL #1
  - ...
  - LEVEL #1

Dieses Problem kann vermieden werden, indem die Überlappung zwischen den Menüs der verschiedenen Ebenen entfernt wird, oder indem individuelle (und unterschiedliche) `z-index` Werte verwendet werden, die über den id-Selektor anstelle des class-Selektors zugewiesen werden, oder indem die HTML-Hierarchie abgeflacht wird.

> **Hinweis:** Im Quellcode sehen Sie, dass die Menüs der zweiten und dritten Ebene aus mehreren DIVs bestehen, die in einem absolut positionierten Container enthalten sind. Dies ist nützlich, um sie alle auf einmal zu gruppieren und zu positionieren.

## Beispiel Quellcode

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div { font: 12px Arial; }

span.bold { font-weight: bold; }

div.lev1 {
   width: 250px;
   height: 70px;
   position: relative;
   border: 2px outset #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#container1 {
   z-index: 1;
   position: absolute;
   top: 30px;
   left: 75px;
}

div.lev2 {
   opacity: 0.9;
   width: 200px;
   height: 60px;
   position: relative;
   border: 2px outset #990000;
   background-color: #ffdddd;
   padding-left: 5px;
}

#container2 {
   z-index: 1;
   position: absolute;
   top: 20px;
   left: 110px;
}

div.lev3 {
   z-index: 10;
   width: 100px;
   position: relative;
   border: 2px outset #000099;
   background-color: #ddddff;
   padding-left: 5px;
}

</style></head>

<body>

<br />

<div class="lev1">
<span class="bold">LEVEL #1</span>

   <div id="container1">

      <div class="lev2">
      <br /><span class="bold">LEVEL #2</span>
      <br />z-index: 1;

         <div id="container2">

            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>

         </div>

      </div>

      <div class="lev2">
      <br /><span class="bold">LEVEL #2</span>
      <br />z-index: 1;
      </div>

   </div>
</div>

<div class="lev1">
<span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
<span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
<span class="bold">LEVEL #1</span>
</div>

</body></html>
```

## Siehe auch

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn der `z-index` nicht verwendet wird.
- [Stapeln mit fließenden Blöcken](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): Wie fließende Elemente (`float`) beim Stapeln behandelt werden.
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 9. Juli 2005

**Hinweis:** Der Grund, warum das Beispielbild falsch aussieht - mit der zweiten Ebene 2, die die Menüs der Ebene 3 überlagert - ist, dass die Ebene 2 Deckkraft hat, was einen neuen Stapelungskontext erzeugt. Im Grunde ist diese ganze Beispielseite falsch und irreführend.
