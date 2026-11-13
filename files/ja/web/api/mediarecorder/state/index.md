---
title: "MediaRecorder: state プロパティ"
short-title: state
slug: Web/API/MediaRecorder/state
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

**`state`** は {{domxref("MediaRecorder")}} インターフェイスの読み取り専用プロパティで、現在の `MediaRecorder` オブジェクトの現在の状態を返します。

## 値

以下のいずれかの値を含む文字列です。

- `inactive`
  - : 収録は行われていません — まだ開始されていないか、開始されてから停止されました。
- `recording`
  - : 収録が開始され、UA がデータをキャプチャしています。
- `paused`
  - : 収録は開始され、その後一時停止されましたが、まだ停止または再開されていません。

## 例

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  // Will return "recording"
  console.log("recorder started");
};
```

## 使用書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 著。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia()")}}
