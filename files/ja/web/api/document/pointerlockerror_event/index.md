---
title: "Document: pointerlockerror イベント"
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: 8f91a466f5a6d1e238ed209f36f9b506fc73ee0d
---

{{APIRef}}

`pointerlockerror` イベントは、（技術的な理由、または権限が拒否されたために）ポインターのロックに失敗したときに発生します。

このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pointerlockerror", (event) => {});

onpointerlockerror = (event) => {};
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

`onpointerlockerror` イベントハンドラープロパティを使用した場合

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
