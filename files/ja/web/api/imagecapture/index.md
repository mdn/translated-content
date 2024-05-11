---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`ImageCapture`** は [MediaStream 画像キャプチャ API](/ja/docs/Web/API/MediaStream_Image_Capture_API) のインターフェイスで、カメラなどの撮影機器から画像や写真をキャプチャできるようにするメソッドを提供します。有効な {{domxref("MediaStreamTrack")}} を通して、参照される撮影機器から画像をキャプチャするためのインターフェイスを提供します。

## コンストラクター

- {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} {{Experimental_Inline}}
  - : 新しい `ImageCapture` オブジェクトを作成します。このオブジェクトは、指定された {{domxref("MediaStreamTrack")}} （映像ストリームを表します）から静止フレーム（写真）をキャプチャするために使用することができます。

## インスタンスプロパティ

- {{domxref("ImageCapture.track")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンストラクターに渡した {{domxref("MediaStreamTrack")}} への参照を返します。

## インスタンスメソッド

- {{domxref("ImageCapture.takePhoto()")}} {{Experimental_Inline}}
  - : {{domxref("MediaStreamTrack")}} をソースとする動画キャプチャ機器を使用して単一の撮影を行い、データを含む {{domxref("Blob")}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("ImageCapture.getPhotoCapabilities()")}} {{Experimental_Inline}}
  - : 利用できる構成オプションの範囲を格納したオブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{domxref("ImageCapture.getPhotoSettings()")}} {{Experimental_Inline}}
  - : 現在の写真の設定を格納したオブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{domxref("ImageCapture.grabFrame()")}} {{Experimental_Inline}}
  - : ライブ動画のスナップショットを {{domxref("MediaStreamTrack")}} で受け取り、成功すれば {{domxref("ImageBitmap")}} を返します。

## 例

以下のコードは [Chrome の Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html) から引用しています。 `ImageCapture` は画像をキャプチャする場所を要求されるので、下記の例では端末のメディア機器（言い換えればカメラ）から始めます。

この例では、大まかに、端末の {{domxref("MediaStream")}} から抽出した {{domxref("MediaStream")}} を表示しています。このトラックを使用して `ImageCapture` オブジェクトを作成し、 `takePhoto()` と `grabFrame()` を呼び出すことができます。最後に、これらの呼び出しの結果をキャンバスオブジェクトに適用する方法を示します。

```js
let imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      document.querySelector("video").srcObject = mediaStream;

      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
    })
    .catch((error) => console.error(error));
}

function onGrabFrameButtonClick() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      const canvas = document.querySelector("#grabFrameCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.error(error));
}

function onTakePhotoButtonClick() {
  imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas = document.querySelector("#takePhotoCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.error(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split("px")[0];
  canvas.height = getComputedStyle(canvas).height.split("px")[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  canvas
    .getContext("2d")
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio,
    );
}

document.querySelector("video").addEventListener("play", () => {
  document.querySelector("#grabFrameButton").disabled = false;
  document.querySelector("#takePhotoButton").disabled = false;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
