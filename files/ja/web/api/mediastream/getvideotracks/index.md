---
title: MediaStream.getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
tags:
  - API
  - Media
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaStream
  - メソッド
  - リファレンス
  - 動画
  - getVideoTracks
  - ストリーム
  - トラック
browser-compat: api.MediaStream.getVideoTracks
translation_of: Web/API/MediaStream/getVideoTracks
---
{{APIRef("Media Capture and Streams")}}

**`getVideoTracks()`** は {{domxref("MediaStream")}} インタフェースのメソッドで、このストリームに含まれる動画トラックを表す {{domxref("MediaStreamTrack")}} オブジェクトの配列を返します。

## 構文

```js
var mediaStreamTracks[] = mediaStream.getVideoTracks();
```

### 引数

なし。

### 返値

{{domxref("MediaStreamTrack")}} オブジェクトの配列で、それぞれがメディアストリームに含まれるそれぞれの動画トラックを表します。動画トラックは {{domxref("MediaStreamTrack.kind", "kind")}} プロパティが `video` であるトラックです。ストリームに動画トラックが含まれていない場合、配列は空となります。

> **Note:** トラックの順序は仕様で定義されておらず、 `getVideoTracks()` の呼び出しごとに同じ順序になるとは限りません。

この API の初期の版では、特別な `VideoStreamTrack` インターフェイスがあり、動画ストリームのリストに含まれる各項目の型として使用されていましたが、これはその後でメインの {{domxref("MediaStreamTrack")}} インターフェイスに統合されました。

## 例

次の例は、 [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html) (英語)から抜粋したものであり、 `getVideoTracks()` を用いて取得したトラックを {{domxref("ImageCapture.ImageCapture", "ImageCapture()")}} コンストラクターへ渡しています。

```js
var imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
