---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
---

{{ apiref("Clipboard API") }} {{SeeCompatTable}}

**`ClipboardEvent.clipboardData`** 属性保存了一个 {{domxref("DataTransfer")}} 对象，这个对象可用于：

- 描述哪些数据可以由 {{event("cut")}} 和 {{event("copy")}} 事件处理器放入剪切板，通常通过调用 {{domxref("DataTransfer.setData", "setData(format, data)")}} 方法；
- 获取由 {{event("paste")}} 事件处理器拷贝进剪切板的数据，通常通过调用 {{domxref("DataTransfer.getData", "getData(format)")}} 方法

参见 {{event("cut")}} 、{{event("copy")}} 和 {{event("paste")}} 事件的文档以获取更多信息。

## 语法

```
data = ClipboardEvent.clipboardData
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 与复制相关的事件：{{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- 本对象所属的{{domxref("ClipboardEvent")}}接口。
