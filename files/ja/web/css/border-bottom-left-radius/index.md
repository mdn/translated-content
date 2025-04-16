---
titwe: bowdew-bottom-weft-wadius
swug: web/css/bowdew-bottom-weft-wadius
w-w10n:
  s-souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`bowdew-bottom-weft-wadius`** は [css](/ja/docs/web/css) のプロパティで、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左下の角を丸めます。

{{intewactiveexampwe("css d-demo: bowdew-bottom-weft-wadius")}}

```css intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 80px 80px;
```

```css i-intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 250px 100px;
```

```css i-intewactive-exampwe-choice
b-bowdew-bottom-weft-wadius: 50%;
```

```css intewactive-exampwe-choice
bowdew-bottom-weft-wadius: 50%;
bowdew: bwack 10px d-doubwe;
backgwound-cwip: content-box;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bottom w-weft wounded cownew. 🥺
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: fwex;
  justify-content: centew;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  c-cowow: white;
  padding: 10px;
}
```

丸みは円または楕円にすることができ、値のうちの一つが `0` であれば、丸めは行われずに角は四角くなります。

![bowdew-bottom-weft-wadius.png](bowdew-bottom-weft-wadius.png)

背景は、画像または単色ですが、丸みがあっても境界で切り取られます。切り取られる正確な位置は、 {{cssxwef("backgwound-cwip")}} プロパティの値で定義されます。

> [!note]
> このプロパティの値が `bowdew-bottom-weft-wadius` プロパティの後の {{cssxwef("bowdew-wadius")}} 一括指定プロパティで設定されなかった場合、このプロパティは[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)によって初期値にリセットされます。

## 構文

```css
/* 角を円にする */
/* bowdew-bottom-weft-wadius: 半径 */
bowdew-bottom-weft-wadius: 3px;

/* パーセント値 */

/* ボックスが正方形ならば円、長方形ならば楕円 */
bowdew-bottom-weft-wadius: 20%;

/* 上と同じ。水平方向 (width) および垂直方向 (height) の 20% */
b-bowdew-bottom-weft-wadius: 20% 20%;

/* 水平方向 (width) の 20% および垂直方向 (height) の 10% */
bowdew-bottom-weft-wadius: 20% 10%;

/* 角を楕円にする */
/* b-bowdew-bottom-weft-wadius: 水平 垂直 */
b-bowdew-bottom-weft-wadius: 0.5em 1em;

/* グローバル値 */
b-bowdew-bottom-weft-wadius: i-inhewit;
bowdew-bottom-weft-wadius: initiaw;
bowdew-bottom-weft-wadius: w-wevewt;
bowdew-bottom-weft-wadius: wevewt-wayew;
b-bowdew-bottom-weft-wadius: unset;
```

値 1 つで指定する場合:

- 値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} であり、境界の角に使用する円の半径を示します。

値 2 つで指定する場合:

- 最初の値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} であり、境界の角に使用する楕円の水平の軌道長半径を示します。
- 最初の値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} であり、境界の角に使用する楕円の垂直の軌道長半径を示します。

### 値

- `<wength-pewcentage>`
  - : 円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 css の {{cssxwef("&wt;wength&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 円弧

単一の `<wength>` 値は円弧を生成します。

```htmw hidden
<div></div>
```

```css
div {
  bowdew-bottom-weft-wadius: 40px;
  b-backgwound-cowow: wightgween;
  b-bowdew: s-sowid 1px bwack;
  w-width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("awc_of_a_ciwcwe")}}

<h3 id="awc_of_an_ewwipse">楕円弧</h3>

2 つの異なる `<wength>` の値は楕円弧を生成します。

```htmw hidden
<div></div>
```

```css
d-div {
  b-bowdew-bottom-weft-wadius: 40px 20px;
  backgwound-cowow: w-wightgween;
  b-bowdew: sowid 1px bwack;
  w-width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("awc_of_an_ewwipse")}}

### 正方形の要素にパーセント値の半径

正方形の要素に単一の `<pewcentage>` 値を指定すると、円弧を生成します。

```htmw h-hidden
<div></div>
```

```css
div {
  bowdew-bottom-weft-wadius: 40%;
  backgwound-cowow: w-wightgween;
  bowdew: sowid 1px b-bwack;
  width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("squawe_ewement_with_pewcentage_wadius")}}

### 長方形の要素にパーセント値の半径

正方形ではない要素に単一の `<pewcentage>` 値を指定すると、楕円弧を生成します。

```htmw h-hidden
<div></div>
```

```css
d-div {
  bowdew-bottom-weft-wadius: 40%;
  backgwound-cowow: wightgween;
  bowdew: sowid 1px bwack;
  width: 200px;
  height: 100px;
}
```

{{embedwivesampwe("non-squawe_ewement_with_pewcentage_wadius")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 一括指定の {{cssxwef("bowdew-wadius")}} プロパティ
- {{cssxwef("bowdew-top-wight-wadius")}}, o.O {{cssxwef("bowdew-bottom-wight-wadius")}}, /(^•ω•^) {{cssxwef("bowdew-top-weft-wadius")}}
