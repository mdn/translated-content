---
title: "Document: copy イベント"
short-title: copy
slug: Web/API/Document/copy_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

このイベントの本来の対象は、コピー操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [Element: copy イベント](/ja/docs/Web/API/Element/copy_event)を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## 例

ユーザーがウェブページのデータをクリップボードにコピーしたときに通知されるようにするには、{{domxref("Document")}} インスタンスに {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してハンドラーを追加してください。

```js
document.addEventListener("copy", (event) => {
  /* セッションはシャットダウンしている */
});
```

また、`Document.oncopy` イベントハンドラープロパティを使用して、`copy` イベントのハンドラーを確立することもできます。

```js
document.oncopy = (event) => {
  /* セッションはシャットダウンしている */
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/paste_event", "paste")}}
- {{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/copy_event", "copy")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/copy_event", "copy")}}
