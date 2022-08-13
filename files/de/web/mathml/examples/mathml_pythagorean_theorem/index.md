---
title: Beweis des Satzes des Pythagoras
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
tags:
  - Anfänger
  - Beispiel
  - MathML
translation_of: Web/MathML/Examples/MathML_Pythagorean_Theorem
original_slug: Web/MathML/Beispiele/MathML_Satz_des_Pythagoras
---
Wir erbringen einen Beweis für den Satz des Pythagoras für rechtwinklige Dreiecke: <math><mrow><msup><mi>a </mi><mn>2</mn></msup> <mo>+ </mo><msup><mi>b </mi><mn>2</mn></msup> <mo>= </mo><msup><mi>c </mi><mn>2</mn></msup></mrow></math>

Ohne Angabe des `display`-Attributes wird die Gleichung `inline`, also im laufenden Text dargestellt. Die Einrückungen dienen der Übersichtlichkeit. Über die von HTML bekannten Regeln gibt es hier keine Besonderheiten.

```html
<math>
  <mrow>
    <msup><mi> a </mi><mn>2</mn></msup>
    <mo> + </mo>
    <msup><mi> b </mi><mn>2</mn></msup>
    <mo> = </mo>
    <msup><mi> c </mi><mn>2</mn></msup>
  </mrow>
</math>
```

Wir zeigen dass das große Quadrat flächengleich dem inneren Quadrat (Kantenlänge: Hypothenuse) plus die Flächen der vier kleinen Dreiecke: <math style="display: block;"><mtable columnalign="right center left"><mtr><mtd><msup><mrow><mo>( </mo><mi>a </mi><mo>+ </mo><mi>b </mi><mo>) </mo></mrow><mn>2 </mn></msup></mtd><mtd><mo>= </mo></mtd><mtd><msup><mi>c </mi><mn>2</mn></msup> <mo>+ </mo><mn>4 </mn><mo>⋅ </mo><mo>(</mo> <mfrac><mn>1 </mn><mn>2 </mn></mfrac><mi>a </mi><mi>b </mi><mo>)</mo> </mtd></mtr><mtr><mtd><msup><mi>a </mi><mn>2</mn></msup> <mo>+ </mo><mn>2 </mn><mi>a </mi><mi>b </mi><mo>+ </mo><msup><mi>b </mi><mn>2</mn></msup> </mtd><mtd><mo>= </mo></mtd><mtd><msup><mi>c </mi><mn>2</mn></msup> <mo>+ </mo><mn>2 </mn><mi>a </mi><mi>b </mi></mtd></mtr><mtr><mtd><msup><mi>a </mi><mn>2</mn></msup> <mo>+ </mo><msup><mi>b </mi><mn>2</mn></msup> </mtd><mtd><mo>= </mo></mtd><mtd><msup><mi>c </mi><mn>2</mn></msup></mtd></mtr></mtable></math>

Die Lösung der Gleichung wird im Fluss der Seite als Block dargestellt und `mtable` mit passender Ausrichtung der Spalten sorgt dafür, dass die Gleichungen sauber untereinander gesetzt werden.

```html
<math style="display: block;">
  <mtable columnalign="right center left">
    <mtr>
      <mtd>
        <msup>
          <mrow> <mo> ( </mo> <mi> a </mi> <mo> + </mo> <mi> b </mi> <mo> ) </mo> </mrow> <mn> 2 </mn>
        </msup>
      </mtd>
      <mtd>
        <mo> = </mo>
      </mtd>
      <mtd>
        <msup> <mi> c </mi> <mn> 2 </mn> </msup>
        <mo> + </mo>
        <mn> 4 </mn>
        <mo> ⋅ </mo>
        <mo> ( </mo> <mfrac> <mn> 1 </mn> <mn> 2 </mn> </mfrac> <mi> a </mi> <mi> b </mi> <mo> ) </mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup> <mi> a </mi> <mn> 2 </mn> </msup>
        <mo> + </mo>
        <mn> 2 </mn>
        <mi> a </mi>
        <mi> b </mi>
        <mo> + </mo>
        <msup> <mi> b </mi> <mn> 2 </mn> </msup>
      </mtd>
      <mtd>
        <mo> = </mo>
      </mtd>
      <mtd>
        <msup> <mi> c </mi> <mn> 2 </mn> </msup>
        <mo> + </mo>
        <mn> 2 </mn>
        <mi> a </mi>
        <mi> b </mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup> <mi> a </mi> <mn> 2 </mn> </msup>
        <mo> + </mo>
        <msup> <mi> b </mi> <mn> 2 </mn> </msup>
      </mtd>
      <mtd>
        <mo> = </mo>
      </mtd>
      <mtd>
        <msup> <mi> c </mi> <mn> 2 </mn> </msup>
      </mtd>
    </mtr>
  </mtable>
</math>
```

Siehe <https://de.wikipedia.org/wiki/Satz_des_Pythagoras#Beweise>
