---
title: MediaRecorder.start()
slug: Web/API/MediaRecorder/start
---

{{APIRef("MediaStream Recording")}}

MediaStream Recording API の一部である {{domxref("MediaRecorder")}} のメソッド **`start()`** は、1 つ以上の {{domxref("Blob")}} オブジェクトへのメディアの記録を開始します。 メディアの全期間を単一の `Blob` に（または {{domxref("MediaRecorder.requestData", "requestData()")}} を呼び出すまで）記録することも、一度に記録するミリ秒数を指定することもできます。 その後、その量のメディアが記録されるたびに、記録されたメディアに対応できるようにイベントが配信され、その間に、メディアの次のスライスを記録するための新しい `Blob` が作成されます。

`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} が `"inactive"` であると仮定すると、`start()` は `state` を `"recording"` に設定してから、入力ストリームからメディアのキャプチャを開始します。 タイムスライス期間が経過するか、ソースメディアが終了するまで、`Blob` が作成され、そこにデータが収集されます。 `Blob` がその時点まで満たされるたびに（タイムスライス期間または、スライス期間が指定されていない場合はメディアの終わり）、{{event("dataavailable")}} イベントが記録されたデータとともに `MediaRecorder` に送られます。 ソースがまだ再生中の場合は、新しい `Blob` が作成され、そこに記録が続きます。

ソースストリームが終了すると、`state` は `"inactive"` に設定され、データ収集は停止します。 最後の {{event("dataavailable")}} イベントが `MediaRecorder` に送られ、その後に {{event("stop")}} イベントが続きます。

> **メモ:** ブラウザーが記録を開始または記録を続行できない場合は、{{domxref("DOMError")}} イベントを発生*させよう*とし、続いて収集した Blob を含む {{domxref("MediaRecorder.dataavailable")}} イベントと {{domxref("MediaRecorder.stop")}} イベントを発生*させよう*とします。

## 構文

```
MediaRecorder.start(timeslice)
```

### パラメーター

- `timeslice` {{optional_inline}}
  - : 各 {{domxref("Blob")}} に記録するミリ秒数。 このパラメータが含まれていない場合は、{{domxref("MediaRecorder.requestData", "requestData()")}} メソッドが呼び出されて `Blob` が取得され、メディアの記録を継続する新しい `Blob` の作成のきっかけがない限り、メディア期間全体が単一の `Blob` に記録されます。

### 戻り値

`undefined`.

### 例外

すぐに検出できるエラーは DOM 例外としてスローされます。 他のすべてのエラーは、`MediaRecorder` オブジェクトに送られた {{event("error")}} イベントを通じて報告されます。 これらのエラーに対応するために {{domxref("MediaRecorder.onerror", "onerror")}} イベントハンドラを実装できます。

- `InvalidStateError`
  - : `MediaRecorder` は `inactive` 状態ではありません。 すでに記録中の場合は、メディアの記録を開始できません。 {{domxref("MediaRecorder.state", "state")}} プロパティを参照してください。
- `SecurityError`
  - : {{domxref("MediaStream")}} は記録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。 これは、ソースストリームの {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}} 制約により、ストリーム内の {{domxref("MediaStreamTrack")}} が {{domxref("MediaStreamTrack.isolated", "isolated")}} としてマークされている場合にも発生します。 この例外は、記録開始後にソースメディアのセキュリティオプションが変更された場合にも {{event("error")}} イベントとして配信される可能性があります。
- `UnknownError`
  - : 記録処理中に何か他の問題が発生しました。

## 例

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("レコーダー起動");
  }

...
```

## 仕様

| 仕様                                                                                                                                                 | 状態                                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-start-void-long-timeslice", "MediaRecorder.start()")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.start")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
