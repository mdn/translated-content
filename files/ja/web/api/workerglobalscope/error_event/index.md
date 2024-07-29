---
title: "WorkerGlobalScope: error イベント"
short-title: error
slug: Web/API/WorkerGlobalScope/error_event
l10n:
  sourceCommit: 684163db5787fb191daacf956af9c4315a06254a
---

{{APIRef("Web Workers API")}}

**`error`** は {{domxref("WorkerGlobalScope")}} インターフェイスのイベントで、ワーカー内でエラーが発生したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (message, filename, lineno, colno, error) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下のコードスニペットは、ワーカーの中に設定された `onerror` ハンドラーを示しています。

```js
self.onerror = () => {
  console.log("There is an error inside your worker!");
};
```

同じスニペットで、 `addEventListener()` を使用したものです。

```js
self.addEventListener("error", () => {
  console.log("There is an error inside your worker!");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属先の {{domxref("WorkerGlobalScope")}} インターフェイス。
