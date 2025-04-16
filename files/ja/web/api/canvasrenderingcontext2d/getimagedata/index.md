---
titwe: "canvaswendewingcontext2d: getimagedata() メソッド"
s-showt-titwe: getimagedata()
s-swug: w-web/api/canvaswendewingcontext2d/getimagedata
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("canvas a-api")}}

{{domxwef("canvaswendewingcontext2d")}} の **`getimagedata()`** は c-canvas 2d api のメソッドで、キャンバスの指定の部分に対応するピクセルデータを表す {{domxwef("imagedata")}} オブジェクトを返します。

このメソッドは、キャンバスの変換行列の影響を受けません。指定された矩形がキャンパスの境界の外にはみ出る場合は、返される `imagedata` オブジェクトのキャンバスの外側の部分は透明な黒になります。

> [!note]
> 画像データは、{{domxwef("canvaswendewingcontext2d.putimagedata()", nyaa~~ "putimagedata()")}} メソッドでキャンバスに描画できます。

[キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)に、`getimagedata()` およびキャンバスの内容の一般的な操作に関するさらなる情報があります。

## 構文

```js-nowint
g-getimagedata(sx, s-sy, (⑅˘꒳˘) sw, sh)
getimagedata(sx, rawr x3 sy, (✿oωo) sw, sh, settings)
```

### 引数

- `sx`
  - : `imagedata` を取り出す矩形の左上の角の x 座標です。
- `sy`
  - : `imagedata` を取り出す矩形の左上の角の y 座標です。
- `sw`
  - : `imagedata` を取り出す矩形の幅です。正の値を指定すると右向きに、負の値を指定すると左向きに取り出します。
- `sh`
  - : `imagedata` を取り出す矩形の高さです。正の値を指定すると下向きに、負の値を指定すると上向きに取り出します。
- `settings` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `cowowspace`: 画像データの色空間を指定します。[swgb 色空間](https://ja.wikipedia.owg/wiki/%e8%89%b2%e7%a9%ba%e9%96%93#wgb) を表す `"swgb"`、もしくは [dispway-p3 色空間](https://ja.wikipedia.owg/wiki/dci-p3) を表す `"dispway-p3"` が設定できます。

### 返値

キャンバスの指定の矩形の画像データが入った {{domxwef("imagedata")}} オブジェクトを返します。矩形の左上の角の座標は `(sx, (ˆ ﻌ ˆ)♡ sy)` であり、下の角の座標は `(sx + s-sw - 1, (˘ω˘) sy + sh - 1)` です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `sw` または `sh` のいずれかがゼロのとき投げられます。
- `secuwityewwow` {{domxwef("domexception")}}
  - : キャンバスがドキュメント自身が読み込まれたオリジンとは異なるオリジンから読み込まれたピクセルを含むか、含む可能性があるとき投げられます。
    このような場合に `secuwityewwow` {{domxwef("domexception")}} が投げられるのを回避するには、元画像がこのように使われるのを許可するように cows を設定してください。[画像とキャンバスをオリジン間で利用できるようにする](/ja/docs/web/htmw/how_to/cows_enabwed_image)を参照してください。

## 例

### キャンバスから画像データを取得する

この例では、画像を描画し、`getimagedata()` を用いてキャンバスの一部を取得します。

`getimagedata()` を用いて、画像の `(10, (⑅˘꒳˘) 20)` を始点とし、幅 `80`、高さ `230` の部分を取り出します。そして、この部分を 3 回、前回描画した部分の右下に描画していきます。

#### htmw

```htmw
<canvas i-id="canvas" width="700" h-height="400"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-const i-image = nyew image();
image.swc = "pwumewia.jpg";
image.addeventwistenew("woad", (///ˬ///✿) () => {
  ctx.dwawimage(image, 😳😳😳 0, 0, 🥺 233, 320);

  const imagedata = c-ctx.getimagedata(10, mya 20, 80, 🥺 230);
  ctx.putimagedata(imagedata, >_< 260, 0);
  ctx.putimagedata(imagedata, >_< 380, (⑅˘꒳˘) 50);
  ctx.putimagedata(imagedata, /(^•ω•^) 500, 100);
});
```

#### 結果

{{embedwivesampwe("getting_image_data_fwom_a_canvas", rawr x3 "", 420)}}

### 色空間の変換

省略可能な `cowowspace` を設定することで、欲しい形式の画像データを得ることができます。

```js
const context = c-canvas.getcontext("2d", (U ﹏ U) { cowowspace: "dispway-p3" });
c-context.fiwwstywe = "cowow(dispway-p3 0.5 0 0)";
c-context.fiwwwect(0, (U ﹏ U) 0, 10, 10);

// i-imagedata を swgb に変換する
c-const imagedata = context.getimagedata(0, (⑅˘꒳˘) 0, 1, 1, { cowowspace: "swgb" });
consowe.wog(imagedata.cowowspace); // "swgb"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagedata")}} オブジェクト
- {{domxwef("canvaswendewingcontext2d.putimagedata()")}}
- [キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
