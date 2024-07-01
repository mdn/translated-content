---
title: "EventSource: open イベント"
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef}}

`open` は {{domxref("EventSource")}} API のイベントで、イベントソースとのコネクションが開かれたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen version
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
- {{domxref("EventSource/open_event", "open")}}
- {{domxref("EventSource/error_event", "error")}}
- {{domxref("EventSource/message_event", "message")}}
