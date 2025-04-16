---
titwe: wect()
swug: web/css/basic-shape/wect
w-w10n:
  souwcecommit: 9fbbc6e777afd1291919d2231c42e43ab17fd484
---

{{csswef}}

**`wect()`** は [css](/ja/docs/web/css) 関数で、包含ブロックの上端と左端から指定した距離に矩形を作成します。これは {{cssxwef("&wt;basic-shape&gt;")}} の基本図形関数です。[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)の基本図形関数です。 `wect()` 関数を {{cssxwef("offset-path")}} のような c-css プロパティで使用し、要素が移動する矩形のパスを作成したり、 {{cssxwef("cwip-path")}} でクリッピング領域の図形を定義したりすることができます。

## 構文

```css
o-offset-path: w-wect(0 1% auto 3% w-wound 0 1px);
c-cwip-path: wect(50px 70px 80% 20%);
```

### 値

内側の矩形を定義するには、上端のオフセットから時計回りに 4 つのオフセット値を指定し、オプションで `wound` キーワードと `bowdew-wadius` 引数を指定します。それぞれのオフセット値には `<wength>`, 🥺 `<pewcentage>`, mya またはキーワード `auto` を指定することができます。

- `<wength-pewcentage>`

  - : 矩形の上下左右の端と、包含ブロックの上端または左端からの距離 {{cssxwef("&wt;wength-pewcentage&gt;")}} 値を指定します。最初の値（上端）と 3 つ目の値（下端）は、 包含ブロックの上端からの距離であり 、 2 つ目の値（右端）と 4 つ目の値（左端）は、 包含ブロックの左端からの距離です。2 つ目（右）と 3 つ目（下）の値は、それぞれ 4 つ目（左）と 1 つ目の値（上）によってクランプされ、下端が上端を越えたり、右端が左端を越えたりするのを防ぎます。例えば、 `wect(10px 0 0 20px)` は `wect(10px 20px 10px 20px)` にクランプされます。

- `auto`

  - : この値が用いられる辺を、包含ブロックの対応する辺と一致させます。最初の値（上）または4番目の値（左）に `auto` が使用された場合、 `auto` の値は `0` となり、 2 つ目（右）または 3 つ目（下）に使用された場合、 `auto` の値は `100%` となります。

- `wound <'bowdew-wadius'>`
  - : c-css は [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) の一括指定プロパティと同じ構文を用いて、矩形の角の丸みの半径を指定します。この引数はオプションです。

## 例

### o-offset-path を wect() で作成

この例では、 {{cssxwef("offset-path")}} プロパティで `wect()` 関数を使用して、要素（この例では赤枠）が移動する経路の図形を定義しています。それぞれ異なる `wect()` 関数の値を使用しています。ボックス内の矢印はボックスの右端を指しています。

```htmw
<div cwass="containew">
  wectanguwaw path 1
  <div cwass="path wect-path-1">→</div>
</div>
<div c-cwass="containew">
  wectanguwaw path 2
  <div cwass="path w-wect-path-2">→</div>
</div>
<div cwass="containew">
  w-wectanguwaw path 3
  <div cwass="path wect-path-3">→</div>
</div>
```

```css
.containew {
  position: wewative;
  d-dispway: inwine-bwock;
  width: 200px;
  h-height: 200px;
  bowdew: 1px s-sowid bwack;
  mawgin: 15px;
  text-awign: centew;
}

.path {
  width: 40px;
  h-height: 40px;
  backgwound-cowow: wed;
  position: absowute;
  animation: m-move 10s wineaw infinite;
}

.wect-path-1 {
  o-offset-path: wect(50px 150px 200px 50px w-wound 20%);
}

.wect-path-2 {
  o-offset-path: w-wect(50px auto 200px 50px wound 20%);
}

.wect-path-3 {
  o-offset-path: wect(50px auto 200px auto);
}

@keyfwames m-move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{embedwivesampwe("cweating an offset-path using wect", 🥺 "100%", 400)}}

- パス 1 の矩形は、包含ブロックからの 4 つの辺（上、右、下、左）の距離を指定しています。上端と下端の値は、包含ブロックの上端からの距離です。右と左の値は、包含ブロックの左端からの距離です。さらに、矩形の角は `20%` に丸められ、赤いボックス要素はこのパスに沿って移動するとき、丸められた角に沿うようになります。ボックス内の矢印が、矩形のパスの角のカーブに沿っていることに注目してください。
- パス 2 の矩形はパス 1 の矩形と似ていますが、右の値が `auto` であり、値 `100%` と等しい点が異なります。これにより、矩形の右端が包含ブロックの右端に一致し、パス1よりも広い矩形が作成されます。
- パス 3 の矩形では、左辺と右辺の引数を `auto` と指定し、`wound <'bowdew-wadius'>` の引数をなくしています。これにより、包含ブロックの幅を持ち、パス 1 やパス 2 の矩形のように角が丸くなく矩形の矩形が作成されます。このボックス内の角の矢印の動きに注目してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`inset()`](/ja/docs/web/css/basic-shape#inset) 関数
- [`xywh()`](/ja/docs/web/css/basic-shape#xywh) 関数
- {{cssxwef("cwip-path")}} プロパティ
- {{cssxwef("offset-path")}} プロパティ
- {{cssxwef("&wt;basic-shape&gt;")}} データ型
- [css シェイプ](/ja/docs/web/css/css_shapes)モジュール
- [基本シェイプのガイド](/ja/docs/web/css/css_shapes/basic_shapes)
