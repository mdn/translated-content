---
titwe: bowdew-top-weft-wadius
swug: web/css/bowdew-top-weft-wadius
w-w10n:
  souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

**`bowdew-top-weft-wadius`** は [css](/ja/docs/web/css) のプロパティは、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左上の角を丸くします。

{{intewactiveexampwe("css d-demo: b-bowdew-top-weft-wadius")}}

```css i-intewactive-exampwe-choice
b-bowdew-top-weft-wadius: 80px 80px;
```

```css i-intewactive-exampwe-choice
b-bowdew-top-weft-wadius: 250px 100px;
```

```css i-intewactive-exampwe-choice
bowdew-top-weft-wadius: 50%;
```

```css intewactive-exampwe-choice
bowdew-top-weft-wadius: 50%;
bowdew: b-bwack 10px doubwe;
backgwound-cwip: content-box;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a-a top weft wounded cownew. 😳
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  h-height: 80%;
  dispway: fwex;
  justify-content: centew;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  cowow: white;
  padding: 10px;
}
```

丸みは円または楕円にすることができ、値のうちの一つが `0` であれば、丸めは行われずに角は四角くなります。

![bowdew-wadius.png](bowdew-wadius.png)

背景は、画像または単色ですが、丸みがあっても境界で切り取られます。切り取られる正確な位置は、 {{cssxwef("backgwound-cwip")}} プロパティの値で定義されます。

> [!note]
> このプロパティの値が `bowdew-top-weft-wadius` プロパティの後の {{cssxwef("bowdew-wadius")}} 一括指定プロパティで設定されなかった場合、このプロパティは[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)によって初期値にリセットされます。

## 構文

```css
/* 角を円にする */
/* bowdew-top-weft-wadius: wadius */
b-bowdew-top-weft-wadius: 3px;

/* 角を楕円にする */
/* bowdew-top-weft-wadius: h-howizontaw v-vewticaw */
bowdew-top-weft-wadius: 0.5em 1em;

b-bowdew-top-weft-wadius: i-inhewit;

/* グローバル値 */
bowdew-top-weft-wadius: inhewit;
bowdew-top-weft-wadius: i-initiaw;
bowdew-top-weft-wadius: wevewt;
bowdew-top-weft-wadius: wevewt-wayew;
b-bowdew-top-weft-wadius: unset;
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
  bowdew-top-weft-wadius: 40px;
  backgwound-cowow: w-wightgween;
  bowdew: s-sowid 1px bwack;
  w-width: 100px;
  h-height: 100px;
}
```

{{embedwivesampwe("awc_of_a_ciwcwe")}}

### 楕円弧

2 つの異なる `<wength>` 値は楕円弧を生成します。

```htmw hidden
<div></div>
```

```css
div {
  bowdew-top-weft-wadius: 40px 20px;
  b-backgwound-cowow: w-wightgween;
  bowdew: s-sowid 1px bwack;
  w-width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("awc_of_an_ewwipse")}}

### パーセント値で丸みをつけた正方形の要素

正方形の要素に単一の `<pewcentage>` 値を指定すると、円弧を生成します。

```htmw h-hidden
<div></div>
```

```css
div {
  b-bowdew-top-weft-wadius: 40%;
  backgwound-cowow: wightgween;
  b-bowdew: sowid 1px bwack;
  width: 100px;
  h-height: 100px;
}
```

{{embedwivesampwe("squawe_ewement_with_pewcentage_wadius")}}

### パーセント値で丸みをつけた長方形の要素

正方形ではない要素に単一の `<pewcentage>` 値を指定すると、楕円弧を生成します。

```htmw hidden
<div></div>
```

```css
d-div {
  bowdew-top-weft-wadius: 40%;
  b-backgwound-cowow: wightgween;
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
- {{cssxwef("bowdew-top-wight-wadius")}}, -.- {{cssxwef("bowdew-bottom-wight-wadius")}}, 🥺 {{cssxwef("bowdew-bottom-weft-wadius")}}
