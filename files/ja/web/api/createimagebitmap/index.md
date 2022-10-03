---
title: self.createImageBitmap()
slug: Web/API/createImageBitmap
original_slug: Web/API/WindowOrWorkerGlobalScope/createImageBitmap
---

{{APIRef("Canvas API")}}

**`createImageBitmap()`** メソッドは、指定されたソースからビットマップを作成します。このメソッドは、windows と worker の両方のグローバルスコープに存在します。このメソッドは、さまざまな異なる画像ソースを受け付け、{{domxref("Promise")}} を返し、{{domxref("ImageBitmap")}} に解決します。

## シンタックス

```
const imageBitmapPromise = createImageBitmap(image[, options]);
const imageBitmapPromise = createImageBitmap(image, sx, sy, sw, sh[, options]);
```

### パラメータ

- `image`
  - : 画像ソースで {{HTMLElement("img")}}、SVG {{SVGElement("image")}}、{{HTMLElement("video")}}、{{HTMLElement("canvas")}}、{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("Blob")}}、{{domxref("ImageData")}}、{{domxref("ImageBitmap")}} または {{domxref("OffscreenCanvas")}} オブジェクトのいずれかになります。
- `sx`
  - : `ImageBitmap` が抽出される矩形の参照点の x 座標。
- `sy`
  - : `ImageBitmap` が抽出される矩形の参照点の y 座標。
- `sw`
  - : `ImageBitmap` が抽出される矩形の幅。この値は負の値にすることができます。
- `sh`
  - : `ImageBitmap` が抽出される矩形の高さ。この値は負の値にすることができます。
- `options` {{optional_inline}}

  - : 画像の抽出のためのオプションを設定するオブジェクト。利用可能なオプションは以下の通りです。

    - `imageOrientation`: 画像をそのまま表示するか、垂直方向に反転させて表示するかを指定します。`none` (デフォルト) または `flipY` のいずれかを指定します
    - `premultiplyAlpha`: ビットマップのカラーチャンネルをアルファチャンネルで前置増幅するかどうかを指定します。`none`、`premultiply`、`default` (デフォルト) のいずれかです
    - `colorSpaceConversion`: 画像を色空間変換でデコードするかどうかを指定します。`none` または `default` (デフォルト) のいずれかを指定します。値 `default` は、実装固有の動作を使用することを示します
    - `resizeWidth`: 出力幅を示す long 整数
    - `resizeHeight`: 出力の高さを示す long 整数
    - `resizeQuality`: 出力寸法に合わせて入力のサイズを変更するために使用するアルゴリズムを指定します。`pixelated`、`low` (デフォルト)、`medium`、`high`のいずれかです

### 戻り値

与えられた矩形のビットマップデータを含む{{domxref("ImageBitmap")}} オブジェクトに解決する{{domxref("Promise")}} を返します。

## 例

### スプライトシートからのスプライト作成

この例では、スプライトシートをロードし、個々のスプライトを抽出し、各スプライトをキャンバスにレンダリングします。スプライトシートとは、複数の小さな画像を含む画像で、それぞれを個別にレンダリングできるようにしたいものです。

```js
var canvas = document.getElementById('myCanvas'),
ctx = canvas.getContext('2d'),
image = new Image();

// スプライトシートがロードされるのを待ちます
image.onload = function() {
  Promise.all([
    // スプライトシートから2つのスプライトを切り取ります
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32)
  ]).then(function(sprites) {
    // 各スプライトをキャンバスに描きます
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
}

// 画像ファイルからスプライトシートを読み込みます
image.src = 'sprites.png';
```

## 仕様

| 仕様書                                                                                                                   | ステータス                       | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "webappapis.html#dom-createimagebitmap", "createImageBitmap")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザの互換性

{{Compat("api.WindowOrWorkerGlobalScope.createImageBitmap")}}

## あわせて参照

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
