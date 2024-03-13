---
title: "CanvasRenderingContext2D: drawImage() メソッド"
slug: Web/API/CanvasRenderingContext2D/drawImage
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.drawImage()`** メソッドは、キャンバスに画像を描画するいくつかの方法を提供します。

## 構文

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

![drawImage](canvas_drawimage.jpg)

### 引数

- `image`
  - : このコンテキストに描画する要素です。仕様では、任意のキャンバスの画像ソースが使えます。
    具体的には、
    {{domxref("HTMLImageElement")}}、
    {{domxref("SVGImageElement")}}、
    {{domxref("HTMLVideoElement")}}、
    {{domxref("HTMLCanvasElement")}}、
    {{domxref("ImageBitmap")}}、
    {{domxref("OffscreenCanvas")}}、
    {{domxref("VideoFrame")}} が使えます。
- `sx` {{optional_inline}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の左上の x 座標です。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。
- `sy` {{optional_inline}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の左上の y 座標です。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。
- `sWidth` {{optional_inline}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の幅です。指定しない場合は、`sx` と `sy` で指定した座標から画像の右下の角までの長方形全体が使用されます。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。負の値を指定すると、画像が反転します。
- `sHeight` {{optional_inline}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の高さです。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。負の値を指定すると、画像が反転します。
- `dx`
  - : 描画元 `image` の左上の角を配置する、描画先キャンバス内の x 座標です。
- `dy`
  - : 描画元 `image` の左上の角を配置する、描画先キャンバス内の y 座標です。
- `dWidth`
  - : `image` を描画先キャンバスに描画する際の幅です。これにより、描画する画像の拡大や縮小ができます。指定しない場合は、画像はそのままの幅で描画されます。この引数は引数 3 個の構文にはありません。
- `dHeight`
  - : `image` を描画先キャンバスに描画する際の高さです。これにより、描画する画像の拡大や縮小ができます。指定しない場合は、画像はそのままの高さで描画されます。この引数は引数 3 個の構文にはありません。

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `image` に画像データが無いときや、キャンバスまたは描画元の長方形の幅または高さがゼロであるとき、投げられます。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 引数 `image` に `null` または `undefined` が渡されたとき投げられます。

## 例

### キャンバスに画像を描画する

この例では、`drawImage()` メソッドを用いてキャンバスに画像を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
<div style="display:none;">
  <img id="source" src="rhino.jpg" width="300" height="227" />
</div>
```

#### JavaScript

元画像は、座標 (33, 71) を始点とし、幅 104、高さ 124 です。画像は、キャンバスの (21, 20) に、幅 87、高さ 104 で描かれます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
```

#### 結果

{{ EmbedLiveSample('Drawing_an_image_to_the_canvas', 700, 180) }}

### 元画像の要素サイズを理解する

`drawImage()` メソッドは、描画時、描画元要素の _CSS ピクセルでの内在サイズ_ を用います。

たとえば、`Image` を読み込み、[コンストラクター](/ja/docs/Web/API/HTMLImageElement/Image)で任意のサイズパラメーターを指定した場合は、切り抜きや拡大縮小の領域などを正しく計算するには、`element.width` と `element.height` ではなく、生成したインスタンスの `naturalWidth` と `naturalHeight` プロパティを用いなければなりません。要素が {{htmlelement("video")}} 要素などであるときは、これは `videoWidth` と `videoHeight` にも適用されます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image(60, 45); // image で任意の画像サイズを使用する
image.onload = drawImageActualSize; // 画像が読み込まれたら、描画する

// CSS ピクセルで内在サイズが 300x227 の画像を読み込む
image.src = "rhino.jpg";

function drawImageActualSize() {
  // canvas 要素には画像の CSS ピクセルでの内在サイズを用いる
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // コンストラクターで指定したサイズ 60x45 を無視し、画像を 300x227 で描画する
  ctx.drawImage(this, 0, 0);

  // 独自のサイズを使用するには、要素の width と height プロパティに基づいて
  // 拡大縮小のパラメーターを指定する必要があります。
  // ここでは、上部の角に描画します。
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
```

#### 結果

{{EmbedLiveSample('Understanding_source_element_size', 700, 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 注意点

- {{domxref("HTMLVideoElement")}} では、`drawImage()` は {{domxref("HTMLMediaElement.readyState")}} が 1 より大きいとき (すなわち、`currentTime` プロパティの設定後に **seek** イベントが発火したとき) のみ正しく動作します。
- `drawImage()` は、描画・切り抜き・拡大縮小を行なう際、常に描画元要素の _CSS ピクセルでの内在サイズ_ を使用します。
- 古いブラウザーのバージョンには、`drawImage()` が Orientation を含む画像のすべての EXIF メタデータを無視するものがあります。この挙動は、特に iOS デバイスで不都合のもとになります。修正するには、自分で Orientation を検出して `rotate()` を用いるとよいでしょう。

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
