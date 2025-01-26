---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`NavigationDestination`** 接口表示当前导航中要导航到的目标。

它可通过 {{domxref("NavigateEvent.destination")}} 属性访问。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("NavigationDestination.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果 {{domxref("NavigateEvent.navigationType")}} 为 `traverse`，则返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.id", "id")}} 值，否则返回空字符串。
- {{domxref("NavigationDestination.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果 {{domxref("NavigateEvent.navigationType")}} 为 `traverse`，则返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.index", "index")}} 值，否则返回 `-1`。
- {{domxref("NavigationDestination.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果 {{domxref("NavigateEvent.navigationType")}} 为 `traverse`，则返回目标 {{domxref("NavigationHistoryEntry")}} 的 {{domxref("NavigationHistoryEntry.key", "key")}} 值，否则返回空字符串。
- {{domxref("NavigationDestination.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果导航到与当前 {{domxref("Document")}} 值相同的 `document`，则返回 `true`，否则返回 `false`。
- {{domxref("NavigationDestination.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回导航到的 URL 地址。

## 实例方法

- {{domxref("NavigationDestination.getState", "getState()")}} {{Experimental_Inline}}
  - : 返回与目标 {{domxref("NavigationHistoryEntry")}} 或导航操作（例如 {{domxref("Navigation.navigate()", "navigate()")}}）相关的可用状态的克隆。

## 示例

```js
navigation.addEventListener("navigate", (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  if (shouldNotIntercept(event)) {
    return;
  }

  // 返回由 NavigationDestination.url 值构造的 URL() 对象
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // URL 已更改，因此在获取新内容时显示占位符，例如旋转图标或加载页面
        renderArticlePagePlaceholder();

        // 获取新内容并在准备就绪时显示
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
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
