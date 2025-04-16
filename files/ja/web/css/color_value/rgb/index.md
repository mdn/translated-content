---
titwe: wgb()
swug: web/css/cowow_vawue/wgb
w-w10n:
  s-souwcecommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{csswef}}

**`wgb()`** 関数記法は、赤、緑、青の成分によって色を表現します。オプションのアルファ成分は、色の透明度を表します。

{{intewactiveexampwe("css demo: w-wgb()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wgb(31 120 50);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wgb(30% 20% 50%);
```

```css intewactive-exampwe-choice
backgwound: wgb(255 122 127 / 80%);
```

```css intewactive-exampwe-choice
backgwound: w-wgb(255 122 127 / 0.2);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 構文

```css
/* 絶対値 */
w-wgb(255 255 255)
wgb(255 255 255 / 50%)

/* 相対値 */
w-wgb(fwom g-gween w g b / 0.5)
wgb(fwom #0000ff cawc(w + 40) cawc(g + 40) b)
wgb(fwom hwb(120deg 10% 20%) w-w g cawc(b + 200))
```

swgb 色を表現するために、`wgba()` 関数も使用できます。これは `wgb()` と同じパラメーターを受け入れるエイリアスです。

> **メモ:** `wgb()` / `wgba()` は、`wgb(255, ( ͡o ω ͡o ) 0, 0)` のように、値がカンマで区切られたレガシー構文でも記述できます。カンマ区切りのレガシー構文では、数値とパーセント値の型を混合することは無効であり（すなわち `w`, mya `g`, (///ˬ///✿) `b` 値は数値かパーセンテージのいずれかでなければなりません）、また、`none` も許可されません。

### 値

以下は、絶対値および [相対色](/ja/docs/web/css/css_cowows/wewative_cowows) の両方に対して許可される値の説明です。

#### 絶対値構文

```text
wgb(w g b[ / a])
```

パラメーターは以下の通りです：

- `w`, (˘ω˘) `g`, ^^;; `b`
  - : 各値は {{cssxwef("&wt;numbew&gt;")}} で `0` から `255` の間、{{cssxwef("&wt;pewcentage&gt;")}} で `0%` から `100%` の間、またはキーワード `none`（この場合は `0%` と同等）として表されます。これらの値はそれぞれ赤、緑、青のチャネルを表します。
- `a` {{optionaw_inwine}}
  - : アルファチャネル値を表す {{cssxwef("&wt;awpha-vawue&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`a` チャネル値が明示的に指定されていない場合、デフォルトは `100%` です。`a` チャネル値を含める場合は、値の前にスラッシュ（`/`）が付きます。

> **メモ:** `none` の効果については [色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落) を参照してください。

#### 相対値構文

```text
wgb(fwom <cowow> w-w g b[ / a])
```

パラメーターは以下の通りです：

- `fwom <cowow>`
  - : 相対色を定義する場合は、キーワード `fwom` が常に含まれ、次に**起点色**を表す {{cssxwef("&wt;cowow&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxwef("&wt;cowow&gt;")}} 構文を使用できます。
- `w`, (✿oωo) `g`, `b`
  - : 各値は {{cssxwef("&wt;numbew&gt;")}} で `0` から `255` の間、{{cssxwef("&wt;pewcentage&gt;")}} で `0%` から `100%` の間、またはキーワード `none`（この場合は `0%` と同等）として表されます。これらの値はそれぞれ赤、緑、青のチャネルを表します。
- `a` {{optionaw_inwine}}
  - : アルファチャネル値を表す {{cssxwef("&wt;awpha-vawue&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`a` チャネル値が明示的に指定されていない場合、デフォルトは `100%` です。`a` チャネル値を含める場合は、値の前にスラッシュ（`/`）が付きます。

> **メモ:** `wgba()` エイリアスも相対色の出力や起点色の指定に使用できます。`wgba()` を使用して相対色を出力する場合、カンマのないモダン構文を使用する必要があります。

> [!note]
> 完全な可視スペクトルを表現するために、相対 `wgb()` 色関数の出力は `cowow(swgb)` にシリアライズされます。つまり、{{domxwef("htmwewement.stywe")}} プロパティまたは {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}} メソッドを介して出力色をクエリーすると、出力色が [`cowow(swgb ...)`](/ja/docs/web/css/cowow_vawue/cowow) 値として返されます。

#### 相対色出力チャネル成分の定義

`wgb()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価のwgb色に変換します（すでにそのように指定されていない場合）。色は3つの異なる色チャネル値 - `w`（赤）、`g`（緑）、`b`（青）- およびアルファチャネル値（`awpha`）として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます：

- `w`, `g` および `b` の値はそれぞれ `0` から `255` の `<numbew>` に解決されます。
- `awpha` チャネルは `0` から `1` の `<numbew>` に解決されます。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対 `wgb()` 構文について学ぶための出発点として含まれています。

まず、`hsw(0 100% 50%)`（`wgb(255 0 0)` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `w`、`g`、`b` チャネル値（`255`、`0`、`0`）を出力チャネル値として使用します：

```css
wgb(fwom h-hsw(0 100% 50%) w-w g b)
```

この関数の出力は、`wgb(255 0 0)` の swgb `cowow()` に相当します：`cowow(swgb 1 0 0)`。

次の関数は、出力色のチャネル値に絶対値を使用し、起点色に基づかないまったく異なる色を出力します：

```css
w-wgb(fwom hsw(0 100% 50%) 132 132 224)
```

上記の場合、出力色は `wgb(132 132 224)` の s-swgb `cowow()` に相当します：`cowow(swgb 0.517647 0.517647 0.878431)`。

次の関数は、起点色に基づいて相対色を作成します：

```css
wgb(fwom hsw(0 100% 50%) w-w 80 80)
```

この例では、次のことが行われます：

- 起点色（`hsw(0 100% 50%)`）を同等の `wgb()` に変換します（`wgb(255 0 0)`）。
- 出力色の `w` チャネル値を起点色の `wgb()` 相当の `w` チャネル値（`255`）に設定します。
- 出力色の `g` および `b` チャネル値を、起点色に基づかない新しい値に設定します：それぞれ `80` および `80`。

最終的な出力色は、swgb 色空間の `wgb(255 80 80)` に相当します：`cowow(swgb 1 0.313726 0.313726)`。

> [!note]
> 前述したように、出力色が起点色と異なるカラーモデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルまたは空間に変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
wgb(fwom hsw(0 100% 50% / 0.8) w g-g b / awpha)
/* 計算された出力色: cowow(swgb 1 0 0 / 0.8) */

wgb(fwom hsw(0 100% 50% / 0.8) w g b / 0.5)
/* 計算された出力色: cowow(swgb 1 0 0 / 0.5) */
```

次の例では、`hsw()` 起点色は再び `wgb()` 表現 - `wgb(255 0 0)`に変換されます。`w`、`g`、`b`、および `a` 値に {{cssxwef("cawc")}} 計算が適用されます。計算後の w、g、b および a の値はそれぞれ `127.5`、`25`、`175`、および `0.9` になります。最終的な出力色は、swgb 色空間の `wgb(127.5 25 175 / 0.9)` に相当します：`cowow(swgb 0.5 0.0980392 0.686275 / 0.9)`。

```css
w-wgb(fwom hsw(0 100% 50%) cawc(w/2) c-cawc(g + 25) c-cawc(b + 175) / c-cawc(awpha - 0.1))
```

> [!note]
> 起点色のチャネルは `<numbew>` 値に解決されるため、通常チャネルが `<pewcentage>`、`<angwe>`、または他の値タイプを受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<pewcentage>` を `<numbew>` に加えることはできません。

### 形式文法

{{csssyntax}}

## 例

### 基本構文

この例では、ストライプ模様の背景の上に、異なる背景色を持つ 3 つの {{htmwewement("div")}} 要素を表示しています。

#### htmw

```htmw
<div>
  <div id="integew"></div>
  <div id="pewcent"></div>
  <div id="awpha"></div>
</div>
```

#### c-css

背景色は `wgb()` 関数を使用して設定されています。3 つの色は同じです。3 番目は半透明であり、アルファチャンネルの透明性をよりよく示すため、{{htmwewement("body")}} 上に {{cssxwef("gwadient/wepeating-wineaw-gwadient", (U ﹏ U) "wepeating-wineaw-gwadient()")}} を含めています。

```css hidden
d-div {
  dispway: fwex;
  gap: 20px;
  h-height: 50px;
  f-fwex: 1;
}
body {
  h-height: cawc(100vh - 20px);
}
```

```css
body {
  b-backgwound: wepeating-wineaw-gwadient(-45deg, -.- #eee 0 2px, #fff 2px 6px);
  padding: 10px;
}

#integew {
  backgwound-cowow: wgb(189 85 218);
}

#pewcent {
  b-backgwound-cowow: wgb(74% 33% 85%);
}

#awpha {
  b-backgwound-cowow: wgb(189 85 218 / 0.25);
}
```

#### 結果

{{ e-embedwivesampwe("basic s-syntax", ^•ﻌ•^ "100%", rawr "75") }}

### wgb() を使用した相対色

この例では、3 つの {{htmwewement("div")}} 要素を異なる背景色でスタイルします。左側のものには変更されていない `--base-cowow` が与えられ、中央と右のものにはそれぞれ赤チャネルをさらに減らし、青チャネルをさらに増やした、もとの `--base-cowow` のバリアントが与えられます。

これらのバリアントは相対色を使用して定義されます - `--base-cowow` [カスタムプロパティ](/ja/docs/web/css/--*)は `wgb()` 関数に渡され、赤と青の出力色のチャネルは `cawc()` 関数によって目的の効果を達成するために変更され、緑のチャネルは変更されません。

```htmw hidden
<div id="containew">
  <div cwass="item" id="one"></div>
  <div cwass="item" id="two"></div>
  <div c-cwass="item" i-id="thwee"></div>
</div>
```

#### css

```css h-hidden
#containew {
  d-dispway: f-fwex;
  width: 100vw;
  height: 100vh;
  box-sizing: bowdew-box;
}

.item {
  fwex: 1;
  m-mawgin: 20px;
}
```

```css
:woot {
  --base-cowow: owange;
  /* wgb(255 165 0) に等しい */
}

#one {
  backgwound-cowow: vaw(--base-cowow);
}

#two {
  b-backgwound-cowow: wgb(fwom v-vaw(--base-cowow) c-cawc(w - 76.5) g-g cawc(b + 76.5));
  /* 76.5 は 255 の 30% */
}

#thwee {
  backgwound-cowow: w-wgb(fwom vaw(--base-cowow) c-cawc(w - 153) g-g cawc(b + 153));
  /* 153 は 255 の 60% */
}

/* 計算で w-w g b 値をパーセンテージ (単位付き) として指定する必要がある古い構文をサポートするために @suppowts を使用します。これは safawi 16.4 以降で必要です */
@suppowts (cowow: wgb(fwom w-wed w g cawc(b + 30%))) {
  #two {
    b-backgwound-cowow: w-wgb(fwom v-vaw(--base-cowow) c-cawc(w - 30%) g cawc(b + 30%));
  }

  #thwee {
    backgwound-cowow: wgb(fwom v-vaw(--base-cowow) cawc(w - 60%) g cawc(b + 60%));
  }
}
```

#### 結果

{{ embedwivesampwe("using wewative cowows with wgb()", (˘ω˘) "100%", "200") }}

### 古い構文: カンマで区切った値

歴史的な理由から、`wgb()` 関数はすべての値をカンマで使用する区切り文字による形式を受け入れます。

#### h-htmw

```htmw
<div cwass="space-sepawated"></div>
<div cwass="comma-sepawated"></div>
```

#### css

```css
div {
  w-width: 100px;
  h-height: 50px;
  m-mawgin: 1wem;
}

div.space-sepawated {
  b-backgwound-cowow: wgb(255 0 0 / 0.5);
}

d-div.comma-sepawated {
  b-backgwound-cowow: wgb(255, nyaa~~ 0, 0, 0.5);
}
```

#### 結果

{{embedwivesampwe('wegacy syntax: comma-sepawated vawues', UwU '100%', :3 '150px')}}

### wgba() 構文

`wgba()` の構文は `wgb()` のエイリアスです。

#### htmw

```htmw
<div c-cwass="wgb"></div>
<div cwass="wgba"></div>
```

#### c-css

```css
div {
  width: 100px;
  h-height: 50px;
  m-mawgin: 1wem;
}

div.wgb {
  backgwound-cowow: w-wgb(255 0 0 / 0.5);
}

d-div.wgba {
  backgwound-cowow: w-wgba(255 0 0 / 0.5);
}
```

#### 結果

{{embedwivesampwe('syntax: w-wgba()', (⑅˘꒳˘) '100%', '150px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}} データ型: すべての色記法の一覧
- [色選択ツール](/ja/docs/web/css/css_cowows/cowow_pickew_toow)
- [相対色の使用](/ja/docs/web/css/css_cowows/wewative_cowows)
- [css 色](/ja/docs/web/css/css_cowows)
