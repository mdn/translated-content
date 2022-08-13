---
title: GlobalEventHandlers.onscroll
slug: conflicting/Web/API/Element/scroll_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - イベントハンドラー
  - プロパティ
translation_of: Web/API/GlobalEventHandlers/onscroll
original_slug: Web/API/GlobalEventHandlers/onscroll
---
{{ApiRef("HTML DOM")}}

**`onscroll`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 `scroll` イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

`scroll` イベントは、ユーザー、 [Web API](/ja/docs/Web/API)、{{glossary("user agent","ユーザーエージェント")}}の何れかによって文書のビューまたは要素がスクロールしたときに発生します。

> **Note:** **注:** `onscroll` を {{domxref("GlobalEventHandlers.onwheel", "onwheel")}} と混同しないようにしてください。`onwheel` は一般的なホイールの回転を扱うのに対し、 `onscroll` はオブジェクトの内容のスクロールを扱います。

## 構文

    target.onscroll = functionRef

### 値

- `functionRef`
  - : 関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。この関数は引数として一つだけ、 {{domxref("UIEvent")}} オブジェクトを受け取ります。

`onscroll` ハンドラーは同時に 1 つだけ割り当てることができます。

柔軟性を高めるために、 {{event("scroll")}} イベントを {{domxref("EventTarget.addEventListener()")}} メソッドに渡すことができます。

## 例

この例では {{HtmlElement("textarea")}} のスクロールを監視し、その結果である要素の垂直のスクロール位置をログ出力します。

### HTML

```html
<textarea>1 2 3 4 5 6 7 8 9</textarea>
<p id="log"></p>
```

### CSS

```css
textarea {
  width: 4rem;
  height: 8rem;
  font-size: 3rem;
}
```

### JavaScript

```js
const textarea = document.querySelector('textarea');
const log = document.getElementById('log');

textarea.onscroll = logScroll;

function logScroll(e) {
  log.textContent = `Scroll position: ${e.target.scrollTop}`;
}
```

### 結果

{{EmbedLiveSample("Example", 700, 200)}}

## 仕様書

| 仕様書                                                                           | 状態                             | 備考     |
| -------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG','#handler-onscroll','onscroll')}}     | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName("DOM3 Events", "#event-type-scroll", "onscroll")}} | {{Spec2("DOM3 Events")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onscroll")}}

## 関連情報

- [Document: `scroll` イベント](/ja/docs/Web/API/Document/scroll_event)
- [Element: `scroll` イベント](/ja/docs/Web/API/Element/scroll_event)
