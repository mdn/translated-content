---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
---

{{ apiref("Clipboard API") }} {{SeeCompatTable}}

**`ClipboardEvent.clipboardData`** 属性保存了一个 {{domxref("DataTransfer")}} 对象，这个对象可用于：

- 描述哪些数据可以由 [`cut`](/zh-CN/docs/Web/API/Element/cut_event) 和 [`copy`](/zh-CN/docs/Web/API/Element/copy_event) 事件处理器放入剪切板，通常通过调用 {{domxref("DataTransfer.setData", "setData(format, data)")}} 方法；
- 获取由 [`paste`](/zh-CN/docs/Web/API/Element/paste_event) 事件处理器拷贝进剪切板的数据，通常通过调用 {{domxref("DataTransfer.getData", "getData(format)")}} 方法

参见 [`cut`](/zh-CN/docs/Web/API/Element/cut_event) 、[`copy`](/zh-CN/docs/Web/API/Element/copy_event) 和 [`paste`](/zh-CN/docs/Web/API/Element/paste_event) 事件的文档以获取更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与复制相关的事件：[`copy`](/zh-CN/docs/Web/API/Element/copy_event), [`cut`](/zh-CN/docs/Web/API/Element/cut_event), [`paste`](/zh-CN/docs/Web/API/Element/paste_event)
- 本对象所属的{{domxref("ClipboardEvent")}}接口。
