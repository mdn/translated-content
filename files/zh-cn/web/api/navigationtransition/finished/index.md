---
title: NavigationTransition：finished 属性
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationTransition")}} 接口的 **`finished`** 只读属性返回一个 {{jsxref("Promise")}}，其在 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件触发的同时兑现，或 {{domxref("Navigation/navigateerror_event", "navigateerror")}} 事件触发的同时拒绝。

## 值

兑现 `undefined` 的 {{jsxref("Promise")}}。

## 示例

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // 导航已成功完成
  // 清理所有正在进行的监控
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
