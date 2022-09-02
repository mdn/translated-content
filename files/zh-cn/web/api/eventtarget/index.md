---
title: EventTarget
slug: Web/API/EventTarget
---
{{ApiRef("DOM Events")}}

`EventTarget` 是一个 DOM 接口，由可以接收事件、并且可以创建侦听器的对象实现。

{{domxref("Element")}}，{{domxref("document")}} 和 {{domxref("window")}} 是最常见的 event targets ，但是其他对象也可以作为 event targets，比如 {{domxref("XMLHttpRequest")}}，{{domxref("AudioNode")}}，{{domxref("AudioContext")}} 等等。

许多 event targets（包括 elements， documents 和 windows）支持通过 `onevent` 特性和属性设置[事件处理程序](/zh-CN/docs/Web/Guide/DOM/Events/Event_handlers) ([event handlers](/zh-CN/docs/Web/Guide/DOM/Events/Event_handlers))。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("EventTarget.EventTarget()","EventTarget()")}}
  - : 创建一个新的 `EventTarget` 对象实例。

## 方法

- {{domxref("EventTarget.addEventListener()")}}
  - : 在 EventTarget 上注册特定事件类型的事件处理程序。
- {{domxref("EventTarget.removeEventListener()")}}
  - : EventTarget 中删除事件侦听器。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : 将事件分派到此 EventTarget。

### Mozilla chrome 代码的其他方法

Mozilla 扩展，供 JS 实现的事件目标使用以 实现 on\* 属性。另见 [WebIDL bindings](/en-US/docs/Mozilla/WebIDL_bindings) 绑定。

- void **setEventHandler**(DOMString type, EventHandler handler) {{non-standard_inline}}
- EventHandler **getEventHandler**(DOMString type) {{non-standard_inline}}

## 示例

### EventTarget 的简单实现

```js
var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for(var i = 0, l = stack.length; i < l; i++) {
    if(stack[i] === callback){
      stack.splice(i, 1);
      return this.removeEventListener(type, callback);
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if(!(event.type in this.listeners)) {
    return;
  }
  var stack = this.listeners[event.type];
  event.target = this;
  for(var i = 0, l = stack.length; i < l; i++) {
      stack[i].call(this, event);
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.EventTarget")}}

## 相关链接

- [Event reference](/en-US/docs/Web/Reference/Events) - the events available in the platform.
- [Event developer guide](/en-US/docs/Web/Guide/DOM/Events)
- {{domxref("Event")}} interface
