---
title: xywh()
slug: Web/CSS/Reference/Values/basic-shape/xywh
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`xywh()`** は [CSS](/ja/docs/Web/CSS) の関数で、包含ブロックの左端 (`x`) と上端 (`y`) からの距離を指定し、矩形の幅 (`w`) と高さ (`h`) を指定して矩形を作成します。これは {{cssxref("basic-shape")}} [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)の基本シェイプ関数です。 `xywh()` 関数を {{cssxref("offset-path")}} のような CSS プロパティで使用し、要素が移動される矩形のパスを作成したり、{{cssxref("clip-path")}} でクリッピング領域の図形を定義したりすることができます。

## 構文

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### 値

- `<length-percentage>`
  - : 矩形の `x` 座標と `y` 座標の {{cssxref("&lt;length-percentage&gt;")}} 値を指定します。
- `<length-percentage [0,∞]>`
  - : 矩形の幅と高さを、非負の {{cssxref("&lt;length-percentage&gt;")}} 値で指定します。最小値は 0 であり、最大値に制限はありません。
- `round <'border-radius'>`
  - : CSS の {{cssxref("border-radius")}} の一括指定プロパティと同じ構文を用いて、矩形の角の丸めの半径を指定します。この引数はオプションです。

## 形式文法

{{CSSSyntax}}

## 例

### offset-path を xywh() で作成

下記の例では、 {{cssxref("offset-path")}} プロパティは `xywh()` 関数を使用して、要素（この例ではマゼンタのボックス）が移動する経路の図形を定義しています。 `xywh()` 関数の値を変えた 2 つの異なるシナリオを示します。ボックス内の矢印はボックスの右端を指しています。

```html
<div class="container">
  矩形のパス 1
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  矩形のパス 2
  <div class="path xywh-path-2">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 30px;
  text-align: center;
}

.path {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: magenta;
  animation: move 10s linear infinite;
}

.xywh-path-1 {
  offset-path: xywh(20px 20px 100% 100% round 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample("Creating offset-path using xywh", "100%", 600)}}

- パス 1 の矩形は、包含するブロックの左端と上端から `20px` だけオフセットされます。つまり、幅は包含ブロックの幅の `100%` であり、高さは包含ブロックの高さの `100%` です。ボックス内の矢印が、矩形のパスの角の `10%` 曲線（`round 10%` で定義する）以下に続いていることに注目してください。
- `xywh()` の幅と高さの両方の上限は無限大なので、パス 2 の矩形で高さを `200%` に設定すると、生成される矩形は包含するブロックの 2 倍の高さになります。 `round <'border-radius'>` を指定しない場合の、ボックス内の矢印の角の振る舞いに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("basic-shape/inset","inset()")}} 関数
- {{cssxref("basic-shape/rect","rect()")}} 関数
- {{cssxref("clip-path")}} プロパティ
- {{cssxref("offset-path")}} プロパティ
- {{cssxref("basic-shape")}} データ型
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
