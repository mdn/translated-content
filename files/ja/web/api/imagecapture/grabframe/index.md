---
title: "ImageCapture: grabFrame() メソッド"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

**`grabFrame()`** は {{domxref("ImageCapture")}} インターフェイスのメソッドで、 {{domxref("MediaStreamTrack")}} 内のライブ動画のスナップショットを取り、スナップショットを格納した {{domxref("ImageBitmap")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
grabFrame()
```

### 引数

なし。

### 返値

{{domxref("ImageBitmap")}} オブジェクトで解決する {{jsxref("Promise")}} です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : コンストラクターで渡した `MediaStreamTrack` の `readyState` プロパティが `live` でない場合に発生します。
- `UnknownError` {{domxref("DOMException")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

この例は、この[シンプルな画像キャプチャのデモ](https://simpl.info/imagecapture/)から抜粋したものです。 `grabFrame()` が返す {{jsxref("Promise")}} を使用して、返されたフレームを {{htmlelement("canvas")}} 要素にコピーする方法を示しています。簡単にするために、 {{domxref("ImageCapture")}} オブジェクトをインスタンス化する方法は示していません。

```js
let grabFrameButton = document.querySelector("button#grabFrame");
let canvas = document.querySelector("canvas");

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      console.log("Grabbed frame:", imageBitmap);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
      canvas.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("grabFrame() error: ", error);
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
