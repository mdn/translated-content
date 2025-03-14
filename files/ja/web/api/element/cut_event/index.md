---
title: "Element: cut イベント"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから「切り取り」操作を実行したときに発生します。

ユーザーが編集不可能なコンテンツに対して切り取りをしようとすると、`cut` イベントは発生しますが、イベントオブジェクトにはデータが入りません。

イベントの既定のアクションは、（もしあれば）選択範囲をクリップボードへコピーして文書からその部分を取り除くことです。

このイベントのハンドラーは、{{domxref("DataTransfer.setData", "setData(format, data)")}} をイベントの {{domxref("ClipboardEvent.clipboardData")}} プロパティに対して呼び出すことで、クリップボードの内容を変更したり、{{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定の動作を取り消したりすることができます。

なお、既定の動作を取り消すと、文書の更新が阻止されます。そのため、「切り取り」の既定の動作をエミュレートしたい場合は、イベントハンドラーでクリップボードを操作するとともに、文書から選択範囲を手動で取り除かなければなりません。

このハンドラーがクリップボードのデータを*読み取る*ことはできません。

[合成した](/ja/docs/Web/Events/Creating_and_triggering_events) `cut` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## 例

### ライブデモ

#### HTML

```html
<div class="source" contenteditable="true">Cut text from this box.</div>
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
const source = document.querySelector("div.source");

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
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

- 関連イベント: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/cut_event", "cut")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/cut_event", "cut")}}
