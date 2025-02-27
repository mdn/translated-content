---
title: 证明勾股定理
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

现在我们将证明[勾股定理](https://zh.wikipedia.org/wiki/勾股定理)：

**命题**：在一个直角三角形中，斜边的平方等于另外两条边的平方和。

即，如果 a 和 b 是直角三角形的两条直角边，c 是斜边，那么

<!-- @prettier-ignore -->
<math>
  <mrow>
    <msup>
      <mi>a</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
    <mo>=</mo>
    <msup>
      <mi>c</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>。

**证明**：我们可以通过代数方式证明这个定理，即在[此图](http://www.cut-the-knot.org/pythagoras/proof31.gif)上，大正方形的面积等于内正方形（斜边的平方）的面积加上四个三角形的面积：

<math display="block">
  <mtable>
    <mtr>
      <mtd>
        <msup>
          <mrow>
            <mo>(</mo>
            <mi>a</mi>
            <mo>+</mo>
            <mi>b</mi>
            <mo>)</mo>
          </mrow>
          <mn>2</mn>
        </msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mn>4</mn>
        <mo>⋅</mo>
        <mo>(</mo>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
        <mi>a</mi>
        <mi>b</mi>
        <mo>)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mn>2</mn>
        <mi>a</mi>
        <mi>b</mi>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mn>2</mn>
        <mi>a</mi>
        <mi>b</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <msup>
          <mi>c</mi>
          <mn>2</mn>
        </msup>
      </mtd>
    </mtr>
  </mtable>
</math>
