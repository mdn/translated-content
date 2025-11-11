---
title: NavigateEvent：intercept() 方法
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigateEvent")}} 接口的 **`intercept()`** 方法拦截此导航，将其转变为到{{domxref("NavigationDestination.url", "目标", "", 1)}} URL 的同一文档导航。

## 语法

```js-nolint
intercept()
intercept(options)
```

### 参数

- `options` {{optional_inline}}
  - : 包含以下属性的选项对象：
    - `handler` {{optional_inline}}
      - : 定义导航处理行为的回调函数。这通常用于处理资源获取并返回 promise。
    - `focusReset` {{optional_inline}}
      - : 定义导航的焦点行为。这可能接受以下值之一：
        - `after-transition`
          - : 一旦处理器返回的 promise 兑现，浏览器将聚焦具有 [`autofocus`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/autofocus) 属性的第一个元素，或者如果没有元素设置 `autofocus`，则聚焦 {{htmlelement("body")}} 元素。这是默认值。
        - `manual`
          - : 禁用默认行为。
    - `scroll` {{optional_inline}}
      - : 定义导航的滚动行为。这可能接受以下值之一：
        - `after-transition`
          - : 允许浏览器处理滚动，例如，如果 URL 包含片段，则滚动到相关片段标识符；如果重新加载页面或重新访问历史记录中的页面，则将滚动位置恢复到上次的同一位置。这是默认值。
        - `manual`
          - : 禁用默认行为。

### 返回值

无（`undefined`）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果当前 {{domxref("Document")}} 尚未激活，或者导航已被取消，则抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果事件是由 {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} 调用而不是用户代理派发的，或者无法拦截导航（即 {{domxref("NavigateEvent.canIntercept")}} 为 `false`），则抛出此异常。

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

### 使用 `focusReset` 和 `scroll`

可以通过查询 {{domxref("NavigateEvent.formData")}} 属性来检测表单提交。以下示例将任何表单提交转换为保留在当前页面上的表单提交。在这种情况下，你不会更新 DOM，因此你可以使用 `focusReset` 和 `scroll` 取消任何默认的重置和滚动行为。

```js
navigation.addEventListener("navigate", (event) => {
  if (event.formData && event.canIntercept) {
    // 用户向同域的 URL 提交了一个 POST 表单（如果 canIntercept 为 false，则该事件仅提供信息：你无法拦截此请求，尽管你仍然可以调用 .preventDefault() 来完全停止它）。

    event.intercept({
      // 由于我们不会在此导航中更新 DOM，因此不允许焦点或滚动重置：
      focusReset: "manual",
      scroll: "manual",
      async handler() {
        await fetch(event.destination.url, {
          method: "POST",
          body: event.formData,
        });
        // 你可以再次使用 {history: 'replace'} 导航来更改此处的 URL，这可能表示“完成”
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
