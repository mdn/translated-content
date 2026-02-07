---
title: DOMStringList
slug: Web/API/DOMStringList
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`DOMStringList`** 接口是一种由某些 API 返回的遗留类型，表示一个不可修改的字符串列表（`DOMString`）。

该接口曾用于[尝试创建不可修改列表](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)而为了不破坏已经使用它的代码而继续被支持。现代 API 使用基于 JavaScript [数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)的类型来表示列表结构，因而也支持了许多数组方法，同时也基于使用场景为其赋予了额外的语义（例如使其项目只读）。

这些历史原因并不意味着你作为开发者应该避免使用 `DOMStringList`。你不会自己创建 `DOMStringList` 对象，但你会从诸如 `Location.ancestorOrigins` 之类的未被弃用的 API 中获得这一对象。不过，要注意它与真正的数组之间的语义差异。

该接口目前用于 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 和 {{domxref("Location")}} API 中：

- {{domxref("IDBDatabase.objectStoreNames")}}
- {{domxref("IDBObjectStore.indexNames")}}
- {{domxref("Location.ancestorOrigins")}}

## 实例属性

- {{domxref("DOMStringList.length")}} {{ReadOnlyInline}}
  - : 返回列表的长度。

## 实例方法

- {{domxref("DOMStringList.item()")}}
  - : 返回列表中指定索引处的字符串。
- {{domxref("DOMStringList.contains()")}}
  - : 返回表示列表中是否存在指定字符串的布尔值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
