---
title: DOMError
slug: Web/API/DOMError
---

{{ APIRef("DOM") }}{{deprecated_header}}

**`DOMError`** 接口描述一个错误对象，该对象包含一个错误的名字。

## 属性

- {{domxref("DOMError.name")}} {{readOnlyInline}}
  - : 返回一个代表一个错误类型名称的 {{ domxref("DOMString") }} (见下文).
- {{domxref("DOMError.message")}} {{readOnlyInline}}
  - : 返回一个代表与给定错误类型名称有关的信息或描述{{ domxref("DOMString") }}

## Error 类型

| Type                         | Description                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `IndexSizeError`             | The index is not in the allowed range (e.g. thrown in a {{ domxref("range") }} object). 索引不在允许的范围内 |
| `HierarchyRequestError`      | The node tree hierarchy is not correct. 节点树层次结构是不正确的。                                           |
| `WrongDocumentError`         | The object is in the wrong {{ domxref("document") }}. 对象是错误的                                           |
| `InvalidCharacterError`      | The string contains invalid characters. 字符串包含无效字符。                                                 |
| `NoModificationAllowedError` | The object can not be modified. 对象不能被修改。                                                             |
| `NotFoundError`              | The object can not be found here. 对象不能在这里被找到。                                                     |
| `NotSupportedError`          | The operation is not supported 不支持的操作                                                                  |
| `InvalidStateError`          | The object is in an invalid state. 对象是一个无效的状态。                                                    |
| `SyntaxError`                | The string did not match the expected pattern. 字符串不匹配预期的模式                                        |
| `InvalidModificationError`   | The object can not be modified in this way. 对象不能以这种方式被修改                                         |
| `NamespaceError`             | The operation is not allowed by Namespaces in XML 操作在 XML 命名空间内是不被允许的                          |
| `InvalidAccessError`         | The object does not support the operation or argument. 对象不支持这种操作或参数。                            |
| `TypeMismatchError`          | The type of the object does not match the expected type. 对象的类型不匹配预期的类型。                        |
| `SecurityError`              | The operation is insecure. 此操作是不安全的。                                                                |
| `NetworkError`               | A network error occurred. 发生网络错误                                                                       |
| `AbortError`                 | The operation was aborted. 操作被中止                                                                        |
| `URLMismatchError`           | The given URL does not match another URL. 给定的 URL 不匹配另一个 URL。                                      |
| `QuotaExceededError`         | The quota has been exceeded. 已经超过给定配额。                                                              |
| `TimeoutError`               | The operation timed out. 操作超时。                                                                          |
| `InvalidNodeTypeError`       | The node is incorrect or has an incorrect ancestor for this operation. 这个操作的 节点或节点祖先 是不正确的  |
| `DataCloneError`             | The object can not be cloned. 对象不能克隆。                                                                 |

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("DOMException") }}
