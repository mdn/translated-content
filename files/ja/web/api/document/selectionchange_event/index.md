---
title: "Document: selectionchange イベント"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`selectionchange`** イベントは [Selection API](/ja/docs/Web/API/Selection_API) の一部で、文書における現在のテキストの選択が変更された際に発生します。

このイベントはキャンセル不可で、バブリングしません。

このイベントは `selectionchange` のイベントリスナーを追加するか、`onselectionchange` イベントハンドラーを使用して処理することができます。

> [!NOTE]
> このイベントは {{HTMLElement("input")}} や {{HTMLElement("textarea")}} 要素のテキスト選択が変更されたときに発行される `selectionchange` イベントとは異なります。詳しくは{{domxref("HTMLInputElement.selectionchange_event")}}を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// addEventListener 版
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange 版
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
