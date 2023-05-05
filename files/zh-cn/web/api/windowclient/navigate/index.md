---
title: WindowClient.navigate()
slug: Web/API/WindowClient/navigate
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("WindowClient")}} 接口的 **`navigate()`** 方法加载特定的 URL 地址到一个被控制的浏览器页面，并返回一个当前 {{domxref("WindowClient")}} 议的 {{jsxref("Promise")}} 对象。

## 语法

```plain
WindowClient.navigate(url).then(function(WindowClient) {
  // do something with your WindowClient after navigation
});
```

### 参数

- `url`
  - : 跳转地址

### 返回值

一个 {{domxref("WindowClient")}}决议的{{jsxref("Promise")}}对象。

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}
