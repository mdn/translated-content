---
title: 二次方程式の解の公式を導く
short-title: 二次方程式の解の公式
slug: Web/MathML/Guides/Deriving_the_quadratic_formula
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

このページでは、[二次方程式の解の公式](https://ja.wikipedia.org/wiki/二次方程式の解の公式)の導出を概説します。導出の各段階を等号の位置で揃えるため、9 つの等式を {{MathMLElement("mtable")}} 要素にまとめています。いくつかの段階には色付きテキストで注釈が付いています。導出は {{MathMLElement("annotation")}} 要素内で[LaTeX](https://www.latex-project.org/)<sup>(英語)</sup>形式でも表されています。

## 導出

二次方程式の一般形をとり、`x` について解きます。

{{ EmbedLiveSample("Derivation", "", "400px") }}

<!-- prettier-ignore-start -->
```html
<math display="block">
  <semantics>
    <mtable>
      <!-- ステップ 1 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <mrow>
                  <mi>a</mi>
                  <!-- Unicode の不可視乗算記号 -->
                  <mo>&#x2062;</mo>
                  <msup>
                    <mi>x</mi>
                    <mn>2</mn>
                  </msup>
                </mrow>
                <mo>+</mo>
                <mi>b</mi>
                <!-- Unicode の不可視乗算記号 -->
                <mo>&#x2062;</mo>
                <mi>x</mi>
              </mrow>
              <mo>+</mo>
              <mi>c</mi>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <!-- ステップ 2 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mi>a</mi>
              <!-- Unicode の不可視乗算記号 -->
              <mo>&#x2062;</mo>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </mrow>
            <mo>+</mo>
            <mi>b</mi>
            <!-- Unicode の不可視乗算記号 -->
            <mo>&#x2062;</mo>
            <mi>x</mi>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mo>−</mo>
          <mi>c</mi>
        </mtd>
      </mtr>
      <!-- ステップ 3 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </mrow>
            <mo>+</mo>
            <mfrac>
              <mi>b</mi>
              <mi>a</mi>
            </mfrac>
            <mo>⁤</mo>
            <mi>x</mi>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>c</mi>
            </mrow>
            <mi>a</mi>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">最高次係数で両辺を割る。</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 4 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <msup>
                  <mi>x</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mi>a</mi>
              </mfrac>
              <mo>⁤</mo>
              <mi>x</mi>
              <mo>+</mo>
              <msup>
                <mrow>
                  <mo>(</mo>
                  <mfrac>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                  <mo>)</mo>
                </mrow>
                <mn>2</mn>
              </msup>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow>
            <mfrac>
              <mrow>
                <mo>−</mo>
                <mi>c</mi>
                <mo>(</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mo>)</mo>
              </mrow>
              <mrow>
                <mi>a</mi>
                <mo>(</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mo>)</mo>
              </mrow>
            </mfrac>
            <mo>+</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </mrow>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">平方完成する。</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 5 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mo>(</mo>
              <mi>x</mi>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mrow>
                  <mn>2</mn>
                  <mi>a</mi>
                </mrow>
              </mfrac>
              <mo>)</mo>
              <mo>(</mo>
              <mi>x</mi>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mrow>
                  <mn>2</mn>
                  <mi>a</mi>
                </mrow>
              </mfrac>
              <mo>)</mo>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <msup>
                <mi>b</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>4</mn>
              <mi>a</mi>
              <mi>c</mi>
            </mrow>
            <mrow>
              <mn>4</mn>
              <msup>
                <mi>a</mi>
                <mn>2</mn>
              </msup>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">判別式が現れる。</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 6 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <msup>
                <mrow>
                  <mo>(</mo>
                  <mi>x</mi>
                  <mo>+</mo>
                  <mfrac>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                  <mo>)</mo>
                </mrow>
                <mn>2</mn>
              </msup>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <msup>
                <mi>b</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>4</mn>
              <mi>a</mi>
              <mi>c</mi>
            </mrow>
            <mrow>
              <mn>4</mn>
              <msup>
                <mi>a</mi>
                <mn>2</mn>
              </msup>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 7 -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mfrac>
                  <mrow>
                    <mi>b</mi>
                  </mrow>
                  <mrow>
                    <mn>2</mn>
                    <mi>a</mi>
                  </mrow>
                </mfrac>
              </mrow>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msqrt>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </msqrt>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 8 -->
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>b</mi>
            </mrow>
            <mrow>
              <mn>2</mn>
              <mi>a</mi>
            </mrow>
          </mfrac>
          <mo>±</mo>
          <mrow>
            <mo>{</mo>
            <mi>C</mi>
            <mo>}</mo>
          </mrow>
          <msqrt>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </msqrt>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">これが頂点の公式です。</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- ステップ 9 -->
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>b</mi>
              <mo>±</mo>
              <mrow>
                <mo>{</mo>
                <mi>C</mi>
                <mo>}</mo>
              </mrow>
              <msqrt>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </msqrt>
            </mrow>
            <mrow>
              <mn>2</mn>
              <mi>a</mi>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
    <!-- TeX 形式での表現 -->
    <annotation encoding="application/x-tex">
      \begin{aligned}
      ax^2 + bx + c &= 0 \\
      ax^2 + bx &= -c \\
      x^2 + \frac{b}{a}x &= -\frac{c}{a} & \text{\color{red} \small 最高次係数で両辺を割る。} \\
      x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 &= \frac{-c(4a)}{a(4a)} + \frac{b^2}{4a^2} & \text{\color{red} \small 平方完成する。} \\
      \left(x + \frac{b}{2a}\right)\left(x + \frac{b}{2a}\right) &= \frac{b^2 - 4ac}{4a^2} & \text{\color{red} \small 判別式が現れる。} \\
      \left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2} \\
      x + \frac{b}{2a} &= \sqrt{\frac{b^2 - 4ac}{4a^2}} \\
      x &= \frac{-b}{2a} \pm \{C\} \sqrt{\frac{b^2 - 4ac}{4a^2}} & \text{\color{red} \small これが頂点の公式です。} \\
      x &= \frac{-b \pm \{C\}\sqrt{b^2 - 4ac}}{2a}
      \end{aligned}
    </annotation>
  </semantics>
</math>
```
<!-- prettier-ignore-end -->

```css
.explanation {
  color: red;
  font-size: smaller;
}
```
