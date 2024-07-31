---
title: "Document: pointerlockchange イベント"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`pointerlockchange`** イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

イベントハンドラーは {{domxref("Document.pointerLockElement")}} を使用して、ポインターがロックされているかどうか、ロックされている場合はどの要素にロックされているかを判断することができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("pointerlockchange", (event) => {});

onpointerlockchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` を使用した場合

```js
addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
});
```

`onpointerlockchange` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターロック API の使用](/ja/docs/Web/API/Pointer_Lock_API)
