---
title: "VideoFrame: VideoFrame() コンストラクター"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Web Codecs API")}}

**`VideoFrame()`** コンストラクターは、動画のフレームを表す {{domxref("VideoFrame")}} オブジェクトを生成します。

## 構文

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### 引数

最初の型のコンストラクター（上述）は、画像から新しい {{domxref("VideoFrame")}} を作成します。引数は以下のとおりです。

- `image`
  - : 新しい `VideoFrame` の画像データを格納する画像。
    {{domxref("SVGImageElement")}},
    {{domxref("HTMLVideoElement")}},
    {{domxref("HTMLCanvasElement")}},
    {{domxref("ImageBitmap")}},
    {{domxref("OffscreenCanvas")}},
    他の {{domxref("VideoFrame")}} のオブジェクトのいずれかになります。
- `options` {{Optional_Inline}}
  - : 以下のものを含むオブジェクトです。
    - `duration` {{Optional_Inline}}
      - : フレームの再生時間をマイクロ秒単位で表す整数。
    - `timestamp`
      - : フレームのタイムスタンプをマイクロ秒単位で表す整数。
    - `alpha` {{Optional_Inline}}
      - : アルファチャンネルを扱うときにユーザーエージェントがどのように振る舞うべきかを記述する文字列。既定値は "keep" です。
        - `"keep"`: ユーザーエージェントがアルファチャンネルデータを保存することを示します。
        - `"discard"`: ユーザーエージェントがアルファチャンネルを無視または除去すべきことを示します。
    - `visibleRect` {{Optional_Inline}}
      - : `VideoFrame` の可視長方形を表すオブジェクトで、次のものを含みます。
        - `x`
          - : X 座標。
        - `y`
          - : Y 座標。
        - `width`
          - : このフレームの幅。
        - `height`
          - : このフレームの高さ。
    - `displayWidth` {{Optional_Inline}}
      - : アスペクト比調整後に表示される `VideoFrame` の幅。
    - `displayHeight` {{Optional_Inline}}
      - : アスペクト比調整後に表示される `VideoFrame` の高さ。

2 つ目のコンストラクター（上記参照）は、新しい {{domxref("VideoFrame")}} を {{jsxref("ArrayBuffer")}} から作成します。引数は以下の通りです。

- `data`
  - : 新しい `VideoFrame` のデータを保持する {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかです。
- `options`
  - : 以下のものを持つオブジェクトです。
    - `format`
      - : 動画のピクセル形式を表す文字列。以下の文字列のいずれかで、完全な説明は {{domxref("VideoFrame.format", "format")}} プロパティのページにあります。
        - `"I420"`
        - `"I420A"`
        - `"I422"`
        - `"I444"`
        - `"NV12"`
        - `"RGBA"`
        - `"RGBX"`
        - `"BGRA"`
        - `"BGRX"`
    - `codedWidth`
      - : ピクセル単位の `VideoFrame` の幅（不可視のパディングを含む可能性があり、比率の調整を考慮する前の値）。
    - `codedHeight`
      - : ピクセル単位の `VideoFrame` の高さ（不可視のパディングを記載する可能性があり、比率調整を考慮する前の値）。
    - `timestamp`
      - : フレームのタイムスタンプをマイクロ秒単位で表す整数。
    - `duration` {{Optional_Inline}}
      - : フレームの再生時間をマイクロ秒単位で表す整数。
    - `layout` {{Optional_Inline}}
      - : `VideoFrame` 内の各プレーンについて、以下の値を格納したリスト。
        - `offset`
          - : 指定されたプレーンが始まるバイト単位のオフセットを表す整数。
        - `stride`
          - : プレーンの各行が使用するバイト数（パディングを含む）を表す整数。
            プレーンが重なってはいけません。 `layout` を指定しない場合、プレーンはすき間なくパックされます。
    - `visibleRect` {{Optional_Inline}}
      - : VideoFrame` の可視長方形を表すオブジェクトで、以下のものを含みます。
        - `x`
          - : X 座標。
        - `y`
          - : Y 座標。
        - `width`
          - : このフレームの幅。
        - `height`
          - : このフレームの高さ。
    - `displayWidth` {{Optional_Inline}}
      - : アスペクト比調整後に表示される `VideoFrame` の幅。
    - `displayHeight` {{Optional_Inline}}
      - : アスペクト比調整後に表示される `VideoFrame` の高さ。
    - `colorSpace`
      - : VideoFrame` の色空間を表すオブジェクトで、以下のものを含みます。
        - `primaries`
          - : 文字列で、 {{domxref("VideoColorSpace.primaries")}} プロパティのページで記述されている、動画の色のプライマリーを表します。
        - `transfer`
          - : 文字列で、 {{domxref("VideoColorSpace.transfer")}} プロパティのページで記述されている、動画の色変換関数を表します。
        - `matrix`
          - : 文字列で、 {{domxref("VideoColorSpace.matrix")}} プロパティのページで記述されている、動画の色行列を表します。
        - `fullRange`
          - : 論理値です。 `true` の場合、フルレンジの色値が使用されていること示します。
    - `transfer`
      - : `VideoFrame` が切り離して所有権を取る {{jsxref("ArrayBuffer")}} の配列。配列に `data` をバッキングする {{jsxref("ArrayBuffer")}} が格納されている場合、`VideoFrame` はそのバッファーからコピーするのではなく、そのバッファーを直接使用します。

## 例

次の例は [WebCodecs による動画処理](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)の記事から引用しています。この最初の例では、キャンバスから `VideoFrame` を作成しています。

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
let frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

In the following example a `VideoFrame` is created from a {{jsxref("TypedArray")}}.

```js
const pixelSize = 4;
let init = {
  timestamp: 0,
  codedWidth: 320,
  codedHeight: 200,
  format: "RGBA",
};
let data = new Uint8Array(init.codedWidth * init.codedHeight * pixelSize);
for (let x = 0; x < init.codedWidth; x++) {
  for (let y = 0; y < init.codedHeight; y++) {
    let offset = (y * init.codedWidth + x) * pixelSize;
    data[offset] = 0x7f; // Red
    data[offset + 1] = 0xff; // Green
    data[offset + 2] = 0xd4; // Blue
    data[offset + 3] = 0x0ff; // Alpha
  }
}
init.transfer = [data.buffer];
let frame = new VideoFrame(data, init);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
