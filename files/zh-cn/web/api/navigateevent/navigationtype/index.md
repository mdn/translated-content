---
title: NavigateEvent：navigationType 属性
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`navigationType`** 只读属性返回导航的类型——`push`、`reload`、`replace` 或 `traverse`。

## 值

代表导航的类型的枚举值。

可能的值包括：

- `push`：导航到新位置，导致新条目被推送到历史列表中。
- `reload`：{{domxref("Navigation.currentEntry")}} 已重新加载。
- `replace`：{{domxref("Navigation.currentEntry")}} 被替换为新的历史记录条目。此新条目将重用相同的 {{domxref("NavigationHistoryEntry.key", "key")}}，但分配不同的 {{domxref("NavigationHistoryEntry.id", "id")}}。
- `traverse`：浏览器从一个现有的历史记录条目导航到另一个现有的历史记录条目。

## 示例

### 具有特殊后退/前进处理的异步转换

有时需要特别处理后退/前进导航，例如通过将缓存的视图转换到屏幕上来重用它们。这可以通过以下分支来实现：

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
    async handler() {
      if (myFramework.currentPage) {
        await myFramework.currentPage.transitionOut();
      }

      let { key } = event.destination;

      if (
        event.navigationType === "traverse" &&
        myFramework.previousPages.has(key)
      ) {
        await myFramework.previousPages.get(key).transitionIn();
      } else {
        // 这可能会导致 myFramework 将渲染的页面存储在 myFramework.previousPages 中。
        await myFramework.renderPage(event.destination);
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
