---
title: "WorkerGlobalScope: online イベント"
short-title: online
slug: Web/API/WorkerGlobalScope/online_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Web Workers API")}}

**`online`** は {{domxref("WorkerGlobalScope")}} のイベントで、端末がインターネットに再接続したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("online", (event) => {});

ononline = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次のコードでは、ワーカーに `ononline` ハンドラーを設定しています。

```js
self.ononline = () => {
  console.log("Your worker is now online");
};
```

同じスニペットですが、 `addEventListener()` を使用したものです。

```js
self.addEventListener("online", () => {
  console.log("Your worker is now online");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

The {{domxref("WorkerGlobalScope")}} interface it belongs to.
