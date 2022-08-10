---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
translation_of: Web/API/AbortSignal/aborted
---
{{APIRef("DOM")}}{{SeeCompatTable}}

**`aborted`**是一个只读属性，它返回一个{{domxref("Boolean")}}表示与 DOM 通讯的信号是 (`true`) 否 (`false`) 已被放弃。

## 语法

```js
var isAborted = abortSignal.aborted;
```

### 取值

一个{{domxref("Boolean")}}

## 示例

在下面的代码段中，我们创建了一个新的`AbortController`对象，并获取它的{{domxref("AbortSignal")}} (位于`signal`属性中)。然后我们用`aborted`属性检查这个信号是否已被放弃，并把相应的日志发送给终端。

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Request has been aborted') : console.log('Request not aborted');
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat("api.AbortSignal.aborted")}}

## 参见

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
