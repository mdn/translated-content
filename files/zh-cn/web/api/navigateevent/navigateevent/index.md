---
title: NavigateEvent：NavigateEvent() 构造函数
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 1bd08bc0642029f650d2da7df5fd1baef09148ef
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

**`NavigateEvent()`** 构造函数创建一个新的 {{domxref("NavigateEvent")}} 对象实例。

## 语法

```js-nolint
new NavigateEvent(type, init)
```

### 参数

- `type`
  - : 表示事件类型的字符串。
- `init`
  - : 一个对象，_除了 {{domxref("Event/Event", "Event()")}} 中定义的属性之外_，还具有以下属性：
    - `canIntercept` {{optional_inline}}
      - : 定义是否可以拦截导航的布尔值（例如，你不能拦截跨源导航）。默认为 `false`。
    - `destination`
      - : 一个 {{domxref("NavigationDestination")}} 对象，代表要导航到的目标。
    - `downloadRequest` {{optional_inline}}
      - : 在下载导航的情况下（例如，具有 `download` 属性的 {{htmlelement("a")}} 或 {{htmlelement("area")}} 元素），请求下载的文件的文件名。默认为 `null`。
    - `formData` {{optional_inline}}
      - : {{domxref("FormData")}} 对象，表示在 `POST` 表单提交的情况下提交的数据。默认为 `null`。
    - `hashChange` {{optional_inline}}
      - : 定义导航是否为片段导航（即导航至同一文档中的片段标识符）的布尔值。默认为 `false`。
    - `hasUAVisualTransition` {{optional_inline}}
      - : 布尔值，定义用户代理在调度此事件之前是否已为此导航执行视觉可见的过渡。默认为 `false`。
    - `info` {{optional_inline}}
      - : 启动导航操作传递的 `info` 数据值（例如 {{domxref("Navigation.back()")}} 或 {{domxref("Navigation.navigate()")}}）。
    - `navigationType` {{optional_inline}}
      - : 导航类型。可能的值为——`push`、`reload`、`replace` 和 `traverse`。默认为 `push`。
    - `signal`
      - : {{domxref("AbortSignal")}}，如果导航被取消（例如，用户按下浏览器的“停止”按钮，或者另一个导航启动并因此取消正在进行的导航），它将中止。
    - `userInitiated` {{optional_inline}}
      - : 布尔值，定义导航是否由用户发起（例如，通过单击链接、提交表单或按浏览器的“后退”/“前进”按钮）。默认为 `false`。

### 返回值

一个新的 {{domxref("NavigateEvent")}} 对象。

## 示例

开发人员不会手动使用此构造函数。当由于 {{domxref("Navigation.navigate_event", "navigate")}} 事件触发而调用处理器时，会构造一个新的 `NavigateEvent` 对象。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [现代客户端路由：导航 API](https://developer.chrome.google.cn/docs/web-platform/navigation-api/)
- [导航 API 说明](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola 的[导航 API 在线演示](https://gigantic-honored-octagon.glitch.me/)
