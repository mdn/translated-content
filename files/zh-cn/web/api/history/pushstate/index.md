---
title: History：pushState() 方法
slug: Web/API/History/pushState
---

{{APIRef("History API")}}

在 [HTML](/zh-CN/docs/Web/HTML) 文档中，**`history.pushState()`** 方法向浏览器的会话历史栈增加了一个条目。

## 语法

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### 参数

- `state`
  - : `state` 对象是一个 JavaScript 对象，其与通过 `pushState()` 创建的新历史条目相关联。每当用户导航到新的 `state`，都会触发 {{domxref("Window/popstate_event", "popstate")}} 事件，并且该事件的 `state` 属性包含历史条目 `state` 对象的副本。

    `state` 对象可以是任何可以序列化的对象。因为 Firefox 将 `state` 对象保存到用户的磁盘上，以便用户重启浏览器可以恢复，我们对 `state` 对象序列化的表示施加了 16 MiB 的限制。如果你传递的 `state` 对象的序列化表示超出了 `pushState()` 可接受的大小，该方法将抛出异常。如果你需要更多的空间，建议使用 {{domxref("Window.sessionStorage","sessionStorage")}} 和/或 {{domxref("Window.localStorage", "localStorage")}}。

- `unused`
  - : 由于历史原因，该参数存在且不能忽略；传递一个空字符串是安全的，以防将来对该方法进行更改。

- `url` {{optional_inline}}
  - : 新历史条目的 URL。请注意，浏览器不会在调用 `pushState()` 之后尝试加载该 URL，但是它可能会在以后尝试加载该 URL，例如，在用户重启浏览器之后。新 URL 可以不是绝对路径；如果它是相对的，它将相对于当前的 URL 进行解析。新的 URL 必须与当前 URL 同{{glossary("origin","源")}}；否则，`pushState()` 将抛出异常。如果该参数没有指定，则将其设置为当前文档的 URL。

### 返回值

无（{{jsxref("undefined")}}）。

## 描述

从某种程度来说，调用 `pushState()` 类似于 `window.location = "#foo"`，它们都会在当前的文档中创建和激活一个新的历史条目。但是 `pushState()` 有以下优势：

- 新的 URL 可以是任何和当前 URL 同源的 URL。然而，如果你仅修改 hash，将其设置到 {{domxref("window.location")}}，将使你留在同一文档中。
- 改变页面的 URL 是可选的。相反，设置 `window.location = "#foo";` 仅仅会在当前 hash 不是 `#foo` 情况下，创建一条新的历史条目。
- 你可以使用你的新历史条目关联任意数据。使用基于 hash 的方式，你需要将所有相关的数据编码为一个短字符串。

注意，`pushState()` 从未引起 {{domxref("Window/hashchange_event", "hashchange")}} 事件的触发，即使新 URL 与旧 URL 仅在 hash 上不同。

## 示例

该示例通过设置 _state_ 和 _url_ 创建一条新的历史条目。

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### 改变查询参数

```js
const url = new URL(location);
url.searchParams.set("foo", "bar");
history.pushState({}, "", url);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 History API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)
- [Window：popstate 事件](/zh-CN/docs/Web/API/Window/popstate_event)
