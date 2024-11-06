---
title: math-depth
slug: Web/CSS/math-depth
l10n:
  sourceCommit: 727078e752e7ed645bb3e739a7615ba3c0f09327
---

{{CSSRef}}

**`math-depth`** プロパティは、数式の各要素について、その数式の最上位コンテナーに対する _深さ_ の概念を記述します。これは、 `font-size: math` が適用されたとき、要素の [font-size](/ja/docs/Web/CSS/font-size) の計算値を調整するために使用されます。

> **メモ:** `font-size: math` は MathML Core の[ユーザーエージェントスタイルシート](https://w3c.github.io/mathml-core/#user-agent-stylesheet)における `<math>` 要素の既定値ですので、明示的に指定する必要はありません。

## 構文

```css
/* キーワード値 */
math-depth: auto-add;

/* 相対値 */
math-depth: add(2);
math-depth: add(-2);

/* 絶対値 */
math-depth: 4;

/* グローバル値 */
math-depth: inherit;
math-depth: initial;
math-depth: revert;
math-depth: revert-layer;
math-depth: unset;
```

### 値

- `auto-add`
  - : 継承された [math-style](/ja/docs/Web/CSS/math-style) が `compact` の場合、継承された `math-depth` に 1 を足した値を設定します。
- `add({{cssxref("&lt;integer&gt;")}})`
  - : 継承された `math-depth` に指定した整数を足した値に設定します。
- {{cssxref("&lt;integer&gt;")}}
  - : 指定された整数に設定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 数式の深さの指定

以下の例では、`math-depth`プロパティを変更したときのサブ数式のフォントサイズへの影響を示しています。
各サブ数式の数字は適用された `math-depth` と拡大率を示しています。

最初の `<mtext>` 要素は他のサブ数式への参照として使用され、特定のスタイルは適用されていません。
2番目と3番目のサブ数式は `math-depth` が `auto-add` に設定され、`math-style` に応じた倍率の効果が表示されます。

最後の2つのサブ数式は、 `math-depth` を特定の値に設定した場合の効果を示しています。

#### HTML

```html
<p style="font-size: 3rem; margin: 1rem 0">
  <math>
    <mtext>0</mtext>

    <!-- auto-add value has no effect when math-style is normal -->
    <mrow style="math-style: normal">
      <mrow style="math-depth: auto-add">
        <mtext>0</mtext>
      </mrow>
    </mrow>

    <!-- the inherited math-style is compact, so math-depth is set to 1 -->
    <mrow style="math-depth: auto-add">
      <mtext>1</mtext>
    </mrow>

    <mrow style="math-depth: add(2)">
      <mtext>2</mtext>
      <mrow style="math-depth: add(-1)">
        <mtext>1</mtext>
      </mrow>
      <mrow style="math-depth: 0">
        <mtext>0</mtext>
      </mrow>
    </mrow>
  </math>
</p>
```

#### 結果

{{embedlivesample('Specifying_a_math_depth', 600, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
