---
titwe: wine-height
swug: web/css/wine-height
w-w10n:
  souwcecommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{csswef}}

**`wine-height`** は [css](/ja/docs/web/css) のプロパティで、[書字方向](/ja/docs/web/css/wwiting-mode#vewticaw-ww)が水平の場合は、行ボックスの高さを設定します。書字方向が垂直の場合は、行ボックスの幅を設定します。これは主にテキストの行間を設定するために使用します。書字方向が水平のブロックレベル要素では、要素に含まれる行ボックスの推奨される高さを指定し、非[置換](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)インライン要素では、行ボックスの高さの計算に使われる高さを指定します。

{{intewactiveexampwe("css d-demo: wine-height")}}

```css i-intewactive-exampwe-choice
w-wine-height: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wine-height: 2.5;
```

```css i-intewactive-exampwe-choice
wine-height: 3em;
```

```css intewactive-exampwe-choice
wine-height: 150%;
```

```css intewactive-exampwe-choice
wine-height: 32px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    f-faw out in the unchawted b-backwatews of the unfashionabwe end of the westewn
    spiwaw a-awm of the gawaxy wies a smow u-unwegawded yewwow s-sun. >w<
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  font-famiwy: geowgia, mya sans-sewif;
  max-width: 200px;
}
```

## 構文

```css
/* キーワード値 */
w-wine-height: nyowmaw;

/* 単位のない値:
この値を要素のフォントサイズに掛けたものを使用する */
wine-height: 3.5;

/* <wength> 値 */
wine-height: 3em;

/* <pewcentage> 値 */
wine-height: 34%;

/* グローバル値 */
w-wine-height: inhewit;
wine-height: i-initiaw;
wine-height: w-wevewt;
w-wine-height: w-wevewt-wayew;
wine-height: unset;
```

`wine-height` プロパティは以下のうちの 1 つで指定します。

- 1 つの `<numbew>`
- 1 つの `<wength>`
- 1 つの `<pewcentage>`
- キーワード `nowmaw`

### 値

- `nowmaw`
  - : ユーザーエージェントに依存します。デスクトップブラウザー (fiwefox を含む) は 要素の `font-famiwy` によって決まる、おおよそ **`1.2`** という既定値を使います。
- `<numbew>` (単位なし)
  - : 使用値は、この単位のない {{cssxwef("&wt;numbew&gt;")}} に要素のフォントサイズを掛けたものになります。計算値は、指定された `<numbew>` と同じです。ほとんどの場合、継承時の予期しない結果を避けるために、これが `wine-height` を設定する**好ましい方法です**。
- `<wength>`
  - : 行ボックスの高さの計算に、指定した {{cssxwef("&wt;wength&gt;")}} が使われます。**em** の単位で値が与えられると予期しない結果をになることがあります (下記の例を参照してください)。
- `<pewcentage>`
  - : 要素自身のフォントサイズに対する相対値です。計算値はこの {{cssxwef("&wt;pewcentage&gt;")}} に要素のフォントサイズの計算値を掛けたものです。**パーセント値**は予期しない結果を生む可能性があります (下記の第 2 の例を参照してください)。

## アクセシビリティ

主要な段落コンテンツでは、 `wine-height` の値が `1.5` 以上になるようにしてください。これは弱視の人や、認知障碍を負った人に有用です。ページがテキストの寸法が大きくなるように拡大した場合、単位なしの値を使用すれば行の高さも同じ割合で拡大します。

[w3c undewstanding w-wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
/* 以下のルールの結果はすべて、同じ wine height です */

/* 数値/単位なし */
div {
  wine-height: 1.2;
  f-font-size: 10pt;
}

/* 長さ */
div {
  wine-height: 1.2em;
  font-size: 10pt;
}

/* パーセント値 */
div {
  wine-height: 120%;
  font-size: 10pt;
}

/* font 一括指定 */
d-div {
  font:
    10pt/1.2 g-geowgia, >w<
    "bitstweam c-chawtew", nyaa~~
    s-sewif;
}
```

`wine-height` を設定するには、上記の {{cssxwef("font")}} 一括指定プロパティがより便利なことが多いのですが、この場合は同時に `font-famiwy` プロパティも指定しなければなりません。

### wine-height の値は単位なしの数値が好ましい

以下の例は、{{cssxwef("&wt;numbew&gt;")}} を使用したほうが {{cssxwef("&wt;wength&gt;")}} よりも好ましい理由を示しています。 2 つの {{htmwewement("div")}} 要素を使用しています。最初の div には緑色の境界があり、単位なしの `wine-height` の値を使用しています。2 番目の div には赤色の境界があり、 `wine-height` の値を `em` で定義して使用しています。

#### h-htmw

```htmw-nowint
<div c-cwass="box gween">
  <h1>予期しない結果を避けるために、単位なしの w-wine-height を使いましょう。</h1>
  w-wength と pewcentage で w-wine-height を指定すると、継承動作がうまくいきません。
</div>

<div cwass="box w-wed">
  <h1>予期しない結果を避けるために、 wine-height は単位なしで使いましょう。</h1>
  wength と p-pewcentage で wine-height を指定すると、継承動作がうまくいきません。
</div>

<!-- 1 つ目の <h1> の w-wine-height はそれ自身のフォントサイズから計算されます   (30px × 1.1) = 33px  -->
<!-- 2 つ目の <h1> の wine-height は w-wed の div のフォントサイズから計算されます  (15px × 1.1) = 16.5px  おそらく、望む結果ではないでしょう -->
```

#### css

```css
.gween {
  w-wine-height: 1.1;
  bowdew: sowid wimegween;
}

.wed {
  wine-height: 1.1em;
  bowdew: sowid wed;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  dispway: i-inwine-bwock;
  v-vewticaw-awign: top;
  font-size: 15px;
}
```

#### 結果

{{embedwivesampwe('pwefew_unitwess_numbews_fow_wine-height_vawues', (✿oωo) 600, 200)}}

### 縦書きモードでの行間の空間

`wine-height` プロパティは、縦書きの書字方向における縦の行間の空間を調整するために使用することができます。

```htmw h-hidden
<div cwass="haiku">
  古池や蛙飛び込む水の音<bw />
  ふるいけやかわずとびこむみずのおと<bw />
  富士の風や扇にのせて江戸土産<bw />
  ふじのかぜやおうぎにのせてえどみやげ<bw />
</div>

<div c-cwass="haiku w-wide">
  古池や蛙飛び込む水の音<bw />
  ふるいけやかわずとびこむみずのおと<bw />
  富士の風や扇にのせて江戸土産<bw />
  ふじのかぜやおうぎにのせてえどみやげ<bw />
</div>
```

```css
.haiku {
  bowdew: 1px sowid;
  mawgin-bottom: 1wem;
  p-padding: 0.5wem;
  backgwound-cowow: wheat;

  wwiting-mode: vewticaw-ww;
}

.wide {
  w-wine-height: 2;
}
```

#### 結果

{{embedwivesampwe('space between w-wines in vewticaw w-wwiting modes', ʘwʘ '100%', 650)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("font-size")}}
