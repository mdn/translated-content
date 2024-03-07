---
title: "ImageCapture: getPhotoCapabilities() メソッド"
short-title: getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`getPhotoCapabilities()`** は {{domxref("ImageCapture")}} インターフェイスのメソッドで、利用できる構成オプションの範囲を格納したオブジェクトを解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
getPhotoCapabilities()
```

### 引数

なし。

### 返値

以下のプロパティを持つオブジェクトに解決するプロミス ({{jsxref("Promise")}}) です。

- `redEyeReduction`
  - : `"never"`、`"always"`、`"controllable"` のいずれかを返します。 `"controllable"` の値は、端末の赤目軽減がユーザーによって制御できるということを意味しています。
- `imageHeight`
  - : ユーザーエージェントが対応している画像の高さの範囲を示すオブジェクトを返します。
- `imageWidth`
  - : ユーザーエージェントが対応している画像の幅の範囲を示すオブジェクトを返します。
- `fillLightMode`
  - : 利用できるフィルライトオプションの配列を返します。オプションには `auto`、`off`、`flash` があります。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : コンストラクターで渡した `MediaStreamTrack` の `readyState` プロパティが `live` でない場合に発生します。
- `OperationError` {{domxref("DOMException")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

次の例は [Chrome の画像キャプチャ / 写真解像度サンプル](https://googlechrome.github.io/samples/image-capture/photo-resolution.html)から抜粋したもので、 `getPhotoCapabilities()` の結果を使用して入力範囲のサイズを変更しています。この例では、機器の {{domxref("MediaStream")}} から取得した {{domxref("MediaStreamTrack")}} を使用して {{domxref("ImageCapture")}} オブジェクトを作成する様子も示しています。

```js
const input = document.querySelector('input[type="range"]');

let imageCapture;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);

    return imageCapture.getPhotoCapabilities();
  })
  .then((photoCapabilities) => {
    const settings = imageCapture.track.getSettings();

    input.min = photoCapabilities.imageWidth.min;
    input.max = photoCapabilities.imageWidth.max;
    input.step = photoCapabilities.imageWidth.step;

    return imageCapture.getPhotoSettings();
  })
  .then((photoSettings) => {
    input.value = photoSettings.imageWidth;
  })
  .catch((error) => console.error("Argh!", error.name || error));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
