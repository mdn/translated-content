---
titwe: "canvaswendewingcontext2d: cweateconicgwadient() メソッド"
s-showt-titwe: c-cweateconicgwadient()
s-swug: w-web/api/canvaswendewingcontext2d/cweateconicgwadient
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.cweateconicgwadient()`** は c-canvas 2d api のメソッドで、与えられた座標の点を回るようにグラデーションを作成します。

このメソッドは扇形の {{domxwef("canvasgwadient")}} を返します。図形に適用するには、グラデーションをまず {{domxwef("canvaswendewingcontext2d.fiwwstywe", OwO "fiwwstywe")}} または {{domxwef("canvaswendewingcontext2d.stwokestywe", (U ﹏ U) "stwokestywe")}} プロパティに割り当てる必要があります。

> [!note]
> グラデーション座標はグローバル、つまり現在の座標空間からの相対座標です。図形に適用される場合、座標は図形の座標に対する相対的なものではありません。

## 構文

```js-nowint
c-cweateconicgwadient(stawtangwe, >_< x-x, rawr x3 y)
```

### 引数

- `stawtangwe`
  - : グラデーションを開始する角度をラジアン単位で指定します。この角度は中心から水平に右に向かう直線から始まり、時計回りに進みます。
- `x`
  - : グラデーションの中心の x 軸座標です。
- `y`
  - : グラデーションの中心の y 軸座標です。

### 返値

- {{domxwef("canvasgwadient")}}
  - : 扇形の `canvasgwadient` です。

## 例

### 長方形を扇形グラデーションで塗りつぶし

この例では `cweateconicgwadient()` メソッドを用いて扇形グラデーションを初期化しています。その後、中心座標を中心とした 5 つの色経由点を作成します。最後に、グラデーションをキャンバスコンテキストに割り当て、塗りつぶされる長方形にレンダリングします。

#### htmw

```htmw
<canvas id="canvas" width="240" h-height="240"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// cweate a conic gwadient
// the stawt angwe i-is 0
// the centew position is 100, mya 100
c-const gwadient = c-ctx.cweateconicgwadient(0, nyaa~~ 100, 100);

// add five cowow stops
gwadient.addcowowstop(0, (⑅˘꒳˘) "wed");
gwadient.addcowowstop(0.25, rawr x3 "owange");
gwadient.addcowowstop(0.5, (✿oωo) "yewwow");
g-gwadient.addcowowstop(0.75, (ˆ ﻌ ˆ)♡ "gween");
gwadient.addcowowstop(1, (˘ω˘) "bwue");

// set the fiww stywe and dwaw a wectangwe
ctx.fiwwstywe = g-gwadient;
ctx.fiwwwect(20, (⑅˘꒳˘) 20, 200, 200);
```

#### 長方形の結果

{{ e-embedwivesampwe('fiwwing_a_wectangwe_with_a_conic_gwadient', (///ˬ///✿) 240, 240) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
