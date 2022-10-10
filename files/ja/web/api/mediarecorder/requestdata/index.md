---
title: MediaRecorder.requestData()
slug: Web/API/MediaRecorder/requestData
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.requestData()`** メソッド（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、このメソッドを呼び出したときにあった、キャプチャされたメディアの {{domxref("Blob")}} オブジェクトを含む {{domxref("dataavailable")}} イベントを発生させるために使用します。 その後、これを入手して操作することができます。

`requestData()` メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. {{domxref("MediaRecorder.state")}} が `"recording"` でない場合は、DOM の `InvalidState` エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が `"recording"` の場合は、次の手順に進みます。
2. 現在キャプチャされているデータの {{domxref("Blob")}} を含む {{event("dataavailable")}} イベントを発生させます（`Blob` はイベントの `data` 属性で利用可能です）。
3. 新しい `Blob` を作成し、その後にキャプチャしたデータをそこに配置します。

## 構文

```
MediaRecorder.requestData()
```

### エラー

`MediaRecorder` オブジェクトの {{domxref("MediaRecorder.state")}} が `"recording"` でないときに `requestData()` メソッドが呼び出されると、`InvalidState` エラーが発生します — 記録が行われていないと、メディアをキャプチャできません。

## 例

```js
...

  captureMedia.onclick = function() {
    mediaRecorder.requestData();
    // これまでのデータのスナップショットを
    // 使用可能にする ondataavailable が発生し、
    // それから、キャプチャは新しい Blob で続行されます
  }

...
```

## 仕様

| 仕様                                                                                                                                             | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-requestData-void", "MediaRecorder.requestData()")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.requestData")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
