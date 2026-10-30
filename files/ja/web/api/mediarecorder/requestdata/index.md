---
title: "MediaRecorder: requestData() メソッド"
short-title: requestData()
slug: Web/API/MediaRecorder/requestData
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

**`requestData()`** は {{domxref("MediaRecorder")}} インターフェイスのメソッドで、{{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントを発生させるために使用します。これは、このメソッドを呼び出した時点での、キャプチャされたメディアの {{domxref("Blob")}} オブジェクトを含みます。その後、これを入手して操作することができます。

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

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `MediaRecorder` が現在 `「inactive」` の状態である場合に発生します。`MediaRecorder` がアクティブでない場合、録画をキャプチャすることはできません。

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
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia")}}
