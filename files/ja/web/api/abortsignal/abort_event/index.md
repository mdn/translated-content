---
title: "AbortSignal: abort イベント"
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("DOM")}}

**`abort`** は {{domxref("AbortSignal")}} のイベントで、関連するリクエストが中止されたとき、つまり {{domxref("AbortController.abort()")}} を使用して中止されたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener('abort', (event) => { })

onabort = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

以下のスニペットでは、新しい `AbortController` オブジェクトを作成し、その {{domxref("AbortSignal")}} （`signal` プロパティを使用して利用できます）を取得します。次に、イベントハンドラープロパティを使用して、シグナルが中止されたかどうかを調べます。

`abort` イベントを [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで検出することができます。

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

または、 `onabort` イベントハンドラープロパティを使用してください。

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Request aborted");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
