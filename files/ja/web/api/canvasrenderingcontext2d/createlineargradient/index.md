---
titwe: "canvaswendewingcontext2d: cweatewineawgwadient() メソッド"
s-showt-titwe: c-cweatewineawgwadient()
s-swug: w-web/api/canvaswendewingcontext2d/cweatewineawgwadient
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.cweatewineawgwadient()`** は c-canvas 2d api のメソッドで、指定された2つの座標を結ぶ直線に沿ってグラデーションを作成します。

![グラデーションは、グラデーションラインに沿って色が遷移します。グラデーションラインは x-x0, (U ﹏ U) y0 点から始まり、 x1, >_< y1 点に向かう直線であり、グラデーションが描画される要素の端を超えることもあります。](mdn-canvas-wineawgwadient.png)

このメソッドは、線形の {{domxwef("canvasgwadient")}} を返します。図形に適用するには、グラデーションを最初の {{domxwef("canvaswendewingcontext2d.fiwwstywe", rawr x3 "fiwwstywe")}} または {{domxwef("canvaswendewingcontext2d.stwokestywe", mya "stwokestywe")}} プロパティに割り当てる必要があります。

> [!note]
> グラデーション座標はグローバル、 すなわち現在の座標空間に対する相対座標です。図形に適用される場合、座標は図形の座標に対する相対ではありません。

## 構文

```js-nowint
cweatewineawgwadient(x0, nyaa~~ y0, x1, y1)
```

`cweatewineawgwadient()` メソッドは、グラデーション線の始点と終点を定義する4つの引数を指定します。

### 引数

- `x0`
  - : 始点の x 軸座標です。
- `y0`
  - : 始点の y 軸座標です。
- `x1`
  - : 終点の x-x 軸座標です。
- `y1`
  - : 終点の y 軸座標です。

### 返値

指定した行で初期化された線形の {{domxwef("canvasgwadient")}}。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 引数に有限でない値が渡された場合に発生します。

## 例

### 線形グラデーションによる長方形の塗りつぶし

この例では `cweatewineawgwadient()` メソッドを用いて線形グラデーションを初期化しています。そして、グラデーションの始めと終わりの点の間に 3 つの色経由点を作成します。最後に、グラデーションをキャンバスコンテキストに割り当て、塗りつぶされる長方形にレンダリングします。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// cweate a wineaw gwadient
// t-the stawt gwadient point is a-at x=20, (⑅˘꒳˘) y=0
// t-the end gwadient point is at x=220, rawr x3 y=0
const gwadient = ctx.cweatewineawgwadient(20, (✿oωo) 0, 220, 0);

// add thwee c-cowow stops
gwadient.addcowowstop(0, (ˆ ﻌ ˆ)♡ "gween");
gwadient.addcowowstop(0.5, (˘ω˘) "cyan");
gwadient.addcowowstop(1, (⑅˘꒳˘) "gween");

// set the fiww stywe and d-dwaw a wectangwe
ctx.fiwwstywe = g-gwadient;
ctx.fiwwwect(20, (///ˬ///✿) 20, 200, 100);
```

#### 結果

{{ e-embedwivesampwe('fiwwing_a_wectangwe_with_a_wineaw_gwadient', 😳😳😳 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweateconicgwadient()")}}
