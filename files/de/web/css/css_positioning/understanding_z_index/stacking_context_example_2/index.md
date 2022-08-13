---
title: Stapelkontext Beispiel 2
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2
---
{{cssref}}

« [CSS](/de/docs/Web/CSS) « [Understanding CSS z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index "Understanding CSS z-index")

## Stapelkontext Beispiel 2

Dies ist ein sehr einfaches Beispiel, aber es ist der Schlüssel zum Verständnis des Konzepts des _Stapelkontexts_. Es gibt dieselben vier DIVs des vorherigen Beispiels, aber jetzt werden {{cssxref("z-index")}} Eigenschaften auf beiden Ebenen der Hierarchie zugewiesen.

{{ EmbedLiveSample('Example_source_code', '352', '270') }}

Sie können sehen, dass DIV #2 (z-index: 2) über DIV #3 (z-index: 1) liegt, da beide zum selben Stapelkontext gehören (dem Wurzel-Kontext), so dass die `z-index` Werte bestimmen, wie Elemente gestapelt werden.

Was als merkwürdig angesehen werden kann, ist, dass DIV #2 (z-index: 2) über DIV #4 (z-index: 10) liegt, trotz ihrer z-index Werte. Der Grund dafür ist, dass sie nicht zum selben Stapelkontext gehören. DIV #4 gehört zu dem Stacking-Kontext, der durch DIV #3 erzeugt wurde, und wie bereits erklärt, befindet sich DIV #3 (und sein gesamter Inhalt) unter DIV #2.

Zum besseren Verständnis der Situation sehen Sie hier die Hierarchie des Stapelkontexts:

- Wurzel-Stapelkontext

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **Hinweis:** Es ist zu beachten, dass sich die HTML-Hierarchie im Allgemeinen von der Stapelkontexthierarchie unterscheidet. In der Stapelkontexthierarchie werden Elemente, die keinen Stapelkontext erzeugen, an ihrem übergeordneten Element zusammengeklappt.

## Beispiel

### HTML

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><style type="text/css">

div { font: 12px Arial; }

span.bold { font-weight: bold; }

#div2 { z-index: 2; }
#div3 { z-index: 1; }
#div4 { z-index: 10; }

#div1,#div3 {
   height: 80px;
   position: relative;
   border: 1px dashed #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#div2 {
   opacity: 0.8;
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


</style></head>

<body>

    <br />

    <div id="div1"><br />
        <span class="bold">DIV #1</span><br />
        position: relative;
        <div id="div2"><br />
            <span class="bold">DIV #2</span><br />
            position: absolute;<br />
            z-index: 2;
        </div>
    </div>

    <br />

    <div id="div3"><br />
        <span class="bold">DIV #3</span><br />
        position: relative;<br />
        z-index: 1;
        <div id="div4"><br />
            <span class="bold">DIV #4</span><br />
            position: absolute;<br />
            z-index: 10;
        </div>
    </div>

</body>
</html>
```

## Siehe auch

- [Stapeln ohne die Eigenschaft z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): Die Stapelungsregeln, die gelten, wenn der `z-index` nicht verwendet wird.
- [Stapeln mit fließenden Blöcken](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): Wie fließende Elemente beim Stapeln behandelt werden.
- [Verwenden von z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): Wie Sie `z-index` verwenden, um die Standardstapelung zu ändern.
- [Der Stapelkontext:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) Hinweise zum Stapelkontext.
- [Stapelkontext-Beispiel 1:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1) 2-stufige HTML-Hierarchie, `z-index` auf der letzten Stufe
- [Stapelkontext-Beispiel 3:](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene

## Original Dokumenteninformation

- Autor(s): Paolo Lombardi
- Dieser Artikel ist die englische Übersetzung eines Artikels, den ich auf Italienisch für [YappY](http://www.yappy.it). geschrieben habe. Ich gewähre das Recht, den gesamten Inhalt unter der [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) zu teilen.
- Letzte Aktualisation: 9. July 2005
