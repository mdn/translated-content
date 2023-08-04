---
title: pageshow
slug: Web/API/Window/pageshow_event
---

当一条会话历史记录被执行的时候将会触发页面显示 (pageshow) 事件。(这包括了后退/前进按钮操作，同时也会在 onload 事件触发后初始化页面时触发)

## 基本信息

- 规范
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-pageshow)
- 接口
  - : [PageTransitionEvent](/zh-CN/docs/Web/API/PageTransitionEvent)
- 事件冒泡
  - : No
- 事件取消
  - : No
- 事件源
  - : Document (dispatched on Window)
- 默认操作
  - : None

## 属性

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |
| `persisted` {{readonlyInline}}  | {{jsxref("boolean")}}      | 表示网页是否是来自缓存。                               |

## 示例

以下示例将会在控制台打印由前进/后退按钮以及 load 事件触发后引起的 pageshow 事件：

```plain
window.addEventListener('pageshow', function(event) {
    console.log('after , pageshow :',event);
});


window.addEventListener('load', function() {
    console.log('before');
});
```

不规范的写法，你同样可以将这个事件当做一个属性添加到 body 标签，类似于 onload

```plain
<body onload="myonload()" onpageshow="mypageshowcode()">
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- [`pagehide`](/zh-CN/docs/Mozilla_event_reference/pagehide)
- [Using Firefox 1.5 caching — pageshow event](/zh-CN/docs/Using_Firefox_1.5_caching#pageshow_event)
