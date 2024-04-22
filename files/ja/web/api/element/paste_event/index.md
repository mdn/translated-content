---
title: "Element: paste イベント"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスで「貼り付け」操作を行ったときに発生します。

カーソルが編集可能なコンテキストにある場合（{{HTMLElement("textarea")}} や [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性が `true` の要素など）、既定のアクションはクリップボードの内容を文書のカーソル位置に挿入します。

このイベントのハンドラーは、イベントの `clipboardData` プロパティにある {{domxref("DataTransfer/getData", "getData()")}} を呼び出すことでクリップボードの中身にアクセスすることができます。

既定の動作を上書きする場合（例えば、別なデータを挿入したりクリップボードの内容を変換したりする場合など）、イベントハンドラーで {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定のアクションをキャンセルした上で、必要なデータを手動で挿入してください。

[合成した](/ja/docs/Web/Events/Creating_and_triggering_events) `paste` イベントを構築して配信することができますが、文書の内容には影響しません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## 例

### ライブデモ

#### HTML

```html
<div class="source" contenteditable="true">Copy text from this box.</div>
<div class="target" contenteditable="true">And paste it into this one.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JS

```js
const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '120px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/paste_event", "paste")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/paste_event", "paste")}}
