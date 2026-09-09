---
title: CSS `math-shift` プロパティ
short-title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

`math-shift` プロパティは MathML 数式の中の上付き文字を通常のシフトとコンパクトシフトのどちらで上げるべきかを示します。

## 構文

```css
/* キーワード値 */
math-shift: normal;
math-shift: compact;

/* グローバル値 */
math-shift: inherit;
math-shift: initial;
math-shift: revert;
math-shift: revert-layer;
math-shift: unset;
```

### 値

- `normal`
  - : 初期値で、通常のレンダリングを示します。 MathML 数式の上付き文字は OpenType MATH テーブルの [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) 引数を用います。
- `compact`
  - : コンパクトなレンダリングを示します。 MathML 数式の中の上付き文字は OpenType MATH テーブルの [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) 引数を使い、一般的に小さくなります。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 通常シフトとコンパクトシフト

次の MathML は OpenType MATH テーブルを持つフォントを使って "x の 2 乗" の 2 つのバージョンを表示しています。
`math-shift` プロパティは、`normal` および `compact` シフトを使用して上付き文字を配置するために使用されています。

#### CSS

```css
math {
  font-size: 64pt;
  math-shift: normal;
}

.compact-shift {
  math-shift: compact;
}
```

#### MathML

```html
<math>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup class="compact-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

#### 結果

2 つ目 "2" は、シフト量がより小さく（低く）なっていることに注意してください。

{{EmbedLiveSample("math-shift-example", "100%", "150px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
