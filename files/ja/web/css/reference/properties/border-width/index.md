---
title: border-width
slug: Web/CSS/Reference/Properties/border-width
original_slug: Web/CSS/border-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

**`border-width`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の境界の幅を設定します。

{{InteractiveExample("CSS デモ: border-width")}}

```css interactive-example-choice
border-width: thick;
```

```css interactive-example-choice
border-width: 1em;
```

```css interactive-example-choice
border-width: 4px 1.25em;
```

```css interactive-example-choice
border-width: 2ex 1.25ex 0.5ex;
```

```css interactive-example-choice
border-width: 0 4px 8px 12px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-bottom-width`](/ja/docs/Web/CSS/Reference/Properties/border-bottom-width)
- [`border-left-width`](/ja/docs/Web/CSS/Reference/Properties/border-left-width)
- [`border-right-width`](/ja/docs/Web/CSS/Reference/Properties/border-right-width)
- [`border-top-width`](/ja/docs/Web/CSS/Reference/Properties/border-top-width)

## 構文

```css
/* キーワード値 */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> 値 */
border-width: 4px;
border-width: 1.2rem;

/* 上下 | 左右 */
border-width: 2px 1.5em;

/* 上 | 左右 | 下 */
border-width: 1px 2em 1.5cm;

/* 上 | 右 | 下 | 左 */
border-width: 1px 2em 0 4rem;

/* グローバルキーワード */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

`border-width` プロパティは 1 つ、2 つ、3 つ、4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じ幅が適用される。
- 値が **2 つ**指定された場合、1 つ目の幅は**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目の幅は**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、幅はそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- `<line-width>`
  - : 境界の幅を、明示的な非負の {{cssxref("&lt;length&gt;")}} またはキーワードで定義します。キーワードの場合は、以下の値の何れかでなければなりません。
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、いずれかを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 値と長さの組み合わせ

#### HTML

```html-nolint live-sample___a_mix_of_values_and_lengths
<p id="one-value">1 つの値: 6px 幅が全 4 辺の境界に適用</p>
<p id="two-values">
  異なる値 2 つの値: 2px 幅が上下の境界に、 10px 幅が左右の境界に適用
</p>
<p id="three-values">
  異なる 3 つの値: 0.3em 幅が上に、 9px 幅が下に、ゼロ幅が左右に適用
</p>
<p id="four-values">
  異なる 4 つの値: "thin" が上に、 "medium" が右に、 "thick" が下に、 1em が左に
</p>
```

#### CSS

```css live-sample___a_mix_of_values_and_lengths
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### 結果

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 320, 320) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界線に関する一括指定プロパティ: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- 境界線の幅に関するプロパティ: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
