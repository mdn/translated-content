---
title: Document.createEvent()
slug: Web/API/Document/createEvent
---

> **警告：** `createEvent` 使用的许多方法，如 `initCustomEvent`，都被废弃了。请使用 [event constructors](/zh-CN/docs/Web/API/CustomEvent) 来替代。

{{ ApiRef("DOM") }}

创建一个指定类型的[事件](/zh-CN/docs/Web/API/Event)。其返回的对象必须先初始化并可以被传递给 [element.dispatchEvent](/zh-CN/docs/DOM/element.dispatchEvent)。

## 语法

```
var event = document.createEvent(type);
```

- `event` 就是被创建的 [Event](/zh-CN/docs/DOM/event) 对象。
- `type` 是一个字符串，表示要创建的事件类型。事件类型可能包括`"UIEvents"`、`"MouseEvents"`、`"MutationEvents"` 或者 `"HTMLEvents"`。请查看[注意](#注意)小节获取详细信息。

## 示例

```js
// 创建事件
var event = document.createEvent("Event");

// 定义事件名为'build'.
event.initEvent("build", true, true);

// 监听事件
elem.addEventListener(
  "build",
  function (e) {
    // e.target matches elem
  },
  false,
);

// 触发对象可以是任何元素或其他事件目标
elem.dispatchEvent(event);
```

### 参考

- [Creating and triggering events](/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)

## 注意

Event type 字符串只能传递事件模块中定义的值给 CreateEvent。其中一些事件模块是在 DOM 事件规范定义的，还有些事在其他规范定义的（如 SVG），还有一些是 Gecko-specific 事件。详情见下表。

_To-do: 添加事件名称到下表中。_

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>事件模块</th>
      <th>传递给 <code>createEvent</code> 的 Event type</th>
      <th>事件初始化方法</th>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings"
          >DOM Level 2 Events</a
        >
      </td>
    </tr>
    <tr>
      <td>User Interface event module</td>
      <td><code>"UIEvents"</code></td>
      <td><a href="/zh-CN/docs/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr>
      <td>Mouse event module</td>
      <td><code>"MouseEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMouseEvent">event.initMouseEvent</a>
      </td>
    </tr>
    <tr>
      <td>Mutation event module</td>
      <td><code>"MutationEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMutationEvent"
          >event.initMutationEvent</a
        >
      </td>
    </tr>
    <tr>
      <td>HTML event module</td>
      <td><code>"HTMLEvents"</code></td>
      <td><a href="/zh-CN/docs/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a href="http://www.w3.org/TR/DOM-Level-3-Events/"
          >DOM Level 3 Events</a
        >
      </td>
    </tr>
    <tr>
      <td>User Interface event module</td>
      <td><code>"UIEvent"</code>, <code>"UIEvents"</code></td>
      <td><a href="/zh-CN/docs/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr>
      <td>Mouse event module</td>
      <td><code>"MouseEvent"</code>, <code>"MouseEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMouseEvent">event.initMouseEvent</a>
      </td>
    </tr>
    <tr>
      <td>Mutation event module</td>
      <td><code>"MutationEvent"</code>, <code>"MutationEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMutationEvent"
          >event.initMutationEvent</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Mutation name event module (not implemented in Gecko as of June 2006)
      </td>
      <td><code>"MutationNameEvent"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMutationNameEvent"
          >event.initMutationNameEvent</a
        >
      </td>
    </tr>
    <tr>
      <td>Text event module</td>
      <td>
        <code>"TextEvent"</code> (Gecko also supports <code>"TextEvents"</code>)
      </td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initTextEvent">event.initTextEvent</a>
        (not implemented)
      </td>
    </tr>
    <tr>
      <td>Keyboard event module</td>
      <td>
        <code>"KeyboardEvent"</code> (Gecko also supports
        <code>"KeyEvents"</code>)
      </td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initKeyEvent">event.initKeyEvent</a>
        (Gecko-specific; the DOM 3 Events working draft uses
        <code>initKeyboardEvent</code> instead)
      </td>
    </tr>
    <tr>
      <td>Custom event module</td>
      <td><code>"CustomEvent"</code></td>
      <td><a href="/zh-CN/docs/DOM/CustomEvent">event.initCustomEvent</a></td>
    </tr>
    <tr>
      <td>Basic events module</td>
      <td><code>"Event"</code> (Gecko also supports <code>"Events"</code>)</td>
      <td><a href="/zh-CN/docs/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a href="http://www.w3.org/TR/SVG/script.html#DOMInterfaces"
          >SVG 1.1 Scripting</a
        >
      </td>
    </tr>
    <tr>
      <td rowspan="2">SVG</td>
      <td>
        <code>"SVGEvents"</code> (Gecko also supports <code>"SVGEvent"</code>)
      </td>
      <td><a href="/zh-CN/docs/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr>
      <td>
        <code>"SVGZoomEvents"</code> (Gecko also supports
        <code>"SVGZoomEvent"</code>)
      </td>
      <td><a href="/zh-CN/docs/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">Other event types supported by Gecko</td>
    </tr>
    <tr>
      <td rowspan="4">-</td>
      <td><code>"MessageEvent"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMessageEvent"
          >event.initMessageEvent</a
        >
      </td>
    </tr>
    <tr>
      <td><code>"MouseScrollEvents"</code>, <code>"PopupEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initMouseEvent">event.initMouseEvent</a>
      </td>
    </tr>
    <tr>
      <td><code>"PopupBlockedEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initPopupBlockedEvent"
          >event.initPopupBlockedEvent</a
        >
      </td>
    </tr>
    <tr>
      <td><code>"XULCommandEvent"</code>, <code>"XULCommandEvents"</code></td>
      <td>
        <a href="/zh-CN/docs/DOM/event.initCommandEvent"
          >event.initCommandEvent</a
        >
      </td>
    </tr>
    <tr>
      <td>Progress Events</td>
      <td><code>"ProgressEvent"</code></td>
      <td>
        {{domxref("ProgressEvent.initProgressEvent()")}}{{deprecated_inline}}{{non-standard_inline()}}
      </td>
    </tr>
    <tr>
      <td>Animation Events</td>
      <td>
        <code>"AnimationEvent"</code> (or
        <code>"WebKitAnimationEvent"</code> for WebKit/Blink-based browsers)
      </td>
      <td>
        {{domxref("AnimationEvent.initAnimationEvent()")}}{{deprecated_inline}}{{non-standard_inline()}}
      </td>
    </tr>
    <tr>
      <td>Transition Events</td>
      <td>
        <code>"TransitionEvent"</code> (or
        <code>"WebKitTransitionEvent"</code> for WebKit/Blink-based browsers)
      </td>
      <td>
        {{domxref("TransitionEvent.initTransitionEvent()")}}{{deprecated_inline}}{{non-standard_inline()}}
      </td>
    </tr>
  </tbody>
</table>

有些事件可以使用两种事件类型参数，这是因为 DOM Level 3 Events 将事件类型参数更改为单数形式，但是仍然支持老的复数形式以向后兼容。

## 规范

- [DOM Level 2 Events: createEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-DocumentEvent-createEvent)
- [DOM Level 3 Events: createEvent](http://www.w3.org/TR/DOM-Level-3-Events/#events-Events-DocumentEvent-createEvent)
