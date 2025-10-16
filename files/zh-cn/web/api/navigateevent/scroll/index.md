---
title: NavigateEvent：scroll() 方法
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`scroll()`** 方法可用于手动触发浏览器在导航过程中执行的滚动行为，如果希望该行为在导航处理完成之前发生，则可以调用此方法。

## 语法

```js-nolint
scroll()
```

### 参数

无。

### 返回值

无（`undefined`）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前 {{domxref("Document")}} 尚未激活，或者导航已被取消，则抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果事件是由 {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} 调用而不是用户代理分派的，则抛出此异常。

## 示例

### 使用 `scroll()` 处理滚动

在这个拦截导航的例子中，`handler()` 函数首先获取并呈现一些文章内容，然后获取并呈现一些次要内容。尽快将页面滚动到主要文章内容以便用户与其交互是有意义的，而不是等到次要内容也呈现后再滚动。为了实现这一点，我们在两者之间添加了 `scroll()` 调用。

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(navigateEvent)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
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
