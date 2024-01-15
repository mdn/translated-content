---
title: History：replaceState() 方法
slug: Web/API/History/replaceState
l10n:
  sourceCommit: b471583f1a7ae6d99c0863ed037eb0cd8c7f1830
---

{{APIRef("History API")}}

{{domxref("History")}} 接口的 **`replaceState()`** 方法使用状态对象和 URL 作为参数来修改当前的历史记录条目。当你想要更新当前历史记录条目的状态对象或者 URL 来响应用户的动作时，这个方法非常有用。

## 语法

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### 参数

- `state`
  - : 一个与传递给 `replaceState()` 方法的历史记录条目相关联的对象。状态对象可以是 `null`。
- `unused`
  - : 该参数由于历史原因而存在，不能省略；传递空字符串是传统的做法，也可以安全地应对未来对该方法的变更。
- `url` {{optional_inline}}
  - : 历史记录条目的 URL。新的 URL 跟当前的 URL 必须同源；否则 `replaceState()` 方法将抛出异常。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果关联的文档没有完全激活，或者提供的 `url` 参数不是有效的 URL，则抛出该异常。
- `DataCloneError` {{domxref("DOMException")}}
  - : 如果提供的 `state` 参数不可序列化，则抛出该异常。

## 示例

假设 `https://www.mozilla.org/foo.html` 执行了以下 JavaScript 代码：

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

在下一个页面，你可以使用 `history.state` 来访问刚刚添加的 `stateObj`。

上面这两行的解释可以在[使用历史记录 API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API#使用_pushstate) 一文中找到。然后假设 `https://www.mozilla.org/bar.html` 执行了下面的 JavaScript 代码：

```js
history.replaceState(stateObj, "", "bar2.html");
```

这会让 URL 栏显示 `https://www.mozilla.org/bar2.html`，但是不会加载 `bar2.html` 页面，甚至不会检查 `bar2.html` 是否存在。

假设用户跳转到 `https://www.microsoft.com`，然后点击返回按钮。这时，URL 栏将会显示 `https://www.mozilla.org/bar2.html`。如果用户此时再次点击返回按钮，URL 栏将会显示 `https://www.mozilla.org/foo.html` 页面，而完全绕过了 bar.html 页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
