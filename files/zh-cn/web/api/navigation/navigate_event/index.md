---
title: Navigation：navigate 事件
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation")}} 接口的 **`navigate`** 事件在发起[任何类型的导航](https://github.com/WICG/navigation-api#appendix-types-of-navigations)时触发，让你可以根据需要进行拦截。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("navigate", (event) => {});

onnavigate = (event) => {};
```

## 事件类型

{{domxref("NavigateEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("NavigateEvent")}}

## 示例

### 使用 `intercept()` 处理导航

```js
navigation.addEventListener("navigate", (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  if (shouldNotIntercept(event)) {
    return;
  }

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

> [!NOTE]
> 在导航 API 可用之前，要执行类似操作，你必须监听链接上的所有点击事件，运行 `e.preventDefault()`，执行适当的 {{domxref("History.pushState()")}} 调用，然后根据新 URL 设置页面视图。而且这无法处理所有导航——只能处理用户发起的链接点击。

### 使用 `scroll()` 处理滚动

在这个拦截导航的例子中，`handler()` 函数首先获取并呈现一些文章内容，然后获取并呈现一些次要内容。尽快将页面滚动到主要文章内容以便用户与其交互是有意义的，而不是等到次要内容也呈现后再滚动。为了实现这一点，我们在两者之间添加了 {{domxref("NavigateEvent.scroll", "scroll()")}} 调用。

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
