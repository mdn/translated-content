---
title: "ImageCapture: getPhotoSettings() メソッド"
short-title: getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`getPhotoSettings()`** は {{domxref("ImageCapture")}} インターフェイスのメソッドで、現在の写真設定値を格納したオブジェクトで解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getPhotoSettings()
```

### 引数

なし。

### 返値

以下のプロパティを持つオブジェクトに解決するプロミス ({{jsxref("Promise")}}) です。

- `fillLightMode`
  - : このキャプチャ機器のフラッシュ設定です。 `auto`、`off`、`flash` のいずれかです。
- `imageHeight`
  - : 画像の希望の高さを整数で指定します。ブラウザーが離散的な高さしか対応していない場合は、この設定に最も近い高さの値を選択します。
- `imageWidth`
  - : 画像の希望の幅を整数で指定します。ブラウザーが離散的な幅しか対応していない場合は、この設定に最も近い幅の値を選択します。
- `redEyeReduction`
  - : 論理値で、赤目軽減が利用できる場合に使用するかどうかを示します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : コンストラクターで渡した `MediaStreamTrack` の `readyState` プロパティが `live` でない場合に発生します。
- `OperationError` {{domxref("DOMException")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

次の例は [Chrome の画像キャプチャ / 写真解像度サンプル](https://googlechrome.github.io/samples/image-capture/photo-resolution.html)から抜粋したもので、 `getPhotoSettings()` の結果を使用して入力範囲のサイズを変更しています。この例では、端末の {{domxref("MediaStream")}} から取得した {{domxref("MediaStreamTrack")}} を使用して {{domxref("ImageCapture")}} オブジェクトを作成する様子も示しています。

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
