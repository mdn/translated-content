---
title: "Node: selectstart イベント"
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef}}

**`selectstart`** は[選択 API](/ja/docs/Web/API/Selection) のイベントで、新しい選択範囲をユーザが指定した際に発行されます。

イベントがキャンセルされた場合、選択範囲は変更されません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// addEventListener バージョン
document.addEventListener("selectstart", () => {
  console.log("選択が開始されました");
});

// onselectstart バージョン
document.onselectstart = () => {
  console.log("選択が開始されました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document/selectionchange_event", "selectionchange")}}
