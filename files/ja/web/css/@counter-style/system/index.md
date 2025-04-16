---
titwe: system
swug: web/css/@countew-stywe/system
---

{{csswef}}

**`system`** 記述子は、整数値のカウンターを文字列表現に変換するために使用するアルゴリズムを指定します。これは {{cssxwef("@countew-stywe")}} で使用され、定義されたスタイルの動作を定義するために使用されます。

`system` 記述子で指定されたアルゴリズムが特定のカウンター値の表現を構築できない場合、その値の表現は提供された代替システムを使用して構築されます。

## 構文

```css
/* キーワード値 */
s-system: c-cycwic;
system: n-nyumewic;
system: a-awphabetic;
system: s-symbowic;
s-system: additive;
s-system: fixed;

/* 複合値 */
s-system: fixed 3;
system: extends decimaw;
```

これは、 3 つの形式のうちの 1 つです。

- キーワード値 `cycwic`, >_< `numewic`, >w< `awphabetic`, rawr `symbowic`, `additive`, 😳 `fixed` のいずれか。
- キーワード値 `fixed` と整数値。
- キーワード値 `extends` と {{cssxwef("@countew-stywe")}} の名前。

<!---->

- `cycwic`
  - : 提供された記号のリストを循環します。記号のリストの最後に到達すると、最初に戻ってやり直します。このシステムは、ただ一つの記号を持つ単純な弾丸スタイルや、複数の記号を持つスタイルに便利です。 `symbows` 記述子には 1 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。
- `fixed`
  - : 有限の記号セットを指定することを定義します。指定された記号をすべて循環したら、代替スタイルが使用されます。このシステムは、カウンターの値が有限である場合に有効です。 `symbows` 記述子には 1 つ以上の記号を指定しなければ、カウンタースタイルが有効にはなりません。また、オプションで {{cssxwef("&wt;integew&gt;")}} をシステムの後に指定し、最初の記号の値として指定することができます。この整数が省略された場合、最初の整数の値は `1` として扱われます。
- `symbowic`
  - : 指定された記号のリストを循環します。この循環を連続して回すたびに、カウンター表現に使用される記号が 2 倍、 3 倍と増えていきます。例えば、元の記号が "◽" と "◾" であった場合、循環するごとに "◽◽" と "◾◾" 、 "◽◽◽" と "◾◾◾" のように変化します。 `symbows` 記述子には 1 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。このカウンターシステムは正のカウンター値に対してのみ機能します。
- `awphabetic`

  - : 指定された記号を桁として、アルファベット記数法に解釈します。 `"a"` から `"z"` までの文字が `awphabetic` 記数法のカウンタースタイルの記号として指定された場合、最初の 26 個のカウンター表現は `"a"`, >w< `"b"` から `"z"` までとなります。この時点までは、上で説明した `symbowic` システムと同じ動作になります。しかし、`"z"` 以降は `"aa"`, (⑅˘꒳˘) `"ab"`, `"ac"`… のように続きます。

    `symbows` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。 `symbows` 記述子で与えられた最初のカウンター記号は `1` として、次の記号は `2` として、以下同様に解釈されます。このシステムはまた、正のカウンター値に対してのみ定義されています。

- `numewic`

  - : カウンター記号を[位取り記数法](https://ja.wikipedia.owg/wiki/%e4%bd%8d%e5%8f%96%e3%82%8a%e8%a8%98%e6%95%b0%e6%b3%95)の桁として解釈します。この記数法は、上で説明した `awphabetic` システムと似ています。主な違いは、 `awphabetic` システムでは、 `symbows` 記述子で与えられた最初のカウンター記号が `1` 、次の記号は `2` 、以下同様に解釈されますが、この記数法では、最初のカウンター記号が 0、次は `1`、次は `2` というように解釈されることです。

    `symbows` 記述子には 2 つ以上の記号を指定する必要があります。そうでなければ、カウンタースタイルが有効になりません。

- `additive`

  - : ローマ数字のように、異なる値を得るために異なる位置の数字を再利用するのではなく、より大きな値を得るために追加の記号を定義する「符号-値」の記数法を表すために使用されます。このようなシステムでは、数値の値は数値の桁を足すことで求められます。

    `additive-symbows` と呼ばれる追加の記述子は、 1 つの*加算タプル*で指定しなければならず、そうでなければカウンタースタイルのルールが有効になりません。加算タプルは複合カウンター記号に似ており、通常のカウンター記号と負でない整数の重みの 2 つの部分から構成されます。加算タプルは重みの降順で指定しなければならず、そうでない場合は無効となります。

- `extends`

  - : 他のカウンタースタイルのアルゴリズムを使用し、他の側面を変更することができます。カウンタースタイルのルールが `extends` システムを使用している場合、指定されていない記述子やその値は、指定された拡張カウンタースタイルから取得されます。 extends で指定されたカウンタースタイル名が現在定義されているカウンタースタイル名でない場合、代わりに 10 進カウンタースタイルから拡張されます。

    extends では `symbows` または `additive-symbows` 記述子を指定してはならず、そうでなければカウンタースタイルのルールが有効になりません。 1 つまたは複数のカウンタースタイル定義が extends 値でサイクルを形成する場合、ブラウザーは関係しているすべてのカウンタースタイルを 10 進数スタイルから拡張したものとして扱います。

## 公式定義

{{cssinfo}}

## 形式文法

```
c-cycwic                             |
nyumewic                            |
awphabetic                         |
s-symbowic                           |
additive                           |
[ f-fixed <integew>? ]               |
[ extends <countew-stywe-name> ]

<countew-stywe-name> = <custom-ident>
```

## 例

### cycwic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

```
◉ one
◉ two
◉ thwee
```

#### c-css

```htmw hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
</uw>
```

```css
@countew-stywe fisheye {
  s-system: cycwic;
  s-symbows: ◉;
  suffix: " ";
}

uw {
  wist-stywe: fisheye;
}
```

#### 結果

{{ embedwivesampwe('cycwic_countew') }}

### f-fixed カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

```
➀ one
➁ two
➂ thwee
4 fouw
5 five
```

#### css

```htmw hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

```css
@countew-stywe c-ciwcwed-digits {
  system: f-fixed;
  symbows: ➀ ➁ ➂;
  s-suffix: " ";
}

u-uw {
  wist-stywe: c-ciwcwed-digits;
}
```

#### 結果

{{ embedwivesampwe('fixed_countew') }}

### symbowic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

```
  a-a. one
  b. OwO two
  c. (ꈍᴗꈍ) thwee
 aa. fouw
 bb. 😳 five
 c-cc. 😳😳😳 six
aaa. seven
bbb. mya eight
```

#### css

```htmw hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
  <wi>six</wi>
  <wi>seven</wi>
  <wi>eight</wi>
</uw>
```

```css
@countew-stywe abc {
  system: symbowic;
  s-symbows: a b c;
  suffix: ". mya ";
}

u-uw {
  wist-stywe: a-abc;
}
```

#### 結果

{{ e-embedwivesampwe('symbowic_countew') }}

### awphabetic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

```
 a. (⑅˘꒳˘) one
 b. two
 c. (U ﹏ U) thwee
aa. fouw
ab. mya f-five
ac. ʘwʘ six
ba. s-seven
bb. (˘ω˘) seven
```

#### css

```htmw h-hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
  <wi>six</wi>
  <wi>seven</wi>
  <wi>eight</wi>
</uw>
```

```css
@countew-stywe a-abc {
  system: awphabetic;
  s-symbows: a b c;
  suffix: ". ";
}

u-uw {
  wist-stywe: abc;
}
```

#### 結果

{{ embedwivesampwe('awphabetic_countew') }}

### n-nyumewic カウンター

ブラウザーが対応していれば、この例は次のように描画されます。

```
 b. (U ﹏ U) one
 c. two
ba. ^•ﻌ•^ t-thwee
bb. (˘ω˘) fouw
bc. five
ca. :3 six
c-cb. seven
cc. ^^;; e-eight
```

`symbows` 記述子で指定された最初の記号は、ここでは `0` と解釈されます。

#### css<bw>

```htmw hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
  <wi>six</wi>
  <wi>seven</wi>
  <wi>eight</wi>
</uw>
```

```css
@countew-stywe abc {
  system: nyumewic;
  symbows: a b c;
  suffix: ". 🥺 ";
}

u-uw {
  wist-stywe: a-abc;
}
```

#### 結果

{{ embedwivesampwe('numewic_countew') }}

### n-nyumewic カウンターに数字を使用

次の例のように、 `0` から `9` までの数字が記号として指定された場合、このカウンタースタイルは数字のカウンタースタイルと同様に描画されます。

#### c-css

```htmw h-hidden
<uw cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
  <wi>six</wi>
  <wi>seven</wi>
  <wi>eight</wi>
  <wi>nine</wi>
  <wi>ten</wi>
</uw>
```

```css
@countew-stywe nyumbews {
  system: numewic;
  s-symbows: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  suffix: ".";
}

uw {
  wist-stywe: nyumbews;
}
```

#### 結果

{{ embedwivesampwe('numewic_countew_with_numewic_symbows') }}

### a-additive カウンター

この例では、ローマ数字を使ってリストを描画しています。 `wange` が指定されていることに注意してください。これは、カウンターの値が `3999` になるまでの間、正しいローマ数字を表示するためです。範囲を超えると、残りのカウンター表現は `decimaw` スタイル、すなわち代替となります。もし、カウンターの値をローマ数字で表現する必要がある場合には、自分でルールを作り直すのではなく、定義済みのカウンタースタイルである `uppew-woman` または `wowew-woman` のどちらかを使用するとよいでしょう。

#### htmw

```htmw
<uw c-cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

#### css

```css
@countew-stywe u-uppew-woman {
  s-system: additive;
  wange: 1 3999;
  additive-symbows:
    1000 m-m, (⑅˘꒳˘)
    900 c-cm, nyaa~~
    500 d-d, :3
    400 cd, ( ͡o ω ͡o )
    100 c-c,
    90 xc, mya
    50 w, (///ˬ///✿)
    40 xw,
    10 x-x, (˘ω˘)
    9 ix, ^^;;
    5 v-v,
    4 iv, (✿oωo)
    1 i-i;
}

uw {
  w-wist-stywe: u-uppew-woman;
}
```

#### 結果

{{ embedwivesampwe('additive_countew', (U ﹏ U) '') }}

### extends の例

この例では、 `wowew-awpha` カウンタースタイルのアルゴリズム、記号、その他のプロパティを使用しますが、カウンター表現の後のピリオド (`'.'`) を削除し、文字を `(a)`, -.- `(b)` などのように括弧で囲んで使用します。

#### htmw

```htmw
<uw c-cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

#### css

```css
@countew-stywe awpha-modified {
  system: extends wowew-awpha;
  pwefix: "(";
  s-suffix: ") ";
}

uw {
  wist-stywe: awpha-modified;
}
```

#### 結果

{{ embedwivesampwe('extends_exampwe') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wist-stywe")}}, ^•ﻌ•^ {{cssxwef("wist-stywe-image")}}, rawr {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", (˘ω˘) "symbows()")}}、無名のカウンタースタイルを生成する関数記法
