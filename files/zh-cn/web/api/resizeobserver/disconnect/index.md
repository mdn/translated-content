---
title: ResizeObserver.disconnect()
slug: Web/API/ResizeObserver/disconnect
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserver")}} 接口的 **`disconnect()`** 方法取消所有的对 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 目标的监听。

## 语法

```js-nolint
disconnect()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

无。

## 示例

```js
btn.addEventListener("click", () => {
  resizeObserver.disconnect();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
