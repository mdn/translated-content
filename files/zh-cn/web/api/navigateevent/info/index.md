---
title: NavigateEvent：info 属性
slug: Web/API/NavigateEvent/info
l10n:
  sourceCommit: d88983eca1093181603d5ff755a1a8f284985e84
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`info`** 只读属性返回启动导航操作传递的 `info` 数据值（例如 {{domxref("Navigation.back()")}} 或 {{domxref("Navigation.navigate()")}}），如果没有传递 `info` 数据，则返回 `undefined`。

## 值

启动导航操作传递的 `info` 值，如果没有传递则为 `undefined`。

## 示例

`info` 的一个使用示例是，根据到达特定路线的方式触发不同的单页导航渲染。例如，考虑一个照片库应用，你可以通过各种路线到达相同的照片网址和状态。你可能希望使用不同的动画来显示每个路线的照片。

```js
navigation.addEventListener("navigate", (event) => {
  if (isPhotoNavigation(event)) {
    event.intercept({
      async handler() {
        switch (event.info?.via) {
          case "go-left": {
            await animateLeft();
            break;
          }
          case "go-right": {
            await animateRight();
            break;
          }
          case "gallery": {
            await animateZoomFromThumbnail(event.info.thumbnail);
            break;
          }
        }

        // TODO：实际加载照片。
      },
    });
  }
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
- 允许传递信息的方法——{{domxref("Navigation.back()")}}、{{domxref("Navigation.forward()")}}、{{domxref("Navigation.navigate()")}}、{{domxref("Navigation.reload()")}} 和 {{domxref("Navigation.traverseTo()")}}
