---
title: math-shift
slug: Web/CSS/math-shift
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}{{SeeCompatTable}}

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

### CSS

```css
math {
  math-shift: compact;
}
```

### MathML

次の MathML は OpenType MATH テーブルを持つフォントを使って "x の 2 乗" の 2 つのバージョンを表示しています。 `math-shift` プロパティを実装しているブラウザーは、上付き文字を少し異なるシフトを使って上げることになります。

```html
<math style="font-size: 64pt;">
  <msup style="math-shift: normal">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup style="math-shift: compact">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample("math-shift-example", 700, 200, "", "")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
