---
title: symbols
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
original_slug: Web/CSS/@counter-style/symbols
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`symbols`** は [CSS](/ja/docs/Web/CSS) の記述子で、指定されたカウンターシステムでカウンター表現を作成するための記号を指定するために使用されます。 {{cssxref('@counter-style/system', 'system')}} 記述子の値が `cyclic`、`numeric`、`alphabetic`、`symbolic`、`fixed` の場合、この記述子を指定する必要があります。

## 構文

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### 値

`symbols` 記述子は、 1 つ以上の `<symbol>` を空白で区切って指定したリストで指定します。

- `<symbol>`
  - : カウンターシステム内で使用する記号を指定します。リスト内のそれぞれの記号は、{{cssxref("&lt;string&gt;")}}、{{cssxref("&lt;image&gt;")}}、{{cssxref("&lt;custom-ident&gt;")}} のいずれかです。 `<image>` 値は、{{cssxref("url_value", "&lt;url&gt;")}} または {{cssxref("&lt;gradient&gt;")}} として指定することができます。

> [!NOTE]
> 記号に{{glossary("identifier", "識別子")}}を使用する場合、`*`、`「`、`\` などの {{glossary("ASCII")}} 以外の文字は識別子とはみなされないことに注意してください。これらは、文字列として引用符で囲むか、エスケープするかする必要があります。

## 解説

記号は文字列、画像、識別子の何れかで指定することができます。これは {{cssxref("@counter-style")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)の中で使用されます。

`symbols` 記述子は、 {{cssxref('@counter-style/system', 'system')}} 記述子の値が `cyclic`, `numeric`, `alphabetic`, `symbolic`, `fixed` の何れかである場合に指定する必要があります。 `additive` システムを使用する場合は、 symbols を指定する代わりに {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} を使用してください。

引用符で囲まれた記号の間に空白は必須ではありませんが、CSS の可読性を高めることができます。記号として引用符を使用するには、引用符をエスケープするか、 `"'"` のように別の引用符で囲んでください。

文字列ではなく識別子で記号を定義する場合は、識別子の構文規則を必ず使用してください。例えば、上記で述べたように、`*` などの ASCII の英字以外の文字は識別子ではないため、引用符で囲んだりエスケープしたりする必要が あります。16 進エスケープ文字の後に空白が続きます。この空白は 2 つの識別子を区切る空白のように見えますが、16 進エスケープ文字の後に数字が続くことを可能にするものです。これは、16 進エスケープされた識別子の後には、次の識別子と区切るために 2 つの空白を記入しなければならないことを意味します。例えば、2 つの空白を含む `\2A  1` よりも、文字列 `"\2A 1"` を使用することをお勧めします。これは、コードツールによって二重の空白が除去される可能性があるためです。エスケープが必要な識別子は、引用符で囲むか、文字列を使用することをお勧めします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンター記号の設定

この例では、`symbols` 記述子の値のリストには、文字 (`A`、`D`、`E`)、引用符で囲まれた数値 (`"1"`)、および文字 `Ⓑ` に対応する引用符で囲まれた 16 進エスケープ識別子 (`"\24B7"`) が含まれます。

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### 結果

{{EmbedLiveSample('Setting_counter_symbols')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} 関数
- {{cssxref("url_value", "&lt;url&gt;")}} 型
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
