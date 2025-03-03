---
title: NavigateEvent：signal 属性
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`signal`** 只读属性返回一个 {{domxref("AbortSignal")}}，如果导航被取消（例如，用户按下浏览器的“停止”按钮，或者另一个导航启动并因此取消正在进行的导航），该信号将被中止。

## 值

{{domxref("AbortSignal")}} 对象。

## 示例

这里的总体思路是，可以将 `signal` 属性传递给相关的 {{domxref("Window/fetch", "fetch()")}} 操作，这样，如果取消导航，则可以安全地中止 `fetch()` 操作，避免在不再需要的 fetch 请求上浪费带宽。

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // ...

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // ...
    },
  });
});
```

> [!NOTE]
> 请参阅[示例：下一个/上一个按钮](https://github.com/WICG/navigation-api#example-nextprevious-buttons)获取更详细的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
