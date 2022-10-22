---
title: MediaRecorder.resume()
slug: Web/API/MediaRecorder/resume
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.resume()`** メソッド（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、以前に一時停止していたメディアの記録を再開するために使用します。

`resume()` メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が `"inactive"` の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が `"inactive"` でない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を `"recording"` に設定します。
3. 現在の {{domxref("Blob")}} へのデータ収集を続けます。
4. `resume` イベントを発生させます。

## 構文

```
MediaRecorder.resume()
```

### エラー

`MediaRecorder` オブジェクトの {{domxref("MediaRecorder.state")}} が `"inactive"` のときに `resume()` メソッドが呼び出されると、`InvalidState` エラーが発生します — まだ一時停止していない場合、記録を再開できませんし、{{domxref("MediaRecorder.state")}} がすでに `"recording"` の場合、`resume()` は効果がありません。

## 例

```js
...

  pause.onclick = function() {
    if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // 記録を一時停止
    } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // 記録を再開
    }
  }

...
```

## 仕様

| 仕様                                                                                                                                 | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-resume-void", "MediaRecorder.resume()")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.resume")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
