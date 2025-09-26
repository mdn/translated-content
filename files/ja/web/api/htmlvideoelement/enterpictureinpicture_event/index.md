---
title: "HTMLVideoElement: enterpictureinpicture イベント"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

`enterpictureinpicture` イベントは、{{DOMxRef("HTMLVideoElement")}} がピクチャインピクチャモードに入ることに成功した場合に発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("enterpictureinpicture", (event) => {});

onenterpictureinpicture = (event) => {};
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

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener("enterpictureinpicture", onEnterPip, false);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

`onenterpictureinpicture` イベントハンドラープロパティを使用した場合:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = () => {
  video.requestPictureInPicture();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLVideoElement")}}
- [ピクチャインピクチャ API](/ja/docs/Web/API/Picture-in-Picture_API)
