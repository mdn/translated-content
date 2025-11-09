---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
original_slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 9fbbc6e777afd1291919d2231c42e43ab17fd484
---

**`rect()`** は [CSS](/ja/docs/Web/CSS) 関数で、包含ブロックの上端と左端から指定した距離に矩形を作成します。これは {{cssxref("&lt;basic-shape&gt;")}} の基本図形関数です。[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)の基本図形関数です。 `rect()` 関数を {{cssxref("offset-path")}} のような CSS プロパティで使用し、要素が移動する矩形のパスを作成したり、 {{cssxref("clip-path")}} でクリッピング領域の図形を定義したりすることができます。

## 構文

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### 値

内側の矩形を定義するには、上端のオフセットから時計回りに 4 つのオフセット値を指定し、オプションで `round` キーワードと `border-radius` 引数を指定します。それぞれのオフセット値には `<length>`, `<percentage>`, またはキーワード `auto` を指定することができます。

- `<length-percentage>`
  - : 矩形の上下左右の端と、包含ブロックの上端または左端からの距離 {{cssxref("&lt;length-percentage&gt;")}} 値を指定します。最初の値（上端）と 3 つ目の値（下端）は、 包含ブロックの上端からの距離であり 、 2 つ目の値（右端）と 4 つ目の値（左端）は、 包含ブロックの左端からの距離です。2 つ目（右）と 3 つ目（下）の値は、それぞれ 4 つ目（左）と 1 つ目の値（上）によってクランプされ、下端が上端を越えたり、右端が左端を越えたりするのを防ぎます。例えば、 `rect(10px 0 0 20px)` は `rect(10px 20px 10px 20px)` にクランプされます。

- `auto`
  - : この値が用いられる辺を、包含ブロックの対応する辺と一致させます。最初の値（上）または4番目の値（左）に `auto` が使用された場合、 `auto` の値は `0` となり、 2 つ目（右）または 3 つ目（下）に使用された場合、 `auto` の値は `100%` となります。

- `round <'border-radius'>`
  - : CSS は [`border-radius`](/ja/docs/Web/CSS/Reference/Properties/border-radius) の一括指定プロパティと同じ構文を用いて、矩形の角の丸みの半径を指定します。この引数はオプションです。

## 例

### offset-path を rect() で作成

この例では、 {{cssxref("offset-path")}} プロパティで `rect()` 関数を使用して、要素（この例では赤枠）が移動する経路の図形を定義しています。それぞれ異なる `rect()` 関数の値を使用しています。ボックス内の矢印はボックスの右端を指しています。

```html
<div class="container">
  Rectangular path 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Rectangular path 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
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

{{EmbedLiveSample("Creating an offset-path using rect", "100%", 400)}}

- パス 1 の矩形は、包含ブロックからの 4 つの辺（上、右、下、左）の距離を指定しています。上端と下端の値は、包含ブロックの上端からの距離です。右と左の値は、包含ブロックの左端からの距離です。さらに、矩形の角は `20%` に丸められ、赤いボックス要素はこのパスに沿って移動するとき、丸められた角に沿うようになります。ボックス内の矢印が、矩形のパスの角のカーブに沿っていることに注目してください。
- パス 2 の矩形はパス 1 の矩形と似ていますが、右の値が `auto` であり、値 `100%` と等しい点が異なります。これにより、矩形の右端が包含ブロックの右端に一致し、パス1よりも広い矩形が作成されます。
- パス 3 の矩形では、左辺と右辺の引数を `auto` と指定し、`round <'border-radius'>` の引数をなくしています。これにより、包含ブロックの幅を持ち、パス 1 やパス 2 の矩形のように角が丸くなく矩形の矩形が作成されます。このボックス内の角の矢印の動きに注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`inset()`](/ja/docs/Web/CSS/Reference/Values/basic-shape#inset) 関数
- [`xywh()`](/ja/docs/Web/CSS/Reference/Values/basic-shape#xywh) 関数
- {{cssxref("clip-path")}} プロパティ
- {{cssxref("offset-path")}} プロパティ
- {{cssxref("&lt;basic-shape&gt;")}} データ型
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [基本シェイプのガイド](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
