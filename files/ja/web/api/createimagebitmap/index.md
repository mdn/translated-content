---
title: createImageBitmap()
slug: Web/API/createImageBitmap
l10n:
  sourceCommit: 32539676aca5ea2913cfaefeab3ba986ecd2206f
---

{{APIRef("Canvas API")}}

**`createImageBitmap()`** メソッドは、指定されたソースからビットマップを作成し、オプションでそのソースの一部のみを切り抜きます。このメソッドは、ウィンドウとワーカーの両方のグローバルスコープに存在します。このメソッドは、さまざまな画像ソースを受け付け、 {{domxref("ImageBitmap")}} に解決する {{jsxref("Promise")}} を返します。

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

    - `imageOrientation`
      - : 画像をそのまま表示するか、垂直方向に反転させて表示するかを指定します。`none` （既定値）または `flipY` のいずれかを指定します。
    - `premultiplyAlpha`
      - : ビットマップのカラーチャンネルをアルファチャンネルで前置増幅するかどうかを指定します。 `none`、`premultiply`、`default` （既定値）のいずれかです。
    - `colorSpaceConversion`
      - : 画像を色空間変換でデコードするかどうかを指定します。 `none` または `default` （既定値）のいずれかを指定します。値 `default` は、実装固有の動作を使用することを示します。
    - `resizeWidth`
      - : 出力幅を示す long 整数です。
    - `resizeHeight`
      - : 出力の高さを示す long 整数です。
    - `resizeQuality`
      - : 出力する寸法に合わせて入力のサイズを変更するために使用するアルゴリズムを指定します。`pixelated`、`low` （既定値）`medium`、`high`のいずれかです、

### 返値

指定された矩形のビットマップデータを保持する {{domxref("ImageBitmap")}} オブジェクトに解決する {{jsxref("Promise")}} を返します。

## 例

### スプライトシートからのスプライト作成

この例では、スプライトシートをロードし、個々のスプライトを抽出し、各スプライトをキャンバスにレンダリングします。スプライトシートとは、複数の小さな画像を含む画像で、それぞれを個別にレンダリングできるようにしたいものです。

```js
const canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  image = new Image();

// スプライトシートがロードされるのを待ちます
image.onload = () => {
  Promise.all([
    // スプライトシートから2つのスプライトを切り取ります
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32),
  ]).then((sprites) => {
    // 各スプライトをキャンバスに描きます
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
};

// 画像ファイルからスプライトシートを読み込みます
image.src = "sprites.png";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
