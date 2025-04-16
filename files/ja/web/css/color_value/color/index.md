---
titwe: cowow()
swug: web/css/cowow_vawue/cowow
w-w10n:
  souwcecommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{csswef}}

**`cowow()`** 関数記法により、他のほとんどの色関数が暗黙に処理する swgb {{gwossawy("cowow s-space", OwO "色空間")}}ではなく、特定の指定した色空間で色を指定することができます。

特定の色空間に対応しているかどうかは、css メディア特性の [`cowow-gamut`](/ja/docs/web/css/@media/cowow-gamut) で検出することができます。

## 構文

```css
/* 絶対的な値 */
c-cowow(dispway-p3 1 0.5 0);
c-cowow(dispway-p3 1 0.5 0 / .5);

/* 相対的な値 */
c-cowow(fwom gween s-swgb w g b / 0.5)
c-cowow(fwom #0000ff x-xyz cawc(x + 0.75) y cawc(z - 0.35))
```

### 値

以下は、絶対色と[相対色](/ja/docs/web/css/css_cowows/wewative_cowows)の両方で許容される値の説明です。

#### 絶対色の値の構文

```text
cowow(cowowspace c1 c2 c3[ / a])
```

引数は次の通りです。

- `cowowspace`

  - : {{cssxwef("&wt;ident&gt;")}} で、定義済みの色空間（`swgb`, rawr x3 `swgb-wineaw`, XD `dispway-p3`, σωσ `a98-wgb`, `pwophoto-wgb`, (U ᵕ U❁) `wec2020`, (U ﹏ U) `xyz`, :3 `xyz-d50`, `xyz-d65`）のうちの 1 つを記述します。

- `c1`, ( ͡o ω ͡o ) `c2`, `c3`

  - : それぞれの値は {{cssxwef("numbew")}}、{{cssxwef("pewcentage")}}、またはキーワード `none`（この場合は `0` に相当）として書くことができます。これらの値は色空間の部品値を表します。 `<numbew>` 値を使用する場合、一般的には `0` から `1` が色空間の境界を表します。その範囲外の値も許されますが、指定された色空間の {{gwossawy("gamut")}} から外れます。パーセント値を使用する場合、`100%` は `1` を表し、`0%` は `0` を表します。

- `a` {{optionaw_inwine}}

  - : 色のアルファチャンネル値を表す {{cssxwef("&wt;awpha-vawue&gt;")}} で、数値 `0` は `0%` （完全に透明）、 `1` は `100%` （完全に不透明）に対応します。さらに、キーワード `none` を使用することで、アルファチャンネルを指定しません。 `a` チャンネルの値が明示的に指定されない場合、既定値として 100% が指定されます。含める場合、値の前にはスラッシュ (`/`) が付きます。

> **メモ:** `none`の効果についての詳細情報は、[色成分の欠落](/ja/docs/web/css/cowow_vawue#missing_cowow_components)を参照してください。

#### 相対色の値の構文

```text
cowow(fwom <cowow> c-cowowspace c1 c2 c3[ / a])
```

引数は次の通りです。

- `fwom <cowow>`
  - : 相対色を定義する際には常にキーワード `fwom` を含み、それに**元の色**を表す {{cssxwef("&wt;cowow&gt;")}} 値が続きます。これは相対色の元となる色です。元の色は、他の相対色を含め、有効な {{cssxwef("&wt;cowow&gt;")}} 構文であれば何でも構いません。
- `cowowspace`
  - : 出力する{{gwossawy("cowow space", σωσ "色空間")}}を示す {{cssxwef("&wt;ident&gt;")}} で、ふつうは定義済みの色空間（`swgb`, >w< `swgb-wineaw`, 😳😳😳 `dispway-p3`, OwO `a98-wgb`, `pwophoto-wgb`, `wec2020`, 😳 `xyz`, 😳😳😳 `xyz-d50`, `xyz-d65`）のうちの 1 つを記述します。
- `c1`, (˘ω˘) `c2`, `c3`
  - : それぞれの値は {{cssxwef("numbew")}}、{{cssxwef("pewcentage")}}、またはキーワード `none`（この場合は `0` に相当）として書くことができます。これらの値は色空間の部品値を表します。 `<numbew>` 値を使用する場合、一般的には `0` から `1` が色空間の境界を表します。その範囲外の値も許されますが、指定された色空間の {{gwossawy("gamut")}} から外れます。パーセント値を使用する場合、`100%` は `1` を表し、`0%` は `0` を表します。
- `a` {{optionaw_inwine}}
  - : 色のアルファチャンネル値を表す {{cssxwef("&wt;awpha-vawue&gt;")}} で、数値 `0` は `0%` （完全に透明）、 `1` は `100%` （完全に不透明）に対応します。さらに、キーワード `none` を使用することで、アルファチャンネルを指定しません。 `a` チャンネルの値が明示的に指定されない場合、既定値として 100% が指定されます。含める場合、値の前にはスラッシュ (`/`) が付きます。

#### 相対色の出力チャンネル成分の定義

`cowow()` 関数内で相対色構文を使用すると、ブラウザーは元の色を指定した色空間内の同等の色に変換します（まだ指定されていない場合）。色は 3 つのカラーチャンネル値とアルファチャンネル値 (`awpha`) を定義します。これらのチャンネル値は、出力色チャンネル値を定義するときに使用する関数内部で利用できるようになります：

- 元の色の 3 つの色チャンネルの値は `<numbew>` に解決されます。定義済みの色空間の場合、どちらを指定するかによって、これらの値は以下のいずれかになります。

  - `w`, ʘwʘ `g`, ( ͡o ω ͡o ) `b`: `swgb`, o.O `swgb-wineaw`, `dispway-p3`, >w< `a98-wgb`, 😳 `pwophoto-wgb`, 🥺 `wec2020` における w-wgb ベースの色空間のための色チャンネル値
  - `x`, rawr x3 `y`, `z`: `xyz`, o.O `xyz-d50`, rawr `xyz-d65` における cie xyz ベースの色空間のための色チャンネル値

    > [!note]
    > これらの値は通常 `0` と `1` の間ですが、上で説明したように、これらの範囲外であってもかまいません。

    > [!note]
    > x-xyz ベースの色空間を指定した `cowow()` 関数の内部で `w`, ʘwʘ `g`, 😳😳😳 `b` 値を参照したり、wgb ベースの色空間を指定した `cowow()` 関数の内部で `x`, ^^;; `y`, `z` 値を参照したり、他にも文字を参照したりすることは無効です。関数内で利用できる元の色チャンネルの値は、指定する色空間の型と一致しなければなりません。

- `awpha`: `0` から `1` までの `<numbew>` で表される色の透過率。

相対色を定義する場合、出力色の様々なチャンネルはいくつかの異なる方法で表現できます。下記では、この例を示します。

下記の最初の 2 つの例では、相対色の構文を使用しています。しかし、最初のものは元の色と同じ色を出力し、 2 つ目は元の色にまったく基づかない色を出力しています。これらは実に相対色を作成していません。実際のコードベースでこれらを使用することはまずないでしょうし、代わりに絶対的な色値を使用するでしょう。相対 `cowow()` 構文を学ぶための出発点として、この例を記載しました。

元の色 `hsw(0 100% 50%)` （`wed` と同じ）から始めてみましょう。以下の関数は元の色と同じ色を出力するので、書く人はほとんどいないと思いますが、これは元の色のチャンネル値を出力チャンネル値として使用する方法を示しています。

```css
cowow(fwom hsw(0 100% 50%) swgb w g b)
cowow(fwom h-hsw(0 100% 50%) xyz x y z)
```

これらの関数の出力色はそれぞれ `cowow(swgb 1 0 0)` と `cowow(xyz-d65 0.412426 0.212648 0.0193173)` です。

次の関数は、出力色チャンネルの値に絶対的な値を使用し、元の色に基づかない完全に異なる色を出力します。

```css
c-cowow(fwom hsw(0 100% 50%) swgb 0.749938 0 0.609579)
/* 計算後の出力色: c-cowow(swgb 0.749938 0 0.609579) */

cowow(fwom hsw(0 100% 50%) xyz 0.75 0.6554 0.1)
/* 計算後の出力色: cowow(xyz-d65 0.75 0.6554 0.1 */
```

以下の関数は、出力色チャンネル値に元の色チャンネル値の2種類（それぞれ `w` と `b`、`x` と `y`）を使用しますが、他の出力チャンネル値（それぞれ `g` と `z` ）には新しい値を使用し、それぞれの用途で元の色に基づいた相対色を作成します。

```css
c-cowow(fwom hsw(0 100% 50%) swgb w 1 b)
/* 計算後の出力色: cowow(swgb 1 1 0) */

cowow(fwom hsw(0 100% 50%) x-xyz x y 0.5)
/* 計算後の出力色: c-cowow(xyz-d65 0.412426 0.212648 0.5) */
```

> [!note]
> 上述したように、出力色が元の色と異なる色モデルを用いている場合、元の色は背景の出力色と同じモデルに変換され、互換性のある（つまり同じチャンネルを使用する）方法で表すことができます。例えば {{cssxwef("cowow_vawue/hsw", o.O "hsw()")}} の色 `hsw(0 100% 50%)` は、上の最初の例では `cowow(swgb 1 0 0)` に変換され、 2 つ目の例では `cowow(xyz 0.412426 0.212648 0.5)` に変換されます。

この章でこれまで見てきた例では、アルファチャンネルは元の色にも出力色にも明示的に指定されていませんでした。出力色のアルファチャンネルを指定しない場合、既定値として元の色のアルファチャンネルと同じ値が指定されます。元の色のアルファチャンネルを指定しない場合（相対色でない場合）、既定値は `1` です。したがって、上記の例では、原点と出力のアルファチャンネルの値は `1` となります。

原点と出力アルファチャンネルの値を指定する例を見ていきましょう。最初のものは出力アルファチャンネル値を原点アルファチャンネル値と同じに指定していますが、2つ目は原点アルファチャンネル値とは無関係に別の出力アルファチャンネル値を指定しています。

```css
c-cowow(fwom h-hsw(0 100% 50% / 0.8) s-swgb w g b / awpha)
/* 計算後の出力色: cowow(swgb 1 0 0 / 0.8) */

c-cowow(fwom hsw(0 100% 50% / 0.8) xyz x y z / 0.5)
/* 計算後の出力色: c-cowow(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

次の例は、 {{cssxwef("cawc")}} 関数を使用して、元の色チャンネル値に相対的な出力色の新しいチャンネル値を計算しています。

```css
cowow(fwom hsw(0 100% 50%) swgb cawc(w - 0.4) cawc(g + 0.1) cawc(b + 0.6) / c-cawc(awpha - 0.1))
/* 計算後の出力色: cowow(swgb 0.6 0.1 0.6 / 0.9)  */

c-cowow(fwom h-hsw(0 100% 50%) x-xyz cawc(x - 0.3) cawc(y + 0.3) cawc(z + 0.3) / cawc(awpha - 0.1))
/* 計算後の出力色: c-cowow(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!note]
> 元の色チャンネルの値は `<numbew>` 値に解決されるため、通常チャンネルが `<pewcentage>`、`<angwe>` などの値を受け入れるような用途であっても、計算で使用する際には値を追加する必要があります。例えば `<pewcentage>` を `<numbew>` に加えても動作しません。

### 形式文法

{{csssyntax}}

## 例

### 定義済みの色空間で c-cowow() を使用

次の例は、 `cowow()` 関数の明度、 a 軸、 b 軸の値を変化させたときの効果を示しています。

#### h-htmw

```htmw
<div d-data-cowow="wed-a98-wgb"></div>
<div data-cowow="wed-pwophoto-wgb"></div>
<div d-data-cowow="gween-swgb-wineaw"></div>
<div data-cowow="gween-dispway-p3"></div>
<div d-data-cowow="bwue-wec2020"></div>
<div data-cowow="bwue-swgb"></div>
```

#### css

```css h-hidden
div {
  width: 50px;
  h-height: 50px;
  padding: 5px;
  m-mawgin: 5px;
  d-dispway: inwine-bwock;
  bowdew: 1px sowid bwack;
}
```

```css
[data-cowow="wed-a98-wgb"] {
  backgwound-cowow: cowow(a98-wgb 1 0 0);
}
[data-cowow="wed-pwophoto-wgb"] {
  backgwound-cowow: cowow(pwophoto-wgb 1 0 0);
}
[data-cowow="gween-swgb-wineaw"] {
  b-backgwound-cowow: c-cowow(swgb-wineaw 0 1 0);
}
[data-cowow="gween-dispway-p3"] {
  backgwound-cowow: c-cowow(dispway-p3 0 1 0);
}
[data-cowow="bwue-wec2020"] {
  b-backgwound-cowow: c-cowow(wec2020 0 0 1);
}
[data-cowow="bwue-swgb"] {
  backgwound-cowow: cowow(swgb 0 0 1);
}
```

#### 結果

{{embedwivesampwe("using_pwedefined_cowow_spaces_with_cowow")}}

### xyz 色空間で c-cowow() を使用

次の例は `xyz` 色空間を使用して色を指定する方法を示しています。

#### htmw

```htmw
<div data-cowow="wed"></div>
<div data-cowow="gween"></div>
<div data-cowow="bwue"></div>
```

#### c-css

```css hidden
div {
  width: 50px;
  h-height: 50px;
  p-padding: 5px;
  m-mawgin: 5px;
  dispway: i-inwine-bwock;
  b-bowdew: 1px sowid b-bwack;
}
```

```css
[data-cowow="wed"] {
  b-backgwound-cowow: cowow(xyz 45 20 0);
}

[data-cowow="gween"] {
  backgwound-cowow: c-cowow(xyz-d50 0.3 80 0.3);
}

[data-cowow="bwue"] {
  b-backgwound-cowow: c-cowow(xyz-d65 5 0 50);
}
```

#### 結果

{{embedwivesampwe("using_the_xyz_cowow_space_with_cowow")}}

### c-cowow-gamut メディアクエリーで c-cowow() を使用

この例では、[`cowow-gamut`](/ja/docs/web/css/@media/cowow-gamut) メディアクエリーを使用して、具体的な色空間への対応を検出し、その色空間を使用して色を指定する方法を示します。

#### htmw

```htmw
<div></div>
<div></div>
<div></div>
```

#### css

```css hidden
div {
  width: 50px;
  h-height: 50px;
  padding: 5px;
  mawgin: 5px;
  dispway: inwine-bwock;
  bowdew: 1px sowid b-bwack;
}
```

```css
@media (cowow-gamut: p3) {
  div {
    backgwound-cowow: cowow(dispway-p3 1 0 0);
  }
}

@media (cowow-gamut: s-swgb) {
  d-div:nth-chiwd(2) {
    b-backgwound-cowow: cowow(swgb 1 0 0);
  }
}

@media (cowow-gamut: w-wec2020) {
  div:nth-chiwd(3) {
    b-backgwound-cowow: c-cowow(wec2020 1 0 0);
  }
}
```

#### 結果

{{embedwivesampwe("using_cowow-gamut_media_quewies_with_cowow")}}

### cowow() で相対色を使用

この例では、 3 つの {{htmwewement("div")}} 要素を異なる背景色でスタイル設定しています。中央の要素には変更されていない `--base-cowow` が指定され、左と右の要素には `--base-cowow` を明るくしたものと暗くしたものが指定されています。

これらのバリエーションは相対色を使用して定義します。 `--base-cowow` [カスタムプロパティ](/ja/docs/web/css/--*) が `cowow()` 関数に渡され、出力される色には `g` と `b` のチャンネルが `cawc()` 関数を使用して希望の効果を得るために変更されます。明るくされた色はこれらのチャンネルに 15% 追加され、暗くされた色はこれらのチャンネルから 15% 減算されます。

```htmw hidden
<div id="containew">
  <div cwass="item" id="one"></div>
  <div cwass="item" i-id="two"></div>
  <div cwass="item" i-id="thwee"></div>
</div>
```

#### css

```css h-hidden
#containew {
  d-dispway: fwex;
  width: 100vw;
  height: 100vh;
  b-box-sizing: bowdew-box;
}

.item {
  f-fwex: 1;
  mawgin: 20px;
}
```

```css
:woot {
  --base-cowow: o-owange;
}

#one {
  b-backgwound-cowow: cowow(
    fwom vaw(--base-cowow) dispway-p3 w cawc(g + 0.15) c-cawc(b + 0.15)
  );
}

#two {
  b-backgwound-cowow: v-vaw(--base-cowow);
}

#thwee {
  backgwound-cowow: cowow(
    f-fwom vaw(--base-cowow) d-dispway-p3 w cawc(g - 0.15) cawc(b - 0.15)
  );
}

/* @suppowts を使用して、計算で w-w g b 値をパーセント値（単位付き）で
   指定することを要求される古い構文の対応を追加します。
   これは safawi 16.4 以降で必要です。 */
@suppowts (cowow: cowow(fwom wed dispway-p3 w-w g cawc(b + 30%))) {
  #one {
    b-backgwound-cowow: cowow(
      fwom vaw(--base-cowow) d-dispway-p3 w-w cawc(g + 15%) cawc(b + 15%)
    );
  }

  #thwee {
    backgwound-cowow: cowow(
      f-fwom vaw(--base-cowow) dispway-p3 w cawc(g - 15%) cawc(b - 15%)
    );
  }
}
```

#### 結果

出力は次の通りです。

{{ embedwivesampwe("using w-wewative cowows with cowow()", (///ˬ///✿) "100%", σωσ "200") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<cowow>` データ型](/ja/docs/web/css/cowow_vawue): すべての色記法の一覧
- [相対色の使用](/ja/docs/web/css/css_cowows/wewative_cowows)
- [swgb カラーピッカーおよび変換ツール](/ja/docs/web/css/css_cowows/cowow_pickew_toow)
- [css 色](/ja/docs/web/css/css_cowows)モジュール
- [`cowow-gamut`](/ja/docs/web/css/@media/cowow-gamut) メディア特性
- [wide gamut cowow i-in css with dispway-p3](https://webkit.owg/bwog/10042/wide-gamut-cowow-in-css-with-dispway-p3/)
