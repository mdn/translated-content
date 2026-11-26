---
title: ピタゴラスの定理の証明
short-title: ピタゴラスの定理
slug: Web/MathML/Guides/Proving_the_Pythagorean_theorem
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

このページでは、[ピタゴラスの定理](https://ja.wikipedia.org/wiki/ピタゴラスの定理)の証明を概説します。証明の各段階を等号の位置で揃えるため、3 つの等式を {{MathMLElement("mtable")}} 要素にまとめています。証明は {{MathMLElement("annotation")}} 要素内で [LaTeX](https://www.latex-project.org/)<sup>(英語)</sup> 形式でも表されています。

## 証明

**命題:** 直角三角形では、斜辺の 2 乗は他の 2 辺の 2 乗の和に等しい。具体的には、<math><mi>a</mi></math> と <math><mi>b</mi></math> が脚、<math><mi>c</mi></math> が斜辺である場合、次のようになります: <math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">a^2 + b^2 = c^2</annotation></semantics></math>。

**証明:** [この図](https://www.cut-the-knot.org/pythagoras/proof31.gif)で、大きな正方形の面積が、内側の正方形の面積（斜辺の 2 乗）と 4 つの三角形の面積の合計に等しいことを示せば、定理を代数的に証明できます。

{{ EmbedLiveSample("Proof", "", "100px") }}

<!-- prettier-ignore-start -->
```html
<math display="block">
  <semantics>
    <mtable>
      <!-- ステップ 1 -->
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
      <!-- ステップ 2 -->
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
      <!-- ステップ 3 -->
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
    <!-- TeX 形式での表現 -->
    <annotation encoding="application/x-tex">
      \begin{aligned}
      (a + b)^2 &= c^2 + 4 \cdot \left( \frac{1}{2} ab \right) \\
      a^2 + 2ab + b^2 &= c^2 + 2ab \\
      a^2 + b^2 &= c^2
      \end{aligned}
    </annotation>
  </semantics>
</math>
```
<!-- prettier-ignore-end -->
