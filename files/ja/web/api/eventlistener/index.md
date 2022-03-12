---
title: EventListener
slug: Web/API/EventListener
tags:
  - API
  - DOM
  - DOM Events
  - NeedsContent
translation_of: Web/API/EventListener
---
{{APIRef("DOM Events")}}

**`EventListener`** インターフェースは、{{domxref("EventTarget")}} オブジェクトによってディスパッチされたイベントを処理できるオブジェクトを表します。


> **Note:** レガシーコンテンツとの互換性が必要なため、`EventListener` は、関数、`handleEvent()` メソッドをもつオブジェクト両方を受け入れます。  
> これを以下の [例](#例) に示します。

## プロパティ

このインターフェースはいかなるプロパティを実装も継承もしません。

## メソッドの概要

<table class="standard-table">
 <tbody>
  <tr>
   <td><code>void <a href="#handleEvent()">handleEvent</a>(in Event event);</code></td>
  </tr>
 </tbody>
</table>

## メソッド

### handleEvent()

このメソッドは、`EventListener` インターフェースが登録されたイベントタイプについて、そのイベントが発生するたびに呼び出されます。

```js
void handleEvent(
  in Event event
);
```

##### 引数

- **`event`**
  - : 発生した DOM {{ domxref("Event") }} イベント。

### 補記

このインターフェースは `[function]` フラグが付いているため、すべての JavaScript [Function](/ja/JavaScript/Reference/Global_Objects/Function) オブジェクトで自動的に実装されています。このような実装で {{ manch("handleEvent") }} メソッドを呼び出すと、自動的にその機能が実行されます。

## 例

### HTML

```html
<button id="btn">Click here!</button>

<p id="funcOutput"></p>
<p id="handleEvtOutput"></p>
```

### JavaScript

```js
const buttonElement = document.getElementById('btn');

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Element clicked through handleEvent property!');
  }
});
```

### Result

{{EmbedLiveSample('Example')}}

### See Also:

- [addEventListener](/ja/docs/Web/API/EventTarget/addEventListener)

## 関連情報

- {{ spec("http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener","Document Object Model Events: EventListener","REC") }}
