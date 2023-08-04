---
title: "MediaRecorder: start イベント"
slug: Web/API/MediaRecorder/start_event
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{APIRef("Media Recorder API")}}

`start` イベントは、{{domxref("MediaRecorder.start()")}} メソッドを呼び出した結果として発生します。 この時点で、データは {{domxref("Blob")}} に集められ始めます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("レコーダーが起動しました");
}

mediaRecorder.onstart = () => {
  // 記録の開始に
  // 応答して何かをする
}
```

## インスタンスプロパティ

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
