---
title: 跨全局的 Fetch 使用方法
slug: Web/API/Fetch_API/Cross-global_fetch_usage
---

{{DefaultAPISidebar("Fetch API")}}

本文解释了在 fetch 时发生的边缘情况（以及潜在展示相同类型的资源检索行为的其他 API）。当从 {{htmlelement("iframe")}} 发起涉及相对 URL 的跨源 Fetch 时，相对 URL 会被解析为当前的全局位置，而不是 iframe 的位置。

## 边缘情况

大多数网站几乎不会遇到这种边缘情况。如下：

- 需要一个同源的 iframe
- 该同源 iframe 需要具有不同根 URL 位置
- 必须使用跨全局的 fetch 函数，例如 `frame.contentWindow.fetch()`
- 传递给 fetch 函数的是相对 URL

## 遇到的问题

以前，我们会根据当前的全局对象来解析相对的 URL，比如说：

```js
let absolute = new URL(relative, window.location.href);
```

这样做不是什么大问题，只是表现出这种行为的不同 API 与规范中定义的行为的不一致可能导致问题的进一步发展。

## 解决方案

在 Firefox 60 及以后版本中，Mozilla 对相对 URL 的解析是相对于拥有 `fetch()` 函数的全局的（见 [Firefox bug 1432272](https://bugzil.la/1432272)）。因此在上述情形中，URL 是相对于 iframe 的地址进行解析的：

```js
let absolute = new URL(relative, frame.contentWindow.location.href);
```

对于如何使得新规范与此行为变化保持一致，以缓解未来可能出现的问题，有很多讨论正在进行中。
