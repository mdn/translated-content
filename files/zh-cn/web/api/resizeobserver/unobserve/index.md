---
title: ResizeObserver.unobserve()
slug: Web/API/ResizeObserver/unobserve
---
{{APIRef("Resize Observer API")}}{{SeeCompatTable}}

The **`unobserve()`** method of the {{domxref("ResizeObserver")}} interface ends the observing of a specified {{domxref('Element')}} or {{domxref('SVGElement')}}.
{{domxref("ResizeObserver")}} 接口的 **`unobserve()`** 方法用于结束一个指定的 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 的观察。

## 语法

```plain
void unobserve(target);
```

### 参数

- target
  - : 取消监听的{{domxref('Element')}} 或 {{domxref('SVGElement')}} 的引用。

### 返回值

{{jsxref('undefined')}}

### 异常

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.ResizeObserver.unobserve")}}
