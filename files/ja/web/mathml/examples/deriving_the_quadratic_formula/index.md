---
title: "MathML: 二次方程式の解の公式を導く"
slug: Web/MathML/Examples/Deriving_the_Quadratic_Formula
---

このページでは、二次方程式の解の公式の導出について概説します。

二次方程式の一般形をとり、 x について解きます。

<math><mtable columnalign="left"><mtr><mtd><mrow><mrow><mrow><mrow><mi>a</mi>
<mo>⁢</mo>
<msup><mi>x</mi>
<mn>2</mn>
</msup></mrow><mo>+ </mo><mi>b</mi>
<mo>⁢</mo>
<mi>x</mi>
</mrow><mo>+ </mo><mi>c</mi>
</mrow><mo>=</mo>
<mn>0</mn>
</mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mi>a</mi>
<mo>⁢</mo>
<msup><mi>x</mi>
<mn>2</mn>
</msup></mrow><mo>+ </mo><mi>b</mi>
<mo>⁢</mo>
<mi>x</mi>
<mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace></mrow><mo>=</mo>
<mo>-</mo>
<mi>c</mi>
<mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><msup><mi>x</mi>
<mn>2</mn>
</msup></mrow><mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mi>a</mi>
</mfrac><mo>⁤</mo>
<mi>x</mi>
</mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mo>=</mo>
<mfrac><mrow><mo>-</mo>
<mi>c</mi>
</mrow><mi>a</mi>
</mfrac><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt">首位係数で両辺を割る。</mtext>
</mrow></mtd></mtr><mtr><mtd><mrow><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><msup><mi>x</mi>
<mn>2</mn>
</msup></mrow><mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mi>a</mi>
</mfrac><mo>⁤</mo>
<mi>x</mi>
<mo>+ </mo><msup><mrow><mo>(</mo><mfrac><mrow><mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac><mo>)</mo></mrow><mn>2</mn>
</msup></mrow><mo>=</mo>
<mfrac><mrow><mo>-</mo>
<mi>c</mi>
<mo>(</mo>
<mn>4</mn>
<mi>a</mi>
<mo>)</mo>
</mrow><mrow><mi>a</mi>
<mo>(</mo>
<mn>4</mn>
<mi>a</mi>
<mo>)</mo>
</mrow></mfrac></mrow><mo>+ </mo><mfrac><mrow><msup><mi>b</mi>
<mn>2</mn>
</msup></mrow><mrow><mn>4</mn>
<msup><mi>a</mi>
<mn>2</mn>
</msup></mrow></mfrac><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt">平方完成。</mtext>
</mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mo>(</mo>
<mi>x</mi>
<mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac><mo>)</mo>
<mo>(</mo>
<mi>x</mi>
<mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac><mo>)</mo>
<mo>=</mo>
<mfrac><mrow><msup><mi>b</mi>
<mn>2</mn>
</msup><mo>- </mo><mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</mrow><mrow><mn>4</mn>
<msup><mi>a</mi>
<mn>2</mn>
</msup></mrow></mfrac></mrow><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt">判別式が現れる。</mtext>
</mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><msup><mrow><mo>(</mo>
<mi>x</mi>
<mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac><mo>)</mo>
</mrow><mn>2</mn>
</msup><mo>=</mo>
<mfrac><mrow><msup><mi>b</mi>
<mn>2</mn>
</msup><mo>- </mo><mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</mrow><mrow><mn>4</mn>
<msup><mi>a</mi>
<mn>2</mn>
</msup></mrow></mfrac></mrow><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt"></mtext></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mrow><mi>x</mi>
<mo>+ </mo><mfrac><mrow><mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac></mrow><mo>=</mo>
<msqrt><mfrac><mrow><msup><mi>b</mi>
<mn>2</mn>
</msup><mo>- </mo><mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</mrow><mrow><mn>4</mn>
<msup><mi>a</mi>
<mn>2</mn>
</msup></mrow></mfrac></msqrt></mrow><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt"></mtext></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mrow><mi>x</mi>
</mrow><mo>=</mo>
<mfrac><mrow><mo>-</mo>
<mi>b</mi>
</mrow><mrow><mn>2</mn>
<mi>a</mi>
</mrow></mfrac><mo>±</mo>
<mrow><mo>{</mo>
<mi>C</mi>
<mo>}</mo>
</mrow><msqrt><mfrac><mrow><msup><mi>b</mi>
<mn>2</mn>
</msup><mo>- </mo><mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</mrow><mrow><mn>4</mn>
<msup><mi>a</mi>
<mn>2</mn>
</msup></mrow></mfrac></msqrt></mrow><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt">頂点を求める公式。</mtext>
</mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mspace depth="1ex" height="0.5ex" width="2.5ex"></mspace><mrow><mi>x</mi>
</mrow><mo>=</mo>
<mfrac><mrow><mo>-</mo>
<mi>b</mi>
<mo>±</mo>
<mrow><mo>{</mo>
<mi>C</mi>
<mo>}</mo>
</mrow><msqrt><msup><mi>b</mi>
<mn>2</mn>
</msup><mo>- </mo><mn>4</mn>
<mi>a</mi>
<mi>c</mi>
</msqrt></mrow><mrow><mn>2</mn>
<mi>a</mi></mrow></mfrac></mrow><mspace depth="1ex" height="0.5ex" width="2ex"></mspace><mrow><mtext mathcolor="red" mathsize="10pt"></mtext></mrow></mrow></mtd></mtr></mtable></math>
