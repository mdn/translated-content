---
title: HTMLIFrameElement：contentWindow 属性
slug: Web/API/HTMLIFrameElement/contentWindow
l10n:
  sourceCommit: fc169d56cd8590bdba25d61c5d4ba221e4c64d7c
---

{{APIRef("HTML DOM")}}

**`contentWindow`** 属性返回 [HTMLIFrameElement](/zh-CN/docs/Web/API/HTMLIFrameElement) 的 [Window](/zh-CN/docs/Web/API/Window) 对象。

该属性只读。

## 值

一个 [Window](/zh-CN/docs/Web/API/Window) 对象。

## 描述

访问由 `contentWindow` 返回的 {{domxref("Window")}} 受到[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)规定的规则约束，这意味着，如果与 iframe 父级同源，那么父级页面可以访问 iframe 的文档以及内部 DOM，如果它们跨源，则父页面对窗口属性的访问权限极其有限。有关详细信息，请参阅[跨源脚本 API 访问](/zh-CN/docs/Web/Security/Same-origin_policy#跨源脚本_api_访问)。

通过与消息事件的 {{domxref("MessageEvent.source", "source")}} 属性进行比较，还可以使用该属性找出是哪个 iframe 页面发送了 {{domxref("Window.postMessage()")}}。

## 示例

### 访问 iframe 的文档

此示例修改了文档主体的 `style` 属性。

请注意，这只有在 iframe 的窗口与其父窗口同源的情况下才有效：否则，尝试访问 `contentWindow.document` 会出现异常。

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// 这将使文档中的第一个 iframe 变成蓝色。
```

### 将消息源映射到 iframe

此示例可在包含多个 iframe 的页面中运行，其中任何一个都可以使用 {{domxref("Window.postMessage()")}} 发送信息。当页面接收到消息时，就会知道哪个 iframe 包含发送消息的窗口。

为了做到这一点，当接收到消息时，页面首先检查消息是否来自预期的源，然后通过比较消息事件的 {{domxref("MessageEvent.source", "source")}} 属性和 iframe 的 `contentWindow` 属性来找到消息来自哪个 iframe。

```js
const expectedOrigin = "https://example.org";

const iframes = Array.from(document.querySelectorAll("iframe"));

window.addEventListener("message", (e) => {
  if (e.origin !== expectedOrigin) return;

  const sourceIframe = iframes.find(
    (iframe) => iframe.contentWindow === e.source,
  );

  console.log(sourceIframe);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
