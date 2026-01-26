---
title: "ImageCapture: takePhoto() メソッド"
short-title: takePhoto()
slug: Web/API/ImageCapture/takePhoto
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`takePhoto()`** は {{domxref("ImageCapture")}} インターフェイスのメソッドで、 {{domxref("MediaStreamTrack")}} をソースとする動画キャプチャ端末を使用して単一の撮影を行い、データを格納した {{domxref("Blob")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
takePhoto()
takePhoto(photoSettings)
```

### 引数

- `photoSettings` {{optional_inline}}
  - : 写真を撮るためのオプションを設定するオブジェクト。利用できるオプションは以下の通りです。
    - `fillLightMode`
      - : このキャプチャ機器のフラッシュ設定です。 `"auto"`、`"off"`、`"flash"` のいずれかです。
    - `imageHeight`
      - : 画像の希望の高さを整数で指定します。ブラウザーが離散的な高さしか対応していない場合は、この設定に最も近い高さの値を選択します。
    - `imageWidth`
      - : 画像の希望の幅を整数で指定します。ブラウザーが離散的な幅しか対応していない場合は、この設定に最も近い幅の値を選択します。
    - `redEyeReduction`
      - : 論理値で、赤目軽減が利用できる場合に使用するかどうかを示します。

### 返値

{{domxref("Blob")}} で解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : コンストラクターで渡した `MediaStreamTrack` の `readyState` プロパティが `live` でない場合に発生します。
- `UnknownError` {{domxref("DOMException")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

この例は、この[シンプルな画像キャプチャのデモ](https://simpl.info/imagecapture/)から抜粋したものです。 `takePhoto()` が返す {{jsxref("Promise")}} を使用して、返された {{domxref("Blob")}} を {{htmlelement("img")}} 要素にコピーする方法を示しています。簡単にするために、 {{domxref("ImageCapture")}} オブジェクトをインスタンス化する方法は示していません。

```js
let takePhotoButton = document.querySelector("button#takePhoto");
let canvas = document.querySelector("canvas");

takePhotoButton.onclick = takePhoto;

function takePhoto() {
  imageCapture
    .takePhoto()
    .then((blob) => {
      console.log("Took photo:", blob);
      img.classList.remove("hidden");
      img.src = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("takePhoto() error: ", error);
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
