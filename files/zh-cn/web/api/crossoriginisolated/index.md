---
title: crossOriginIsolated
slug: Web/API/crossOriginIsolated
---

{{APIRef()}}{{SeeCompatTable}}

**`crossOriginIsolated`** 是 `WindowOrWorkerGlobalScope` 的一个只读属性，返回一个布尔值，该值指示是否可以通过 {{domxref("Window.postMessage()")}} 调用发送 {{jsxref("SharedArrayBuffer")}}。

该值取决于响应中存在的{{httpheader("Cross-Origin-Opener-Policy")}} 和{{httpheader("Cross-Origin-Embedder-Policy")}} 头。

## 语法

```plain
var myCrossOriginIsolated = self.crossOriginIsolated; // 或直接 crossOriginIsolated
```

### 类型

布尔类型

## 示例

```js
if (crossOriginIsolated) {
  // post SharedArrayBuffer
} else {
  // Do something else
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API)
- [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)
