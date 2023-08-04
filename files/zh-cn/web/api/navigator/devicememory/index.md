---
title: Navigator.deviceMemory
slug: Web/API/Navigator/deviceMemory
---

{{SeeCompatTable}}{{APIRef("Device Memory")}}

**`deviceMemory`** 只读属性返回千兆字节为单位的大概的机器内存。这个值是一个 2 的次方数除以 1024，舍去小数点的近似值。并且，上下边界也用来保护那些拥有非常低端或者高端设备的用户的隐私。

## 语法

```plain
const memory = navigator.deviceMemory
console.log ("This device has at least " + memory + "GiB of RAM.")
```

### Value

一个浮点类型的数，0.25,0.5,1,2,4,8 之一。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
