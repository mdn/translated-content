---
title: "MediaRecorder: start イベント"
short-title: start
slug: Web/API/MediaRecorder/start_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

**`start`** は {{domxref("MediaRecorder")}} インターフェイスのイベントで、{{domxref("MediaRecorder.start()")}} メソッドを呼び出した結果として発生します。この時点で、データは {{domxref("Blob")}} に収集され始めます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("start", (event) => { })

onstart = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("レコーダーが起動しました");
};

mediaRecorder.onstart = () => {
  // 記録の開始に
  // 応答して何かをする
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia")}}
