---
title: "EventSource: error イベント"
short-title: error
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef}}

`error` は {{domxref("EventSource")}} API のイベントで、イベントソースとのコネクションを開くのに失敗した場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const evtSource = new EventSource("sse.php");

// addEventListener 版
evtSource.addEventListener("error", (e) => {
  console.log("An error occurred while attempting to connect.");
});

// onerror 版
evtSource.onerror = (e) => {
  console.log("An error occurred while attempting to connect.");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サーバー送信イベントの使用](/ja/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/ja/docs/Web/API/EventSource/open_event)
- [`message`](/ja/docs/Web/API/EventSource/message_event)
