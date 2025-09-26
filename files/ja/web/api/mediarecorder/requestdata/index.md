---
title: MediaRecorder.requestData()
slug: Web/API/MediaRecorder/requestData
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.requestData()`** メソッド（[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、 {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントを発生させるために使用します。これは、このメソッドを呼び出した時点での、キャプチャされたメディアの {{domxref("Blob")}} オブジェクトを含みます。その後、これを入手して操作することができます。

`requestData()` メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が "inactive" であった場合は、DOM の `InvalidState` エラーを発生させ、これらの手順を終了します。 {{domxref("MediaRecorder.state")}} が "inactive" でなかった場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントを発生させます。これは現在キャプチャされているデータの {{domxref("Blob")}} を含む （Blob はイベントの `data` 属性で利用可能です）。
3. 新しい Blob を作成し、その後にキャプチャしたデータをそこに配置します。

## 構文

```js-nolint
requestData()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### エラー

`MediaRecorder` オブジェクトの {{domxref("MediaRecorder.state")}} が `"recording"` でないときに `requestData()` メソッドが呼び出されると、`InvalidState` エラーが発生します — 記録が行われていないと、メディアをキャプチャできません。

## 例

```js
captureMedia.onclick = () => {
  mediaRecorder.requestData();
  // これまでのデータのスナップショットを
  // 使用可能にする ondataavailable が発生し、
  // それから、キャプチャは新しい Blob で続行されます
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
