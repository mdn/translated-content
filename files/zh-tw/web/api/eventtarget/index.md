---
title: EventTarget
slug: Web/API/EventTarget
---

{{APIRef("DOM")}}

**`EventTarget`** 介面定義了其實作的物件具有接收事件的能力，也可能擁有處理事件的監聽器。

除了最為常見的 {{domxref("Element")}}、{{domxref("Document")}} 與 {{domxref("Window")}} 繼承或實作了 `EventTarget` 介面之外，其它的物件還有 {{domxref("XMLHttpRequest")}}、{{domxref("AudioNode")}}、{{domxref("AudioContext")}}⋯ 等等。

許多 `EventTarget`（包括 Element、Document 和 Window）除了透過 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 方法外，還可藉由 {{domxref("Document_Object_Model", "DOM")}} 物件的屬性（{{Glossary("property/JavaScript", "property")}}）或 [HTML 元素](/zh-TW/docs/Web/HTML/Reference/Elements)屬性（{{Glossary("attribute")}}）來設定[事件處理器](/zh-TW/docs/Web/API/Document_Object_Model/Events)。

{{InheritanceDiagram}}

## 方法

- {{domxref("EventTarget.addEventListener()")}}
  - : 於 `EventTarget` 物件上註冊指定事件的監聽器。
- {{domxref("EventTarget.removeEventListener()")}}
  - : 移除 `EventTarget` 物件上的指定事件監聽器。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : 對此 `EventTarget` 物件派送（dispatch）一個事件物件，也就是於此 `EventTarget` 物件上觸發一個指定的事件物件實體。

### Mozilla chrome code 的額外方法

Mozilla extensions for use by JS-implemented event targets to implement on properties. See also [WebIDL bindings](/docs/Mozilla/WebIDL_bindings).

- void **setEventHandler**(DOMString type, EventHandler handler) {{non-standard_inline}}
- EventHandler **getEventHandler**(DOMString type) {{non-standard_inline}}

## 範例

### Simple implementation of EventTarget

```js
var EventTarget = function () {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function (event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type];
  event.target = this;
  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};
```

{{ EmbedLiveSample('Simple implementation of EventTarget') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Event reference](/zh-TW/docs/Web/API/Document_Object_Model/Events) - the events available in the platform.
- [Event developer guide](/docs/Web/Guide/DOM/Events)
- {{domxref("Event")}} interface
