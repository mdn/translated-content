---
title: MediaRecorderErrorEvent.error
slug: Web/API/MediaRecorderErrorEvent/error
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

`error` は **{{domxref("MediaRecorderErrorEvent")}}** インタフェースの読み取り専用のプロパティで、{{domxref("MediaRecorder")}} インスタンスによって発生した例外に関する詳細を提供する {{domxref("DOMException")}} オブジェクトです。

`MediaRecorderErrorEvent` が発生した場合、`MediaRecorder` の {{domxref("MediaRecorder/error_event", "error")}} イベントハンドラーである {{domxref("MediaRecorder/error_event", "onerror")}} によって受けた `MediaRecorderErrorEvent` 内の `error` プロパティを調べることによって、何が問題であるかをある程度判断できます。

### 値

イベントによって表されるエラーを記述する {{domxref("DOMException")}}。 エラーの {{domxref("DOMException.name", "name")}} プロパティの値は、仕様で明確に識別されているものも含め、メディア収録の処理中に意味をなすものであればどんな例外でもかまいません。 ここでの説明は一般的なものです。 あなたはそれらが対応するメソッドのリファレンスで起こるかもしれない様々なシナリオにもっと具体的なものを見つけるでしょう。

- `InvalidStateError`
  - : 操作が許可されていないコンテキストで操作が試行されたか、削除されたか取り除かれたオブジェクトに対して要求が行われました。
- `NotSupportedError`
  - : 指定されたオプションが無効なため、`MediaRecorder` を作成できませんでした。 `message` 属性は、もしあれば追加情報を提供するべきです。
- `SecurityError`
  - : {{domxref("MediaStream")}} は収録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。
- `InvalidModificationError`
  - : 収録中のストリームのトラック数が変更されました。メディアの収録中にトラックを追加したり削除したりすることはできません。
- `UnknownError`
  - : セキュリティに関連しない、他に分類できないエラーが発生しました。
    収録が停止し、`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} は `inactive` となり、最後に残りの受信データで {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが `MediaRecorder` に送られ、最後に {{domxref("MediaRecorder/stop_event", "stop")}} イベントが送出されました。

## 例

### 基本的なエラー処理の例

この関数は、与えられた {{domxref("MediaStream")}} の `MediaRecorder` を作成して、データを配列にバッファし、エラーを監視するように構成して、返します。

```js
function recordStream(stream) {
  let recorder = null;
  let bufferList = [];

  try {
    recorder = new MediaRecorder(stream);
  } catch (err) {
    /* レコーダーを作成しようとしたときの例外。 それを扱う */
  }

  recorder.ondataavailable = (event) => {
    bufferList.push(event.data);
  };

  recorder.onerror = (event) => {
    console.error(`Error: ${event.error}`);
  };

  recorder.start(100); /* バッファあたり 100ms のタイムスライス */
  return recorder;
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
