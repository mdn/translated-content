---
title: MediaRecorder.stop()
slug: Web/API/MediaRecorder/stop
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.stop()`** メソッド（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、メディアキャプチャを停止するために使用します。

`stop()` メソッドを呼び出すと、UA は次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が `"inactive"` の場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が `"inactive"` でない場合は、次の手順に進みます。
2. {{domxref("MediaRecorder.state")}} を `"inactive"` に設定してメディアのキャプチャを停止します。
3. 収集されたデータの `Blob` を含む `dataavailable` イベントを発生させます。
4. `stop` イベントを発生させます。

## 構文

```
 MediaRecorder.stop()
```

### エラー

`MediaRecorder` オブジェクトの {{domxref("MediaRecorder.state")}} が `"inactive"` のときに `stop()` メソッドが呼び出されると、`InvalidState` エラーが発生します — メディアキャプチャが既に停止している場合は停止しても意味がありません。

## 例

```js
...

  stop.onclick = function() {
    mediaRecorder.stop();
    console.log("レコーダー停止、データ使用可能");
  }

...
```

## 仕様

| 仕様                                                                                                                         | 状態                                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-stop-void", "MediaRecorder.stop()")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.stop")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}
