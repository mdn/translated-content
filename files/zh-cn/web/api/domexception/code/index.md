---
title: DOMException.code
slug: Web/API/DOMException/code
---

{{ APIRef("DOM") }}

{{domxref("DOMException")}} 接口中的 **`code`** 是一个只读属性，他返回了一个包含了 [错误常量](/zh-CN/docs/Web/API/DOMException#error_names) 的`简短`数字，或者在没有匹配到时返回 `0` 。这个字段产生于历史原因，在新的 DOM 异常中已停止使用，改为在 {{domxref("DOMException.name")}} 属性中推送此信息。

## 语法

```plain
var domExceptionCode = domExceptionInstance.code;
```

### 值

一个数字

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
