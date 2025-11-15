---
title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
original_slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`system`** 記述子は、整数値のカウンターを文字列表現に変換するために使用するアルゴリズムを指定します。これは {{cssxref("@counter-style")}} で使用され、定義されたスタイルの動作を定義するために使用されます。

`system` 記述子で指定されたアルゴリズムが特定のカウンター値の表現を構築できない場合、その値の表現は提供された代替システムを使用して構築されます。

## 構文

```css
/* キーワード値 */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* 複合値 */
system: fixed 3;
system: extends decimal;
system: extends circled-letters;
```

## 値

3 つの形のうちのいずれかを取ることができます。

- キーワード値 `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive`, `fixed` のいずれか。
- キーワード値 `fixed` と整数値。
- キーワード値 `extends` と [`<counter-style-name>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) の名前。

値は次のものです。

- `cyclic`
  - : [`symbols`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) 記述子で指定された記号のリストを順番に繰り返します。リストの終わりに到達すると、サイクルは最初に戻り、最初から繰り返されます。この値は、1 つの記号のみを使用する基本的な箇条書きスタイルと、複数の記号を使用するスタイルの両方に役立ちます。`symbols` 記述子には、少なくとも 1 つの記号を指定する必要があります。そうしないと、カウンタースタイルは有効になりません。

- `numeric`
  - : カウンター記号を[位取り記数法](https://ja.wikipedia.org/wiki/%E4%BD%8D%E5%8F%96%E3%82%8A%E8%A8%98%E6%95%B0%E6%B3%95)の桁として解釈します。この記数法は、上で説明した `alphabetic` システムと似ています。主な違いは、 `alphabetic` システムでは、 `symbols` 記述子で与えられた最初のカウンター記号が `1` 、次の記号は `2` 、以下同様に解釈されますが、この記数法では、最初のカウンター記号が 0、次は `1`、次は `2` というように解釈されることです。

    `symbols` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。

- `alphabetic`
  - : 指定された記号を桁として、アルファベット記数法に解釈します。 `"a"` から `"z"` までの文字が `alphabetic` 記数法のカウンタースタイルの記号として指定された場合、最初の 26 個のカウンター表現は `"a"`, `"b"` から `"z"` までとなります。この時点までは、上で説明した `symbolic` システムと同じ動作になります。しかし、`"z"` 以降は `"aa"`, `"ab"`, `"ac"`… のように続きます。

    `symbols` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。 `symbols` 記述子で与えられた最初のカウンター記号は `1` として、次の記号は `2` として、以下同様に解釈されます。この記数法はまた、正のカウンター値に対してのみ定義されています。

- `symbolic`
  - : `symbols` 記述子のリストで指定されたシンボルを繰り返し循環し、リストを順番に 2 回、3 回と渡すたびに、シンボルを 2 倍、3 倍といった具合に増やします。例えば、元の記号が "◽" と "◾" であった場合、循環するごとに "◽◽" と "◾◾" 、 "◽◽◽" と "◾◾◾" のように変化します。 `symbols` 記述子には 1 つ以上の記号を指定する必要があります。そうしないと、カウンタースタイルは有効になりません。このカウンターシステムは、正の値のカウンターにのみ動作します。

- `additive`
  - : 異なる位置で数字を再利用して異なる値を得るのではなく、より大きな値のために追加の数字を定義する、ローマ数字などの「記号値」の記数法を表すために使用されます。このようなシステムでは、数値の値は、その数値の数字を足し合わせることで求めることができます。

    `additive-symbols` と呼ばれる追加の記述子は、 1 つの*加算タプル*で指定しなければならず、そうでなければカウンタースタイルのルールが有効になりません。加算タプルは複合カウンター記号に似ており、通常のカウンター記号と負でない整数の重みの 2 つの部分から構成されます。加算タプルは重みの降順で指定しなければならず、そうでない場合は無効となります。

- `fixed` または `fixed <integer>`
  - : 有限のシンボルセットを定義し、 `symbols` 記述子で指定されたシンボルリストを 1 回反復処理します。指定されたシンボルがすべて反復処理されると、代替のカウンタースタイルが使用されます。このキーワード値は、カウンタースタイルの値が有限の場合に便利です。 `symbols` 記述子には、少なくとも 1 つのシンボルを指定する必要があります。そうしないと、カウンタースタイルは有効になりません。 `fixed` キーワードの後に、オプションの {{cssxref("&lt;integer&gt;")}} 値を指定できます。指定した場合、 `<integer>` 値は、シンボルリストから最初のシンボルを取得するリスト内のアイテムを示します。省略した場合、 `integer` の既定値は `1` となり、リストの最初のアイテムに最初のシンボルが割り当てられます。

- `extends`
  - : 拡張カウンタースタイルの一部の側面を変更できるようにすることで、別のブラウザーまたは作成者が定義したカウンタースタイルのアルゴリズムを拡張します。指定されていない記述子とその値は、指定された拡張カウンタースタイルから継承されます。`extends` で指定したカウンタースタイル名がまだ定義されていない場合、既定では `decimal` カウンタースタイルが拡張されます。

    `symbols` または `additive-symbols` 記述子を含んではなりません。そうしないと、カウンタースタイルルールが無効になります。1 つ以上のカウンタースタイル定義が、その `extends` 値で循環を形成している場合、ブラウザーは、その循環に関与するすべてのカウンタースタイルを `decimal` スタイルから拡張したものとして扱います。

> [!NOTE]
> 値が `cyclic`、`numeric`、`alphabetic`、`symbolic`、`fixed` の場合には、 [`symbols`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) 記述子が必要です。 `additive` 値が設定されている場合には、 [`additive-symbols`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols) 記述子が必要です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### cyclic カウンター

`cyclic` 値は、シンボルリストを走査し、必要に応じてリストを繰り返します。

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style fisheye {
  system: cyclic;
  symbols: ◉ ➀;
  suffix: ": ";
}

ul {
  list-style: fisheye;
}
```

#### 結果

{{ EmbedLiveSample('Cyclic_counter') }}

### fixed カウンター

`fixed` 値は、シンボルリストを 1 回だけ走査し、`integer` 値で示されるリストアイテムの番号から 1 つのサイクルを開始します。

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style circled-digits {
  system: fixed 3;
  symbols: ➀ ➁ ➂;
  suffix: ": ";
}

ul {
  list-style: circled-digits;
}
```

#### 結果

{{ EmbedLiveSample('Fixed_counter') }}

### symbolic カウンター

`symbolic` 値は、`symbols` 記述子で定義されているリストをループし、リストを 2 回目と 3 回目にループするたびに、シンボルの数をそれぞれ 2 倍、3 倍にします。

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: symbolic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### 結果

{{ EmbedLiveSample('Symbolic_counter') }}

### alphabetic カウンター

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: alphabetic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### 結果

{{ EmbedLiveSample('Alphabetic_counter') }}

### numeric カウンター

`symbols` 記述子で指定された最初の記号は、ここでは `0` と解釈されます。

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: numeric;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### 結果

{{ EmbedLiveSample('Numeric_counter') }}

### numeric カウンターに数字を使用

次の例のように、 `0` から `9` までの数字が記号として指定された場合、このカウンタースタイルは数字のカウンタースタイルと同様に描画されます。

#### CSS

```html hidden
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

```css
@counter-style numbers {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  suffix: ".";
}

ul {
  list-style: numbers;
}
```

#### 結果

{{ EmbedLiveSample('Numeric_counter_with_numeric_symbols') }}

### additive カウンター

この例では、ローマ数字を使ってリストを描画しています。 `range` が指定されていることに注意してください。これは、カウンターの値が `3999` になるまでの間、正しいローマ数字を表示するためです。範囲を超えると、残りのカウンター表現は `decimal` スタイル、すなわち代替となります。もし、カウンターの値をローマ数字で表現する必要がある場合には、自分でルールを作り直すのではなく、定義済みのカウンタースタイルである `upper-roman` または `lower-roman` のどちらかを使用するとよいでしょう。

#### HTML

[`start`](/ja/docs/Web/HTML/Reference/Elements/ol#start) 属性を {{HTMLElement("ol")}} 要素に使用することで、カウントを `1` から始める必要がないことを示しています。さらに、 [`value`](/ja/docs/Web/HTML/Reference/Elements/li#value) 属性を 5 番目の {{HTMLElement("li")}} 要素で使用することで、 `@counter-style` を使用して定義したカウンターが、ネイティブのカウンターと同様に動作することを示しています。

```html
<ol start="48">
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li value="109">109</li>
  <li>110</li>
  <ol></ol>
</ol>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  range: 1 3999;
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

ol {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### 結果

{{ EmbedLiveSample('Additive_counter', '') }}

### extends の例

この例では、いくつかのネイティブの {{CSSXref("list-style-type")}} カウンター値の 1 つである [`lower-alpha`](/ja/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha) のアルゴリズム、記号、およびその他のプロパティを使用していますが、ピリオド (`'.'`) を削除し、`(a)` および `(b)` のように文字を括弧で囲むことで拡張しています。

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
@counter-style alpha-modified {
  system: extends lower-alpha;
  prefix: "(";
  suffix: ") ";
}

ul {
  list-style: alpha-modified;
}
```

#### 結果

{{ EmbedLiveSample('Extending_a_counter') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}} など
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}、無名のカウンタースタイルを生成する関数記法
