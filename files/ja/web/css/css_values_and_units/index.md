---
title: CSS 値と単位
slug: Web/CSS/CSS_Values_and_Units
tags:
  - CSS
  - ガイド
  - リファレンス
  - 値と単位
translation_of: Web/CSS/CSS_Values_and_Units
---
{{CSSRef}}

CSS 宣言はすべて、プロパティと値の組を含みます。プロパティによって、値は単純な整数やキーワードから、一連のキーワードや単位つき・単位なしの値などを含みます。CSS プロパティには受け付けるデータ型の組み合わせ -- 値と単位 -- があります。以下ではデータ型の大部分を概観します。より詳しい情報は、それぞれのデータ型のページを参照してください。

## テキストのデータ型

- {{cssxref("&lt;custom-ident&gt;")}}
- `<ident>` として定義済みのキーワード
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url()","url()")}}

テキストデータ型は、引用符で囲まれた文字の並びである `<string>` と、引用符で囲まれていない文字列、すなわち「CSS 識別子」である `<ident>` のどちらかです。 `<string>` は単一引用符か二重引用符のどちらかで囲まれます。仕様書で `<ident>` または `<custom-ident>` として挙げられている CSS 識別子は、引用符で囲んではいけません。

CSS の仕様では、ウェブ開発者が定義できる値には、アニメーションのキーフレームやフォントファミリーの名前、グリッドエリアなどがあり、これらは {{cssxref("&lt;custom-ident&gt;")}} または {{cssxref("&lt;string&gt;")}} またはその両方の形式で記述します。

ユーザーが定義するテキスト値のうち、引用符があってもなくてもよい箇所では、仕様書には `<custom-ident> | <string>`のように記してあります。これは、例えばアニメーション名のように、引用符が任意だということです。

```css
@keyframe validIdent {
  /* ここにキーフレーム */
}
@keyframe 'validString' {
  /* ここにキーフレーム */
}
```

引用符で囲んではいけないテキスト値もあります。たとえば {{cssxref("grid-area")}} の値は `<custom-ident>` なので、もし `content` という名前のグリッドエリアがあれば、それは引用符なしで書きます。

```css
.item {
  grid-area: content;
}
```

いっぽう、 {{cssxref("&lt;string&gt;")}} のデータ型、たとえば {{cssxref("content")}} プロパティの文字列値には引用符が必要です。

```css
.item::after {
    content: "This is my content.";
}
```

どんな名前でも (絵文字を含んでいるものでも) 一般的には作れますが、識別子については `none`、`unset`、 `initial`、`inherit` にはできず、先頭を数字や二重ダッシュにすることもできません。また、一般的に CSS のそのほかの定義済みキーワードを使用することは避けるのが好ましいです。詳しくは {{cssxref("&lt;custom-ident&gt;")}} と {{cssxref("&lt;string&gt;")}} のリファレンスページを参照してください。

### 定義済みキーワード値

定義済みキーワードは、特定のプロパティ用に仕様で定義されているテキスト値です。これらのキーワードは CSS 識別子でもあるので、引用符なしで使用します。

CSS の仕様書や MDN のプロパティページで、CSS プロパティの値の構文を見ると、そこに書けるキーワードは次のような形式で列挙されているでしょう。以下の値は、{{cssxref("float")}} で使用できる定義済みキーワードです。

```css
left | right | none | inline-start | inline-end
```

こうした値は引用符なしで使用します。

```css
.box {
    float: left;
}
```

### CSS 全般の値

プロパティ用に仕様で定められている定義済みキーワードのほかに、すべての CSS プロパティで使える CSS 全般のプロパティ値として、{{cssxref("initial")}}、{{cssxref("inherit")}}、{{cssxref("unset")}} があります。これらは既定値への戻し方を明示するために使用します。

`initial` キーワードは、そのプロパティの初期値として指定された値を表します。`inherit` キーワードは、その要素の親要素のプロパティで計算された値を表し、親の値を継承します。

`unset` キーワードは、そのプロパティが継承されているか否かによって、`inherit` または `initial` のいずれかと同じ動きになります。

{{cssxref("revert")}} という 4 つめの値が Cascade Level 4 の仕様で追加されましたが、いまのところブラウザーの対応状況は好ましくありません。

### URL

{{cssxref("url()","url()")}} 型は関数記法を使用し、 URL である `<string>` を受け取ります。これは絶対 URL または相対 URL です。例えば、背景画像を読み込みたいときには以下のどちらの使い方でもできます。

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

`url()` の引数は引用符があってもなくてもかまいません。引用符をつけない場合には、`<url-token>` と同様に解釈され、特定の文字のエスケープを行う必要があるなど、独自の要件があります。詳しくは {{cssxref("url()","url()")}} を参照してください。

## 数値データ型

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### 整数

整数は 1 桁以上の `0` から `9` の十進数で、`1024`、`-55` など該当します。整数は `+` や `-` を先頭に付けることができますが、記号と整数の間に空白を開けないでください。

### 数値

{{cssxref("&lt;number&gt;")}} は実数を表します。小数点以下の小数部はあってもなくても構いません。例えば `0.255`、`128`、`-1.2` が該当します。数値にも `+` や `-` の記号を先頭に付けることができます。

### 大きさ

{{cssxref("&lt;dimension&gt;")}} は、`<number>` に単位が付いたものです。例えば `45deg`、`100ms`、`10px` が該当します。付けた単位の識別子は大文字小文字が区別されません。数値と単位の間には、空白やその他の文字を入れないでください。例えば、`1 cm` は無効です。

CSS では、以下のものを表すために寸法を使います。

- {{cssxref("&lt;length&gt;")}} (距離の単位)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

以下の節で、これらについて説明します。

#### 長さの単位

長さ (距離) の単位がプロパティの値として使用できるとき、これを {{cssxref("&lt;length&gt;")}} 型と呼びます。CSS の長さには、相対的な長さと絶対的な長さの 2 種類があります。

相対的な長さの単位は、他のものを基準に長さを表します。例えば、`em` はその要素のフォントの大きさを基準とする値で、`vh` はビューポートの高さを基準とする値です。

| 単位   | 基準                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | その要素のフォントの大きさ                                                                                                              |
| `ex`   | その要素のフォントの x-height                                                                                                        |
| `cap`  | その要素のフォントの Cap height (大文字の名目上の高さ)                                                              |
| `ch`   | その要素のフォントにおける narrow グリフの平均文字送り幅で、“0” (ZERO, U+0030) のグリフを表す                     |
| `ic`   | その要素のフォントにおける full width グリフの平均文字送り幅で、“水” (CJK water ideograph, U+6C34) のグリフを表す |
| `rem`  | ルート要素のフォントの大きさ                                                                                                         |
| `lh`   | その要素の行の高さ                                                                                                            |
| `rlh`  | ルート要素の行の高さ                                                                                                       |
| `vw`   | ビューポートの幅の 1%                                                                                                                |
| `vh`   | ビューポートの高さの 1%                                                                                                               |
| `vi`   | ルート要素のインライン軸におけるビューポートの大きさの 1%。                                                                               |
| `vb`   | ルート要素のブロック軸におけるビューポートの大きさの 1%。                                                                                |
| `vmin` | ビューポートの小さい側の 1%。                                                                                                    |
| `vmax` | ビューポートの大きい側の 1%。                                                                                                     |

絶対的な長さの単位は物理的な長さであり、インチやセンチメートルなどと決まっています。そのため、これらの単位の多くは、印刷などの固定サイズの媒体への出力に向いています。たとえば、 `mm` は物理的なミリメートルで、センチメートルの 1/10 です。

| 単位 | 名称             | 換算                |
| ---- | ---------------- | ------------------- |
| `cm` | センチメートル   | 1cm = 96px/2.54     |
| `mm` | ミリメートル     | 1mm = 1/10th of 1cm |
| `Q`  | 1/4 ミリメートル | 1Q = 1/40th of 1cm  |
| `in` | インチ           | 1in = 2.54cm = 96px |
| `pc` | パイカ           | 1pc = 1/6th of 1in  |
| `pt` | ポイント         | 1pt = 1/72th of 1in |
| `px` | ピクセル         | 1px = 1/96th of 1in |

長さの値を使用する場合、その長さが `0` なら単位をつける必要はありません。そうでないときには、単位は必須で、大文字小文字は区別せず、値の数値部分の直後に空白をはさむことなく付けなければなりません。

#### 角度の単位

角度の値は {{cssxref("&lt;angle&gt;")}} 型で表され、以下の値を受け付けます。

| 単位   | 名称         | 説明                              |
| ------ | ------------ | --------------------------------- |
| `deg`  | 度           | 完全な円は 360 度です。           |
| `grad` | グラディアン | 完全な円は 400 グラディアンです。 |
| `rad`  | ラジアン     | 完全な円は 2π ラジアンです。     |
| `turn` | 周           | 完全な円は 1 周です。             |

#### 時間の単位

時間の値は {{cssxref("&lt;time&gt;")}} 型で表されます。時間の値を含めるときは、単位 -- the `s` か `ms` -- の指定が必要です。以下の値を受け付けます。

| 単位 | 名称   | 説明                     |
| ---- | ------ | ------------------------ |
| `s`  | 秒     |                          |
| `ms` | ミリ秒 | 1000 ミリ秒で 1 秒です。 |

#### 周期の単位

周期の値は {{cssxref("&lt;frequency&gt;")}} 型で表されます。以下の値を受け付けます。

| 単位  | 名称       | 説明                             |
| ----- | ---------- | -------------------------------- |
| `Hz`  | ヘルツ     | 1 秒間に発生する回数を表します。 |
| `kHz` | キロヘルツ | 1 キロヘルツは 1000 ヘルツです。 |

`1Hz` は `1hz` や `1HZ` とも表記でき、一秒あたり一周となります。

#### 解像度の単位

解像度の単位は {{cssxref("&lt;resolution&gt;")}} 型で表されます。これらは、CSS のインチ、センチメートル、ピクセルに収まるドット数を示すことで、画面などの視覚表現におけるドット 1 つの大きさを表します。以下の値を受け付けます。

| 単位        | 説明                             |
| ----------- | -------------------------------- |
| `dpi`       | インチ当たりのドット数。         |
| `dpcm`      | センチメートル当たりのドット数。 |
| `dppx`, `x` | ピクセル単位のドット数。         |

### パーセント

{{cssxref("&lt;percentage&gt;")}} は他の値の割合を表す型です。

パーセント値は、常に長さなどの他の量に対する相対的な値です。パーセントにできるプロパティごとに、パーセントが参照する量も定義されています。この量は、同じ要素の別のプロパティの値であったり、祖先要素のプロパティの値であったり、包含ブロックの測定値であったり、何か他のものであったりします。

例えば、ボックスの {{cssxref("width")}} をパーセントで指定した場合、ボックスの親要素で計算された幅を参照するパーセントになります。

```css
.box {
  width: 50%;
}
```

### パーセントと寸法の混合

一部のプロパティでは、2 つの型のいずれかの寸法を受け入れることがあります。`<length>` **または** `<percentage>` といった具合です。この場合の許容値は、{{cssxref("&lt;length-percentage&gt;")}} のように組合わせ単位として仕様書で詳解しています。他に取りうる組み合わせは以下の通りです。

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### 特殊データ型 (他の仕様書で定義)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### 色

{{cssxref("&lt;color&gt;")}} の値は要素機能 (背景色など) の色を指定します。これは [CSS 色モジュール](https://drafts.csswg.org/css-color-3/)で定義されています。

#### 画像

{{cssxref("&lt;image&gt;")}} の値は、CSS で使用できる各種すべての画像を指定します。これは [CSS 画像の値と置換要素モジュール](https://www.w3.org/TR/css-images-4/)で定義されています。

#### 位置

{{cssxref("&lt;position&gt;")}} 型は位置取りできる領域内におけるオブジェクトの 2D 位置を定義します。例えば、コンテナ要素内の背景画像がこれにあたります。この型は {{cssxref("background-position")}} として解釈されるために、[CSS の背景と境界の仕様書](https://www.w3.org/TR/css-backgrounds-3/) で定義されています。

### 関数記法

- {{cssxref("calc()", "calc()")}}
- {{cssxref("min()", "min()")}}
- {{cssxref("max()", "max()")}}
- {{cssxref("clamp()", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr()", "attr()")}}

[関数記法](/ja/docs/Web/CSS/CSS_Functions)は、 CSS でより複雑な型を表現したり、特殊な処理を呼び出すことができる値の型です。この構文は、関数名の直後に左括弧 `(` 、関数記法の引数、右括弧 `)` と続きます。関数は複数の引数を取ることができ、CSS のプロパティ値と同様の書式になります。

括弧内のホワイトスペースは許容されますが、任意です。(ただし、`min()`、`max()`、`clamp()` 関数については、各ページ内の空白に関する注意事項を参照してください。)

`rgba()` のように、古い関数記法の中にはカンマを使用するものもあります。しかし、カンマは一般的にリスト内の項目を区切るためにのみ使用されます。引数の区切りにカンマを使用するとき、カンマの前後に空白を入れるかどうかは任意です。

## 仕様書

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("CSS4 Values")}}</td>
      <td>{{Spec2("CSS4 Values")}}</td>
      <td>
        <code>vi</code>, <code>vb</code>, <code>ic</code>,
        <code>cap</code>, <code>lh</code>, <code>rlh</code> 単位の追加。<br />
        <code>min()</code>, <code>max()</code>, <code>clamp()</code> 関数記法の追加<br>
        <code>toggle()</code> の追加
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Values")}}</td>
      <td>{{Spec2("CSS3 Values")}}</td>
      <td>
        <code>calc()</code>, <code>ch</code>, <code>rem</code>, <code>vw</code>, <code>vw</code>, <code>vmin</code>, <code> vmax</code>, <code>Q</code> の追加
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td>{{Spec2("CSS4 Colors")}}</td>
      <td>
        <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,
        <code>hsla()</code> 関数のカンマ無し構文の追加。`rgb()` と `hsl()` にアルファ値を追加し、`rgba()` と `hsla()` をこれらへの (非推奨の) 別名に変更。<br />
        `rebeccapurple` 色キワードを追加。<br />
        4 と 8 桁の 16 進カラー値を追加、最後の桁はアルファ値を表します。<br />
        <code>hwb()</code>, <code>device-cmyk()</code>,
        <code>color()</code> 関数の追加。
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Colors")}}</td>
      <td>{{Spec2("CSS3 Colors")}}</td>
      <td>
        システム色を非推奨化。SVG 色を追加。<code>rgba()</code>, <code>hsl()</code>,
        <code>hsla()</code> 関数の追加。
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Images")}}</td>
      <td>{{Spec2("CSS4 Images")}}</td>
      <td>
        <p>
          <code>element()</code>, <code>image()</code>,
          <code>image-set()</code>, <code>conic-gradient()</code> の追加。
        </p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Images")}}</td>
      <td>{{Spec2("CSS3 Images")}}</td>
      <td>画像の初回定義。</td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS1")}}</td>
      <td>{{Spec2("CSS1")}}</td>
      <td>初回定義。</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

- [CSS 基本データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS 導入: 値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
