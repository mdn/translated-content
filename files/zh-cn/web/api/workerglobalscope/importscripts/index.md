---
title: WorkerGlobalScope：importScripts() 方法
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`importScripts()`** 方法将一个或多个脚本同步导入到 worker 的作用域中。

## 语法

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### 参数

- `pathN`
  - : 一个表示要导入的脚本的 URL 的字符串值。URL 可以是绝对的，也可以是相对的。如果 URL 是相对的，那么它是相对于 worker 入口脚本的 URL。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NetworkError`
  - : 要导入的脚本没有按有效的 JavaScript MIME 类型（有效的类型如 `text/javascript`）或允许的[旧版 JavaScript MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types#遗留的_javascript_mime_类型)提供。
- {{jsxref("TypeError")}}
  - : 如果当前的 {{domxref("WorkerGlobalScope")}} 是一个模块，则抛出此异常。请改用 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)。

## 示例

如果你在一个名为 `foo.js` 的单独脚本中编写了一些你想在 `worker.js` 中使用的功能，则可以使用以下行导入它：

```js
importScripts("foo.js");
```

`foo.js` 应该在与 worker 的入口点相同的 URL 子树中——例如，如果这个 worker 是通过 `new Worker("worker.js")` 创建的，那么 `worker.js` 就是入口点。如果 `worker.js` 在 `https://example.com/scripts/worker.js`，那么 `foo.js` 应该在 `https://example.com/scripts/foo.js`。

`importScripts()` 和 `self.importScripts()` 实际上是等效的——都表示在 worker 的内部作用域中调用的 `importScripts()`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerGlobalScope")}}
