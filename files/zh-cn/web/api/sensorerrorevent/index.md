---
title: SensorErrorEvent
slug: Web/API/SensorErrorEvent
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

[Sensor API](/zh-CN/docs/Web/API/Sensor_APIs) 的 **`SensorErrorEvent`** 接口提供了有关 {{domxref('Sensor')}} 或其派生接口抛出的错误的信息。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("SensorErrorEvent.SensorErrorEvent", "SensorErrorEvent()")}}
  - : 创建一个新的 `SensorErrorEvent` 对象。

## 实例属性

- {{domxref('SensorErrorEvent.error')}} {{ReadOnlyInline}}
  - : 返回在事件构造函数中传入的 {{domxref('DOMException')}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
