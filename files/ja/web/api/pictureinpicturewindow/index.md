---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureWindow`** インターフェイスは、プログラムにより 浮動動画ウィンドウの **`width`**、**`height`**、**`resize` イベント**を取得できるオブジェクトを表します。

このインターフェイスを持つオブジェクトは、 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} のプロミスの返値を使用して取得します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`PictureInPictureWindow` インターフェイスはプロパティを継承していません。_

- {{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}
  - : 浮動動画ウィンドウの幅を指定します。
- {{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}
  - : 浮動動画ウィンドウの高さを指定します。

## インスタンスメソッド

_`PictureInPictureWindow` インターフェイスはメソッドを継承していません。_

## イベント

_`PictureInPictureWindow` インターフェイスはイベントを継承していません。_

- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : 浮動動画ウィンドウのサイズ変更時に {{DOMxRef("PictureInPictureWindow")}} に送られます。

## 例

`<button>` と `<video>` が指定されており、ボタンをクリックすると動画がピクチャインピクチャモードになります。次に、浮動動画ウィンドウの寸法をコンソールに出力するイベントを取り付けます。

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(
    `浮動動画ウィンドウの大きさ: ${pipWindow.width}x${pipWindow.height}px`,
  );
  // 表示例:
  // 浮動動画ウィンドウの大きさ: 640x360px
}

button.onclick = () => {
  video.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Picture-in-Picture_API", "Picture-in-Picture API")}}
