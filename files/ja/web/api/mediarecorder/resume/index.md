---
title: "MediaRecorder: resume() メソッド"
short-title: resume()
slug: Web/API/MediaRecorder/resume
l10n:
  sourceCommit: 78039f57d12515cd2f97af490a5ec736d228c431
---

{{APIRef("MediaStream Recording")}}

**`resume()`** は {{domxref("MediaRecorder")}} インターフェイスのメソッドで、以前に一時停止していたメディアの記録を再開するために使用します。

{{domxref("MediaRecorder.state")}} がすでに "recording" である場合、`resume()`  の呼び出しは効果がありません。

`resume()` メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が "inactive" の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が "inactive" でない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を "recording" に設定します。
3. 現在の {{domxref("Blob")}} へのデータ収集を続けます。
4. `resume` イベントを発生させます。

## 構文

```js-nolint
resume()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### エラー

- `InvalidStateError` {{domxref("DOMException")}}
  - : `MediaRecorder` が現在 `"inactive"` である場合に発生します。

## 例

```js
pause.onclick = () => {
  if (MediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // 記録を一時停止
  } else if (MediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // 記録を再開
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[Github のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia")}}
