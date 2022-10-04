---
title: History.pushState()
slug: Web/API/History/pushState
---

History API

在 [HTML](/zh-CN/docs/Web/HTML) 文档中，**`history.pushState()`** 方法向当前浏览器会话的历史堆栈中添加一个状态（state）。

## 语法

```
history.pushState(state, title[, url])
```

### 参数

- `state`
  - : 状态对象是一个 JavaScript 对象，它与`pushState()`创建的新历史记录条目相关联。每当用户导航到新状态时，都会触发{{event("popstate")}}事件，并且该事件的状态属性包含历史记录条目的状态对象的副本。
    状态对象可以是任何可以序列化的对象。因为 Firefox 将状态对象保存到用户的磁盘上，以便用户重新启动浏览器后可以将其还原，所以我们对状态对象的序列化表示施加了 2MiB 的大小限制。如果将序列化表示形式大于此状态的状态对象传递给`pushState()`，则该方法将引发异常。如果您需要更多空间，建议您使用 {{domxref("Window.sessionStorage", "sessionStorage")}}或者{{domxref("Window.localStorage", "localStorage")}}。
- `title`
  - : [当前大多数浏览器都忽略此参数](https://github.com/whatwg/html/issues/2174)，尽管将来可能会使用它。在此处传递空字符串应该可以防止将来对方法的更改。或者，您可以为要移动的状态传递简短的标题。
- `url` {{optional_inline}}
  - : 新历史记录条目的 URL 由此参数指定。请注意，浏览器不会在调用 `pushState()` 之后尝试加载此 URL，但可能会稍后尝试加载 URL，例如在用户重新启动浏览器之后。新的 URL 不必是绝对的。如果是相对的，则相对于当前 URL 进行解析。新网址必须与当前网址相同 {{glossary("origin")}}；否则，`pushState()`将引发异常。如果未指定此参数，则将其设置为文档的当前 URL。

## 描述

从某种程度来说，调用 `pushState()` 和 `window.location = "#foo"`基本上一样，他们都会在当前的 document 中创建和激活一个新的历史记录。但是 `pushState()` 有以下优势：

- 新的 URL 可以是任何和当前 URL 同源的 URL。但是设置 {{domxref("window.location")}} 只会在你只设置锚的时候才会使当前的 URL。
- 非强制修改 URL。相反，设置 `window.location = "#foo";` 仅仅会在锚的值不是 #foo 情况下创建一条新的历史记录。
- 可以在新的历史记录中关联任何数据。`window.location = "#foo"`形式的操作，你只可以将所需数据写入锚的字符串中。

注意： `pushState()` 不会造成 {{event("hashchange")}} 事件调用，即使新的 URL 和之前的 URL 只是锚的数据不同。

## 示例

以下代码通过设置`state`, `title`和`url`创建一条新的历史记录。

### JavaScript

```js
const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'hello-world.html'

history.pushState(state, title, url)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Working with the History API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)
