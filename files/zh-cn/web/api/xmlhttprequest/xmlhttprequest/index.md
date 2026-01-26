---
title: XMLHttpRequest：XMLHttpRequest() 构造函数
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5e270e3cdab4f3c8ad3f5752976c72c6e8312eb9
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest()`** 构造函数用于创建一个新的 {{domxref("XMLHttpRequest")}}。

## 语法

```js-nolint
new XMLHttpRequest()
// 非标准
new XMLHttpRequest(options)
```

### 参数

没有标准化的参数。但是，Firefox 允许一个非标准的参数：

- `options` {{non-standard_inline}}
  - : 一个可以包含以下标志的对象：
    - `mozAnon`
      - : 布尔值。将此标志设置为 `true` 会导致浏览器在获取资源时不会暴露{{Glossary("origin", "来源")}}和用户凭据。最重要的是，这意味着 {{Glossary("cookie")}} 只有在显式使用 `setRequestHeader` 来添加的情况下才会被发送。
    - `mozSystem`
      - : 布尔值。在将此标志设置为 `true` 时，同源策略不会在当前请求上强制执行。

### 返回值

一个新的 {{domxref("XMLHttpRequest")}} 对象。在调用 {{domxref("XMLHttpRequest.send", "send()")}} 向服务器发送请求之前，必须至少调用 {{domxref("XMLHttpRequest.open", "open()")}} 来初始化这个对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
