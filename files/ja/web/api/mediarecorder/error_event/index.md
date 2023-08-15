---
title: "MediaRecorder: error イベント"
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef}}

{{domxref("MediaRecorder")}} インターフェイスの **`error`** イベントは、エラーが発生したときに発生します。 例えば、記録が許可されていない、またはサポートされていないコーデックを使用して試みられたなどです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('event', (event) => { });

onevent = (event) => { };
```

## イベント型

{{domxref("MediaRecorderErrorEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## イベントプロパティ

_親インターフェイスである {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : {{domxref("DOMException")}} で、発生したエラーに関する情報を保持しています。

### 値

レコーダーのライフタイム中にエラーが発生したときに呼び出される関数です。発生する可能性のある他の一般的なエラーに加えて、 MediaStream 収録 API を使用する際に特に以下のエラーが発生する可能性があります。どれが発生したか判断するには、 {{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}} の値を調べてみてください。

- `InvalidStateError`
  - : 非アクティブなレコーダーの停止または一時停止、アクティブなレコーダーの開始または再開、あるいは間違った状態での `MediaRecorder` の操作が試みられました。この例外は、削除されたソースに対してリクエストが行われた場合にも発生します。
- `SecurityError`
  - : {{domxref("MediaStream")}} が、収録を許可しないように設定されています。例えば、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得したソースで、ユーザーが入力機器を使用する許可を拒否している場合などに該当する可能性があります。
- `NotSupportedError`
  - : ユーザーの端末で対応していない MIME タイプを使用して `MediaRecorder` をインスタンス化しようとしました。リクエストされたコンテナー、コーデック、プロファイル、そして他にも情報が無効な場合があります。
- `InvalidModificationError`
  - : 収録中のストリームのトラック数が変更されました。メディアの記録中にトラックを追加したり削除したりすることはできません。
- `UnknownError`
  - : セキュリティに関連しない、他に分類できないエラーが発生しました。
収録が停止し、`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} は `inactive` となり、最後に残りの受信データで {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが `MediaRecorder` に送られ、最後に {{domxref("MediaRecorder/stop_event", "stop")}} イベントが送出されました。

これらのエラーは `MediaRecorder` メソッドを呼び出すことによって直接的に発生することもあれば、録画中に発生する問題によって間接的に発生することもあります。

## 例

[`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使って `error` イベントを監視します。

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.addEventListener('error', (event) => {
        console.error(`error recording stream: ${event.error.name}`)
    });
    recorder.start();
}

record();
```

上と同じですが、 onerror イベントハンドラープロパティを使用します。

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.onerror = (event) => {
        console.error(`error recording stream: ${event.error.name}`)
    };
    recorder.start();
}

record();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
