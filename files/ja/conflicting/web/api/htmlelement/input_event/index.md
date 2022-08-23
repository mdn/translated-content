---
title: GlobalEventHandlers.oninput
slug: conflicting/Web/API/HTMLElement/input_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/oninput
original_slug: Web/API/GlobalEventHandlers/oninput
---
{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers")}} ミックスインの **`oninput`** プロパティは、{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} の各要素上の {{event("input")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。これは、{{domxref("HTMLElement.contentEditable", "contenteditable")}} または {{domxref("Document.designMode", "designMode")}} が有効になっている要素上のイベントも扱います。

> **Note:** **注記:** `oninput` と異なり、{{domxref("GlobalEventHandlers.onchange", "onchange")}} イベントハンドラーは、各要素の `value` が変化するたびに呼び出される必要がありません。

## 構文

```
target.oninput = functionRef;
```

### 値

`functionRef` は関数名または [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function) です。この関数は、{{domxref("KeyboardEvent")}} オブジェクトとその 1 個の引数を受け取ります。

## 例

この例は、{{HtmlElement("input")}} 要素のコンテンツを変更する度に、その文字数をログ出力します。

### HTML

```html
<input type="text" placeholder="ここに何か入力すると、その長さが分かります。" size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function handleInput(e) {
  log.textContent = `フィールドの value は
      ${e.target.value.length} 文字の長さです。`;
}
```

### 実行結果

{{EmbedLiveSample("Example")}}

## 仕様

| 仕様書                                                                           | 策定状況                         | 備考     |
| -------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "#ix-handler-oninput", "oninput")}} | {{Spec2("HTML WHATWG")}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.oninput")}}

以下のリンクは、互換性の問題と修正についての議論です。古いブラウザーで動作させる場合に役立つでしょう:

- [A HTML5 Browser maze, oninput support](http://blog.danielfriesen.name/2010/02/16/html5-browser-maze-oninput-support/)
- [Fixing oninput in IE Using html5Widgets](http://www.useragentman.com/blog/2011/05/12/fixing-oninput-in-ie9-using-html5widgets/) includes polyfill for IE6-8
- Mathias Bynens suggests [binding to both input and keydown](http://mathiasbynens.be/notes/oninput)
- [oninput event | dottoro](http://help.dottoro.com/ljhxklln.php) has notes about bugginess in IE9
- [Bug 312094 - Add support for \<select oninput>](https://bugzilla.mozilla.org/show_bug.cgi?id=312094)

## 関連項目

- {{event("input")}} イベント
