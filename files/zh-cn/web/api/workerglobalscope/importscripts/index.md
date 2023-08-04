---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
---

{{APIRef("Web Workers API")}}

{{domxref("WorkerGlobalScope")}} 接口的**`importScripts()`** 方法将一个或多个脚本同步导入到工作者的作用域中。

## 语法

```js
self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);
```

### 参数

{{domxref("DOMString")}} 对象的一个逗号分隔列表，表示要导入的脚本。

### 返回值

_无。_

### 异常

| 异常           | 描述                                                                              |
| -------------- | --------------------------------------------------------------------------------- |
| `NetworkError` | 要导入的脚本不具有有效的 JavaScript MIME 类型（有效的类型如 `text/javascript`）。 |

## 例子

如果您在一个名为 foo.js 的单独脚本中编写了一些您想在 worker.js 中使用的功能，则可以使用以下行导入它：

```js
importScripts("foo.js");
```

`importScripts()` 和 `self.importScripts()` 实际上是等效的 — 都表示从工作者的内部范围内调用的 `importScripts()`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerGlobalScope")}}
- [Using Web workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
