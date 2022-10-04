---
title: MediaRecorder.pause()
slug: Web/API/MediaRecorder/pause
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.pause()`** メソッド（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、メディアストリームの記録を一時停止するために使用します。

`MediaRecorder` オブジェクトの `pause()` メソッドが呼び出されると、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が `"inactive"` の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 そうでない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を `"paused"` に設定します。
3. 現在の {{domxref("Blob")}} へのデータ収集を停止しますが、後で記録を再開できるように使用可能な状態にしておきます。
4. {{event("pause")}} イベントを発生させます。

## 構文

```
MediaRecorder.pause()
```

### 戻り値

`undefined`.

### 例外

- `InvalidStateError`
  - : `MediaRecorder` は現在 `"inactive"` です。 アクティブでない場合は記録を一時停止できません。 一時停止している間に `pause()` を呼び出しても、何もしません。

## 例

```js
...

 pause.onclick = function() {
     mediaRecorder.pause();
     console.log("記録を一時停止");
 }

...
```

## 仕様

| 仕様                                                                                                                             | 状態                                         | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-pause-void", "MediaRecorder.pause()")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.pause")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
