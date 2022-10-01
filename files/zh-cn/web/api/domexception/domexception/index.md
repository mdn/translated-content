---
title: DOMException()
slug: Web/API/DOMException/DOMException
---

{{ APIRef("DOM") }}

**`DOMException()`** 构造函数返回一个包含指定的信息和名称的 `DOMException` 对象。

## 语法

```
var domException = new DOMException();
var domException = new DOMException(message);
var domException = new DOMException(message, name);
```

### 参数

- `message` {{optional_inline}}
  - : 对异常的描述。如果不存在，使用空字符串 `''` .
- `name` {{optional_inline}}
  - : 返回一个 {{domxref("DOMString")}} 包含与 [error constant](Web/API/DOMException#Error_constants) 错误相关的字符串常数之一。

### 返回值

- **{{domxref("DOMException")}}**
  - : 一个新创建的 {{domxref("DOMException")}} 对象。

## 例子

TBD

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
