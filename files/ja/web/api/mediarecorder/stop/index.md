---
title: "MediaRecorder: stop() メソッド"
short-title: stop()
slug: Web/API/MediaRecorder/stop
l10n:
  sourceCommit: 0ca31f3b72e94b4b107c45ac6216071e486cac0a
---

{{APIRef("MediaStream Recording")}}

**`stop()`** は {{domxref("MediaRecorder")}} インターフェイスのメソッドで、メディアキャプチャを停止するために使用します。

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

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `MediaRecorder` が現在 `"inactive"` である場合に発生します。`MediaRecorder` がアクティブでない場合、収録を停止することはできません。

## 例

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log("レコーダー停止、データ使用可能");
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
