---
title: system
slug: Web/CSS/@counter-style/system
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.system
translation_of: Web/CSS/@counter-style/system
---
{{CSSRef}}

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
```

これは、 3 つの形式のうちの 1 つです。

- キーワード値 `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive`, `fixed` のいずれか。
- キーワード値 `fixed` と整数値。
- キーワード値 `extends` と {{cssxref("@counter-style")}} の名前。

<!---->

- `cyclic`
  - : 提供された記号のリストを循環します。記号のリストの最後に到達すると、最初に戻ってやり直します。このシステムは、ただ一つの記号を持つ単純な弾丸スタイルや、複数の記号を持つスタイルに便利です。 `symbols` 記述子には 1 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。
- `fixed`
  - : 有限の記号セットを指定することを定義します。指定された記号をすべて循環したら、代替スタイルが使用されます。このシステムは、カウンターの値が有限である場合に有効です。 `symbols` 記述子には 1 つ以上の記号を指定しなければ、カウンタースタイルが有効にはなりません。また、オプションで {{cssxref("&lt;integer&gt;")}} をシステムの後に指定し、最初の記号の値として指定することができます。この整数が省略された場合、最初の整数の値は `1` として扱われます。
- `symbolic`
  - : 指定された記号のリストを循環します。この循環を連続して回すたびに、カウンター表現に使用される記号が 2 倍、 3 倍と増えていきます。例えば、元の記号が "◽" と "◾" であった場合、循環するごとに "◽◽" と "◾◾" 、 "◽◽◽" と "◾◾◾" のように変化します。 `symbols` 記述子には 1 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。このカウンターシステムは正のカウンター値に対してのみ機能します。
- `alphabetic`

  - : 指定された記号を桁として、アルファベット記数法に解釈します。 `"a"` から `"z"` までの文字が `alphabetic` 記数法のカウンタースタイルの記号として指定された場合、最初の 26 個のカウンター表現は `"a"`, `"b"` から `"z"` までとなります。この時点までは、上で説明した `symbolic` システムと同じ動作になります。しかし、`"z"` 以降は `"aa"`, `"ab"`, `"ac"`… のように続きます。

    `symbols` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。 `symbols` 記述子で与えられた最初のカウンター記号は `1` として、次の記号は `2` として、以下同様に解釈されます。このシステムはまた、正のカウンター値に対してのみ定義されています。

- `numeric`

  - : カウンター記号を[位取り記数法](https://ja.wikipedia.org/wiki/%E4%BD%8D%E5%8F%96%E3%82%8A%E8%A8%98%E6%95%B0%E6%B3%95)の桁として解釈します。この記数法は、上で説明した `alphabetic` システムと似ています。主な違いは、 `alphabetic` システムでは、 `symbols` 記述子で与えられた最初のカウンター記号が `1` 、次の記号は `2` 、以下同様に解釈されますが、この記数法では、最初のカウンター記号が 0、次は `1`、次は `2` というように解釈されることです。

    `symbols` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。

- `additive`

  - : ローマ数字のように、異なる値を得るために異なる位置の数字を再利用するのではなく、より大きな値を得るために追加の記号を定義する「符号-値」の記数法を表すために使用されます。このようなシステムでは、数値の値は数値の桁を足すことで求められます。

    `additive-symbols` と呼ばれる追加の記述子は、 1 つの*加算タプル*で指定しなければならず、そうでなければカウンタースタイルのルールが有効になりません。加算タプルは複合カウンター記号に似ており、通常のカウンター記号と負でない整数の重みの 2 つの部分から構成されます。加算タプルは重みの降順で指定しなければならず、そうでない場合は無効となります。

- `extends`

  - : 他のカウンタースタイルのアルゴリズムを使用し、他の側面を変更することができます。カウンタースタイルのルールが `extends` システムを使用している場合、指定されていない記述子やその値は、指定された拡張カウンタースタイルから取得されます。 extends で指定されたカウンタースタイル名が現在定義されているカウンタースタイル名でない場合、代わりに 10 進カウンタースタイルから拡張されます。

    extends では `symbols` または `additive-symbols` 記述子を指定してはならず、そうでなければカウンタースタイルのルールが有効になりません。 1 つまたは複数のカウンタースタイル定義が extends 値でサイクルを形成する場合、ブラウザーは関係しているすべてのカウンタースタイルを 10 進数スタイルから拡張したものとして扱います。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### cyclic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

    ◉ One
    ◉ Two
    ◉ Three

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

```css
@counter-style fisheye {
 system: cyclic;
 symbols: ◉;
 suffix: " ";
}

ul {
 list-style: fisheye;
}
```

#### 結果

{{ EmbedLiveSample('Cyclic_counter') }}

### fixed カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

    ➀ One
    ➁ Two
    ➂ Three
    4 Four
    5 Five

#### CSS

```html hidden
<ul>
 <li>One</li>
 <li>Two</li>
 <li>Three</li>
 <li>Four</li>
 <li>Five</li>
</ul>
```

```css
@counter-style circled-digits {
 system: fixed;
 symbols: ➀ ➁ ➂;
 suffix: ' ';
}

ul {
 list-style: circled-digits;
}
```

#### 結果

{{ EmbedLiveSample('Fixed_counter') }}

### symbolic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

      a. One
      b. Two
      c. Three
     aa. Four
     bb. Five
     cc. Six
    aaa. Seven
    bbb. Eight

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

ブラウザーが対応していれば、この例は次のように描画されます。

     a. One
     b. Two
     c. Three
    aa. Four
    ab. Five
    ac. Six
    ba. Seven
    bb. Seven

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

ブラウザーが対応していれば、この例は次のように描画されます。

     b. One
     c. Two
    ba. Three
    bb. Four
    bc. Five
    ca. Six
    cb. Seven
    cc. Eight

`symbols` 記述子で指定された最初の記号は、ここでは `0` と解釈されます。

#### CSS<br>

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
@counter-style upper-roman {
 system: additive;
 range: 1 3999;
 additive-symbols: 1000 M, 900 CM, 500 D, 400 CD, 100 C, 90 XC, 50 L, 40 XL, 10 X, 9 IX, 5 V, 4 IV, 1 I;
}

ul {
 list-style: upper-roman;
}
```

#### 結果

{{ EmbedLiveSample('Additive_counter', '') }}

### extends の例

この例では、 `lower-alpha` カウンタースタイルのアルゴリズム、記号、その他のプロパティを使用しますが、カウンター表現の後のピリオド (`'.'`) を削除し、文字を `(a)`, `(b)` などのように括弧で囲んで使用します。

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

{{ EmbedLiveSample('Extends_example') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}、無名のカウンタースタイルを生成する関数記法
