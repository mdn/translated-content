---
title: "MediaRecorder: error イベント"
short-title: error
slug: Web/API/MediaRecorder/error_event
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("MediaStream Recording")}}

**`error`** は {{domxref("MediaRecorder")}} インターフェイスのイベントで、エラーが発生したときに発行されます。 例えば、記録が許可されていない、またはサポートされていないコーデックを使用して試みられたなどです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("event", (event) => {});

onevent = (event) => {};
```

## イベント型

{{domxref("MediaRecorderErrorEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## イベントプロパティ

_親インターフェイスである {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : {{domxref("DOMException")}} で、発生したエラーに関する情報を保持しています。

## 解説

### トリガー

レコーダーのライフタイム中にエラーが発生したときに呼び出される関数です。発生する可能性のある他の一般的なエラーに加えて、 MediaStream 収録 API を使用する際に特に以下のエラーが発生する可能性があります。どれが発生したか判断するには、 {{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}} の値を調べてみてください。

- `SecurityError`
  - : {{domxref("MediaStream")}} が、収録を許可しないように設定されています。例えば、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得したソースで、ユーザーが入力機器を使用する許可を拒否している場合などに該当する可能性があります。
- `InvalidModificationError`
  - : 収録中のストリームのトラック数が変更されました。メディアの記録中にトラックを追加したり削除したりすることはできません。
- `UnknownError`
  - : セキュリティに関連しない、他に分類できないエラーが発生しました。
    収録が停止し、`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} は `inactive` となり、最後に残りの受信データで {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが `MediaRecorder` に送られ、最後に {{domxref("MediaRecorder/stop_event", "stop")}} イベントが送出されました。

## 例

{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使って `error` イベントを待ち受けしてください。

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.addEventListener("error", (event) => {
    console.error(`error recording stream: ${event.error.name}`);
  });
  recorder.start();
}

record();
```

上と同じですが、 `onerror` イベントハンドラープロパティを使用します。

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.onerror = (event) => {
    console.error(`error recording stream: ${event.error.name}`);
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
