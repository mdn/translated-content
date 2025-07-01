---
title: 结构化克隆算法
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
---

{{DefaultAPISidebar("Web Workers API")}}

**结构化克隆算法**用于复制复杂 JavaScript 对象的算法。通过来自 [Worker](/zh-CN/docs/Web/API/Worker) 的 `postMessage()` 或使用 [IndexedDB](/zh-CN/docs/Glossary/IndexedDB) 存储对象时在内部使用。它通过递归输入对象来构建克隆，同时保持先前访问过的引用的映射，以避免无限遍历循环。

## 结构化克隆所不能做到的

- [`Function`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 对象是不能被结构化克隆算法复制的；如果你尝试这样子去做，这会导致抛出 `DATA_CLONE_ERR` 的异常。
- 企图去克隆 DOM 节点同样会抛出 `DATA_CLONE_ERR` 异常。
- 对象的某些特定参数也不会被保留
  - `RegExp` 对象的 `lastIndex` 字段不会被保留
  - 属性描述符，setters 以及 getters（以及其他类似元数据的功能）同样不会被复制。例如，如果一个对象用属性描述符标记为 read-only，它将会被复制为 read-write，因为这是默认的情况下。
  - 原形链上的属性也不会被追踪以及复制。

## 支持的类型

### JavaScript 类型

- {{jsxref("Array")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Boolean")}}
- {{jsxref("DataView")}}
- {{jsxref("Date")}}
- {{jsxref("Error")}} 类型（仅限部分 [Error 类型](#error_类型)）。
- {{jsxref("Map")}}
- {{jsxref("Object")}} 对象：仅限简单对象（如使用对象字面量创建的）。
- 除 `symbol` 以外的[基本类型](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#原始值)。
- {{jsxref("RegExp")}}：`lastIndex` 字段不会被保留。
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### Error 类型

仅支持以下 `Error` 类型：[Error](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)、[EvalError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError)、[RangeError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)、[ReferenceError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)、[SyntaxError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)、[TypeError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)、[URIError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)（或其他会被设置为 `Error` 的）。

浏览器必须序列化 `name` 和 `message` 字段，其他有意义的字段则可能会序列化，如 `stack`、`cause` 等。

[AggregateError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 预计会在 [whatwg/html#5749](https://github.com/whatwg/html/pull/5749) 被添加到标准中（并且已被部分浏览器所支持）。

## 参见

- [HTML 规范：安全地传递结构化数据](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)
- {{DOMxRef("Window.structuredClone()")}}
- {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
- {{domxref("window.history")}}
- {{domxref("window.postMessage()")}}
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
