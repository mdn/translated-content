---
title: Navigation：transition 属性
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`transition`** 只读属性返回一个 {{domxref("NavigationTransition")}} 对象，该对象表示正在进行的导航的状态，可用于跟踪正在进行的导航。

## 值

{{domxref("NavigationTransition")}} 对象，如果当前没有正在进行的导航，则为 `null`。

## 示例

```js
async function handleTransition() {
  if (navigation.transition) {
    showLoadingSpinner();
    await navigation.transition.finished;
    hideLoadingSpinner();
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
