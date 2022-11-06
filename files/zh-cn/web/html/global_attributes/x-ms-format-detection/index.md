---
title: x-ms-格式 - 检测
slug: Web/HTML/Global_attributes/x-ms-format-detection
original_slug: Web/HTML/Global_attributes/x-ms-格式 - 检测
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

这个 **`x-ms-format-detection`** 属性确定元素文本中的数据格式 (如电话号码) 是否自动转换为可跟踪链接。

现有的链接 (例如带有`tel:` 计划不受影响。

> **备注：** 通过格式检测创建的链接不会出现在 DOM 中。

{{Non-standard_inline}} 此专有属性是特定于 Internet Explorer 和 Microsoft Edge。

## 语法

```html
<html x-ms-format-detection="none">
```

## 价值

- `all`
  - : 检测所有受支持的数据格式。
- `none`
  - : 关闭格式检测。
- `phone`
  - : 电话号码模式是自动链接的。

## 另请详见

- [Microsoft API extensions](/zh-CN/docs/Web/API/Microsoft_API_extensions)
