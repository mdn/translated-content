---
title: border-radius
slug: Web/CSS/border-radius
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.border-radius
translation_of: Web/CSS/border-radius
---
{{CSSRef}}

**`border-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の境界の外側の角を丸めます。1 つの半径を設定すると円の角になり、2 つの半径を設定すると楕円の角になります。

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

半径は要素に境界がなくても、 {{cssxref("background")}} 全体に適用されます。切り取りが行われる正確な位置は、 {{cssxref("background-clip")}} プロパティで定義します。

`border-radius` プロパティは {{cssxref("border-collapse")}} が `collapse` の table 要素には適用されません。

> **Note:** 他の一括指定プロパティと同様、個別のサブプロパティは `border-radius:0 0 inherit inherit` のように既存の定義を部分的に上書きして継承させることはできません。代わりに、それぞれの個別指定プロパティを使用する必要があります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-top-left-radius`](/ja/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/ja/docs/Web/CSS/border-top-right-radius)
- [`border-bottom-right-radius`](/ja/docs/Web/CSS/border-bottom-right-radius)
- [`border-bottom-left-radius`](/ja/docs/Web/CSS/border-bottom-left-radius)

## 構文

```css
/* 最初の半径の構文は 1 つから 4 つの値が許可されています */
/* 半径を全 4 角に設定 */
border-radius: 10px;

/* 左上と右下 | 右上と左下 */
border-radius: 10px 5%;

/* 左上 | 右上と左下 | 右下 */
border-radius: 2px 4px 2px;

/* 左上 | 右上 | 右下 | 左下 */
border-radius: 1px 0 3px 4px;

/* 2 番目の半径の構文は 1 つから 4 つの値が許可されています */
/* (最初の半径の値) / 半径 */
border-radius: 10px / 20px;

/* (最初の半径の値) / 左上と右下 | 右上と左下 */
border-radius: 10px 5% / 20px 30px;

/* (最初の半径の値) / 左上 | 右上と左下 | 右下 */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (最初の半径の値) / 左上 | 右上 | 右下 | 左下 */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* グローバル値 */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: unset;
```

`border-radius` プロパティは次のように指定することができます。

 - 1 ～ 4 つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} の値。これは角の半径を 1 つ設定するために使用します。
 - その後に任意で、 "/" と 1 ～ 4 つの `<length>` または `<percentage>` の値。これは追加の半径を設定し、楕円形の角にすることができます。

### 値

<table>
  <tbody>
    <tr>
      <td><em>半径</em></td>
      <td><img alt="all-corner.png" src="all-corner.png" /></td>
      <td>
        境界の四隅に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 1 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左上と右下</em></td>
      <td>
        <img alt="top-left-bottom-right.png" src="top-left-bottom-right.png" />
      </td>
      <td>
        要素ボックスの左上と右下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 2 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右上と左下</em></td>
      <td>
        <img alt="top-right-bottom-left.png" src="top-right-bottom-left.png" />
      </td>
      <td>
        要素ボックスの右上と左下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 2 つまたは 3 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左上</em></td>
      <td><img alt="top-left.png" src="top-left.png" /></td>
      <td>
        要素ボックスの左上の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 3 つまたは 4 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右上</em></td>
      <td><img alt="top-right.png" src="top-right.png" /></td>
      <td>
        要素ボックスの右上の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 4 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右下</em></td>
      <td><img alt="bottom-right.png" src="bottom-right.png" /></td>
      <td>
        要素ボックスの右下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。3 つまたは 4 つの値の構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左下</em></td>
      <td><img alt="bottom-left.png" src="bottom-left.png" /></td>
      <td>
        要素ボックスの左下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 4 つの構文でのみ使用されます。
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : 円の半径の長さ、または楕円の半長軸または半短軸の長さを、 length 値を使用して記述します。負の数は無効です。
- {{cssxref("&lt;percentage&gt;")}}
  - : 円の半径の長さ、または楕円の半長軸または半短軸の長さを、 パーセント値を使用して記述します。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対するものです。負の数は無効です。

例:

```css
border-radius: 1em/5em;

/* ... is equivalent to: */
border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* ... is equivalent to: */
border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

```html hidden
  <pre id="example-1">
border: solid 10px;
border-radius: 10px 40px 40px 10px;
  </pre>
  <pre id="example-2">
border: groove 1em red;
border-radius: 2em;
  </pre>
  <pre id="example-3">
background: gold;
border: ridge gold;
border-radius: 13em/3em;
  </pre>
  <pre id="example-4">
border: none;
border-radius: 40px 10px;
background: gold;
  </pre>
  <pre id="example-5">
border: none;
border-radius: 50%;
background: burlywood;
  </pre>
  <pre id="example-6">
border: dotted;
border-width: 10px 4px;
border-radius: 10px 40px;
  </pre>
  <pre id="example-7">
border: dashed;
border-width: 2px 4px;
border-radius: 40px;
  </pre>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("Examples", "200", "1150")}}

### ライブサンプル

 - 例 1 : [http://jsfiddle.net/Tripad/qnGKj/2/](http://jsfiddle.net/Tripad/qnGKj/2/)
 - 例 2 : [http://jsfiddle.net/Tripad/qnGKj/3/](http://jsfiddle.net/Tripad/qnGKj/3/)
 - 例 3 : [http://jsfiddle.net/Tripad/qnGKj/4/](http://jsfiddle.net/Tripad/qnGKj/4/)
 - 例 4 : [http://jsfiddle.net/Tripad/qnGKj/5/](http://jsfiddle.net/Tripad/qnGKj/5/)
 - 例 5 : [http://jsfiddle.net/Tripad/qnGKj/6/](http://jsfiddle.net/Tripad/qnGKj/6/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

 - border-radius に関する CSS プロパティ: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
