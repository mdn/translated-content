---
title: 结构化克隆算法
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
---

结构化克隆算法是[由 HTML5 规范定义](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data)的用于复制复杂 JavaScript 对象的算法。通过来自 [Workers](/zh-CN/docs/Web/API/Worker)的 `postMessage()` 或使用 [IndexedDB](/zh-CN/docs/Glossary/IndexedDB) 存储对象时在内部使用。它通过递归输入对象来构建克隆，同时保持先前访问过的引用的映射，以避免无限遍历循环。

## 结构化克隆所不能做到的

- [`Error`](/zh-CN/JavaScript/Reference/Global_Objects/Error) 以及 [`Function`](/zh-CN/JavaScript/Reference/Global_Objects/Function) 对象是不能被结构化克隆算法复制的；如果你尝试这样子去做，这会导致抛出 `DATA_CLONE_ERR` 的异常。
- 企图去克隆 DOM 节点同样会抛出 `DATA_CLONE_ERR` 异常。
- 对象的某些特定参数也不会被保留

  - `RegExp` 对象的 `lastIndex` 字段不会被保留
  - 属性描述符，setters 以及 getters（以及其他类似元数据的功能）同样不会被复制。例如，如果一个对象用属性描述符标记为 read-only，它将会被复制为 read-write，因为这是默认的情况下。
  - 原形链上的属性也不会被追踪以及复制。

## 支持的类型

| 对象类型                                                                    | 注意                                                                                            |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [所有的原始类型](/zh-CN/docs/Web/JavaScript/Data_structures#原始值)         | symbols 除外                                                                                    |
| [Boolean](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 对象 |                                                                                                 |
| String 对象                                                                 |                                                                                                 |
| [Date](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)            |                                                                                                 |
| [RegExp](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)        | `lastIndex` 字段不会被保留。                                                                    |
| {{ domxref("Blob") }}                                                |                                                                                                 |
| {{ domxref("File") }}                                                |                                                                                                 |
| {{ domxref("FileList") }}                                            |                                                                                                 |
| [ArrayBuffer](/zh-CN/docs/Web/API/ArrayBuffer)                              |                                                                                                 |
| [ArrayBufferView](/zh-CN/docs/Web/API/ArrayBufferView)                      | 这基本上意味着所有的 [类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays) ，如 Int32Array 等。 |
| {{ domxref("ImageData") }}                                        |                                                                                                 |
| [Array](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)          |                                                                                                 |
| [Object](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)        | 仅包括普通对象（如对象字面量）                                                                  |
| [Map](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)              |                                                                                                 |
| [Set](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)              |                                                                                                 |

## 相关链接

- [HTML5 Specification: Safe passing of structured data](http://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{ domxref("window.history") }}
- {{ domxref("window.postMessage()") }}
- [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
- [Components.utils.cloneInto](/zh-CN/docs/Components.utils.cloneInto)
