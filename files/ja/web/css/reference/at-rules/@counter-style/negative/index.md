---
title: negative
slug: Web/CSS/Reference/At-rules/@counter-style/negative
original_slug: Web/CSS/@counter-style/negative
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`negative`** は {{cssxref("@counter-style")}} アットルールの記述子で、独自のカウンタースタイルを定義する際に、負のカウンター値をどのように表すかを定義することができます。`negative` 記述子の値は、カウンターの値が負の場合に、カウンターの表現の前後に追加する記号を定義します。

## 構文

```css
/* 単一の <symbol> 値 */
negative: "--"; /* 負の値の場合に先頭に '--' を付ける */

/* 2 つの <symbol> 値 */
negative: "(" ")"; /* 負の値の場合に '(' と ')' で囲む */
```

### 値

`negative` 記述子は、最大 2 つの [`<symbol>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values) 値を受け入れます。

- `<symbol>`
  - : 1 つの値のみを指定した場合、カウンターが負の値の場合、その値がカウンターの表現の前に追加されます。 2 つの値を指定した場合、カウンターが負の値の場合、最初の値はカウンターの表現の前に追加され、 2 つ目の値はカウンターの表現の後ろに追加されます。

## 解説

カウンター値が負の場合、 `negative` 記述子に指定された `<symbol>` が、カウンター表現の前に追加され、負の値の既定値 `-` を置き換えます。2 つ目の `<symbol>` が指定されている場合、カウンター表現の後に追加されます。

`negative` 記述子は、 2 つの場合に適用されます。カウンタースタイルの `system` 値が `symbolic`、`alphabetic`、`numeric`、`additive` で、カウントが負の場合、および `system` 値が `extends` で、拡張カウンタースタイル自体が負の符号を使用している場合です。負のカウンター値に対応していないシステムでは、 `negative` 記述子を指定しても効果はなく、無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 負のカウンターを描画する

この例では、[`decimal`](/ja/docs/Web/CSS/Reference/Properties/list-style-type#decimal) リストスタイルを[拡張](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/system#extends)しています。 `negative` 記述子は、負のカウンター値の前後に `(-` および `)` を追加するために使用されます。

#### HTML

```html
<ol start="-3">
  <li>Negative three</li>
  <li>Negative two</li>
  <li>Negative one</li>
  <li>Zero</li>
  <li>One</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: extends decimal;
  negative: "(-" ")";
  suffix: ": ";
}

ol {
  list-style: neg;
}
```

#### 結果

{{ EmbedLiveSample('Rendering negative counters') }}

`negative` 記述子の値として掲載されている接頭辞および接尾辞は、カウンター値が 0 未満の場合にのみマーカーに追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
