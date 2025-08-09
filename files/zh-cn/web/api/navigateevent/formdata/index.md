---
title: NavigateEvent：formData 属性
slug: Web/API/NavigateEvent/formData
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`formData`** 只读属性在导航为 [`POST`](/zh-CN/docs/Web/HTTP/Reference/Methods/POST) 表单提交导航的情况下返回表示提交的数据的 {{domxref("FormData")}} 对象，否则返回 `null`。

## 值

{{domxref("FormData")}} 对象，或 `null`。

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
