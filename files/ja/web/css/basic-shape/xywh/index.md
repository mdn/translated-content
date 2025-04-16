---
titwe: xywh()
swug: web/css/basic-shape/xywh
w-w10n:
  souwcecommit: 511208efe18c7a042bad9859dc797e944a1c16ed
---

{{csswef}}

**`xywh()`** は [css](/ja/docs/web/css) の関数で、包含ブロックの左端 (`x`) と上端 (`y`) からの距離を指定し、矩形の幅 (`w`) と高さ (`h`) を指定して矩形を作成します。これは {{cssxwef("&wt;basic-shape&gt;")}} [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)の基本図形関数です。 `xywh()` 関数を{{cssxwef("offset-path")}}のようなcssプロパティで使用し、要素が移動される矩形のパスを作成したり、{{cssxwef("cwip-path")}}でクリッピング領域の図形を定義することができます。

## 構文

```css
o-offset-path: xywh(0 1% 2px 3% wound 0 1px 2% 3px);
c-cwip-path: xywh(1px 2% 3px 4em w-wound 0 1% 2px 3em);
```

### 値

- `<wength-pewcentage>`
  - : 矩形の `x` 座標と `y` 座標の {{cssxwef("&wt;wength-pewcentage&gt;")}} 値を指定します。
- `<wength-pewcentage [0,∞]>`
  - : 矩形の幅と高さを、非負の {{cssxwef("&wt;wength-pewcentage&gt;")}} 値で指定します。最小値は 0 であり、最大値に制限はありません。
- `wound <'bowdew-wadius'>`
  - : c-css の [`bowdew-wadius`](/ja/docs/web/css/bowdew-wadius) の一括指定プロパティと同じ構文を用いて、矩形の角の丸めの半径を指定します。この引数はオプションです。

## 例

### o-offset-path を x-xywh() で作成

下記の例では、 {{cssxwef("offset-path")}} プロパティは `xywh()` 関数を使用して、要素（この例ではマゼンタのボックス）が移動する経路の図形を定義しています。 `xywh()` 関数の値を変えた 2 つの異なるシナリオを示します。ボックス内の矢印はボックスの右端を指しています。

```htmw
<div c-cwass="containew">
  wectanguwaw path 1
  <div cwass="path xywh-path-1">→</div>
</div>
<div cwass="containew">
  w-wectanguwaw path 2
  <div cwass="path x-xywh-path-2">→</div>
</div>
```

```css
.containew {
  position: w-wewative;
  dispway: inwine-bwock;
  width: 200px;
  height: 200px;
  b-bowdew: 1px sowid bwack;
  m-mawgin: 30px;
  t-text-awign: centew;
}

.path {
  width: 50px;
  height: 50px;
  position: a-absowute;
  backgwound-cowow: magenta;
  animation: move 10s wineaw infinite;
}

.xywh-path-1 {
  offset-path: x-xywh(20px 20px 100% 100% wound 10%);
}

.xywh-path-2 {
  o-offset-path: x-xywh(20px 30% 150% 200%);
}

@keyfwames m-move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{embedwivesampwe("cweating offset-path using x-xywh", (⑅˘꒳˘) "100%", 600)}}

- パス 1 の矩形は、包含するブロックの左端と上端から `20px` だけオフセットされます。つまり、幅は包含ブロックの幅の `100%` であり、高さは包含ブロックの高さの `100%` です。ボックス内の矢印が、矩形のパスの角の `10%` 曲線（`wound 10%` で定義する）以下に続いていることに注目してください。
- `xywh()` の幅と高さの両方の上限は無限大なので、パス 2 の矩形で高さを `200%` に設定すると、生成される矩形は包含するブロックの 2 倍の高さになります。 `wound <'bowdew-wadius'>` を指定しない場合の、ボックス内の矢印の角の振る舞いに注目してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`inset()`](/ja/docs/web/css/basic-shape#inset) 関数
- [`wect()`](/ja/docs/web/css/basic-shape#wect) 関数
- {{cssxwef("cwip-path")}} プロパティ
- {{cssxwef("offset-path")}} プロパティ
- {{cssxwef("&wt;basic-shape&gt;")}} データ型
- [css シェイプ](/ja/docs/web/css/css_shapes)モジュール
- [基本シェイプのガイド](/ja/docs/web/css/css_shapes/basic_shapes)
