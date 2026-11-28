---
title: "Document: pointerlockerror イベント"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Pointer Lock API")}}

**`pointerlockerror`** イベントは、（技術的な理由、または権限が拒否されたために）ポインターのロックに失敗したときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用します。

```js-nolint
addEventListener("pointerlockerror", (event) => { })
```

または、このインターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラープロパティの使用)に代入します。

```js-nolint
onpointerlockerror = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` を使用した場合

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("ポインターのロックエラー");
});
```

`onpointerlockerror` イベントハンドラープロパティを使用した場合（ただし、これにより、すでに `onpointerlockerror` を使用して追加されたほかのイベントリスナーが置換されます）。

```js
document.onpointerlockerror = (event) => {
  console.log("ポインターのロックエラー");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターロック API の使用](/ja/docs/Web/API/Pointer_Lock_API)
