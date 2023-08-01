---
title: "Document: scroll event"
slug: Web/API/Document/scroll_event
---

文档视图或者一个元素在滚动时，会触发元素的 **`scroll`** 事件。

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **备注：** 在 iOS UIWebViews 中，滚动进行时不会触发 `scroll` 事件；只有当滚动结束后事件才会被触发。参见 [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202)。Safari 和 WKWebViews 则没有这个问题。

## 示例

### Scroll 事件节流

由于 `scroll` 事件可被高频触发，事件处理程序不应该执行高性能消耗的操作，如 DOM 操作。而更推荐的做法是使用 {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}、{{DOMxRef("setTimeout()")}} 或 {{DOMxRef("CustomEvent")}} 给事件节流，如下所述。

然而需要注意的是，输入事件和动画帧常常以差不多的频率被触发，因此以下优化常常不必要。这个例子使用 `requestAnimationFrame` 优化 `scroll` 事件。

```js
// 参见：http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // 根据滚动位置做的事
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

在 [`resize`](/zh-CN/docs/Web/API/Document/defaultView/resize_event) 事件页面中查看更多类似的例子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Element: `scroll` event](/zh-CN/docs/Web/API/Element/scroll_event)
