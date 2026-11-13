---
title: NavigateEvent：downloadRequest 属性
slug: Web/API/NavigateEvent/downloadRequest
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`downloadRequest`** 只读属性在导航为下载导航的情况下返回请求下载的文件的文件名（例如，具有 `download` 属性的 {{htmlelement("a")}} 或 {{htmlelement("area")}} 元素），否则返回 `null`。

## 值

包含请求下载的文件的文件名的字符串，或者为 `null`。

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
