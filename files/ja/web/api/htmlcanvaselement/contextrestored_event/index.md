---
title: "HTMLCanvasElement: contextrestored イベント"
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

**`contextrestored`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のイベtので、ユーザーエージェントが [`CanvasRenderingContext2D`](/ja/docs/Web/API/CanvasRenderingContext2D) のバッキングストレージを復元した場合に発行されます。

このイベントを受け取った後、再描画、リソースの再取得、コンテキストの状態の再初期化などが可能です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("contextrestored", (event) => {});

oncontextrestored = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次のコードは、コンテキストが復元されたイベントを検出するものです。

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener(
  "contextrestored",
  (e) => {
    console.log(e);
    // redrawCanvas() などを呼び出す
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`HTMLCanvasElement: contextlost` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`CanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/CanvasRenderingContext2D/isContextLost)
