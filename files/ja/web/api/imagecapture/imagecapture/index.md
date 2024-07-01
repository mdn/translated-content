---
title: "ImageCapture: ImageCapture() コンストラクター"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`ImageCapture()`** コンストラクターは、新しい {{domxref("ImageCapture")}} オブジェクトを作成します。

## 構文

```js-nolint
new ImageCapture(videoTrack)
```

### 引数

- `videoTrack`
  - : 静止画像を取り込む {{domxref("MediaStreamTrack")}} です。これは、ビデオ会議の受信ストリーム、再生中の動画、ウェブカメラからのストリームなど、どのようなソースでもかまいません。

### 返値

指定した動画トラックから静止画フレームをキャプチャするために使用することができる新しい `ImageCapture` オブジェクトです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : `videoTrack` 引数の `kind` プロパティが `video` でない場合に発生します。

## 例

以下の例は、 {{domxref("MediaDevices.getUserMedia()")}} の呼び出しを使用して、 `ImageCapture()` コンストラクターで必要とされる {{domxref("MediaStreamTrack")}} を取得する方法を示しています。

```js
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch((error) => console.error(error));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
