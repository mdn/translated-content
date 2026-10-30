---
title: "`rx` プロパティ"
short-title: rx
slug: Web/CSS/Reference/Properties/rx
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`rx`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG の {{SVGElement("ellipse")}} の X 軸（水平方向）の半径、および SVG の {{SVGElement("rect")}} による矩形の角の水平方向の曲率を定義します。このプロパティが存在する場合、図形の {{SVGAttr("rx")}} 属性よりも優先されます。

> [!NOTE]
> `rx` プロパティは {{SVGElement("svg")}} に含まれる {{SVGElement("ellipse")}} および {{SVGElement("rect")}} 要素にのみ適用されます。その他の SVG 要素、HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 初期値 */
rx: auto;

/* 長さとパーセント値 */
rx: 20px;
rx: 20%;

/* グローバル値 */
rx: inherit;
rx: initial;
rx: revert;
rx: revert-layer;
rx: unset;
```

### 値

{{cssxref("length")}}、{{cssxref("percentage")}}、またはキーワード値 `auto` で楕円の水平半径および矩形の角の水平方向の曲率を指定します。

- {{cssxref("length")}}
  - : 絶対長または相対長であり、CSS の {{cssxref("&lt;length&gt;")}} データ型で許可されている任意の単位で表すことができます。負の値は無効です。

- {{cssxref("percentage")}}
  - : 現在の SVG ビューポートの幅を基準としたパーセント値です。`<rect>` の場合の使用値は、矩形の幅の 50% を超えることはありません。

- `auto`
  - : `auto` に設定された場合、またはデフォルト値が `auto` の場合、`rx` の値は {{cssxref("ry")}} で使用される絶対長に等しくなります。`rx` と `ry` の両方の計算値が `auto` である場合、使用値は `0` になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 丸い角の作成

この例では、`rx` プロパティを SVG の `<rect>` 要素に適用して、角が丸い矩形を作成する方法を示しています。

#### HTML

SVG 画像をに 5 つの `<rect>` 要素を配置しています。これらの矩形はすべて同じですが、{{SVGAttr("x")}} 属性の値のみが異なり、この値によって X 軸に沿って配置されます。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="120" y="5" x="5" />
  <rect width="50" height="120" y="5" x="60" />
  <rect width="50" height="120" y="5" x="115" />
  <rect width="50" height="120" y="5" x="170" />
  <rect width="50" height="120" y="5" x="225" />
</svg>
```

#### CSS

CSS では、4 つの矩形に `rx` 値を設定します。

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  rx: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  rx: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  rx: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  rx: 80%;
  fill: green;
}
```

#### 結果

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

最初の矩形はデフォルトで `auto` になります。この例ではすべての `ry` 値もデフォルトで `auto` であるため、`rx` の使用値は `0` となります。赤と青の矩形は、それぞれ `10px` および `2em` の角丸が設定されています。SVG ビューポートのデフォルトサイズは 300px × 150px であるため、オレンジ色の矩形の `5%` という値により、角には半径 `15px` の丸みが生成されます。緑色の矩形には `rx: 80%` が設定されています。しかし、`rx` の値は矩形の幅の `50%` を超えることはないため、その効果は `rx: 50%; ry: 50%` が設定された場合と同じになります。

### 楕円の水平半径の定義

これは基本的な `<ellipse>` の例で、図形の水平半径を定義する際、CSS の `rx` プロパティが SVG の `rx` 属性よりも優先されることを示しています。

#### HTML

SVG 内に、2 つの同一の `<ellipse>` 要素を配置します。それぞれ `rx` 属性を `20` に設定します。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

1 つ目の楕円だけにスタイル設定し、対になるもう 1 つにはユーザーエージェントのデフォルトスタイルを使用します（{{cssxref("fill")}} はデフォルトで黒になります）。 `rx` は幾何プロパティなので、SVG の {{SVGAttr("rx")}} 属性の値を上書きします。同時に、スタイルが適用された図形と対となる図形を区別するために、`fill` プロパティと {{cssxref("stroke")}} プロパティも設定しています。

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### 結果

{{EmbedLiveSample("楕円の水平半径の定義", "300", "180")}}

スタイルが適用された楕円の水平半径は、CSS の `rx` プロパティの数値で定義されている通り、`80px` です。スタイルが適用されていない楕円の水平半径は、`rx` 属性で定義された通り、`20px` です。

### 楕円の水平半径のパーセント値

この例では、`rx` にパーセント値を使用する方法を示しています。

#### HTML

前の例と同じマークアップを使用します。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

CSS は前の例と似ていますが、唯一の違いは `rx` プロパティの値です。この例では、パーセント値を使用しています。

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### 結果

{{EmbedLiveSample("楕円の水平半径のパーセント値", "300", "180")}}

`rx` にパーセント値を使用する場合、その値は SVG ビューポートの幅を基準とします。ここでは、スタイルが適用された楕円の水平半径のサイズは、現在の SVG ビューポートの幅の `30%` になります。幅のデフォルト値は `300px` であるため、`rx` の値は `90px` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 幾何プロパティ: `rx`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} データ型
- SVG {{SVGAttr("rx")}} 属性
