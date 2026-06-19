---
title: Navigator：deviceMemory 属性
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的只读属性 **`deviceMemory`** 返回设备内存的近似值（以千兆字节为单位）。

为了防止{{glossary("fingerprinting", "指纹识别")}}，报告的值并不精确。该值通过向下取整到最接近的 2 的幂，然后将其除以 1024 来近似。之后，将其限制在上下限范围内，以保护内存非常低或非常高的设备的所有者的隐私。其取值范围可能随时间变化 (参阅 [浏览器兼容性表格](#浏览器兼容性))。

## 值

一个近似为2的n次幂的浮点数，并被限制在实现定义的极限范围内。
例如，如果一浏览器不报告`2`以下的值或`32`以上的值，那么值即为：`2`, `4`, `8`, `16`, `32`中的一个。

## 示例

```js
const memory = navigator.deviceMemory;
console.log(`此设备大约拥有 ${memory}GiB 的 RAM。`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Device-Memory")}} HTTP 标头
