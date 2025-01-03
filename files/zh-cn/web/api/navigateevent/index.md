---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("Navigation API", "导航 API", "", "nocode")}} 的 **`NavigateEvent`** 接口是 {{domxref("Navigation/navigate_event", "navigate")}} 事件的事件对象，该事件会在[任何类型的导航](https://github.com/WICG/navigation-api#appendix-types-of-navigations)启动时触发（这包括使用{{domxref("History API", "历史记录 API", "", "nocode")}} 的特性，如 {{domxref("History.go()")}}）。`NavigateEvent` 对象提供对该导航信息的访问，并允许开发人员拦截和控制导航处理。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("NavigateEvent.NavigateEvent", "NavigateEvent()")}} {{Experimental_Inline}}
  - : 创建一个新的 `NavigateEvent` 对象实例。

## 实例属性

_从其父接口 {{DOMxRef("Event")}} 继承属性。_

- {{domxref("NavigateEvent.canIntercept", "canIntercept")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果导航可以被拦截，则返回 `true`，否则返回 `false`（例如，你无法拦截跨源导航）。
- {{domxref("NavigateEvent.destination", "destination")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("NavigationDestination")}} 对象，表示要导航到的目标。
- {{domxref("NavigateEvent.downloadRequest", "downloadRequest")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果是下载导航（例如，具有 `download` 属性的 {{htmlelement("a")}} 或 {{htmlelement("area")}} 元素），则返回请求下载的文件的文件名，否则返回 `null`。
- {{domxref("NavigateEvent.formData", "formData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果是 `POST` 表单提交，则返回表示已提交数据的 {{domxref("FormData")}} 对象，否则返回 `null`。
- {{domxref("NavigateEvent.hashChange", "hashChange")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果导航是片段导航（即导航到同一文档中的片段标识符），则返回 `true`，否则返回 `false`。
- {{domxref("NavigateEvent.info", "info")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回由启动导航操作（例如 {{domxref("Navigation.back()")}} 或 {{domxref("Navigation.navigate()")}}）传递的 `info` 数据值，如果没有传递 `info` 数据，则返回 `undefined`。
- {{domxref("NavigateEvent.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回导航类型——`push`、`reload`、`replace` 或 `traverse`。
- {{domxref("NavigateEvent.signal", "signal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("AbortSignal")}}，如果取消导航（例如，用户按下浏览器的“停止”按钮，或者另一个导航启动并因此取消正在进行的导航），该信号将中止。
- {{domxref("NavigateEvent.userInitiated", "userInitiated")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果导航是由用户发起的（例如，通过单击链接、提交表单或按浏览器的“后退”/“前进”按钮），则返回 `true`，否则返回 `false`。

## 实例方法

_从其父接口 {{DOMxRef("Event")}} 继承方法。_

- {{domxref("NavigateEvent.intercept", "intercept()")}} {{Experimental_Inline}}
  - : 拦截此导航，将其转换为指向 {{domxref("NavigationDestination.url", "destination")}} URL 的同一文档导航。它可以接受定义导航处理行为应该是什么的处理器函数，以及 `focusReset` 和 `scroll` 选项以根据需要控制行为。
- {{domxref("NavigateEvent.scroll", "scroll()")}} {{Experimental_Inline}}
  - : 如果你希望在导航处理完成之前发生，可以调用它来手动触发响应导航而发生的浏览器驱动的滚动行为。

## 示例

### 使用 `intercept()` 处理导航

```js
navigation.addEventListener("navigate", (event) => {
  // 如果此导航不应被拦截，则提前退出，例如，如果导航是跨源的，或者是下载请求
  if (shouldNotIntercept(event)) return;

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
  if (shouldNotIntercept(navigateEvent)) return;
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
