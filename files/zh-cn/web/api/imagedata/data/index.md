---
title: ImageData.data
slug: Web/API/ImageData/data
---

{{APIRef("Canvas API")}}

只读的 **`ImageData.data`** 属性，返回 {{jsxref("Uint8ClampedArray")}} ，描述一个一维数组，包含以 RGBA 顺序的数据，数据使用 `0` 至 `255`（包含）的整数表示。

## 值

一个 {{jsxref("Uint8ClampedArray")}}。

## 示例

```js
var imagedata = new ImageData(100, 100);
imagedata.data; // Uint8ClampedArray[40000]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
