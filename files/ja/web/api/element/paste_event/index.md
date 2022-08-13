---
title: 'Element: paste イベント'
slug: Web/API/Element/paste_event
tags:
  - Clipboard API
  - ClipboardEvent
  - Element
  - Event
  - NeedsUpdate
  - paste
  - イベント
  - リファレンス
translation_of: Web/API/Element/paste_event
---
{{APIRef}}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスで「貼り付け」操作を行ったときに発生します。

| バブリング                   | あり                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| キャンセル                   | 可                                                           |
| インターフェイス             | {{domxref("ClipboardEvent")}}                     |
| イベントハンドラープロパティ | {{domxref("HTMLElement/onpaste", "onpaste")}} |

カーソルが編集可能なコンテキストにある場合 ({{HTMLElement("textarea")}} や [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性が `true` である要素など)、既定のアクションはクリップボードの内容を文書のカーソル位置に挿入します。

このイベントのハンドラーは、イベントの `clipboardData` プロパティにある {{domxref("DataTransfer/getData", "getData()")}} を呼び出すことでクリップボードの中身にアクセスすることができます。

既定の動作を上書きする場合 (例えば、別なデータを挿入したりクリップボードの内容を変換したりする場合など)、イベントハンドラーで {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定のアクションをキャンセルした上で、必要なデータを手動で挿入してください。

[統合的な](/ja/docs/Web/Guide/Events/Creating_and_triggering_events) `paste` イベントを構築して配信することができますが、文書の内容には影響しません。

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
const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## 仕様書

| 仕様書                                                                   | 状態                                 |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-paste')}} | {{Spec2('Clipboard API')}} |

## ブラウザーの対応

{{Compat("api.Element.paste_event")}}

## 関連情報

- 関連イベント: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/paste_event", "paste")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/paste_event", "paste")}}
