---
title: border-width
slug: Web/CSS/border-width
---

{{CSSRef}}

**`border-width`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の境界の幅を設定します。

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-bottom-width`](/ja/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/ja/docs/Web/CSS/border-left-width)
- [`border-right-width`](/ja/docs/Web/CSS/border-right-width)
- [`border-top-width`](/ja/docs/Web/CSS/border-top-width)

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

> **メモ:** 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、何れか 1つを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="A_mix_of_values_and_lengths">値と長さの組み合わせ</h3>

#### HTML

```html
<p id="sval">one value: 6px wide border on all 4 sides</p>
<p id="bival">
  two different values: 2px wide top and bottom border, 10px wide right and left
  border
</p>
<p id="treval">
  three different values: 0.3em top, 9px bottom, and zero width right and left
</p>
<p id="fourval">
  four different values: "thin" top, "medium" right, "thick" bottom, and 1em
  left
</p>
```

#### CSS

```css
#sval {
  border: ridge #ccc;
  border-width: 6px;
}
#bival {
  border: solid red;
  border-width: 2px 10px;
}
#treval {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#fourval {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Result

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 320, 320) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界線に関する一括指定プロパティ: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- 境界線の幅に関するプロパティ: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
