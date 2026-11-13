---
title: NavigateEvent：hashChange 属性
slug: Web/API/NavigateEvent/hashChange
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`hashChange`** 只读属性在导航是片段导航（即，导航到同一文档中的片段标识符）时返回 `true`，否则返回 `false`。

## 值

布尔值——如果导航是片段导航，则为 `true`，否则为 `false`。

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
      if (event.formData) {
        processFormDataAndUpdateUI(event.formData, event.signal);
      } else {
        doSinglePageAppNav(event.destination, event.signal);
      }
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
