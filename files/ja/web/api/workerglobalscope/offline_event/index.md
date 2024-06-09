---
title: "WorkerGlobalScope: offline イベント"
short-title: offline
slug: Web/API/WorkerGlobalScope/offline_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Web Workers API")}}

**`offline`** は {{domxref("WorkerGlobalScope")}} のイベントで、端末がインターネットへの接続を失ったときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("offline", (event) => {});

onoffline = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次のコードでは、ワーカーに `onoffline` ハンドラーを設定しています。

```js
self.onoffline = () => {
  console.log("Your worker is now offline");
};
```

同じスニペットですが、 `addEventListener()` を使用したものです。

```js
self.addEventListener("offline", () => {
  console.log("Your worker is now offline");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属先の {{domxref("WorkerGlobalScope")}} インターフェイス。
