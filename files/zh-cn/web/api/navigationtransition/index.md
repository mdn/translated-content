---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`NavigationTransition`** 接口表示正在进行的导航，即尚未到达 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 或 {{domxref("Navigation/navigateerror_event", "navigateerror")}} 阶段的导航。

它是通过 {{domxref("Navigation.transition")}} 属性访问的。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("NavigationTransition.finished", "finished")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{jsxref("Promise")}}，其在 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 事件触发的同时兑现，或 {{domxref("Navigation/navigateerror_event", "navigateerror")}} 事件触发的同时拒绝。
- {{domxref("NavigationTransition.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回导航过渡来源的 {{domxref("NavigationHistoryEntry")}}。
- {{domxref("NavigationTransition.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回正在进行的导航的类型。

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
