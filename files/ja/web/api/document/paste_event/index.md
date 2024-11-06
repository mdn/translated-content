---
title: "Document: paste イベント"
short-title: paste
slug: Web/API/Document/paste_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから貼り付け操作が実行されたときに発生します。

このイベントの本来の対象は、貼り付け操作を意図する対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: paste イベント](/ja/docs/Web/API/Element/paste_event)を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## 例

ユーザーがウェブページからデータをクリップボードから貼り付けたときに通知されるようにするには、{{domxref("Document")}} インスタンスに {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してハンドラーを追加してください。

```js
document.addEventListener("paste", (event) => {
  /* セッションはシャットダウンしている */
});
```

また、`Document.onpaste` イベントハンドラープロパティを使用して、`paste` イベントのハンドラーを確立することもできます。

```js
document.onpaste = (event) => {
  /* セッションはシャットダウンしている */
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/cut_event", "cut")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/paste_event", "paste")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/paste_event", "paste")}}
