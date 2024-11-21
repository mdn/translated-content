---
title: border-bottom-left-radius
slug: Web/CSS/border-bottom-left-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

**`border-bottom-left-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左下の角を丸めます。

{{EmbedInteractiveExample("pages/css/border-bottom-left-radius.html")}}

丸みは円または楕円にすることができ、値のうちの一つが `0` であれば、丸めは行われずに角は四角くなります。

![border-bottom-left-radius.png](border-bottom-left-radius.png)

背景は、画像または単色ですが、丸みがあっても境界で切り取られます。切り取られる正確な位置は、 {{cssxref("background-clip")}} プロパティの値で定義されます。

> [!NOTE]
> このプロパティの値が `border-bottom-left-radius` プロパティの後の {{cssxref("border-radius")}} 一括指定プロパティで設定されなかった場合、このプロパティは[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)によって初期値にリセットされます。

## 構文

```css
/* 角を円にする */
/* border-bottom-left-radius: 半径 */
border-bottom-left-radius: 3px;

/* パーセント値 */

/* ボックスが正方形ならば円、長方形ならば楕円 */
border-bottom-left-radius: 20%;

/* 上と同じ。水平方向 (width) および垂直方向 (height) の 20% */
border-bottom-left-radius: 20% 20%;

/* 水平方向 (width) の 20% および垂直方向 (height) の 10% */
border-bottom-left-radius: 20% 10%;

/* 角を楕円にする */
/* border-bottom-left-radius: 水平 垂直 */
border-bottom-left-radius: 0.5em 1em;

/* グローバル値 */
border-bottom-left-radius: inherit;
border-bottom-left-radius: initial;
border-bottom-left-radius: revert;
border-bottom-left-radius: revert-layer;
border-bottom-left-radius: unset;
```

値 1 つで指定する場合:

- 値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} であり、境界の角に使用する円の半径を示します。

値 2 つで指定する場合:

- 最初の値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} であり、境界の角に使用する楕円の水平の軌道長半径を示します。
- 最初の値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} であり、境界の角に使用する楕円の垂直の軌道長半径を示します。

### 値

- `<length-percentage>`
  - : 円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の {{cssxref("&lt;length&gt;")}} データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 円弧

単一の `<length>` 値は円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

<h3 id="Arc_of_an_ellipse">楕円弧</h3>

2 つの異なる `<length>` の値は楕円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### 正方形の要素にパーセント値の半径

正方形の要素に単一の `<percentage>` 値を指定すると、円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### 長方形の要素にパーセント値の半径

正方形ではない要素に単一の `<percentage>` 値を指定すると、楕円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("Non-square_element_with_percentage_radius")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 一括指定の {{cssxref("border-radius")}} プロパティ
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-top-left-radius")}}
