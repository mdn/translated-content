---
title: History.replaceState()
slug: Web/API/History/replaceState
---

{{APIRef("DOM")}}

`replaceState()`方法使用`state objects`, `title`,和 `URL` 作为参数，修改当前历史记录实体，如果你想更新当前的 state 对象或者当前历史实体的 URL 来响应用户的的动作的话这个方法将会非常有用。

## 语法

```js
history.replaceState(stateObj, title[, url]);
```

### 参数

- stateObj
  - : 状态对象是一个 JavaScript 对象，它与传递给 `replaceState` 方法的历史记录实体相关联。
- title
  - : [大部分浏览器忽略这个参数](https://github.com/whatwg/html/issues/2174), 将来可能有用。在此处传递空字符串应该可以防止将来对方法的更改。或者，您可以为该状态传递简短标题
- url {{optional_inline}}
  - : 历史记录实体的 URL. 新的 URL 跟当前的 URL 必须是同源; 否则 replaceState 抛出一个异常。

## 例子

假设 `http://mozilla.org/foo.html` 执行下面的 JavaScript 代码：

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

上面这两行的解释可以在 "Example of pushState() method"这个章节找到。然后假设 `http://mozilla.org/bar.html` 执行下面的 JavaScript 代码：

```js
history.replaceState(stateObj, "", "bar2.html");
```

这会让 URL 栏显示 `http://mozilla.org/bar2.html`，但是不会加载 `bar2.html` 页面，甚至不会检查 bar2.html 是否存在

假设用户跳转到 `http://www.microsoft.com`，然后点击返回按钮。这时，URL 栏将会显示 `http://mozilla.org/bar2.html` 页面。如果用户此时点击返回按钮，URL 栏将会显示 `http://mozilla.org/foo.html` 页面，最终绕过了 bar.html 页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
