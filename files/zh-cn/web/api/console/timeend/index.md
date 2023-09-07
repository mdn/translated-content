---
title: Console.timeEnd()
slug: Web/API/console/timeEnd
---

{{APIRef("Console API")}}{{Non-standard_header}}

## 概述

停止一个通过 `console.time()` 启动的计时器

> **备注：** 该方法在使用时不会将输出的时间返回到 js，它只能用于控制台调试。请勿将该方法作为普通计时器或性能数据收集器的一部分。

有关详细信息和示例，请参阅 [Timers](/zh-CN/docs/Web/API/console#Timers)

{{AvailableInWorkers}}

## 语法

```js
console.timeEnd(label);
```

### 参数

- `label`
  - : 需要停止的计时器名字。一旦停止，计时器所经过的时间会被自动输出到控制台。

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
