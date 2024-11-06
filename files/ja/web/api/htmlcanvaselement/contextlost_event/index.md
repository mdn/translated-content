---
title: "HTMLCanvasElement: contextlost イベント"
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

**`contextlost`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のイベントで、 [`CanvasRenderingContext2D`](/ja/docs/Web/API/CanvasRenderingContext2D) コンテキストに関連付けられたバックストレージが失われたことをユーザーエージェントが検出すると、発行されます。
コンテキストは、ドライバーのクラッシュやアプリケーションのメモリー不足など、いくつかの理由で失われることがあります。

既定では、ユーザーエージェントはコンテキストの復元を試み、[`contextrestored` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event)を発行します。
ユーザーコードは、イベント処理中に [`Event.preventDefault()`](/ja/docs/Web/API/Event/preventDefault) を呼び出すことにより、コンテキストが復元されるのを防ぐことができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("contextlost", (event) => {});

oncontextlost = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

次のコードは、`contextlost` イベントを検出するものです。

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

コンテキストが復元されないようにするためのコードは次のようになります。

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`HTMLCanvasElement: contextrestored` イベント](/ja/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/ja/docs/Web/API/CanvasRenderingContext2D/isContextLost)
