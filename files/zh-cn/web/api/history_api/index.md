---
title: History API
slug: Web/API/History_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("History API")}}

**History API** 通过 {{DOMxRef("Window.history","history")}} 全局对象提供了对浏览器会话的历史记录（不要与 [WebExtensions 的 history](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history) 混淆）的访问功能。它暴露了很多有用的方法和属性，使你可以在用户的历史记录中来回导航，而且可以操作历史记录栈中的内容。

> [!NOTE]
> 该 API 仅在主线程（{{domxref("Window")}}）中可用。无法在 {{domxref("Worker")}} 或 {{domxref("Worklet")}} 上下文中访问它。

## 概念和用法

使用 {{DOMxRef("History.back","back()")}}、{{DOMxRef("History.forward","forward()")}} 和 {{DOMxRef("History.go","go()")}} 方法可以在用户历史记录中前后跳转。

### 向前和向后跳转

在历史记录中向后跳转：

```js
history.back();
```

这和用户点击浏览器的回退（<kbd><strong>Back</strong></kbd>）按钮的效果相同。

类似地，你可以向前跳转（如同用户点击了前进（<kbd><strong>Forward</strong></kbd>）按钮）：

```js
history.forward();
```

### 跳转到历史记录中的指定位置

你可以用 `go()` 方法从会话历史记录中加载某一特定页面，该页面使用与当前页面的相对位置来标识（当前页面的相对位置为 `0`）。

向后跳转一个页面（等价于调用 {{DOMxRef("History.back","back()")}}）：

```js
history.go(-1);
```

向前跳转一个页面，就像调用 {{DOMxRef("History.forward","forward()")}}：

```js
history.go(1);
```

类似地，你可以传递参数值 `2` 并向前跳转 2 个页面，等等。

`go()` 方法的另一个用途是，在调用它时传递 `0` 或不传递任何参数以刷新当前页面：

```js
// 以下语句都具有刷新页面的效果
history.go(0);
history.go();
```

你可以通过查看 `length` 属性的值来确定历史记录栈中的页面数量：

```js
const numberOfEntries = history.length;
```

## 接口

- {{domxref("History")}}
  - : 允许操作浏览器*会话的历史记录*（即加载了当前页面的标签页或框架（frame）中访问过的页面）。
- {{domxref("PopStateEvent")}}
  - : {{domxref("Window.popstate_event", "popstate")}} 事件的接口。

## 示例

以下示例为 {{domxref("Window.popstate_event", "popstate")}} 事件分配了一个监听器。然后它演示了一些 history 对象的方法：对当前标签页浏览记录的添加、替换和跳转。

```js
window.addEventListener("popstate", (event) => {
  alert(`位置：${document.location}，状态：${JSON.stringify(event.state)}`);
});

history.pushState({ page: 1 }, "标题 1", "?page=1");
history.pushState({ page: 2 }, "标题 2", "?page=2");
history.replaceState({ page: 3 }, "标题 3", "?page=3");
history.back(); // 显示警告“位置：http://example.com/example.html?page=1，状态：{"page":1}”
history.back(); // 显示警告“位置：http://example.com/example.html，状态：null”
history.go(2); // 显示警告“位置：http://example.com/example.html?page=3，状态：{"page":3}”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.history", "history")}} 全局对象
- {{domxref("Window/popstate_event", "popstate")}} 事件
