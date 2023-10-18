---
title: background-position
slug: Web/CSS/background-position
---

{{CSSRef}}

**`background-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、それぞれの背景画像の初期位置を設定します。位置は {{cssxref("background-origin")}} で設定された位置レイヤーからの相対です。

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## 構文

```css
/* キーワード値 */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> 値 */
background-position: 25% 75%;

/* <length> 値 */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* 複数の画像 */
background-position:
  0 0,
  center;

/* 辺からのオフセット値 */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* グローバル値 */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: unset;
```

`background-position` プロパティは 1 つ以上の `<position>` 値をカンマで区切って指定します。

### 値

- `<position>`

  - : {{cssxref("&lt;position&gt;")}} です。位置は要素のボックスの辺を基準にして項目を配置するための X/Y 座標を定義します。1～4つの値を使用して定義できます。2つのキーワード値でない値を使用する場合は、最初の値が水平位置を表し、2つ目の値が垂直位置を表します。1つの値しか指定されない場合、2つ目の値は `center` とみなされます。3つまたは4つの値が使用された場合は、 length-percentage 値はその前のキーワード値に対するオフセットです。

    **値 1 つの構文:** 値は以下のようになります。

    - `center` のキーワード値の場合は、画像を中央揃えにします。
    - キーワード値 `top`、 `left`、 `bottom`、 `right` のうちの一つの場合。アイテムを配置する辺を指定します。もう一方の寸法が 50% に設定されていれば、指定された端までの間の中央に配置されます。
    - {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の場合。これは左からの相対位置の X 座標を指定し、 Y 座標は 50% に設定されます。

    **値 2 つの構文:** 1 つ目の値が X を定義し、もう 1 つの値が Y を定義します。両方が以下の値を取ることができます。

    - キーワード値 `top`、 `left`、 `bottom`、 `right` のうちの一つの場合。ここで `left` または `right` が指定された場合は、これが X 座標を定義し、もう一方の値が Y 座標になります。 `top` または `bottom` が指定された場合は、これが Y 座標を定義し、もう一方の値が X 座標を定義します。
    - {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の場合。もう一方の値が `left` または `right` の場合、この値は上辺からの相対的な Y 座標を定義します。もう一方の値が `top` または `bottom` の場合、この値は左辺からの相対的な X 座標を定義します。両方の値が `<length>` または `<percentage>` の値である場合は、最初の値が X 座標を定義し、2 つ目の値が Y 座標を定義します。
    - 注: 一方の値が `top` または `bottom` である場合、もう一方の値を `top` または `bottom` にすることはできません。一方の値が `left` または `right` である場合、もう一方の値を `left` または `right` にすることはできません。すなわち、例えば `top top` や `left right` は妥当ではありません。
    - 既定値は `top left` または `0% 0%` です。

    **値 3 つの構文:** 2 つの値はキーワード値で、3 つ目の値はその前の値のオフセットです。

    - 最初の値はキーワード値 `top`, `left`, `bottom`, `right`, `center` のうちの 1 つです。ここで `left` または `right` が指定された場合は、これは X 座標を定義します。 `top` または `bottom` が指定された場合は、これは Y 座標を定義し、もう一方のキーワード値が X 座標を定義します。
    - {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値が 2 つ目の値であった場合は、最初の値に対するオフセットです。3 つ目の値であった場合は、2 つ目の値に対するオフセットです。
    - 単一の長さまたはパーセント値は、その前のキーワード値に対するオフセットです。1 つのキーワードに 2 つの keyword with two {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値の組み合わせは無効です。

    **値 4 つの構文:** 1 つ目と 3 つ目の値は、X と Y を定義するキーワード値で、2 つ目と 4 つ目の値は、先行する X と Y のキーワード値のオフセットです。

    - 1 つ目と 3 つ目の値は `top`, `left`, `bottom`, `right` のうちの 1 つです。ここで `left` または `right` が指定された場合、これは X を定義します。 `top` または `bottom` が指定された場合、これは Y を表し、もう一方のキーワード値が X を表します。
    - 2 つ目と 4 つ目の値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の値です。2 つ目の値は 1 つ目のキーワードのオフセットです。4 つ目の値は 3 つ目の値のオフセットです。

### パーセント値について

指定された背景画像の位置のパーセント値のオフセットは、コンテナーに対して相対的なものです。 0% の値は、背景画像の左 (または上) の端がコンテナーの対応する左 (または上) の端に整列していることを意味するか、または、画像の 0% マークがコンテナーの 0% マーク上にあることを意味します。 100％ の値は、背景画像の*右* (または*下*) の縁がコンテナーの*右* (または*下*) の縁と揃うか、または画像の 100％ マークがコンテナーの 100% マーク上になることを意味します。したがって、水平方向または垂直方向に 50% の値を設定すると、画像の 50% マークがコンテナーの 50% マーク上になるので、背景画像が中央に位置することになります。同様に、 `background-position: 25% 75%` は、画像の左から 25%、上から 75% の位置にある点が、コンテナーの左から 25%、上から 75% の位置にあるコンテナーの点に配置されることを意味します。

基本的に何が起こるかというと、背景画像の寸法が対応するコンテナーの寸法から*減算され*、その結果の値のパーセント値が左端（または上端）からの直接のオフセットとして使用されます。

```
(コンテナーの幅 - 画像の幅) * (position x%) = (x オフセット値)
(コンテナーの高さ - 画像の高さ) * (position y%) = (y オフセット値)
```

X 軸を例にすると、幅 300px の画像があり、それを幅 100px のコンテナーに入れて、 background-size を auto に設定して使用しているとします。

```
100px - 300px = -200px (コンテナーと画像の差)
```

ですから、位置のパーセント値が -25%, 0%, 50%, 100%, 125% であった場合、画像とコンテナーの橋のオフセット値は以下のようになります。

```
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

そのため、この例の結果の値では、**画像**の**左端**が**コンテナー**の**左端**からオフセットされています。

- \+ 50px (画像の左端を 100 ピクセル幅のコンテナーの中央に配置)
- 0px (画像の左端がコンテナーの左端に一致)
- -100px (画像の左端をコンテナーの左から 100px に配置。この例では画像の中央である 100px の位置が、コンテナーの中央になることを意味します)
- -200px (画像の左端をコンテナーの左から 200px に配置。この例では右の画像の端が右のコンテナーの端と一致することを意味します)
- -250px (画像の左端をコンテナーの左から 250px に配置。この例では 300px 幅の画像の右端をコンテナーの中央に置きます)

背景サイズが指定された軸のコンテナーのサイズと等しい場合、その軸のパーセント値位置は、「コンテナーと画像の差」がゼロになるので、何の効果もないことは言及しておく価値があります。絶対値を使ってオフセットする必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Positioning_background_images">背景画像の位置指定</h3>

以下の 3 つの例は、 {{cssxref("background")}} を使って黄色い四角形の要素とその中に星の画像を作成します。それぞれの例で、星は異なる位置にあります。加えて、3 つ目の例では 1 つの要素内にある 2 つの異なる背景画像の位置を指定する方法を示しています。

#### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
```

#### CSS

```css
/* すべての <div> で共有される */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* これらの例は background 一括指定プロパティを使用しています */
.exampleone {
  background: url("startransparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* 複数の背景画像: 各画像は対応する位置スタイルに、
   最初に指定されたものから順に対応付けられます。 */
.examplethree {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-position:
    0px 0px,
    right 3em bottom 2em;
}
```

#### 結果

{{EmbedLiveSample('Positioning_background_images', 420, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [複数の背景の使用](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
