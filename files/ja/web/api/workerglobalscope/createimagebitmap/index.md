---
title: "WorkerGlobalScope: createImageBitmap() メソッド"
short-title: createImageBitmap()
slug: Web/API/WorkerGlobalScope/createImageBitmap
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("Canvas API")}}{{AvailableInWorkers("worker")}}

**`createImageBitmap()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、指定されたソースからビットマップを作成し、オプションでそのソースの一部のみを切り抜きます。
このメソッドは、さまざまな画像ソースを受け付け、 {{domxref("ImageBitmap")}} に解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### 引数

- `image`
  - : 画像ソースで、以下のうちの何れかです。
    - {{domxref("HTMLImageElement")}}
    - {{domxref("SVGImageElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("Blob")}}
    - {{domxref("ImageData")}}
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}
- `sx`
  - : `ImageBitmap` が抽出される長方形の参照点の x 座標。
- `sy`
  - : `ImageBitmap` が抽出される長方形の参照点の y 座標。
- `sw`
  - : `ImageBitmap` が抽出される長方形の幅。
    この値は負の値にすることができます。
- `sh`
  - : `ImageBitmap` が抽出される長方形の高さ。この値は負の値にすることができます。
- `options` {{optional_inline}}
  - : 画像の抽出のためのオプションを設定するオブジェクト。利用可能なオプションは以下の通りです。
    - `imageOrientation`
      - : Specifies how the bitmap image should be oriented.
        - `from-image`
          - : EXIF 方向メタデータが存在する場合、その方向に従って画像を表示します（既定値）。
        - `flipY`
          - : EXIF 方向メタデータが存在する場合、そのメタデータに従って画像の方向を調整し、垂直方向に反転します。
        - `none`
          - : 画像のエンコード方式に従って画像の方向を調整し、方向に関するメタデータ（EXIF メタデータなど、画像を縦向きで撮影するためにカメラを横向きにしたことを示すために画像に追加される場合のあるメタデータ）は無視します。

    - `premultiplyAlpha`
      - : Specifies whether the bitmap's color channels should be premultiplied by the alpha channel.
        One of `none`, `premultiply`, or `default` (default).
    - `colorSpaceConversion`
      - : Specifies whether the image should be decoded using color space conversion.
        Either `none` or `default` (default).
        The value `default` indicates that implementation-specific behavior is used.
    - `resizeWidth`
      - : A long integer that indicates the output width.
    - `resizeHeight`
      - : A long integer that indicates the output height.
    - `resizeQuality`
      - : Specifies the algorithm to be used for resizing the input to match the output dimensions.
        One of `pixelated`, `low` (default), `medium`, or `high`.

### 返値

指定された長方形のビットマップデータを保持する {{domxref("ImageBitmap")}} オブジェクトに解決する {{jsxref("Promise")}} を返します。

## 例

例については {{domxref("Window.createImageBitmap()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
