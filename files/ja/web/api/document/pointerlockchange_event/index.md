---
title: "Document: pointerlockchange イベント"
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: d4619276d67ca1ee02bd964d884ec52c2aa2ad4b
---

{{APIRef}}

`pointerlockchange` イベントは、ポインターがロックされたり解除されたりしたときに発行されます。

このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pointerlockchange", (event) => {});

onpointerlockchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` を使用した場合

```js
document.addEventListener("pointerlockchange", (event) => {
  console.log("Pointer lock changed");
});
```

`onpointerlockchange` イベントハンドラープロパティを使用した場合

```js
document.onpointerlockchange = (event) => {
  console.log("Pointer lock changed");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターロック API の使用](/ja/docs/Web/API/Pointer_Lock_API)
