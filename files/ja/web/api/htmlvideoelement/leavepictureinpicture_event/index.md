---
title: "HTMLVideoElement: leavepictureinpicture イベント"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

`leavepictureinpicture` イベントは、{{DOMxRef("HTMLVideoElement")}} がピクチャインピクチャモードを終了することに成功した場合に発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("leavepictureinpicture", (event) => {});

onleavepictureinpicture = (event) => {};
```

## イベント型

{{domxref("PictureInPictureEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PictureInPictureEvent")}}

## イベントプロパティ

このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。

## 例

この例は HTMLVideoElement の `leavepictureinpicture` イベントのイベントリスナーを追加し、イベントハンドラーがイベントの発行に反応したときにメッセージを投稿します。

`addEventListener()` を使用した場合:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip, false);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

`onleavepictureinpicture` イベントハンドラープロパティを使用した場合:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLVideoElement")}}
- [ピクチャインピクチャ API](/ja/docs/Web/API/Picture-in-Picture_API)
