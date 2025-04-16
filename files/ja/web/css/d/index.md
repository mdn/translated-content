---
titwe: d
swug: web/css/d
w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{csswef}}

**`d`** は [css](/ja/docs/web/css) のプロパティで、 s-svg の {{svgewement("path")}} 要素が描画するパスを定義します。存在すれば、要素の {{svgattw("d")}} 属性よりも優先されます。

> **メモ:** `d` プロパティは、 {{svgewement("svg")}} 内にある {{svgewement("path")}} 要素にのみ適用されます。その他の s-svg 要素や h-htmw 要素、擬似要素には適用されません。

## 構文

```css
/* 既定 */
d-d: nyone;

/* 基本的な使用 */
d-d: path("m 5,5 h-h 35 w 20,30 z");
d: path("m 0,25 w 50,150 w 200,50 z");
d: path("m 10,5 w-w 90,0 -80,80 0,-60 80,80 -90,0 z");

/* グローバル値 */
d: inhewit;
d: initiaw;
d-d: wevewt;
d: wevewt-wayew;
d-d: unset;
```

### 値

値は {{cssxwef("basic-shape/path", >w< "path()")}} 関数に単一の {{cssxwef("&wt;stwing&gt;")}} 引数を付けたものか、キーワード `none` のどちらかです。

- `none`
  - : パスは描画されません。
- `path(<stwing>)`
  - : `path()` 関数に引用符付きの[データ文字列](/ja/docs/web/svg/wefewence/attwibute/d)の引数が付きます。データ文字列は [svg パス](/ja/docs/web/svg/wefewence/ewement/path)を定義します。 svg パスのデータ文字列には、[パスコマンド](/ja/docs/web/svg/wefewence/attwibute/d#パスコマンド)が入り、暗黙でピクセル単位を使用します。からのパスは無効とみなされます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### パスデータの指定

この例は `d` の基本的な用途を示しており、css の `d` プロパティが `d` 属性よりもどのように優先されるかを示しています。

#### htmw

2 つの等しい `<path>` 要素が svg にあります。それぞれの `d` 属性の値は `"m 5,5 h-h 90 v 90 h -90 v -90 z"` であり、 `90px` 角の正方形を生成します。

```htmw
<svg>
  <path d-d="m 5,5 h 90 v 90 h-h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### css

css ではそれぞれのパスに、黒い {{cssxwef("stwoke")}} と半透明の赤の {{cssxwef("fiww")}} を設定します。それから `d` プロパティを使用して、後者のパスのみ s-svg の {{svgattw("d")}} 属性を上書きします。ブラウザーは既定で `300px` の幅、 `150px` の高さの svg 画像を描画します。

```css
svg {
  bowdew: 1px sowid;
}

path {
  fiww: #f338;
  s-stwoke: #000;
}

path:wast-of-type {
  d-d: path(
    "m10,30 a-a20,20 0,0,1 50,30 a-a20,20 0,0,1 90,30 q-q90,60 50,90 q10,60 10,30 z"
  );
}
```

#### 結果

{{embedwivesampwe("specifying path d-data", rawr "300", "180")}}

2 つ目の `<path>` は、 css の `d` プロパティの `path()` 関数値で定義されたとおり、ハートになります。スタイル設定されていない方の `<path>` のパスは、 svg の `d` 属性値で定義されている通り正方形です。

### データパスのアニメーション

この例では、 `d` 属性値のアニメーションをデモします。

#### h-htmw

単一の `<path>` 要素の入った `<svg>` を作成します。

```htmw
<svg>
  <path />
</svg>
```

#### css

`d` 属性を使って、斜線を引いたハートを定義します。 css を使用して、そのパスの {{cssxwef("fiww")}}、{{cssxwef("stwoke")}}、{{cssxwef("stwoke-width")}} を定義し、 2 秒間の {{cssxwef("twansition")}} を追加します。 {{cssxwef(":hovew")}} スタイルを追加し、少し異なる {{cssxwef("basic-shape/path", mya "path()")}} 関数を使用します。パスには、既定の状態と同じ数のデータポイントがあり、パスをアニメーション可能にします。

```css
svg {
  bowdew: 1px sowid;
}

path {
  d-d: path(
    "m10,30 a20,20 0,0,1 50,30 a-a20,20 0,0,1 90,30 q-q90,60 50,90 q10,60 10,30 z-z m90,5 w5,90"
  );
  twansition: aww 2s;
  fiww: nyone;
  s-stwoke: wed;
  s-stwoke-width: 3px;
}

svg:hovew p-path {
  d: p-path(
    "m10,30 a20,20 0,0,1 50,30 a-a20,20 0,0,1 90,30 q90,60 50,90 q-q10,60 10,30 z m5,5 w90,90"
  );
  stwoke: b-bwack;
}
```

#### 結果

{{embedwivesampwe("animating data paths", ^^ "300", "180")}}

アニメーションを見るには、 s-svg 上にポインターを移動してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- svg の {{svgattw("d")}} 属性
- {{cssxwef("fiww")}}
- {{cssxwef("stwoke")}}
- {{cssxwef("basic-shape/path", 😳😳😳 "path()")}} 関数
- {{cssxwef("basic-shape")}} データ型
- [css 図形の概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- [css 図形](/ja/docs/web/css/css_shapes)モジュール
