---
title: MediaRecorder.stop()
slug: Web/API/MediaRecorder/stop
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.stop()`** メソッド（[MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、メディアキャプチャを停止するために使用します。

`stop()` メソッドを呼び出すと、 UA は次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が "inactive" の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が "inactive" でない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を "inactive" に設定してメディアのキャプチャを停止します。
3. 収集されたデータの Blob を含む `dataavailable` イベントを発生させます。
4. `stop` イベントを発生させます。

## 構文

```js-nolint
stop()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### エラー

`MediaRecorder` オブジェクトの {{domxref("MediaRecorder.state")}} が "inactive" のときに `stop()` メソッドが呼び出されると、`InvalidState` エラーが発生します — メディアキャプチャが既に停止している場合は停止しても意味がありません。

## 例

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log("レコーダー停止、データ使用可能");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
