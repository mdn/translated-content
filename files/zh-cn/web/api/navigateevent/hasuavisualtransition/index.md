---
title: NavigateEvent：hasUAVisualTransition 属性
slug: Web/API/NavigateEvent/hasUAVisualTransition
l10n:
  sourceCommit: 875b84034211b6e83150ba33efac9b0665074f17
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`hasUAVisualTransition`** 只读属性在用户代理分派此事件之前已为此导航执行了可视化的过渡时返回 `true`，否则返回 `false`。

用户代理在执行站点导航时可能会提供内置的可视化的过渡。如果站点作者还添加了可视化的过渡，则用户代理和作者的过渡可能会发生冲突并让访问者感到困惑。该属性可让你检测用户代理是否提供了过渡，以便你可以跳过作者的过渡以获得更好的用户体验。

## 值

布尔值。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  // 有些导航，例如跨源导航，我们无法拦截。让浏览器正常处理这些导航。
  if (!event.canIntercept) {
    return;
  }

  // 不要拦截片段导航或下载。
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    handler() {
      // 获取新内容
      const newContent = await fetchNewContent(event.destination.url, {
        signal: event.signal,
      });

      // 用户代理不支持视图转换，或者用户代理本身已经提供了可视化的过渡（例如向后滑动）。无论哪种情况，都直接更新 DOM
      if (!document.startViewTransition || event.hasUAVisualTransition) {
        doSinglePageAppNav(newContent);
        return;
      }

      // 使用视图过渡更新内容
      document.startViewTransition(() => {
        doSinglePageAppNav(newContent);
      });
    },
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
- [适用于单页应用的同文档视图过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions/same-document)
