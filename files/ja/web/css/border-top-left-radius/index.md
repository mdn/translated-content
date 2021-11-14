---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-top-left-radius
translation_of: Web/CSS/border-top-left-radius
---
{{CSSRef}}

**`border-top-left-radius`** は [CSS](/en-US/docs/Web/CSS) のプロパティは、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左上の角を丸くします。

{{EmbedInteractiveExample("pages/css/border-top-left-radius.html")}}

丸みは円または楕円にすることができ、値のうちの一つが `0` であれば、丸めは行われずに角は四角くなります。

![border-radius.png](border-radius.png)

背景は、画像または単色ですが、丸みがあっても境界で切り取られます。切り取られる正確な位置は、 {{cssxref("background-clip")}} プロパティの値で定義されます。

> **Note:** このプロパティの値が `border-top-left-radius` プロパティの後の {{cssxref("border-radius")}} 一括指定プロパティで設定されなかった場合、このプロパティは[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)によって初期値にリセットされます。

## 構文

```css
/* 角を円にする */
/* border-top-left-radius: radius */
border-top-left-radius: 3px;

/* 角を楕円にする */
/* border-top-left-radius: horizontal vertical */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;

/* グローバル値 */
border-top-left-radius: inherit;
border-top-left-radius: initial;
border-top-left-radius: revert;
border-top-left-radius: unset;
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

<h3 id="Arc_of_a_circle">円弧</h3>

単一の `<length>` 値は円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

<h3 id="Arc_of_an_ellipse">楕円弧</h3>

2 つの異なる `<length>` 値は楕円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

<h3 id="Square_element_with_percentage_radius">パーセント値で丸みをつけた正方形の要素</h3>

正方形の要素に単一の `<percentage>` 値を指定すると、円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

<h3 id="Non-square_element_with_percentage_radius">パーセント値で丸みをつけた長方形の要素</h3>

正方形ではない要素に単一の `<percentage>` 値を指定すると、楕円弧を生成します。

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
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

CSS の border-radius に関するプロパティ: 一括指定の {{cssxref("border-radius")}}, 他の角のための {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}
