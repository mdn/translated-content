---
title: Navigator：deviceMemory 属性
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的只读属性 **`deviceMemory`** 返回设备内存的近似值（以千兆字节为单位）。

为了防止{{glossary("fingerprinting", "指纹识别")}}，报告的值并不精确。该值通过向下取整到最接近的 2 的幂，然后将其除以 1024 来近似。之后，将其限制在上下限范围内，以保护内存非常低或非常高的设备的所有者的隐私。

## 值

一个浮点数；取值范围为 `0.25`、`0.5`、`1`、`2`、`4`、`8`。

## 示例

```js
const memory = navigator.deviceMemory;
console.log(`此设备至少拥有 ${memory}GiB 的 RAM。`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Device-Memory")}} HTTP 标头
