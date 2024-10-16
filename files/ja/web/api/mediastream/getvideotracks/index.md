---
title: "MediaStream: getVideoTracks() メソッド"
short-title: getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`getVideoTracks()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、このストリームに含まれる動画トラックを表す {{domxref("MediaStreamTrack")}} オブジェクトの配列を返します。

## 構文

```js-nolint
getVideoTracks()
```

### 引数

なし。

### 返値

{{domxref("MediaStreamTrack")}} オブジェクトの配列で、それぞれがメディアストリームに含まれるそれぞれの動画トラックを表します。動画トラックは {{domxref("MediaStreamTrack.kind", "kind")}} プロパティが `video` であるトラックです。ストリームに動画トラックが含まれていない場合、配列は空となります。

> [!NOTE]
> トラックの順序は仕様で定義されておらず、 `getVideoTracks()` の呼び出しごとに同じ順序になるとは限りません。

## 例

次の例は、 [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html) (英語)から抜粋したものであり、 `getVideoTracks()` を用いて取得したトラックを {{domxref("ImageCapture.ImageCapture", "ImageCapture()")}} コンストラクターへ渡しています。

```js
let imageCapture;

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  document.querySelector("video").srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
