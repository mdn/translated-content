---
title: range
slug: Web/CSS/Reference/At-rules/@counter-style/range
original_slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`range`** 記述子を使用すると、作成者は、 {{cssxref("@counter-style")}} アットルールを使用して独自のカウンタースタイルを定義する際に、スタイルを適用するカウンター値の 1 つ以上の範囲を指定することができます。 `range` 記述子が含まれている場合、定義されたカウンターは、設定された範囲内の値にのみ使用されます。カウンター値が指定された範囲外の場合、そのマーカーの表現を構築するには代替スタイルが使用されます。

## 構文

```css
/* キーワード値 */
range: auto;

/* 範囲の値 */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* 複数の範囲の値 */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### 値

値は、それぞれ下限と上限を含む、カンマで区切られた範囲のリスト、またはキーワード `auto` です。

- `auto`
  - : カウンター {{cssxref("@counter-style/system","system")}} で表現できる数値のセット全体。これらの範囲の値は、カウンターシステムによって異なります。
    - `cyclic`, `numeric`, `fixed` の各システムでは、範囲は負の `infinity` から正の `infinity` までです。
    - `alphabetic` および `symbolic` システムでは、範囲は `1` から正の `infinity` までです。
    - `additive` システムでは、範囲は `0` から正の `infinity` までです。
    - `extend` をシステム拡張に使用する場合、その範囲は、拡張されるシステムに対して `auto` が生成する範囲となり、日本語、韓国語、中国語、エチオピア語などの複雑な定義済みスタイルの拡張も含まれます。

- `[ [ <integer> | infinite ]{2} ]#`
  - : カンマで区切られた範囲のリスト内の各範囲には、2 つの値が含まれ、それぞれは {{cssxref("integer")}} またはキーワード `infinite` のいずれかです。 `infinite` が範囲の最初の値として使用されている場合、それは負の無限大を表します。2 つ目の値として使用されている場合、それは正の無限大を表します。それぞれの範囲の最初の値は範囲の下限であり、2 つ目の値は上限です（上限を含む）。リスト内のいずれかの範囲の下限が上限よりも大きい場合、その `range` 記述子全体が不正となり、無視されます。

## 解説

`range` 記述子の値は、`auto`、または負または正の整数、あるいはキーワード `infinite` を使用して指定した、下限と上限の範囲をカンマで区切ったリストのいずれかです。

### `auto` を理解する

値が `auto` に設定されている場合、範囲はカウンターシステムの既定の範囲になります。`system` が `cyclic`、`numeric`、`fixed` のいずれか場合、範囲は負の無限大から正の無限大になります。`system` が `alphabetic` または `symbolic` の場合、範囲は `1` から正の `infinity` になります。 `system: additive` の場合、`auto` は範囲 `0` から正の `infinity` になります。

カウンターを拡張する場合、`range` が `auto` に設定されていると、範囲の値は、そのカウンターの `range` 値ではなく、拡張されるカウンターの `system` の範囲になります。例えば、カウンター "B" に `system: extends A` が設定されており、カウンターが `alphabetic` カウンターである場合、 "B" に `range: auto` を設定すると、 "B" の範囲は `1` から `infinity` に設定されます。これは `alphabetic` システムの範囲であり、必ずしもカウンター "A" のスタイル定義で設定された範囲とは限りません。 `range: auto` が "B" に設定されている場合、 `range` は、カウンター A の記述子リストで設定されているe `range` 値ではなく、 `alphabetic` システムの既定の範囲に設定されます。

### `infinite` の解説

範囲が（`auto` ではなく）整数として指定されている場合、値 `infinite` を使用して無限大を表すことができます。 _infinite_ が範囲の最初の値として指定されている場合、それは負の無限大として解釈されます。上限として使用される場合、範囲の 2 つ目の値として、正の無限大として取られます。

### 範囲のリスト

`range` の値は、上記で説明した `auto`、または 1 つ以上の範囲をカンマで区切ったリストです。カウンタースタイルの範囲は、リスト内で定義されているすべての範囲の和集合になります。

範囲のリスト内のそれぞれの範囲は 2 つの値を取ります。これらの値は、{{cssxref("integer")}} またはキーワード `infinite` のいずれかです。最初の値は、下限です（下限値を含む）。2 つ目の値は上限です（上限値を含む）。 2 つの整数値の場合、小さい方の値が最初に指定されなければなりません。リスト内のいずれかの範囲の下限が上限よりも大きい場合、`range` 記述子全体が不正となり、無視されます。 `infinite` キーワードは、その位置によって値が決定されるため、範囲を不正にはしません。下限の場合は負の無限大、上限の場合は正の無限大となります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲を超えるカウンタースタイルを設定

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
  <li>Nine</li>
  <li>Ten</li>
</ul>
```

#### CSS

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.list {
  list-style: range-multi-example;
}
```

#### 結果

{{EmbedLiveSample('範囲を超えるカウンタースタイルを設定')}}

最初の範囲は、2、3、4 を含む範囲のリストです。2 つ目は、7、8、9 を含みます。範囲は、これら 2 つの範囲の和集合、つまり 2、3、4、7、8、9 です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
