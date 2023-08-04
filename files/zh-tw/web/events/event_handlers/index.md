---
title: DOM on-event 處理器
slug: Web/Events/Event_handlers
---

Web 平台提供了多種獲得 [DOM 事件](/zh-TW/docs/Web/Events)通知的方式。兩種常見的風格為：通用的 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 及一組特定的 _**on-event**_ 處理器。本頁聚焦在後者如何運作的細節。

### 註冊 _on-event_ 處理器

_**on-event**_ 處理器為一群由 DOM 元素提供的屬性（{{Glossary("property")}}），用來協助管理元素要如何應對事件。元素可以是具互動性的（如：links、buttons、images、forms）或非互動性的（如頁面基礎 document）。事件為一個操作，像是點擊（clicked）、偵測按下按鍵（pressed keys）、取得焦點（focus）等。on-event 處理器通常是根據它被設計來應對的事件，例如 `onclick`、`onkeypress`、`onfocus` 等等。

你可以使用兩種不同的方式來為一個物件的特定事件（例如：[`click`](/zh-TW/docs/Web/API/Element/click_event)）指定一個 `on<...>` 事件處理器：

- 在元素上使用一個名稱為 `on{eventtype}` 的 HTML 標籤屬性（{{Glossary("attribute")}}），例如：`<button onclick="return handleClick(event);">`，
- 或藉由設定相對應的 JavaScript 屬性（{{Glossary("property/JavaScript", "property")}}），例如：`document.getElementById("mybutton").onclick = function(event) { ... }`.

Note that each object can have **only one** _on-event_ handler for a given event (though that handler could call multiple sub-handlers). This is why {{domxref("EventTarget.addEventListener", "addEventListener()")}} is often the better way to get notified of events, especially when wishing to apply various event handlers independently from each other, even for the same event and/or to the same element.

Also note that _on-event_ handlers are called automatically, not at the programmer's will (although you can, like `mybutton.onclick(myevent); )` since they serve more as placeholders to which a real handler function can be **assigned**.

### 非元素物件

Event handlers can also be set using properties on many non-element objects that generate events, including {{ domxref("window") }}, {{ domxref("document") }}, {{ domxref("XMLHttpRequest") }}, and others, for example:

```js
xhr.onprogress = function() { ... }
```

## 細節

### HTML 的 on\<...> 屬性值及對應的 JavaScript 屬性

A handler registered via an `on<...>` attribute will be available via the corresponding `on<...>` property, but not the other way around:

```html
<div id="a" onclick="alert('old')">
  Open the Developer Tools Console to see the output.
</div>

<script>
  window.onload = function () {
    var div = document.getElementById("a");
    console.log("Attribute reflected as a property: ", div.onclick.toString());
    // Prints: function onclick(event) { alert('old') }
    div.onclick = function () {
      alert("new");
    };
    console.log("Changed property to: ", div.onclick.toString());
    // Prints: function () { alert('new') }
    console.log("Attribute value is unchanged: ", div.getAttribute("onclick"));
    // Prints: alert('old')
  };
</script>
```

For historical reasons, some attributes/properties on the {{HTMLElement("body")}} and {{HTMLElement("frameset")}} elements actually set event handlers on their parent {{domxref("Window")}} object. (The HTML specification names these: `onblur`, `onerror`, `onfocus`, `onload`, `onscroll`.)

### 事件處理器的參數、`this` 綁定及回傳值

當一個事件處理被定義成為一個 **HTML** 的屬性時，給定的程式碼會被包成一個具有下列參數的函式：

- `event` - 除了{{domxref("GlobalEventHandlers.onerror", "onerror")}}的事件以外，其他所有的事件都會有此參數。
- `event`, `source`, `lineno`, `colno`, 還有專為 {{domxref("GlobalEventHandlers.onerror", "onerror")}} 事件處理的 `error` 。請注意： `event` 參數實際上擁有以字串形式呈現的錯誤訊息。

當事件處理函式被觸發時，處理函式中的關鍵字： `this` 被設定成為註冊這個事件處理函式的 DOM 元件。 請參閱 [this 關鍵字說明](/zh-TW/docs/Web/JavaScript/Reference/Operators/this#In_an_in%E2%80%93line_event_handler) 獲得更多細節。

The return value from the handler determines if the event is canceled. The specific handling of the return value depends on the kind of event, for details see ["The event handler processing algorithm" in the HTML specification](https://html.spec.whatwg.org/multipage/webappapis.html#the-event-handler-processing-algorithm).

### 當事件處理器被調用

TBD (non-capturing listener)

### 術語

The term **event handler** may be used to refer to:

- any function or object registered to be notified of events,
- or, more specifically, to the mechanism of registering event listeners via `on...` attributes in HTML or properties in web APIs, such as `<button onclick="alert(this)">` or `window.onload = function() { /* ... */ }`.

When discussing the various methods of listening to events,

- **event listener** refers to a function or object registered via {{domxref("EventTarget.addEventListener()")}},
- whereas **event handler** refers to a function registered via `on...` attributes or properties.

### Event handler changes in Firefox 9

In order to better match the specifications, and improve cross-browser compatibility, the way event handlers were implemented at a fundamental level changed in Gecko 9.0.

Specifically, in the past, event handlers were not correctly implemented as standard IDL attributes. In Gecko 9.0, this was changed. Because of this, certain behaviors of event handlers in Gecko have changed. In particular, they now behave in all the ways standard IDL attributes behave. In most cases, this shouldn't affect web or add-on content at all; however, there are a few specific things to watch out for.

#### Detecting the presence of event handler properties

You can now detect the presence of an event handler property (that is, for example, `onload`), using the JavaScript [`in`](/zh-TW/JavaScript/Reference/Operators/in) operator. For example:

```js
if ("onsomenewfeature" in window) {
  /* do something amazing */
}
```

#### Event handlers and prototypes

You can't set or access the values of any IDL-defined attributes on DOM prototype objects; that means you can't, for example, change `Window.prototype.onload` anymore. In the past, event handlers (`onload`, etc.) weren't implemented as IDL attributes in Gecko, so you were able to do this for those. Now you can't. This improves compatibility.
