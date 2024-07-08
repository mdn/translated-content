---
title: "Document: cut イベント"
short-title: cut
slug: Web/API/Document/cut_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。

このイベントの本来の対象は、切り取り操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: cut イベント](/ja/docs/Web/API/Element/cut_event)を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## 例

ユーザーがウェブページからデータをクリップボードに切り取りしたときに通知されるようにするには、{{domxref("Document")}} インスタンスに {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してハンドラーを追加してください。

```js
document.addEventListener("cut", (event) => {
  /* セッションはシャットダウンしている */
});
```

また、`Document.oncut` イベントハンドラープロパティを使用して、`cut` イベントのハンドラーを確立することもできます。

```js
document.oncut = (event) => {
  /* セッションはシャットダウンしている */
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/paste_event", "paste")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/cut_event", "cut")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/cut_event", "cut")}}
