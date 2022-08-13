---
title: 'Element: copy イベント'
slug: Web/API/Element/copy_event
tags:
  - API
  - Clipboard API
  - Element
  - Event
  - Reference
  - Web
  - イベント
translation_of: Web/API/Element/copy_event
---
{{APIRef}}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を実行したときに発生します。

| バブリング                   | あり                                                     |
| ---------------------------- | -------------------------------------------------------- |
| キャンセル                   | 可                                                       |
| インターフェイス             | {{domxref("ClipboardEvent")}}                 |
| イベントハンドラープロパティ | {{domxref("HTMLElement/oncopy", "oncopy")}} |

このイベントの既定の動作は、 (もしあれば) 選択範囲をクリップボードへコピーすることです。

このイベントのハンドラーは、 {{domxref("DataTransfer.setData", "setData(format, data)")}} をイベントの {{domxref("ClipboardEvent.clipboardData")}} プロパティに対して呼び出すことで、クリップボードの内容を*変更*したり、 {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用してイベントの既定の動作を取り消したりすることができます。

ただし、ハンドラーがクリップボードのデータを*読み取る*ことはできません。

[仮想の](/ja/docs/Web/Guide/Events/Creating_and_triggering_events) `copy` イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。

## 例

### ライブデモ

#### HTML

```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
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

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-copy')}} | {{Spec2('Clipboard API')}} |

## ブラウザーの互換性

{{Compat("api.Window.copy_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/copy_event", "copy")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/copy_event", "copy")}}
