---
title: 'Element: select イベント'
slug: Web/API/HTMLInputElement/select_event
tags:
  - Element
  - Event
  - Event Handler
  - NeedsCompatTable
  - Reference
  - UIEvent
  - イベント
translation_of: Web/API/Element/select_event
original_slug: Web/API/Element/select_event
---
{{APIRef}}

**`select`** イベントは、いくらかのテキストが選択されたときに発生します。

| バブリング                   | あり                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| キャンセル                   | 不可                                                                                                                   |
| インターフェイス             | ユーザーインターフェイスから作成された場合は {{domxref("UIEvent")}}、それ以外ならば {{domxref("Event")}} |
| イベントハンドラープロパティ | {{domxref("GlobalEventHandlers.onselect", "onselect")}}                                               |

このイベントはすべての言語のすべての要素で利用できる訳ではありません。例えば、 HTML では、 `select` イベントはフォームの `{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}` および {{HtmlElement("textarea")}} 要素からのみ発生します。

## 例

### 選択範囲をログ出力

```html
<input value="この要素のテキストの一部を選択してみてください。">
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect による同等の処理

イベントハンドラーを {{domxref("GlobalEventHandlers.onselect", "onselect")}} プロパティで設定することもできます。

```js
input.onselect = logSelection;
```

## 仕様書

| 仕様書                                                                       | 状態                         |
| ---------------------------------------------------------------------------- | ---------------------------- |
| {{SpecName('UI Events', '#event-type-select', 'select')}} | {{Spec2('UI Events')}} |

## ブラウザーの互換性

{{Compat("api.Element.select_event")}}
