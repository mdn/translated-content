---
title: "Document: pointerlockchange イベント"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Pointer Lock API")}}

**`pointerlockchange`** イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

イベントハンドラーは {{domxref("Document.pointerLockElement")}} を使用して、ポインターがロックされているかどうか、ロックされている場合はどの要素にロックされているかを判断することができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用します。

```js-nolint
addEventListener("pointerlockchange", (event) => { })
```

または、このインターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラープロパティの使用)に代入します。

```js-nolint
onpointerlockchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("ポインターのロック先: ", document.pointerLockElement);
  else {
    console.log("ポインターはロックされていません");
  }
});
```

`onpointerlockchange` イベントハンドラープロパティを使用した場合（ただし、これにより、すでに `onpointerlockchange` を使用して追加されたほかのイベントリスナーが置換されます）。

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log("ポインターのロック先: ", document.pointerLockElement);
  else {
    console.log("ポインターはロックされていません");
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターロック API の使用](/ja/docs/Web/API/Pointer_Lock_API)
