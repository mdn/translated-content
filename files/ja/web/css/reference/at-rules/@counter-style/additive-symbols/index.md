---
title: additive-symbols
slug: Web/CSS/Reference/At-rules/@counter-style/additive-symbols
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`additive-symbols`** は {{cssxref('@counter-style')}} アットルールの記述子で、 `@counter-style` の {{cssxref('@counter-style/system', 'system')}} 記述子の値が `additive` に設定されている場合に、カウンター記号を指定するために使用されます。加算システムは、ローマ数字などの[符号値記数法](https://en.wikipedia.org/wiki/Sign-value_notation)を構築するために使用されます。

## 構文

```css
/* 単一のタプル */
additive-symbols: 3 "*";

/* カンマで区切られたタプルのリスト */
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url("symbol.png");

/* 2 進カウンター */
additive-symbols:
  2 "1",
  1 "0";

/* エトルリア（古代イタリアの文明）のカウンター */
additive-symbols:
  100 "𐌟",
  50 "𐌣",
  10 "𐌢",
  5 "𐌡",
  1 "𐌠";
```

### 値

記述子は、カンマで区切られた加算タプルのリストを受け入れます。それぞれのタプルは、空間で区切られた次の 2 つの値で構成されます。

- {{cssxref("integer")}}
  - : タプルの関連付けられた記号値の整数の加重を指定する非負の整数値。

- [`<symbol>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : タプルの関連付けられた `<integer>` 加重値で定義される加重値に使用するカウンター記号を指定します。

> [!NOTE]
> 加算タプルは、加重の降順で指定する必要があります。そうしないと、記述子の宣言は無効となり、無視されます。

## 解説

`additive-symbols` 記述子は、カンマで区切られた加算タプルのリストを定義します。それぞれの加算タプルには、空間で区切られた非負の整数とカウンター記号が含まれています。有効であるためには、リストは整数の降順で並んでいる必要があります。整数と記号は連結されて、カウンター記号を形成します。

`system` 記述子が `cyclic`, `numeric`, `alphabetic`, `symbolic`, `fixed` の場合は、 {{cssxref('symbols')}} 記述子を `additive-symbols` の代わりに使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 加算的シンボルの指定

#### HTML

この例では、 {{cssxref("@counter-style/system","system: additive")}} と `additive-symbols` 記述子の値が、数値をローマ数字で表す方法を指定しています。リスト内のそれぞれの {{HTMLElement("li")}} 要素の値は、 {{cssxref("@counter-style")}} で定義されたルールに従ってローマ数字に変換されます。

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li value="109">109</li>
  <li>110</li>
</ul>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ul {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### 結果

{{ EmbedLiveSample('Specifying_additive_symbols') }}

値 `109` に対応するリストアイテムの場合、数字 `C` は `100` を表し、`IX` は `9` を表します。これにより、リストアイテム `109` に対して `CIX` カウンターが生成されます。次のリストアイテムには、自動的に値 `110` が取得されます。ローマ数字 `CX` は、`100` を表す `C` と `10` を表す `X` から派生しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols()")}} 関数、無名のカウンタースタイルを作成するために使用
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
