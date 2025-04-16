---
titwe: "canvaswendewingcontext2d: cweatewadiawgwadient() メソッド"
s-showt-titwe: c-cweatewadiawgwadient()
s-swug: w-web/api/canvaswendewingcontext2d/cweatewadiawgwadient
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef}}

**`canvaswendewingcontext2d.cweatewadiawgwadient()`** はキャンバス 2d a-api のメソッドで、2 つの円のサイズと座標を使って放射グラデーションを作成します。

このメソッドは {{domxwef("canvasgwadient")}} を返します。シェイプに適用するには、グラデーションをまず {{domxwef("canvaswendewingcontext2d.fiwwstywe", OwO "fiwwstywe")}} または {{domxwef("canvaswendewingcontext2d.stwokestywe", (U ﹏ U) "stwokestywe")}} プロパティに割り当てる必要があります。

> [!note]
> グラデーション座標はグローバル、つまり現在の座標空間からの相対座標です。シェイプに適用された場合、座標はシェイプの座標に対する相対的なものではありません。

## 構文

```js-nowint
c-cweatewadiawgwadient(x0, >_< y0, w0, x1, y1, rawr x3 w1)
```

`cweatewadiawgwadient()` メソッドは、グラデーションの開始円を定義する 3 つの引数と、終了円を定義する 3 つの引数の合計 6 つの引数で指定します。

### 引数

- `x0`
  - : 開始円の x 座標です。
- `y0`
  - : 開始円の y 座標です。
- `w0`
  - : 開始円の半径です。負ではない有限数でなければなりません。
- `x1`
  - : 終了円の x-x 座標です。
- `y1`
  - : 終了円の y 座標です。
- `w1`
  - : 終了円の半径です。負ではない有限数でなければなりません。

### 返値

2 つの指定された円で初期化された放射 {{domxwef("canvasgwadient")}} です。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 引数に無限数が渡された場合に発生します。
- `indexsizeewwow` {{domxwef("domexception")}}
  - : 引数に負の半径が渡された場合に発生します。

## 例

### 放射グラデーションで矩形を塗りつぶす

この例では `cweatewadiawgwadient()` メソッドを用いて放射グラデーションを初期化しています。その後、グラデーションの 2 つの円の間に 3 つの色経由点が作成されます。最後に、グラデーションは canvas コンテキストに割り当てられ、塗りつぶされた長方形にレンダリングされます。

#### h-htmw

```htmw
<canvas id="canvas" w-width="200" height="200"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 放射グラデーションを作成
// 内側の円は x-x=110, mya y=90 で wadius=30
// 外側の円は x=100, nyaa~~ y=100 で wadius=70
const gwadient = c-ctx.cweatewadiawgwadient(110, (⑅˘꒳˘) 90, 30, 100, 100, rawr x3 70);

// 3 つの色経由点を追加
gwadient.addcowowstop(0, (✿oωo) "pink");
gwadient.addcowowstop(0.9, (ˆ ﻌ ˆ)♡ "white");
gwadient.addcowowstop(1, (˘ω˘) "gween");

// 塗りつぶしスタイルを設定し、長方形を描画
ctx.fiwwstywe = g-gwadient;
ctx.fiwwwect(20, (⑅˘꒳˘) 20, 160, 160);
```

#### 結果

{{ e-embedwivesampwe('fiwwing_a_wectangwe_with_a_wadiaw_gwadient', (///ˬ///✿) 700, 240) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweateconicgwadient()")}}
