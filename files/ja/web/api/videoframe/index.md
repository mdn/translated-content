---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Web Codecs API")}}

**`VideoFrame`** は[ウェブコーデック API](/ja/docs/Web/API/WebCodecs_API) のインターフェイスで、動画のフレームを表します。

`VideoFrame` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## 解説

`VideoFrame` オブジェクトは様々な方法で作成したり、アクセスしたりすることができます。 {{domxref("MediaStreamTrackProcessor")}} はメディアトラックを個々の `VideoFrame` オブジェクトに分割します。

`VideoFrame` は画像のソースであり、他のキャンバスソース（
{{domxref("SVGImageElement")}},
{{domxref("HTMLVideoElement")}},
{{domxref("HTMLCanvasElement")}},
{{domxref("ImageBitmap")}},
{{domxref("OffscreenCanvas")}},
他の {{domxref("VideoFrame")}}）を受け入れるコンストラクターがあります。
これは、画像や動画要素からフレームを作成することができることを意味しています。

2 つ目のコンストラクターは、バイナリーピクセル表現の {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかから `VideoFrame` を生成します。

作成されたフレームは、例えば {{domxref("MediaStreamTrackGenerator")}} インターフェイスを使って、フレームのストリームからメディアトラックを作成します。

## コンストラクター

- {{domxref("VideoFrame.VideoFrame", "VideoFrame()")}}
  - : 新しい `VideoFrame` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("VideoFrame.format")}} {{ReadOnlyInline}}
  - : この `VideoFrame` のピクセル形式を返します。
- {{domxref("VideoFrame.codedWidth")}} {{ReadOnlyInline}}
  - : この `VideoFrame` の幅をピクセル単位で返します。これには、表示されないパディングが含まれる可能性があります。
- {{domxref("VideoFrame.codedHeight")}} {{ReadOnlyInline}}
  - : この `VideoFrame` の高さをピクセル単位で返します。これには、表示されないパディングが含まれる可能性があり、比率の調整を考慮する前の値です。
- {{domxref("VideoFrame.codedRect")}} {{ReadOnlyInline}}
  - : {{domxref("DOMRectReadOnly")}} で、 `codedWidth` および `codedHeight` に一致する幅と高さを返します。
- {{domxref("VideoFrame.visibleRect")}} {{ReadOnlyInline}}
  - : {{domxref("DOMRectReadOnly")}} で、この `VideoFrame` のピクセルの見える矩形を記述します。
- {{domxref("VideoFrame.displayWidth")}} {{ReadOnlyInline}}
  - : アスペクト比を調整して表示した場合の `VideoFrame` の幅を返します。
- {{domxref("VideoFrame.displayHeight")}} {{ReadOnlyInline}}
  - : アスペクト比を調整して表示した場合の `VideoFrame` の高さを返します。
- {{domxref("VideoFrame.duration")}} {{ReadOnlyInline}}
  - : 動画の再生時間をマイクロ秒単位で示す整数を返します。
- {{domxref("VideoFrame.timestamp")}} {{ReadOnlyInline}}
  - : 動画のタイムスタンプをマイクロ秒単位で示す整数を返します。
- {{domxref("VideoFrame.colorSpace")}} {{ReadOnlyInline}}
  - : オブジェクト {{domxref("VideoColorSpace")}} を返します。

## インスタンスメソッド

- {{domxref("VideoFrame.allocationSize()")}}
  - : メソッドに渡すオプションでフィルタリングされた `VideoFrame` を保持するために必要なバイト数を返します。
- {{domxref("VideoFrame.copyTo()")}}
  - : この `VideoFrame` のコンテンツを `ArrayBuffer` にコピーします。
- {{domxref("VideoFrame.clone()")}}
  - : 元と同じメディアリソースを参照する新しい `VideoFrame` オブジェクトを作成します。
- {{domxref("VideoFrame.close()")}}
  - : すべての状態をクリアし、メディアリソースへの参照を解放します。

## 例

次の例では、フレームは {{domxref("MediaStreamTrackProcessor")}} から返され、エンコードされます。完全な例と、記事 [WebCodecs による動画処理](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)の詳細をご覧ください。

```js
let frame_counter = 0;

const track = stream.getVideoTracks()[0];
const media_processor = new MediaStreamTrackProcessor(track);

const reader = media_processor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;

  let frame = result.value;
  if (encoder.encodeQueueSize > 2) {
    // Too many frames in flight, encoder is overwhelmed
    // let's drop this frame.
    frame.close();
  } else {
    frame_counter++;
    const insert_keyframe = frame_counter % 150 === 0;
    encoder.encode(frame, { keyFrame: insert_keyframe });
    frame.close();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs examples](https://w3c.github.io/webcodecs/samples/)
