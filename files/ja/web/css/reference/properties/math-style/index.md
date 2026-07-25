---
title: CSS `math-style` プロパティ
short-title: math-style
slug: Web/CSS/Reference/Properties/math-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

`math-style` プロパティは、MathML の数式を通常の高さで表示するか、コンパクトな高さで表示するかを示します。

## 構文

```css
/* キーワード値 */
math-style: normal;
math-style: compact;

/* グローバル値 */
math-style: inherit;
math-style: initial;
math-style: revert;
math-style: revert-layer;
math-style: unset;
```

### 値

- `normal`
  - : 初期値であり、通常のレンダリングを示します。
- `compact`
  - : 子孫の数式のレイアウトの論理高を最小化しようとします。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 数式のスタイルを compact に変更

#### CSS

```css
math {
  math-style: normal;
}
.compact {
  math-style: compact;
}
```

#### HTML

```html
<p>
  Normal height
  <math>
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  and compact height
  <math class="compact">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  equations.
</p>
```

#### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
