---
title: 'Element: cut イベント'
slug: Web/API/Element/cut_event
tags:
  - API
  - Clipboard API
  - Cut
  - Element
  - Event
  - Reference
  - Web
  - イベント
translation_of: Web/API/Element/cut_event
---
{{APIRef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。

ユーザーが編集不可能なコンテンツに対して切り取りをしようとすると、 `cut` イベントは発生しますが、イベントオブジェクトにはデータが入りません。

| バブリング                   | あり                                                     |
| ---------------------------- | -------------------------------------------------------- |
| キャンセル                   | 可                                                       |
| インターフェイス             | {{domxref("ClipboardEvent")}}                 |
| イベントハンドラープロパティ | {{domxref("HTMLElement/oncut", "oncut")}} |

イベントの既定のアクションは、 (もしあれば) 選択範囲をクリップボードへコピーして文書からその部分を取り除くことです。

このイベントのハンドラーは、 {{domxref("DataTransfer.setData", "setData(format, data)")}} をイベントの {{domxref("ClipboardEvent.clipboardData")}} プロパティに対して呼び出すことで、クリップボードの内容を*変更*したり、 {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定の動作を取り消したりすることができます。

なお、既定の動作を取り消すと、文書の更新が阻止されます。そのため、「切り取り」の既定の動作をエミュレートしたい場合は、イベントハンドラーでクリップボードを操作するとともに、文書から選択範囲を手動で取り除かなければなりません。

このハンドラーがクリップボードのデータを*読み取る*ことはできません。

[仮想の](/ja/docs/Web/Guide/Events/Creating_and_triggering_events) `cut` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 例

### ライブデモ

#### HTML

```html
<div class="source" contenteditable="true">Try cutting text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```

```css hidden
div.source, div.target {
    border: 1px solid gray;
    margin: .5rem;
    padding: .5rem;
    height: 1rem;
    background-color: #e9eef1;
}
```

#### JS

```js
const source = document.querySelector('div.source');

source.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-cut')}} | {{Spec2('Clipboard API')}} |

## ブラウザーの互換性

{{Compat("api.Window.cut_event")}}

## 関連情報

- 関連イベント: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/cut_event", "cut")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/cut_event", "cut")}}
