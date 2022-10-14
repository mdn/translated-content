---
title: MediaRecorderErrorEvent.error
slug: Web/API/MediaRecorderErrorEvent/error
---

{{APIRef("MediaStream Recording")}}

**{{domxref("MediaRecorderErrorEvent")}}** インタフェースの読み取り専用の `error` プロパティは、{{domxref("MediaRecorder")}} インスタンスによってスローされた例外に関する詳細を提供する {{domxref("DOMException")}} オブジェクトです。

`Media​Recorder​Error​Event​` が発生した場合、`MediaRecorder` の {{event("error")}} イベントハンドラである {{domxref("MediaRecorder.onerror", "onerror")}} によって受けた `MediaRecorderErrorEvent` 内の `error` プロパティを調べることによって、何が問題であるかをある程度判断できます。

## 構文

```
error = MediaRecorderErrorEvent.error;
```

### 値

イベントによって表されるエラーを記述する {{domxref("DOMException")}}。 エラーの {{domxref("DOMException.name", "name")}} プロパティの値は、仕様で明確に識別されているものも含め、メディア記録の処理中に意味をなすものであればどんな例外でもかまいません。 ここでの説明は一般的なものです。 あなたはそれらが対応するメソッドのリファレンスで起こるかもしれない様々なシナリオにもっと具体的なものを見つけるでしょう。

- `InvalidStateError`
  - : 操作が許可されていないコンテキストで操作が試行されたか、削除されたか取り除かれたオブジェクトに対して要求が行われました。
- `NotSupportedError`
  - : 指定されたオプションが無効なため、`MediaRecorder` を作成できませんでした。 `message` 属性は、もしあれば追加情報を提供するべきです。
- `SecurityError`
  - : {{domxref("MediaStream")}} は記録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。 これは、ソースストリームの {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}} 制約により、ストリーム内の {{domxref("MediaStreamTrack")}} が {{domxref("MediaStreamTrack.isolated", "isolated")}} としてマークされている場合にも発生します。

## 例

この関数は、与えられた {{domxref("MediaStream")}} の `MediaRecorder` を作成して、データを配列にバッファし、エラーを監視するように構成して、返します。

```js
function recordStream(stream) {
  let recorder = null;
  let bufferList = [];

  try {
    recorder = new MediaRecorder(stream);
  } catch(err) {
    /* レコーダーを作成しようとしたときの例外。 それを扱う */
  }

  recorder.ondataavailable = function(event) {
    bufferList.push(event.data);
  };

  recorder.onerror = function(event) {
    let error = event.error;
  };

  recorder.start(100);  /* バッファあたり 100ms のタイムスライス */
  return recorder;
}
```

## 仕様

| 仕様                                                                                                                             | 状態                                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{ SpecName('MediaStream Recording', '#errorevent-section', 'MediaRecorderErrorEvent.error') }} | {{ Spec2('MediaStream Recording') }} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorderErrorEvent.error")}}

## 関連情報

- [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API)
- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
