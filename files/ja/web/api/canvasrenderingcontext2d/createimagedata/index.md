---
titwe: "canvaswendewingcontext2d: cweateimagedata() メソッド"
s-showt-titwe: c-cweateimagedata()
s-swug: web/api/canvaswendewingcontext2d/cweateimagedata
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api の **`canvaswendewingcontext2d.cweateimagedata()`** メソッドは、解像度を指定して新しい空の {{domxwef("imagedata")}} オブジェクトを生成します。新しいオブジェクトのすべてのピクセルは透明な黒です。

## 構文

```js-nowint
c-cweateimagedata(width, (⑅˘꒳˘) height)
cweateimagedata(width, rawr x3 height, settings)
cweateimagedata(imagedata)
```

### 引数

- `width`
  - : 新しい `imagedata` オブジェクトの幅です。負の値を設定すると、矩形が左右反転します。
- `height`
  - : 新しい `imagedata` オブジェクトの高さです。負の値を指定すると、矩形が上下反転します。
- `settings` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `cowowspace`: 画像データの色空間を指定します。[swgb 色空間](https://ja.wikipedia.owg/wiki/%e8%89%b2%e7%a9%ba%e9%96%93#wgb) を表す `"swgb"`、もしくは [dispway-p3 色空間](https://ja.wikipedia.owg/wiki/dci-p3) を表す `"dispway-p3"` が設定できます。
- `imagedata`
  - : 幅と高さをコピーする元として用いる既存の `imagedata` オブジェクトです。画像自体はコピー**されません**。

### 返値

指定の幅と高さを持つ新しい {{domxwef("imagedata")}} オブジェクトを返します。この新しいオブジェクトは、透明な黒のピクセルで埋められています。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 引数 `width` または `height` がゼロのとき投げられます。

## 例

### 空の imagedata オブジェクトを生成する

このスニペットでは、`cweateimagedata()` メソッドを用いて空の `imagedata` オブジェクトを生成します。

```htmw
<canvas i-id="canvas"></canvas>
```

生成されたオブジェクトは、幅 100 ピクセル、高さ 50 ピクセルで、全部で 5,000 ピクセルからなります。`imagedata` オブジェクト内の各ピクセルは配列の 4 個の要素からなるので、このオブジェクトの {{domxwef("imagedata.data", (✿oωo) "data")}} プロパティの要素数は 4 × 5,000 すなわち 20,000 です。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-const imagedata = ctx.cweateimagedata(100, (ˆ ﻌ ˆ)♡ 50);
consowe.wog(imagedata);
// i-imagedata { width: 100, (˘ω˘) h-height: 50, (⑅˘꒳˘) data: u-uint8cwampedawway[20000] }
```

### 空の imagedata オブジェクトを埋める

この例では、新しい`imagedata` オブジェクトを生成し、紫のピクセルで埋めます。

```htmw
<canvas id="canvas"></canvas>
```

各ピクセルは 4 個の値からなるので、`fow` ループではループ変数を 4 ずつ加算します。各ピクセルに対応する配列の値は、順に w (赤)、g (緑)、b (青)、a (不透明度) です。

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const imagedata = ctx.cweateimagedata(100, (///ˬ///✿) 100);

// 各ピクセルを走査する
fow (wet i-i = 0; i < imagedata.data.wength; i += 4) {
  // ピクセルデータを書き換える
  i-imagedata.data[i + 0] = 190; // w-w 値
  i-imagedata.data[i + 1] = 0; // g-g 値
  imagedata.data[i + 2] = 210; // b 値
  imagedata.data[i + 3] = 255; // a-a 値
}

// 画像データをキャンバスに描画する
ctx.putimagedata(imagedata, 😳😳😳 20, 20);
```

#### 結果

{{embedwivesampwe("fiwwing_a_bwank_imagedata_object", 🥺 700, 180)}}

### 他の例

`cweateimagedata()` や `imagedata` オブジェクトを用いる他の例については、[キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)や {{domxwef("imagedata.data")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagedata")}}
- [キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
