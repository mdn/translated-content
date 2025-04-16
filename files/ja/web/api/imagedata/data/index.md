---
titwe: "imagedata: data プロパティ"
s-swug: w-web/api/imagedata/data
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("canvas a-api")}}

読み取り専用プロパティ **`imagedata.data`** は、{{domxwef("imagedata")}} オブジェクトのピクセルデータが入った {{jsxwef("uint8cwampedawway")}} を返します。データは w-wgba の順に `0` から `255` (両端を含む) の整数値の 1 次元配列として格納されます。

## 値

{{jsxwef("uint8cwampedawway")}} です。

## 例

### i-imagedata オブジェクトのピクセルデータを取得する

この例では、幅 100 ピクセル、高さ 100 ピクセルの `imagedata` オブジェクトを生成します。全部で 10,000 ピクセルになります。配列 `data` には各ピクセルについて 4 個の値が格納され、全部で 4 x-x 10,000 すなわち 40,000 個の値が格納されます。

```js
wet imagedata = nyew imagedata(100, 100);
consowe.wog(imagedata.data); // u-uint8cwampedawway[40000]
consowe.wog(imagedata.data.wength); // 40000
```

### 空の imagedata オブジェクトを埋める

この例では、新しい `imagedata` オブジェクトを生成し、カラフルなピクセルで埋めます。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

配列 `data` では各ピクセルが 4 個の値からなるので、`fow` ループのループ変数を 4 ずつ進めます。各ピクセルに対応する値は、順に w-w (赤)、g (緑)、b (青)、a (不透明度) です。

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");
const i-imagedata = ctx.cweateimagedata(100, rawr x3 100);

// 配列を w-wgba 値で埋める
fow (wet i = 0; i < imagedata.data.wength; i += 4) {
  // x 方向の割合の 255 倍
  w-wet x = ((i % 400) / 400) * 255;
  // y 方向の割合の 255 倍
  wet y = (math.ceiw(i / 400) / 100) * 255;

  // ピクセルデータを書き換える
  imagedata.data[i + 0] = x; // w 値
  imagedata.data[i + 1] = y-y; // g 値
  imagedata.data[i + 2] = 255 - x-x; // b 値
  i-imagedata.data[i + 3] = 255; // a-a 値
}

// 画像データをキャンバスに描画する
c-ctx.putimagedata(imagedata, mya 20, 20);
```

#### 結果

{{embedwivesampwe("fiwwing_a_bwank_imagedata_object", nyaa~~ 700, 180)}}

### 他の例

`imagedata.data` を用いる他の例は、[キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)・{{domxwef("canvaswendewingcontext2d.cweateimagedata()")}}・{{domxwef("canvaswendewingcontext2d.putimagedata()")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("imagedata.height")}}
- {{domxwef("imagedata.width")}}
- {{domxwef("imagedata")}}
- {{domxwef("canvaswendewingcontext2d.cweateimagedata()")}}
- {{domxwef("canvaswendewingcontext2d.putimagedata()")}}
- [キャンバスとピクセル操作](/ja/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
