---
title: border-radius
slug: Web/CSS/Reference/Properties/border-radius
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**`border-radius`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の境界の外側の角を丸めます。1 つの半径を設定すると円の角になり、2 つの半径を設定すると楕円の角になります。

{{InteractiveExample("CSS デモ: border-radius")}}

```css interactive-example-choice
border-radius: 30px;
```

```css interactive-example-choice
border-radius: 25% 10%;
```

```css interactive-example-choice
border-radius: 10% 30% 50% 70%;
```

```css interactive-example-choice
border-radius: 10% / 50%;
```

```css interactive-example-choice
border-radius: 10px 100px / 120px;
```

```css interactive-example-choice
border-radius: 50% 20% / 10% 40%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with rounded corners.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-bottom-left-radius")}}

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
border-radius: revert-layer;
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
      <td><img alt="水色の長方形に薄いグレーの境界線があります。4 つの角はすべて丸めてあります。" src="all-corner.png" /></td>
      <td>
        境界の四隅に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 1 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左上と右下</em></td>
      <td>
        <img alt="水色の長方形に薄いグレーの境界線があります。左上と右下の 2 つの角は丸めてあります。" src="top-left-bottom-right.png" />
      </td>
      <td>
        要素ボックスの左上と右下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 2 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右上と左下</em></td>
      <td>
        <img alt="水色の長方形に薄いグレーの境界線があります。右上と左下の 2 つの角は丸めてあります。" src="top-right-bottom-left.png" />
      </td>
      <td>
        要素ボックスの右上と左下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 2 つまたは 3 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左上</em></td>
      <td><img alt="水色の長方形に薄いグレーの境界線があります。左上の角は丸めてあります。" src="top-left.png" /></td>
      <td>
        要素ボックスの左上の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 3 つまたは 4 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右上</em></td>
      <td><img alt="水色の長方形に薄いグレーの境界線があります。右上の角は丸めてあります。" src="top-right.png" /></td>
      <td>
        要素ボックスの右上の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。値 4 つの構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>右下</em></td>
      <td><img alt="水色の長方形に薄いグレーの境界線があります。右下の角は丸めてあります。" src="bottom-right.png" /></td>
      <td>
        要素ボックスの右下の隅の境界に使用される半径を記述する {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。3 つまたは 4 つの値の構文でのみ使用されます。
      </td>
    </tr>
    <tr>
      <td><em>左下</em></td>
      <td><img alt="水色の長方形に薄いグレーの境界線があります。左下の角は丸めてあります。" src="bottom-left.png" /></td>
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
border-radius: 1em / 5em;

/* 次のものと同等 */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 次のものと同等 */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## 解説

半径は要素に境界がなくても、 {{cssxref("background")}} 全体に適用されます。切り取りが行われる正確な位置は、 {{cssxref("background-clip")}} プロパティで定義します。

`border-radius` プロパティは table 要素の {{cssxref("border-collapse")}} が `collapse` の場合には適用されません。

> [!NOTE]
> 他の一括指定プロパティと同様、個別のサブプロパティは `border-radius:0 0 inherit inherit` のように既存の定義を部分的に上書きして継承させることはできません。代わりに、それぞれの個別指定プロパティを使用する必要があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界スタイルの比較

次の例には 7 つの {{htmlelement("pre")}} 要素があり、それぞれが `border` と `border-radius` スタイルの組み合わせを示しています。
それぞれの `<pre>` 要素に適用されるスタイルは、要素のコンテンツとして含まれていますので、その協会スタイルを作成するために必要な CSS 宣言を確認することができます。

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
  border-radius: 13em / 3em;
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
  height: 50px;
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
  border-radius: 13em / 3em;
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

{{EmbedLiveSample("Comparing border styles", "", "900")}}

### `corner-shape` と `border-radius` の使用

ボックスの角に `0` ではない `border-radius` 値が適用されている場合、{{cssxref("corner-shape")}} プロパティ（または[個別指定と一括指定](/ja/docs/Web/CSS/Reference/Properties/corner-shape#corner--shape_shorthands_and_longhands)のいずれか）を使用して、ベベル、ノッチ、スクイークルなどの独自の形状をその角に適用することができます。この例では `corner-shape` の使い方の例を示します。

#### HTML

この例のマークアップには、単一の {{htmlelement("div")}} 要素があります。

```html live-sample___basic-usage
<div></div>
```

#### CSS

このボックスにはいくつか基本的なスタイルを設定していますが、簡単にするため非表示にしています。{{cssxref("box-shadow")}}、`border-radius` を `0 20% 50px 30%`、`corner-shape` を `superellipse(0.5) bevel notch squircle` に設定しています。

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 0 20% 50px 30%;
  corner-shape: superellipse(0.5) bevel notch squircle;
}
```

#### 結果

表示結果はこのようになります。

{{EmbedLiveSample("basic-usage", "100%", "240")}}

左上角には角の図形が適用されていないことに注意してください。これは、`border-radius` を `0` に設定しているからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- border-radius に関する CSS プロパティ: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
