---
title: WorkerGlobalScope：importScripts() 方法
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("Web Workers API")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`importScripts()`** 方法将一个或多个脚本同步导入到 worker 的作用域中。

## 语法

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### 参数

- `pathN`
  - : 一个表示要导入的脚本的 URL 的字符串值。URL 可以是绝对的，也可以是相对的。如果 URL 是相对的，那么它是相对于 HTML 文档的基本 URL 的。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NetworkError`
  - : 要导入的脚本没有按有效的 JavaScript MIME 类型（有效的类型如 `text/javascript`）或允许的[旧版 JavaScript MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#遗留的_javascript_mime_类型)提供。

## 示例

如果你在一个名为 `foo.js` 的单独脚本中编写了一些你想在 worker.js 中使用的功能，则可以使用以下行导入它：

```js
importScripts("foo.js");
```

`importScripts()` 和 `self.importScripts()` 实际上是等效的——都表示在 worker 的内部作用域中调用的 `importScripts()`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerGlobalScope")}}
