---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
---

{{DefaultAPISidebar("Image Capture API")}}{{SeeCompatTable}}

**MediaStream Image Capture API** は、写真デバイスから画像やビデオをキャプチャするための API です。データをキャプチャするだけでなく、画像サイズ、赤目軽減、フラッシュの有無、現在の設定などのデバイス機能に関する情報を取得することもできます。逆に、API では、デバイスが許可する制限内で機能を設定できます。

## MediaStream image capture の概念と使用方法

画像またはビデオストリームを検索するプロセスは、以下のように行われます。サンプルコードは、[Chrome の Image Capture の例](https://googlechrome.github.io/samples/image-capture/)を基にしています。

First, get a reference to a device by calling {{domxref("MediaDevices.getUserMedia()")}}. The example below simply says give me whatever video device is available, though the `getUserMedia()` method allows more specific capabilities to be requested. This method returns a {{jsxref("Promise")}} that resolves with a {{domxref("MediaStream")}} object.

```js
navigator.mediaDevices.getUserMedia({ video: true })
  .then(mediaStream => {
    // Do something with the stream.
  })
```

Next, isolate the visual part of the media stream. Do this by calling {{domxref("MediaStream.getVideoTracks()")}}. This returns an array of {{domxref("MediaStreamTrack")}} objects. The code below assumes that the first item in the `MediaStreamTrack` array is the one to use. You can use the properties of the `MediaStreamTrack` objects to select the one you need.

```js
const track = mediaStream.getVideoTracks()[0];
```

At this point, you might want to configure the device capabilities before capturing an image. You can do this by calling {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}} on the track object before doing anything else.

```js
let zoom = document.querySelector('#zoom');
const capabilities = track.getCapabilities();
// Check whether zoom is supported or not.
if(!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced : [{ zoom: zoom.value }] });
```

Finally, pass the `MediaStreamTrack` object to the {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} constructor. Though a `MediaStream` holds several types of tracks and provides multiple methods for retrieving them, the ImageCapture constructor will throw a {{domxref("DOMException")}} of type `NotSupportedError` if {{domxref("MediaStreamTrack.kind")}} is not `"video"`.

```js
let imageCapture = new ImageCapture(track);
```

## インターフェイス

- {{domxref("ImageCapture")}}
  - : 有効な {{domxref("MediaStreamTrack")}} を通じて参照される写真デバイスから画像をキャプチャするためのインタフェース。
- {{domxref("PhotoCapabilities")}}
  - : 接続されている写真デバイスに利用可能な設定オプションを提供します。 {{domxref("ImageCapture.getPhotoCapabilities", "ImageCapture.getPhotoCapabilities()")}} を呼び出して `PhotoCapabilities` オブジェクトを取得します。

## 仕様書

| 仕様書                                                                               | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Media Capture', '#mediadevices', 'MediaDevices')}} | {{Spec2('Media Capture')}} | 初回定義 |

## ブラウザーの互換性

### `ImageCapture`

{{Compat("api.ImageCapture")}}

### `PhotoCapabilities`

{{Compat("api.PhotoCapabilities")}}

## 関連情報

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
