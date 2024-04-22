---
title: "Element: copy イベント"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

このイベントの既定の動作は、（もしあれば）選択範囲をクリップボードへコピーすることです。

このイベントのハンドラーは、 {{domxref("DataTransfer.setData", "setData(format, data)")}} をイベントの {{domxref("ClipboardEvent.clipboardData")}} プロパティに対して呼び出すことで、クリップボードの内容を*変更*したり、 {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用してイベントの既定の動作を取り消したりすることができます。

ただし、ハンドラーがクリップボードのデータを*読み取る*ことはできません。

[合成した](/ja/docs/Web/Events/Creating_and_triggering_events) `copy` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
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

#### JavaScript

```js
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '120px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/copy_event", "copy")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/copy_event", "copy")}}
