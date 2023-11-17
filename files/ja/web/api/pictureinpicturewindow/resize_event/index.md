---
title: "PictureInPictureWindow: resize イベント"
short-title: resize
slug: Web/API/PictureInPictureWindow/resize_event
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Picture-in-Picture API")}}

**`resize`** イベントは、浮動動画ウィンドウのサイズが変更されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## イベント型

{{domxref("PictureInPictureEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PictureInPictureEvent")}}

## イベントプロパティ

_このインターフェイスには以下のプロパティに加え、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : サイズが変更された {{domxref("PictureInPictureWindow")}} を返します。

## 例

### ウィンドウのサイズをログ出力

```html
<p>Resize the floating video window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
<video id="video" src="" muted autoplay></video>
```

```js
const video = document.querySelector("#video");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resize(evt) {
  heightOutput.textContent = evt.target.height;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture().then((pictureInPictureWindow) => {
  pictureInPictureWindow.onresize = resize;
  // or
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
