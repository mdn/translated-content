---
title: NavigateEvent：canIntercept 属性
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`canIntercept`** 只读属性在可以拦截导航并重写其 URL 时返回 `true`，否则返回 `false`。

关于何时可以拦截导航，有几条规则。例如：

- 你不能拦截跨源导航。
- 对于 `http` 或 `https` URL，仅当新 URL 的 `path`、`query` 和 `fragment` 部分与当前 URL 不同时可以拦截。
- 对于 `file` URL，仅当新 URL 的 `query` 和 `fragment` 部分不同时可以拦截。
- 对于其他 URL 类型，仅当 `fragment` 部分不同时可以拦截导航。

请参阅规范以获取有关[何时可以重写文档的 URL](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten) 的更多解释，其中包括示例表格。

## 值

布尔值——如果可以拦截导航则为 `true`，否则为 `false`。

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
