---
title: polygon()
slug: Web/CSS/basic-shape/polygon
l10n:
  sourceCommit: c5613708408042af5889be39cfb203799879175b
---

{{CSSRef}}

**`polygon()`** は [CSS](/ja/docs/Web/CSS) の関数で、{{cssxref("&lt;basic-shape&gt;")}} [データ型](/ja/docs/Web/CSS/CSS_Types)の一つです。[多角形](https://ja.wikipedia.org/wiki/多角形)を描画するために使用します。 1 つ以上の座標のペアを指定し、それぞれが形状の頂点を表します。

{{EmbedInteractiveExample("pages/css/function-polygon.html")}}

## 構文

```css-nolint
/* 座標リストとして指定 */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* 座標リストと塗りつぶしルールとして指定 */
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

`polygon()` の引数はカンマとオプションの空白で区切られます。最初の引数はオプションの [`<fill-rule>`](/ja/docs/Web/SVG/Attribute/fill-rule) 値です。追加の引数は多角形を定義する点です。この点はそれぞれ x/y 座標 {{cssxref("length-percentage")}} の値を空間で区切ったもので、例えば左/上隅は "0 0"、右下隅は "100% 100%" となります。

メモ: SVG の [`<polygon>`](/ja/docs/Web/SVG/Element/polygon) 要素には、[`fill-rule`](/ja/docs/Web/SVG/Attribute/fill-rule) と [`points`](/ja/docs/Web/SVG/Attribute/points) の独立した属性があり、`points` は区切り文字としてスペースとカンマを柔軟に使用できます。 CSS の `polygon()` では区切り文字に対するルールは厳密に適用されます。

### 値

- [`<fill-rule>`](/ja/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}
  - : オプションで `nonzero` （省略時の既定値）または `evenodd` のどちらかであり、塗りつぶしルールを指定します。
- {{cssxref("length-percentage")}}
  - : 多角形の各頂点は `<length-percentage>` の値の組で表します。この値は図形の[参照ボックス](/ja/docs/Web/CSS/CSS_shapes/Basic_shapes#参照ボックス)からの相対座標で頂点の x/y 座標を表します。

### 返値

{{cssxref("basic-shape")}} 値を返します。

## 解説

`polygon()` 関数で点の座標を指定すると、ほとんどの図形を作成することができます。この点を定義する順番は重要で、異なる図形を作ることができます。 `polygon()` 関数は少なくとも 3 つの点が必要で、これは三角形を作成しますが、上限はありません。

`polygon()` 関数はカンマ区切りの座標または点を値として受け入れます。各点は空間で区切られた `x` と `y` のペアの値で表します。このペアは多角形内の点の座標を示します。

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

上記のように指定された場合、コンテナーの座標をマッピングすると、次のように視覚化できます。

| 軸名 | 点 1 | 点 2 | 点 3 | 点 4 | 点 n          |
| ---- | ---- | ---- | ---- | ---- | ------------- |
| x    | 0%   | 100% | 100% | 0%   | x<sub>n</sub> |
| y    | 0%   | 0%   | 100% | 100% | y<sub>n</sub> |

その座標を CSS の {{cssxref("clip-path")}} プロパティに、 `polygon()` 関数を使用して適用します。

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

これは、左上 (`0% 0%`), 右上 (`100% 0%`), 右下 (`100% 100%`), 左下 (`0% 100%`) の 4 つの角の座標を指定することで、親コンテンツの大きさの長方形の図形を作成します。

## 公式定義

{{csssyntax}}

## 例

### 三角形の作成

この例では、 3 点の座標を定義して三角形を形成します。

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### 結果

{{EmbedLiveSample("Create a triangle", '100%', 400)}}

三角形の座標は、コンテナーの右上隅 (`100% 0%`)、中心点 (`50% 50%`)、右下隅 (`100% 100%`) です。

### shape-outside のための多角形を設定

この例では、 {{cssxref("shape-outside")}} プロパティを使用して、テキストが沿う位置の図形を作成しています。

```html
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css
.box {
  width: 250px;
}

.shape {
  float: left;
  shape-outside: polygon(
    0 5%,
    15% 12%,
    30% 15%,
    40% 26%,
    45% 35%,
    45% 45%,
    40% 55%,
    10% 90%,
    10% 98%,
    8% 100%,
    0 100%
  );
  width: 300px;
  height: 320px;
}

p {
  font-size: 0.9rem;
}
```

{{EmbedLiveSample("Setting a polygon for shape-outside", '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [基本シェイプのガイド](/ja/docs/Web/CSS/CSS_shapes/Basic_shapes)
