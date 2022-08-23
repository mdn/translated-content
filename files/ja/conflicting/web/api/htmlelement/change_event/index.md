---
title: GlobalEventHandlers.onchange
slug: conflicting/Web/API/HTMLElement/change_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onchange
original_slug: Web/API/GlobalEventHandlers/onchange
---
{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers")}} ミックスインの **`onchange`** プロパティは、[`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントを処理する {{event("Event_handlers", "event handler")}} です。

`change` イベントはユーザーがフォームコントロールの値を変更した時に発生します。これは例えば、コントロールの外側をクリックしたり <kbd>Tab</kbd> キーで別のコントロールへ切り替えたりすることにより行われることがあります。

> **Note:** **注記:** {{domxref("GlobalEventHandlers.oninput", "oninput")}} と異なり、`onchange` イベントハンドラーは、各要素の `value` が変化するたびに呼び出される必要がありません。

## 構文

```
target.onchange = functionRef;
```

`functionRef` は関数名または [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function) です。この関数は、{{domxref("Event")}} オブジェクトとその 1 個の引数を受け取ります。

## 例

この例は、{{HtmlElement("input")}} 要素のコンテンツを変更してフォーカスを要素から外す度に、その文字数をログ出力します。

### HTML

```html
<input type="text" placeholder="Type something here, then click outside of the field." size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}
```

### 実行結果

{{EmbedLiveSample("Example")}}

## 仕様

| 仕様書                                                                                           | 策定状況                         | 備考 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onchange','onchange')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.onchange")}}

## 関連項目

- {{event("change")}} イベント
