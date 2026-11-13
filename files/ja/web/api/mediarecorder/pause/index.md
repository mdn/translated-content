---
title: "MediaRecorder: pause() メソッド"
short-title: pause()
slug: Web/API/MediaRecorder/pause
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("MediaStream Recording")}}

**`pause()`** は {{domxref("MediaRecorder")}} インターフェイスのメソッドで、メディアストリームの収録を一時停止するために使用します。

`MediaRecorder` オブジェクトの `pause()` メソッドが呼び出されると、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が "inactive" の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 そうでない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を "paused" に設定します。
3. 現在の {{domxref("Blob")}} へのデータ収集を停止しますが、後で収録を再開できるように使用可能な状態にしておきます。
4. {{domxref("MediaRecorder/pause_event", "pause")}} イベントを発生させます。

## 構文

```js-nolint
pause()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `MediaRecorder` は現在 `"inactive"` です。 アクティブでない場合は収録を一時停止できません。 一時停止している間に `pause()` を呼び出しても、何もしません。

## 例

```js
pause.onclick = () => {
  mediaRecorder.pause();
  console.log("recording paused");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia")}}
